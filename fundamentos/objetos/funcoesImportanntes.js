const pessoa={
    nome: 'Geovan',
    idade: 31,
    peso: 70
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor])=>{
        console.log(`${chave}: ${valor}`)
})
console.log(pessoa)

Object.defineProperty(pessoa, 'dataNasc', {
    enumerable: true,
    writable: false,
    value: '01/01/1991'
})

pessoa.dataNasc='02/01/1991'
console.log(pessoa.dataNasc)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest ={ a:1}
const o1 = {b: 2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c=132
console.log(obj)