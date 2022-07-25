// Libraries
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import SearchInput from './index';

// Styles
import '@assets/styles/App.css';
import '@assets/styles/variables.css';

// Constants

export default {
  title: 'Components/SearchInput',
  component: SearchInput
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => (
  <SearchInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  productName: 'Search value',
  onSearchProduct: () => undefined
};
