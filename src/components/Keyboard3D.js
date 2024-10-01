import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';

const Key = ({ position, color, label, width = 1 }) => (
  <group position={position}>
    <mesh>
      <boxGeometry args={[width, 1, 0.5]} />
      <meshStandardMaterial color={color} />
    </mesh>
    <Text
      position={[0, 0.26, 0.3]}
      fontSize={0.3}
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
          position={[key.x - 4.5, -key.y, 0]}
          color={key.color}
          label={key.label}
          width={key.width}
        />
      ))}
    </group>
  );
};

const Keyboard3D = ({ layout }) => {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <KeyboardModel layout={layout} />
      <OrbitControls enablePan={false} />
    </Canvas>
  );
};

export default Keyboard3D;
