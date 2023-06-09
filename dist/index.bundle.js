"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["index"],{

/***/ "./src/Modules/add.js":
/*!****************************!*\
  !*** ./src/Modules/add.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addalgo: () => (/* binding */ addalgo),
/* harmony export */   addtask: () => (/* binding */ addtask)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/Modules/storage.js");
/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html.js */ "./src/Modules/html.js");



let taskList = JSON.parse(localStorage.getItem('taskList')) || [];

function addNewTask(newtask) {
  taskList = taskList.concat(newtask);
  localStorage.setItem('taskList', JSON.stringify(taskList));
  _html_js__WEBPACK_IMPORTED_MODULE_1__.htmlLiTask(newtask.task, newtask.id);
  // html.emptyMessage();
}

const addtask = () => {
  const task = document.getElementById('inputTask');

  if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"])('localStorage')) {
    const newtask = {
      task: task.value,
      completed: false,
      id: taskList.length,
    };

    addNewTask(newtask);
  }
};

const addalgo = () => {

};

/***/ }),

/***/ "./src/Modules/html.js":
/*!*****************************!*\
  !*** ./src/Modules/html.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emptyMessage: () => (/* binding */ emptyMessage),
/* harmony export */   htmlLiTask: () => (/* binding */ htmlLiTask)
/* harmony export */ });
const emptyMessage = () => {
  const message = document.querySelector('.message');

  if (localStorage.taskList === []
        || localStorage.taskList === undefined) {
    message.style.display = 'block';
  } else {
    message.style.display = 'none';
  }
};

const htmlLiTask = (task, id) => {
  const ulContainer = document.getElementById('listTask');
  ulContainer.insertAdjacentHTML(
    'beforeend',
    `<li>
      <input class="radio" id="radio_${id}" type="radio">
      <p>${task}</p>
      <a href=""><img src="./pics/trash.png" alt="trash"></a>
    </li>`,
  );
  emptyMessage();
};

/***/ }),

/***/ "./src/Modules/loader.js":
/*!*******************************!*\
  !*** ./src/Modules/loader.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loader)
/* harmony export */ });
/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html.js */ "./src/Modules/html.js");


function loader() {
  if (localStorage.taskList === []
          || localStorage.taskList === undefined) {
    _html_js__WEBPACK_IMPORTED_MODULE_0__.emptyMessage();
  } else {
    const arr = JSON.parse(localStorage.taskList);
    const arrLength = JSON.parse(localStorage.taskList).length;
    for (let i = 0; i < arrLength; i += 1) {
      _html_js__WEBPACK_IMPORTED_MODULE_0__.htmlLiTask(arr[i].task);
    }
    _html_js__WEBPACK_IMPORTED_MODULE_0__.emptyMessage();
  }
}

/***/ }),

/***/ "./src/Modules/storage.js":
/*!********************************!*\
  !*** ./src/Modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ storageAvailable)
/* harmony export */ });
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (error) {
    return (
      error instanceof DOMException
        // everything except Firefox
        && (error.code === 22
          // Firefox
          || error.code === 1014
          // test name field too, because code might not be present
          // everything except Firefox
          || error.name === 'QuotaExceededError'
          // Firefox
          || error.name === 'NS_ERROR_DOM_QUOTA_REACHED')
        // acknowledge QuotaExceededError only if there's something already stored
        && storage
        && storage.length !== 0
    );
  }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modules_loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/loader.js */ "./src/Modules/loader.js");
/* harmony import */ var _Modules_add_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/add.js */ "./src/Modules/add.js");
// import _ from './lodash';



const message = document.querySelector('.message');
message.style.display = 'none';

