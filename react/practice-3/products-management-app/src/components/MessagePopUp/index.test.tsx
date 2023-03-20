// Libraries
import React from 'react';
import { render } from '@testing-library/react';
import { create } from 'react-test-renderer';

// Components
import MessagePopUp, { MessagePopUpProps } from './index';

describe('MessagePopUp component', () => {
  const defaultProps: MessagePopUpProps = {
    errorMessage: '',
    isError: false,
    successMessage: 'Success message'
  };

  test('should render correctly', () => {
    const defaultTree = create(<MessagePopUp {...defaultProps} />).toJSON();
    expect(defaultTree).toMatchSnapshot();
  });

  test('wait 2 second before disappear', () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');

    render(<MessagePopUp {...defaultProps} />);

    expect(setTimeout).toHaveBeenCalled();
  });
});
