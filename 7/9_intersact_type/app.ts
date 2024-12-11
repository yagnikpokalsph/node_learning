// Interact will allow to combine multiple types into one
type Person = {
    id: number
    firstName:string,
    lastName:string,
}
type Employee = {
    id: number
    salary:number
}

type EmployedPerson = Person & Employee
let obj1:EmployedPerson={
    firstName:"y",
    lastName:"p",
    id:123,
    salary:10
}
console.log(obj1)