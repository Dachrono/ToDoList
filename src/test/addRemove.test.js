import { removeData } from '../Modules/removeTask.js';
import { addtask } from '../Modules/addTask.js';
import edit from '../Modules/editDescrip.js';

describe('add new task', () => {
  test('add new list task', () => {
    document.body.innerHTML = `
        <div class="message">
            <p>Congrats!! you do not have task!</p>
        </div>
        <input id="inputTask" value="test value" />
        <ul id="listTask">
            <li></li>
        </ul>
    `;
    const input = document.querySelector('#inputTask');
    addtask(input);
    const liList = document.querySelectorAll('#listTask li');
    expect(liList).toHaveLength(2);
  });

  test('localstorage access', () => {
    const arrtemp = [
      {
        completed: false,
        description: 'test1',
        index: 1,
      },
      {
        completed: false,
        description: 'test2',
        index: 2,
      },
    ];

    localStorage.setItem('taskList', JSON.stringify(arrtemp));
    expect(JSON.parse(localStorage.getItem('taskList'))).toEqual(arrtemp);
  });
});

describe('remove old task', () => {
  test('remove task', () => {
    const arrtemp = [
      {
        completed: false,
        description: 'test1',
        index: 1,
      },
      {
        completed: false,
        description: 'test2',
        index: 2,
      },
      {
        completed: false,
        description: 'test3',
        index: 3,
      },
    ];

    document.body.innerHTML = `
            <div class="message">
                <p>Congrats!! you do not have task!</p>
            </div>
            <input id="inputTask" value="test value" />
            <ul id="listTask">
                <li>
                 <input class="checkbox" type="checkbox" data-id="1">
                 <p class="pt">hell</p>
                 <a class="remove" id="1"><img class="trash" alt="trash"></a>
                </li>
                <li>
                 <input class="checkbox" type="checkbox" data-id="2">
                 <p class="pt">hell lvl 2</p>
                 <a class="remove" id="2"><img class="trash" alt="trash"></a>
                </li>
                <li>
                 <input class="checkbox" type="checkbox" data-id="3">
                 <p class="pt">hell lvl 3</p>
                 <a class="remove" id="3"><img class="trash" alt="trash"></a>
                </li>
            </ul>
        `;

    const buttons = document.querySelectorAll('.remove');
    removeData(arrtemp, buttons[1], 2);
    const liList = document.querySelectorAll('#listTask li');
    expect(liList).toHaveLength(2);
  });
});

describe('update value', () => {
  test('check update value', () => {
    document.body.innerHTML = `
            <div class="message">
                <p>Congrats!! you do not have task!</p>
            </div>
            <input id="inputTask" value="test value" />
            <ul id="listTask">
                <li>
                 <input class="checkbox" type="checkbox" data-id="1">
                 <p class="pt">hell</p>
                 <a class="remove" id="1"><img class="trash" alt="trash"></a>
                </li>
                <li>
                 <input class="checkbox" type="checkbox" data-id="2">
                 <p class="pt">hell lvl 2</p>
                 <a class="remove" id="2"><img class="trash" alt="trash"></a>
                </li>
                <li>
                 <input class="checkbox" type="checkbox" data-id="3">
                 <p class="pt">hell lvl 3</p>
                 <a class="remove" id="3"><img class="trash" alt="trash"></a>
                </li>
            </ul>
        `;
    const descriptive = document.querySelectorAll('.pt');
    descriptive[1].textContent = 'someone other value';
    const anotherhell = edit(descriptive[1].textContent, 1);
    expect(anotherhell).toMatch('someone other value');
  });
});