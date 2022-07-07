// Libraries
import React from 'react';

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

const Button: React.FC<ButtonProps> = ({
  title,
  variant = ButtonVariants.Default,
  isDisabled = false,
  isLoading = false,
  onClick
}) => {
  return (
    <button
      className={`btn btn-${variant} ${
        isDisabled ? 'btn-disabled' : ''
      }`.trim()}
      onClick={onClick}
      disabled={isDisabled}
    >
      {isLoading ? 'Loading...' : title}
    </button>
  );
};

export default Button;
