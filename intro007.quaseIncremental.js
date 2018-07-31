/*
    Dada uma sequencia de inteiros em uma array, determine se é possível
    obter uma sequencia estritamente incremental removendo não mais do que 
    um elemento da array

    Exemplo

    Para sequence = [1, 3, 2, 1], a saida deveria ser
    almostIncreasingSequence(sequence) = false.

    Não existe, nessa array um unico elemento que pode ser retirado
    para obter uma array onde cada elemento é maior que o anterior.

    Para  sequence = [1, 3, 2], a saída deveria ser
    almostIncreasingSequence(sequence) = true.

    Se você remover o  3 voce terá uma sequencia estritamente incremental [1, 2]. 
    OU, voce pode remover o 2 para ter sequencia estritamente incremental [1, 3].
*/
function almostIncreasingSequence(seq, vezes=0){
    if (vezes >1 ) return false;
    var c=0, idx=null;
    for (let i=0; i < seq.length -1; i++){
        if(seq[i] >= seq[i+1]){
            idx = i;
            c++;
        }
        if ( c >1 ) return false;
    }
    if ( c == 0 ) return true;
    var s1 = [...seq], s2 = [...seq];
    s1.splice(idx, 1);
    s2.splice(idx+1, 1);
    return (almostIncreasingSequence(s1, vezes+1) || almostIncreasingSequence(s2, vezes+1) )
}

//outra solução que não usa recursividade
function almostIncreasingSequence(seq) {
    var c = 0;
    for( let i = 1; i < seq.length; i++)    {
        if (seq[i] <= seq[i-1]){
            if( i == 1){
                ++c;
            } else {
                if (++c > 1) return false;
                if ( i == seq.length-1 ) return true;
                if ( (seq[i-1]<seq[i+1]) || (seq[i-2]<seq[i] ) ){
                    c++;
                } else return false;
            }
        }
    }
    return true;
}



var a = [1, 2, 5, 3, 5] ;
console.log( almostIncreasingSequence(a) );
a = [10, 1, 2, 3, 4, 5];
console.log( almostIncreasingSequence(a) );
a = [1, 2, 1, 2]; 
console.log( almostIncreasingSequence(a) );
