import styles from './product-no.module.scss';
import cx from 'classnames';

export interface ProductNoProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ProductNo = ({ className }: ProductNoProps) => {
    return (
        <div className={cx(styles.root, className)}>
            <div className={styles.div3}>
                <h1 className={styles.header3}>#0 1</h1>
            </div>
            <div className={styles.div2}>
                <h1 className={styles.header2}>VISUAL</h1>
                <h1 className={styles.header1}>LANGUAGES</h1>
            </div>
        </div>
    );
};
