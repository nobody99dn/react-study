// Libraries
import React, { useState } from 'react';

// Constants
import { ButtonVariants } from '@constants/types';

// Style
import './index.css';

interface ButtonProps {
  title: string;
  variant?: ButtonVariants;
  isDisabled?: boolean;
  handleButtonClick(): void;
}

export const Button: React.FC<ButtonProps> = ({
  title,
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
      {isLoading ? 'Loading...' : title}
    </button>
  );
};
