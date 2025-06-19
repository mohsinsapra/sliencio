import styles from './thank-you.module.scss';
import cx from 'classnames';

export interface ThankYouProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ThankYou = ({ className }: ThankYouProps) => {
    return (
        <div className={cx(styles.root, className)}>
            <div className={styles.div5}>
                <div className={styles.div7}>
                    <div className={styles.div6}>
                        <h2 className={styles.no}>THIS WEBSITE IS 24H OPEN</h2>
                        <div className={styles.div10}>
                            <h2 className={styles.no}>INSTAGRAM</h2>
                            <h2 className={styles.no}>AWWWARDS</h2>
                        </div>
                    </div>
                    <h2 className={styles.header6}>THANKS FOR</h2>
                    <h2 className={styles.header6}>YOUR VISIT!</h2>
                </div>
            </div>
            <div className={styles.div8}>
                <h2 className={styles.header6}>LET&apos;S TALK!</h2>
            </div>
        </div>
    );
};
