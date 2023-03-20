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
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isVisible, onClose }) =>
  isVisible ? (
    <div className='modal'>
      <div className='modal-dialog'>
        <div className='close-icon'>
          <Image alt='close icon' imageUrl={closeIcon} onClick={onClose} />
        </div>
        <div className='modal-body'>{children}</div>
      </div>
    </div>
  ) : null;

export default Modal;
