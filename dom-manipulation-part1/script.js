
// task 1

const title = document.getElementById("mainTitle");
const features = document.getElementsByClassName("feature");
const description = document.querySelector(".description");

console.log(title.textContent);   
console.log(description.innerHTML); 



//  task 2

title.textContent = "Welcome to the Dashboard";
description.textContent = "Your dashboard is ready. Explore the features below.";
description.classList.remove("hidden");




// task 3

title.classList.add("highlight");
description.classList.remove("hidden");




// task 4

const rogueItem = features[2];
rogueItem.remove();



// task 5

const heading = document.createElement("h2");
heading.textContent = "Available Features";
const featuresList = document.getElementById("features");
featuresList.before(heading);





// task 6

const link = document.getElementById("mainLink");          
console.log(link.getAttribute("href"));          
link.setAttribute("href", "https://example.com");       
link.textContent = "Go to Dashboard"; 