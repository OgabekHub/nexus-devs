"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Text } from "@react-three/drei";
import * as THREE from "three";

type NodeDef = {
  position: [number, number, number];
  label: string;
  accent?: boolean;
};

const NODES: NodeDef[] = [
  { position: [-2.6, 1.1, -0.4], label: "Frontend", accent: true },
  { position: [-2.6, -1.1, 0.5], label: "Telegram Bots", accent: true },
  { position: [2.6, 1.1, 0.5], label: "AI Automation", accent: true },
  { position: [2.6, -1.1, -0.4], label: "Prompt Eng.", accent: true },
];

const CENTER: [number, number, number] = [0, 0, 0];

function Node({ position, label, accent }: NodeDef) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.09, 24, 24]} />
        <meshStandardMaterial
          color={accent ? "#5EEAD4" : "#23232E"}
          emissive={accent ? "#5EEAD4" : "#000000"}
          emissiveIntensity={accent ? 0.4 : 0}
        />
      </mesh>
      <Text
        position={[0, -0.28, 0]}
        fontSize={0.16}
        color="#8B8B99"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
}

function CenterNode() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <group position={CENTER}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[0.22, 0]} />
        <meshStandardMaterial
          color="#7C5CFC"
          emissive="#7C5CFC"
          emissiveIntensity={0.6}
          wireframe
        />
      </mesh>
      <Text
        position={[0, -0.42, 0]}
        fontSize={0.18}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
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
          opacity={0.35}
          lineWidth={1}
        />
      ))}
    </>
  );
}

function Scene() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.25;
    }
  });

  return (
    <group ref={group}>
      <ambientLight intensity={0.6} />
      <pointLight position={[3, 3, 3]} intensity={40} color="#7C5CFC" />
      <pointLight position={[-3, -2, 2]} intensity={20} color="#5EEAD4" />
      <Links />
      <CenterNode />
      {NODES.map((n) => (
        <Node key={n.label} {...n} />
      ))}
    </group>
  );
}

export default function NexusGraph3D() {
  return (
    <div className="h-[320px] w-full md:h-[380px]">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
