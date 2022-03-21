// Library
import 'bootstrap-icons/font/bootstrap-icons.css';

// Components
import Sidebar from './scripts/layouts/sidebar';
import Group from './scripts/components/group';

const handleRenderApp = () => {
  // Render Sidebar
  document.getElementById('root').insertAdjacentHTML('afterbegin', Sidebar());

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
