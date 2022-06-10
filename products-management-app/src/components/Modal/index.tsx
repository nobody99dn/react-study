// Library
import React, { ReactNode, useMemo } from 'react';

// Components
import { Image } from '@components/commons/Image';

// Assets
import { closeIcon } from '@assets/index';

// Style
import './index.css';

interface ModalProps {
  children: ReactNode;
  show: boolean;
  handleClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  show,
  handleClose
}) => {
  return show ? (
    <div className='modal'>
      <div className='modal-dialog'>
        <Image
          alt='close icon'
          className='close-icon'
          imageUrl={closeIcon}
          onImageClick={handleClose}
        />
        <div className='modal-body'>
          {children}
        </div>
        <div className='button-group'>
        </div>
      </div>
    </div >
  ) : null;
};
