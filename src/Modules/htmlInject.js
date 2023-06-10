import edit from './editDescrip.js';
import trashIcon from '../pics/trash.png';

export const emptyMessage = () => {
  const message = document.querySelector('.message');
  if (localStorage.getItem('taskList')) {
    message.style.display = 'block';
  } else {
    message.style.display = 'none';
  }
};

export const htmlLiTask = (task, index, completed) => {
  const ulContainer = document.getElementById('listTask');
  ulContainer.insertAdjacentHTML(
    'beforeend',
    `<li>
      <input class="checkbox" type="checkbox" data-id="${index}" ${completed ? 'checked' : ''}>
      <p class="pt">${task}</p>
      <a class="remove" id="${(index) + 1}"><img class="trash" alt="trash"></a>
    </li>`,
  );
  const img3 = document.querySelectorAll('.trash');
  img3.forEach((item) => {
    item.src = trashIcon;
  });

  const elemTask = document.querySelectorAll('.pt');
  const editinput = document.createElement('input');
  const p = document.createElement('p');
  p.className = 'pt';
  editinput.type = 'text';
  elemTask.forEach((elem) => {
    elem.addEventListener('click', () => {
      editinput.value = elem.textContent;
      elem.replaceWith(editinput);
    });
  });
  editinput.addEventListener('focusout', () => {
    edit(editinput, index);
  });

  emptyMessage();
};