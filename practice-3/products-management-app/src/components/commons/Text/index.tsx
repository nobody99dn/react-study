// Library
import { memo, ReactNode } from 'react';

// Constants
import { FsType, FwType, VariantsTypes } from '@constants/index';

// Styles
import './index.css';

interface TextProps {
  children: ReactNode;
  color?: string;
  fontStyle?: FsType;
  fontWeight?: FwType;
  fontSize?: string;
  variant?: VariantsTypes;
}

const Text: React.FC<TextProps> = ({
  children,
  color,
  fontWeight = FwType.Normal,
  fontSize,
  fontStyle = FsType.Inherit,
  variant = VariantsTypes.Default
}) => (
  <p
    className={`text-${variant}`}
    style={{
      fontSize: fontSize,
      color: color,
      fontStyle: fontStyle,
      fontWeight: fontWeight
    }}
  >
    {children}
  </p>
);

export default memo(Text);
