import { Router } from 'express';
import UserController from './controller/UserController.js';
import SessionController from './controller/SessionController.js';

const routes = Router();

routes.post('/users', UserController.create);
routes.post('/sessions', SessionController.create);

export default routes;
