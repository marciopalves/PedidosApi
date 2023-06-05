const http = require('http');
const app = require('./app');
const port = process.env.port || 5009;
const server = http.createServer(app);


server.listen(port, ()=>{
    console.log(`Rodando na porta ${port}...`);
});