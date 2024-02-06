'use client';

import { usePathname } from "next/navigation";
import type { PageTitle } from "@/app/util/data";
import { title } from "@/app/util/data";
import styles from './title.module.scss';

export const Title = () => {
    const pathname = usePathname();
    const path = pathname.split('/')[1];
    const {id, content} = title[path as keyof PageTitle];

    return (
        <h2 className={styles.page_title}><span>{id}</span>{content}</h2>
    );
}