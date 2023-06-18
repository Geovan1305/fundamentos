function getPreco(imposto = 0, moeda= 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
nome: 'Notebook',
preco: 4500,
desc: 0.05 ,
getPreco

}
globalThis.preco = 4500
globalThis.desc = 0.07

console.log(getPreco())
console.log(produto.getPreco())

const carro ={preco: 3000, desc: 0.10}
console.log(getPreco.apply(carro))
console.log(getPreco.call(carro))
console.log(getPreco.call(carro, 0.05, '$'))
console.log(getPreco.apply(carro, [0.20, "R$"]))