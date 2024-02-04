'use client';

import { usePathname } from "next/navigation";

export const Title = () => {
    const pathname = usePathname();
    const path = pathname.split('/')[1];

    return (
        <h2 style={{color: 'white'}}>{path.toUpperCase()}</h2>
    );
}