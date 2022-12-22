// Escopo de variaveis

// global , funcao {} , bloco {}

// global
var filme = "Superman"

// bloco
if (true) {
    console.log(filme);
}


function verFilme(){
    var filme2 = "capitaõAmerica"
    console.log(filme2);
}


// global
console.log(filme);
console.log();
verFilme();