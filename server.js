const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.status(200).send({message: 'Olá mundo estou funcionando bem aqui'});
})

app.listen(3001, ()=>{
    console.log('API executando na porta 3001')
})