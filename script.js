document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const playButton = document.getElementById('playButton');
    const title = document.querySelector('.title');

    // Функція для створення та анімації іконки
    function createFloatingIcon() {
        const icons = ['🌸', '💖', '🌺', '💐', '🌼', '🌷'];
        const icon = document.createElement('span');
        icon.className = 'floating-icon';
        icon.textContent = icons[Math.floor(Math.random() * icons.length)];
        
        // Випадкова початкова позиція вздовж заголовку
        const startPos = Math.random() * title.offsetWidth;
        icon.style.left = `${startPos}px`;
        
        title.appendChild(icon);

        // Видаляємо іконку після завершення анімації
        setTimeout(() => {
            icon.remove();
        }, 3000);
    }

    // Створюємо нові іконки кожні 300мс
    setInterval(createFloatingIcon, 300);

    // Обробник кліку по кнопці
    playButton.addEventListener('click', function() {
        audioPlayer.currentTime = 0; // Перемотуємо на початок
        audioPlayer.play();
    });
});