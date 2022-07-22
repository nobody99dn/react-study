// Libraries
import React from 'react';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
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
    defaultValue: 'option 1',
    onSelectChange: jest.fn()
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
      <SelectItem {...defaultProps} defaultValue={defaultProps.options[1]} />
    ).toJSON();
    expect(selectItemWithValue).toMatchSnapshot();
  });

  test('should render correct label', () => {
    const label = 'Select Component';
    render(<SelectItem {...defaultProps} label={label} />, { container });

    expect(container.querySelector('label')).toHaveTextContent(label);
  });
});
