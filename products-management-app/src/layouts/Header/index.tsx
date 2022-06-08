// Libraries
import react from 'React';

// Component 
import { Image, ImageTypes } from '@components/commons/Image';

// Assets
import { logo } from '@assets/index';

// Style
import './index.css';

interface HeaderProps { }

export const Header: React.FC<HeaderProps> = () => (
  <header className={'header'}>
    <div className={'container'}>
      <a href="#">
        <Image variants={ImageTypes.Logo} imageUrl={logo} alt={'Page logo'} />
      </a>
    </div>
  </header>
);
