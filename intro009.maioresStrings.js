/*
    Dado uma array de strings, devolva outra array contendo todas
    as strings mais longas.
    Exemplo
    Para inputArray = ["aba", "aa", "ad", "vcd", "aba"], 
    a saída deveria ser
    allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
*/

function allLongestStrings(inputArray) {
    var a = [""];
    for (x of inputArray){
        if( x.length > a[0].length){
            a = [x];
        } else if ( x.length === a[0].length){
            a.push(x);
        }
    }
    return a;
};


//outra solução, mais elegante
function allLongestStrings(inputArray){
    let maior = Math.max(...inputArray.map(x=>x.length));
    return inputArray.filter(x => x.length == maior);
}



var inputArray = ["aba", "aa", "ad", "vcd", "aba"];
console.log( allLongestStrings(inputArray));
