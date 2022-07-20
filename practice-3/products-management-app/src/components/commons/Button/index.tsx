// Libraries
import React from 'react';

// Constants
import { ButtonVariants } from '@constants/index';

// Styles
import './index.css';

export interface ButtonProps {
  title: string;
  variant?: ButtonVariants;
  isDisabled?: boolean;
  isLoading?: boolean;
  handleClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  title,
  variant = ButtonVariants.Default,
  isDisabled = false,
  isLoading = false,
  handleClick
}) => (
  <button
    className={`btn btn-${variant} ${isDisabled ? 'btn-disabled' : ''}`.trim()}
    onClick={handleClick}
    disabled={isDisabled}
  >
    {isLoading ? 'Loading...' : title}
  </button>
);

export default Button;
