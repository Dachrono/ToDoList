// import _ from './lodash';
import loader from './Modules/loader.js';
import { addtask } from './Modules/add.js';

const message = document.querySelector('.message');
message.style.display = 'none';

loader();

const task = document.getElementById('inputTask');
task.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    addtask();
    task.value = '';
  }
});