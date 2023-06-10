import storageAvailable from './storage.js';
import * as html from './htmlInject.js';
import loader from './taskTemplateLoder.js';

let taskList = JSON.parse(localStorage.getItem('taskList')) || [];

function addNewTask(newtask) {
  taskList = taskList.concat(newtask);
  localStorage.setItem('taskList', JSON.stringify(taskList));
  html.htmlLiTask(newtask.description, newtask.index, newtask.completed);
  html.emptyMessage();
}

export const addtask = () => {
  const task = document.getElementById('inputTask');
  if (storageAvailable('localStorage')) {
    const newtask = {
      completed: false,
      description: task.value,
      index: (taskList.length) + 1,
    };
    addNewTask(newtask);
    loader();
  }
};

export const addalgo = () => {

};