function removeStars(s: string): string {
    // time limit
    // while(s.includes("*")){
    //     let index = s.indexOf("*")
    //     if (index > 0) {
    //         s = s.slice(0, index - 1) + s.slice(index + 1);
    //     } else {
    //         s = s.slice(index + 1);
    //     }
    // }
    // return s;

    // right solution

    let stack:string[] = [];
    for (let char of s) {
        if (char === "*") {
            if (stack.length > 0){    
            stack.pop(); 
            } 
        } else {
            stack.push(char);
        }
    }
    return stack.join("");
    
};


let s = "leet**cod*e";
console.log(removeStars(s));