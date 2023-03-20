// Libraries
import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';

// Components
import Image, { ImageProps } from './index';

// Image
import { blankImage } from '@assets/index';

// Types
import { ImageVariants } from '@common-types/index';

describe('Image component', () => {
  let container: HTMLElement;

  const defaultProps: ImageProps = {
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

    render(<Image {...defaultProps} onClick={myMock} />, { container });

    const image: HTMLImageElement = screen.getByRole('img');

    fireEvent.click(image);

    expect(myMock.mock.calls.length).toEqual(1);
  });
});
