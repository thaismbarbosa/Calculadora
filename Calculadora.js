console.log('Bem-vindo a minha primeira calculadora!');

let nomeUsuario = prompt('Digite seu nome: ');
let numero1 = parseInt(prompt('Digite o primeiro número: '));
let numero2 = parseInt(prompt('Digite o segundo número: '));


let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let mutiplicacao =  numero1 * numero2;
let divisao = numero1 / numero2;
let modulo = numero1 % numero2;

console.log('Resultado da soma: ' + soma);
console.log('Resultado da subtração: ' + subtracao);
console.log('Resultado da multiplicação: ' + mutiplicacao);
console.log('Resultado da divisão: ' + divisao);
console.log('Resultado do modulo: ' + modulo);

let resultado = numero1;
resultado += numero2;
console.log('Resultado da soma: ' + resultado);

resultado = numero1;
resultado -= numero2;
console.log('Resultado da subtração: ' + resultado);

resultado = numero1;
resultado *= numero2;
console.log('Resultado da multiplicação: ' + resultado);

resultado = numero1;
resultado /= numero2;
console.log('Resultado da divisão: ' + resultado);

resultado = numero1;
resultado %= numero2;
console.log('Resultado do modulo: ' + resultado);

