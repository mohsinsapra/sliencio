import styles from './intro.module.scss';
import cx from 'classnames';
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";


import { useRef } from 'react';




export interface IntroProps {
    className?: string;
}


gsap.registerPlugin(useGSAP);

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Intro = ({ className }: IntroProps) => {
    useGSAP(() => {
    gsap.to('.scroll-down', {
      opacity: 0,
      duration: 0.7,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true,
    });
  });
    return (
        <div className={cx(styles.root, className)}>
            <h2 className={styles.header6}>SILENCIO ® VISUAL LANGUAGES</h2>
            <div className={styles.div1}>
                <h1 className={styles.header3}>
                    DIGITAL
                    <br />
                    PRODUCTS
                </h1>
                <h2 className={styles.header5}>FOR CONTEMPORARY * BRANDS</h2>
                <h5 className={styles.header2}>
                    WE CRAFT UNIQUE, INNOVATIVE AND MEMORABLE DIGITAL EXPERIENCES THAT STRIVE TO
                    PUSH THE BOUNDARIES AND <br /> LEAVE A LASTING IMPACT THROUGH DESIGN AND
                    INTERACTIVITY
                </h5>
            </div>
            <h4 className={`${styles.header7} scroll-down`} >SCROLL TO DISCOVER</h4>
        </div>
    );
};
