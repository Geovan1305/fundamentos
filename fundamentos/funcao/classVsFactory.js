class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é: ${this.nome}`)
    }
}
const p1 = new Pessoa('João')
p1.falar()

const Pessoa2 = none =>{
    return{
        falar: () => console.log(`Meu Nome é: ${none}`)
    }
}

const p2 = Pessoa2('Maria')
p2.falar()