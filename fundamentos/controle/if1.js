const NotasAlunos ={
    aluno1: 8.1, 
    aluno2: 6.9,
    aluno3: 3.9,
    aluno4: 9.3,
    aluno5: 7.0,
}

function soBoasNoticias(nota){
if ( nota >= 7){
    return "Aprovado :) "
}else{
    return "Reprovado :(" 
}
}
const {aluno1,aluno2, aluno3, aluno4, aluno5} = NotasAlunos
console.log("NOTA:", aluno1, "-->", soBoasNoticias(aluno1))
console.log("NOTA:", aluno2, "-->", soBoasNoticias(aluno2))
console.log("NOTA:", aluno3, "-->", soBoasNoticias(aluno3))
console.log("NOTA:", aluno4, "-->", soBoasNoticias(aluno4))
console.log("NOTA:", aluno5, "-->", soBoasNoticias(aluno5))
