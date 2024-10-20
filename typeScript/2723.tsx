import { Promise as pro } from 'es6-promise'

type P = pro<number>

async function addTwoPromises(promise1: P, promise2: P): P {

    return await promise1 + await promise2;

};

let pr1: P = new pro(resolve => setTimeout(() => resolve(10), 50));
let pr2: P = new pro(resolve => setTimeout(() => resolve(-12), 30));

addTwoPromises(pr1, pr2).then((result) => { console.log(result); });


