// Generics allow to create reusable and flexible components, enable type safe code
// generics allow to create type variable
// Used for the class, function, type aliaS


// Generics using the function
function createPair<S>(val:S){
return val
}
console.log(createPair<string>("y")) // Explicitly passed type
console.log(createPair("p"))         // Inferred type

// Using interface
interface Pair<T,U>{
    first:T,
    last:U
}
const pair:Pair<string, number> = {
    first :"y",
    last:30
}
console.log(pair)

// Generics using the class
class Box<T> {
content :T;
constructor(value:T){
    this.content = value;
}
}
const stringBox = new Box<string>("hello")
const numberBox = new Box<number>(2)
console.log(stringBox)
console.log(numberBox)



