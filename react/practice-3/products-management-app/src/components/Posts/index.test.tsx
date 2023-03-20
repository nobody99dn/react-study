// Libraries
import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { create } from 'react-test-renderer';

// Components
import Posts, { PostsProps } from './index';

// Models
import { Product } from '@models/product';

// Constants
import { ProductTypes } from '@constants/types';

describe('Posts component', () => {
  let container: HTMLElement;

  const mockProducts: Product[] = [
    {
      id: '1',
      imageUrl: '',
      name: 'Product test 1',
      price: 1000000,
      type: ProductTypes.Phone
    },
    {
      id: '2',
      imageUrl: '',
      name: 'Product test 2',
      price: 2000000,
      type: ProductTypes.Laptop
    },
    {
      id: '3',
      imageUrl: '',
      name: 'Product test 3',
      price: 3000000,
      type: ProductTypes.Tablet
    }
  ];

  const defaultProps: PostsProps = {
    products: mockProducts,
    onNavigate: jest.fn(),
    onDeleteProduct: jest.fn()
  };
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
    const defaultTree = create(<Posts {...defaultProps} />).toJSON();
    expect(defaultTree).toMatchSnapshot();
  });

  test('should render correct products length', () => {
    render(<Posts {...defaultProps} />, { container });

    expect(container.getElementsByClassName('card').length).toBe(
      defaultProps.products.length
    );
  });

  test('should handleOpenProductDetail is called', () => {
    const mockOpenProduct = jest.fn();

    render(<Posts {...defaultProps} onNavigate={mockOpenProduct} />, {
      container
    });

    const button: HTMLButtonElement[] = screen.getAllByText('Edit');

    fireEvent.click(button[0]);

    expect(mockOpenProduct).toHaveBeenCalled();
  });

  test('should onDeleteProduct is called', () => {
    const mockDeleteProduct = jest.fn();

    render(<Posts {...defaultProps} onDeleteProduct={mockDeleteProduct} />, {
      container
    });

    const button: HTMLButtonElement[] = screen.getAllByText('Delete');

    fireEvent.click(button[0]);

    expect(mockDeleteProduct).toHaveBeenCalled();
  });
});
