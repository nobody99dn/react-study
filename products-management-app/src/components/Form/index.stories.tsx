// Libraries
import React, { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Form } from './index';

// Styles
import '@assets/styles/App.css';
import '@assets/styles/variables.css';

// Constants
import { FormVariants } from '@constants/types';
import { PRODUCT_TYPE_LIST } from '../../constants/types';

export default {
  title: 'Components/Form',
  component: Form
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const CreateForm = Template.bind({});
CreateForm.args = {
  variants: FormVariants.Create,
  options: PRODUCT_TYPE_LIST,
  handleSubmit() { },
  productItem: {
    id: '',
    name: '',
    type: '',
    price: 0
  }
};

export const EditForm = Template.bind({});
EditForm.args = {
  variants: FormVariants.Edit,
  options: PRODUCT_TYPE_LIST,
  handleSubmit() { },
  productItem: {
    id: 'product-01',
    name: 'iPhone X',
    type: 'Phone',
    price: 10000000
  }
};
