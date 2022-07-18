// Libraries
import { render, act, fireEvent, cleanup } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';

// Components
import SearchInput, { SearchInputProps } from './index';

describe('SearchInput component', () => {
  const defaultProps: SearchInputProps = {
    productName: 'Product Test',
    handleSearchProduct: jest.fn()
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

  test('should be change with 2 times', () => {
    const myMock = jest.fn();

    const { getByRole } = render(
      <SearchInput {...defaultProps} handleSearchProduct={myMock} />
    );

    const input: HTMLElement = getByRole('input');

    fireEvent.change(input);
    fireEvent.change(input);

    expect(myMock).toHaveBeenCalledTimes(2);
  });

  test('should correct value', () => {
    const productName: string = 'This is product testing';

    render(<SearchInput {...defaultProps} productName={productName} />);

    expect(screen.getAllByDisplayValue(productName)).toBeInTheDocument();
  });
});
