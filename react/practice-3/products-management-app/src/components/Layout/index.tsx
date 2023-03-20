// Libraries
import React, { memo, ReactNode } from 'react';

// Layouts
import Header from '@layouts/Header';

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
