import styles from './bold-thinking.module.scss';
import cx from 'classnames';
import { ProductNo } from '../product-no/product-no';

export interface BoldThinkingProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const BoldThinking = ({ className }: BoldThinkingProps) => {
    return (
        <div className={cx(styles.root, className)}>
            <ProductNo className={styles.productNo} />
            <h2 className={styles.header6}>
                BOLD
                <br />
                THINKINGET AS
                <br />A BASIS
            </h2>
            <div className={cx(styles.div1, styles['middle-title'])}>
                <h2 className={styles.header4}>VISUAL LANGUAGES #02</h2>
                <h2 className={styles.header4}>REFRESH YOUR BUSINESS IDENTITY</h2>
                <div className={styles.div4}>
                    <button>Button</button>
                    <button>Button</button>
                    <button>Button</button>
                </div>
            </div>
            <div className={styles.div1}>
                <p className={styles.p3}>
                    This is a placeholder paragraph. It is here to provide structure while you work
                    on your content. You can replace this text with your own words once you are
                    ready. Placeholders like this are great for visualizing the layout and flow of
                    your document before finalizing the content.
                </p>
                <p className={styles.p2}>
                    This is a placeholder paragraph. It is here to provide structure while you work
                    on your content. You can replace this text with your own words once you are
                    ready. Placeholders like this are great for visualizing the layout and flow of
                    your document before finalizing the content.
                </p>
            </div>
        </div>
    );
};
