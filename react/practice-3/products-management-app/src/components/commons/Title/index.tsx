// Libraries
import React, { memo, ReactNode } from 'react';

// Styles
import './index.css';

// Types
import { FwType, VariantTypes } from '@common-types/index';

export interface TitleProps {
  children: ReactNode;
  className?: string;
  color?: string;
  fontWeight?: FwType;
  fontSize?: string;
  fontStyle?: 'inherit' | 'italic';
  lineHeight?: string;
  variant?: VariantTypes;
}

const Title: React.FC<TitleProps> = ({
  children,
  className = '',
  color,
  fontWeight,
  fontSize,
  fontStyle = 'inherit',
  lineHeight,
  variant = VariantTypes.Default
}) => (
  <div
    className={`${variant} ${className}`.trim()}
    style={{
      fontSize: fontSize,
      color: color,
      fontStyle: fontStyle,
      fontWeight: fontWeight,
      lineHeight: lineHeight
    }}
  >
    {children}
  </div>
);

export default memo(Title);
