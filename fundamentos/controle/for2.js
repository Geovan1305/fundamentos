const notas=[7.3, 2.9, 7.8, 10.0, 8.9]
for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
nome: "Clarice",
sobreNome: "Alves",
idade: "5 meses de gestação",
endereco: "Av. Decio Barbosa",
peso: "600G"
}
console.log(pessoa)
{
  for( let i in pessoa){
        console.log(`${i} = ${pessoa[i]}`)
  }
}
