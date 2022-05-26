import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography, VariantsTypes } from './index';

import '../../variables.css';
import '../../App.css';

export default {
  title: 'Components/Typography',
  component: Typography
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Typography',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Typography',
  variant: VariantsTypes.Secondary
};

export const Title = Template.bind({});
Title.args = {
  children: 'Typography',
  variant: VariantsTypes.Title
};

export const Caption = Template.bind({});
Caption.args = {
  children: 'Typography',
  variant: VariantsTypes.Caption
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Typography',
  variant: VariantsTypes.Outline
};

export const Highlight = Template.bind({});
Highlight.args = {
  children: 'Typography',
  variant: VariantsTypes.Highlight
};
