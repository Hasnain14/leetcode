// destructure

const nums = [1, 2, 3];

[a1, ...rest] = nums;

// console.log(rest);

// destructure object 
const person1 = {objname:"tamim", age:10, phone: 08763367, fatherName: "abbu"}

const {objname} = person1;

// console.log(objname)

//  class 
class Person{
    constructor(Fathername){
        
        this.Fathername = Fathername;
    }
    
}

class Child extends Person{
    constructor(Fname,pName, pAge){
        super(Fname);
        this.name = pName;
        this.age = pAge;
        this.school = "DRMC";
    }

    getFullName(){
        return this.Fathername + " " + this.name;
    }
}

// per1 = new person("tamim", 12);
// per2 = new person("talha",15);

// ch1 = new Child("tamim","talukder",14);

// console.log(per1.name);
// console.log(ch1.getFullName());

// double vs tripe (=) double used to check compare without type check. triple used to check with type

// const first = 2;
// const second = 3;
// if(first == second){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

// map filter 

// const numbers = [3,4,5,2,6,7,4]
// const Mapresult = numbers.map(function (element){
//     return element*element;
// })
// console.log(Mapresult);

// filterResut = numbers.filter(x => x>5);
// console.log(filterResut);

// map practice

const student= [
    {id:21, sName:"ta"},
    {id:29, sName:"sa"},
    {id:27, sName:"ka"},
];

const stName = student.map(s=>s.sName);
const seniorStudent = student.filter(ag=>ag.id>25);
// console.log(stName);
// console.log(seniorStudent.map(s=>s.sName));

// argument function

function add(nums1,nums2){
    // console.log([...arguments])
    let result =0;
    [...arguments].forEach(value => {
        result = result+ value;
    });
    return result;
}

const result = add(1,2,4,5);
// console.log(result);

