const pessoa = {
    nome: 'Geovan',
    idade: 15,
    endereco: {
        logradouro:'Rua da felicidade', 
        nemero: 130
        } 
    
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {endereco: {logradouro:l, nemero:num, cep} } = pessoa
console.log(l,"->", num, cep)

const {endereco} = pessoa
console.log(endereco)