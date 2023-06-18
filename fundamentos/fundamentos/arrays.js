const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[2])
console.log(valores[4])

valores [4] = 10
console.log(valores)
console.log(valores.length) // quantidade de elementos na array

valores.push({id: 3}, false, null, 'Testes' )
console.log(valores)

console.log(valores.pop()) // retira o ultimo valor da array   
delete valores [0] // deleta o valor do local especificado
console.log(valores)

console.log(typeof valores)