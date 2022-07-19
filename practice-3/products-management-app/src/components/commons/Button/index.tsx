// Libraries
import React from 'react';

// Constants
import { ButtonVariants } from '@constants/index';

// Style
import './index.css';

interface ButtonProps {
  title: string;
  variant?: ButtonVariants;
  isDisabled?: boolean;
  isLoading?: boolean;
  // TODO: check optional
  handleClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  title,
  variant = ButtonVariants.Default,
  isDisabled = false,
  isLoading = false,
  handleClick
  // TODO: remove {}
}) => {
  return (
    <button
      className={`btn btn-${variant} ${
        isDisabled ? 'btn-disabled' : ''
      }`.trim()}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {isLoading ? 'Loading...' : title}
    </button>
  );
};

export default Button;
