// Library
import 'bootstrap-icons/font/bootstrap-icons.css';

// Classes
import AppController from './scripts/controllers/AppController';
import GroupsController from './scripts/controllers/GroupsController';
import TasksController from './scripts/controllers/TasksController';
import GroupsModel from './scripts/models/GroupsModel';
import TasksModel from './scripts/models/TasksModel';
import AppView from './scripts/views/AppView';
import GroupsView from './scripts/views/GroupsView';
import TasksView from './scripts/views/TasksView';

// NOTE: 1. Flow render App
new AppController(new AppView());

// NOTE: 2. Flow render Groups List
new GroupsController(new GroupsView(), new GroupsModel());

// NOTE: 3. Flow render Tasks
new TasksController(new TasksView(), new TasksModel());
