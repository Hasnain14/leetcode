
const removeDuplicate = (arr,val) => {
    let count =0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != val) {
           arr[count++] = arr[i];
        }
        
    }

    return (count);
}


const  arr = [3,2,2,3];
let val = 3;

const r = removeDuplicate(arr, val)

console.log(r)