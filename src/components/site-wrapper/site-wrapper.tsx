import classNames from 'classnames';
import styles from './site-wrapper.module.scss';

export interface SiteWrapperProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SiteWrapper = ({ className, children }: SiteWrapperProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.content}>{children}</div>
        </div>
    );
};
