import styles from './model-canvas.module.scss';
import cx from 'classnames';
import { Canvas } from '@react-three/fiber';
import { OrbitControls , Stars} from '@react-three/drei';
import { gsap } from "gsap";
import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP,ScrollTrigger);

// Reusable 3D Object Component
interface FloatingRotatingObjectProps {
  geometry: 'box' | 'sphere' | 'cylinder' | 'cone' | 'torus' | 'octahedron';
  color: string;
  position?: [number, number, number];
  scale?: number;
  rotationMultiplier?: number;
  staysCentered?: boolean; // Add this line
}

export const FloatingRotatingObject: React.FC<FloatingRotatingObjectProps> = ({ 
  geometry, 
  color, 
  position = [0, 0, 0], 
  scale = 1,
  rotationMultiplier = 1,
   staysCentered = false
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Define the reusable state objects
  const baseRotation = { x: 0, y: 0, z: 0 };
  const boostRotation = { x: 0, y: 0, z: 0 };
  const floatOffset = { y: 0, xRot: 0, zRot: 0 };
  const scrollPosition = { y: 0 };

const basePositionY = useRef(0);

  function applyCombinedTransform() {
    const mesh = meshRef.current;
    if (!mesh) return;

    // Combined rotation: base + scroll boost + floating
    mesh.rotation.x = (baseRotation.x + boostRotation.x + floatOffset.xRot) * rotationMultiplier;
    mesh.rotation.y = (baseRotation.y + boostRotation.y) * rotationMultiplier;
    mesh.rotation.z = (baseRotation.z + boostRotation.z + floatOffset.zRot) * rotationMultiplier;

    // Combined position: base + floating + scroll movement
    mesh.position.y = basePositionY.current + floatOffset.y + scrollPosition.y;
  }

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.position.set(...position);
      meshRef.current.scale.setScalar(scale);
      basePositionY.current = meshRef.current.position.y;

    }
  }, [position, scale]);

  useGSAP(() => {
    if (document.readyState !== "complete") return;
    if (!meshRef.current) return;

    // Continuous rotation
    gsap.to(baseRotation, {
      x: Math.PI * 2,
      y: Math.PI * 2,
      z: Math.PI * 2,
      duration: 20,
      ease: "none",
      repeat: -1,
      onUpdate: applyCombinedTransform
    });

    // Floating animation
    gsap.timeline({ repeat: -1, yoyo: true, ease: "sine.inOut" })
      .to(floatOffset, {
        y: 0.1,
        xRot: 0.02,
        zRot: -0.015,
        duration: 2,
      }, 0)
      .to(floatOffset, {
        xRot: -0.02,
        zRot: 0.015,
        duration: 2,
      }, 2);

    const introEl = document.querySelector('.intro-section') as HTMLElement;

    // Scroll-triggered animations
    const tl_trigger = gsap.timeline({
      scrollTrigger: {
        trigger: introEl,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        // markers: true,
      },
    });

    // Box rotates to 90 degrees on Z-axis
    tl_trigger.fromTo(boostRotation, {
      z: staysCentered ? -Math.PI : 0, // -90deg for box
    }, {
      z: staysCentered ? 0 : -Math.PI/6, // 0 for box, -30deg for others
      onUpdate: applyCombinedTransform
    });
    // Objects move up when scrolling down
if (!staysCentered) {
  tl_trigger.to(scrollPosition, {
    y:'3', // Move up 3 units
    onUpdate: applyCombinedTransform
  },"<"); // Start at the same time as rotation

  
}else{
   tl_trigger.to(scrollPosition, {
    y:'0.5', // Move up 3 units
    onUpdate: applyCombinedTransform
  },"<"); // Start at the same time as rotation

   tl_trigger.to(scrollPosition, {
    y:'0.5', // Move up 3 units
    onUpdate: applyCombinedTransform
  },"<"); // Start at the same time as rotation
}
  });

  const renderGeometry = (): React.ReactElement => {
    switch(geometry) {
      case 'box':
        return <boxGeometry />;
      case 'sphere':
        return <sphereGeometry args={[0.5, 32, 32]} />;
      case 'cylinder':
        return <cylinderGeometry args={[0.5, 0.5, 1, 32]} />;
      case 'cone':
        return <coneGeometry args={[0.5, 1, 32]} />;
      case 'torus':
        return <torusGeometry args={[0.4, 0.2, 16, 100]} />;
      case 'octahedron':
        return <octahedronGeometry args={[0.6]} />;
      default:
        return <boxGeometry />;
    }
  };

  return (
    <mesh ref={meshRef}>
      {renderGeometry()}
      <meshStandardMaterial 
        color={color} 
        roughness={0.3}
        metalness={0.1}
      />
    </mesh>
  );
};
