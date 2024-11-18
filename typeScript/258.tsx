function addDigits(num: number): number {
    let tempOut = 0, result = 0;
    while (num > 9) {
        tempOut = num;
        result = 0;
        while (tempOut > 0) {
            result += tempOut % 10;
            tempOut = Math.floor(tempOut / 10);
            // console.log(tempOut)
        }
        num = result;

    }
    return (num > 9) ? result : num;
};

let num = 9;

console.log(addDigits(num));