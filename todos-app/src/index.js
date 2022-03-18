// Components
import Sidebar from './scripts/layouts/sidebar';

const handleRenderApp = () => {
  // Render Sidebar
  document.getElementById('root').insertAdjacentHTML('afterbegin', Sidebar());
};

(() => {
  handleRenderApp();
})();
