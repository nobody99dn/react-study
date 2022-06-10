// Libraries
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Card } from './index';

// Styles
import '@assets/styles/App.css';
import '@assets/styles/variables.css';
import '@assets/styles/reset.css';
import './index.css';

// Images
import iPhoneImage from '@assets/images/iphone-13-promax-alpine-green-alpine-green-color.jpg';
import { Currencies } from '@constants/types';

export default {
  title: 'Components/Card',
  component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'green',
  imageUrl: iPhoneImage,
  title: 'iPhone 13 promax',
  price: 30000000,
  currency: Currencies.VND
};
