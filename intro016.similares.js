/*
    Duas arrays são consideradas similares se você pode transformar
    uma na outra trocando de lugar no máximo um par de elementos.

    Dadas duas arrays "a" e "b", verifique se elas são similares.

    Exemplo:

    Para a = [1, 2, 3] e b = [1, 2, 3], a saída deveria ser
    areSimilar(a, b) = true.

    Para arrays igual, não tem necessidade de de trocar os elementos.

    Para a = [1, 2, 3] e b = [2, 1, 3], a saída deveria ser 
    areSimilar(a, b) = true.

    Podesmos obter "a" trocando o 2 e o 1 em "b".

    Para a = [1, 2, 2] e b = [2, 1, 1], a saída deveria ser
    areSimilar(a, b) = false.

    Qualquer troca de lugares de 2 elementos não tornarão as arrays iguais
*/
function areSimilar(a, b) {
    var idxDiff = [];
    for (let i = 0; i < a.length; i++) {
        if ( a[i] != b[i]) idxDiff.push(i);
        if (idxDiff.length >2) return false;
    }
    return a[idxDiff[0]] == b[idxDiff[1]] && a[idxDiff[1]] == b[idxDiff[0]]
}

var a =[2, 3, 1], 
    b =[1, 3, 2];

console.log(areSimilar(a, b));
console.log(true);

a= [832, 998, 148, 570, 533, 561, 894, 147, 455, 279];
b= [832, 570, 148, 998, 533, 561, 455, 147, 894, 279];

console.log(areSimilar(a, b));
console.log(false);  