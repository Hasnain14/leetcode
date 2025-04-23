function countLargestGroup(n: number): number {
    const newMap :Map<number, number> = new Map();
    for(let i = 1; i <= n; i++){
        
        let temp = Math.abs(i)
        .toString()
        .split('')
        .reduce((sum, digit) => sum + parseInt(digit), 0);


        (newMap.has(temp)) ? newMap.set(temp, newMap.get(temp)! + 1): newMap.set(temp,1)
    }
    const sortMap = Array.from(newMap.entries()).sort((a, b) => b[1] - a[1]);
    for(let i = 0; i < sortMap.length - 1; i++){
        if((sortMap[i])[1] !== (sortMap[i + 1])[1]){
            return i + 1;
        }
    }
        return  sortMap.length;
};

let n = 2;
console.log(countLargestGroup(n))