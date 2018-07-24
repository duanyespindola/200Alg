/*
    Dado um ano, retorne o século ao qual ele pertence.
    O primeiro século vai do ano 1 até (e incluindo) o ano 100,
    o segundo século começa no ano 101 e vai até (e inclui) o ano 200, etc..
*/

//minha solução inicial
function centuryFromYear(year) {
    if ( (year/100)%1 == 0){
        return Math.trunc(year / 100);
    }
    return Math.trunc(year / 100)+1;
    
}

//uma outra solução mais adequada
function centuryFromYear(year) {
    return Math.ceil(year / 100);
}