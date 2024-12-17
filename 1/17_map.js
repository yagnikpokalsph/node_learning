let myMap = new Map([
    ["name","yp"],
   [ "age",30]
])
console.log(myMap)
myMap.set("address","in")
console.log(myMap)
console.log(myMap.get("address"))
console.log(myMap.has("name"))
console.log(myMap.keys(30))

// Empty map
const map = new Map()
console.log(map)