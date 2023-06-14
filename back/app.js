const express = require('express');
const app = express();

app.use(express.json());

const rotaProdutos = require('./routes/produtosRouter');


app.use('/produtos', rotaProdutos);





module.exports = app;