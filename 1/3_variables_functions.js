var name ="yp";
var age =30;
var isMarried = true;
// Built in data types
// Void to default type to return function
// Null to return empty value
// Undefined uninitialised variable
// any Any data type


function getUserDetail(userName, userAge,isMarried){
    let married;
    if (isMarried){
         married = "Yes"
    }else {
         married = "No"
    }
    return "Name is "+userAge+", "+"Age is"+userAge+", "+"married "+married
}

console.log(getUserDetail(name,age,isMarried));
