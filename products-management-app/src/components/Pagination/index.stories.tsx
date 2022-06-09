// Library
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Pagination } from './index';

// Styles
import '@assets/styles/reset.css';
import '@assets/styles/App.css';
import '@assets/styles/variables.css';
import './index.css';

export default {
  title: 'Components/Pagination',
  component: Pagination
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  postsPerPage: 6,
  totalPosts: 37,
  paginate: () => { }
};
