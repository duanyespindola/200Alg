/*
    Numeros de loteria são compostos com um número par de digitos 
    Um bilhete é considerado "da sorte" se a soma da primeira metade
    dos dígitos é igual a soma da segunda metade.
    
    Determine se um bilhete é ou não "da sorte".

	Para n = 1230, a saída deveria ser 
	isLucky(n) = true;
	Para n = 239017, a saída deveria ser 
	isLucky(n) = false.
*/
function isLucky(n) {
    var s2 = n.toString().split('').map(x=>parseInt(x));
    var s1 = s2.splice(0, s2.length/2);
    return s1.reduce((t,n)=> t+n) ==  s2.reduce((t,n)=> t+n);
}
//outra solução
function isLucky(n){
    var a = (n+"").split(""),
       half = a.length/2,
       l = 0,
       r=0;
    while( a.length > half) r+= +a.pop();
    while( a.length) l+= +a.pop();
    return l == r;
}


var n = 1230;
console.log( isLucky(n));

n = 239017;
console.log( isLucky(n));
