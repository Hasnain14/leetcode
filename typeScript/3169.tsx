function countDays(days: number, meetings: number[][]): number {
    meetings.sort((meeting1, meeting2) => meeting1[0] - meeting2[0]);
    // console.log(meetings)
    let missingDays :number = 0
    let maxDay : number = 0;
    for(let i = 0; i < meetings.length ; i++){
        missingDays += Math.max(0, meetings[i][0] - maxDay - 1);
        maxDay = Math.max(maxDay,meetings[i][1])
    }
    // console.log(meetings[meetings.length - 1][1])
    missingDays += Math.max(0, days - maxDay);
    return missingDays;
};

let days = 5, meetings = [[2,4],[1,3]]
console.log(countDays(days,meetings))

// days = 5, meetings = [[2,4],[1,3]]
// days = 10, meetings = [[5,7],[1,3],[9,10]];

