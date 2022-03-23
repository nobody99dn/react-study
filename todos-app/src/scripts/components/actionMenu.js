const MenuAction = (listItems) => `
  ${listItems
    .map(
      (item) => `
        <li><i class="${item.iconClass}"><i/><a class="dropdown-item" href="#">${item.context}</a></li>
      `
    )
    .join('')}
`;

export default MenuAction;
