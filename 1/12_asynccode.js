// Async code means do it later after given time
let delayTime = ()=>{
    console.log("First")
}
setTimeout(delayTime,1000)
console.log("Second")
console.log("Third")

// Output will be
// Second
// Third
// First

// async function
async function f(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1") // fetch will return a promise so await is needed
    const data = await response.json()  //json() method will also return the promise so await is needed
    return data
}
let D = await f() // since f() is async function then it will return promise so await is needed
console.log(D)

// throw will use to send error
// try will use to run main function and catch will use to check for the errors
// error handling in async
async function fethcData(){
    try{
        throw "Something went wrong"
       const mydata =  await fetch("https://jsonplaceholder.typicode.com/posts/1-")
        const some = await mydata.json()
        return some

    }catch (error){
        console.log("error in fetch data",error)
    }
}
const Data = await fethcData()
console.log(Data)

