import { ReactNode } from 'react';
import Head from 'next/head';
import NavBar from './NavBar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>watchtime</title>
        <link rel="icon" href="/watchtime.svg" />
      </Head>
      <NavBar />
      <>{children}</>
    </>
  );
}
