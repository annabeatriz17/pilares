import Conta from './model/Conta.js';

const minhaConta = new Conta(12345);

minhaConta.info();

//console.log(minhaConta.#saldo)

minhaConta.saldo += 500;
console.log('Depósito de 500 realizado.');

minhaConta.info();

minhaConta.saldo -= 200;
console.log('Saque de 200 realizado.');

minhaConta.info();

// imports

// instanciação de classe, criando objetos

// usando métodos da classe