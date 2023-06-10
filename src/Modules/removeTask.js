import { emptyMessage } from './htmlInject.js';

export function taskUpdate(list) {
  const newArrList = list.map((object, dir) => ({
    completed: object.completed,
    description: object.description,
    index: (dir) + 1,
  }));
  return newArrList;
}

function removeData(id) {
  let taskList = JSON.parse(localStorage.getItem('taskList'));
  const hell = taskList.filter((task) => task.index !== id);
  taskList = taskUpdate(hell);
  localStorage.setItem('taskList', JSON.stringify(taskList));
  window.location.reload();
}

export default function trash() {
  const trash = document.querySelectorAll('.remove');
  trash.forEach((icon) => {
    icon.addEventListener('click', (event) => {
      const id = Number(event.target.id);
      removeData(id);
      icon.parentElement.remove();
      emptyMessage();
    });
  });
}
