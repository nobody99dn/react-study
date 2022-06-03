// Libraries
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Text, VariantsTypes } from './index';
import { FwType } from '@components/commons/Title/index';

// Styles
import '../../../assets/styles/reset.css';
import '../../../assets/styles/App.css';
import '../../../assets/styles/variables.css';

export default {
  title: 'Components/Text',
  component: Text
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Text',
};

export const Highlight = Template.bind({});
Highlight.args = {
  children: 'Text',
  variant: VariantsTypes.Highlight,
  fw: FwType.semibold,
  fs: 'italic'
};
