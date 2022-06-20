// Components
import Form from '@components/Form';
import Modal from '@components/Modal';

// Library
import React, { FormEvent } from 'react';

// Constants
import { FormVariants, PRODUCT_TYPE_LIST } from '@constants/types';

// Type
import { Product } from '@models/product';

interface ModalFormProps {
  product: Product;
  isModalShow: boolean;
  validateMessage: string;
  isButtonLoading: boolean;
  handleSubmitForm: (event: FormEvent, product: Product) => void;
  handleCloseModal: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({
  product,
  isModalShow,
  validateMessage = '',
  isButtonLoading,
  handleSubmitForm,
  handleCloseModal
}) => (
  <Modal
    isVisible={isModalShow}
    onClose={handleCloseModal}
  >
    <Form
      variants={!product.id ? FormVariants.Create : FormVariants.Edit}
      options={PRODUCT_TYPE_LIST}
      productItem={product}
      validateMessage={validateMessage}
      isButtonLoading={isButtonLoading}
      onSubmit={handleSubmitForm}
    />
  </Modal>
);

export default ModalForm;
