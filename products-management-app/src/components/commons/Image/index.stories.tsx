import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Image, ImageTypes } from './index';

import '../../../assets/styles/App.css';
import '../../../assets/styles/variables.css';
import './index.css';

import logo from '../../../assets/images/logo.png';
import iPhoneImage from '../../../assets/images/iphone-13-promax-alpine-green-alpine-green-color.jpg';

export default {
  title: 'Components/Image',
  component: Image
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: iPhoneImage,
  width: '10rem'
};

export const Logo = Template.bind({});
Logo.args = {
  imageUrl: logo,
  alt: 'Logo',
  variant: ImageTypes.Logo
};
