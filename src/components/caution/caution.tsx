import styles from './caution.module.scss';
import cx from 'classnames';

export interface CautionProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Caution = ({ className }: CautionProps) => {
    return (
        <div className={cx(styles.root, className)}>
            <div className={styles.div1}>
                <h2 className={styles.header5}>DIGITAL BRANDING #01</h2>
                <h2 className={styles.header4}>VISUAL LANGUAGES #02</h2>
                <h2 className={styles.header3}>INTERACTIVE WEBSITES #03</h2>
                <h2 className={styles.header2}>DISRUPTIVE COMM. #04</h2>
            </div>
            <h2 className={styles.header6}>
                ®SILENCIO IS A DESIGN STUDIO FOCUSED ON DIGITAL VISUAL LANGUAGES FOR DARING  BRANDS 
                OUTSIDE  THE  A  NORM
            </h2>
            <div className={styles.div1}>
                <p className={styles.p2}>
                    This is a placeholder paragraph. It is here to provide structure while you work
                    on your content. You can replace this text with your own words once you are
                    ready. Placeholders like this are great for visualizing the layout and flow of
                    your document before finalizing the content.
                </p>
                <p className={styles.p3}>
                    This is a placeholder paragraph. It is here to provide structure while you work
                    on your content. You can replace this text with your own words once you are
                    ready. Placeholders like this are great for visualizing the layout and flow of
                    your document before finalizing the content.
                </p>
            </div>
            <div className={styles.div3}>
                <div className={styles.div2}>
                    <h1 className={styles.header7}>Photo</h1>PLEASE READ CAREFULLY
                </div>
            </div>
        </div>
    );
};
