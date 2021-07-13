//nested array 

var nestedArr = [[10,20,30,40,50],[60,70,80,90,100]]        //its is nested array it means array in another array

console.log(nestedArr);                                     //print whole information

console.log(nestedArr[0]);                                  //return 0th array of main array           
console.log(nestedArr[1]);                                  //return 1th array of main array   

console.log(nestedArr[0][0])                                //return 0th element of 0th array
console.log(nestedArr[1][2])                                //return 2nd element of 1st array


//neasted object

var nestedObj = {                                           //declare main object "nestedObj"
    person1: {                                              //declare person1 object in main object
        name:"harsh",                                       //name element in person1 object
        age:20                                              //age element in person1 object
    },
    person2: {                                              //declare person2 object in main object
        name:"sanket",                                      //name element in person2 object
        age:21                                              //age element in person2 object
    }
}


console.log(nestedObj)                                      //print main object

console.log(nestedObj.person1);                             //print person1 object
console.log(nestedObj.person2);                             //print person2 object

console.log(nestedObj.person1.name);                        //print element name from person1
console.log(nestedObj.person2.age);                         //print element age from person2


//object in array

var objArr = [                                              //declare an array named "objArr"
    {                                                       //declare object as a  0th element of array
        carName:"Ford",                                     //first element of object
        modelNo: 123459                                     //second element of object
    },
    {                                                       //declare object as a  1st element of array
        carName:"Audi",                                     //first element of object
        modelNo: 759654                                     //second element of object
    }
]

console.log(objArr);                                        //print full array

console.log(objArr[0]);                                     //access 0th element of array
console.log(objArr[1]);                                     //access 1st element of array


console.log(objArr[0].carName);                             //access carName from 0th element of array
console.log(objArr[1].modelNo);                             //access modelNo from 1st element of array




//array in object

var arrObj = {                                              //declare object named "arrObj"
    carName:[                                               //first element with key carName as an array
        "suzuki",                                           //0th element of array
        "maruti",                                           //1st element of array
        "BMW",                                              //2nd element of array 
        "Audi"                                              //3rd element of array 
    ],
    color:[                                                //second element with key color as an array 
        "red",                                             //0th element of array 
        "yellow",                                          //1st element of array 
        "blue"                                             //2nd element of array  
    ]
}


console.log(arrObj);                                       //print full object

console.log(arrObj.carName);                               //access array with key "carName"
console.log(arrObj.color);                                 //access array with key "color"

console.log(arrObj.carName[2]);                            //access 2nd element from carName array
console.log(arrObj.color[0]);                              //access 0th element from color array
