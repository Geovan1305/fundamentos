// valor pradrão do ES2015
function soma(a =1, b=1, c=1){
        return a+b+c}
console.log(soma(), soma(1,2,3),soma(0,0,0),soma(2,0) )

//Segunda estragia
function soma2(a, b, c){
a = isNaN(a) ? 1:a
b = isNaN(b) ? 1:b
c = isNaN(c) ? 1:c
    return a+b+c
}
console.log(soma2(), soma2(1,2,3),soma2(0,0,0),soma2(2,"teste",3) )