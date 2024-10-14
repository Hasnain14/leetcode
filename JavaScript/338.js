
var countBits = function(n) {
   
    const result = [];
    let count = 0;

    for (let i = 0; i <= n; i++) {
        let temp = i;
        
        while(temp>0){
            if (temp%2 == 1) {
                count++;
            }
            temp = parseInt(temp/2);
        }
        result.push(count);
        count = 0;
    }

    return result;
};

let n = 3;
let r = countBits(n);
console.log(r);