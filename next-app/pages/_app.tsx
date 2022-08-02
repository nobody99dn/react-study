import '../styles/globals.css';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import ErrorBoundary from 'src/components/ErrorBoundaries.index';

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
  return (
    <ErrorBoundary FallbackComponent={<div>Error Loading...</div>}>
      <Component {...pageProps} />;
    </ErrorBoundary>
  );
}

export default MyApp;
