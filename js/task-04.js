// Отримуємо посилання на елементи DOM
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterValueSpan = document.querySelector('#value');

// Ініціалізуємо початкове значення лічильника
let counterValue = 0;

// Додаємо слухачів кліків до кнопок
decrementButton.addEventListener('click', () => {
  counterValue--;
  counterValueSpan.textContent = counterValue;
});

incrementButton.addEventListener('click', () => {
  counterValue++;
  counterValueSpan.textContent = counterValue;
});
