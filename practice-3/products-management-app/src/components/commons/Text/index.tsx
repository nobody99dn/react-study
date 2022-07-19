// Library
import { memo, ReactNode } from 'react';

// Constants
import { FsType, FwType } from '@constants/index';

// Styles
import './index.css';

export enum VariantsTypes {
  Default = 'default',
  Highlight = 'highlight'
}

interface TextProps {
  children: ReactNode;
  color?: string;
  fs?: FsType;
  fw?: FwType;
  size?: string;
  variant?: VariantsTypes;
}

const Text: React.FC<TextProps> = ({
  children,
  color,
  fw = FwType.Normal,
  size,
  fs = FsType.Inherit,
  variant = VariantsTypes.Default
}) => (
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
