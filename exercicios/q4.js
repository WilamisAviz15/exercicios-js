function dividir(D, d){ //D= dividendo , d= divisor
    let resto, result
    resto = D % d
    result = Math.floor(D / d)
    console.log("Resultado: " + result, "Resto: " + resto)
}

dividir(10,2)