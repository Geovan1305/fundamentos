console.log(Math.ceil(6.9)) //ceil arredonda oara cima, floor para baixo 

const obj1 = {}
obj1.nome = 'bola'
//obj1["nome"] = "bola2"
console.log(obj1.nome)

function obj (nome){
    this.nome = nome
    this.exec =function(){
        console.log('Exec...')
    }
}

const obj2  = new obj('cadeira')
const obj3 = new obj('mesa') 

console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()
