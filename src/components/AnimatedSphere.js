import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function AnimatedSphere() {
  return (
    <Sphere args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#8352FF"
        distort={0.4}
        speed={1.5}
        roughness={0.6}
      />
    </Sphere>
  );
}
