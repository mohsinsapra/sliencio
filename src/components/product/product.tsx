import { useSceneStore } from '~/store/useSceneStore';
import styles from './product.module.scss';
import cx from 'classnames';
import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export interface ProductProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Product = ({ className }: ProductProps) => {
    const numberRef = useRef<HTMLDivElement | null>(null);
    const cardRef = useRef<HTMLDivElement | null>(null);
    const parentRef = useRef<HTMLDivElement | null>(null);
    const desRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        if (!numberRef.current || !cardRef.current) return;

        const q = gsap.utils.selector(cardRef); // scoped selector like $(sectionRef)

        gsap.from(q('.product-no'), {
            x: '-200px',
            ease: 'none',
            stagger: 0.1,
            scrollTrigger: {
                trigger: cardRef.current,
                start: 'top 80%',
                end: 'top 10%',
                scrub: 0.1,
            },
        });
        gsap.fromTo(
            q('.product-left'),
            {
                x: '-200px',
            },
            {
                x: '0px',
                ease: 'none',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: 'top 80%',
                    end: 'top 10%',
                    scrub: 0.1,
                },
            }
        );
        gsap.fromTo(
            q('.product-right'),
            {
                x: '300px',
            },
            {
                x: '0px',
                ease: 'none',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: 'top 80%',
                    end: 'top 10%',
                    scrub: 0.1,
                },
            }
        );

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: cardRef.current,
                start: 'center center',
                markers: true,
                pin: parentRef.current,
                scrub: 0.1,
            },
        });
        tl.to(
            q('.purchased'),
            {
                width: '70%',
                ease: 'none',
            },
            '+=0.1'
        );

        tl.to(
            cardRef.current,
            {
                width: 150,
                height: 150,
                ease: 'none',
            },
            '+=1.5'
        );
        tl.fromTo(
            q('.product-left'),
            {
                x: 0,
                ease: 'none',
            },
            {
                x: -200,
                ease: 'none',
            },
            '<'
        );
        tl.fromTo(
            q('.product-right'),
            { x: 0, ease: 'none' },
            {
                x: 300,
                ease: 'none',
            },
            '<'
        );

        tl.to(
            cardRef.current,
            {
                x: '41vw',
                ease: 'none',
            },
            '+=0.5'
        );

        tl.to(
            numberRef.current,
            {
                x: -80,
                ease: 'none',
            },
            '<+0.01'
        );

                tl.fromTo(
                    desRef.current,
                    {
                        opacity: 0,
                        y: 10,
                    },
                    {
                    display: 'block',
                    opacity: 1,
                    y: 0,
                    ease: 'power1.in',
                    },
                    '+=0.5'
                );
                tl.from(
                    desRef.current,
                    {
                    y:10,
                    ease: 'power1.in',
                    },
                    '<'
                );
    }, []);

    return (
        <div className={`${cx(styles.root, className)}`} ref={parentRef}>
            <div className={`${styles.div1} product-card`} ref={cardRef}>
                <div className={styles.div3}>
                    <div className={styles.div10}>
                        <div className={styles.div7}>
                            <div ref={numberRef} className={styles.div6}>
                                <h1>#01</h1>
                                <h1>#02</h1>
                            </div>
                        </div>
                        <div className={`${styles.div11} product-left`} ref={desRef}>
                            VISUAL
                            <br />
                            LANGUAGES
                        </div>
                    </div>
                    <h2 className={`${styles['vertical-right']} product-right`}>
                        REFRESH YOUR BUSINESS IDENTITY
                    </h2>
                </div>
                <div className={styles.div2}>
                    <h2 className={`${styles['vertical-left']} product-left`}>
                        BOLD THINKING AS A BASIS
                    </h2>
                    <div className={styles.div4}>
                        <div className="product-left">
                            <div className={styles.div9}></div>

                            <p className={styles.p1}>
                                FORINCOFOR MISMINNOV ATIONCUSTO MIZATIONTHINKINGD IFFERENTIATIONACC
                                URATECREEN ORIENTEDBORING PROJECTS330ML 85%91%92%71% 87%1%60%
                            </p>
                        </div>
                        <div className="product-right">
                            <div className={`${styles.div8} purchased`}></div>

                            <p className={styles.p2}>
                                Ingredients: Concept, naming,orytelling, verbalidentity,positioning,
                                brand purpose&quot;Concepts don&apos;t have anexpiration
                                date.DIGITAL PRODUCTS FORCONTEMPORARY BRANDS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
