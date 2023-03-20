// Libraries
import React, { memo } from 'react';

// Components
import { Image } from '@components/index';

// Assets
import { logo } from '@assets/index';

// Styles
import './index.css';

// Types
import { ImageVariants } from '@common-types/index';

const Header: React.FC = () => (
  <header className='header'>
    <div className='container header-content'>
      <a className='logo-link'>
        <Image variant={ImageVariants.Logo} imageUrl={logo} alt='Page logo' />
      </a>
    </div>
  </header>
);

export default memo(Header);
