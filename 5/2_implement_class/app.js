


/*
Object in JS is same as struct in go like below
const person = {
    name:"YP",
    age:30,
}
 */

/*
Class is the blueprint for creating the object
It defines 2 items
1. data
2. methods
Class will provide a more structure and cleaner way to work with objects
It is the combination of class, constructor, set of method
 */

// Creating public class
class Public{
constructor(name,age){
    this.name = name
    this.age = age
}
displayPerson(){
    console.log(`${this.name} ${this.age}`);
}
addage(agefactoe){
    return agefactoe*this.age
}
}
const Person1 = new Public("yp",30)
Person1.displayPerson()

const Person2 = new Public("rp",33)
Person2.displayPerson()
console.log(Person2.addage(1.2))
