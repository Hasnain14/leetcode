function findMinArrowShots(points: number[][]): number {
    let resultCount = 1;
    let tempArray = points.sort((a, b) => a[1] - b[1]);
    let check = tempArray[0][1]
        // console.log(tempArray)
    for(let i = 1; i < tempArray.length; i++){
        if(check >= tempArray[i][0] && check <= tempArray[i][1]){
            continue
        }else{
            resultCount++;
            check = tempArray[i][1];
        }
        // console.log(tempArray[i][1])
    }
    // console.log()
    return resultCount;
};

let points = [[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]];
console.log(findMinArrowShots(points));