// eslint-disable-next-line import/no-cycle
import { emptyMessage } from './htmlInject.js';

function removeData(id) {
  let taskList = JSON.parse(localStorage.getItem('taskList')) || [];
  taskList = taskList.filter((task) => task.index !== id);
  localStorage.setItem('taskList', JSON.stringify(taskList));
}

export default function trash() {
  const trash = document.querySelectorAll('.remove') || [];
  trash.forEach((icon) => {
    icon.addEventListener('click', () => {
      removeData(icon.getAttribute('id'));
      icon.parentElement.remove();
      emptyMessage();
    });
  });
}
