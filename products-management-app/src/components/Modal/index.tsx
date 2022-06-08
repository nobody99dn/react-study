// Libraries
import React, { ReactNode, useMemo } from 'react';

// Components
import { Image } from '@components/commons/Image';

// Assets
import { closeIcon } from '@/assets';

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

  const showHideClassName: string = useMemo(() => {
    if (show) {
      return 'model show';
    }

    return 'model hide';
  }, [show]);

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
