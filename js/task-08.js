
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
    // Зупиняємщ перезавантаження сторінки
  event.preventDefault(); 

  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  if (!email || !password) {
    alert('Всі поля повинні бути заповнені');
  } else {
    const formData = {
      email: email,
      password: password
    };

    console.log(formData);

    loginForm.reset(); // Очищає поля форми
  }
});

