'use client';

import Link from "next/link";
import Image from "next/image";
import styles from './crew.module.scss';
import globalStyles from '../../../styles/global.module.scss';
import { data, navigation } from "@/app/util/data";
import { imageLoader } from "@/app/util/imageLoader";

type Params = {
    params: {
        member: string
    }
}

export default function Page({params} : Params) {
    const {member} = params;
    const {crew} = navigation;
    const members = data.crew;
    const person = members[member as keyof typeof members];

    return (
        <div className={styles.crew}>
                <article className={styles.crew_card}>
                    <div className={styles.crew_description}>
                        <div className={styles.person_info}>
                            <p className={styles.crew_role}>{person.role}</p>
                            <p className={styles.crew_name}>{person.name}</p>
                            <p className={`${globalStyles.description} ${styles.crew_bio}`}>{person.bio}</p>
                        </div>
                        <nav>
                            {crew.map((link, index) => (<Link
                                                            className={link.path === member ? styles.active : ''} 
                                                            key={index}
                                                            href={link.path}
                                                            scroll={false}
                                                            prefetch={true}
                                                        />))}
                        </nav>
                    </div>
                    <div className={styles.person_image}>
                        <Image 
                            loader={imageLoader}
                            src={`/assets/crew/image-${member}.webp`}
                            alt={`${member} image`}
                            fill={true}
                            sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            priority={true}
                            quality={100}
                            loading="eager"
                            style={{
                                objectFit: 'contain',
                                objectPosition: 'right bottom'
                            }}
                        />
                    </div>
                </article>
            </div>
    );
}