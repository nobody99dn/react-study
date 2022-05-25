import './index.css';
import { Typography, ThemeTypes } from '../Typography/index';

interface UserProps {
  avatar: string;
  hint: string;
  name: string;
  role: string;
  active: boolean;
  [props: string]: any;
}

export const User: React.FC<UserProps> = ({
  avatar,
  hint,
  name,
  role,
  active = false,
  ...props
}) => (
  <div className={`user display-center ${active === true ? 'active' : ''}`}>
    <div className="user-img display-center">
      <img src={avatar} alt={hint} />
    </div>

    <div className='user-name'>
      <Typography theme={ThemeTypes.Title}>{name}</Typography>
    </div>

    <div className='user-role'>
      <Typography theme={ThemeTypes.Highlight}>{role}</Typography>
    </div>
  </div>
);
