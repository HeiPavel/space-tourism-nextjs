'use client';

import Link from "next/link";
import { navigation } from "@/app/util/data";
import { usePathname } from "next/navigation";
import globalStyles from "../../styles/global.module.scss";
import type { openProp } from "../MobileNav/MobileNav";

export const NavLinks = ({setOpen}: openProp | {setOpen: null}) => {
    const {main} = navigation;
    const pathname = usePathname();
    const path = pathname.split('/')[1];

    const links = () => {
        if (setOpen) {
            return (
                <>
                    {main.map((link, index) => 
                        (<Link  
                            key={index} 
                            href={`/${link.path}`}
                            onClick={() => setOpen(false)}
                        >
                            <span>{`0${index}`}</span>{link.path ? link.path.split('/')[0].toUpperCase() : 'HOME'}
                        </Link>))}
                </>
            );
        } else {
            return (
                <>
                    {main.map((link, index) => 
                        (<Link 
                            className={link.path.split('/')[0] === path ? globalStyles.active : ''} 
                            key={index} 
                            href={`/${link.path}`}
                        >
                            <span>{`0${index}`}</span>{link.path ? link.path.split('/')[0].toUpperCase() : 'HOME'}
                        </Link>))}
                </>
            );
        }
    }

    return links();
}