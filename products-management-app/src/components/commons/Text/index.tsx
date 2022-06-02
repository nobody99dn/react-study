import { ReactNode } from "react";
import { FwType } from "@components/commons/Title/index";

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

export const Text: React.FC<TextProps> = (
  {
    children,
    color,
    fw,
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

