// Destructuring in object
let person = {
    name: "John",
    age: 25,
}
let print = ({name, age}) => {
    console.log(name,age)
}
print(person)

// Destructuring the array
let personArr = ["John",25]
const [arg1,arg2] = personArr
console.log(arg1,arg2)

