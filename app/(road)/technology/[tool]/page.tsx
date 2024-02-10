'use client';

import { useContext } from "react";
import { ScreenContext } from "@/app/components/Context/Context";
import Link from "next/link";
import styles from './technology.module.scss';
import globalStyles from '../../../styles/global.module.scss';
import { data, navigation } from "@/app/util/data";
import { SharedImage } from "@/app/components/SharedImage/SharedImage";

type Params = {
    params: {
        tool: string
    }
}

export default function Page({params}: Params) {
    const imageOrientation = useContext(ScreenContext);

    const {tool} = params;
    const {technologys} = data;
    const {technology} = navigation;
    const toolInfo = technologys[tool as keyof typeof technologys];

    const image = () => {
        return (
            <>
                {imageOrientation ? <SharedImage
                                        className={globalStyles.visibility}
                                        src={`/assets/technology/image-${tool}-${imageOrientation}.jpg`}
                                        alt='space tool'
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
                                    /> : []
                }
            </>
        );
    }

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
                    {image()}
                </div>
            </article>
        </div>
    );
}