var isValid = function(s) {
    
    const temp = [];
    if (s[0] == ")" | s[0] == "}" | s[0] == "]") {
       return false;
    }
    for (let i = 0; i < s.length; i++) {
       
        if (s[i] == "(" | s[i] == "{" | s[i] == "[") {
            temp.push(s[i]);
            continue;
        }

        if (s[i] == ")") {
            if(temp[temp.length-1] == "("){
                temp.pop();
            }else{
                return false
            }  
        }
        else if (s[i] == "}") {
            if(temp[temp.length-1] == "{"){
                temp.pop();
            }else{
                return false
            }  
        }else if (s[i] == "]") {
            if(temp[temp.length-1] == "["){
                temp.pop();
            }else{
                return false
            } 
        } 
    }
   if (temp.length) {
    return false
   }else{
    return true
   }
    
};

let s = "([])"
let reu = isValid(s);

console.log(reu);