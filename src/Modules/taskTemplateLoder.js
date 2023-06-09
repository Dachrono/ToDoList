import * as html from './htmlInject.js';

export default function loader(taskList) {
  for (let i = 0; i < taskList.length; i += 1) {
    html.htmlLiTask(taskList[i].description, taskList[i].index);
  }
  html.emptyMessage(taskList);
}
