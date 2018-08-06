/* Você tem uma string de letras, espaços, caracteres especiais e parênteses.
    É garantido que os parênteses na string formam uma sequencia correta.
    Sua tarefa é reverter a string dentro de cada parênteses, de dentro pra fora.

    O rsultado não deve conter nenhum parêntese.
    Para s = "a(bc)de", a saída deveria ser
    reverseParentheses(s) = "acbde".
*/

function reverseParentheses(s) {
    var abre = [];
    s = s.split("");
    for ( let i =0; i < s.length; i++){
        if(s[i]=='('){
            abre.push(i);
        } else if ( s[i] == ')'){
            idx = abre.pop();
            let before = s.slice(0, idx);
            let rev = s.slice(idx+1, i);
            let after = s.slice(i+1, s.lenght);
            s = before.concat( rev.reverse(), after);
            i = (i<2)? 0: i-2;
        }
    }
    return s.join("");
}


//outra solução mais bacana
function reverseParentheses(s) {
    while( s.indexOf(')') != -1 ){
        var c = s.indexOf(")", 0);
        var a = s.lastIndexOf('(', c);
        var b = s.slice(a+1, c).split("").reverse().join("");
        s = s.slice(0,a) + b + s.slice(c+1);
    }
    return s;
}

var s = "The ((quick (brown) (fox) jumps over the lazy) dog)"
console.log( reverseParentheses(s));
console.log("The god quick nworb xof jumps over the lazy");

s = "a(bcdefghijkl(mno)p)q";
console.log( reverseParentheses(s));
console.log("apmnolkjihgfedcbq");