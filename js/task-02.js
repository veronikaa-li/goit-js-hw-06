const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// створити список для інгридієнтів//
const ul = document.querySelector('#ingredients');
// створити li, додати текст//
const items = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  return li;
});

ul.append(...items);





// Створити список <ul> для інгредієнтів
// const ul = document.createElement("ul");
// ul.id = "ingredients";

// Для кожного інгредієнту створити <li>, додати текст і клас, та додати елемент у список <ul>
// ingredients.forEach(ingredient => {
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   li.classList.add("item");
//   ul.appendChild(li);
// });

// Додати список <ul> з усіма елементами <li> до HTML сторінки
// document.body.appendChild(ul);
