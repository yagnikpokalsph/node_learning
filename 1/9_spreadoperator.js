var myarr = ["y","p",30]
let Nested_array = [myarr]
console.log(Nested_array);
// Output will be [ [ 'y', 'p', 30 ] ]

// Now to remove nested array we use spread operator
let spreadOperator = [...myarr]
console.log(spreadOperator)
// Output will be [ 'y', 'p', 30 ]


