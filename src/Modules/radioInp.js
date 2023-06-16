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

export const box = (id, arrayTaskList) => {
  if (arrayTaskList[id].completed === false) {
    arrayTaskList[id].completed = true;
  } else {
    arrayTaskList[id].completed = false;
  }
  localStorage.setItem('taskList', JSON.stringify(arrayTaskList));
  return arrayTaskList;
};
