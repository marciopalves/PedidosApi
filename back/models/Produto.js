const mongoose = require('../db/conn');
const { Schema } = require('mongoose');


const Produtos = mongoose.model(
    'Produto', 
    new Schema({
        name:{
            type: String,
            required: true
        },
        
        description:{
            type: String,
            required: true
        },

        Valor:{
            type: Number,
            required: true
        }

    },
    {timestamps: true}
    )
);

module.exports = Produtos;