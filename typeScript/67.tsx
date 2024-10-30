const halfAddar = (a:number, b:number):number[] => {
    let sumHalf = a ^ b;
    let carryHalf = a & b;
    return [sumHalf,carryHalf]
}
const fullAddar = (a:number,b:number,c:number): number[] => {
    const [sumHalf,carryHalf] = halfAddar(a,b)
    let sumFull = sumHalf ^ c;
    let carryFull = (c & sumHalf) | carryHalf; 
    return [sumFull, carryFull]
}
function addBinary(a: string, b: string): string {
    let lengthDifference = a.length - b.length;
    let carryIN = 0;
    let sum = '';
    const zeroes = Array.from(Array(Math.abs(lengthDifference)), () =>
        String(0)
      );
      if(lengthDifference > 0){
        b = zeroes.join('').concat(b);
      }else if(lengthDifference < 0){
        a = zeroes.join('').concat(a);
      }
        for(let i = a.length - 1; i >= 0; i--){
            if(i == a.length - 1){
                const [sumHalf, carryHalf] = halfAddar(parseInt(a[i]),parseInt(b[i]))
                sum = sumHalf + sum;
                carryIN = carryHalf;
            }else{
                const [sumFull, carryFull] = fullAddar(parseInt(a[i]),parseInt(b[i]),carryIN)
                sum = sumFull + sum;
                carryIN = carryFull;
            }
        }

        // console.log(halfAddar(parseInt(a[2]),parseInt(b[2])))
      return carryIN ? carryIN + sum : sum;
   
    
};
let a = "111", b = "10";
console.log(addBinary(a,b))