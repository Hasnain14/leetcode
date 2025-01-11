function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    for(let i = 0; i < flowerbed.length; i++){
        if(flowerbed[i-1] !== 1 && flowerbed[i] !== 1 && flowerbed[i+1] !== 1){
            flowerbed[i] = 1;
            n--;
            // console.log(i)
        }
    }
    return (n <= 0)?true:false;
};

let flowerbed = [0,0,1,0,0], n = 1
console.log(canPlaceFlowers(flowerbed,n))


// [0,0,1,0,0] 1
// [1,0,0,0,0,1] 2