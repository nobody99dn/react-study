// Libraries
import type { AppProps } from 'next/app';

// Styles
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

// Components
import ErrorBoundary from '@components/ErrorBoundary';

// Layout
import Layout from './layout';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  </Layout>
);

export default MyApp;
