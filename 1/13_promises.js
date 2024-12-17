// There is 2 types of the function in JS
// 1 synchronous function
// 2 asynchronous function

// synchronous function means it will run the code line by line
// asynchronous means it will wait for the function to receive response and till that time it will execute another function
// Which will make apps responsive

// Promises are like value will be used for future used right now value is not available
// It is like i dont have it right now but i will have it later
// Works on 3 states
//- pending
//- Fulfillment / Resolved
//- Rejected

// Creating a promises
let mypromise = new Promise((resolve,reject)=>{
    let success = true
    if (success) {
        resolve("Data loaded successfully")
    } else {
        reject("Data not loaded successfully")
    }
})

mypromise.then(function (message){
    console.log(message)
}).catch(function (error) {
    console.log(error)
})

// Output will be Data loaded successfully