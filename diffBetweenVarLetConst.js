/* 
Var

Var declarations dominated before the introduction of ES6. 
But there are problems with variables that are defined using var. 
It was required for new methods of declaring variables to appear for this reason. 
Let's first learn more about var before we talk about those concerns. 

Scope of var

Scope essentially means where these variables are available for use.
var declarations are globally scoped or function/locally scoped.

The scope is global when a var variable is declared outside a function.
This means that any variable that is devlared with var outside a function block is
available for use in the whole window.*/
var a = 5
function f(){
    console.log(a)
}
f();
console.log(a);

/*var is function scoped when it is declared within a function.
This means that it is available and can be accessen only within that function.
*/

function g() {
 
    // It can be accessible any
    // where within this function
    var b = 10;
    console.log(b)
}
g();

// A cannot be accessible
// outside of function
console.log(b);
/* 
var variables can be re-declared and updated
This means that we can do this within the same scope and won't get an error.
*/
var greeter = "hey hi";
var greeter = "say Hello instead";
/* 
Hoisting of var
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
 This means that if we do this:
*/
console.log (greeter);
var greeter = "say hello"
//it is interpreted as this:
var greeter;
console.log(greeter); // greeter is undefined
greeter = "say hello"

/*
Problem with var
There's a weakness that comes with  var. I'll use the example below to explain:
*/
var greeter = "hey hi";
var times = 4;

if (times > 3) {
    var greeter = "say Hello instead"; 
}

console.log(greeter) // "say Hello instead"
/*
So, since times > 3 returns true, greeter is redefined  to "say Hello instead".
 While this is not a problem if you knowingly want greeter to be redefined, 
 it becomes a problem when you do not realize that a variable greeter has already been defined before.
 If you have used greeter in other parts of your code, you might be surprised at the output you might get.
  This will likely cause a lot of bugs in your code. This is why let and const are necessary.
*/

// Let

/*
let is now preferred for variable declaration. It's no surprise as it comes as an improvement to var declarations.
It also solves the problem with var that we just covered. Let's consider why this is so.

let is block scoped

A block is a chunk of code bounded by {}. A block lives in curly braces.
Anything within curly braces is a block.
So a variable declared in a block with let  is only available for use within that block. 
Let me explain this with an example:
*/

let time = 4;

if (time > 3) {
     let hello = "say Hello instead";
     console.log(hello);// "say Hello instead"
 }
console.log(hello) // hello is not defined

// let can be updated but not re-declared.

let greeting = "say Hi";
greeting = "say Hello instead";

// const

/*
The const keyword has all the properties that are the same as the let keyword, except the user cannot update it.
Scope: block scoped: When users declare a const variable, they need to initialize it, otherwise, it returns an error.
The user cannot update the const variable once it is declared. 
*/

// We are changing the value of the const variable so that it returns an error. The output is shown in the console.
const x=15;
function con(){
    x=12;
    console.log(x) // x = 12
}
con();// TypeError:Assignment to constant variable.

// Users cannot change the properties of the const object, but they can change the value of properties of the const object.
const y ={
    prop1:10,
    prop2:9
}

// It is allowed
y.prop1 = 11;

// It is not allowed

y={
    b:10,
    prop2:15
}