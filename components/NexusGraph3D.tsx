"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Text, Stars, Float } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

type NodeDef = {
  position: [number, number, number];
  label: string;
  accent?: boolean;
};

const NODES: NodeDef[] = [
  { position: [-2.8, 1.3, -0.5], label: "Frontend", accent: true },
  { position: [-2.6, -1.3, 0.7], label: "Telegram Bots", accent: true },
  { position: [2.8, 1.3, 0.7], label: "AI Automation", accent: true },
  { position: [2.6, -1.3, -0.5], label: "Prompt Eng.", accent: true },
];

const CENTER: [number, number, number] = [0, 0, 0];

function Node({ position, label, accent }: NodeDef) {
  const [hovered, setHovered] = useState(false);

  return (
    <group 
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh scale={hovered ? 1.5 : 1}>
        <sphereGeometry args={[0.09, 64, 64]} />
        <meshStandardMaterial
          color={accent ? "#5EEAD4" : "#23232E"}
          emissive={accent ? "#5EEAD4" : "#000000"}
          emissiveIntensity={hovered ? 3.0 : (accent ? 2.0 : 0)}
          toneMapped={false}
        />
      </mesh>
      <Text
        position={[0, -0.35, 0]}
        fontSize={0.16}
        color={hovered ? "#ffffff" : "#8B8B99"}
        anchorX="center"
        anchorY="middle"
        toneMapped={false}
      >
        {label}
      </Text>
    </group>
  );
}

function CenterNode() {
  const ref = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.4;
      ref.current.rotation.x += delta * 0.2;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.5;
    }
  });

  return (
    <group position={CENTER}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[0.3, 1]} />
        <meshStandardMaterial
          color="#7C5CFC"
          emissive="#7C5CFC"
          emissiveIntensity={2}
          wireframe
          toneMapped={false}
        />
      </mesh>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.15, 0]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={1.5}
          toneMapped={false}
        />
      </mesh>
      <Text
        position={[0, -0.55, 0]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.1}
        toneMapped={false}
      >
        NEXUS
      </Text>
    </group>
  );
}

function Links() {
  const points = useMemo(
    () => NODES.map((n) => [CENTER, n.position] as [number, number, number][]),
    []
  );

  return (
    <>
      {points.map((pair, i) => (
        <Line
          key={i}
          points={pair}
          color="#7C5CFC"
          transparent
          opacity={0.3}
          lineWidth={1.5}
        />
      ))}
    </>
  );
}

function Scene() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      // Parallax effect based on mouse position
      const targetX = (state.pointer.x * Math.PI) / 10;
      const targetY = (state.pointer.y * Math.PI) / 10;
      
      group.current.rotation.y += (targetX - group.current.rotation.y) * 0.05;
      group.current.rotation.x += (-targetY - group.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={group}>
      <ambientLight intensity={0.6} />
      <pointLight position={[3, 3, 3]} intensity={40} color="#7C5CFC" />
      <pointLight position={[-3, -2, 2]} intensity={20} color="#5EEAD4" />
      <Stars radius={50} depth={20} count={1500} factor={3} saturation={0} fade speed={1} />
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <Links />
        <CenterNode />
        {NODES.map((n) => (
          <Node key={n.label} {...n} />
        ))}
      </Float>
      
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={0.5} mipmapBlur luminanceSmoothing={0.9} intensity={2.0} />
      </EffectComposer>
    </group>
  );
}

export default function NexusGraph3D() {
  return (
    <div className="h-[320px] w-full md:h-[450px]">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }} dpr={[1, 2]}>
        <Scene />
      </Canvas>
    </div>
  );
}
