// Libraries
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import MessagePopUp from './index';

// Styles
import '@assets/styles/reset.css';
import '@assets/styles/App.css';
import '@assets/styles/variables.css';

export default {
  title: 'Components/MessagePopUp',
  component: MessagePopUp
} as ComponentMeta<typeof MessagePopUp>;

const Template: ComponentStory<typeof MessagePopUp> = (args) => (
  <MessagePopUp {...args} />
);

export const Error = Template.bind({});
Error.args = {
  errorMessage: 'Error Message',
  isError: true
};

export const Success = Template.bind({});
Success.args = {
  successMessage: 'Success Message'
};
