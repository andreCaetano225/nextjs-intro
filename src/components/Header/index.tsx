/* eslint-disable @next/next/no-img-element */
import { ActiveLink } from '../ActiveLink';
import styles from './styles.module.scss';
ActiveLink
export function Header(){


    return(
        <header className={styles.container}>
            <div className={styles.content}>
                <img src="./logo.svg" alt="" />
                <nav>
                   <ActiveLink href="/" activeClassName={styles.active}>
                   <a >Home</a>
                   </ActiveLink>
                   <ActiveLink href="/posts" activeClassName={styles.active}>
                    <a >Posts</a>
                    </ActiveLink>
                </nav>
            </div>
        </header>
    );
}