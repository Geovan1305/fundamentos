Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}
const imprimirResultado = function(nota){
    if(nota.entre(9, 10)){
        console.log("quado de Honras")
    }else if(nota.entre(7, 8.99)){
        console.log("Aprovado")
    }else if(nota.entre(4, 6.99)){
        console.log("Recupeção")
    }else if(nota.entre(0, 3.99)){
        console.log("Reprevado")
    } else{
        console.log("Nota inválida!")
    }
}
imprimirResultado(12)
imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6.9)
imprimirResultado(1)