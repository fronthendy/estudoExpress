const express = require('express');
const { uuid } = require('uuidv4');
const app = express();
app.use(express.json());
const projects = [];

/**
 *  Query Params: Vamos usar principalmente para filtros e paginação
 *  Route Params: Identificar recursos na hora de atualizar ou deletar
 *  Request Body: Informações que chegam através da requisição do usuario
 *  
 */


app.get('/projects', (req, res) => {
    const { title, owner } = req.query;
    console.log(title, owner);

    return res.json([
        'Projeto 1',
        'Projeto 2'
    ]);
});


app.post('/projects', (req, res) => {
    const { title, owner } = req.body;
    console.log(title);
    console.log(owner);

    const project = { id: uuid(), title, owner };
    
    projects.push(project);
    return res.json(projects);
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