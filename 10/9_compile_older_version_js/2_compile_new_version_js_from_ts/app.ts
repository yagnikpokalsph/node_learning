// Creating the new object
let myObject = {name1:"1",y:2,z:3}

// Copying the object using destructuring
let {name1,...z} = myObject
console.log(name1,z)