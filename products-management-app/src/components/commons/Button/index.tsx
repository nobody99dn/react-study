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
  isLoading?: boolean;
  handleButtonClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = ButtonVariants.Default,
  isDisabled = false,
  isLoading = false,
  handleButtonClick
}) => {
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
