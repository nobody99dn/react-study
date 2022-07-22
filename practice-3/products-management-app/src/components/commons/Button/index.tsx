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
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  title,
  variant = ButtonVariants.Default,
  isDisabled = false,
  onClick
}) => (
  <button
    className={`btn btn-${variant}${isDisabled ? ' btn-disabled' : ''}`}
    disabled={isDisabled}
    onClick={onClick}
  >
    {title}
  </button>
);

export default memo(Button);
