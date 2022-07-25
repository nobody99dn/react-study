// Libraries
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import Card from './index';

// Styles
import '@assets/styles/App.css';
import '@assets/styles/variables.css';
import '@assets/styles/reset.css';
import './index.css';

// Constants
import { Currencies, ProductTypes } from '@constants/index';

export default {
  title: 'Components/Card',
  component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  product: {
    id: '1',
    name: 'iPhone 13 Promax',
    imageUrl:
      'https://lh6.googleusercontent.com/mCD1IQ4UfXYJkz6508H5_rspW2kt2HRaTMB8tPQArF8EMSonWBKHCRG0LL47xhI-0V8=w2400',
    price: 14000000,
    type: ProductTypes.Phone
  },
  currency: Currencies.VND,
  onNavigate: () => undefined,
  onDeleteProduct: () => undefined
};
