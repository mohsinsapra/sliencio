import { useControls } from 'leva';
import { useThree, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function CameraMonitor() {
  const { camera } = useThree();

  // Set up Leva controls once
  const valuesRef = useRef({
    "Position X": 0,
    "Position Y": 0,
    "Position Z": 0,
    "Rotation X (°)": 0,
    "Rotation Y (°)": 0,
    "Rotation Z (°)": 0
  });

  const [values, set] = useControls(() => valuesRef.current);

  // Update Leva controls on every frame
  useFrame(() => {
set({
  "Position X": parseFloat(camera.position.x.toFixed(2)),
  "Position Y": parseFloat(camera.position.y.toFixed(2)),
  "Position Z": parseFloat(camera.position.z.toFixed(2)),
  "Rotation X (°)": parseFloat(THREE.MathUtils.radToDeg(camera.rotation.x).toFixed(1)),
  "Rotation Y (°)": parseFloat(THREE.MathUtils.radToDeg(camera.rotation.y).toFixed(1)),
  "Rotation Z (°)": parseFloat(THREE.MathUtils.radToDeg(camera.rotation.z).toFixed(1)),
});

  });

  return null;
}
