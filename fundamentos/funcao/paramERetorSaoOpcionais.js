function area (altura, largura) {
    const area = largura * altura
    if (area > 20){
        console.log(`Area maior que o permitido = ${area}m2`)
    } else{
        return area
    }
}
console.log( area (10,2))
console.log( area (5,2))
console.log( area (5,4))

