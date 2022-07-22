// Libraries
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';

// Components
import Text from './index';

// Types
import { FsType, FwType, VariantsTypes } from '@common-types/index';

describe('Button component', () => {
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
    const defaultText = create(<Text>text</Text>).toJSON();
    expect(defaultText).toMatchSnapshot();

    const highlightText = create(
      <Text variant={VariantsTypes.Highlight}>Typography</Text>
    ).toJSON();
    expect(highlightText).toMatchSnapshot();

    const boldText = create(
      <Text fontWeight={FwType.Bold}>Typography</Text>
    ).toJSON();
    expect(boldText).toMatchSnapshot();

    const italicText = create(
      <Text fontStyle={FsType.Italic}>Typography</Text>
    ).toJSON();
    expect(italicText).toMatchSnapshot();
  });

  test('should render Text with content is Typography', () => {
    const text = 'Typography';

    const { getByText } = render(<Text>{text}</Text>, { container });

    expect(getByText(text).textContent).toMatch(text);
  });
});
