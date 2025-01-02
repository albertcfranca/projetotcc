import app from './app.js';

const port = process.env.PORT || 3000; // Define a porta a partir do .env

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
