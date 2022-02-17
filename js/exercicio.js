//Calculadora de média 5 notas

const input = require("readline-sync");
console.log("Seja bem vinde! Vamos verificar sua situação academica");

const nome = (input.question("Digite o nome do alune: "));
var nota1 = parseFloat(input.question("Qual a primeira nota? "));
var nota2 = parseFloat(input.question("Qual a segunda nota? "));
var nota3 = parseFloat(input.question("Qual a terceira nota? "));
var nota4 = parseFloat(input.question("Qual a quarta nota? "));
var nota5 = parseFloat(input.question("Qual a quinta nota? "));

const media = (nota1 + nota2 + nota3 + nota4 + nota5)/5

if (media >= 7) {
    console.log("Parabéns, " + nome + "! você foi aprovado. Sua média final foi: " + media)
} else if (media >= 3 && media < 7) {
    console.log(nome + ", infelizmente você está de recuperação. Sua média final foi: " + media)
} else {
    console.log(nome + ", infelizmente você foi reprovado. Sua média final foi: " + media)
}


//Contador de letras

var frase = "A turma do backend do senac, é massa!".split(" ").join("");

console.log("A frase possui " + frase.length + " letras");


//Inversor de frase

var fraseInv = "A turma do backend do senac, é massa!"
console.log("A frase invertida fica: " + fraseInv.split("").reverse().join(""));