//Armazenando funcao em variavel

const printSum = function(a, b){
    console.log(a+b)   
}

printSum(2,3)

// Armazenando uma funcao arrow em variavel

const sum = (a,b) => { return a+b}

console.log(sum(2,3))

// retorno implicito

const sub = (a,b) => a-b
console.log(sub(2,3))

