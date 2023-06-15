const mongoose = require('mongoose');


async function main(){
    mongoose.connect('mongodb://127.0.0.1:27017/curso_node');
    console.log('Conectou ao mongodb');
};

main().catch((err) =>{
    console.log(`Erro ao conectar ao mongodb * ${err}`);
});


module.exports = mongoose;