const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let list = document.getElementById('ingredients');

const elements = [];

for (let i = 0; i < ingredients.length; i += 1) {
const ingredientList = document.createElement('li');
ingredientList.classList.add('item');
ingredientList.textContent = ingredients[i];
elements.push(ingredientList);
}

list.append(...elements);




