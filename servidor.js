const http = require ('http');
const chalk = require ('chalk');
host = "localhost";
port = 8000;

const server = http.createServer(function(req,res){
    res.writeHead(200, {'content-type' : 'text/html'});
    res.end('<center><b><h1>Luis David Molina Calderon</h1><br><p>"Igitur qui desiderat pacem, praeparet bellum"</p></center>')
})

server.listen(port, host, function(){
    console.log(chalk.green(`Servidor activo en la ruta ${host}:${port}`));
});