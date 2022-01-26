function Carro(velocidadeMaxima = 200, delta = 5){
    //atrb pvd
    let velAtual = 0

    //metodo publico
    this.acelerar = function(){
        if(velAtual+delta <= velocidadeMaxima){
            velAtual += delta
        }else{
            velAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function(){
        return velAtual
    }
}

const uno = new Carro()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())