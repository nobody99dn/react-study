// Libraries
import React, { memo } from 'react';

// Types
import { ButtonVariants } from '@common-types/index';

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
    disabled={isDisabled}
    onClick={handleClick}
  >
    {title}
  </button>
);

export default memo(Button);
