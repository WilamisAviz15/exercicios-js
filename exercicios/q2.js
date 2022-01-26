function verificaTriangulo(l1, l2, l3){
    if(l1 === l2 && l2 === l3){
        console.log('Equilátero')
    }
    else if(l1 !== l2 && l2 !== l3 && l1 !== l3){
        console.log('Escaleno')
    }
    else{
        console.log('Isósceles')
    }
}

verificaTriangulo(2,3,2)