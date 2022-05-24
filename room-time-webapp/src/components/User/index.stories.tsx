import { ComponentStory, ComponentMeta } from '@storybook/react';

import { User } from './index';

import '../../variables.css';
import '../../App.css';

export default {
  title: 'Components/Typography',
  component: User
} as ComponentMeta<typeof User>;

const Template: ComponentStory<typeof User> = (args) => <User {...args} />;

export const Active = Template.bind({});
Active.args = {

};
