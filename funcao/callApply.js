function getPreco(imposto = 0, moeda = "R$"){
    return `${moeda} ${this.preco * (1 - this.desc) * (1+imposto)}`
}

const prodt = {
    nome: 'notebook',
    preco: 4569,
    desc: 0.15,
    getPreco
}

console.log(getPreco())
console.log(prodt.getPreco())

const car = {preco:4999, desc: 0.20}
console.log(getPreco.call(car))
console.log(getPreco.apply(car))

console.log(getPreco.call(car, 0.17, '$'))
console.log(getPreco.apply(global[0.17, '$']))