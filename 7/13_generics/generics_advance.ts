function printVal1(arg:string):string{
    return arg
}
let result1 = printVal1("y")
console.log(result1)
// Now for the above function if we needed number as return type or input type then it is not possbiel
// For that we need to use the below function

function printVal2(arg:number):number{
    return arg
}
let result2 = printVal2(30)
console.log(result2)

//Generic type will allow to use specific type which defines during the function call
// It will be very help full when we needed exact type while calling the function
// With generics we define specific type and can return that type
function printVal3<T>(arg:T):T{
return arg
}
let result3 = printVal3<string>("y")
let result4 = printVal3<number>(30)
let result5 = printVal3<boolean>(true)

console.log(result3)
console.log(result4)
console.log(result5)
