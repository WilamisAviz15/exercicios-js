function formataValor(valor){
    valorConvertido = "R$"+valor.toFixed(2).toString().replace(".", ",")
    console.log(valorConvertido)
}

formataValor()