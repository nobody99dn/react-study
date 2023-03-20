// Libraries
import React from 'react';
import { render, act, fireEvent, cleanup } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { create } from 'react-test-renderer';

// Components
import Button, { ButtonProps } from './index';

describe('Button component', () => {
  const defaultProps: ButtonProps = {
    children: 'Button',
    onClick: jest.fn()
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
    const defaultTree = create(<Button {...defaultProps} />).toJSON();
    expect(defaultTree).toMatchSnapshot();

    const disableTree = create(<Button {...defaultProps} isDisabled />);
    expect(disableTree).toMatchSnapshot();
  });

  test('should render button with content is Button', () => {
    act(() => {
      render(<Button {...defaultProps} />, { container });
    });

    expect(container.textContent).toMatch('Button');
  });

  test('should be click 2 times', () => {
    const myMock = jest.fn();
    render(<Button {...defaultProps} onClick={myMock} />, { container });

    const button: HTMLElement = screen.getByRole('button');

    fireEvent.click(button);

    expect(myMock).toHaveBeenCalled();
  });
});
