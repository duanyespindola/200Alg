/*
Dada uma string, checar se é um palíndromo.
(palavra que fica igual se escrita ao contrário)
Examplos:
* Para inputString = "aabaa", a saíde deveria ser
	checkPalindrome(inputString) = true;
* Para inputString  = "abac", a saíde deveria ser
	checkPalindrome(inputString) = false;
* Para inputString  = "a", a saíde deveria ser
	checkPalindrome(inputString) = true.
*/

//minha solução
function checkPalindrome(inputString) {
    var s = '';
    for ( l of inputString){
        s = l + s;
    }
    return inputString == s;
}

//solução mais elegante
function checkPalindrome(inputString) {
    return inputString == inputString.split('').reverse().join('');
}

var s = "abcd";
console.log( checkPalindrome(s));

s = "abcddcba";
console.log( checkPalindrome(s));
