const MenuAction = (listItems) => `
  ${listItems
    .map(
      (item) => `
        <li class="d-flex"><a data-value="${item.CONTENT}" class="dropdown-item text-capitalize ${item.CLASS}" href="#"><i class="${item.ICON_CLASS} px-2"></i>${item.CONTENT}</a></li>
      `
    )
    .join('')}
`;

export default MenuAction;
