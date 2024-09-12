import Conta from './model/Conta.js';

const minhaConta = new Conta(12345);

minhaConta.info();

minhaConta.saldo += 500;
console.log('Depósito de 500 realizado.');

// Exibindo informações atualizadas da conta
minhaConta.info();

// Simulando um saque
minhaConta.saldo -= 200;
console.log('Saque de 200 realizado.');

// Exibindo informações atualizadas da conta
minhaConta.info();

// imports

// instanciação de classe, criando objetos

// usando métodos da classe