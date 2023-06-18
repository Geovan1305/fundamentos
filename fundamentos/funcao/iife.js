// IIFE -> Immediately Invoked Function Expression

(function () {
    function pessoa(nome) {
        return {
            falar: () => console.log(`meu nome é: ${nome}`)
        }
    }
    let p1 = pessoa("joão")
    p1.falar()

})();
(function () {
    function pessoas(nome, idade, sexo) {
        return {
            nome, idade, sexo
        }
    }
    console.log(pessoas('Maria', 18, 'Fem'))
    console.log(pessoas('Maya', 21, 'Fem'))
    console.log(pessoas('Bia', 20, 'Fem'))
})();


const user =  (nome, idade)=>  {
    return {
        fala: () => console.log(`meu nome é: ${nome} e minha idade é: ${idade}`)
    }
    
}
let p2 = user('geovan', 32)
p2.fala()