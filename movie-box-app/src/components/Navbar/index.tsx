// Libraries
import { FC } from 'react';
import Link from 'next/link';

const Navbar: FC = () => (
  <div className="h-20 flex items-center">
    <Link href="/">
      <a className="uppercase text-4xl pl-10 text-default">moviebox</a>
    </Link>
  </div>
);

export default Navbar;
