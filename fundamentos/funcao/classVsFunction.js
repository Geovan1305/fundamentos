class Pessoa{
    constructor(nome){        
        this.nome = nome
    }
        falar(){
            console.log(`meu nome é ${this.nome}`)
        }
    }
const p1= new Pessoa('Maria')
p1.falar()

function Pess(nome){
    return{
        nome,
        falar:()=>console.log(`meu nome é ${nome}`)
    }
}
let p5 = Pess("Geovan")
p5.falar()