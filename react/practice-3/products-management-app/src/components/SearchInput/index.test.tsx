// Libraries
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';

// Components
import SearchInput, { SearchInputProps } from './index';

describe('SearchInput component', () => {
  const defaultProps: SearchInputProps = {
    productName: 'Product Test',
    onSearchProduct: jest.fn()
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
    const defaultTree = create(<SearchInput {...defaultProps} />).toJSON();
    expect(defaultTree).toMatchSnapshot();
  });

  test('should correct value', () => {
    const productName = 'This is product testing';

    render(<SearchInput {...defaultProps} productName={productName} />);

    expect(screen.getByDisplayValue(productName)).toBeInTheDocument();
  });
});
