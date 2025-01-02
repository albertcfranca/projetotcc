const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

/**
 * GET = BUSCAR INFORMACAO
 * DELETE = DELETAR UM DADO
 * PUT = ALTERAR UM DADOS
 * POST = CRIAR UM DADOS
 */

// http://localhost:3000/test

app.get('/test',(request, response) => {
  return response.send('Hello world tchunaite o my goood');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

