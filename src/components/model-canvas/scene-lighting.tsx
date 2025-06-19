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


// Enhanced Lighting Component
export const SceneLighting: React.FC = () => {
  return (
    <>
      {/* Ambient light for overall illumination */}
      <ambientLight intensity={0.3} color="#ffffff" />
      
      {/* Main directional light (like sun) */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        color="#ffffff"
        castShadow
      />
      
      {/* Fill light from opposite side */}
      <directionalLight
        position={[-5, 5, -5]}
        intensity={0.5}
        color="#4a90ff"
      />
      
      {/* Point lights for accents */}
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#ff6b6b" />
      <pointLight position={[-5, -5, 5]} intensity={0.6} color="#4ecdc4" />
      <pointLight position={[0, 8, -5]} intensity={0.4} color="#45b7d1" />
      
      {/* Spotlight for dramatic effect */}
      <spotLight
        position={[0, 10, 0]}
        intensity={0.5}
        angle={Math.PI / 4}
        penumbra={0.5}
        color="#ffeaa7"
      />
    </>
  );
};