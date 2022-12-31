/* Criando uma função com paremetros */

// function calcularArea(largura,comprimento){

//     let area = (largura * comprimento)

//     return area
// }

// console.log(`${calcularArea(12,12)}m`);
/**------------------------------------------- */

// function saberIimc(peso,altura) {

// let  imc = peso/(altura**2)

// return imc

// }

// let peso = 45
// let altura =1.65

// console.log(`IMC = ${saberIimc(peso,altura).toFixed(2)}`);
/**------------------------------------------- */

// function mostraArea (raio) {
// // area = (Pi * raio ao quadrado )

// let  area = (Math.PI*raio**2);

// return area

// }

// console.log(`${mostraArea (10).toFixed(2)}`);

/**------------------------------------------- */

// function mostrarIdade (anoNasc) {
//     let anoAtual =  new Date ()
//         let idade = (anoAtual.getFullYear()-anoNasc)

//     return idade
// }

// console.log( mostrarIdade (1977));



/**------------------------------------------- */

// function mostrarTexto () {

//     console.log('Mostrar texto apenas');

// }

// console.log(mostrarTexto ());

/**------------------------------------------- */

// function mostrarTipo(num) {

//     if (num%2==0) {
//         console.log("PAR");
//     } else {
//         console.log("IMPAR");
//     }
//     return num


// }
// mostrarTipo(18)

/**------------------------------------------- */

// function somarValores(nta1,nta2,nta3) {

//     let media = (nta1+nta2+nta3)/4

//     return media


// }

// console.log(somarValores(5,6,9).toFixed(2));
// console.log(typeof somarValores(5,6,9));

/**------------------------------------------- */

// escopo de variaveis [global,funcão,bloco]
/**
 * As variáveis definidas no interior de uma função não podem ser acessadas de nenhum lugar fora da função, porque a variável está definida apenas no escopo da função. No entanto, uma função pode acessar todas variáveis e funções definida fora do escopo onde ela está definida.
 */

// escopo global
// let filme1 = 'Spider-man-global'

// let filme2 = 'CapitaoAmerica-global'

// let filme3 = 'Thor-global'

// var filme5 = 'panteraNegra'
// var filme6 = 'CrocodiloDandy'
// var filme7 = 'KingKong'


// console.log('-----------global-----------');
// console.log(filme1);
// console.log(filme2);
// console.log(filme3);
// console.log(filme5);
// console.log(filme6);
// console.log(filme7);




// // escopo de bloco
// if (true) {

//     var filme5 = 'panteraNegra-bloco'
//     var filme6 = 'CrocodiloDandy-bloco'
//     var filme7 = 'KingKong-bloco'

//     console.log('-----------bloco-----------');
//     console.log(filme1);
//     console.log(filme2);
//     console.log(filme3);
//     console.log(filme5);
//     console.log(filme6);
//     console.log(filme7);

// }


// function tiposEscopo() {

//     let filme4 = 'ViuvaNegra-Funcao'
//     let filme8 = 'Rambo-Funcao'
//     let filme9 = 'Gotizila-Funcao'
//     console.log('-----------funcao-----------');

//     console.log(filme1);
//     console.log(filme2);
//     console.log(filme3);
//     console.log(filme5);
//     console.log(filme6);
//     console.log(filme7);

//     console.log(filme4);
//     console.log(filme8);
//     console.log(filme9);


// }
// tiposEscopo();
// console.log("-----------------------");

// ----------------------------------------------
/**Funcao anonima [nao tem nome ]

 var  mostrarMsg = function () {

    console.log('funcao anonima usa tecnica  wrapper para funcionar a função!! ');
}

mostrarMsg()
*/

// função callback (SÃO FUNÇÕES ANONIMAS)


// function exibirArtigo(id,callbackSucesso, callbackErro) {
// LOGICA


//     if (true) {
//         callbackSucesso("Funções em JS", "Funções de calback sao funções anonimas")
//     } else {
//         callbackErro ("[ERRO]-Verificar conexão TCP/IP")
//     }

//     let callbackSucesso = function (titulo,descricao) {
//         console.log(titulo,descricao);
//     }

//     let callbackErro = function (erro) {
//         console.log(erro);
//     }

//     exibirArtigo(1,callbackSucesso ,callbackErro )

// }

//  [length,charAt,]

// let nome = 'Bitencourt'

// let totalLetras = nome.length;
// console.log(totalLetras);

// -----------charAt()--------------

// let totalLetras = nome.charAt(1);
// console.log(totalLetras);

//-------------indexOf()------------

// let totalLetras = nome.indexOf('t');
// console.log(totalLetras);

// //-------------replace('','')------------

// let totalLetras = nome.replace('Bitencourt' , 'Béthencourt')
// console.log(totalLetras);

// //-------------toUpperCase()------------

// let totalLetras = nome.toUpperCase()
// console.log(totalLetras);

//-------------toLowerCase()------------

// let totalLetras = nome.toLowerCase()
// console.log(totalLetras);

// Manipulação de data Date()

// let dates = new Date()

// let ano = dates.getFullYear();
// let mes = dates.getMonth();
// let dia  = dates.getDay();
// let hora = dates.getHours();

// console.log(`${dia}/${mes+1}/${ano}`);

// // usando DOM
// let pagina =  document.getElementById('corpo')


// let nomeAlunos = ['lucas','gustavo','livia','paula']
// let nomeAlunos = new Array ('lucas','gustavo','livia','paula');

// let frutas = ['pera','uva','mamao']

// let carros = Array ();

// carros ['Anos80'] = Array('variante','brasilia','belina')

// carros ['importados'] = Array ('bmw','toyota','honda')

// console.log(carros);

// let insetos = new Array ('formiga','mosca','grilo')

// insetos.push('cigarra')
// insetos.push('zangão')

// insetos.unshift('caracol')
// insetos.unshift('pernilongo')



// // pesquisar
// console.log(insetos.sort());

// 
// count =0
// console.log('inicio');
// while (count<=10) {
//     count++



//     console.log(count);


//     console.log('fim');


// }

// console.log("inicio");
// i = 0
// do {
//     i++
//     console.log("laço - " + i);
// } while (i < 10)
// console.log("fim");

let arrow = (x) => {

    return x**2

}

console.log(arrow(9));