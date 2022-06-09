// Libraries
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Select } from './index';

// Styles
import '@assets/styles/reset.css';
import '@assets/styles/App.css';
import '@assets/styles/variables.css';

// Constants
import { PRODUCT_TYPES } from '@/constants/types';

export default {
  title: 'Components/Select',
  component: Select
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Select label',
  name: 'select',
  options: PRODUCT_TYPES
};
