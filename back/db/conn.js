const mongoose = require('mongoose');

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/PedidosApi');
    console.log('Conectou ao mongoose');
}


main().catch((err) =>{
    console.log(`Erro ao conectar ao mongoose ${err}`);
});




module.exports = mongoose;