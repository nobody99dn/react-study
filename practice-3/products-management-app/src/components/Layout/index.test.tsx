// Libraries
import React from 'react';
import { cleanup } from '@testing-library/react';
import { create } from 'react-test-renderer';

// Components
import Layout, { LayoutProps } from './index';

describe('Layout component', () => {
  const defaultProps: LayoutProps = {
    children: <p>Children</p>
  };
  let container: HTMLElement;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    container.remove();
    jest.clearAllMocks();
    cleanup();
  });

  test('should render correctly', () => {
    const defaultTree = create(<Layout {...defaultProps} />).toJSON();
    expect(defaultTree).toMatchSnapshot();
  });
});
