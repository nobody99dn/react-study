// Libraries
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { TextField, VariantsTypes } from './index';

// Styles
import '../../../assets/styles/reset.css';
import '../../../assets/styles/App.css';
import '../../../assets/styles/variables.css';

// Icons
import trashIcon from '../../../assets/images/icons/trash-fill.svg';

export default {
  title: 'Components/TextField',
  component: TextField
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  children: 'TextField',
  label: 'Text field',
  placeholder: 'Placeholder'
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'TextField',
  label: 'Text field',
  placeholder: 'Placeholder',
  variant: VariantsTypes.Outline
};

export const Error = Template.bind({});
Error.args = {
  children: 'TextField',
  label: 'Text field',
  placeholder: 'Placeholder',
  variant: VariantsTypes.Error
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'TextField',
  label: 'Text field',
  placeholder: 'Placeholder',
  disabled: true
};

export const Readonly = Template.bind({});
Readonly.args = {
  children: 'TextField',
  placeholder: 'Placeholder',
  readonly: true
};


export const IconField = Template.bind({});
IconField.args = {
  children: 'TextField',
  placeholder: 'Placeholder',
  iconUrl: trashIcon
};



