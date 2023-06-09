// eslint-disable-next-line import/no-cycle
import { emptyMessage } from './htmlInject.js';
// import loader from './taskTemplateLoder.js';

function taskUpdate(list) {
  const newArrList = list.map((object, dir) => ({
    completed: object.completed,
    description: object.description,
    index: dir,
  }));
  return newArrList;
}

function removeData(id) {
  let taskList = JSON.parse(localStorage.getItem('taskList'));
  const hell = taskList.filter((task) => task.index !== id);
  taskList = taskUpdate(hell);
  localStorage.setItem('taskList', JSON.stringify(taskList));
  // loader();
}

export default function trash() {
  const trash = document.querySelectorAll('.remove') || [];
  trash.forEach((icon) => {
    icon.addEventListener('click', () => {
      removeData(Number(icon.id));
      icon.parentElement.remove();
      emptyMessage();
    });
  });
}
