// Library
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import Form from './index';

// Styles
import '@assets/styles/App.css';
import '@assets/styles/variables.css';
import '@assets/styles/reset.css';
import './index.css';

// Constants
import { PRODUCT_TYPE_LIST } from '@constants/types';

// Types
import { FormVariants } from '@common-types/index';

export default {
  title: 'Components/Form',
  component: Form
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const CreateForm = Template.bind({});
CreateForm.args = {
  variants: FormVariants.Create,
  options: PRODUCT_TYPE_LIST,
  onSubmit: () => undefined,
  productItem: {
    id: '',
    name: '',
    type: '',
    price: 0,
    imageUrl: ''
  }
};

export const EditForm = Template.bind({});
EditForm.args = {
  variants: FormVariants.Edit,
  options: PRODUCT_TYPE_LIST,
  onSubmit: () => undefined,
  productItem: {
    id: 'product-01',
    name: 'iPhone X',
    type: 'Phone',
    price: 10000000,
    imageUrl: 'link image'
  }
};
