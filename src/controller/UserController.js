import { request, response } from 'express';
import User from '../schemas/user.js';
import pkg from 'bcryptjs';
const { hash } = pkg;

class UserController {
    async create(request, response) {
        const { name, email, username, password, phone } = request.body;

        try {
            const passwordCrypt = await hash(password, 8);
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
}

export default new UserController();


