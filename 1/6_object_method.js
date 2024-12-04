// Create object

const person = {
    name : "yp",
    age :30
}
console.log(person)
console.log(person.age)

person.surname = "pokal"
console.log(person)
// this keyword will use to access the valu of the object
const person_1 = {
    name : "John",
    age : 30,
    greet:()=>{
        console.log("Hi i am "+this.name)
    }
}
person_1.greet();
// Give this.name undefine due to scope of greet function
const person_2 = {
    name : "John",
    age : 30,
    greet(){
        console.log("Hi i am "+this.name)
    }
}
person_2.greet();
