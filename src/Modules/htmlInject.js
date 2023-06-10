// eslint-disable-next-line import/no-cycle

import trashIcon from '../pics/trash.png';

export const emptyMessage = () => {
  const message = document.querySelector('.message');
  if (!localStorage.taskList || localStorage.taskList === '[]') {
    message.style.display = 'block';
  } else {
    message.style.display = 'none';
  }
};

export const htmlLiTask = (task, index) => {
  const ulContainer = document.getElementById('listTask');
  ulContainer.insertAdjacentHTML(
    'beforeend',
    `<li>
      <input class="radio" type="radio">
      <p>${task}</p>
      <a class="remove" id="${index}"><img class="trash" alt="trash"></a>
    </li>`,
  );
  const img3 = document.querySelectorAll('.trash');
  img3.forEach((item) => {
    item.src = trashIcon;
  });
  emptyMessage();
};