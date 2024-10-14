// palindrome Number
const result = (x) => {
    
    let temp = 0;
    let num = x;

    while (x > 0) {

        let rem = x%10;
        temp = temp*10 + rem;
        x = parseInt(x/10);
        
    }
    return temp == num;
}

let finalResult = result(121);

console.log(finalResult)

