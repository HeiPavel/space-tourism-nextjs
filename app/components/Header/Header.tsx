import { NavLinks } from "../NavLinks/NavLinks";
import { Logo } from "../Logo/Logo";
import styles from "./header.module.scss";
import globalStyles from "../../styles/global.module.scss"

export const Header = () => {
    return (
        <header className={styles.header}>
            <Logo/>
            <div className={styles.line}></div>
            <nav className={`${styles.nav} ${styles.blur} ${globalStyles.navigation}`}>
                <NavLinks/>
            </nav>
        </header>
    );
}