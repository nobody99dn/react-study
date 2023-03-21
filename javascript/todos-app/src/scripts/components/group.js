// Component
import List from './list';

// Constants
import { TODO_TYPE } from '../constants/todo';

/**
 * Group() returns a new element
 * based on the passed-in tag name
 */
const Group = (groups = []) => `
  ${groups
    .map(({ id, name, lists, type }, index) => {
      if (type === TODO_TYPE.GROUP) {
        // This will return block DOM contain list
        return `
        <div class="accordion-item border-0 mb-1">
          <p class="accordion-header " id="heading-${index}">
            <button
              id="${id}"
              class="group-button accordion-button collapsed py-1 rounded-1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#group-${index}"
              aria-expanded="false"
              aria-controls="group-${index}"
            >
              <i class="bi bi-collection fs-4 px-2"></i>
              <form class="form-item visually-hidden">
                <input
                  type="text" 
                  value="${name}" 
                  class="group-name-input form-control"
                />
              </form>
              <span class="group-name" data-value="${name}">${name}</span>
          </button>
          </p>
          <ul class="dropdown-menu"></ul>
        <div
          id="group-${index}"
          class="accordion-collapse collapse"
          aria-labelled="heading-${index}"
        >
          <div class="accordion-body py-1">
      ${
        // This will return block DOM contain list
        `${(lists || []).map(({ id, name }) => List(id, name)).join('')}` ||
        '<p class="empty-text m-0"><small>This group is empty.</small></p>'
      }
      <form class="new-list-form-inside form-item visually-hidden">
        <input class="list-name-input-inside form-control" type="text">
      </form>
          </div>
        </div>
      </div>
      `;
      } else {
        // This will return block DOM contain list
        return List(id, name);
      }
    })
    .join('')}
`;

export default Group;
