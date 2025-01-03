import { request, response } from 'express';
import User from '../schemas/user.js';
import bcrypt from 'bcryptjs';

class UserController {
    async create(request, response) {
        const { name, email, username, password, phone } = request.body;

        try {
            // Gerar salt e criptografar a senha
            const passwordCrypt = await bcrypt.hash(password, 8);

            // Criar novo usuário com a senha criptografada
            const newUser = await User.create({
                name,
                email,
                username,
                password: passwordCrypt,
                phone
            });

            return response.status(201).json(newUser);
        } catch (error) {
            return response.status(400).json({ error: 'Erro ao criar usuário', details: error.message });
        }
    }

    async index(request, response) {
        try {
            const users = await User.find();
            return response.status(200).json(users);
        } catch (error) {
            return response.status(400).json({ error: 'Erro ao listar usuários', details: error.message });
        }
    }
}

export default new UserController();
