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
      id: '82a7d2c0-4abe-4180-9c49-3ba1d50f33cc',
      type: 'group',
      name: 'Training',
      lists: []
    },
    {
      id: '82a7d2c0-4abe-4180-9c49-3ba1d5123sdc',
      type: 'group',
      name: 'Practice',
      lists: []
    }
  ]);
};

(() => {
  handleRenderApp();
})();
