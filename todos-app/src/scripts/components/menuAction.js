const MenuAction = (listItems) => `
  ${listItems
    .map(
      (item) => `
        <li class="d-flex"><a data-value="${item.content}" class="dropdown-item text-capitalize ${item.class}" href="#"><i class="${item.iconClass} px-2"></i>${item.content}</a></li>
      `
    )
    .join('')}
`;

export default MenuAction;
