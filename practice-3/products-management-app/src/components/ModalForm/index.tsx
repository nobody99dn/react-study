// Libraries
import React, { FormEvent, memo } from 'react';

// Components
import { Form, Modal } from '@components/index';

// Constants
import { PRODUCT_TYPE_LIST } from '@constants/index';

// Models
import { Product } from '@models/product';

// Types
import { FormVariants } from '@common-types/index';

export interface ModalFormProps {
  product: Product;
  isModalShow: boolean;
  validateMessage: string;
  handleSubmitForm: (product: Product) => void;
  handleCloseModal: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({
  product,
  isModalShow,
  validateMessage = '',
  handleSubmitForm,
  handleCloseModal
}) => (
  <Modal isVisible={isModalShow} handleClose={handleCloseModal}>
    <Form
      variants={!product.id ? FormVariants.Create : FormVariants.Edit}
      options={PRODUCT_TYPE_LIST}
      productItem={product}
      validateMessage={validateMessage}
      handleSubmit={handleSubmitForm}
    />
  </Modal>
);

export default memo(ModalForm);
