// ============================================================
// JavaScript Basics — Exercises Solutions
// Tasks 1–10
// ============================================================

// ============================================================
// PART 1: Variables & Data Types
// ============================================================

// Task 1: Predict the output — typeof quiz
console.log(typeof 42);          // number
console.log(typeof "42");        // string
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object
console.log(typeof {});          // object

// -------------------------------------------------------

// Task 2: Fix the broken variable declarations
// Errors:
// 1. Variable name can't start with a number → const 1firstName
// 2. Variable name can't contain hyphens → let my-age
// 3. const cannot be reassigned → score = 100
// 4. Can't use reserved keyword as variable name → let let

const firstName = "Sara";
let myAge = 22;
let score = 0;
score = 100;
let letVar = "bad";

// -------------------------------------------------------

// Task 3: Build a student profile with template literals
const name = "Sara";
const age = 20;
const grade = "B";
const isPassed = true;

console.log(`Student ${name}, age ${age}, got grade ${grade}. Passed: ${isPassed}`);
// Output: Student Sara, age 20, got grade B. Passed: true

// -------------------------------------------------------

// Task 4: String method chain
const msg = "I love javascript programming";

console.log(msg.length);               // 29
console.log(msg.toUpperCase());        // I LOVE JAVASCRIPT PROGRAMMING
console.log(msg.slice(7, 17));         // javascript
console.log(msg.includes("love"));     // true

// -------------------------------------------------------

// Task 5: Type coercion trap — predict the output
console.log(0 == false);         // true  (both coerce to 0)
console.log(0 === false);        // false (different types)
console.log("1" == 1);           // true  (string coerced to number)
console.log("1" === 1);          // false (different types)
console.log("" == false);        // true  (both coerce to 0)
console.log(null == undefined);  // true  (special JS rule)
console.log(null === undefined); // false (different types)

// -------------------------------------------------------

// Task 6: Swap two variables without a third
let a = 5;
let b = 10;

[a, b] = [b, a]; // destructuring swap

console.log(`a = ${a}, b = ${b}`); // a = 10, b = 5

// -------------------------------------------------------

// Task 7: Truthy and falsy values
// "hello"    → TRUE  (non-empty string)
// ""         → FALSE (empty string)
// 0          → FALSE (zero)
// 1          → TRUE  (non-zero number)
// null       → FALSE
// undefined  → FALSE
// false      → FALSE
// []         → TRUE  (empty array is truthy!)
// NaN        → FALSE

const values = ["hello", "", 0, 1, null, undefined, false, [], NaN];
values.forEach(v => console.log(v, "→", !!v));

// ============================================================
// PART 2: Operators & Expressions
// ============================================================

// Task 8: Operator precedence — predict the output
console.log(2 + 3 * 4);             // 14  (3*4=12, then +2)
console.log((2 + 3) * 4);           // 20  (2+3=5, then *4)
console.log(2 ** 3 * 2);            // 16  (2**3=8, then *2)
console.log(10 % 3 + 1);            // 2   (10%3=1, then +1)
console.log(5 + 3 > 7 && 4 !== 5);  // true

// -------------------------------------------------------

// Task 9: Short-circuit evaluation
console.log(true && "hello");        // "hello"    (true, so returns second value)
console.log(false && "hello");       // false      (short-circuits at false)
console.log(0 || "default");         // "default"  (0 is falsy, returns second)
console.log("value" || "default");   // "value"    (truthy, short-circuits)
console.log(null ?? "fallback");     // "fallback" (?? only checks null/undefined)

// -------------------------------------------------------

// Task 10: Calculate total price with discount
const price = 120;
const quantity = 3;
const discountPercent = 10;

const subtotal = price * quantity;
const discount = subtotal * discountPercent / 100;
const total = subtotal - discount;

console.log(`subtotal: ${subtotal} | discount: ${discount} | total: ${total}`);
// Output: subtotal: 360 | discount: 36 | total: 324

// Task 11: Even or odd — using modulo
let number = 17;
if (number % 2 === 0) {
  console.log(`${number} is even`);
} else {
  console.log(`${number} is odd`);
}
// Output: 17 is odd
 
// -------------------------------------------------------
 
// Task 12: Compound assignment operators

 
x += 5;   // same as: x = x + 5  
x *= 2;   // same as: x = x * 2  
x -= 3;   // same as: x = x - 3  
x **= 2;  // same as: x = x ** 2 
x %= 7;   // same as: x = x % 7  
 
// -------------------------------------------------------
 
