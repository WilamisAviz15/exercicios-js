// FUnção em JS é First-Class Object

//criar de forma literal
function fun1() { }

//armazenar em uma var
const fun2 = function() { }

//armazenar em um array
const array = [function(a, b) { return a+b}, fun1, fun2]
console.log(array[0](2,3))

// Armazenar em um atributo d objeto
const obj = {}
obj.falar = function() { return "Opa!"}
console.log(obj.falar())

// Passar funcao como param
function run(fun) {
    fun()
}

run(function(){console.log("EXEC...") })

// Uma funcao pode retornar/conter uma funcao
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)