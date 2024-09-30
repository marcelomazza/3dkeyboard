import React, { useEffect } from 'react';
import * as THREE from 'three';

const Keyboard3D = () => {
  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000); // Adjusted camera aspect ratio
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(800, 600); // Fixed size for the 3D canvas
    document.getElementById('keyboard-3d').appendChild(renderer.domElement);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft ambient light
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Define keyboard layout (3D grid of keys) with adjusted spacing
    const rows = 3;
    const columns = 10;
    const keyWidth = 1;
    const keyHeight = 0.3;

    const keyGeometry = new THREE.BoxGeometry(keyWidth, keyHeight, keyWidth);
    const keyMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const key = new THREE.Mesh(keyGeometry, keyMaterial);
        key.position.x = col * (keyWidth + 0.5);  // Increased spacing between keys
        key.position.y = -row * (keyWidth + 0.5); // Increased spacing between rows
        key.position.z = 0;
        scene.add(key);
      }
    }

    // Adjusted camera position for better visibility
    camera.position.z = 12;  // Move camera closer for better view
    camera.position.y = 3;   // Slightly higher view of the keyboard

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Clean up on unmount
    return () => {
      document.getElementById('keyboard-3d').removeChild(renderer.domElement);
    };
  }, []);

  return <div id="keyboard-3d" style={{ width: '800px', height: '600px', margin: '0 auto' }}></div>;
};

export default Keyboard3D;
