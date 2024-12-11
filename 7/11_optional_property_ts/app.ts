interface User  {
    name:string,
    // If i will not use the question mark then on line 6 i got error like missing age
    age?:number
}
let myuser:User ={
    name:"y",
}
console.log(myuser.age)