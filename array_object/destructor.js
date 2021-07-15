//destuctor is anothe method to access the element from array and object
//in destuctor there is a veriable and we store the value of element in that variable


//destructor in simple array

var arr = [10, 20, 30, 40, 50, 60, 70]

const [num1] = arr              //access first element of array we use some variable name in [] 
console.log(num1);              //print the variable

const [, num2] = arr             //access second element of array we use some variable name after , in [] like [, num1]  give an empty string before variable 


//destructor in simple object

const obj = {
    a: 10,
    b: 20,
    c: 30
}

const { a } = obj                  //access the element from object we use {} and give the key in it. and use that key as a variable name 

console.log(a);



//destructor in multi level array



var arr1 = [[1, 2, 3], [4, 5, 6]]


const [[num3]] = arr1                //it gives the arr1[0][0]

console.log(num3);

const [, [num4]] = arr1               //it gives the arr1[1][0]
console.log(num4);


//destructor in multi objects

var obj1 = {
    a: {
        b: {
            c: {
                d: 10
            }
        },
        e: {
            f: {
                g: 20
            }
        }
    }
}

const {a:{b:{c:{d}}}} = obj1                //it give the value of key d
console.log(d);


const {a:{e:{f:{g}}}} = obj1                //it give the value of key g
console.log(g);


//destructor in multi level mix array and object


var mix = {
    arr:[10,[20,30,40],50,60],
    obj:{
        Name:"harsh",
        Age:20
    }
}


const {arr:[,[,,num6]]} = mix               //its give the element from array 
console.log(num6);

const {obj:{Name}} = mix                    //its give the element from object

console.log(Name);