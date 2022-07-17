// Libraries
import { render, fireEvent, cleanup } from '@testing-library/react';
import { screen, getByLabelText } from '@testing-library/dom';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';

// Components
import SelectItem from './index';

describe('Select Item component', () => {
  let container: HTMLElement;

  const defaultProps = {
    label: 'Select Item Label',
    name: 'select',
    options: ['option 1', 'option 2', 'option 3'],
    onChange: jest.fn()
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
    const defaultSelectItem = create(<SelectItem {...defaultProps} />).toJSON();
    expect(defaultSelectItem).toMatchSnapshot();

    const selectItemWithValue = create(
      <SelectItem {...defaultProps} value={defaultProps.options[1]} />
    ).toJSON();
    expect(selectItemWithValue).toMatchSnapshot();
  });

  test('should render correct label', () => {
    const label: string = 'Select Component';
    render(<SelectItem {...defaultProps} label={label} />, { container });

    expect(container.querySelector('label')).toHaveTextContent(label);
  });

  test('should be click SelectItem', () => {
    const myMock = jest.fn();

    render(<SelectItem {...defaultProps} onChange={myMock} />, { container });

    const select: HTMLElement = container.getElementsByTagName('select')[0];

    fireEvent.change(select);

    expect(myMock).toHaveBeenCalled();
  });
});
