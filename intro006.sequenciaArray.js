/*
    Ratiorg ganhou estatuas de aniversários diferentes tamanhos como presentes do CodeMaster, 
    cada estátua tem um tamanho iteiro não negativo. 
    Já que ele é perfeccionista, ele quer arrumar as estátuas da menor para a maior
    de forma que cada estátua seja maior que a anterior por exatamente 1. 
    Pode ser que ele precise de algumas estatuas a mais para conseguir isso.
    Ajude-o a descobrir o mínimo de estatuas adicionais que ele vai precisar.

    Examplo

    Para statues = [6, 2, 3, 8], a saída deve ser
    makeArrayConsecutive2(statues) = 3.

    Ratiorg precisará de estatuas do tamanho 4,5 e 7.
*/
//minha solução
function makeArrayConsecutive2(statues) {
    statues.sort(function(a,b){return a-b});
    var total = statues[statues.length -1 ] - statues[0] +1;
    return total - statues.length;
}

//solução beeem mais direta
function makeArrayConsecutive2(statues) {
    return Math.max(...estatues) - Math.min(...estatues) +1 - estatues.length;
}

var statues = [6, 2, 3, 8];
console.log( makeArrayConsecutive2(statues));
