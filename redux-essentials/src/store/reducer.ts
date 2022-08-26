import { combineReducers } from 'redux';
import filtersReducer, { Filter } from '../features/filters/filterSlice';
import todosReducer, { Todo } from '../features/todos/todosSlice';

export interface RootState {
  todos: Todo[];
  filters: Filter;
}

const rootReducer = combineReducers<RootState>({
  todos: todosReducer,
  filters: filtersReducer
});

export default rootReducer;
