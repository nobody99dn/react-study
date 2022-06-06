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
  handleButtonClick(): void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = ButtonVariants.Default,
  isDisabled = false,
  handleButtonClick
}) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <button
      className={['btn', `btn-${variant}`, `${isDisabled && 'disabled' || ''}`].join(' ')}
      onClick={handleButtonClick}
      disabled={isDisabled}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};
