// Libraries
import React, { memo, ReactNode } from 'react';

// Styles
import './index.css';

// Constants
import { FwType } from '@constants/index';

export enum VariantTypes {
  Default = 'title',
  Subtitle = 'subtitle'
}

interface TitleProps {
  children: ReactNode;
  className?: string;
  color?: string;
  fw?: FwType;
  size?: string;
  fs?: 'inherit' | 'italic';
  p?: string;
  variant?: VariantTypes;
}

const Title: React.FC<TitleProps> = ({
  children,
  className,
  color,
  fw,
  size,
  fs = 'inherit',
  p,
  variant = VariantTypes.Default
}) => (
  <div
    className={`${variant} ${className}`}
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

export default memo(Title);
