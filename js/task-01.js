const categories = document.querySelector("#categories");
// console.log(categories);

const n = document.getElementsByClassName("item").length;
console.log("Number of categories:", n);

const itemName = document.querySelectorAll("h2");
const elCount = categories.querySelectorAll("ul");
console.log("Category:", itemName[0].textContent);
console.log("Elements:", elCount[0].querySelectorAll("li").length);

console.log("Category:", itemName[1].textContent);
console.log("Elements:", elCount[1].querySelectorAll("li").length);

console.log("Category:", itemName[2].textContent);
console.log("Elements:", elCount[2].querySelectorAll("li").length);
