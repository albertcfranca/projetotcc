import jwt from 'jsonwebtoken';


export default async (request, response, next) => {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        return response.status(401).json({ error: 'User nao esta autorizado' });
    }
    const [, token] = authHeader.split(" ");
    try {
    const decoded = jwt.verify(token, 'a3f7c365677abec9f3c2a927669b60c2');
    console.log(decoded);
    return next();

    } catch (error) {
        return response.status(401).json({ error: 'Token invalido' });
    }

}