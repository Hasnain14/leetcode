function uniqueOccurrences(arr: number[]): boolean {
    const newMap:Map<number, number> = new Map();

    // creating map
    for(let i = 0; i < arr.length; i++){
        (newMap.has(arr[i])) ? newMap.set(arr[i],newMap.get(arr[i])! + 1): newMap.set(arr[i],1);
    }

    // sort map according to value
    const sortedMap:Map<number,number> = new Map([...newMap.entries()].sort((a,b) => a[1] - b[1]));
    
    let temp:number = 0;

    // check occurrences
    for (const value of sortedMap.values()) {
        if(temp === value){
            return false;
        }
        temp = value;
        // console.log(`Value: ${value}`);
    }
    // console.log(newMap)
    // console.log(sortedMap.size)
    return true;
};

let arr = [1,2,2,1,1,3];
console.log(uniqueOccurrences(arr))