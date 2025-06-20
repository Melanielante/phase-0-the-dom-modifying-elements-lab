// Write your code here!

// let element = document.createElement("div");

// document.body.append(element);
// const ul = document.createElement("ul");

// for (let i = 0; i < 3; i++) {
//     const li = document.createElement("li");
//     li.textContent = (i + 1).toString();
//     ul.append(li);
// }
// element.append(ul);

// const main = document.getElementById("main");
// main.innerHTML = 
//  "<h1>  Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

//  let eleMent = document.getElementById("main");
//  eleMent.style.height = "300px";
//  eleMent.style.backgroundColor = "#27647B";
//  eleMent.textContent = "You've changed what's on the screen!";

//  eleMent.style.fontSize = "24px";
//  eleMent.style.marginLeft = "30px";
//  eleMent.style.lineHeight = 2;

//  eleMent.className  = "pet-listing dog";

//  eleMent.classList.remove("dog");
//  eleMent.classList.add("cat", "sale");

//  //removing an element
// //  const ul = document.getElementsByTagName("ul");
// //  const secondChild = ul.querySelector("li:nth-child(2)");
// //  ul.removeChild(secondChild);

// ul.remove();

document.getElementById("main").remove();

let newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "is the champion";