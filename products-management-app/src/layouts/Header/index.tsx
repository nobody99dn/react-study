// Libraries
import React from 'react';

// Component 
import { Image } from '@components/commons/Image';

// Assets
import { logo } from '@assets/index';

// Style
import './index.css';

// Constant
import { ImageVariants } from '@constants/types';

interface HeaderProps {
  href?: string;
}

const Header: React.FC<HeaderProps> = ({ href = '#' }) => (
  <header className='header'>
    <div className='container header-content'>
      <a className='logo-link' href={href}>
        <Image variant={ImageVariants.Logo} imageUrl={logo} alt='Page logo' />
      </a>
    </div>
  </header>
);

export default Header;
