// Libraries
import React from 'react';

// Types
import { ButtonVariants } from '@common-types/index';

// Constants

// Styles
import './index.css';

export interface ButtonProps {
  title: string;
  variant?: ButtonVariants;
  isDisabled?: boolean;
  handleClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  title,
  variant = ButtonVariants.Default,
  isDisabled = false,
  handleClick
}) => (
  <button
    className={`btn btn-${variant}${isDisabled ? ' btn-disabled' : ''}`}
    onClick={handleClick}
    disabled={isDisabled}
  >
    {title}
  </button>
);

export default Button;
