import logo from '../../assets/images/todo-logo.png';

/**
 * Sidebar() returns a new element
 * based on the passed-in tag name
 */
const SideBar = () => `
  <div class="sidebar position-relative d-flex flex-column vh-100 p-1 float-start">
    <div class="text-center">
      <a class="logo-container" href="#"><img class="w-75" src="${logo}" alt="Icon" /></a>
      <h1 class="sidebar-title text-center">Todo Application</h1>
    </div>
    <hr>
    <div class="list-item-container">
      <div class="accordion" id="group-list">
        <div class="list-group">
        </div>
        <form id="new-group-form" class="visually-hidden">
          <input 
            type="text"
            class="group-input form-control"
          >
        </form>
        <form id="new-list-form" class="visually-hidden">
          <input 
            type="text"
            class="list-input form-control"
          >
        </form>
      </div>
    </div>
    <p class="fail-message text-danger px-4 d-none"></p>
    <p class="success-message text-success px-4 d-none"></p>
    <div class="add-new-container position-absolute bottom-0 pb-1 row w-100">
      <hr class="my-1">
      <div class="new-list-container btn col-10 py-0 d-flex align-items-center">
          <span class="fs-2">&#43</span>
          <span class="fs-6 px-3 pt-1">Add new list</span>
        </div>
          <button class="btn group-btn px-2 py-0 col-2">
            <i class="bi bi-folder-plus fs-4"></i>
          </button>
      </div>
  </div>
`;
export default SideBar;
