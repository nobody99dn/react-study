// Libraries
import React from 'react';
import { create } from 'react-test-renderer';

// Components
import LoadingIndicator from './index';

describe('button component', () => {
  test('should render correctly', () => {
    const defaultTree = create(<LoadingIndicator />).toJSON();
    expect(defaultTree).toMatchSnapshot();
  });
});
