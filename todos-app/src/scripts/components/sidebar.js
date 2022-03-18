import logo from '../../assets/images/todo-icon.png';

/**
 * Sidebar() returns a new element
 * based on the passed-in tag name
 */
const Sidebar = () => `
  <div class="sidebar position-relative d-flex flex-column vh-100 p-1">
    <div>
      <a class="logo-container m-auto" href="#"><img class="w-100" src="${logo}" alt="Icon" /></a>
      <h1 class="sidebar-title text-center">Todo Application</h1>
    </div>
    <div class="list-item-container"></div>
      <div class="add-new-container position-absolute bottom-0">
        <div class="w-25 d-inline new-list-container"></div>
        <div class="w-75 d-inline new-group-container"></div>
      </div>
  </div>
`;
export default Sidebar;
