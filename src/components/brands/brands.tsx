import styles from './brands.module.scss';
import cx from 'classnames';

export interface BrandsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Brands = ({ className }: BrandsProps) => {
    return (
        <div className={cx(styles.root, className)}>
            <div className={styles.div5}>
                <div className={styles.div7}>
                    <div className={styles.div6}>
                        <h2 className={styles.no}>BRAVE CLIENTS</h2>
                        <h2 className={styles.no}>BE UNIQUE</h2>
                        <h2 className={styles.no}>BORING</h2>
                    </div>
                    <h2 className={styles.header6}>DARING BRANDS</h2>
                    <h2 className={styles.header6}>WILLING</h2>
                    <h2 className={styles.header6}>TO FIND</h2>
                    <h2 className={styles.header6}>THER OWN PATH</h2>
                </div>
            </div>
            <div className={styles.div8}>
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
            <div className={styles.div8}>
                <img
                    src="https://static.wixstatic.com/media/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg/v1/fill/w_600,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg"
                    alt=""
                    className={styles.img3}
                />
                <img
                    src="https://static.wixstatic.com/media/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg/v1/fill/w_600,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg"
                    alt=""
                    className={styles.img4}
                />
                <img
                    src="https://static.wixstatic.com/media/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg/v1/fill/w_600,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg"
                    alt=""
                    className={styles.img5}
                />
                <img
                    src="https://static.wixstatic.com/media/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg/v1/fill/w_600,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg"
                    alt=""
                    className={styles.img6}
                />
            </div>
            <div className={styles.div9}>
                <h2 className={styles.header7}>Heading 2</h2>
            </div>
        </div>
    );
};
