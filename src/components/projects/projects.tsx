import { ProductNo } from '../product-no/product-no';
import styles from './projects.module.scss';
import cx from 'classnames';

export interface ProjectsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Projects = ({ className }: ProjectsProps) => {
    return (
        <div className={cx(styles.root, className)}>
            <ProductNo />
            <div className={styles.div5}>
                <div className={styles.div7}>
                    <div className={styles.div6}>
                        <h2 className={styles.no}>#03</h2>
                        <h2 className={styles.no}>#03</h2>
                    </div>
                    <h2 className={styles.header6}>MOTION IS A MUST DSFSSD</h2>
                </div>
            </div>
            <div className={styles.div8}>
                <div className={styles.div1}>
                    <button>Button</button>
                    <h2 className={styles.header4}>VISUAL LANGUAGES #02</h2>
                    <h2 className={styles.header4}></h2>
                </div>
                <div className={styles.div1}>
                    <p className={styles.p2}>
                        NEW VISUAL LANGUAGESADAPT TO SCREENS.ESPECIALLY MOBILE PHONES, FOR A LONG
                        TIME NOW.A BRAND IS NO LONGER JUST A LOGO. IN FACT, THELOGO HAS BECOME PART
                        OF THE BACKGROUND ANDIS NO LONGER THE KEY OF IDENTITY. IT IS
                        ESSENTIALTOHAVEADEFINEDANDRECOGNISABLEPERSONALITY, WHICH ALLOWS ONE TO
                        CREATE AUNIQUE UNIVERSE.
                    </p>
                    <p className={styles.p3}>
                        WE GENERATE VISUAL SYSTEMS THAT TRANSMITBRAND VALUES IN A LOGICAL AND DIRECT
                        WAY. EACHORGANISATION HAS ITS OWN CONTEXT AND ITS OWNGOALS, SO WE UNDERSTAND
                        THAT THE AESTHETICSOLUTION FORDIFFERENT.EACH COMPANYSHOULDBE
                    </p>
                </div>
            </div>
        </div>
    );
};
