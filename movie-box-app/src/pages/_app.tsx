// Libraries
import type { AppProps } from 'next/app';
import Head from 'next/head';

// Styles
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

// Components
import Layout from '@components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/icons/logo.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
