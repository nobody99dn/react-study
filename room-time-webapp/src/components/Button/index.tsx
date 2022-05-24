/* eslint-disable @typescript-eslint/no-useless-constructor */

// Libraries
import { ReactNode } from "react";
import React from 'react';

// Style
import './index.css';

interface ButtonProps {
  children: ReactNode;
  theme?: 'primary' | 'secondary' | 'outline' | 'ghost';
  [props: string]: any;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  theme = 'primary',
  ...props
}) => (<button className={`btn btn-${theme}`} {...props}>{children}</button>);

