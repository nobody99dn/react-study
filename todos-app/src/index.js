// Library
import 'bootstrap-icons/font/bootstrap-icons.css';

// Components
import TasksContainer from './scripts/layouts/tasksContainer';
import taskLine from './scripts/components/taskLine';
import taskInput from './scripts/components/taskInput';
import actionMenu from './scripts/components/actionMenu';

const handleRenderApp = () => {
  // Render Sidebar
  document
    .getElementById('root')
    .insertAdjacentHTML('afterbegin', TasksContainer());
  document
    .getElementsByClassName('task-list')[0]
    .insertAdjacentHTML('afterbegin', taskLine());
  document
    .getElementsByClassName('form-input')[0]
    .insertAdjacentHTML('afterbegin', taskInput());
  document
    .getElementsByClassId('task-container')[0]
    .insertAdjacentHTML('afterbegin', actionMenu());

  // Render list on sidebar
  document.querySelector('.list-item-container').innerHTML = Group([
    {
      id: 'f5ab43e8-0867-4ea0-85cf-654c0a8fa753',
      type: 'list',
      name: 'Day 2',
      tasks: []
    },
    {
      id: '82a7d2c0-4abe-4180-9c49-3ba1d50f33cc',
      type: 'group',
      name: 'Training'
    },
    {
      id: '82a7d2c0-4abe-4180-9c49-3ba1d5123sdc',
      type: 'group',
      name: 'Practice',
      lists: [
        {
          id: 'f5ab43e8-0867-4ea0-85cf-654c0a8fa753',
          type: 'list',
          name: 'Day 1'
        }
      ]
    }
  ]);
};

(() => {
  handleRenderApp();
})();
