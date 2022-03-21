const tasksActionMenu = (iconItem = '', contentItem = '') => `
  <div class="task-action-menu">
    <div class="menu-item">${iconItem} ${contentItem}</div>
    <div class="menu-item">${iconItem} ${contentItem}</div>
    <div class="menu-item">${iconItem} ${contentItem}</div>
  </div>
`;

export default tasksActionMenu;