(0,_Modules_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

const task = document.getElementById('inputTask');
task.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    (0,_Modules_add_js__WEBPACK_IMPORTED_MODULE_1__.addtask)();
    task.value = '';
  }
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDVjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdEQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLE1BQU0sdURBQWdCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1Qk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxHQUFHO0FBQzFDLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0QmtDO0FBQ2xDO0FBQ2U7QUFDZjtBQUNBO0FBQ0EsSUFBSSxrREFBaUI7QUFDckIsSUFBSTtBQUNKO0FBQ0E7QUFDQSxvQkFBb0IsZUFBZTtBQUNuQyxNQUFNLGdEQUFlO0FBQ3JCO0FBQ0EsSUFBSSxrREFBaUI7QUFDckI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNkZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDeUM7QUFDRTs7QUFFM0M7QUFDQTs7QUFFQSw4REFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFPO0FBQ1g7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9Nb2R1bGVzL2FkZC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9Nb2R1bGVzL2h0bWwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvTW9kdWxlcy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvTW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdG9yYWdlQXZhaWxhYmxlIGZyb20gJy4vc3RvcmFnZS5qcyc7XHJcbmltcG9ydCAqIGFzIGh0bWwgZnJvbSAnLi9odG1sLmpzJztcclxuXHJcbmxldCB0YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMaXN0JykpIHx8IFtdO1xyXG5cclxuZnVuY3Rpb24gYWRkTmV3VGFzayhuZXd0YXNrKSB7XHJcbiAgdGFza0xpc3QgPSB0YXNrTGlzdC5jb25jYXQobmV3dGFzayk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tMaXN0JywgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcclxuICBodG1sLmh0bWxMaVRhc2sobmV3dGFzay50YXNrLCBuZXd0YXNrLmlkKTtcclxuICAvLyBodG1sLmVtcHR5TWVzc2FnZSgpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWRkdGFzayA9ICgpID0+IHtcclxuICBjb25zdCB0YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0VGFzaycpO1xyXG5cclxuICBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcclxuICAgIGNvbnN0IG5ld3Rhc2sgPSB7XHJcbiAgICAgIHRhc2s6IHRhc2sudmFsdWUsXHJcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIGlkOiB0YXNrTGlzdC5sZW5ndGgsXHJcbiAgICB9O1xyXG5cclxuICAgIGFkZE5ld1Rhc2sobmV3dGFzayk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZGFsZ28gPSAoKSA9PiB7XHJcblxyXG59OyIsImV4cG9ydCBjb25zdCBlbXB0eU1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJyk7XHJcblxyXG4gIGlmIChsb2NhbFN0b3JhZ2UudGFza0xpc3QgPT09IFtdXHJcbiAgICAgICAgfHwgbG9jYWxTdG9yYWdlLnRhc2tMaXN0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIG1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfSBlbHNlIHtcclxuICAgIG1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaHRtbExpVGFzayA9ICh0YXNrLCBpZCkgPT4ge1xyXG4gIGNvbnN0IHVsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RUYXNrJyk7XHJcbiAgdWxDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgJ2JlZm9yZWVuZCcsXHJcbiAgICBgPGxpPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJyYWRpb1wiIGlkPVwicmFkaW9fJHtpZH1cIiB0eXBlPVwicmFkaW9cIj5cclxuICAgICAgPHA+JHt0YXNrfTwvcD5cclxuICAgICAgPGEgaHJlZj1cIlwiPjxpbWcgc3JjPVwiLi9waWNzL3RyYXNoLnBuZ1wiIGFsdD1cInRyYXNoXCI+PC9hPlxyXG4gICAgPC9saT5gLFxyXG4gICk7XHJcbiAgZW1wdHlNZXNzYWdlKCk7XHJcbn07IiwiaW1wb3J0ICogYXMgaHRtbCBmcm9tICcuL2h0bWwuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZGVyKCkge1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UudGFza0xpc3QgPT09IFtdXHJcbiAgICAgICAgICB8fCBsb2NhbFN0b3JhZ2UudGFza0xpc3QgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgaHRtbC5lbXB0eU1lc3NhZ2UoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgYXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudGFza0xpc3QpO1xyXG4gICAgY29uc3QgYXJyTGVuZ3RoID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudGFza0xpc3QpLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyTGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgaHRtbC5odG1sTGlUYXNrKGFycltpXS50YXNrKTtcclxuICAgIH1cclxuICAgIGh0bWwuZW1wdHlNZXNzYWdlKCk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XHJcbiAgbGV0IHN0b3JhZ2U7XHJcbiAgdHJ5IHtcclxuICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XHJcbiAgICBjb25zdCB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xyXG4gICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xyXG4gICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGVycm9yIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uXHJcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxyXG4gICAgICAgICYmIChlcnJvci5jb2RlID09PSAyMlxyXG4gICAgICAgICAgLy8gRmlyZWZveFxyXG4gICAgICAgICAgfHwgZXJyb3IuY29kZSA9PT0gMTAxNFxyXG4gICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XHJcbiAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XHJcbiAgICAgICAgICB8fCBlcnJvci5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJ1xyXG4gICAgICAgICAgLy8gRmlyZWZveFxyXG4gICAgICAgICAgfHwgZXJyb3IubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJylcclxuICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxyXG4gICAgICAgICYmIHN0b3JhZ2VcclxuICAgICAgICAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMFxyXG4gICAgKTtcclxuICB9XHJcbn0iLCIvLyBpbXBvcnQgXyBmcm9tICcuL2xvZGFzaCc7XG5pbXBvcnQgbG9hZGVyIGZyb20gJy4vTW9kdWxlcy9sb2FkZXIuanMnO1xuaW1wb3J0IHsgYWRkdGFzayB9IGZyb20gJy4vTW9kdWxlcy9hZGQuanMnO1xuXG5jb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKTtcbm1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxubG9hZGVyKCk7XG5cbmNvbnN0IHRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRUYXNrJyk7XG50YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgIGFkZHRhc2soKTtcbiAgICB0YXNrLnZhbHVlID0gJyc7XG4gIH1cbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==