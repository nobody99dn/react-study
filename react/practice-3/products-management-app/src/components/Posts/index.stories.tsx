// Library
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import Posts from './index';

// Styles
import '@assets/styles/reset.css';
import '@assets/styles/App.css';
import '@assets/styles/variables.css';
import './index.css';

// Model
import { Product } from '@models/product';

// Constants
import { ProductTypes } from '@constants/index';

export default {
  title: 'Components/Posts',
  component: Posts
} as ComponentMeta<typeof Posts>;

const Template: ComponentStory<typeof Posts> = (args) => <Posts {...args} />;

export const Default = Template.bind({});
const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 13 Promax',
    imageUrl:
      'https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-991ea96/wp-content/uploads/2022/04/iPhone-13-pro-max.png',
    price: 14000000,
    type: ProductTypes.Phone
  },
  {
    id: '2',
    name: 'MacBook Pro 13 M2 2022',
    imageUrl:
      'https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-991ea96/wp-content/uploads/2022/06/mac-m2.png',
    price: 35990000,
    type: ProductTypes.Laptop
  }
];
Default.args = {
  products
};
