import classNames from 'classnames';
import styles from './_index.module.scss';
import { LinksFunction, MetaFunction } from '@remix-run/node';
import commonStyles from '~/styles/common-styles.module.scss';
import { Intro } from '../../../src/components/intro/intro';
import { Caution } from '../../../src/components/caution/caution';
import { BoldThinking } from '../../../src/components/bold-thinking/bold-thinking';
import { Product } from '../../../src/components/product/product';
import { Asthetics } from '../../../src/components/asthetics/asthetics';
import { Projects } from '../../../src/components/projects/projects';
import { Stories } from '../../../src/components/stories/stories';
import { Brands } from '../../../src/components/brands/brands';
import { ThankYou } from '../../../src/components/thank-you/thank-you';
import { ModelCanvas } from '../../../src/components/model-canvas/model-canvas';
import introStyles from '../../../src/components/intro/intro.module.scss';
import styles0 from './route.module.scss';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSceneStore } from '~/store/useSceneStore';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

// Layers
// Canvas = 0
// Top layer = 1000
// Bottom layer = -1000

gsap.registerPlugin(useGSAP,ScrollSmoother, ScrollTrigger );
export default function HomePage() {
    useGSAP(() => {
 let smoother = ScrollSmoother.create({
 wrapper: '#smooth-wrapper' ,
content: '#smooth-content',
smooth: 1,
smoothTouch: 0.1,
effects: true,
})
    });
    return (
        <div className={`${styles.root}`} id="smooth-wrapper"> 
        {/* Remove this to make z index work */}
            <ModelCanvas className={classNames('model-canvas', styles0.modelCanvas)} />

{/* <div id="smooth-wrapper">
  <div id="smooth-content"> */}
            <div className="body" id="smooth-content">

                <Intro className={styles0['intro-section']} />
                <Caution />
                <BoldThinking />

                <Product className={'product1-section'} />
      
                <Asthetics />

                <Product className={'product2-section'} />
                <Projects />
                <Product />
                <Stories />
                <Product />
                <Brands />
                <ThankYou />
            {/* </div>
        </div> */}
            </div>
        </div>
    );
}

export const meta: MetaFunction = () => {
    const title = 'Website Starter';
    const description = 'Welcome to the Website Starter';
    const imageUrl = 'https://website-starter.com/og-image.png';

    return [
        { title },
        {
            name: 'description',
            content: description,
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:image',
            content: imageUrl,
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:title',
            content: title,
        },
        {
            name: 'twitter:description',
            content: description,
        },
        {
            name: 'twitter:image',
            content: imageUrl,
        },
    ];
};

export const links: LinksFunction = () => {
    return [
        {
            rel: 'icon',
            href: '/favicon.ico',
            type: 'image/ico',
        },
    ];
};
