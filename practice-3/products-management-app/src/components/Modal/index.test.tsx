// Libraries
import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { create } from 'react-test-renderer';

// Components
import Modal, { ModalProps } from './index';

describe('Modal component', () => {
  const defaultProps: ModalProps = {
    children: '',
    isVisible: true,
    onClose: jest.fn()
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
    const defaultTree = create(<Modal {...defaultProps} />).toJSON();
    expect(defaultTree).toMatchSnapshot();
  });

  test('should render invisible', () => {
    render(<Modal {...defaultProps} isVisible={false} />, { container });

    expect(container.childElementCount).toBe(0);
  });

  test('should be click', () => {
    const myMock = jest.fn();

    render(<Modal {...defaultProps} onClose={myMock} />, { container });

    const image: HTMLImageElement = screen.getByRole('img');

    fireEvent.click(image);

    expect(myMock).toHaveBeenCalled();
  });
});
