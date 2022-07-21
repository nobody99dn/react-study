// Libraries
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

// Components
import { Image } from '@components/index';

// Assets
import { logo } from '@assets/index';

// Styles
import './index.css';

// Constants
import { URL } from '@constants/index';

// Types
import { ImageVariants } from '@common-types/index';

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
