import { ComponentStory, ComponentMeta } from '@storybook/react';

import { User } from './index';

import '../../variables.css';
import '../../App.css';

import activeAvatar from '../../assets/images/anna.jpg';
import deactivateAvatar from '../../assets/images/bella.jpg';

export default {
  title: 'Components/User',
  component: User
} as ComponentMeta<typeof User>;

const Template: ComponentStory<typeof User> = (args) => <User {...args} />;

export const Active = Template.bind({});
Active.args = {
  avatar: activeAvatar,
  hint: 'Anna avatar',
  name: 'Anna',
  role: 'Student'
};

export const Deactivate = Template.bind({});
Deactivate.args = {
  avatar: deactivateAvatar,
  hint: 'Bella avatar',
  name: 'Bella',
  role: 'Teacher',
  active: true
};
