import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography, VariantsTypes } from './index';

import '../../../assets/styles/reset.css';
import '../../../assets/styles/App.css';

export default {
  title: 'Components/Typography',
  component: Typography
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Text = Template.bind({});
Text.args = {
  children: 'Typography',
};

export const Highlight = Template.bind({});
Highlight.args = {
  children: 'Typography',
  variant: VariantsTypes.Highlight
};

export const Title = Template.bind({});
Title.args = {
  children: 'Typography',
  variant: VariantsTypes.Title
};

export const Subtitle = Template.bind({});
Subtitle.args = {
  children: 'Typography',
  variant: VariantsTypes.Subtitle
};

