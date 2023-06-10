// eslint-disable-next-line import/no-cycle
import trash from './removeTask.js';
import * as html from './htmlInject.js';

export default function loader() {
  if (!localStorage.taskList || localStorage.taskList === '[]') {
    html.emptyMessage();
  } else {
    document.getElementById('listTask').innerHTML = '';
    const arr = JSON.parse(localStorage.getItem('taskList'));
    const arrLength = arr.length;
    for (let i = 0; i < arrLength; i += 1) {
      html.htmlLiTask(arr[i].description, i);
    }
    trash();
    html.emptyMessage();
  }
}