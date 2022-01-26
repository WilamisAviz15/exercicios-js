// Uma factory retorna um nv obj

module.exports = () => {
    return{
        valor: 1,
        inc() {
            this.valor++
        }
    }
}