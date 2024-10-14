var maxProfit = function(prices) {
    
    let max = 1;
    let min = 0;
    let temp = 0, result_max = 0;

    while(max < prices.length){

        temp = prices[max] - prices[min];

        if(result_max < temp){
            result_max = temp;
        }
        
        if(temp > 0){
            max++;
        }else{
            min = max;
            max++;
        }
        
    }

    return result_max;
};

const prices = [7,6,4,3,1]
let res = maxProfit(prices);

console.log(res);