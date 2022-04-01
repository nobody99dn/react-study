/**
 * List() returns a new element
 * based on the passed-in tag name
 */
const List = (list) => `
  <li
    data-value="${list.name}" 
    class="list-group-item list-group-item-action d-flex align-items-center justify-content-start rounded-0 py-0 mb-1 rounded-1"
    id="${list.id}"
  >
    <i class="bi bi-list fs-3 px-2"></i>
    <form>
      <input 
        type="text" 
        value="${list.name}" 
        class="form-control visually-hidden" id="${list.id}">
    </form>
    <span class="">${list.name}</span>
  </li>
`;

export default List;
