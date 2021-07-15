
//clouser means its closest something 
//it means it enclose some block like function
//use of clouser is use the variable of perent block's variable in child block
//here the example of it
//here f1 is perent and f2 is child of f1. f2 can use the variable which declare in f1

function f1() {
    let a = 10;
    function f2() {
        return a
    }
    console.log(f2());
}
console.log(f1());

//in call stack there is two part
//1. Memory-stack
//2.Execusion-stack

//in Memory stack all of the variable and function are store undifine initially
//when we asign the value to variable that store in to memory stack
//functions are also stored in memory stack
//in execusion stack all the execuable code are run line by line 

//if we use normal function without clouser then we can't access the variable from f1 to f2 so the clouser come to picture