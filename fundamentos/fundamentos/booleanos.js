let isAtivo = false
console.log(isAtivo)

isAtivo = false
console.log(isAtivo)

isAtivo = -2
console.log(!!isAtivo)

console.log('os Verdadeiros...')
console.log(!!3)
console.log(!!-3)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os Falsos...')
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=false))

console.log("Para finalizar...")
console.log(!!('' || null || 0 ||'epa' || NaN ))

let nome= "Geovan"
console.log( nome || "Não Preenchido")
