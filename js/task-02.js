const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];



const ul = document.querySelector("#ingredients");

const markup = (ingredient) => {
  const li = document.createElement('li');
  li.classList.add('item');
  // li.append(ingredient);
  li.textContent = ingredient;
  return li;
};

const markupList = ingredients.map(markup);
console.log(markupList);
ul.append(...markupList);
