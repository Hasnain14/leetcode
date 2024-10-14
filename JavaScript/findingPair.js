
const findPair = (arr,target) => {
    
    // console.log(Math.max(...arr))

    let h = arr.length, l = 0, c = 0;
    let srtArr = arr.sort();

    while (l<h) {
        if (srtArr[l]+srtArr[h] == target) {
            console.log("pair found = " + srtArr[l],srtArr[h])
            c++;

        }
        (srtArr[l]+srtArr[h] <= target) ? l++ : h--;
    }
    
    if (c==0) {
        console.log("pair not found");
    }
}

const arr = [8,7,2,5,3,1];
findPair(arr,18);