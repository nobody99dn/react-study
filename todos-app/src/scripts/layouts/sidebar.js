export const Sidebar = (
  logoElement = '',
  listElement = '',
  newListElement = '',
  newGroupElement = ''
) => `
  <div class="d-flex justify-content-between flex-column vh-100">
    <div class="logo-container">${logoElement}</div>
    <div class="list-item-container">${listElement}</div>
    <div class="add-new-container">
      <div class="w-20 d-inline new-list-container">${newListElement}</div>
      <div class="w-80 d-inline new-group-container">${newGroupElement}</div>
    </div>
  </div>
`
