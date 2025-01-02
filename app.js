import express from 'express';
import mongoose from 'mongoose';
import routes from './routes.js';

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.database();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json()); // Adiciona o middleware para parsear JSON
    }

    database() {
        mongoose.connect('mongodb+srv://albertcfranca:eJsNJjiyDr2BwVl9@cluster0.ebhfp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            
        }).then(() => {
            console.log('Conectado ao MongoDB');
        }).catch((error) => {
            console.error('Erro ao conectar ao MongoDB:', error);
        });
    }

    routes() {
        this.server.use(routes); // Use as rotas
    }
}

export default new App().server;
