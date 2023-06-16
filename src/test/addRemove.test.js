// test('hello world', () => {
//   const message = 'hello world 2';
//   expect(message).toMatch('hello world 2');
// });

import { addtask } from '../Modules/addTask.js';

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