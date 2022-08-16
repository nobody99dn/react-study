// Libraries
import type { AppProps } from 'next/app';

// Styles
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

// Layouts
import Layout from '@layouts/Main';

// Components
import ErrorBoundary from '@components/ErrorBoundary';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  </Layout>
);

export default MyApp;
