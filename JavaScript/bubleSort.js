
function bubbleSort(arr){
    for(let i =0; i< arr.length-1; i++){
        for(let j =0; j<(arr.length-i)-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }               
        }
    }
       
        return arr;
}

const arr = [3,2,9,5,8];
const sortedArray = bubbleSort(arr);

console.log(sortedArray);
// console.log(arr.length)