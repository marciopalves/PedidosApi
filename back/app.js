const express = require('express');
const app = express();
const rotaProdutos = require('./routes/produtosRouter');

app.use(express.json());
app.use('/produtos', rotaProdutos);


module.exports = app;