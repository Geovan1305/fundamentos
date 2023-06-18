// Notação Literal
const obj1 = {}
console.log(obj1)

// Ojb JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Função contrutoras

function prod (nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new prod('Caneta', 7.98, 0.10)
const p2 = new prod('caderno', 12.98, 0.15)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function criaFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase /30) * (30 - faltas)
        }
    }
}
const fun1 = new criaFuncionario('João', 5300, 6)
const fun2 = new criaFuncionario('Geovan', 12000, 8)
console.log(fun1.getSalario(), fun2.getSalario())

// Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que recebe objeto..
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)