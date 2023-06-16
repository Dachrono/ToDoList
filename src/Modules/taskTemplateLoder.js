// eslint-disable-next-line import/no-cycle
import trash from './removeTask.js';
import * as radio from './radioInp.js';
import { htmlLiTask, emptyMessage } from './htmlInject.js';

export default function loader() {
  if (!localStorage.taskList) {
    emptyMessage();
  } else {
    document.getElementById('listTask').innerHTML = '';
    const arr = JSON.parse(localStorage.getItem('taskList'));
    const arrLength = arr.length;
    for (let i = 0; i < arrLength; i += 1) {
      htmlLiTask(arr[i].description, i, arr[i].completed);
    }

    const checkbox = document.querySelectorAll('.checkbox');
    checkbox.forEach((element) => {
      element.addEventListener('change', (event) => {
        const id = Number(event.target.dataset.id);
        const arrayTaskList = localStorage.getItem('taskList');
        radio.box(id, arrayTaskList);
      });
    });

    const butClear = document.querySelector('.complete');
    butClear.addEventListener('click', () => {
      const taskList = JSON.parse(localStorage.getItem('taskList'));
      radio.clear(taskList);
      window.location.reload();
    });

    trash();
    // emptyMessage();
  }
}