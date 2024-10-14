var rotate = function(matrix) {
    let temp = 0;
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix.length/2; j++) {
           temp = matrix[i][j];
           matrix[i][j] = matrix[j][matrix.length - i -1];
           matrix[j][matrix.length - i -1] = temp; 
            
        }
    }

    console.log(matrix);
};

matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]

rotate(matrix)