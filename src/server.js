const express = require('express');
const mongose = require('mongoose'); //para linguagem de qualquer banco de dados(podendo utilizar js puro para manipular queries de banco)
const cors = require('cors');

const routes = require('./routes');

const server = express(); //servidor do express

mongose.connect('mongodb+srv://root:root@cluster0-n6ny1.mongodb.net/rocketseat?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

//usar antes das rotas/add para que o routes reconheça o formato json
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);