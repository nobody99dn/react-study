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
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);
  };

  return (
    <button
      className={['btn', `btn-${variant}`, `${isDisabled && 'disabled' || ''}`].join(' ').trim()}
      onClick={handleButtonClick}
      disabled={isDisabled}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};
