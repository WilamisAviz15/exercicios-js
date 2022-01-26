Array.prototype.map2 = function(callback){
    const newArray  = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"Nome": "Borracha", "preco": 3.45}',
    '{"Nome": "Caderno", "preco": 13.90}',
    '{"Nome": "Kit de La´pis", "preco": 41.22}',
    '{"Nome": "Caneta", "preco": 7.50}'
]

//Retornar um array apenas com os preços

const paraObj = json => JSON.parse(json)
const justPrice = produto => produto.preco

const result = carrinho.map2(paraObj).map2(justPrice)
console.log(result)