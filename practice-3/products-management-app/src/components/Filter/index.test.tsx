// Libraries
import { render, act, fireEvent, cleanup } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';

// Components
import Filter, { FilterProps } from './index';
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

  test('should be change actions', () => {});
});
