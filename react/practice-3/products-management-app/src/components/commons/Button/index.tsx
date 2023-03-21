// Libraries
import React, { memo, ReactNode } from 'react';

// Types
import { ButtonVariants } from '@common-types/index';

// Styles
import './index.css';

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariants;
  isDisabled?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = ButtonVariants.Default,
  isDisabled = false,
  onClick
}) => (
  <button
    className={`btn btn-${variant}${isDisabled ? ' btn-disabled' : ''}`}
    disabled={isDisabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default memo(Button);
