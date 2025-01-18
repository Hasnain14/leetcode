function asteroidCollision(asteroids: number[]): number[] {
    let stack:number[] = [];
    for(let value of asteroids){
        if(value < 0){
            if(stack.length <= 0){
                stack.push(value)
            }else if(stack.length > 0){
                let lastElementStack:number = stack.pop()!;
                if(lastElementStack === Math.abs(value)){
                    // stack.pop();
                    continue;
                    // console.log(stack)
                }
                else if(lastElementStack < 0){
                    stack.push(lastElementStack);
                    stack.push(value);
                }else{
                    if(lastElementStack > Math.abs(value)){
                        stack.push(lastElementStack);
                    }else{
                        // stack.push(value)
                        let check:number = lastElementStack;
                        
                        while(check < Math.abs(value) && stack.length > 0 && check > 0){
                            check = stack.pop()!;
                            console.log( check)
                        }
                        // console.log(stack)
                        
                        if(check === Math.abs(value)){
                            continue;
                        }else if(check < 0){
                            stack.push(check);
                            stack.push(value);
                        }else if(stack.length <= 0 && check < Math.abs(value)){
                            stack.push(value)
                        }else{
                            stack.push(check);
                        }
                    }
                }
            }
        }else{
            stack.push(value)
        }

        // console.log(stack)
    }

    return stack;
};

let asteroids = [-2,2,1,-2];
console.log(asteroidCollision(asteroids))