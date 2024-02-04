import { Title } from "../components/Title/Title";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <Title/>
        {children}
      </>
    );
  }