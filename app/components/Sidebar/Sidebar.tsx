'use client';

import { useState, useEffect } from "react";
import { Drawer, Button } from "@mui/material";
import { MobileNav } from "../MobileNav/MobileNav";
import Image from "next/image";
import humburger from '../../../public/assets/icons/icon-hamburger.svg';
import styles from './sidebar.module.scss';

export const Sidebar = () => {
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        const burger = document.getElementsByClassName(styles.sidebar)[0];
        open ? burger.classList.add(styles.hide) : burger.classList.remove(styles.hide);
    }, [open]);

    return (
        <div className={styles.sidebar}>
            <Button onClick={() => setOpen(true)}>
                <Image
                    src={humburger}
                    alt="humburger icon"
                    width={24}
                    height={21}
                />
            </Button>
            <Drawer anchor="right" open={open} hideBackdrop={true}>
                <MobileNav setOpen={setOpen} />
            </Drawer>
        </div>
    );
}