// Libraries
import React, { ReactNode } from "react";

// Styles
import './index.css';

// Constants
import { FwType } from '@constants/types';

export enum VariantsTypes {
  Default = 'title',
  Subtitle = 'subtitle'
}

interface TitleProps {
  children: ReactNode;
  color?: string;
  fw?: FwType,
  size?: string;
  fs?: 'inherit' | 'italic';
  p?: string;
  variant?: VariantsTypes;
}

export const Title: React.FC<TitleProps> = (
  {
    children,
    color,
    fw,
    size,
    fs = 'inherit',
    p,
    variant = VariantsTypes.Default,
  }
) => (
  <div
    className={variant}
    style={{
      fontSize: size,
      color: color,
      fontStyle: fs,
      fontWeight: fw,
      padding: p
    }}
  >
    {children}
  </div>
);

