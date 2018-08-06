/*
    Algumas pessoas em um fila precisam ser dividas em dois times.
    A primeira pessoa vai pro time 1, a segunda para o time 2
    A terceria para o time 1, a quarta para o time dois, 
    e por assim em diante.

    Dada uma array de inteiros com o peso de cada pessoa, 
    retorne um array com dois inteiros onde o primeiro é a soma
    dos pesos das pessoas do time 1 e o segundo é a soma dos pesos
    das pessoas do time 2

    Examplo

    Para a = [50, 60, 60, 45, 70], a saída deveria ser
    alternatingSums(a) = [180, 105].
*/
function alternatingSums(a) {
    if (a.length ==1) return [a[0], 0];
    return [ a.filter( (x,i) => !(i&1)  ).reduce((t,x)=> t+=x),
             a.filter( (x,i) => (i&1)  ).reduce((t,x)=> t+=x)]
}

var a = [50, 60, 60, 45, 70];
console.log( alternatingSums(a));
console.log( [180, 105] );

a = [80];
console.log(alternatingSums(a));
console.log([80, 0]);