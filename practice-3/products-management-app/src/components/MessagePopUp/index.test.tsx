// Libraries
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
});
