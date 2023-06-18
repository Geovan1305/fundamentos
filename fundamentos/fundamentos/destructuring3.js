function rand({min = 1, max= 25}){
    const Valor = Math.random() * (max - min) + min
    return Math.floor(Valor)
}
const obj ={max:10, min:0}
console.log(rand(obj))
console.log(rand({min:1}))
console.log(rand({}))