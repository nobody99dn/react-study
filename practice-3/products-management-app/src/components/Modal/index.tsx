// Library
import React, { ReactNode } from 'react';

// Components
import Image from '@components/commons/Image';

// Assets
import { closeIcon } from '@assets/index';

// Style
import './index.css';

interface ModalProps {
  children: ReactNode;
  isVisible: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  children,
  isVisible,
  onClose
}) => isVisible ? (
  <div className='modal'>
    <div className='modal-dialog'>
      <Image
        alt='close icon'
        className='close-icon'
        imageUrl={closeIcon}
        onImageClick={onClose} />
      <div className='modal-body'>
        {children}
      </div>
      <div className='button-group'>
      </div>
    </div>
  </div>
) : null;

export default Modal;
