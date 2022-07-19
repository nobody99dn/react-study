// Libraries
import { render, act, fireEvent, cleanup } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { create } from 'react-test-renderer';

// Components
import Button from './index';

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
    const defaultTree = create(<Button title='Button' />).toJSON();
    expect(defaultTree).toMatchSnapshot();

    const disableTree = create(<Button title='Disable Button' isDisabled />);
    expect(disableTree).toMatchSnapshot();
  });

  test('should render button with content is Button', () => {
    act(() => {
      render(<Button title='Button' />, { container });
    });

    expect(container.textContent).toMatch('Button');
  });

  test('should render loading button', () => {
    act(() => {
      render(<Button title='Button' isLoading />, { container });
    });

    const button: HTMLElement = screen.getByRole('button');

    expect(button.textContent).toMatch('Loading...');
  });

  test('should be click 2 times', () => {
    const myMock = jest.fn();
    act(() => {
      render(<Button title='Button' handleClick={myMock} />, { container });
    });

    const button: HTMLElement = screen.getByRole('button');

    fireEvent.click(button);
    fireEvent.click(button);

    expect(myMock).toHaveBeenCalledTimes(2);
  });
});
