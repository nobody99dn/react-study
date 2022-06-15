import Text, { VariantsTypes } from "@components/commons/Text";
import { MessagePopUpVariants } from "@constants/types";
import React, { useEffect, useState } from "react";

import './index.css';

export interface MessagePopUpProps {
  text: string;
  messagePopUpVariant: MessagePopUpVariants;
}

const MessagePopUp: React.FC<MessagePopUpProps> = ({
  text,
  messagePopUpVariant
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  return (
    isVisible ? <div className={
      `popup-message 
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
      : null
  );
};

export default MessagePopUp;
