// Libraries
import React, { memo, useEffect, useState } from 'react';

// Stores
import { clearMessages, useStore } from '@store/index';

// Components
import { Text } from '@components/index';

// Styles
import './index.css';

export interface MessagePopUpProps {
  successMessage: string;
  errorMessage: string;
  isError: boolean;
}

const MessagePopUp: React.FC<MessagePopUpProps> = ({
  successMessage,
  errorMessage,
  isError
}) => {
  const { dispatch } = useStore();
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      dispatch(clearMessages());
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`popup-message${isVisible ? ' active' : ''}${
        isError ? ' popup-error' : ' popup-success'
      }`}
    >
      <Text color='var(--white)'>
        {isError ? errorMessage : successMessage}
      </Text>
    </div>
  );
};

export default memo(MessagePopUp);
