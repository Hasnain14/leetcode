function twoSum(numbers: number[], target: number): number[] {
    let left:number = 0;
    let right:number = numbers.length - 1;

    while(left < right){
        let tempTarget : number = target - numbers[left];
        if(tempTarget < numbers[right]){
            right--;
        }else if(tempTarget > numbers[right]){
            left++
        }else{
            return [left+1,right+1]
        }
    }
};

let numbers = [2,7,11,15], target = 9;
console.log(twoSum(numbers,target))