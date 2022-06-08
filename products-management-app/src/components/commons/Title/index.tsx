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
  className?: string;
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
    className,
    color,
    fw,
    size,
    fs = 'inherit',
    p,
    variant = VariantsTypes.Default,
  }
) => (
  <div
    className={[variant, className].join(' ')}
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

