function carro(velocidadeMaxima = 200, delta = 5){
    let velocidadeAtual = 100
        
    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta 
        } else { velocidadeAtual = velocidadeMaxima
        }
    }

    
this.getvelocidadeAtual = ()=> velocidadeAtual
    
}
 
const uno = new carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.getvelocidadeAtual())

const ferrari = new carro(250, 70)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual())