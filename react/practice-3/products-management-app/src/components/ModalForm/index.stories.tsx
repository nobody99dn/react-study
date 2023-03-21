// Libraries
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import ModalForm from './index';

// Styles
import '@assets/styles/App.css';
import '@assets/styles/variables.css';
import { ProductTypes } from '@constants/types';

export default {
  title: 'Components/ModalForm',
  component: ModalForm
} as ComponentMeta<typeof ModalForm>;

const Template: ComponentStory<typeof ModalForm> = (args) => (
  <ModalForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  product: {
    id: '',
    imageUrl: '',
    name: 'Product',
    price: 10000,
    type: ProductTypes.Laptop
  },
  isModalShow: true,
  onCloseModal: () => undefined,
  onSubmitForm: () => undefined
};
