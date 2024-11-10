function multiply(num1: string, num2: string): string {
    let tempNum1 = num1.split(""),
    tempNum2 = num2.split(""),
    tempMultiply: number[] = new Array((num1.length + num2.length)).fill(0),
    zeroAdd = 0;
  if(tempNum1.length < tempNum2.length){
        let temp = tempNum1;
        tempNum1 = tempNum2;
        tempNum2 = temp; 
    }   
    let carry = 0,carrySum = 0, sum = 0;
    for(let i = tempNum2.length - 1; i >= 0; i--){
            let k = (num1.length + num2.length) - 1;
            carry = 0;
            carrySum = 0;
        for(let j = tempNum1.length - 1 ; j >= 0; j--){
           let valueCheck = (parseInt(tempNum1[j]) * parseInt(tempNum2[i]));
           if(valueCheck > 9){
            sum = valueCheck % 10;  
            // console.log("i" + i + " s"+ sum +" c"+ carry +" v"+ valueCheck);
            let pre = (((k-zeroAdd) < 0))? 0 : (tempMultiply[k - zeroAdd]);
            if((sum + carry + pre + carrySum) > 9){
                tempMultiply[k - zeroAdd] = (sum + carry + pre + carrySum) % 10;
                carrySum = Math.floor((sum + carry + pre + carrySum) / 10);
            }else{
                tempMultiply[k - zeroAdd] = (sum + carry + pre + carrySum);
                carrySum = 0
            }      
            //  tempMultiply[k - zeroAdd] = (sum + carry + pre + carrySum);
             k--;
            carry = Math.floor(valueCheck / 10);
           }else{
            let pre = (((k-zeroAdd) < 0))? 0 : (tempMultiply[k - zeroAdd]);
            // console.log("i" + i + " s"+ sum +" c"+ carry +" v"+ valueCheck);
            if((valueCheck + carry + pre + carrySum) > 9){
                tempMultiply[k - zeroAdd] = (valueCheck + carry + pre + carrySum) % 10;
                carrySum = Math.floor((valueCheck + carry + pre + carrySum) / 10);
            }else{
                tempMultiply[k - zeroAdd] = (valueCheck + carry + pre + carrySum);
                carrySum = 0
            }
            // console.log("pre" + pre + "add " +tempMultiply[k] + j + valueCheck + k)
            //  tempMultiply[k - zeroAdd] = (valueCheck + carry + pre + carrySum);
             carry = 0;
             k--;
           }
        }
        (carry)?(tempMultiply[k - zeroAdd] = carry + carrySum):(tempMultiply[k - zeroAdd] = 0);
        zeroAdd++;
    }
    return (Number(tempMultiply.join(""))).toString();
};

let num1 = "9", num2 = "99";
console.log(multiply(num1,num2));