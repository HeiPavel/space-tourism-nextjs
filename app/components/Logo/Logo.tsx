import Image from "next/image";
import logo from '../../../public/assets/icons/logo.svg';
import styles from './logo.module.scss';

export const Logo = () => {
    return (
        <div className={styles.logo_container}>
            <Image 
                src={logo}
                alt="logo"
                fill={true}
            />
        </div>
    );
}