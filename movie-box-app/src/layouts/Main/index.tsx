// Libraries
import { FC, memo, ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Constants
import { ROUTES } from '@constants/constants';

// Layouts
import Footer from '@layouts/Footer';
import Navbar from '@layouts/Header';

// Components
import LoadingIndicator from '@components/LoadingIndicator';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { pathname, events } = useRouter();

  const [pageLoading, setPageLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    events.on('routeChangeStart', handleStart);
    events.on('routeChangeComplete', handleComplete);
    events.on('routeChangeError', handleComplete);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      {pageLoading ? (
        <LoadingIndicator />
      ) : (
        <>
          {pathname !== ROUTES.LOGIN && pathname !== ROUTES[404] && <Navbar />}
          <main>{children}</main>
          {pathname !== ROUTES.LOGIN && pathname !== ROUTES[404] && <Footer />}
        </>
      )}
    </>
  );
};

export default memo(Layout);
