// Libraries
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import Card from './index';

// Styles
import '@assets/styles/App.css';
import '@assets/styles/variables.css';
import '@assets/styles/reset.css';
import './index.css';

// Constants
import { Currencies, ProductTypes } from '@constants/index';

export default {
  title: 'Components/Card',
  component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  product: {
    id: '1',
    name: 'iPhone 13 Promax',
    imageUrl:
      'https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-991ea96/wp-content/uploads/2022/04/iPhone-13-pro-max.png',
    price: 14000000,
    type: ProductTypes.Phone
  },
  currency: Currencies.VND,
  onOpenModalForm: () => {},
  onDeleteProduct: () => {}
};
