'use client';

import { usePathname } from "next/navigation";
import Image from "next/image";
import { imageLoader } from "@/app/util/imageLoader";
import { useScreenSize } from "../useScreenSize/useScreenSize";

export const Background = () => {
    const pathname = usePathname();
    let path = pathname.split('/')[1];
    path = path ? path : 'home';
    const devices = {
        mobile: "(max-width: 480px)",
        tablet: "(480px < width <= 1024px)", 
        desktop: "(1024px < width)"
    }

    const screenType = useScreenSize({devices, defaultValue: 'desktop'});

    return (
        <Image
            loader={imageLoader} 
            src={`/assets/${path}/background-${path}-${screenType}.jpg`}
            alt="background-image"
            fill={true}
            sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={100}
            priority={true}
            style={{
                objectFit: 'cover',
                zIndex: '-1'
            }}
        />
    )
}