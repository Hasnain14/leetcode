 let tempArray:number[] = [0,1,1];
    
    if(n === 0 ){
        return 0;
    }else if(n === 2 || n === 1){
        return 1;
    }
    for(let i = 3; i <= n; i++){
        tempArray[i] = tempArray[i - 1] + tempArray[i - 2] + tempArray[i - 3];
        // console.log(tempArray)
    }
    return tempArray[n];