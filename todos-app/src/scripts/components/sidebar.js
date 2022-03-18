export const Sidebar = (logoURL = '', listsElement = '') => `
  <div class="sidebar position-relative d-flex flex-column vh-100 p-1">
    <div class="logo-container">${logoURL}</div>
    <div class="list-item-container">${listsElement}</div>
    <div class="add-new-container position-absolute bottom-0">
      <div class="w-25 d-inline new-list-container"></div>
      <div class="w-75 d-inline new-group-container"></div>
    </div>
  </div>
`
