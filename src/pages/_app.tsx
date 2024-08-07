// src/pages/_app.tsx
import '../styles/globals.css'; // Import the global CSS file
import type { AppProps } from 'next/app';
import Head from 'next/head'; // Import the Head component from Next.js

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
