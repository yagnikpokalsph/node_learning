var myarr = ["y","p",30]
let Nested_array = [myarr]
console.log(Nested_array);
// Output will be [ [ 'y', 'p', 30 ] ]

// Now to remove nested array we use spread operator
let spreadOperator = [...myarr]
console.log(spreadOperator)
// Output will be [ 'y', 'p', 30 ]


let a = [10,20,30]
let b = [...a,50,60]
console.log(b)
let c = [0,-1,...a,39]
console.log(c)

// Find the min using the spread operator.
let d = [0,-5,45]
console.log(Math.min(d))

console.log(Math.min(...d))

// Passing array element to individual variable in function using the spread operator
function add(val1,val2,val3){
return val1 + val2 + val3
}
let arr = [1,2,3]
console.log(add(...arr))

// Working with object using thr spread operator
const myObj = {
    name: 'John',
    age: 5,
}
const copyObj = {...myObj}
console.log(copyObj)

