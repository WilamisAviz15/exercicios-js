const AP = ['Agata', 'Aldo', 'Daniel', 'Raquel']

AP.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

AP.forEach(nome => console.log(nome))

const exibirAP = ap => console.log(ap)
AP.forEach(exibirAP)