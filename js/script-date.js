

// MANIPULAÇÃO DE DATA 


var ano = new Date();


var anoNas = Number(prompt("Informe o ano de nascimento"))

var  idade = (ano.getFullYear()-anoNas);

console.log(idade);
console.log(`${ano.getHours()}:${ano.getMinutes()}`);