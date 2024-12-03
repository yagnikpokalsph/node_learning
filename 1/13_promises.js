// Promises are like value will be used for future used right now value is not available
// It is like i dont have it right now but i will have it later
// Works on 3 states
//- pending
//- Fulfillment
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