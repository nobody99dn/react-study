// Libraries
import { render, act, fireEvent, cleanup } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { create } from 'react-test-renderer';

// Components
import Image from './index';

// Image
import { blankImage } from '@assets/index';
import { ImageVariants } from '@constants/index';

describe('button component', () => {
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
});
