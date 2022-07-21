import Header from '@layouts/Header';
import { memo, ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <main className='main'>{children}</main>
  </>
);

export default memo(Layout);
