// Libraries
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Card } from './index';

// Styles
import '@assets/styles/App.css';
import '@assets/styles/variables.css';
import './index.css';

// Images
import logo from '@assets/images/logo.png';
import iPhoneImage from '@assets/images/iphone-13-promax-alpine-green-alpine-green-color.jpg';
import deleteIcon from '@assets/images/icons/trash-fill.svg';
import { Currencies } from '@/constants/types';

export default {
  title: 'Components/Card',
  component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'green',
  imageUrl: iPhoneImage,
  title: 'iPhone 13 promax',
  price: 30000000,
  currency: Currencies.VND
};
