// Primitive data types

// 1.String
// Any thing which comes under single or double quation is called string.
const firstName = "Sanjib";
const lastName = ' Sah';

console.log(firstName + lastName);
console.log("Data type is " + typeof (firstName + lastName));

// 2.Number
// There are two types of number Integers and Float.

const age = 23;
const todayNEPSE = 2065.89;

console.log(age);
console.log("Data type is " + typeof age);

console.log(todayNEPSE);
console.log("Data type is " + typeof todayNEPSE);

// 3.Boolean
// It have two values. True and false.

const isDriver = true;
const isMarried = false;

console.log(isDriver);
console.log("Data type is " + typeof isDriver);
console.log(isMarried);
console.log("Data type is " + typeof isMarried);

// 4. Null
// Null stands for empty, which means it has no value assigned to it.

const nullVar = null;

console.log(nullVar);
// It return object because of bogus return value.
console.log("Data type is " + typeof nullVar);

// 5. undefine
// Unlike null it also stands for empty but, the different is it exists when we haven't given a value.

var a;
console.log(a);
console.log("Data type is " + typeof a);

const b = undefined;
console.log(b);
console.log("Data type is " + typeof b);

// Refrence Data Types

// Array
const myArr = [1,2,3,'sanjib','24',true];
console.log(myArr);
console.log("Data type is " + typeof myArr);

// Object
const obj = {
    fName : "Sanjib",
    lName: "Sah",
    age: 23
}
console.log(obj);
console.log("Data type is " + typeof obj);