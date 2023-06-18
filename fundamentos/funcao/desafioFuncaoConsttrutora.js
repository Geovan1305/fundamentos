/*function pessoa(nome){
    return{
        falar : () => console.log(`Meu Nome é: ${nome}`)
    }
}
const p1= new pessoa('Pedro')
p1.falar()*/


function pessoa(nome){
    this.nome = nome
    
         this.falar = ()=> console.log(`Meu Nome é: ${this.nome}`)
    }
const p1= new pessoa('Pedro')
p1.falar()