// Libraries
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import Image from './index';

// Styles
import '@assets/styles/App.css';
import '@assets/styles/variables.css';
import '@assets/styles/reset.css';
import './index.css';

// Images
import logo from '@assets/images/logo.png';
import iPhoneImage from '@assets/images/iphone-13-pro-max-alpine-green-alpine-green-color.jpg';
import deleteIcon from '@assets/images/icons/trash-fill.svg';

// Types
import { ImageVariants } from '@common-types/image';

export default {
  title: 'Components/Image',
  component: Image
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: iPhoneImage,
  alt: 'iPhone 13 promax image'
};

export const Logo = Template.bind({});
Logo.args = {
  imageUrl: logo,
  alt: 'Logo',
  variant: ImageVariants.Logo
};

export const Icon = Template.bind({});
Icon.args = {
  imageUrl: deleteIcon,
  alt: 'Delete icon',
  variant: ImageVariants.Icon
};
