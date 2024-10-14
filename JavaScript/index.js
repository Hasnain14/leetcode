
// <!-- find missing number -->
function missing_number(arr){
    
    document.getElementById("Array").innerHTML = "given array is " + arr ; 

    let n = arr.length;
    const temp = [0];

    for(let i =0; i<n; i++)
         temp[arr[i]-1] = 1;
    for(let i =0; i<=n; i++)
        if(temp[i]== undefined)
             {
                let ans = i+1;
                document.getElementById("result").innerHTML = "The Missing Number Is " + ans;
            }
}

const missingNumber = [1, 3, 7, 5, 6, 2, 8,4];
missing_number(missingNumber);

// find mejority number
function find_mejor_element(a){
    
    let n = a.length;
    let count_n = new Array(Math.max(...a)+1).fill(0);

    // const count_n = [];
    // count_n[Math.max(...a)+1] =0;

    // count_n = count_n.fill(0);

    for(let i = 0; i<n; i++)
         count_n[a[i]]++

       let max_value = 0; 
       let max_index = 0;

     for(let i =0; i<count_n.length; i++){
            if(count_n[i]>max_value){
                 max_value = count_n[i];
                 max_index = i;
             }
            
    }
    document.getElementById("Array1").innerHTML = "given array is " + a ;  
    document.getElementById("result1").innerHTML = "the major number is " +max_index; 
    
 }

const a = [0,3, 3, 4, 2, 4, 4, 2, 4, 4,0,6];

find_mejor_element(a);
