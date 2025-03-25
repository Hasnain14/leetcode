function checkValidCuts(n: number, rectangles: number[][]): boolean {
    const xAxis :number[][] = []
    const yAxis :number[][] = []

    for(const [startX,startY,endX,endY] of rectangles){
        xAxis.push([startX,endX])
        yAxis.push([startY,endY])
    }
    xAxis.sort((a,b) => a[0] - b[0]);
    console.log(xAxis)
    let lastPositionX :number = xAxis[0][1];
    let checkX :number = 0;
    for(let i  = 1 ; i < xAxis.length; i++){
        // console.log(checkX,lastPositionX,xAxis[i][0])
        if(lastPositionX <= xAxis[i][0]){
            checkX++;
        }
        lastPositionX = Math.max(lastPositionX,xAxis[i][1])
        if(checkX >= 2){
            return true;
        }
    }

    yAxis.sort((a,b) => a[0] - b[0])
    console.log(yAxis)
    let lastPositionY :number = yAxis[0][1];
    let checkY :number = 0;
    for(let i  = 1 ; i < yAxis.length; i++){
        if(lastPositionY <= yAxis[i][0]){
            checkY++;
        }
        lastPositionY = Math.max(lastPositionY,yAxis[i][1])
        if(checkY >= 2){
            return true;
        }
    }

    return false;
};

// let  n = 4, rectangles = [[0,2,2,4],[1,0,3,2],[2,2,3,4],[3,0,4,2],[3,2,4,4]]
// let n = 5, rectangles = [[1,0,5,2],[0,2,2,4],[3,2,5,3],[0,4,4,5]];
let n = 4, rectangles = [[0,2,2,4],[1,0,3,2],[2,2,3,4],[3,0,4,2],[3,2,4,4]];
console.log(checkValidCuts(n,rectangles))