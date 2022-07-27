// Libraries
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import Filter from './index';

// Styles
import '@assets/styles/reset.css';
import '@assets/styles/App.css';
import '@assets/styles/variables.css';

// Constants
import { PRODUCT_TYPE_LIST, ORDER_OPTIONS } from '@constants/index';

export default {
  title: 'Components/Filter',
  component: Filter
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = (args) => <Filter {...args} />;

export const Default = Template.bind({});
Default.args = {
  typeFilterOptions: PRODUCT_TYPE_LIST,
  priceFilterOptions: ORDER_OPTIONS
};
