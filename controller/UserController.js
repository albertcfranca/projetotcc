import { request, response } from 'express';
import User from '../schemas/user.js'; // Certifique-se de que o caminho está correto e o modelo é importado corretamente
import pkg from 'bcryptjs'; // Importe o módulo 'bcryptjs' como um pacote
const { hash } = pkg; // Extraia o método 'hash' do pacote importado

class UserController {
    async create(request, response) {
        const { name, email, username, password, phone } = request.body;
        try {
            const passwordCrypt = await hash(password, 8); // Hash da senha com bcryptjs
            const newUser = await User.create({
                name,
                email,
                username,
                password: passwordCrypt, // Use a senha criptografada
                phone
            });
            return response.status(201).json(newUser); // Certifique-se de retornar a resposta corretamente
        } catch (error) {
            return response.status(400).json({ error: 'Erro ao criar usuário', details: error.message });
        }
    }
}

export default new UserController();
