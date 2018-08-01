/*  Dadas duas strings, encontre o número de caracteres comuns entre elas.
    Examplo
    Para  s1 = "aabcc" and s2 = "dcaa", a saída deveria ser
    commonCharacterCount(s1, s2) = 3.
    As strings tem 3 caracteres em comum - 2 "a"s e 1 "c".

*/
function commonCharacterCount(s1, s2) {
    s1 = s1.split('');
    s2 = s2.split('');
    s1 = s1.filter( function(l){     
        if (s2.includes(l)){
            s2.splice( s2.indexOf(l),1);
            return true;
        } else {
            return false;
        }
    });
    return s1.length;
}

//outra solução
function commonCharacterCount(s1, s2){
    for (let i =0; i < s1.length; i++){
        s2 = s2.replace(s1[i], "!");
    }
    return s2.replace(/[^!]/g, "").length;
}
var s1 = "aabcc" , s2 = "adcaa";
console.log( commonCharacterCount(s1, s2));
