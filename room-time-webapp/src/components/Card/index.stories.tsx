import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './index';

import '../../variables.css';
import '../../App.css';

import stargarderImg from '../../assets/images/post-stargarder.jpg';
import { Currency, RoomTypes } from '../../constants/type';

export default {
  title: 'Components/Card',
  component: Card,
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#F6F8FA', padding: '10px 20px' }}>
        <Story />
      </div>
    ),
  ]
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: stargarderImg,
  title: 'Stargarder Straße 72',
  roomType: RoomTypes.BrenzlauerBerg,
  square: 32,
  room: 1,
  price: 650,
  currency: Currency.Euro
};
