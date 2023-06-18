// Armazenando uma função dentro de uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma (2,3)

// Armazenar uma função arrow em uma variavel
const soma = (a , b) =>{
    return a + b
}
console.log( soma(3,6))

//retorno implicito
const subritracao = (a, b) => a - b
console.log(subritracao(5,3))