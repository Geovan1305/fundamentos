const pessoa = {
    saudacao : "Bom Dia",
    falar(){
            console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar.bind(pessoa)
falar()

const falaDePessoa = pessoa.falar.bind(pessoa)
falaDePessoa()