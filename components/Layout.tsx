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

        {/* SEO */}
        <meta name="title" content="watchtime" />
        <meta
          name="description"
          content="Find what to watch based on the time available"
        />
        <meta
          name="keywords"
          content="watch, time, watchtime, tv, series, movie, tmdb, playback speed, search, recommendation, netflix, prime video, disney, hulu, apple tv, hbo max, paramount, peacock, youtube premium, showtime"
        />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Rajat Dipta Biswas" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NavBar />
      <>{children}</>
    </>
  );
}
