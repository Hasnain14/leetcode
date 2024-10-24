type F = (...args: number[]) => void

function debounce(fn: F, t: number): F {
    let timeOutId;
    return function(...args) {
        if(timeOutId){
            clearTimeout(timeOutId)
        }
        timeOutId = setTimeout(() => {
            fn(...args)
        },t)
    }
};