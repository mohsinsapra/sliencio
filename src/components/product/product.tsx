import styles from './product.module.scss';
import cx from 'classnames';

export interface ProductProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Product = ({ className }: ProductProps) => {
    return (
        <div className={cx(styles.root, className)}>
            <div className={styles.div1}>
                <div className={styles.div3}>
                    <h1>#0 1</h1>
                    <h2 className={styles['vertical-right']}>REFRESH YOUR BUSINESS IDENTITY</h2>
                </div>
                <div className={styles.div2}>
                    <h2 className={styles['vertical-left']}>BOLD THINKING AS A BASIS</h2>
                    <div className={styles.div4}>
                        <div>
                            <h1>1</h1>
                            <p className={styles.p1}>
                                FORINCOFOR MISMINNOV ATIONCUSTO MIZATIONTHINKINGD IFFERENTIATIONACC
                                URATECREEN ORIENTEDBORING PROJECTS330ML 85%91%92%71% 87%1%60%
                            </p>
                        </div>
                        <div>
                            <h1>2</h1>
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
