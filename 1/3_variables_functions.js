var name ="yp";
var age =30;
var isMarried = true;

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