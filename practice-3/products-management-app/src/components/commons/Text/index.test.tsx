// Libraries
import { render, cleanup } from '@testing-library/react';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';

// Components
import Text, { VariantsTypes } from './index';

// Constant
import { FsType, FwType } from '@constants/index';

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

    const boldText = create(<Text fw={FwType.Bold}>Typography</Text>).toJSON();
    expect(boldText).toMatchSnapshot();

    const italicText = create(
      <Text fs={FsType.Italic}>Typography</Text>
    ).toJSON();
    expect(italicText).toMatchSnapshot();
  });

  test('should render Text with content is Typography', () => {
    const text = 'Typography';

    const { getByText } = render(<Text>{text}</Text>, { container });

    expect(getByText(text).textContent).toMatch(text);
  });
});
