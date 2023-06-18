// coleção dinamica de pares chaves/valores
const produdo = new Object
produdo.nome = 'Cadeira'
produdo['Marca do produto'] = 'Generica'
produdo.preco = 60

console.log(produdo)
delete produdo.preco
delete produdo['Marca do produto']
console.log(produdo)

const carro ={
    modelo: 'VW', 
    valor: 84125,
    proprietario:{
        nome: 'Geovan',
        idade:'31',
        endereco: {
            logradouro:"Av Decio Barbosa",
            numero: 270,
            cep:'59607-855'
        }
    },
    condutores: [{
        nome:'Wellta',
        idade: 28,
        },{
            nome:'Clarice',
            idade: 18
        }],
        calcularValorSegura: function() {
            //......
         }
}
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Condominio O.F'
console.log(carro.proprietario.endereco)
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSegura
console.log(carro)
console.log(carro.condutores.length)