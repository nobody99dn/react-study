// Libraries
import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';

// Components
import ModalForm, { ModalFormProps } from './index';

// Constants
import { ProductTypes } from '@constants/index';

// Model
import { Product } from '@models/product';

describe('ModalForm component', () => {
  const defaultProps: ModalFormProps = {
    product: {
      id: '1',
      imageUrl: 'url',
      name: 'Product test',
      price: 1000000,
      type: ProductTypes.Phone
    },
    isModalShow: true,
    onCloseModal: jest.fn(),
    onSubmitForm: jest.fn()
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
    const defaultTree = create(<ModalForm {...defaultProps} />).toJSON();
    expect(defaultTree).toMatchSnapshot();
  });

  test('should submitMock be called', () => {
    const submitMock = jest.fn();

    render(<ModalForm {...defaultProps} onSubmitForm={submitMock} />, {
      container
    });

    const button: HTMLButtonElement = screen.getByRole('button');

    fireEvent.click(button);

    expect(submitMock).toHaveBeenCalled();
  });

  test('should handleClose be called', () => {
    const closeMock = jest.fn();

    render(<ModalForm {...defaultProps} onCloseModal={closeMock} />),
      { container };

    const img: HTMLImageElement = screen.getByRole('img');

    fireEvent.click(img);

    expect(closeMock).toHaveBeenCalled();
  });
});
