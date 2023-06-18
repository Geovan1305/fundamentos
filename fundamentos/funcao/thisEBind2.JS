// As formas produz o mesmo resultado
/*
function pessoa() {
    this.idade = 0 

    const self = this
    setInterval( function() {
        self.idade++
        console.log(self.idade)
    }, 2)
}
new pessoa
*/

function pessoa() {
    this.idade = 0 

    setInterval( function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 200)
}
new pessoa