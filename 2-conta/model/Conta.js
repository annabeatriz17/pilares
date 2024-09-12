class Conta {
    numeroConta
    #saldo
    
    constructor(numeroConta){
        this.numeroConta = numeroConta
        this.#saldo = 0
    }

    info(){
        console.log(`Conta ${this.numeroConta} com saldo ${this.#saldo}`)
    }
}

export default Conta


// criação de classe

// definir os atributos da classe

// criar o construtor da classe

// criar os métodos da classe (se eles existirem)

// exportar a classe para uso modular