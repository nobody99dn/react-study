// Library
import { memo, ReactNode } from "react";

// Constants
import { FwType } from '@constants/types';

// Styles
import './index.css';

export enum VariantsTypes {
  Default = 'default',
  Highlight = 'highlight',
}

interface TextProps {
  children: ReactNode;
  color?: string;
  fs?: 'inherit' | 'italic';
  fw?: FwType,
  size?: string;
  variant?: VariantsTypes;
}

const Text: React.FC<TextProps> = (
  {
    children,
    color,
    fw = FwType.Normal,
    size,
    fs = 'inherit',
    variant = VariantsTypes.Default,
  }
) => (
  <p
    className={`text-${variant}`}
    style={{
      fontSize: size,
      color: color,
      fontStyle: fs,
      fontWeight: fw
    }}
  >
    {children}
  </p>
);

export default memo(Text);
