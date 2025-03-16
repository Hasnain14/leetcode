let left:number = 1;
    let right:number = (Math.max(...ranks))*cars*cars;
    while(left < right){
        let mid:number = Math.floor((left+right)/2);
        let countCar = 0;

        for(let i = 0; i < ranks.length; i++){
            countCar += Math.floor(Math.sqrt(mid/ranks[i]));
            if(countCar >= cars){
                break;
            }
        }

        if(countCar >= cars){
            right = mid;
        }else{
            left = mid + 1;
        }
    }

    return left;