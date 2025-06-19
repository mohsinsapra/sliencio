import classNames from 'classnames';
import styles from './_index.module.scss';
import { LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import commonStyles from '~/styles/common-styles.module.scss';
import { getUrlOriginWithPath } from '~/utils';
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

export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

export default function HomePage() {
    return (
        <div className={styles.root}>
            <ModelCanvas />
            <Intro className={`${styles0['intro-section']} intro-section`} />
            <Caution />
            <BoldThinking />
            <Product />
            <Asthetics />
            <Product />
            <Projects />
            <Product />
            <Stories />
            <Product />
            <Brands />
            <ThankYou />
        </div>
    );
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
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
            tagName: 'link',
            rel: 'canonical',
            href: data?.canonicalUrl,
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
