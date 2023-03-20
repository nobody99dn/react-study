import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UserInfo } from './index';

import '../../variables.css';
import '../../App.css';

import activeAvatar from '../../assets/images/anna.jpg';
import deactivateAvatar from '../../assets/images/bella.jpg';

export default {
  title: 'Components/UserInfo',
  component: UserInfo
} as ComponentMeta<typeof UserInfo>;

const Template: ComponentStory<typeof UserInfo> = (args) => <UserInfo {...args} />;

export const Active = Template.bind({});
Active.args = {
  avatar: activeAvatar,
  name: 'Anna',
  role: 'Student'
};

export const Deactivate = Template.bind({});
Deactivate.args = {
  avatar: deactivateAvatar,
  name: 'Bella',
  role: 'Teacher',
  active: true
};
