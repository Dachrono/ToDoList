import * as html from './htmlInject.js';

export default function loader() {
  if (!localStorage.taskList || localStorage.taskList === '[]') {
    html.emptyMessage();
  } else {
    const arr = JSON.parse(localStorage.taskList);
    const arrLength = JSON.parse(localStorage.taskList).length;
    for (let i = 0; i < arrLength; i += 1) {
      html.htmlLiTask(arr[i].description, arr[i].index);
    }
    html.emptyMessage();
  }
}
