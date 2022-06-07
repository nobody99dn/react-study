// Libraries
import React, { ReactNode } from 'react';

// Components
import { Image } from '@components/commons/Image';

// Assets
import { closeIcon } from '@/assets';

interface ModalProps {
  children: ReactNode;
  show: boolean;
  handleClose(): void;
  handleSubmitForm(): void;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  show,
  handleClose
}) => {
  const showHideClassName: string = show ? 'modal show' : 'modal hide';

  return (
    <div className={showHideClassName}>
      <div className='modal-dialog'>
        <Image
          alt={'close icon'}
          className={'close-icon'}
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
  );
};
