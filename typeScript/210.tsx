function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const inDegree : Map<number,number> = new Map();
    const edge : Map<number,number[]> = new Map();
    const order : number[] = [];
    const queue : number[] = [];

    for (let i = 0; i <numCourses; i++) { 
        inDegree.set(i, 0);
    }
    for (let i = 0; i <numCourses; i++) { 
        edge.set(i, []);
    }

    for(let i = 0; i < prerequisites.length; i++){
        const [course,pre] = prerequisites[i];
        edge.get(pre)!.push(course);
        inDegree.set(course,(inDegree.get(course)! + 1))
    }

    for (const [key, value] of inDegree) {
        if (value === 0) {
            queue.push(key);
        }
    }

    while(queue.length > 0){
        const tempCourse:number = queue.shift()!;
        order.push(tempCourse);

        // console.log(edge)
        edge.get(tempCourse)!.map(value => {
            inDegree.set(value, (inDegree.get(value)! - 1));
            if(inDegree.get(value) === 0){
                queue.push(value)
            }
        })

    }

    // console.log(queue)
    // console.log(inDegree)
    // console.log(edge)

    return order.length === numCourses ? order : [];
};

let numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
console.log(findOrder(numCourses,prerequisites))