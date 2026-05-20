// Task 29

function celsiusToFahrenheit(c){
    let F = (c * 9/5)+32;
    return F;
}
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));
console.log(celsiusToFahrenheit(37));


// Task 30

const isEven = (n) => n%2===0;
const isOdd = (n) => !isEven(n);

console.log(isEven(4)); 
console.log(isOdd(7));  
console.log(isEven(3));


// Task 31

function greet(name, greeting="Hello"){
    console.log(`${greeting},${name}!`);
}
greet("Omar", "Good morning");
greet("Sara");


// Task 32

function maxOfThree(a,b,c){
    if(a>b && a>c){
        return a;
    }
    else if(b>a && b>c){
        return b;
    }
    else{
        return c;
    }
}

console.log(maxOfThree(3,17,9));


// Task 33

function countVowels(str){
    let count = 0;
 
  for (let char of str) {
    if (
      char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ||
      char === "A" || char === "E" || char === "I" || char === "O" || char === "U"
    ) {
      count++;
    }
  }
 
  return count;
}
 
console.log(countVowels("Hello World"));


// Task 34

function factorial(n){
    if(n===0) return 1;

    let result=1;
    for(let i=1 ; i<=n;i++){
        result*=i;
    }

    return result;
}
console.log(factorial(0)); 
console.log(factorial(5)); 
console.log(factorial(7));

    

// Task 35 

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
 
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
 
  return true;
}
 
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));   
console.log(isPalindrome("madam")); 


// Task 36

const studentName = "Sara";
const scores=[85, 72, 90, 65, 70];

function studentReport (name, scoresArr){
    let total=0;
    for(let i=0; i<scoresArr.length;i++){
        total+=scoresArr[i];
    }
    let average= total/scoresArr.length;

    let grade;
    if (average >= 90) {
    grade = "A";
  } else if (average >= 80) {
    grade = "B";
  } else if (average >= 70) {
    grade = "C";
  } else if (average >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  console.log(`${name} | Avg: ${average} | Grade: ${grade}`);
}

studentReport(studentName,scores);


// Task 37

const secret = 42;
 
function checkGuess(guess) {
  if (guess < secret) {
    return "Too low";
  } else if (guess > secret) {
    return "Too high";
  } else {
    return "Correct!";
  }
}
 
const guesses = [10, 60, 42];
for (let i = 0; i < guesses.length; i++) {
  console.log(checkGuess(guesses[i]));
}


// Task 38

function calculate(a,operator,b){
     if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    if (b === 0) {
      return "Error: division by zero";
    }
    return a / b;
  } else {
    return "Error: unknown operator";
  }
}
 
console.log(calculate(10, "+", 5));  
console.log(calculate(10, "-", 4));  
console.log(calculate(10, "*", 5));  
console.log(calculate(10, "/", 0));
   


// Task 39

function pyramid(rows){
    for (let i = 1; i <= rows; i++) {
    let stars = "";
    for (let j = 1; j <= 2 * i - 1; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}

pyramid(5);


// Task 40

function collatz(n){
let steps = 0;
  let result = n + "";

  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = n * 3 + 1;
    }
    result += ", " + n;
    steps++;
  }

  console.log(result);
  console.log(steps + " steps");
  return steps;
}

collatz(6);

// Task 41

function numberToWord(n){
  const words = [
    "one", "two", "three", "four", "five",
    "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "fifteen",
    "sixteen", "seventeen", "eighteen", "nineteen", "twenty"
  ];
 
  if (n < 1 || n > 20) {
    return "out of range";
  }
 
  return words[n - 1];
}
 
console.log(numberToWord(7));  
console.log(numberToWord(15));  
console.log(numberToWord(25)); 


// Task 42

let balance=1000;

function deposit(amount){
   if (amount > 0) {
    balance += amount;
    console.log(`Deposited ${amount} → balance: ${balance}`);
  } else {
    console.log("Error");
  }
}

function withdraw(amount){
  if(amount<=balance && amount >0){
    balance-=amount;
  }
  else{
    console.log("error");
  }
}

function getBalance(){
  return balance;
}

