function interpret(command: string): string {
    let resultString = "";
    for(let i = 0; i < command.length; i++){
        // console.log(resultString)
        if(command[i] === "("){
            
            if(command[i+1] === ")"){
            resultString += "o";
            }else{
                resultString += command[i+1]
                i++;
            }
        }else{
            if(command[i] === ")"){
                continue;
            }else{
                resultString += command[i];
            }
        }
    }
    return resultString;
};

let command = "g(al)G(al)()()G"
console.log(interpret(command))