// Task 13: BMI Calculator
const weight = 70;   // kg
const height = 1.75; // meters
 
const bmi = (weight / (height ** 2)).toFixed(1);
console.log(`BMI: ${bmi}`);
// Output: BMI: 22.9
 
// -------------------------------------------------------
 
// Task 14: Logical operators — access checker
const isLoggedIn = true;
const isAdmin = false;
const age = 20;
 
const canAccessBasic = isLoggedIn && age >= 18;       // true
const canAccessAdmin = isLoggedIn && isAdmin;          // false
const canAccessSomething = isLoggedIn || age >= 21;   // true
 
console.log(canAccessBasic, canAccessAdmin, canAccessSomething);
// Output: true false true
 
 
// ============================================================
// PART 3: Conditions
// ============================================================
 
// Task 15: Traffic light system
let light = "yellow";
 
if (light === "green") {
  console.log("Go!");
} else if (light === "yellow") {
  console.log("Slow down");
} else if (light === "red") {
  console.log("Stop!");
} else {
  console.log("Unknown signal");
}
// Output: Slow down
 
// -------------------------------------------------------
 
// Task 16: Nested conditions — age group and membership
const userAge = 25;
const isMember = true;
 
if (userAge >= 18 && isMember) {
  console.log("Full access — welcome member!");
} else if (userAge >= 18 && !isMember) {
  console.log("Guest access — consider joining");
} else if (userAge < 18 && isMember) {
  console.log("Junior member access");
} else {
  console.log("No access");
}
// Output: Full access — welcome member!
 
// -------------------------------------------------------
 
// Task 17: Rewrite if/else as ternary
const msg = 10 > 5 ? "yes" : "no";
 
const fee = isMember ? 5 : 20;
 
const score = 75;
const label = score >= 50 ? "pass" : "fail";
 
console.log(msg, fee, label);
// Output: yes 5 pass
 
// -------------------------------------------------------
 
// Task 18: Season detector with switch
let month = 7;
 
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Autumn");
    break;
  default:
    console.log("Invalid month");
}
// Output: Summer
 
// -------------------------------------------------------
 
// Task 19: FizzBuzz — single number
const n = 15;
 
if (n % 3 === 0 && n % 5 === 0) {
  console.log("FizzBuzz");
} else if (n % 3 === 0) {
  console.log("Fizz");
} else if (n % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(n);
}
// Output: FizzBuzz
 
// -------------------------------------------------------
 
// Task 20: Password strength checker
let password = "Hello1!";
 
if (password.length < 6) {
  console.log("Weak");
} else if (password.length < 10) {
  console.log("Medium");
} else {
  console.log("Strong");
}
// Output: Medium (length is 7)
 
// -------------------------------------------------------
 
// Task 21: Predict the output — tricky conditions
const x = 5;
 
console.log(x > 3 && x < 10 ? "in range" : "out"); // "in range"
console.log(!!(0));                                        // false
console.log(!!("hello"));                                  // true
console.log(x === 5 || x === 10 ? "match" : "no");  // "match"
 
 
// ============================================================
// PART 4: Loops
// ============================================================
 
// Task 22: Sum of numbers 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);
// Output: 5050
 
// -------------------------------------------------------
 
// Task 23: Multiplication table for 7
for (let i = 1; i <= 10; i++) {
  console.log(`7 × ${i} = ${7 * i}`);
}
// Output: 7 × 1 = 7 ... 7 × 10 = 70
 
// -------------------------------------------------------
 
// Task 24: First number divisible by both 6 and 8
let num = 1;
while (num % 6 !== 0 || num % 8 !== 0) {
  num++;
}
console.log(num);
// Output: 24
 
// -------------------------------------------------------
 
// Task 25: FizzBuzz loop — 1 to 30
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
// Output: 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz ...
 
// -------------------------------------------------------
 
// Task 26: Countdown with do...while
let rockets = 5;
 
do {
  console.log(`${rockets}...`);
  rockets--;
} while (rockets > 0);
 
console.log("Blast off!");
// Output: 5... 4... 3... 2... 1... Blast off!
 
// -------------------------------------------------------
 
// Task 27: Prime numbers up to 50
for (let i = 2; i <= 50; i++) {
  let isPrime = true;
 
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
 
  if (isPrime) {

         console.log(i);
  }
}
// Output: 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47
 
// -------------------------------------------------------
 
// Task 28: Star pattern with nested loops
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

// Output:
// *
// **
// ***
// ****
// *****