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