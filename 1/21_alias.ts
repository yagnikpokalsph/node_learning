// ALias can be used to define the custom name
type CarYear = number;
type CarType = string;
type CarModel = string;

type Car = {
    year:CarYear,
    type:CarType,
    model:CarModel
};

const caryear: CarYear = 2024
const carType:CarType = "corolla";
const carModel:CarModel = "Ford"

const car:Car={
    year:caryear,
    type:carType,
    model:carModel,
}
console.log(car)

// Interfaces are similar type to alias
// Instead it will only apply to object
interface Rectangle{
    height:number;
    width:number;
}
const rectangle:Rectangle = {
    height:20,
    width:30,
}
console.log(rectangle)

