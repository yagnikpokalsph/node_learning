// Set will be used to store the unique collection of the items
// No duplicated will be allowed

let myIntSet = new Set([10,20,30,30,40])
console.log(myIntSet)
for (let value of myIntSet) {
    console.log(value)
}
let myStringSet = new Set(["yp",30,"yp"])
console.log(myStringSet)
for (let value of myStringSet) {
    console.log(value)
}

// Create empty set
letmyEmptySet = new Set()
console.log(letmyEmptySet)
// Add some value
letmyEmptySet.add(30)
console.log(letmyEmptySet)
console.log(letmyEmptySet.has(30))
// CLear value in set
letmyEmptySet.clear()
console.log(letmyEmptySet)

// Adding 2 value and delet 1 value
letmyEmptySet.add("yp")
letmyEmptySet.add(30)
letmyEmptySet.delete(30)
console.log(letmyEmptySet)

// convert array to set
myArr = [10,10,20,30,30,40]
let mySet = new Set(myArr)
console.log(mySet)



