let myarr = ["yp",30]

const print = (arg1,arg2,arg3)=>{
    return [arg1,arg2,arg3];
}
console.log(print(1,2,3))
console.log(print(1,2,3,4))
// Which must return [ 1, 2, 3, 4 ] but actully returns [ 1, 2, 3 ]

// So restoperator comes into picture
const print_1=(...arg)=>{
return arg;
}
console.log(print_1(1,2,3,4));
// Output will be [ 1, 2, 3, 4 ]