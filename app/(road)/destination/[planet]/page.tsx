'use client';

import Link from "next/link";
import Image from "next/image";
import styles from './planet.module.scss';
import globalStyles from '../../../styles/global.module.scss';
import { data, navigation } from "@/app/util/data";
import { imageLoader } from "@/app/util/imageLoader";

type Params = {
    params: {
        planet: string
    }
}

export default function Page({params} : Params) {
    const {planet} = params;
    const {destination} = navigation;
    const {destinations} = data;
    const object = destinations[planet as keyof typeof destinations];

    return (
        <div className={styles.destination}>
            <article className={styles.destination_card}>
                <div className={styles.object_image}>
                    <Image
                        loader={imageLoader}
                        src={`/assets/destination/image-${planet}.webp`}
                        alt={`${planet} image`}
                        fill={true}
                        sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={true}
                        quality={100}
                    />
                </div>
                <div className={styles.object_description}>
                    <nav className={globalStyles.navigation}>
                        {destination.map((link, index) => (<Link 
                                                                className={link.path === planet ? globalStyles.active : ''} 
                                                                key={index} 
                                                                href={link.path}
                                                                scroll={false}
                                                                prefetch={true}
                                                            >
                                                                {link.content}
                                                            </Link>))}
                    </nav>
                    <h3>{planet}</h3>
                    <p className={`${globalStyles.description} ${styles.planet_description}`}>{object.description}</p>
                    <div className={styles.travel_statistic}>
                        <div className={styles.statistic_container}>
                            <p className={styles.label}>AVG. DISTANCE</p>
                            <p className={styles.info}>{object.distance}</p>
                        </div>
                        <div className={styles.statistic_container}>
                            <p className={styles.label}>EST. TRAVEL TIME</p>
                            <p className={styles.info}>{object.travel}</p>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}