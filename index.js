const express = require('express');
const app = express();

// console.log(app);

app.get('/', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2'
    ]);
});

app.listen(3000, () => {
    console.log('Servidor rodando!');
});