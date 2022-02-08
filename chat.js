const input = require("readline-sync");

console.log("Seja bem vinde! Vamos começar seu cadastro")

const idade = input.question("Qual sua idade? ");

if (idade >=18 && idade <21) {
    console.log('Pode entrar')
} else if (idade >=21) {
    console.log('Pode entrar e consumir bebidas alcolicas')
} else {
    console.log('Entrada permitida para maiores de 18 anos')
}