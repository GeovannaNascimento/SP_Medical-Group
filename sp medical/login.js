const express = require('express');
const app = express();
const port = 3000; // Porta em que o servidor será executado
// Rota para exibir a página index.html

app.use(express.static('.'));

app.get('/', (req, res) => {
res.sendFile(__dirname + '/login.html');
});
// Rota para exibir a página outra_pagina.html
app.get('/login.css', (req, res) => {
res.sendFile(__dirname + '/login.css');
});
// Iniciar o servidor
app.listen(port, () => {
console.log(`Servidor Express está rodando na porta ${port}`);
});
