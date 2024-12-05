

const personMap = new Map();

 class  Person{
   constructor(name, age){
       this.name = name
        this.age = age
    }
     set(name, age) {
         personMap.set(name, age);
     }
    getName(){
       return this.name
    }
     getAge() {
         return this.age;
     }
    static getPerson(name) {
         if (personMap.has(name)) {
             return { name, age: personMap.get(name) };
         }
         return null; // Return null if the person is not found
     }
}
module.exports = Person