import Controller from './scripts/controllers/controller';
import Model from './scripts/models/model';
import View from './scripts/views/view';

const app = new Controller(new Model(), new View());

app();
