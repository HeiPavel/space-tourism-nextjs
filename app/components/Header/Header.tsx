import { NavLinks } from "../NavLinks/NavLinks";
import { Logo } from "../Logo/Logo";
import { Sidebar } from "../Sidebar/Sidebar";
import styles from "./header.module.scss";
import globalStyles from "../../styles/global.module.scss"

export const Header = () => {
    return (
        <header className={styles.header}>
            <Logo/>
            <div className={styles.line}></div>
            <nav className={`${styles.main_nav} ${globalStyles.blur} ${globalStyles.navigation}`}>
                <NavLinks setOpen={null}/>
            </nav>
            <Sidebar/>
        </header>
    );
}