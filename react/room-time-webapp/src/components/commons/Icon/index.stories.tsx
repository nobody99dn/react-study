import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon, IconVariants } from './index';

import googleIcon from '../../assets/icons/google-plus.svg';
import freeIcon from '../../assets/icons/icon-free.svg';

import '../../variables.css';
import '../../App.css';

export default {
  title: 'Components/Icon',
  component: Icon
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Social = Template.bind({});
Social.args = {
  variant: IconVariants.Social,
  iconUrl: googleIcon,
  hint: 'Google Plus'
};

export const Product = Template.bind({});
Product.args = {
  variant: IconVariants.Product,
  iconUrl: freeIcon,
  hint: 'Free Icon'
};
Product.decorators = [
  (Story) => (
    <div style={{ backgroundColor: '#607d8b', padding: '10px 20px' }}>
      <Story />
    </div>
  ),
];
