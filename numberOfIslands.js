var grid = ["11110","11010","11000","00000"];

var matrix = [];

for(let k = 0; k<grid.length; k++){
    matrix.push(grid[k].toString().split(""));
}
console.log(matrix);
var visitedNodes = {}
var rows = matrix.length, columns = matrix[0].length;
console.log(rows, columns);

var getNeighbours = function (matrix, i, j) {
    //console.log("current node : ", i, j);
    var neighbours = [];

    if (i > 0 && parseInt(matrix[i - 1][j])) {
        neighbours.push([matrix[i - 1][j], i - 1, j])
    }

    if (j > 0 && parseInt(matrix[i][j - 1])) {
        neighbours.push([matrix[i][j - 1], i, j - 1])
    }
    if (j < columns - 1 && parseInt(matrix[i][j + 1])) {
        neighbours.push([matrix[i][j + 1], i, j + 1])
    }

    if (i < rows - 1 && parseInt(matrix[i + 1][j])) {
        neighbours.push([matrix[i + 1][j], i + 1, j])
    }

    return neighbours;
}

var computeNeighbours = function (matrix, row, col) {
    visitedNodes[row + "" + col] = true;
    //console.log( "visitedNodes[" ,row + "" + col, "]"  ,visitedNodes[row + "" + col] );
    let neighbours1 = getNeighbours(matrix, row, col);
    //console.log("-- > current Node[", row, col, "] , neighbours are :", JSON.stringify(neighbours1));
    for (let n1 = 0; n1 < neighbours1.length; n1++) {
        //console.log("neighbour  : " ,n1+1 ," : ",neighbours1[n1], " visited[", neighbours1[n1][1], neighbours1[n1][2], "]", visitedNodes[neighbours1[n1][1] + "" + neighbours1[n1][2]]);
        if (visitedNodes[neighbours1[n1][1] + "" + neighbours1[n1][2]]) {
            //console.log("already visited : ", neighbours1[n1][1], neighbours1[n1][2], " skipping ");

        } else if (neighbours1[n1][0] == "1") {
            //console.log("recursively finding neighbours of ", neighbours1[n1][1], neighbours1[n1][2]);
            computeNeighbours(matrix, neighbours1[n1][1], neighbours1[n1][2]);
        }
    }
}
var count = 0;
for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
        if (parseInt(matrix[row][col]) && !visitedNodes[row + '' + col]) {
            //console.log(" -*start*- visitedNodes[ " ,row + '' + col , ']' , visitedNodes[row + '' + col]);
            //console.log("ping!!");
           
            computeNeighbours(matrix, row, col);
             count++
            
        }
    }
}
//console.log("visitedNodes : ", JSON.stringify(visitedNodes));
//console.log("visied nodes length : ", Object.keys(visitedNodes).length);
console.log("********* count :", count);
return count;
