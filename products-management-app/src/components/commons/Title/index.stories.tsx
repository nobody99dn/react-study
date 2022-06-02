import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VariantsTypes, Title, FwType } from './index';

import '../../../assets/styles/reset.css';
import '../../../assets/styles/App.css';
import '../../../assets/styles/variables.css';

export default {
  title: 'Components/Title',
  component: Title
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Title',
  variant: VariantsTypes.Default
};

export const Subtitle = Template.bind({});
Subtitle.args = {
  children: 'Title',
  variant: VariantsTypes.Subtitle,
  fw: FwType.semibold,
  fs: 'italic'
};

