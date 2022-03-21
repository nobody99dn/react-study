const actionMenu = (listItems) => `
  <div class="action-menu">
  ${listItems
    .map(
      (item) => `
    <div class="menu-item" id="${item.id}">${item.icon} ${item.content}</div>
  `
    )
    .join('')}
  </div>
`;

export default actionMenu;
