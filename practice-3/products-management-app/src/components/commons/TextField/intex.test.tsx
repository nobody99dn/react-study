// Libraries
import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
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

  test('should render TextField with label', () => {
    const label = 'Label';

    render(<TextField {...defaultProps} label={label} />, { container });

    const labelElement: HTMLLabelElement =
      container.getElementsByTagName('label')[0];

    expect(labelElement).toHaveTextContent(label);
  });

  test('should render image if we pass iconUrl', () => {
    const iconUrl = 'ICON_URL';

    render(<TextField {...defaultProps} iconUrl={iconUrl} />, { container });

    const image: HTMLImageElement = container.getElementsByTagName('img')[0];

    expect(image).toBeTruthy();
  });

  test('should render correct value', () => {
    const defaultValue = 'Test';

    render(<TextField {...defaultProps} defaultValue={defaultValue} />);

    const input: HTMLInputElement = screen.getByDisplayValue(defaultValue);

    expect(input.value).toMatch(defaultValue);
  });

  test('should be changed', () => {
    const myMock = jest.fn();
    const displayText = 'Test';

    render(
      <TextField
        {...defaultProps}
        onInputChange={myMock}
        defaultValue={displayText}
      />
    );

    const input: HTMLInputElement = screen.getByDisplayValue(displayText);

    fireEvent.change(input, { target: { value: 'Test1' } });

    expect(myMock).toHaveBeenCalled();
  });
});
