const TODO_TYPE = {
  GROUP: 'group',
  LIST: 'list'
};

const ACTION_ITEMS = {
  RENAME: {
    content: 'rename',
    iconClass: 'bi bi-cursor-text',
    class: 'rename-option'
  },
  DELETE: {
    content: 'delete',
    iconClass: 'bi bi-trash3',
    class: 'delete-option'
  },
  NEW_LIST: {
    content: 'add new list',
    iconClass: 'bi bi-plus-square',
    class: 'new-list-option'
  }
};

const GROUP_ACTION = [
  ACTION_ITEMS.NEW_LIST,
  ACTION_ITEMS.RENAME,
  ACTION_ITEMS.DELETE
];

const LIST_ACTION = [ACTION_ITEMS.RENAME, ACTION_ITEMS.DELETE];

const NAME_ACTION = {
  RENAME: 'rename',
  DELETE: 'delete',
  NEW_LIST: 'add new list'
};

export { TODO_TYPE, GROUP_ACTION, LIST_ACTION, NAME_ACTION };
