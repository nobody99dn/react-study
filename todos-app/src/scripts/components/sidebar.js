import logo from '../../assets/images/todo-logo.png';

/**
 * Sidebar() returns a new element
 * based on the passed-in tag name
 */
const Sidebar = () => `
  <div class="sidebar position-relative d-flex flex-column vh-100 p-1">
    <div class="text-center">
      <a class="logo-container" href="#"><img class="w-75" src="${logo}" alt="Icon" /></a>
      <h1 class="sidebar-title text-center">Todo Application</h1>
    </div>
    <div class="list-item-container"></div>
      <div class="add-new-container position-absolute bottom-0">
        <div class="w-25 d-inline new-list-container"></div>
        <div class="w-75 d-inline new-group-container">
          <button class="btn py-1 px-2">
            <i class="fa-solid fa-folder-plus fa-lg"></i>
          </button>
        </div>
      </div>
      <hr>
  </div>
`;
export default Sidebar;
