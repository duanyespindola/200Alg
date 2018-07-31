/*  Depois que eles ficaram famosos, todos os CodeBots decidiram se mudar e morar juntos.
    O prédio é representado por uma matriz retangular de quartos.
    Cada célula na matriz contem um inteiro que representa o preço do quarto.
    Alguns quartos são gratuítos (custam 0), mas isso é porque ele é provavelmente mal assombrado,
    então, todos os CodeBots tem medo deles.
    E esse é o motivo pelo qual qualquer quarto que é grátis ou está em qualquer lugar abaixo 
    de um quarto gratis na mesma coluna não é considerado habitável para um CodeBot.

    Ajude a calcular o preço total de todos os quartos habitáveis para eles.

    Exemplos: 

    Para
    matrix = [[0, 1, 1, 2], 
              [0, 5, 0, 0], 
              [2, 0, 3, 3]]

    A saída deveria ser
    matrixElementsSum(matrix) = 9.

    Aqui está a matriz com os quartos não habitáveis marcados como "x":
    [[x, 1, 1, 2], 
     [x, 5, x, x], 
     [x, x, x, x]]

    Portanto a resposta é 1 + 5 + 1 + 2 = 9.

    Para 
    matrix = [[1, 1, 1, 0], 
              [0, 5, 0, 1], 
              [2, 1, 3, 10]]
    a saída deveria ser
    matrixElementsSum(matrix) = 9.

    Aqui está a matriz com os quartos não habitáveis marcados como "x":
    [[1, 1, 1, x], 
    [x, 5, x, x], 
    [x, 1, x, x]]

    Note que o quarto grátis na primeira linha faz toda a coluna inabitável.

    Portanto a resposta é  1 + 1 + 1 + 5 + 1 = 9.
*/
function matrixElementsSum(matrix) {
    var total = 0;
    for (let col=0; col < matrix[0].length; col++){
        for (let row=0; row < matrix.length; row++){
            if ( matrix[row][col] == 0) break;
            total += matrix[row][col];
        }
    }
    return total;
}

var matrix = [ [0, 1, 1, 2], 
                [0, 5, 0, 0], 
                [2, 0, 3, 3]];
console.log( matrixElementsSum(matrix));


matrix = [[1, 1, 1, 0], 
          [0, 5, 0, 1], 
          [2, 1, 3, 10]];

console.log( matrixElementsSum(matrix));
