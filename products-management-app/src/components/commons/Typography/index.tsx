import { ReactNode } from "react";

// Styles
import './index.css';

export enum VariantsTypes {
  Text = 'text',
  Highlight = 'highlight',
  Title = 'title',
  Subtitle = 'subtitle'
}

interface TypographyProps {
  children: ReactNode;
  variant?: VariantsTypes;
  [props: string]: any;
}

export const Typography: React.FC<TypographyProps> = (
  {
    children,
    variant = VariantsTypes.Text,
    ...props
  }
) => {
  switch (variant) {
    case VariantsTypes.Title:
      return (
        <h4 className={variant} {...props}>{children}</h4>
      );

    case VariantsTypes.Subtitle:
      return (
        <h5 className={variant} {...props}>{children}</h5>
      );

    default:
      return (
        <p
          className={`text-${variant}`}
          {...props}
        >
          {children}
        </p>
      );
  }
};
