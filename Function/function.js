//Normal Function
function sum() {
    let a = 10
    let b = 20
    return (a + b)
}
console.log("[ " + sum() + " ]" + " This is Done By Normal Function");



//Arrow function
var sub = () => {
    let a = 10;
    let b = 20;
    return (a - b)
}
console.log("[ " + sub() + " ] This is Done By Arrow Function");


//Immediately  Invoke function
(function () {
    let num1 = 10
    let num2 = 20
    console.log("[ " + (num1 / num2) + " ] This is Done By Immediately invoke Function");
}())




//First Class function
function multi() {
    let a = 10;
    let b = 20;
    return (a * b)
}
var multiplication = multi
console.log("[ " + multiplication() + " ] This is Done By First Class Function");




//Higher Order Function
console.log("This Result Produce By Higher Order Function");

function f1(fun) {
    console.log(fun());
    return f3 = () => {
        return "hello";
    };
}
function f2 () {
    return 50;
}

var fun3 = f1(f2)

console.log(fun3());




//Pure Function
function pure(x,y){
    return (x+y)
}
console.log("[ " + pure(10,20) + " ] This is Done By Pure Function");




//Impure Function
let z = 30
function impure(x,y){
    return (x+y+z)
}
console.log("[ " + impure(10,20) + " ] This is Done By Impure Function");



