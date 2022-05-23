/* eslint-disable @typescript-eslint/no-useless-constructor */
import { ReactNode } from "react";
import React from "react";

// Styles
import './index.css';

interface TypographyProps {
  children: ReactNode;
  theme: 'primary' | 'secondary';
  [props: string]: any;
}

export class Typography extends React.Component<TypographyProps> {
  constructor(props: TypographyProps) {
    super(props);
  }

  render() {
    const { children, theme = 'primary', ...props }: TypographyProps = this.props;

    return (<p className={`text text-${theme}`} {...props}>
      {children}
    </p>);
  }
}

