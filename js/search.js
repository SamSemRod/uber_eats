'use strict';

/**
 * Поиск нужного кафе по запросу
 * @param {string} searchText - поисковый запрос
 */
function searchElem(searchText) {
  let items = document.querySelectorAll('.cafe');
  for (let i = 0; i < items.length; i++) {
    if (items[i].textContent.toLowerCase().includes(searchText.toLowerCase())) {
      items[i].style.display = 'block';
    } else {
      items[i].style.display = 'none';
    }
  }
}

// Восстановление скрытых блоков
function resetElements() {
  let items = document.querySelectorAll('.cafe');
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = 'block';
  }
}

// Обработка события поискового запроса при нажатии клавиши Enter
document.querySelector('input').addEventListener('keyup', () => {
    if (window.event.keyCode === 13) {
        searchElem(document.querySelector('input').value);
    }
});

// Обработка события очистки поискового запроса при нажатии крестика мышкой
document.querySelector('.reset-search').addEventListener('click', () => {
    document.querySelector('input').value = '';
    resetElements();
});
