const express = require('express');
const app = express();

// console.log(app);

app.get('/projects', (req, res) => {
    return res.json([
        'Projeto 1',
        'Projeto 2'
    ]);
});


app.post('/projects', (req, res) => {
    return res.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
})

app.listen(3000, () => {
    console.log('Servidor rodando!');
});