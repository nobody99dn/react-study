/* Run this code in Console */

// get console output of body and all property inside it
document.body;

// live change background to red color
document.body.style.backgroundColor = "red";

/* Review of Selecting Elements */

// get element by Id
const demoId = document.querySelector("#demo-id");
//change the text of one element
demoId.textContent = "Demo ID text updated.";

// Get a NodeList of all .demo elements
const demoClasses = document.querySelectorAll(".demo-class");
// Change the text of multiple elements with a loop
demoClasses.forEach((element) => {
  element.textContent = "All demo classes updated.";
});

/* Modifying Attributes */

// Assign image element
const img = document.querySelector("img");

console.log(img.hasAttribute("src")); // returns true
console.log(img.getAttribute("src")); // returns "link"
console.log(img.removeAttribute("src")); // remove the src attribute and value

//set new src
img.setAttribute(
  "src",
  "https://image.freepik.com/free-vector/cute-shark-cartoon-hand-drawn-style_42349-577.jpg"
);

/* Modifying class */

// Select the first div
const div = document.querySelector("div");

// Assign the warning class to the first div
div.className = "warning";

// Select the second div by class name
const activeDiv = document.querySelector(".active");

activeDiv.classList.add("hidden"); // Add the hidden class
activeDiv.classList.remove("hidden"); // Remove the hidden class
activeDiv.classList.toggle("hidden"); // Switch between hidden true and false
activeDiv.classList.replace("active", "warning"); // Replace active class with warning class

/* Modifying Style */

// Apply style to activeDiv
activeDiv.setAttribute("style", "text-align: center"); //this will remove all existing inline styles from the element

activeDiv.style.height = "100px";
activeDiv.style.width = "100px";
activeDiv.style.border = "2px solid black";
