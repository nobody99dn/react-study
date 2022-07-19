// Library
import React, { ReactNode } from 'react';

// Components
import Image from '@components/commons/Image';

// Assets
import { closeIcon } from '@assets/index';

// Style
import './index.css';

export interface ModalProps {
  children: ReactNode;
  isVisible: boolean;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isVisible, handleClose }) =>
  isVisible ? (
    <div className='modal'>
      <div className='modal-dialog'>
        <Image
          alt='close icon'
          className='close-icon'
          imageUrl={closeIcon}
          handleClick={handleClose}
        />
        <div className='modal-body'>{children}</div>
      </div>
    </div>
  ) : null;

export default Modal;
