// Library
import React, { useEffect, useState } from "react";

// Constant
import { MessagePopUpVariants } from "@constants/types";

// Store
import { clearMessages, useStore } from "@store/index";

// Component
import Text from "@components/commons/Text";

// Style
import './index.css';

export interface MessagePopUpProps {
  text: string;
  messagePopUpVariant: MessagePopUpVariants;
}

const MessagePopUp: React.FC<MessagePopUpProps> = ({
  text,
  messagePopUpVariant
}) => {
  const { dispatch } = useStore();
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      dispatch(clearMessages());
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={
      `popup-message
      ${isVisible ? 'active' : ''}
      ${messagePopUpVariant === MessagePopUpVariants.Failed
        ? 'popup-error'
        : 'popup-success'
      }`
    }>
      <Text
        color='var(--white)'>
        {text}
      </Text>
    </div>
  );
};

export default MessagePopUp;
