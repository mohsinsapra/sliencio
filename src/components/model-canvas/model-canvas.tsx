import styles from './model-canvas.module.scss';
import cx from 'classnames';
import { Canvas } from '@react-three/fiber';
import { OrbitControls , Stars} from '@react-three/drei';
import { gsap } from "gsap";
import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { SceneLighting } from './scene-lighting';
import { FloatingRotatingObject } from './floating-objs';
import { Stats } from '@react-three/drei';
import  CameraMonitor  from './camera-monitor';
import { useSceneStore } from '~/store/useSceneStore';



gsap.registerPlugin(useGSAP,ScrollTrigger);

export interface ModelCanvasProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ModelCanvas = ({ className }: ModelCanvasProps) => {


      const boxRef = useSceneStore((state) => state.refs.box);
      const coneRef = useSceneStore((state) => state.refs.cone);

    useGSAP(() => {
        if (!boxRef?.current) return;
        if (!coneRef?.current) return;

        // const tl = gsap.timeline({
        //     scrollTrigger: {
        //   trigger: '.product1-section',
        //   start: 'top top',
        //   end: 'bottom center',
        //   pin: true,
        //   scrub: 0.5,
        //     },
        // });

        // tl.to(boxRef.current.rotation, {
        //     z: -Math.PI * 2,
        // });

        //       tl.to(boxRef.current.scale, {
        //     x: 0,
        //     y: 0,
        //     z: 0,
        // },"+=0.5");

    }, [boxRef,coneRef]);
    
    return <div className={cx(styles.root, className)}>
  <Canvas 
        className="canvas" 
        gl={{ alpha: true, preserveDrawingBuffer: true }}
        shadows
        camera={{
        position: [5.66, 2.49, 5.72],
        rotation: [-0.41, 0.74, 0.28],
        fov: 20
      }}

      >
     
        <SceneLighting />

        
        {/* Multiple 3D objects with different colors and positions */}
   <FloatingRotatingObject 
  geometry="cone" 
  color="#ff6b6b" 
  position={[-1, 0, -1]}  // top-left
  scale={1}
  rotationMultiplier={1}

/>

<FloatingRotatingObject 
  geometry="sphere" 
  color="#4ecdc4" 
  position={[1, 0, -1]}   // top-right
  scale={0.8}
  rotationMultiplier={0.8}

/>

<FloatingRotatingObject 
  geometry="cylinder" 
  color="#45b7d1" 
  position={[-1, 0, 1]}   // bottom-left
  scale={0.9}
  rotationMultiplier={1.2}
/>

<FloatingRotatingObject 
  geometry="box" 
  color="#ffeaa7" 
  position={[1, 0, 1]}    // bottom-right
  scale={0.7}
  rotationMultiplier={0.9}
    staysCentered={true}
/>



      </Canvas>

</div>;
};
