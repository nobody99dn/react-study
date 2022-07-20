// Libraries
import React, { useEffect, useState } from 'react';

// Stores
import { clearMessages, useStore } from '@store/index';

// Components
import { Text } from '@components/index';

// Styles
import './index.css';

export interface MessagePopUpProps {
  successMessage: string;
  errorMessage: string;
}

const MessagePopUp: React.FC<MessagePopUpProps> = ({
  successMessage,
  errorMessage
}) => {
  const { dispatch } = useStore();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [text, setText] = useState<string>('');
  useEffect(() => {
    successMessage ? setText(successMessage) : setText(errorMessage);
  }, [errorMessage, successMessage]);
  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      dispatch(clearMessages());
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`popup-message
      ${isVisible ? 'active' : ''}
      ${errorMessage ? 'popup-error' : 'popup-success'}`}
    >
      <Text color='var(--white)'>{text}</Text>
    </div>
  );
};

export default MessagePopUp;
