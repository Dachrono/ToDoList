// import { emptyMessage } from './htmlInject.js';

export function taskUpdate(list) {
  const newArrList = list.map((object, dir) => ({
    completed: object.completed,
    description: object.description,
    index: (dir) + 1,
  }));
  return newArrList;
}

export function removeData(taskList, icon, id) {
  const hell = taskList.filter((task) => task.index !== id);
  taskList = taskUpdate(hell);
  icon.parentElement.remove();
  localStorage.setItem('taskList', JSON.stringify(taskList));
}

export default function trash() {
  const trash = document.querySelectorAll('.remove');
  trash.forEach((icon) => {
    icon.addEventListener('click', (event) => {
      const id = Number(event.target.id);
      const taskList = JSON.parse(localStorage.getItem('taskList'));
      removeData(taskList, icon, id);
      window.location.reload();
      // emptyMessage();
    });
  });
}
