var climbStairs = function(n) {
   let n1 = 1, n2 = 2;
   let result = 0;

    if(n == 1){
        result = n1;
    }else if(n == 2){
        result = n2
    }else{
        for (let i = 3; i <= n; i++) {
            result = n1 + n2;
            n1 = n2;
            n2 = result;
          }
    }
    
    return result;
};

let n = 6;
let r = climbStairs(n)

console.log(r)