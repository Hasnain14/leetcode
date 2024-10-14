var longestCommonPrefix = function(strs) {
    
    if(strs.length == 0 ){
        return "";
    }
    let sz = strs[0].length;
    let temp = "";

    for (let i = 0; i < strs.length; i++) {
        if(sz < strs[i].length){
            sz = strs[i].length;
        }  
    }

    for (let i = 0; i < sz; i++) {
        for (let j = 0; j < strs.length-1; j++) {
            if ((strs[j])[i] != (strs[j+1])[i]) {
                return temp;
            }
        }
        temp = temp + (strs[0])[i];
    }
    return temp
};

strs = ["flower","flower","flower","flower"]
let reu = longestCommonPrefix(strs)
console.log(reu)