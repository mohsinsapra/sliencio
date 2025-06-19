import styles from './asthetics.module.scss';
import cx from 'classnames';
import { ProductNo } from '../product-no/product-no';

export interface AstheticsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Asthetics = ({ className }: AstheticsProps) => {
    return (
        <div className={cx(styles.root, className)}>
            <div className={styles.div5}>
                <h2 className={styles.header6}>
                    AESTHETICS 
                    <br />
                    FOR AN
                    <br />
                    EVER-CHANGING
                    <br />
                    CONTEXT
                </h2>
                <ProductNo />
            </div>
            <div className={styles.div1}>
                <h2 className={styles.header4}></h2>
                <div className={styles.div4}>
                    <button>Button</button>
                    <button>Button</button>
                    <button>Button</button>
                </div>
                <h2 className={styles.header4}>VISUAL LANGUAGES #02</h2>
            </div>
            <div className={styles.div1}>
                <p className={styles.p2}>
                    NEW VISUAL LANGUAGESADAPT TO SCREENS.ESPECIALLY MOBILE PHONES, FOR A LONG TIME
                    NOW.A BRAND IS NO LONGER JUST A LOGO. IN FACT, THELOGO HAS BECOME PART OF THE
                    BACKGROUND ANDIS NO LONGER THE KEY OF IDENTITY. IT IS
                    ESSENTIALTOHAVEADEFINEDANDRECOGNISABLEPERSONALITY, WHICH ALLOWS ONE TO CREATE
                    AUNIQUE UNIVERSE.
                </p>
                <p className={styles.p3}>
                    WE GENERATE VISUAL SYSTEMS THAT TRANSMITBRAND VALUES IN A LOGICAL AND DIRECT
                    WAY. EACHORGANISATION HAS ITS OWN CONTEXT AND ITS OWNGOALS, SO WE UNDERSTAND
                    THAT THE AESTHETICSOLUTION FORDIFFERENT.EACH COMPANYSHOULDBE
                </p>
                <p className={styles.p4}>
                    DESIGN IS OUR TOOL TO SYNTHESISE AND
                    TRANSMITANORGANISATION&apos;SIDENTITY.WESTRONGLYBELIEVE IN THE TRANSFORMATIVE
                    CAPACITY OFDESIGN. FOR US. TYPOGRAPHY IS ONE OF THE MAJORELEMENTS FOR BRAND
                    CREATION, SINCE IT VISUALLYCRYSTALLISES ITS ENTIRE IDENTITY.
                </p>
            </div>
        </div>
    );
};
