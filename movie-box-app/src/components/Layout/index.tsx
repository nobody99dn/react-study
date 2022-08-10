import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import { END_POINT } from '@constants/constants';
import { useRouter } from 'next/router';
import { FC, memo, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { pathname } = useRouter();
  console.log(pathname);

  return (
    <>
      {pathname !== END_POINT.LOGIN && pathname !== END_POINT[404] && (
        <Navbar />
      )}
      <main>{children}</main>
      {pathname !== END_POINT.LOGIN && pathname !== END_POINT[404] && (
        <Footer />
      )}
    </>
  );
};

export default memo(Layout);
