// Libraries
import React, { ReactNode } from 'react';

// Components
import { Image } from '@components/index';

// Assets
import { closeIcon } from '@assets/index';

// Styles
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
          imageUrl={closeIcon}
          handleClick={handleClose}
        />
        <div className='modal-body'>{children}</div>
      </div>
    </div>
  ) : null;

export default Modal;
