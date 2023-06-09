import storageAvailable from './storage.js';
import * as html from './htmlInject.js';

let taskList = JSON.parse(localStorage.getItem('taskList')) || [];

function addNewTask(newtask) {
  taskList = taskList.concat(newtask);
  localStorage.setItem('taskList', JSON.stringify(taskList));
  html.htmlLiTask(newtask.description, newtask.index);
  html.emptyMessage();
}

export const addtask = () => {
  const task = document.getElementById('inputTask');

  if (storageAvailable('localStorage')) {
    const newtask = {
      completed: false,
      index: taskList.length,
      description: task.value,
    };

    addNewTask(newtask);
  }
};

export const addalgo = () => {

};