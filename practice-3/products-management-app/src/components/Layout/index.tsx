import { memo, ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <main className='main'>{children}</main>
);

export default memo(Layout);
