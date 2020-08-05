const express= require('express');
const server = express();
const colors = require('colors');
server.get('/',function(request,response){
     response.send('<h1>Hola mundo con Express y Nodes jsn </h2>');
      response.end();
});

server.listen(3000,function(){
    console.log('Server on port 3000'.red);
});









/*
const http = require('http');
   
const colors = require('colors');
   
console.log('Server on port 3000'.red);

 const handleserver = function(request,response){
    response.writeHead(200,{'Content-type':'text/html'});   
    response.write('<h1>Hola Mundo</h1>');
    response.end();
 }

 const server =http.createServer(handleserver);
   server.listen(3000,function(){
      console.log('Server on port 3000');    
   });
*/



// http.createServer(handleserver).listen(3000);


/*
http.createServer( function(request,response){
      response.writeHead(200,{'Content-type':'text/plain'});   
      response.write('un simple texto');
      response.end();
   }).listen(3000);

*/




/*
  // sirve para leer archivos de txt desde javascript

const fs = require('fs'); 


fs.readFile('./archivo.txt',function(err,data){
    if(err){
      console.log(err);    
    }
    console.log(data.toString());
   }
)

*/

/*

   // sirve para crear y escribir archivo desde Javascript
fs.writeFile('./archivo.txt','Te quiero mucho',function(err){
      if(err){
        console.log(err);    
      }
      console.log('Archivo creado');
});
console.log('Ultima linea de codigo');
*/






/*
const os = require('os');
console.log(os.platform());
console.log(os.release());
console.log('Memoria Libre:',os.freemem(),'bytes');
console.log('Total de memoria:',os.totalmem(),'bytes');
*/





/*
const math = require('./math.js');
console.log(math);
*/


/*
console.log(math.sumar(25,5));
console.log(math.Restar(25,5));
console.log(math.Multiplicar(25,5));
console.log(math.Dividir(25,5));
console.log(math.Dividir(25,0));
*/
