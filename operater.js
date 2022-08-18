/*
  Arithmetic Operators

  . Addition: '+'
  . Subtraction: '-'
  . Multiplication: '*'
  . Division: '/'
  . Modulus: '%'
  . Increment:'++'
  . Decrement: '--'

*/
let num1 =10;
let num2 =15;
let num3 =20;

//Addition
console.log(num1+num2);
console.log(num1+num2+num3);

//Subtraction
console.log(num2-num3);
console.log(num3-num2-num1);

//Multiplication
console.log(num1*num2);

//Division
console.log(num1/num2);

//Modulus
console.log(num2%num1);

//Increment - Post and Pre
// In post increment first the variable is used and then the value is increase.

console.log(num1++);
console.log(num1);

// In pre increment first it increase the variable and it used.
console.log(++num2);
console.log(num2);

//Decrement - Post and Pre
// In post decrement first the variable is used and then the value is decrease.
console.log(num1--);
console.log(num1);

// In pre decrement first it decrease the variable and it used.
console.log(--num2);
console.log(num2);

/*
 Assignment Operators
 . =
 . +=
 . -=
 . *=
 . /=
 . %=

*/

let num4 = 20;
let num5 = 25;
// = we had already assign the value in above line.

// += 

num4 +=10; //which is equlivalent to num4 = num4 + 10
console.log(num4)

// -= 

num5 -=10; //which is equlivalent to num5 = num5 - 10
console.log(num5)

// *= 

num4 *=10; //which is equlivalent to num4 = num4 * 10
console.log(num4)

// /= 

num4 /=10; //which is equlivalent to num4 = num4 / 10
console.log(num4)

// %= 

num5 %=10; //which is equlivalent to num5 = num5 % 10
console.log(num5)

/*
 Comparison and logical operation
*/

if(2=='2'){
    console.log(true) // It is loose type of conversion because it only compair value
}

if(3==='3'){
    console.log(true)
}else{console.log(false)}
// It gives false because it compare both type and values.

if(3!='3'){
    console.log(true)
}else{console.log(false)}
// It gives false because it compare only value

if(3!=='3'){
    console.log(true)
}else{console.log(false)}
// It gives true because it compare both type and values.


// Logical Operators &&, || and !
if(5<10 && 10<15){
    console.log(true)
}else{console.log(false)}
// It gives us true when both the condition is true. And other wise it gives false

if(5>10 && 10<15){
    console.log(true)
}else{console.log(false)}
// Here it gives false

if(5>10 || 10<15){
    console.log(true)
}else{console.log(false)}
// even if any one of the operater is true or both is ture then it give true other wise if gives false.

console.log(!(5<10)) // it just gives opposite of the condition.

// Ternary Operator (expression) ? a : b

2 > 3 ? console.log(true) : console.log(false); 
// here if our exoression is true then it gives true other wise it gives false.
