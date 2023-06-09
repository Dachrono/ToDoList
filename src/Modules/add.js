import storageAvailable from './storage.js';
import * as html from './html.js';

let taskList = JSON.parse(localStorage.getItem('taskList')) || [];

function addNewTask(newtask) {
  taskList = taskList.concat(newtask);
  localStorage.setItem('taskList', JSON.stringify(taskList));
  html.htmlLiTask(newtask.task, newtask.id);
  // html.emptyMessage();
}

export const addtask = () => {
  const task = document.getElementById('inputTask');

  if (storageAvailable('localStorage')) {
    const newtask = {
      task: task.value,
      completed: false,
      id: taskList.length,
    };

    addNewTask(newtask);
  }
};

export const addalgo = () => {

};