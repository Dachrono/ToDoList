"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["addTask"],{

/***/ "./src/Modules/addTask.js":
/*!********************************!*\
  !*** ./src/Modules/addTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addalgo: () => (/* binding */ addalgo),
/* harmony export */   addtask: () => (/* binding */ addtask)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/Modules/storage.js");
/* harmony import */ var _htmlInject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmlInject.js */ "./src/Modules/htmlInject.js");



let taskList = JSON.parse(localStorage.getItem('taskList')) || [];

function addNewTask(newtask) {
  taskList = taskList.concat(newtask);
  localStorage.setItem('taskList', JSON.stringify(taskList));
  _htmlInject_js__WEBPACK_IMPORTED_MODULE_1__.htmlLiTask(newtask.description, newtask.index);
  // html.emptyMessage();
}

const addtask = () => {
  const task = document.getElementById('inputTask');

  if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"])('localStorage')) {
    const newtask = {
      completed: false,
      index: `task${taskList.length}`,
      description: task.value,
    };

    addNewTask(newtask);
  }
};

const addalgo = () => {

};

/***/ }),

/***/ "./src/Modules/htmlInject.js":
/*!***********************************!*\
  !*** ./src/Modules/htmlInject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emptyMessage: () => (/* binding */ emptyMessage),
/* harmony export */   htmlLiTask: () => (/* binding */ htmlLiTask)
/* harmony export */ });
/* harmony import */ var _removeTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeTask.js */ "./src/Modules/removeTask.js");
/* harmony import */ var _pics_trash_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pics/trash.png */ "./src/pics/trash.png");
// eslint-disable-next-line import/no-cycle



const emptyMessage = () => {
  const message = document.querySelector('.message');

  if (localStorage.taskList === '[]'
        || localStorage.taskList === undefined) {
    message.style.display = 'block';
  } else {
    message.style.display = 'none';
  }
};

const htmlLiTask = (task, index) => {
  const ulContainer = document.getElementById('listTask');
  ulContainer.insertAdjacentHTML(
    'beforeend',
    `<li>
      <input class="radio" type="radio">
      <p>${task}</p>
      <a class="remove" id="${index}"><img id="trash" alt="trash"></a>
    </li>`,
  );
  const img3 = document.querySelectorAll('#trash');
  img3.forEach((item) => {
    item.src = _pics_trash_png__WEBPACK_IMPORTED_MODULE_1__;
  });
  (0,_removeTask_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  emptyMessage();
};

/***/ }),

/***/ "./src/Modules/removeTask.js":
/*!***********************************!*\
  !*** ./src/Modules/removeTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ trash)
/* harmony export */ });
/* harmony import */ var _htmlInject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlInject.js */ "./src/Modules/htmlInject.js");
// eslint-disable-next-line import/no-cycle


function removeData(id) {
  let taskList = JSON.parse(localStorage.getItem('taskList')) || [];
  taskList = taskList.filter((task) => task.index !== id);
  localStorage.setItem('taskList', JSON.stringify(taskList));
}

