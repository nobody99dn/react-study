// Libraries
import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';

// Components
import Form, { FormProps } from './index';

// Constants
import { ProductTypes } from '@constants/types';

// Images
import { iPhoneImage } from '@assets/index';
import { FormVariants } from '@common-types/form';

describe('Form component', () => {
  const defaultProps: FormProps = {
    productItem: {
      id: '999',
      name: 'Product Name',
      price: 1000000,
      imageUrl: iPhoneImage,
      type: ProductTypes.Phone
    },
    validateMessage: 'Validate test',
    variants: FormVariants.Create,
    onSubmit: jest.fn()
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
    const createForm = create(<Form {...defaultProps} />).toJSON();
    expect(createForm).toMatchSnapshot();
  });

  test('should submit form is called', () => {
    const myMock = jest.fn();
    render(<Form {...defaultProps} onSubmit={myMock} />, { container });

    const form: HTMLCollectionOf<HTMLFormElement> =
      container.getElementsByTagName('form');

    fireEvent.submit(form[0]);

    expect(myMock).toHaveBeenCalled();
  });
});
