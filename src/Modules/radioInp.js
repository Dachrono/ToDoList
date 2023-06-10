import { taskUpdate } from './removeTask.js';

export const clear = () => {
  const butClear = document.querySelector('.complete');
  butClear.addEventListener('click', () => {
    let taskList = JSON.parse(localStorage.getItem('taskList'));
    const hell = taskList.filter((task) => task.completed === false);
    taskList = taskUpdate(hell);
    localStorage.setItem('taskList', JSON.stringify(taskList));
    window.location.reload();
  });
};

export const box = () => {
  const check = document.querySelectorAll('.checkbox');
  const arr = JSON.parse(localStorage.getItem('taskList'));
  check.forEach((elem) => {
    elem.addEventListener('change', (event) => {
      const id = Number(event.target.dataset.id);
      if (arr[id].completed === false) {
        arr[id].completed = true;
      } else {
        arr[id].completed = false;
      }
      localStorage.setItem('taskList', JSON.stringify(arr));
    });
  });
};
