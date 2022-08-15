// Libraries
import type { AppProps } from 'next/app';

// Styles
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

// Layouts
import Layout from '@layouts/Main';
import ErrorBoundary from '@components/ErrorBoudary';
import LoadingIndicator from '@components/LoadingIndicator';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  </Layout>
);

export default MyApp;
