"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";
import * as random from "maath/random";
import styles from "./styles.module.scss";
const Stars = () => {
  const ref = useRef<THREE.Points>(null);
  const [sphere, setSphere] = useState<Float32Array>(new Float32Array(5000));

  useEffect(() => {
    setSphere(
      new Float32Array(random.inSphere(new Float32Array(5000), { radius: 1.2 }))
    );
  }, []);

  useFrame((state, delta: number): void => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group {...({ rotation: [0, 0, Math.PI / 4] } as any)}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="black"
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className={styles["stars-canvas"]}>
      <Canvas camera={{ position: [0, 0, 1] }} style={{  height: '100dvh' }}>
        <Stars />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
