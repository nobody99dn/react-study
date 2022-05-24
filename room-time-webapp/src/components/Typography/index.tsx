/* eslint-disable @typescript-eslint/no-useless-constructor */
import { ReactNode } from "react";

// Styles
import './index.css';

export enum ThemeTypes {
  Primary = 'primary',
  Secondary = 'secondary',
  Outline = 'outline',
  Title = 'title',
  Caption = 'caption',
}

interface TypographyProps {
  children: ReactNode;
  theme?: ThemeTypes;
  [props: string]: any;
}
export const Typography = ({ children, theme = ThemeTypes.Primary, ...props }: TypographyProps) => {
  switch (theme) {
    case ThemeTypes.Primary || ThemeTypes.Secondary || ThemeTypes.Outline:
      return (
        <p className={`text text-${theme}`} {...props}>
          {children}
        </p>
      );

    case ThemeTypes.Title:
      return (
        <h3 className={theme} {...props}>{children}</h3>
      );

    case ThemeTypes.Caption:
      return (
        <caption className={theme} {...props}>{children}</caption>
      );

    default:
      return (
        <p className={`text text-${theme}`} {...props}>
          {children}
        </p>
      );
  }
};
