// Libraries
import { render, act, fireEvent, cleanup } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';

// Components
import Image from './index';

// Image
import { blankImage } from '@assets/index';

// Constant
import { ERROR_MESSAGES, ImageVariants } from '@constants/index';

describe('Image component', () => {
  let container: HTMLElement;

  const defaultProps = {
    alt: 'image',
    imageUrl: blankImage
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
    const defaultImage = create(<Image {...defaultProps} />).toJSON();
    expect(defaultImage).toMatchSnapshot();

    const logo = create(
      <Image {...defaultProps} variant={ImageVariants.Logo} />
    ).toJSON();
    expect(logo).toMatchSnapshot();

    const icon = create(
      <Image {...defaultProps} variant={ImageVariants.Icon} />
    ).toJSON();
    expect(icon).toMatchSnapshot();
  });

  test('should be click 1 times', () => {
    const myMock = jest.fn();

    render(<Image {...defaultProps} onImageClick={myMock} />, { container });

    const image = screen.getByRole('img');

    fireEvent.click(image);

    expect(myMock.mock.calls.length).toEqual(1);
  });

  test('should call onError when pass bad src', () => {
    const LOAD_FAILURE_SRC = 'LOAD_FAILURE_SRC';

    const myMock = jest.fn();

    render(
      <Image
        {...defaultProps}
        imageUrl={LOAD_FAILURE_SRC}
        onImageError={myMock}
      />
    );

    const image = screen.getByRole('img');

    fireEvent.error(image);

    expect(myMock).toHaveBeenCalled();
  });

  test('should render error message if pass isError true', () => {
    const { getByText } = render(<Image {...defaultProps} isError />, {
      container
    });

    expect(getByText(ERROR_MESSAGES.IMAGE_NOT_FOUND)).toBeInTheDocument();
  });
});
