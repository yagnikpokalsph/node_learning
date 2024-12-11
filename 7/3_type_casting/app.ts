
// Using as keyword

// Way 1
let myname_way1 = "yp"
console.log((myname_way1).length)

// Way 2
let myname_way2 = "yp";
console.log((myname_way2 as string).length);

// Way 3
// Using angle braces syntex
let myname_way3 = "surname"
console.log((<string>myname_way3).length)

// Array with type script
// Can use any word when you don't know the type
// way 1
let myarr_way1:any = [1,2,3]
console.log((myarr_way1).length)

// way 2
let myarr_way2:any[] = [1,2,3]
console.log((myarr_way2).length)

// way 3
let myarr_way3:number[] = [1,2,3]
console.log((myarr_way3).length)