function trash() {
  const trash = document.querySelectorAll('.remove') || [];
  trash.forEach((icon) => {
    icon.addEventListener('click', () => {
      removeData(icon.getAttribute('id'));
      icon.parentElement.remove();
      (0,_htmlInject_js__WEBPACK_IMPORTED_MODULE_0__.emptyMessage)();
    });
  });
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

/***/ "./src/pics/trash.png":
/*!****************************!*\
  !*** ./src/pics/trash.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "539f5b124a1ccd24d88d.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/Modules/addTask.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkVGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNKO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0RBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsTUFBTSx1REFBZ0I7QUFDdEI7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ29DO0FBQ007QUFDMUM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsOEJBQThCLE1BQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDRDQUFTO0FBQ3hCLEdBQUc7QUFDSCxFQUFFLDBEQUFLO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQytDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw0REFBWTtBQUNsQixLQUFLO0FBQ0wsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUNsQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvTW9kdWxlcy9hZGRUYXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL01vZHVsZXMvaHRtbEluamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9Nb2R1bGVzL3JlbW92ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvTW9kdWxlcy9zdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdG9yYWdlQXZhaWxhYmxlIGZyb20gJy4vc3RvcmFnZS5qcyc7XHJcbmltcG9ydCAqIGFzIGh0bWwgZnJvbSAnLi9odG1sSW5qZWN0LmpzJztcclxuXHJcbmxldCB0YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMaXN0JykpIHx8IFtdO1xyXG5cclxuZnVuY3Rpb24gYWRkTmV3VGFzayhuZXd0YXNrKSB7XHJcbiAgdGFza0xpc3QgPSB0YXNrTGlzdC5jb25jYXQobmV3dGFzayk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tMaXN0JywgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcclxuICBodG1sLmh0bWxMaVRhc2sobmV3dGFzay5kZXNjcmlwdGlvbiwgbmV3dGFzay5pbmRleCk7XHJcbiAgLy8gaHRtbC5lbXB0eU1lc3NhZ2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZHRhc2sgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFRhc2snKTtcclxuXHJcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XHJcbiAgICBjb25zdCBuZXd0YXNrID0ge1xyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBpbmRleDogYHRhc2ske3Rhc2tMaXN0Lmxlbmd0aH1gLFxyXG4gICAgICBkZXNjcmlwdGlvbjogdGFzay52YWx1ZSxcclxuICAgIH07XHJcblxyXG4gICAgYWRkTmV3VGFzayhuZXd0YXNrKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkYWxnbyA9ICgpID0+IHtcclxuXHJcbn07IiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxyXG5pbXBvcnQgdHJhc2ggZnJvbSAnLi9yZW1vdmVUYXNrLmpzJztcclxuaW1wb3J0IHRyYXNoSWNvbiBmcm9tICcuLi9waWNzL3RyYXNoLnBuZyc7XHJcblxyXG5leHBvcnQgY29uc3QgZW1wdHlNZXNzYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpO1xyXG5cclxuICBpZiAobG9jYWxTdG9yYWdlLnRhc2tMaXN0ID09PSAnW10nXHJcbiAgICAgICAgfHwgbG9jYWxTdG9yYWdlLnRhc2tMaXN0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIG1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfSBlbHNlIHtcclxuICAgIG1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaHRtbExpVGFzayA9ICh0YXNrLCBpbmRleCkgPT4ge1xyXG4gIGNvbnN0IHVsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RUYXNrJyk7XHJcbiAgdWxDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgJ2JlZm9yZWVuZCcsXHJcbiAgICBgPGxpPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJyYWRpb1wiIHR5cGU9XCJyYWRpb1wiPlxyXG4gICAgICA8cD4ke3Rhc2t9PC9wPlxyXG4gICAgICA8YSBjbGFzcz1cInJlbW92ZVwiIGlkPVwiJHtpbmRleH1cIj48aW1nIGlkPVwidHJhc2hcIiBhbHQ9XCJ0cmFzaFwiPjwvYT5cclxuICAgIDwvbGk+YCxcclxuICApO1xyXG4gIGNvbnN0IGltZzMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjdHJhc2gnKTtcclxuICBpbWczLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uc3JjID0gdHJhc2hJY29uO1xyXG4gIH0pO1xyXG4gIHRyYXNoKCk7XHJcbiAgZW1wdHlNZXNzYWdlKCk7XHJcbn07IiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxyXG5pbXBvcnQgeyBlbXB0eU1lc3NhZ2UgfSBmcm9tICcuL2h0bWxJbmplY3QuanMnO1xyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRGF0YShpZCkge1xyXG4gIGxldCB0YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMaXN0JykpIHx8IFtdO1xyXG4gIHRhc2tMaXN0ID0gdGFza0xpc3QuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmluZGV4ICE9PSBpZCk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tMaXN0JywgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhc2goKSB7XHJcbiAgY29uc3QgdHJhc2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlJykgfHwgW107XHJcbiAgdHJhc2guZm9yRWFjaCgoaWNvbikgPT4ge1xyXG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgcmVtb3ZlRGF0YShpY29uLmdldEF0dHJpYnV0ZSgnaWQnKSk7XHJcbiAgICAgIGljb24ucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgZW1wdHlNZXNzYWdlKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcclxuICBsZXQgc3RvcmFnZTtcclxuICB0cnkge1xyXG4gICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcclxuICAgIGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XHJcbiAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XHJcbiAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgZXJyb3IgaW5zdGFuY2VvZiBET01FeGNlcHRpb25cclxuICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcclxuICAgICAgICAgICYmIChlcnJvci5jb2RlID09PSAyMlxyXG4gICAgICAgICAgICAvLyBGaXJlZm94XHJcbiAgICAgICAgICAgIHx8IGVycm9yLmNvZGUgPT09IDEwMTRcclxuICAgICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XHJcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcclxuICAgICAgICAgICAgfHwgZXJyb3IubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcidcclxuICAgICAgICAgICAgLy8gRmlyZWZveFxyXG4gICAgICAgICAgICB8fCBlcnJvci5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKVxyXG4gICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcclxuICAgICAgICAgICYmIHN0b3JhZ2VcclxuICAgICAgICAgICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwXHJcbiAgICApO1xyXG4gIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==