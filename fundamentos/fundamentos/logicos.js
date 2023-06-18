function compras (trab1, trab2){
    const CompraTv50 = trab1 && trab2
    const CompraTV32 = trab1 != trab2
    const TomarSorvete = trab1 || trab2
       const VidaSuadavel = !trab1 && !trab2

    return { CompraTv50, CompraTV32, TomarSorvete, VidaSuadavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

if (compras = true && true){
    console.log("Compra TV de 50! ")
}