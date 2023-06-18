function soma(){
let soma = 0
    for (i in arguments){
        soma += arguments[i]
    } 
    return soma
}

console.log(soma(8*5,5*8))
console.log(soma(8.5,5.8))