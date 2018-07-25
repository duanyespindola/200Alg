/*
    Dado uma lista de inteiros, encontre o par de elementos adjacentes que tem o maior produto
    e retorne esse produto.
    Examplo
    Para inputArray = [3, 6, -2, -5, 7, 3], a saída deveria ser 
    adjacentElementsProduct(inputArray) = 21.
    7 e 3 produzem o maior produto (multiplicação).
*/


//minha solução
function adjacentElementsProduct(inputArray) {
    var produtos = [];
    for (let i = 0; i < inputArray.length-1; i++) {
        produtos.push( inputArray[i] * inputArray[i+1] );
    }
    return produtos.sort(function(a,b){ return b-a})[0];
}

//outra solução
function adjacentElementsProduct(inputArray){
    var prod = inputArray[0] * inputArray[1];
    for (let i = 1; i < inputArray.length-1; i++) {
        prod = Math.max(prod,inputArray[i] * inputArray[i+1]);     
    }
    return prod;
}

var inputArray = [3, 6, -2, -5, 7, 3];
console.log( adjacentElementsProduct(inputArray) );
