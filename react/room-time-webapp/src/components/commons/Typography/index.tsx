import { ReactNode } from "react";

// Styles
import './index.css';

export enum VariantsTypes {
  Primary = 'primary',
  Secondary = 'secondary',
  Outline = 'outline',
  Title = 'title',
  Caption = 'caption',
  Highlight = 'highlight'
}

interface TypographyProps {
  children: ReactNode;
  variant?: VariantsTypes;
  [props: string]: any;
}

export const Typography: React.FC<TypographyProps> = (
  {
    children,
    variant = VariantsTypes.Primary,
    ...props
  }
) => {
  switch (variant) {
    case VariantsTypes.Title:
      return (
        <h3 className={variant} {...props}>{children}</h3>
      );

    case VariantsTypes.Caption:
      return (
        <caption className={variant} {...props}>{children}</caption>
      );

    default:
      return (
        <p
          className={`text text-${variant}`}
          {...props}
        >
          {children}
        </p>
      );
  }
};
