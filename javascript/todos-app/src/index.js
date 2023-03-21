// Library
import 'bootstrap-icons/font/bootstrap-icons.css';

// Classes
import AppController from './scripts/controllers/app';
import GroupsController from './scripts/controllers/groups';
import TasksController from './scripts/controllers/tasks';
import GroupsModel from './scripts/models/groups';
import TasksModel from './scripts/models/tasks';
import AppView from './scripts/views/app';
import GroupsView from './scripts/views/groups';
import TasksView from './scripts/views/tasks';

// NOTE: 1. Flow render App Layout
new AppController(new AppView());

// NOTE: 2. Flow render Groups List
new GroupsController(new GroupsView(), new GroupsModel());

// NOTE: 3. Flow render Tasks
new TasksController(new TasksView(), new TasksModel());
