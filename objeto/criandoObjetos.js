//Usando notacao literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesc = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.69, 0.15)
const p2 = new Produto('Notebook', 2777.69, 0.25)
console.log(p1.getPrecoComDesc(), p2.getPrecoComDesc())

// Funcao Factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome, salarioBase, faltas, getSal(){
            return(salarioBase/30) * (30-faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Maria', 7980, 1)
console.log(f1.getSal(), f2.getSal())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma funcao famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
