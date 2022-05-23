import { ReactNode } from "react";
import { render } from '@testing-library/react';
import React from "react";

interface TypographyProps {
  children: ReactNode;
  [props: string]: any;
}

export class Typography extends React.Component {
  constructor(props: TypographyProps) {
    super(props);
  }

  render() {
    return (<p className="" >{this.props.children}</p>);
  }
}

