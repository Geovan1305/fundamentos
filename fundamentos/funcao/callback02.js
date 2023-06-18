// sem callback
const notas = [7.7, 8.3, 5.8, 6.9, 5.6]

const notasBaixas1 = []
    for( let i in notas){
        if (notas[i] < 7 ){
            notasBaixas1.push(notas[i])
        }
    }
console.log(notasBaixas1)

// com callback
//ex 1
const notasBaixas2 = notas.filter( function (notas){
        return notas <7
})
console.log(notasBaixas2)
 //ex 2
const notasBaixas3 = notas.filter(notas => notas <7 )
console.log(notasBaixas3)

//ex3
const notasMenorQue7 = notas => notas <7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)

const notasAltas = notas.filter (function (notas){
        return notas >7
})
console.log(notasAltas)

const notasAltas2 = notas.filter(notas => notas > 7)
console.log(notasAltas2)