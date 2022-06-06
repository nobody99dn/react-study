// Libraries
import React, { ReactNode, useState } from 'react';

// Constants
import { ButtonVariants } from '@/constants/types';

// Style
import './index.css';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariants;
  isDisabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = ButtonVariants.Default,
  isDisabled = false,
}) => {
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => { };

  return (
    <button
      className={['btn', `btn-${variant}`, `${isDisabled && 'disabled' || ''}`].join(' ').trim()}
      onClick={handleButtonClick}
      disabled={isDisabled}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};
