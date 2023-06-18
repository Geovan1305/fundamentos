/*const tex = `Sabão  `
const val = 50.5
const text = `  Leite`
console.log(tex + val + text)
console.log(typeof(tex ), typeof(val), typeof(text))
*/

const escola =  "Geovan"

console.log(escola.charAt(0)) // charAt busca a letra que está no indece (5)
console.log(escola.charCodeAt(5)) // numero no indice ANCI  
console.log(escola.indexOf('a')) // indice que o caractere que a letra pertence
console.log(escola.substring(0, 3)) // imprime as palavras de acordo com o indice
console.log('Escola '.concat(escola).concat ("!")) // concatena novos valores com já existentes
console.log('Escola ' + escola + '!') // tem a mesma função da acima!
console.log(escola.replace(5, 'e'))
console.log('Nana, Maria, Pedro'.split(',') ) // cria uma array dos elementos da string (na estrutura ele quebrou a array a partie da ',').

const nome = "Geovan "
const concatenizacao = "Olá " + nome + '!' //concatena na mesma linha
const template  = `                         
Olá 
${nome}!`                                  // Através do acento crase pode concatenar em multiplas linhas
console.log(concatenizacao, template)

//Expressões
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)    //Tranformou em 