import { FC, memo, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  isLogin?: boolean;
}

const Layout: FC<LayoutProps> = ({ children, isLogin = true }) => (
  // TODO: Implement Navbar
  // {!isLogin && <Navbar  />}
  <main>{children}</main>
  // TODO: Implement Footer
  // {!isLogin && <Footer />}
);

export default memo(Layout);
