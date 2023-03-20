import Task from './Tasks';

export default {
  component: Task,
  title: 'Task'
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: 1,
    title: 'Test Task',
    state: 'TASK_INBOX',
    updateAt: new Date()
  }
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED'
  }
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED'
  }
};
