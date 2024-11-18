function addDigits(num: number): number {
    // let tempOut = 0, result = 0;
    // while(num >= 10){
    //     tempOut = num;
    //     while(tempOut > 0){
    //         result += tempOut % 10;
    //         tempOut = Math.floor(tempOut /10);
    //     console.log(tempOut)
    //     }
    //     num = result;

    // }
    return 1 + (num - 1) % 9;
};

let num = 18;

console.log(addDigits(num));