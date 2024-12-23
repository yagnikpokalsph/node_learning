
const car: {type:string,name:string,age:number}= {
    type:"corolla",
    name: "John",
    age : 30,
}
console.log(car)
// infer will give error
const car_2:{type:string} = {
    type:"corolla",
}
car_2.type = "ford"
// Below will give error
//car_2.type = 2
console.log(car_2)

// Adding optional property
// It will allow if do not want to set the value for the type
const car_3:{type:string,name?:string,mileage?:number} = {
    type:"corolla",
}
car_3.name = "Toyota"
console.log(car_3)