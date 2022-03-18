// Components
import Sidebar from './scripts/components/sidebar';

const handleRenderApp = () => {
  // Render Sidebar
  document.getElementById('root').insertAdjacentHTML('afterbegin', Sidebar());
};

(() => {
  handleRenderApp();
})();
