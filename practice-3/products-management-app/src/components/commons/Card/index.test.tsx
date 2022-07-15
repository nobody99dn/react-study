// Libraries
import { render, act, fireEvent, cleanup } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { create } from 'react-test-renderer';

// Components
import Card, { CardProps } from './index';
import { Product } from '@models/product';
import { iPhoneImage } from '@assets/index';
import { Currencies, ProductTypes } from '@constants/types';

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
    onOpenProductDetail: () => {},
    onDeleteProduct: () => {}
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

  test('should be open product detail page', () => {
    const myMock = jest.fn();

    const { getByText } = render(
      <Card {...defaultProps} onOpenProductDetail={myMock} />,
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
