// Libraries
import React, { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Form } from './index';

// Styles
import '@assets/styles/App.css';
import '@assets/styles/variables.css';

// Constants
import { ButtonVariants, FormVariants } from '@constants/types';

export default {
  title: 'Components/Form',
  component: Form
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const CreateForm = Template.bind({});
CreateForm.args = {
  variants: FormVariants.Create,
  handleSubmit() { }
};
