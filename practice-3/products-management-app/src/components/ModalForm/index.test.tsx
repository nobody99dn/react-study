// Libraries
import { render, fireEvent, cleanup } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';

// Components
import ModalForm, { ModalFormProps } from './index';

import { ProductTypes } from '@constants/index';

describe('ModalForm component', () => {
  const defaultProps: ModalFormProps = {
    product: {
      id: '1',
      imageUrl: '',
      name: 'Product test',
      price: 1000000,
      type: ProductTypes.Phone
    },
    isModalShow: true,
    validateMessage: 'test message',
    handleCloseModal: jest.fn(),
    handleSubmitForm: jest.fn()
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
    const defaultTree = create(<ModalForm {...defaultProps} />).toJSON();
    expect(defaultTree).toMatchSnapshot();
  });

  test('should render correct validate message', () => {
    const message: string = 'Test message';

    const { getByText } = render(
      <ModalForm {...defaultProps} validateMessage={message} />,
      { container }
    );

    expect(getByText(message)).toBeInTheDocument();
  });

  test('should submitMock be called', () => {
    const submitMock = jest.fn();

    render(<ModalForm {...defaultProps} handleSubmitForm={submitMock} />),
      { container };

    const form: HTMLImageElement = screen.getByRole('form');

    fireEvent.submit(form);

    expect(submitMock).toHaveBeenCalled();
  });

  test('should handleClose be called', () => {
    const closeMock = jest.fn();

    render(<ModalForm {...defaultProps} handleCloseModal={closeMock} />),
      { container };

    const img: HTMLImageElement = screen.getByRole('img');

    fireEvent.click(img);

    expect(closeMock).toHaveBeenCalled();
  });
});
