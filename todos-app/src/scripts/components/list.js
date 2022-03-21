/**
 * List() returns a new element
 * based on the passed-in tag name
 */
const List = (list) => `
  <li
    data-value="${list.name}" 
    class="list-group-item list-group-item-action d-flex align-items-center px-3"
    id="${list.id}"
  >
    <i class="bi bi-list fs-3"></i>
    <span class="">${list.name}</span>
  </li>
`;

export default List;
