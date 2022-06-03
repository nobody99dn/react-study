// Libraries
import React, { ReactNode } from "react";

// Styles
import './index.css';

export enum VariantsTypes {
  Default = 'title',
  Subtitle = 'subtitle'
}

export enum FwType {
  bold = 700,
  semibold = 600,
  normal = 400,
  light = 300
}

interface TitleProps {
  children: ReactNode;
  color?: string;
  fw?: FwType,
  size?: string;
  fs?: 'inherit' | 'italic';
  variant?: VariantsTypes;
}

export const Title: React.FC<TitleProps> = (
  {
    children,
    color,
    fw,
    size,
    fs = 'inherit',
    variant = VariantsTypes.Default,
  }
) => (
  <div
    className={variant}
    style={{
      fontSize: size,
      color: color,
      fontStyle: fs,
      fontWeight: fw
    }}
  >
    {children}
  </div>
);