console.log(`balance: ${getBalance()}`); 
deposit(500);                                      
withdraw(200);                                     
withdraw(2000);                                    
console.log(`Final balance: ${getBalance()}`);




// Library Catalog Analytics

// Sample dataset for all exercises
const books = [
{
title: "The Hobbit",
author: "Tolkien",
year: 1937,
rating: 4.7,
genres: ["Fantasy"],
},
{
title: "1984",
author: "Orwell",
year: 1949,
rating: 4.8,
genres: ["Dystopian", "Political Fiction"],
},
{
title: "The Name of the Wind",
author: "Rothfuss",
year: 2007,
rating: 4.5,
genres: ["Fantasy", "Adventure"],
},
{
title: "Brave New World",
author: "Huxley",
year: 1932,
rating: 4.2,
genres: ["Dystopian"],
},
{
title: "Dune",
author: "Herbert",
year: 1965,
rating: 4.6,
genres: ["Science Fiction", "Adventure"],
},
{
title: "Fahrenheit 451",
author: "Bradbury",
year: 1953,
rating: 4.3,
genres: ["Dystopian", "Science Fiction"],
},
{
title: "The Road",
author: "McCarthy",
year: 2006,
rating: 4.0,
genres: ["Post-Apocalyptic"],
},
{
title: "To Kill a Mockingbird",
author: "Lee",
year: 1960,
rating: 4.9,
genres: ["Classic", "Coming-of-Age"],
},
];

// 1. getRecentBooks
function getRecentBooks(books, afterYear) {
  const result = [];
  for (let book of books) {
    if (book.year >= afterYear) {
      result.push(book.title);
    }
  }
  return result;
}
console.log(getRecentBooks(books,1940));


// 2. getAverageRating
function getAverageRating(books) {
  let total = 0;
  
  for (let book of books) {
    total += book.rating;
  }
  
  let average = total / books.length;
  return average.toFixed(2);
}
console.log(getAverageRating(books));


// 3. sortBooksBy
function sortBooksBy(books, key, asc = true) {
  for (let i = 0; i < books.length - 1; i++) {
    for (let j = 0; j < books.length - 1 - i; j++) {
      if (asc) {
        if (books[j][key] > books[j + 1][key]) {
          let temp = books[j];
          books[j] = books[j + 1];
          books[j + 1] = temp;
        }
      } else {
        if (books[j][key] < books[j + 1][key]) {
          let temp = books[j];
          books[j] = books[j + 1];
          books[j + 1] = temp;
        }
      }
    }
  }
  return books;
}

// 4. countGenres
function countGenres(books) {
  const counts = {};
  for (let book of books) {
    for (let genre of book.genres) {
      if (!counts[genre]) counts[genre] = 0;
      counts[genre]++;
    }
  }
  return counts;
}
console.log(countGenres(books));

// 5. groupByAuthor
function groupByAuthor(books) {
  const groups = {};
  for (let book of books) {
    if (!groups[book.author]) groups[book.author] = [];
    groups[book.author].push(book);
  }
  return groups;
}

// 6. hasHighlyRated
function hasHighlyRated(books, threshold) {
  for (let book of books) {
    if (book.rating >= threshold) return true;
  }
  return false;
}

// 7. allBeforeYear
function allBeforeYear(books, year) {
  for (let book of books) {
    if (book.year >= year) return false;
  }
  return true;
}

// 8. findByTitle
function findByTitle(books, title) {
  for (let book of books) {
    if (book.title === title) return book;
  }
  return undefined;
}

// Bonus: Tag Classics
function tagClassics(books) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].year < 1950) {
      books[i].isClassic = true;
    } else {
      books[i].isClassic = false;
    }
  }
  return books;
}



// Bonus: Dystopian Titles
function getDystopianTitles(books) {
  const titles = [];
  let index = 0;
  for (let i = 0; i < books.length; i++) {
    if (books[i].genres.includes("Dystopian")) {
      titles[index] = books[i].title;
      index++;
    }
  }
  return titles.sort();
}

// Bonus: Keyword Search
function hasKeyword(books, keyword) {
  for (let book of books) {
    if (book.title.toLowerCase().includes(keyword.toLowerCase())) return true;
  }
  return false;
}