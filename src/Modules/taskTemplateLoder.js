import { htmlLiTask, emptyMessage } from './htmlInject.js';

export default function loader(taskList) {
  for (let i = 0; i < taskList.length; i += 1) {
    htmlLiTask(taskList[i].description, taskList[i].index);
  }
  emptyMessage(taskList);
}
