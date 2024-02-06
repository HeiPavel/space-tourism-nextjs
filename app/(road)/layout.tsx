import { Title } from "../components/Title/Title";
import styles from './road.module.scss';

export default function RoadLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className={styles.road_main}>
          <section className={styles.road_section}>
              <Title/>
              {children}
          </section>
      </main>
    );
  }