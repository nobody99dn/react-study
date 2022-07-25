// Libraries
import React from 'react';
import { cleanup } from '@testing-library/react';
import { create } from 'react-test-renderer';

// Components
import Title, { TitleProps } from './index';

// Types
import { FwType, VariantTypes } from '@common-types/index';

describe('Title component', () => {
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
    const title = create(<Title>Title</Title>).toJSON();
    expect(title).toMatchSnapshot();

    const subtitle = create(
      <Title variant={VariantTypes.Subtitle}>Title</Title>
    ).toJSON();
    expect(subtitle).toMatchSnapshot();
  });

  test('should render with custom style', () => {
    const customProps: TitleProps = {
      color: '#0f0',
      fontWeight: FwType.Bold,
      fontSize: '24px',
      fontStyle: 'italic',
      children: 'Title'
    };

    const title = create(<Title {...customProps} />).toJSON();

    expect(title).toMatchSnapshot();
  });
});
