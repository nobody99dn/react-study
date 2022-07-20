// Libraries
import {
  render,
  fireEvent,
  cleanup,
  screen,
  within
} from '@testing-library/react';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';

// Components
import Card, { CardProps } from './index';
import { Product } from '@models/product';
import { iPhoneImage } from '@assets/index';
import { Currencies, ProductTypes } from '@constants/types';
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
    handleNavigate: () => {},
    handleDeleteProduct: () => {}
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
      <Card {...defaultProps} handleNavigate={myMock} />,
      { container }
    );

    fireEvent.click(getByText('Edit'));

    expect(myMock.mock.calls.length).toEqual(1);
  });

  test('should be delete product', () => {
    const myMock = jest.fn();

    const { getByText } = render(
      <Card {...defaultProps} handleDeleteProduct={myMock} />,
      { container }
    );

    fireEvent.click(getByText('Delete'));

    expect(myMock.mock.calls.length).toEqual(1);
  });
});
