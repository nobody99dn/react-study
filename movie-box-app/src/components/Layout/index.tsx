import Navbar from '@components/Navbar';
import { FC, memo, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  isLogging?: boolean;
}

const Layout: FC<LayoutProps> = ({ children, isLogging = false }) => (
  <>
    {!isLogging && <Navbar />}
    <main>{children}</main>
    {/* TODO: Implement Footer */}
    {/* {!isLogin && <Footer />} */}
  </>
);

export default memo(Layout);
