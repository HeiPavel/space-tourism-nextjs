'use client';

import { NavLinks } from "../NavLinks/NavLinks";
import { Button } from "@mui/material";
import Image from "next/image";
import closeIcon from "../../../public/assets/icons/icon-close.svg";
import globalStyles from "../../styles/global.module.scss";
import styles from './mobile-nav.module.scss';
import { Dispatch } from "react";

export type openProp = {
    setOpen: Dispatch<boolean>
}

export const MobileNav = ({setOpen}: openProp) => {
    return (
        <div className={`${globalStyles.blur} ${styles.nav_mobile}`}>
            <Button className="close-button" onClick={() => setOpen(false)}>
                <Image 
                    src={closeIcon}
                    alt="close icon"
                    width={19}
                    height={20}
                />
            </Button>
            <nav>
                <NavLinks setOpen={setOpen}/>
            </nav>
        </div>
    );
}