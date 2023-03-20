// Libraries
import React, { memo } from 'react';

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
  onSubmitForm: (product: Product) => void;
  onCloseModal: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({
  product,
  isModalShow,
  onSubmitForm,
  onCloseModal
}) => (
  <Modal isVisible={isModalShow} onClose={onCloseModal}>
    <Form
      variants={!product.id ? FormVariants.Create : FormVariants.Edit}
      options={PRODUCT_TYPE_LIST}
      productItem={product}
      onSubmit={onSubmitForm}
    />
  </Modal>
);

export default memo(ModalForm);
