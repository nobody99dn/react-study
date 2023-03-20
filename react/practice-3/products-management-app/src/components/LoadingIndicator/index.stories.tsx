// Libraries
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import LoadingIndicator from './index';

// Styles
import '@assets/styles/reset.css';
import '@assets/styles/App.css';
import '@assets/styles/variables.css';

export default {
  title: 'Components/LoadingIndicator',
  component: LoadingIndicator
} as ComponentMeta<typeof LoadingIndicator>;

const Template: ComponentStory<typeof LoadingIndicator> = (args) => (
  <LoadingIndicator {...args} />
);

export const Default = Template.bind({});
Default.args = {};
