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
