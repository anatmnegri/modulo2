// const input = require("readline-sync");
// // esta entrada permite que a variável input utilize a dependência readline-sync.
// //O comando require é usado antes da dependência.

// console.log("Seja bem vinde! Vamos começar seu cadastro")

// const idade = input.question("Qual sua idade? ");

// if (idade >=18 && idade <21) {
//     console.log("Pode entrar")
// } else if (idade >=21) {
//     console.log("Pode entrar e consumir bebidas alcolicas")
// } else {
//     console.log("Entrada permitida para maiores de 18 anos")
// }

// const input = require("readline-sync");

// console.log("Seja bem vinde! Vamos verificar sua obrigatoriedade de voto")

// const idade = input.question("Qual sua idade? ");

// if (idade >=16 && idade <18) {
//     console.log("Já pode votar, porém não é obrigatório.")
// } else if (idade >=18) {
//     console.log("Voto obrigatório. Tire seu Título de Eleitor")
// } else {
//     console.log("Ainda não está na idade de votar.")
// }


const input = require("readline-sync");
console.log("Seja bem vinde! Vamos verificar sua situação academica");

const nota1 = parseInt(input.question("Qual a primeira nota? "));
const nota2 = parseInt(input.question("Qual a segunda nota? "));
const nota3 = parseInt(input.question("Qual a terceira nota? "));

const media = (nota1 + nota2 + nota3)/3

if (media >= 7) {
    console.log("Parabéns!  você foi aprovado.")
} else if (media >= 3 && media < 7) {
    console.log("Você está de recuperação.")
} else {
    console.log("Infelizmente você foi reprovado.")
}