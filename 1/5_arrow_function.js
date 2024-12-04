var name ="yp";
var age =30;
// Default function we used till now
function getUserDetail(userName, userAge){
    return "Name is "+userAge+", "+"Age is "+userAge
}

console.log("Default function output"+getUserDetail(name,age));

// Adding arrowed function way 1
const userDetail = function(userName, userAge){
    return "Name is "+name+", "+"Age is "+userAge
}
console.log("arrowed function way 1 ",userDetail(name,age))

// Adding arrowed function way 2
const userDetailway2 = (name,age) =>{
    return "Name is "+name+", "+"Age is "+age
}
console.log("arrowed function way 2 ",userDetailway2(name,age));


// Adding arrowed function way 3
const  userDetailway3 =(name,age)=>"Name is "+name+", "+"Age is "+age
console.log("arrowed function way 3 ",userDetailway3(name,age));

// Can use () if no argument needed then
const addrandom = ()=>1+2;
console.log(addrandom())