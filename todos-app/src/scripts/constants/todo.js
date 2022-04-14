const TODO_TYPE = {
  GROUP: 'group',
  LIST: 'list',
  TASK: 'task'
};

const ACTION_ITEMS = {
  RENAME: {
    CONTENT: 'rename',
    ICON_CLASS: 'bi bi-cursor-text',
    CLASS: 'rename-option'
  },
  DELETE: {
    CONTENT: 'delete',
    ICON_CLASS: 'bi bi-trash3',
    CLASS: 'delete-option'
  },
  NEW_LIST: {
    CONTENT: 'add new list',
    ICON_CLASS: 'bi bi-plus-square',
    CLASS: 'new-list-option'
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
