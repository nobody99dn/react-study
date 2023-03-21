// Libraries
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import SelectItem from './index';

// Styles
import '@assets/styles/reset.css';
import '@assets/styles/App.css';
import '@assets/styles/variables.css';

// Constants
import { PRODUCT_TYPE_LIST } from '@constants/index';

export default {
  title: 'Components/SelectItem',
  component: SelectItem
} as ComponentMeta<typeof SelectItem>;

const Template: ComponentStory<typeof SelectItem> = (args) => (
  <SelectItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'SelectItem label',
  name: 'select',
  options: PRODUCT_TYPE_LIST
};
