var myarr = ["y","p",30]
console.log(myarr);

// Access individual elements of the array
for (let arr of myarr){
    console.log(arr);
}
for (let i = 0;i<myarr.length;i++){
    console.log(myarr[i]);
}
// insert element in array
myarr[3] = "programming"
console.log(myarr);

// copy slice

let newArray = myarr.slice();
anotherArray = newArray;
console.log("New array is",newArray);
console.log("Another array is",anotherArray);

let Nested_array = [myarr]
console.log(Nested_array);

