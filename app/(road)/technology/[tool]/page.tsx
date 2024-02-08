'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './technology.module.scss';
import globalStyles from '../../../styles/global.module.scss';
import { data, navigation } from "@/app/util/data";
import { imageLoader } from "@/app/util/imageLoader";

type Params = {
    params: {
        tool: string
    }
}

type ImageOrientation = 'landscape' | 'portrait';

export default function Page({params}: Params) {
    const [imageOrientation, setImageOrientation] = useState<ImageOrientation>('portrait');

    const {tool} = params;
    const {technologys} = data;
    const {technology} = navigation;
    const toolInfo = technologys[tool as keyof typeof technologys];

    useEffect(() => {
        const matchDevice = [window.matchMedia("(width <= 1024px)"), window.matchMedia("(1024px < width)")];
        const detectDeviceSize = (): ImageOrientation => {
            return matchDevice[0].matches ? 'landscape' : 'portrait';
        };
        const handleChange = (event: MediaQueryListEvent) => {
            if (event.matches) setImageOrientation(detectDeviceSize());
        };
        setImageOrientation(detectDeviceSize());
        matchDevice.forEach(match => match.addEventListener('change', handleChange));
        return () => {
            matchDevice.forEach(match => match.removeEventListener('change', handleChange));
        }
    }, []);

    return (
        <div className={styles.technology}>
            <article className={styles.technology_card}>
                <div className={styles.technology_text_content}>
                    <nav>
                        {technology.map((link, index) => (<Link 
                                                            className={link.path === tool ? styles.active : ''} 
                                                            key={index} 
                                                            href={link.path}
                                                            scroll={false}
                                                            prefetch={true}
                                                        >{index + 1}</Link>))}
                    </nav>
                    <div className={styles.tool_text_content}>
                        <p className={styles.terminology}>THE TERMINOLOGY…</p>
                        <h3>{toolInfo.name}</h3>
                        <p className={`${globalStyles.description} ${styles.tool_description}`}>{toolInfo.description}</p>
                    </div>
                </div>
                <div className={styles.tool_image}>
                    <Image
                        loader={imageLoader}
                        src={`/assets/technology/image-${tool}-${imageOrientation}.jpg`}
                        alt='spave tool'
                        width={50}
                        height={50}
                        sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={true}
                        quality={100}
                        style={{
                            width: '100%',
                            height: 'auto',
                            verticalAlign: 'middle'
                        }}
                    />
                </div>
            </article>
        </div>
    );
}