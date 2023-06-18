const nome = 'Geovan'
const congatenacao = "Olá " + nome + "!"
const template = `
       Olá
       ${nome}!
`

console.log(congatenacao, template)

const up = texto => texto.toUpperCase()

console.log(`Ei... ${nome + up(',' + '  cuidado')}!`)