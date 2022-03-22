// Library
import 'bootstrap-icons/font/bootstrap-icons.css';

// Classes
import AppController from './scripts/controllers/AppController';
import GroupsController from './scripts/controllers/GroupsController';
import GroupsModel from './scripts/models/GroupsModel';
import AppView from './scripts/views/AppView';
import GroupsView from './scripts/views/GroupsView';

// NOTE: 1. Flow render App
new AppController(new AppView());

// NOTE: 2. Flow render Groups List Data
new GroupsController(new GroupsView(), new GroupsModel());
