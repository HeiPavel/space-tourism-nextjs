'use client';

import Link from "next/link";
import { navigation } from "@/app/util/data";
import { usePathname } from "next/navigation";
import globalStyles from "../../styles/global.module.scss";

export const NavLinks = () => {
    const {main} = navigation;
    const pathname = usePathname();
    const path = pathname.split('/')[1];

    return (
        <>
            {main.map((link, index) => (<Link className={path === link.path ? globalStyles.active : ''} key={index} href={`/${link.path}`}><span>{`0${index}`}</span>{link.path ? link.path.toUpperCase() : 'HOME'}</Link>))}
        </>
    );
}