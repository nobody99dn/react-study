import Form from '@components/Form';
import Modal from '@components/Modal';
import { FormVariants, PRODUCT_TYPE_LIST } from '@constants/types';
import React, { useState } from 'react';
import { Product } from '@type/product';

interface ModalFormProps {
  product: Product;
  isModalShow: boolean;
  handleCloseModal: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({
  product,
  isModalShow,
  handleCloseModal
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(isModalShow);

  const handleSubmitForm = () => {
    handleCloseModal();
  };

  return (
    <Modal
      isVisible={isVisible}
      handleClose={handleCloseModal}
    >
      <Form
        handleSubmit={handleSubmitForm}
        variants={!product.id ? FormVariants.Create : FormVariants.Edit}
        options={PRODUCT_TYPE_LIST}
        productItem={product}
      />
    </Modal>
  );
};

export default ModalForm;
