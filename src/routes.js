import { Router } from 'express';
import UserController from './controller/UserController.js';
import SessionController from './controller/SessionController.js';
import auth from './middlewares/auth.js';


const routes = Router();

routes.post('/users', UserController.create);
routes.post('/session', SessionController.create);
//MIDDLEWARE DE AUTENTICAÇÃO
routes.use(auth);
routes.get('/users', UserController.index); // Certifique-se de que o método index existe no UserController


export default routes;
