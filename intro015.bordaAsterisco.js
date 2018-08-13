/*
  Dada uma matriz retangular de caracteres, 
  adicione uma borda de asteríscos (*) a ela.
*/

function addBorder(p) {
    var ast = '*'.repeat( p[0].length+2);
    return [].concat( [ast], p.map(e=> '*'+e+"*"), [ast])
}

var picture = ["abc",
"ded"];

console.log( addBorder(picture));
console.log( ["*****",
"*abc*",
"*ded*",
"*****"]);

