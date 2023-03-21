import '../styles/globals.css';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import ErrorBoundary from 'src/components/ErrorBoundaries/index';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);

  if (metric.label === 'web-vital') {
    console.log(metric); // The metric object ({ id, name, startTime, value, label }) is logged to the console
  }

  switch (metric.name) {
    case 'FCP':
      // handle FCP results
      break;
    case 'LCP':
      // handle LCP results
      break;
    case 'CLS':
      // handle CLS results
      break;
    case 'FID':
      // handle FID results
      break;
    case 'TTFB':
      // handle TTFB results
      break;
    case 'INP':
      // handle INP results (note: INP is still an experimental metric)
      break;
    default:
      break;
  }

  // CUSTOM METRIC
  if (metric.label === 'custom') {
    console.log(metric); // The metric object ({ id, name, startTime, value, label }) is logged to the console
  }

  switch (metric.name) {
    case 'Next.js-hydration':
      // handle hydration results
      break;
    case 'Next.js-route-change-to-render':
      // handle route-change to render results
      break;
    case 'Next.js-render':
      // handle render results
      break;
    default:
      break;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string, { shallow }: any) => {
      console.log(
        `App is changing to ${url} ${
          shallow ? 'with' : 'without'
        } shallow routing`
      );
      router.events.on('routeChangeStart', handleRouteChange);

      // If the component is unmounted, unsubscribe
      // from the event with the `off` method:
      return () => {
        router.events.off('routeChangeStart', handleRouteChange);
      };
    };
  }, []);

  useEffect(() => {
    const handleRouteChangeError = (err: any, url: string) => {
      if (err.cancelled) {
        console.log(`Route to ${url} was cancelled!`);
      }
    };

    router.events.on('routeChangeError', handleRouteChangeError);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, []);

  return (
    <ErrorBoundary FallbackComponent={<div>Error Loading...</div>}>
      <Component {...pageProps} />;
    </ErrorBoundary>
  );
}

export default MyApp;
