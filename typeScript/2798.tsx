function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
    let numberOfEmployeeMeetTargrt = 0;
    hours.map((value) => {
        if(value >= target) numberOfEmployeeMeetTargrt++;
    })

    return numberOfEmployeeMeetTargrt;
};

let hours = [0,1,2,3,4], target = 2;

console.log(numberOfEmployeesWhoMetTarget(hours,target));