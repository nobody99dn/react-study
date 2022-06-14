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
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = ButtonVariants.Default,
  isDisabled = false,
  isLoading = false,
  onClick
}) => {
  return (
    <button
      className={`btn btn-${variant} ${isDisabled && 'disabled'}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {isLoading ? 'Loading...' : title}
    </button>
  );
};;
