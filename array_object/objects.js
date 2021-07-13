//declare the object

var obj = {                 //declare the object with '{ }'
    a:10,                   //give key:value to each element
    b:20,                   //give key:value to each element
}

console.log(obj);           //print full object



// accesss the element from object

console.log(obj.a);         //access the element by its key which given in object
console.log(obj.b);         //access the element by its key which given in object


//append element to the object

obj.c = 30;                 //add element with key "c" and value "30"
console.log(obj);           //print full object

//remove element from objects

delete obj.c                //its delete the given keyword
console.log(obj);           //print all element of object



