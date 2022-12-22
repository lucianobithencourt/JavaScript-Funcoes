// CRIANDO FUNÇÕES NO JS

// função de execução void
// function saberImc (peso , altura) {

//     //1° declarar a logica da função
//     var imc = peso/(altura**2);
//     console.log(imc.toFixed(2));
// }
// // fim funcao
// // 2° chamar a funcao pelo  nome (parametros) 
// saberImc (89 , 1.77)

// ---------------------------------------------


// função com retorno

// function saberImc (peso , altura) {

//     //1° declarar a logica da função
//     var imc = peso/(altura**2);

//     // 2° declara retorno
//     return imc;

// } // fim function

// // mostrar resultado
// console.log(saberImc (110.2 , 1.77));

// ---------------------------------------------

// FUNÇÃO COM INTERAÇÃO 

// function mostrarImc(peso,altura) {

//     var imc = peso/(altura**2);
 
//     return imc;
//  }


// var peso = parseFloat(prompt("Informe seu peso"));

// var altura = parseFloat(prompt("Informe sua altura"));

// // console.log(mostrarImc(peso,altura));

// document.write(mostrarImc(peso,altura));

// -----------------------------------------

// FUNÇÃO AREA DE UM RAIO (A = PI*R2)

// var raio = parseFloat(prompt("Informe valor do raio"));

// function saberAreaRaio (raio) {

// var areaCirculo = ( Math.PI*(raio**2));

// return areaCirculo;

// } 

// console.log(saberAreaRaio (raio).toFixed(2)+"cm");

// // document.write(`A area do circulo é de ${saberAreaRaio (raio).toFixed(2)}cm<sup>2</sup> `)

// document.write(`A area do circulo é de ${saberAreaRaio (raio).toFixed(2)}m<sup>2</sup> `)

// }
// ---------------- FUNÇÃO SABER IDADE ----------

// var anoNasc = parseInt(prompt("informe o ano de nascimento"));

// var anoAtual = parseInt(prompt("Informa o ano atual"));

// function saberIdade(anoNasc, anoAtual) {
    
//     var idade = (anoAtual-anoNasc);
    
//     return idade ;

// }

// console.log(saberIdade(anoNasc, anoAtual));


// document.write(`Voce tem ${saberIdade(anoNasc, anoAtual)}`);

function mostrarTexto (texto) {

    //1° declarar a logica da função
    var msg = "Mostrando texto...)";
    console.log(msg);
}
// fim funcao
// 2° chamar a funcao pelo  nome (parametros) 
mostrarTexto ();









 

