// Libraries
import { render, act, fireEvent, cleanup } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';

// Components
import Filter, { FilterProps } from './index';

// Constants
import {
  FilterOrderOptions,
  ORDER_OPTIONS,
  ProductTypes,
  PRODUCT_TYPE_LIST
} from '@constants/types';

describe('Filter component', () => {
  const defaultProps: FilterProps = {
    typeFilterOptions: PRODUCT_TYPE_LIST,
    priceFilterOptions: ORDER_OPTIONS,
    currentFilterPriceParam: '',
    currentFilterTypeParam: '',
    handleTypeChange: jest.fn(),
    handlePriceChange: jest.fn(),
    handleClearFilters: jest.fn()
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
    const defaultTree = create(<Filter {...defaultProps} />).toJSON();
    expect(defaultTree).toMatchSnapshot();
  });

  test('should render correct params', () => {
    const { getByText } = render(
      <Filter
        {...defaultProps}
        currentFilterPriceParam={FilterOrderOptions.Desc}
        currentFilterTypeParam={ProductTypes.Tablet}
      />
    );

    expect(getByText(FilterOrderOptions.Desc)).toBeInTheDocument();
    expect(getByText(ProductTypes.Tablet)).toBeInTheDocument();
  });

  test('should handleClearFilters be called', () => {
    const clearMock = jest.fn();

    render(<Filter {...defaultProps} handleClearFilters={clearMock} />);

    const clearBtn: HTMLButtonElement = screen.getByRole('button');

    fireEvent.click(clearBtn);

    expect(clearMock).toHaveBeenCalled();
  });

  test('should handleTypeChange is called', () => {
    const changeTypeMock = jest.fn();

    render(<Filter {...defaultProps} handleTypeChange={changeTypeMock} />, {
      container
    });

    const select: HTMLElement = container.querySelector(
      'select[name="type-option"]'
    )!;

    expect(select).toBeTruthy();

    fireEvent.change(select);

    expect(changeTypeMock).toHaveBeenCalled();
  });

  test('should handlePriceChange is called', () => {
    const changePriceMock = jest.fn();

    render(<Filter {...defaultProps} handlePriceChange={changePriceMock} />, {
      container
    });

    const select: HTMLElement = container.querySelector(
      'select[name="price-filter"]'
    )!;

    expect(select).toBeTruthy();

    fireEvent.change(select);

    expect(changePriceMock).toHaveBeenCalled();
  });
});
