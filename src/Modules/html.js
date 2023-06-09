import trash from './remove.js';
import trashIcon from '../pics/trash.png';

export const emptyMessage = () => {
  const message = document.querySelector('.message');

  if (localStorage.taskList === []
        || localStorage.taskList === undefined) {
    message.style.display = 'block';
  } else {
    message.style.display = 'none';
  }
};

export const htmlLiTask = (task, id) => {
  const ulContainer = document.getElementById('listTask');
  ulContainer.insertAdjacentHTML(
    'beforeend',
    `<li>
      <input class="radio" id="radio_${id}" type="radio">
      <p>${task}</p>
      <a class="remove"><img id="trash" alt="trash"></a>
    </li>`,
  );
  const img3 = document.querySelectorAll('#trash');
  img3.forEach((item) => {
    item.src = trashIcon;
  });
  trash();
  emptyMessage();
};