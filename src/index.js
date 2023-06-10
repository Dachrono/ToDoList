import './style.css';
import rel from './pics/reload.png';
import ent from './pics/enter.png';
import loader from './Modules/taskTemplateLoder.js';
import { addtask } from './Modules/addTask.js';

const message = document.querySelector('.message');
message.style.display = 'none';

const img = document.getElementById('reload');
img.src = rel;

const img2 = document.getElementById('enter');
img2.src = ent;

loader();

const task = document.getElementById('inputTask');
task.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    addtask();
    task.value = '';
  }
});