const express = require('express');
const app = express();

app.use(express.json());

app.get('/projects', (req, res) => {
    const {title, owner} = req.query;
    console.log(title, owner);

    return res.json([
        'Projeto 1',
        'Projeto 2'
    ]);
});


app.post('/projects', (req, res) => {
    const body = req.body;
    console.log(body);

    return res.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
        'Projeto 5',
    ]);
})



app.put('/project/:id', (req, res) => {
    const params = req.params;
    console.log(params);

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