const matematica ={

}


function sumar(d1,d2){
    return d1+d2;
 
 }
 
 function Restar(d1,d2){
     return d1-d2;
 
 }
 function Multiplicar(d1,d2){
     return d1*d2;
 
 }
 function Dividir(d1,d2){
 
     if(d2==0){
      return 'Error en la division no se acepta ceros el numerador';
     }
    return d1/d2; 
 }

  matematica.sumar=sumar;
  matematica.Restar=Restar;
  matematica.Multiplicar=Multiplicar;
  matematica.Dividir=Dividir;
  
 exports.sumar=sumar;
 exports.Restar=Restar;
 exports.Multiplicar=Multiplicar;
 exports.Dividir=Dividir;

 module.exports =matematica;  


/*
function hello(name){
   console.log('HOla', name);
}
module.exports = hello;
*/

