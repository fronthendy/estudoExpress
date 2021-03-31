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
        'Projeto 3',
        'Projeto 4',
        'Projeto 5',
    ]);
})



app.put('/project/:id', (req, res) => {
    return req.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
        'Projeto 5',
    ])
})

app.delete('/project/:id', (req, res) => {
    return req.json([
        'Projeto 50',
        'Projeto 2',
    ])
})
app.listen(3333);