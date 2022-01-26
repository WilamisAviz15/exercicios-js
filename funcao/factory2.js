function criarProduto(nome, preco){
    return{
        nome:nome, preco:preco, desconto: 0.1
    }
}

console.log(criarProduto("Notebook", 2199))
console.log(criarProduto("iPad", 2799))