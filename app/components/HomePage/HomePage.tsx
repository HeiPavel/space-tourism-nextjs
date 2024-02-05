import styles from './home.module.scss';

export const HomePage = () => {
    return (
        <main className={styles.main_home}>
            <section className={styles.section_content}>
                <article className={styles.home_text_content}>
                    <h5>SO, YOU WANT TO TRAVEL TO</h5>
                    <h1>SPACE</h1>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. 
                        Well sit back, and relax because we’ll give you a truly out of this world experience!
                    </p>
                </article>
                <button className={styles.explore}>EXPLORE</button>
            </section>
        </main>
    );
}