
const fabricantes = ["Mecedes", "Audi", "BMW"]


function imprimir (nome, indece){
    console.log(`${indece +1}-> ${nome}`)
}
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante) ) 

var objeto = function(arg1, arg2) {	
    this.primeiroNome = arg1;	
    this.segundoNome =  arg2;
}
