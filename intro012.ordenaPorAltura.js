/*
    Algumas pessoas estão paradas em uma fila num parque.
	Existem árvores entre elas que não podem se mover.
	Sua tarefa é ordenar as pessoas pela altura em ordem 
	não-decrescente (tambem conhecido como crescente) sem mover as árvores.
    As pessoas podem ser bem altas

    Examplo
    Para a = [-1, 150, 190, 170, -1, -1, 160, 180], a saída deveria ser
    sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

    Se a[i] = -1, então essa posição é ocupada por uma árvore. 
    Senão, a[i] é a altrua da pessoa parada na positção.
*/
function sortByHeight(a){
    var arvores = [];
    for (let i =0; i < a.length; i++){
        if (a[i] == -1) arvores.push(i);
    }
    var pessoas = a.filter(x=>x!=-1).sort((a,b)=>a-b);
    var res = [];
    for(let i=0; i < a.length; i++){
        if( arvores.includes(i)){
            res.push(-1);
        } else {
            res.push( pessoas.shift() );
        }
    }
    return res;
}
// outra solução
function sortByHeight(a){
    var pessoas = a.filter(x=>x!=-1).sort((a,b)=>a-b);
    return a.map( x => x!=-1 ? pessoas.shift() : x);
}

var a = [-1, 150, 190, 170, -1, -1, 160, 180];
console.log( sortByHeight(a));
console.log(  [-1, 150, 160, 170, -1, -1, 180, 190]);
