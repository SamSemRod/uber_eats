'use strict';

// Открывает модальное окно
document.getElementsByClassName('trigger')[0].addEventListener('click', (e) => {
    document.querySelector('.registration-modal').style.display = 'block';
});

// Закрывает модальное окно
document.getElementById('close-modal').addEventListener('click', () => {
    document.querySelector('.registration-modal').style.display = 'none';
});
