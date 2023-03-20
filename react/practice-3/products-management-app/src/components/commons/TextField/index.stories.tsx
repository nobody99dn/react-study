// Libraries
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import TextField from './index';

// Styles
import '@assets/styles/reset.css';
import '@assets/styles/App.css';
import '@assets/styles/reset.css';
import '@assets/styles/variables.css';

// Icons
import { searchIcon } from '@assets/index';

// Types
import { TextFieldVariants } from '@common-types/index';

export default {
  title: 'Components/TextField',
  component: TextField
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  label: 'Text field',
  placeholder: 'Placeholder',
  name: 'standard form'
};

export const Outline = Template.bind({});
Outline.args = {
  label: 'Text field',
  placeholder: 'Placeholder',
  variant: TextFieldVariants.Outline
};

export const Error = Template.bind({});
Error.args = {
  label: 'Text field',
  placeholder: 'Placeholder',
  variant: TextFieldVariants.Error
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Text field',
  placeholder: 'Placeholder',
  disabled: true
};

export const Readonly = Template.bind({});
Readonly.args = {
  placeholder: 'Placeholder',
  readonly: true
};

export const IconField = Template.bind({});
IconField.args = {
  placeholder: 'Placeholder',
  iconUrl: searchIcon,
  height: '4.25rem'
};
