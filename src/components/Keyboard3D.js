import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import layoutModel from '../models/layoutModel';

const Keyboard3D = ({ layoutType = 'qwerty' }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const layout = layoutModel.getLayout(layoutType);

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Add OrbitControls for camera movement
    const controls = new OrbitControls(camera, renderer.domElement);

    // Add lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 7.5);
    scene.add(light);

    // Create a basic material for the keys
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });

    // Function to create a key (as a rounded box) and label
    const createKey = (label, width, x, y) => {
      const keyGeometry = new THREE.BoxGeometry(width, 1, 1); // Width from layout, height and depth constant
      const keyMesh = new THREE.Mesh(keyGeometry, material);
      keyMesh.position.set(x, y, 0);

      // Create text label for the key
      const loader = new FontLoader();
      loader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
        const textGeometry = new THREE.TextGeometry(label, {
          font: font,
          size: 0.3,
          height: 0.05
        });
        const textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.set(x - width / 2 + 0.2, y + 0.5, 0.6); // Adjust the label position
        scene.add(textMesh);
      });

      scene.add(keyMesh);
    };

    // Loop through the layout and add keys
    layout.forEach((key, index) => {
      const x = index * (key.width + 0.1); // Position based on key width
      const y = -key.row; // Row position for the Y axis
      createKey(key.label, key.width, x, y);
    });

    // Set camera position
    camera.position.set(0, 5, 10);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on component unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [layoutType]);

  return <div ref={mountRef} style={{ width: '100%', height: '500px' }} />;
};

export default Keyboard3D;
