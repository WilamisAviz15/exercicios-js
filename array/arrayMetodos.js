const pilotos = ['Vettel', 'Alonso', 'BB', 'Massa']

pilotos.pop() //remove ultimo elemento do array
console.log(pilotos)

pilotos.push('Vestappen') //add elementos na ultima posicao array
console.log(pilotos)

pilotos.shift() //remove primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') //add elementos na primeira posicao array
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar 
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)

