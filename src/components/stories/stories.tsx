import { ProductNo } from '../product-no/product-no';
import styles from './stories.module.scss';
import cx from 'classnames';

export interface StoriesProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Stories = ({ className }: StoriesProps) => {
    return (
        <div className={cx(styles.root, className)}>
            <div className={styles.div5}>
                <ProductNo />
                <h2 className={styles.header6}>
                    STORIES WE
                    <br />
                    BELIEVE IN
                </h2>
            </div>
            <div className={styles.div1}>
                <div className={styles.div6}>
                    <h2 className={styles.header7}>
                        ORIGINAL
                        <br />
                        SATISFACTION
                    </h2>
                    <div className={styles.div8}>
                        <div className={styles.div9} />
                    </div>
                </div>
                <div className={styles.div7}>
                    <p className={styles.p3}>
                        NOWADAYS, BRAND COMMUNICATION INVOLVES NOT ONLY TRANSMITTINGINFORMATION, BUT
                        ALSO GETTING INVOLVED IN CONVERSATIONS AND BEINGOPEN TO RECEIVING COMMENTS
                        AND FEEDBACK FROM THEIR AUDIENCE INORDER TO ADAPT AND EVOLVE. SOMETIMES, IT
                        IS NECESSARY TO TAKE CERTAIN RISKS TO BE REALLYCONSISTENT WITH OUR WAY OF
                        SEEING REALITY. WE DON&apos;T LIKE BORINGPROJECTS, WE WANT TO AMAZE PEOPLE
                        AND MAKE THEM SMILE.BRANDS THAT DARE TO BE CREATIVE, GET OUT OF THE
                        MAINSTREAM ANDCHALLENGE THE ESTABLISHED NORMS ARE THE ONES THAT STAND OUT
                        ANDATTRACT ATTENTION. CREATIVITY AND ORIGINALITY ARE THE KEYS TO BEINGIN THE
                        SPOTLIGHT IN ANY FIELD.BEING TOO SOLEMN AND SERIOUS NO LONGER MAKES A
                        BRANDASPIRATIONAL OR EXCLUSIVE.
                    </p>
                </div>
            </div>
        </div>
    );
};
