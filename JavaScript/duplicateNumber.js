
const duplicateNumber = (arr) =>{
    let maxValue = Math.max(...arr);
    let temp = Array.from('0'.repeat(maxValue+1));

    for (let i = 0; i < arr.length; i++) {
        temp[arr[i]] ++;
        
    }
    if (Math.max(...temp)>1) {
            console.log('repeated number are : ')
    }
    else{
        console.log('There is no repeated number ')
    }
    temp.map( (val,index)=> {
        
        if (val>1) {
            console.log(index);
        }
    })
    // console.log(temp);
}

const arr = [8,7,2,5,3,1,10];
duplicateNumber(arr);