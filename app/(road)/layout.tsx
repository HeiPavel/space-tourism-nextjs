import { Title } from "../components/Title/Title";

export default function RoadLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main>
        <Title/>
        {children}
      </main>
    );
  }