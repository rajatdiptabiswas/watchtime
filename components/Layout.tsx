import { ReactNode } from 'react';
import Head from 'next/head';
import NavBar from './NavBar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>watchtime</title>
        <link rel="icon" href="/watchtime.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar />
      <>{children}</>
    </>
  );
}
