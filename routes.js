import { Router } from 'express';
import UserController from './controller/UserController.js'; // Certifique-se de que o caminho está correto

const routes = Router();

routes.post('/users', UserController.create);

export default routes;
