const mongoose = require('../db/conn');
const { Schema } = require('mongoose');


const Produto = mongoose.model(
    'Produto', new Schema({

        nome:{
            type: String
        },

        descricao:{
            type: String
        },

        valor:{
            type: Number
        }
    }, {timestamps: true}
    )
);

module.exports = Produto;