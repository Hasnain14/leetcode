function searchMatrix(matrix: number[][], target: number): boolean {
    let lowerM = 0, UpperM = matrix.length - 1;
    let midM = Math.floor((lowerM+UpperM)/2);


    while(lowerM <= UpperM){
        if(matrix[midM][0] <= target && matrix[midM][matrix[0].length - 1] >= target){            
            for(let i = 0; i< matrix[0].length  ; i++){
                if(matrix[midM][i] === target){
                    return true
                };
            }
            return false;
        }else if(matrix[midM][0] > target){
                UpperM = midM - 1;
                midM = Math.floor((lowerM+UpperM)/2);
            }else if(matrix[midM][0] < target && midM >= 0){
                lowerM = midM + 1;
                midM = Math.floor((lowerM+UpperM)/2);
            }else{
                return false;
            }
            console.log(midM)
    }
    return false;
};

let matrix = [[1],[3],[5]],
    target = 4;

console.log(searchMatrix(matrix,target));

