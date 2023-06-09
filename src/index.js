// import _ from './lodash';
import './style.css';
import rel from './pics/reload.png';
import ent from './pics/enter.png';
import taskList from './Modules/taskList.js';
import loader from './Modules/taskTemplateLoder.js';

const message = document.querySelector('.message');
message.style.display = 'none';

const img = document.getElementById('reload');
img.src = rel;

const img2 = document.getElementById('enter');
img2.src = ent;

loader(taskList);