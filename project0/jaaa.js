// Функция для регистрации пользователя
function registerUser() {
    const login = document.getElementById('login').value.trim();
  
    if (login) {
      // Сохраняем логин в Session Storage
      sessionStorage.setItem('login', login);
      
      // Получаем элементы
      const welcomeContainer = document.getElementById('welcome-container');
      const mainContent = document.getElementById('main-content');
  
      // Запускаем анимации: исчезновение приветственного окна и появление сайта
      welcomeContainer.classList.add('fade-out');
      mainContent.classList.add('visible');
  
      // Ждем окончания анимации перед окончательным скрытием окна
      setTimeout(() => {
        welcomeContainer.style.display = 'none';
      }, 1000); // Задержка для окончания анимации (1 секунда)
  
      // Устанавливаем приветствие
      document.getElementById('greeting').textContent = `Добро пожаловать, ${login}!`;
    } else {
      alert('Пожалуйста, введите логин!');
    }
  }
  
  // Функция для загрузки логина из Session Storage
  function loadLoginFromSession() {
    return sessionStorage.getItem('login');
  }
  
  // Проверяем, есть ли уже логин в Session Storage
  window.onload = () => {
    const login = loadLoginFromSession();
    const welcomeContainer = document.getElementById('welcome-container');
    const mainContent = document.getElementById('main-content');
  
    if (login) {
      // Если логин есть, сразу показываем основной сайт
      welcomeContainer.style.display = 'none';
      mainContent.style.opacity = 1; // Сразу видим основной контент
      document.getElementById('greeting').textContent = `Добро пожаловать, ${login}!`;
    }
  };
  