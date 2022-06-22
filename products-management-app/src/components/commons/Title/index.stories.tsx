// Libraries
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import Title, { VariantTypes } from './index';

import { FwType } from '@constants/types';

// Styles
import '@assets/styles/reset.css';
import '@assets/styles/App.css';
import '@assets/styles/variables.css';
import './index.css';

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
  fw: FwType.Bold,
  fs: 'italic'
};

