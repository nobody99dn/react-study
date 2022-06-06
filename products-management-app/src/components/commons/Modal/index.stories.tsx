// Libraries
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Modal } from './index';

// Styles
import '@assets/styles/App.css';
import '@assets/styles/variables.css';
import './index.css';

// Images
import logo from '@assets/images/logo.png';
import iPhoneImage from '@assets/images/iphone-13-promax-alpine-green-alpine-green-color.jpg';
import deleteIcon from '@assets/images/icons/trash-fill.svg';
import { Currencies, ModalVariants } from '@/constants/types';

export default {
  title: 'Components/Modal',
  component: Modal
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  show: true,
  variant: ModalVariants.Create
};
