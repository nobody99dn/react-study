// Libraries
import react from 'React';

// Component 
import { Image } from '@components/commons/Image';

// Assets
import { logo } from '@assets/index';

// Style
import './index.css';

// Constant
import { ImageVariants } from '@/constants/types';

interface HeaderProps {
  href?: string;
}

export const Header: React.FC<HeaderProps> = ({ href = '#' }) => (
  <header className={'header'}>
    <div className={'container'}>
      <a href={href}>
        <Image variant={ImageVariants.Logo} imageUrl={logo} alt='Page logo' />
      </a>
    </div>
  </header>
);
