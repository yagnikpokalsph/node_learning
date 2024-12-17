const cars = ["kwid","swift","i20"]

for (let i=0;i<=2;i++){
    console.log(cars[i])
}
for (let i=0;i<cars.length;i++){
    console.log(cars[i])
}

// for in and for of loop
// Both are iteration operators
// Only difference is for in will use for the key of object
// for of will be use for the value of the object
// for in loop
for (let i in cars){
    console.log(i,cars[i])
}


// in will extract the key
for (let x in cars){
    console.log(x,cars[x])
}
// of will extract the value
for (let x of cars){
    console.log(x,cars[x])
}

const carMfg = {
    "renault":"kwid",
    "suzuki":"swift",
    "hyundai":"i20"
}
// iteration over string
let mystr = "yp"
for (let x of mystr){
    console.log(x)
}

// iteration over map
let mymap = new Map([
       [ "name","yp"],
       [ "age",30],
    ])
for (let [key,value] of mymap){
    console.log(key,value)
}

// iterate ove Set
let mySet = new Set([])