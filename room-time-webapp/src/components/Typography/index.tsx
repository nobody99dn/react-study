/* eslint-disable @typescript-eslint/no-useless-constructor */
import { ReactNode } from "react";
import React from "react";

// Styles
import './index.css';

enum themeType {
  body1 = 'body1',
  body2 = 'body2',
  outline = 'outline',
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  subtitle = 'subtitle',
  caption = 'caption'
}

interface TypographyProps {
  children: ReactNode;
  theme?: 'body1' |
  'body2' |
  'outline' |
  'title' |
  'caption';
  [props: string]: any;
}

export class Typography extends React.Component<TypographyProps> {
  constructor(props: TypographyProps) {
    super(props);
  }

  render() {
    const { children, theme = 'body1', ...props }: TypographyProps = this.props;

    if (theme === 'body1' || theme === 'body2' || theme === 'outline') {
      return (<p className={`text text-${theme}`} {...props}>
        {children}
      </p>);
    } else if (theme === 'title') {
      return (
        <h3 className={`${theme}`} {...props}>{children}</h3>
      );
    } else if (theme === 'caption') {
      return (
        <caption className={`${theme}`} {...props}>{children}</caption>
      );
    }
  }
}
