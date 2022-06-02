// Libraries
import React, { ReactNode } from 'react';

// Style
import './index.css';

export enum ButtonVariants {
  Default = 'default',
  Primary = 'primary',
  Secondary = 'secondary'
}

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariants;
  [props: string]: any;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = ButtonVariants.Default,
  ...props
}) => {
  const handleButtonClick = () => { };

  return (
    <button
      className={`btn btn-${variant}`} {...props}
      onClick={handleButtonClick}
    >
      {children}
    </button>);
};
