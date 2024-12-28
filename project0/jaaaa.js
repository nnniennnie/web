const eyes = document.querySelectorAll('.eye');
const pupils = document.querySelectorAll('.pupil');

// Функция для обновления координат и радиусов
function updateEyeBounds() {
  const bounds = [];
  eyes.forEach(eye => {
    const rect = eye.getBoundingClientRect();
    bounds.push({
      x: rect.left + rect.width / 2, // Центр глаза по X
      y: rect.top + rect.height / 2, // Центр глаза по Y
      radius: rect.width / 4, // Радиус движения зрачка (уменьшен пропорционально размеру глаза)
    });
  });
  return bounds;
}

let eyeBounds = updateEyeBounds(); // Инициализация радиусов

// Обновляем радиусы при изменении размеров окна
window.addEventListener('resize', () => {
  eyeBounds = updateEyeBounds();
});

document.addEventListener('mousemove', (e) => {
  const { clientX: mouseX, clientY: mouseY } = e;

  pupils.forEach((pupil, index) => {
    const { x: eyeX, y: eyeY, radius } = eyeBounds[index];
    const dx = mouseX - eyeX;
    const dy = mouseY - eyeY;
    const angle = Math.atan2(dy, dx);

    // Ограничиваем движение зрачка в пределах радиуса глаза
    const offsetX = Math.cos(angle) * radius;
    const offsetY = Math.sin(angle) * radius;

    pupil.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
});

// Функция для моргания
function blink() {
  eyes.forEach(eye => eye.classList.add('blinking'));
  setTimeout(() => {
    eyes.forEach(eye => eye.classList.remove('blinking'));
  }, 200); // Длительность моргания
}

// Моргаем каждые 3-7 секунд случайно
setInterval(() => {
  blink();
}, Math.random() * 4000 + 3000);