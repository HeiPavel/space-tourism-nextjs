'use client';

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

type ScreenType = 'desktop' | 'tablet' | 'mobile';

type imageProp = {
    src: string,
    quality?: number
}

const imageLoader = ({ src, quality }: imageProp) => {
    return `${src}?q=${quality || 75}`;
}

export const Background = () => {
    const pathname = usePathname();
    let path = pathname.split('/')[1];
    path = path ? path : 'home';
    const [screenType, setScreenType] = useState<ScreenType>('desktop');

    useEffect(() => {
        const matchDevice = [window.matchMedia("(max-width: 480px)"), window.matchMedia("(480px < width <= 1024px)"), window.matchMedia("(1024px < width)")];
        const detectDeviceSize = (): ScreenType => {
            return matchDevice[0].matches ? 'mobile' : matchDevice[1].matches ? 'tablet' : 'desktop';
        }
        const handleChange = (event: MediaQueryListEvent) => {
            if (event.matches) setScreenType(detectDeviceSize());
        }
        setScreenType(detectDeviceSize());
        matchDevice.forEach(match => match.addEventListener('change', handleChange));

        return () => {
            matchDevice.forEach(match => match.removeEventListener('change', handleChange));
        }
    }, []);

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
    );
}