// Массив с различными символами
const symbols = "!@#$%^&*()_+1234567890-=<>?{}[]abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Функция для создания случайного набора символов
function randomTitle() {
  let randomText = "";
  const length = Math.floor(Math.random() * 10) + 150; // Случайная длина заголовка
  for (let i = 0; i < length; i++) {
    randomText += symbols[Math.floor(Math.random() * symbols.length)];
  }
  document.title = randomText;
}

// Изменяем заголовок каждые 10 мс
setInterval(randomTitle, 10);