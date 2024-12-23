// as keyword use for the type casting

let x :unknown = 'hello'
console.log((<string>x).length)

console.log((x as string).length)
