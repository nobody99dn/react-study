// Libraries
import React, { ReactNode, useState } from 'react';

// Components
import { Button } from '@components/commons/Button';

// Constants
import { ButtonVariants, ModalVariants } from '@/constants/types';

interface ModalProps {
  children: ReactNode;
  show: boolean;
  variant: ModalVariants;
  handleClose(): void;
  handleSubmitForm(): void;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  show,
  variant,
  handleClose,
  handleSubmitForm
}) => {
  const showHideClassName: string = show ? 'modal show' : 'modal hide';

  return (
    <div className={showHideClassName}>
      <div className='modal-dialog'>
        <div className='modal-body'>
          {children}
        </div>
        <div className='button-group'>
        </div>
      </div>
    </div >
  );
};
