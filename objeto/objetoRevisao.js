//Colecao dinamica de pares chave/valor
const produto = new Object
produto.nome = "Cadeia"
produto['marca do produto'] = "Generica"
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000, 
    proprietario: {
        idade: 56,
        end: {
            logradouro: "RUA ABC",
            numero: 123
        }

    },
    condutores: [{
        nome: "Junior",
        idade: 19
    }, {
        nome: "Ana",
        idade: 13
    }],
}

carro.proprietario.end.numero = 1000
carro.proprietario.end.logradouro = "AAA"
console.log(carro)
delete carro.condutores
delete carro.proprietario.end
console.log(carro)