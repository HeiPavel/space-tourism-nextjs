import Link from "next/link";
import styles from './technology.module.scss';
import globalStyles from '../../../styles/global.module.scss';
import { data, navigation } from "@/app/util/data";
import { ToolImage } from "@/app/components/ToolImage/ToolImage";
import { Metadata } from "next";
import { capitalizeAll } from "@/app/util/capitalize";

type Params = {
    params: {
        tool: string
    }
}

export async function generateMetadata({params} : Params): Promise<Metadata> {
    let {tool} = params;
    return {
        title: `Technology | ${capitalizeAll(tool)}`
    }
}

export default function Page({params}: Params) {
    const {tool} = params;
    const {technologys} = data;
    const {technology} = navigation;
    const toolInfo = technologys[tool as keyof typeof technologys];

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
                                    <ToolImage
                                        tool={tool}
                                    />
                </div>
            </article>
        </div>
    );
}