// Libraries
import React from 'react';
import { render, fireEvent, cleanup, within } from '@testing-library/react';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';

// Components
import Card, { CardProps } from './index';

// Models
import { Product } from '@models/product';

// Images
import { iPhoneImage } from '@assets/index';

// Constants
import { Currencies, ProductTypes } from '@constants/types';

// Helpers
import { currencyFormat } from '@helpers/string';

describe('Card component', () => {
  const mockProduct: Product = {
    id: '999',
    name: 'Product Name',
    price: 1000000,
    imageUrl: iPhoneImage,
    type: ProductTypes.Phone
  };

  const defaultProps: CardProps = {
    product: mockProduct,
    currency: Currencies.VND,
    onNavigate: () => jest.fn(),
    onDeleteProduct: () => jest.fn()
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
    const cardWithVnd = create(<Card {...defaultProps} />).toJSON();
    expect(cardWithVnd).toMatchSnapshot();

    const cardWithEuro = create(
      <Card {...defaultProps} currency={Currencies.Euro} />
    ).toJSON();
    expect(cardWithEuro).toMatchSnapshot();

    const cardWithDollar = create(
      <Card {...defaultProps} currency={Currencies.Dollar} />
    ).toJSON();
    expect(cardWithDollar).toMatchSnapshot();
  });

  test('should render correct amount', () => {
    render(<Card {...defaultProps} />, { container });

    const expectValue = currencyFormat(mockProduct.price);

    const { getByText } = within(container);

    expect(getByText(expectValue)).toBeInTheDocument();
  });

  test('should be open product detail page', () => {
    const myMock = jest.fn();

    const { getByText } = render(
      <Card {...defaultProps} onNavigate={myMock} />,
      { container }
    );

    fireEvent.click(getByText('Edit'));

    expect(myMock.mock.calls.length).toEqual(1);
  });

  test('should be delete product', () => {
    const myMock = jest.fn();

    const { getByText } = render(
      <Card {...defaultProps} onDeleteProduct={myMock} />,
      { container }
    );

    fireEvent.click(getByText('Delete'));

    expect(myMock.mock.calls.length).toEqual(1);
  });
});
