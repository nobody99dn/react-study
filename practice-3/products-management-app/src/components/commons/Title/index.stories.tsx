// Libraries
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import Title from './index';

// Constants

// Styles
import '@assets/styles/reset.css';
import '@assets/styles/App.css';
import '@assets/styles/variables.css';
import './index.css';
import { FwType, VariantTypes } from '@common-types/index';

export default {
  title: 'Components/Title',
  component: Title
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Title',
  variant: VariantTypes.Default
};

export const Subtitle = Template.bind({});
Subtitle.args = {
  children: 'Title',
  variant: VariantTypes.Subtitle,
  fontWeight: FwType.Bold,
  fontStyle: 'italic'
};
