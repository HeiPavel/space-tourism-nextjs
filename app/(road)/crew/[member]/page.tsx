import Link from "next/link";
import styles from './crew.module.scss';
import globalStyles from '../../../styles/global.module.scss';
import { data, navigation } from "@/app/util/data";
import { SharedImage } from "@/app/components/SharedImage/SharedImage";
import { Metadata } from "next";
import { capitalizeAll } from "@/app/util/capitalize";

type Params = {
    params: {
        member: string
    }
}

export async function generateMetadata({params} : Params): Promise<Metadata> {
    let {member} = params;
    return {
        title: `Crew | ${capitalizeAll(member)}`
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
                        <SharedImage
                            className={globalStyles.visibility} 
                            src={`/assets/crew/image-${member}.webp`}
                            alt={`${member} image`}
                            fill={true}
                            sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            priority={true}
                            quality={100}
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