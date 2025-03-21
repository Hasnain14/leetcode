function findAllRecipes(recipes: string[], ingredients: string[][], supplies: string[]): string[] {
    let resultArray : string[] = [];
    let flag :boolean = true;
    while(flag){
        flag = false;
        for(let i = 0; i < ingredients.length; i++){
            let count : number = 0;
            if(!resultArray.includes(recipes[i])){
                for(let j = 0; j < ingredients[i].length; j++){
                    if(!supplies.includes(ingredients[i][j])){
                        break
                    }else{
                        count++;
                    }
                }
                // console.log(count,ingredients[i].length)
                if(count === ingredients[i].length){
                    resultArray.push(recipes[i])
                    supplies.push(recipes[i])
                    flag = true;
                }
            }
        }
    }

    return resultArray;
};

let recipes = ["bread","sandwich"], ingredients = [["yeast","flour"],["bread","meat"]], supplies = ["yeast","flour","meat"];
console.log(findAllRecipes(recipes,ingredients,supplies))