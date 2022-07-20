// Library
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import { Form, Modal } from '@components/index';

// Styles
import '@assets/styles/App.css';
import '@assets/styles/variables.css';
import './index.css';

// Constant
import { FormVariants } from '@constants/index';

export default {
  title: 'Components/Modal',
  component: Modal
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  isVisible: true,
  children: (
    <Form
      validateMessage=''
      handleSubmit={() => {}}
      variants={FormVariants.Create}
      productItem={{
        id: '',
        name: '',
        type: '',
        price: 0,
        imageUrl: ''
      }}
    />
  )
};
