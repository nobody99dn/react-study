// Libraries
import { render, fireEvent, cleanup } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';

// Components
import TextField, { TextFieldProps } from './index';

describe('TextField component', () => {
  const defaultProps: TextFieldProps = {
    placeholder: 'Placeholder'
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
    const standard = create(<TextField {...defaultProps} />).toJSON();
    expect(standard).toMatchSnapshot();

    const outline = create(<TextField {...defaultProps} />).toJSON();
    expect(outline).toMatchSnapshot();

    const error = create(<TextField {...defaultProps} />).toJSON();
    expect(error).toMatchSnapshot();
  });

  test('should render correct placeholder', () => {});

  test('should render disable input', () => {
    render(<TextField {...defaultProps} disabled />, { container });

    const input = container.querySelector<HTMLInputElement>('input');

    expect(input).toHaveAttribute('disabled');
  });

  test('should render readonly input', () => {
    render(<TextField {...defaultProps} readonly />, { container });

    const input = container.querySelector<HTMLInputElement>('input');

    expect(input).toHaveAttribute('readonly');
  });

  test('should be call onChange', () => {
    const myMock = jest.fn();

    render(<TextField {...defaultProps} onChange={myMock} />, { container });

    const input: HTMLElement = container.getElementsByTagName('input')[0];

    fireEvent.change(input);

    expect(myMock).toHaveBeenCalled();
    if (input) {
    }
  });

  test('should render TextField with label', () => {
    const label: string = 'Label';

    render(<TextField {...defaultProps} label={label} />, { container });

    const labelElement: HTMLLabelElement =
      container.getElementsByTagName('label')[0];

    expect(labelElement).toHaveTextContent(label);
  });

  test('should render image if we pass iconUrl', () => {
    const iconUrl: string = 'ICON_URL';

    render(<TextField {...defaultProps} iconUrl={iconUrl} />, { container });

    const image: HTMLImageElement = container.getElementsByTagName('img')[0];

    expect(image).toBeTruthy();
  });
});
