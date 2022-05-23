import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from './index';

export default {
  title: 'Components/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
