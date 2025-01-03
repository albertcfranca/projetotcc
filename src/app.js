import express from 'express';
import mongoose from 'mongoose';
import routes from './routes.js';

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.database();
        this.routes();
        this.handleErrors();
    }

    middlewares() {
        this.server.use(express.json()); // Adiciona o middleware para parsear JSON
    }

    database() {
        mongoose
            .connect('mongodb+srv://albertcfranca:eJsNJjiyDr2BwVl9@cluster0.ebhfp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            })
            .then(() => {
                console.log('Conectado ao MongoDB');
            })
            .catch((error) => {
                console.error('Erro ao conectar ao MongoDB:', error);
            });
    }

    routes() {
        this.server.use(routes); // Use as rotas
    }

    handleErrors() {
        // Middleware para tratar erros não previstos
        this.server.use((err, req, res, next) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: "Erro interno do servidor" });
            }
            return res.status(404).json({ error: "Rota não encontrada" });
        });
    }
}

export default new App().server;
