
var averageOfLevels = function(root) {
    
    let n = root.length - 1, c = 1, avg = 0, temp_sum =0,j = 0, num = 0;
    const number = [];

    while(j <= n){
        for (let i = 0; i < c; i++) {
            if(j > n){
                break;
            }else{
                temp_sum = root[j] + temp_sum;
                j++;
                if (root[j-1] == null) {
                    continue;
                }else{
                    num++;
                }
            }  
        }

        avg = temp_sum / num;
        number.push(avg);

        c = c*2;
        temp_sum = 0;
        num = 0;
    }

    return number;
};

const root = [3,9,20,7,null,null,15];

let res = averageOfLevels(root);

console.log(res);