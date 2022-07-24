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
});
