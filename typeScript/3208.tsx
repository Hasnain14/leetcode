function numberOfAlternatingGroups(colors: number[], k: number): number {
    let prev = false;
    let resultCount = 0;

    for(let i = 0; i < k; i++){
        colors.push(colors[i]);
    }
    for(let i = 0; i < colors.length - k; i++){
        if(prev === true){
            if(colors[i+k-1] === colors[i+k-2]){
                prev = false
            }else{
                resultCount++;
            }

        }else{
            for(let j = i; j < i+k-1; j++){
                if(colors[j] === colors[j+1]){
                    prev = false
                    break;
                }else{
                    prev = true;
                }
                // console.log(j)
            }
            if(prev === true){

                resultCount++;
            }
        }
        // console.log(i, resultCount)
    }
    // console.log(colors)
    return resultCount;
};

let colors = [0,1,0,0,1,0,1], k = 6;
console.log(numberOfAlternatingGroups(colors,k))