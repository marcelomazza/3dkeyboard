import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';

const Key = ({ position, color, label }) => (
  <group position={position}>
    <mesh>
      <boxGeometry args={[0.9, 0.9, 0.5]} />
      <meshStandardMaterial color={color} />
    </mesh>
    <Text
      position={[0, 0, 0.26]}
      fontSize={0.5}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      {label}
    </Text>
  </group>
);

const KeyboardModel = ({ layout }) => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = -Math.PI / 6; // Tilt the keyboard
    }
  });

  return (
    <group ref={groupRef}>
      {layout.map((key) => (
        <Key
          key={key.id}
          position={[key.x - 5, -key.y + 1, 0]}
          color={key.color}
          label={key.label}
        />
      ))}
    </group>
  );
};

const Keyboard3D = ({ layout }) => {
  return (
    <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <KeyboardModel layout={layout} />
      <OrbitControls enablePan={false} />
    </Canvas>
  );
};

export default Keyboard3D;
