/**
 * List() returns a new element
 * based on the passed-in tag name
 */
const List = (id, name) => `
  <div>
    <li
      data-value="${name}" 
      class="list-group-item list-group-item-action d-flex align-items-center justify-content-start rounded-0 py-0 mb-1 rounded-1"
      id="${id}"
    >
      <i class="bi bi-list fs-3 px-2"></i>
      <form class="form-item visually-hidden">
        <input 
          type="text" 
          value="${name}" 
          class="list-name-input form-control" id="${id}">
      </form>
      <span class="list-name" data-value="${name}">${name}</span>
      </li>
      <ul class="dropdown-menu"></ul>
    </div>
`;

export default List;
