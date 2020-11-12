// Создание элемента при нажатии клавиши ентер в поле инпут
document.querySelector('input').addEventListener('keydown', function(enter) {
    if (enter.keyCode === 13) {
      newElement();
    }
});

// Смена класса элемента при нажатии на элемент, и удаления строки при наэатии на SPAN
let ulElement = document.querySelector('ul');
ulElement.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
    } else if(event.target.tagName === "SPAN") {
      event.target.parentNode.remove();
    }
  }
);

// Функция создания нового дела
function newElement() {
  // Создаем элемент LI
  let li = document.createElement('LI');
  let inputValue = document.getElementById('myInput').value;
  let txtValue = document.createTextNode(inputValue);
  li.appendChild(txtValue);

  // Если значение в инпут не пустое - вставляем элемент LI в UL
  if (inputValue == "") {
      alert('Поле не должно быть пустым...');
  } else {
      document.getElementById('myUL').appendChild(li);
  }

  // Создаем элемент SPAN в LI (кнопка удаления записи)
  document.getElementById('myInput').value = '';
  let span = document.createElement('SPAN');
  let txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);
}
