import { request, response } from 'express';
import User from '../schemas/user.js'; // Certifique-se de que o caminho está correto e o modelo é importado corretamente
import pkg from 'bcryptjs'; // Importe o pacote como um todo
const { compare } = pkg; // Extraia o método 'compare' do pacote importado
import jsonwebtoken from 'jsonwebtoken'; // Importe o pacote como um todo
const { sign } = jsonwebtoken; // Extraia o método 'sign' do pacote importado

class SessionController {
    async create(request, response) {
        const { username, password } = request.body;
        
        // Verificar se o usuário existe no sistema
        const user = await User.findOne({ username });
        if (!user) {
            return response.status(404).json({ error: "Usuário não encontrado" });
        }

        // Verificar se a senha está correta
        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            return response.status(404).json({ error: "Senha incorreta" });
        }

        // Gerar token
        const token = sign({}, "a3f7c365677abec9f3c2a927669b60c2", {
            subject: username,
            expiresIn: "1d"
        });

        return response.status(201).json({ token, user });
    }
}

export default new SessionController();
