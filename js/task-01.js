const categories = document.querySelector("#categories");
console.log("Number of categories:", categories.children.length);

const numberOfCategories = document.querySelectorAll(".item");

const all = numberOfCategories.forEach((item) => {
    console.log("Category:", item.firstElementChild.textContent);
    console.log("Elements:", item.querySelectorAll("li").length);
});