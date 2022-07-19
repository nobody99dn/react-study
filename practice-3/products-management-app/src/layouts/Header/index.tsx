// Libraries
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

// Component
import Image from '@components/commons/Image';

// Assets
import { logo } from '@assets/index';

// Style
import './index.css';

// Constant
import { ImageVariants, URL } from '@constants/index';

interface HeaderProps {
  href?: string;
}

const Header: React.FC<HeaderProps> = ({ href = '#' }) => {
  return (
    <header className='header'>
      <div className='container header-content'>
        <Link className='logo-link' to={URL.HOME_PAGE}>
          <Image variant={ImageVariants.Logo} imageUrl={logo} alt='Page logo' />
        </Link>
      </div>
    </header>
  );
};

export default memo(Header);
