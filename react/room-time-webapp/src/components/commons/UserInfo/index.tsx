import React from 'react';

import './index.css';
import { Typography, VariantsTypes } from '../Typography/index';

interface UserProps {
  avatar: string;
  name: string;
  role: string;
  active?: boolean;
}

export const UserInfo: React.FC<UserProps> = ({
  avatar,
  name,
  role,
  active = false,
}) => (
  <div className={`user display-center ${active === true ? 'active' : ''}`}>
    <div className="user-img display-center">
      <img src={avatar} alt={name} />
    </div>

    <div className='user-name'>
      <Typography variant={VariantsTypes.Title}>{name}</Typography>
    </div>

    <div className='user-role'>
      <Typography variant={VariantsTypes.Highlight}>{role}</Typography>
    </div >
  </div >
);
