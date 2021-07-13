

// Declaration of array

var arr = [20,10,50,70,60,50]       // declare the array with []

console.log(arr);                   //print all element of array    




// methods of array

//access the element of an array

console.log(arr[0]);                //return 0th element of arr array
console.log(arr[1]);                //return 1st element of arr array
console.log(arr[2]);                //return 2nd element of arr array


//re-inistialize the element of array

arr[0] = 100                        //re-initialize the 0th element with value "100"
console.log(arr);                   //print all element of array   



//sort the array

var arr1 = ["harsh", "raj", "akshay", "sanket", "keyur"]    //declare new array with strings element
console.log(arr1.sort());                                   //Use the sort method of array to sort the array



//push method for array

arr1.push("ketan")          //add element at end of an array
console.log(arr1);          //print all element of array 


//unshift method for array

arr1.unshift("rakesh")      //add element at starting of an array
console.log(arr1);          //print all element of array 


//pop method for array

arr1.pop()                  //delete element from end of an array
console.log(arr1);          //print all element of array 


//shift method for array

arr1.shift()                //delete element from starting of an array
console.log(arr1);          //print all element of array 

//toString method in array

console.log(arr1.toString());//toString method use to convert array in to string


//join method fro array

console.log(arr1.join("-")); //join method use to convert array in to string and join each element with "-"


//concat method in array

console.log(arr.concat(arr1)); // this method is use to concat or merge two arrays
