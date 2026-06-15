
// task 1

const likeBtn = document.getElementById("likeBtn");
const resetBtn = document.getElementById("resetBtn");
const likeCount = document.getElementById("likeCount");

let count = 0;
likeBtn.addEventListener("click", function() {
    count +=1;
    likeCount.textContent = "Likes: " + count;
});

resetBtn.addEventListener("click", function () {
    count = 0;
    likeCount.textContent = "Likes: 0";
});




// task 2

const greetBtn = document.getElementById("greetBtn");
const nameInput = document.getElementById("nameInput");
const greetMsg = document.getElementById("greetMsg");

greetBtn.addEventListener("click", function () {
      const name = nameInput.value;
  if (name !== "") {
    greetMsg.textContent = "Hello, " + name + "!";
  } else {
    greetMsg.textContent = "Please enter your name first.";
  }
  nameInput.value = "";
  nameInput.focus();
});



// task 3

const liveInput = document.getElementById("liveInput");
const liveOutput = document.getElementById("liveOutput");

liveInput.addEventListener("input", function () {
  const text = liveInput.value;

  if (text === "") {
    liveOutput.textContent = "Waiting...";
  } else {
    liveOutput.textContent = text;
  }

  if (text.length > 20) {
    liveOutput.classList.add("long");
  } else {
    liveOutput.classList.remove("long");
  }
});



// task 4

const keyInput = document.getElementById("keyInput");
const keyLog = document.getElementById("keyLog");

keyInput.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    keyInput.value = "";
    keyLog.textContent = "";
    return;
  }

  let display = "";
  if (e.shiftKey) {
    display = display + "Shift + ";
  }
  if (e.ctrlKey) {
    display = display + "Ctrl + ";
  }
  if (e.altKey) {
    display = display + "Alt + ";
  }
  display = display + e.key;

  keyLog.textContent = display;
});



// task 5

const taskList = document.getElementById("taskList");

taskList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    if (e.target.style.textDecoration === "line-through") {
      e.target.style.textDecoration = "";
    } else {
      e.target.style.textDecoration = "line-through";
    }
  }
});

taskList.addEventListener("dblclick", function (e) {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});






// task 6

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = e.target.elements.emailInput.value;
  const subject = e.target.elements.subjectInput.value;

  if (email === "" || subject === "") {
    formStatus.textContent = "Please fill in all fields.";
    formStatus.style.color = "red";
  } else {
    formStatus.textContent = "Message sent to " + email + "!";
    formStatus.style.color = "green";
    e.target.elements.emailInput.value = "";
    e.target.elements.subjectInput.value = "";
  }
});