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
  _htmlInject_js__WEBPACK_IMPORTED_MODULE_1__.emptyMessage();
}

const addtask = () => {
  const task = document.getElementById('inputTask');

  if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"])('localStorage')) {
    const newtask = {
      completed: false,
      index: taskList.length,
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

  if (localStorage.getItem('taskList') === '[]'
  || localStorage.getItem('taskList') === undefined) {
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
  // trash();
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

// import loader from './taskTemplateLoder.js';

function taskUpdate(list) {
  const newArrList = list.map((object, dir) => ({
    completed: object.completed,
    description: object.description,
    index: dir,
  }));
  return newArrList;
}

function removeData(id) {
  let taskList = JSON.parse(localStorage.getItem('taskList'));
  const hell = taskList.filter((task) => task.index !== id);
  taskList = taskUpdate(hell);
  localStorage.setItem('taskList', JSON.stringify(taskList));
  // loader();
}

function trash() {
  const trash = document.querySelectorAll('.remove') || [];
  trash.forEach((icon) => {
    icon.addEventListener('click', () => {
      removeData(Number(icon.id));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkVGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNKO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0RBQWU7QUFDakIsRUFBRSx3REFBaUI7QUFDbkI7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLE1BQU0sdURBQWdCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNvQztBQUNNO0FBQzFDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLDhCQUE4QixNQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw0Q0FBUztBQUN4QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNERBQVk7QUFDbEIsS0FBSztBQUNMLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7O0FDOUJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL01vZHVsZXMvYWRkVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9Nb2R1bGVzL2h0bWxJbmplY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvTW9kdWxlcy9yZW1vdmVUYXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL01vZHVsZXMvc3RvcmFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RvcmFnZUF2YWlsYWJsZSBmcm9tICcuL3N0b3JhZ2UuanMnO1xyXG5pbXBvcnQgKiBhcyBodG1sIGZyb20gJy4vaHRtbEluamVjdC5qcyc7XHJcblxyXG5sZXQgdGFza0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrTGlzdCcpKSB8fCBbXTtcclxuXHJcbmZ1bmN0aW9uIGFkZE5ld1Rhc2sobmV3dGFzaykge1xyXG4gIHRhc2tMaXN0ID0gdGFza0xpc3QuY29uY2F0KG5ld3Rhc2spO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSk7XHJcbiAgaHRtbC5odG1sTGlUYXNrKG5ld3Rhc2suZGVzY3JpcHRpb24sIG5ld3Rhc2suaW5kZXgpO1xyXG4gIGh0bWwuZW1wdHlNZXNzYWdlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZGR0YXNrID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRUYXNrJyk7XHJcblxyXG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xyXG4gICAgY29uc3QgbmV3dGFzayA9IHtcclxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgaW5kZXg6IHRhc2tMaXN0Lmxlbmd0aCxcclxuICAgICAgZGVzY3JpcHRpb246IHRhc2sudmFsdWUsXHJcbiAgICB9O1xyXG5cclxuICAgIGFkZE5ld1Rhc2sobmV3dGFzayk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZGFsZ28gPSAoKSA9PiB7XHJcblxyXG59OyIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcclxuaW1wb3J0IHRyYXNoIGZyb20gJy4vcmVtb3ZlVGFzay5qcyc7XHJcbmltcG9ydCB0cmFzaEljb24gZnJvbSAnLi4vcGljcy90cmFzaC5wbmcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVtcHR5TWVzc2FnZSA9ICgpID0+IHtcclxuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKTtcclxuXHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrTGlzdCcpID09PSAnW10nXHJcbiAgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMaXN0JykgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgbWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9IGVsc2Uge1xyXG4gICAgbWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBodG1sTGlUYXNrID0gKHRhc2ssIGluZGV4KSA9PiB7XHJcbiAgY29uc3QgdWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdFRhc2snKTtcclxuICB1bENvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAnYmVmb3JlZW5kJyxcclxuICAgIGA8bGk+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInJhZGlvXCIgdHlwZT1cInJhZGlvXCI+XHJcbiAgICAgIDxwPiR7dGFza308L3A+XHJcbiAgICAgIDxhIGNsYXNzPVwicmVtb3ZlXCIgaWQ9XCIke2luZGV4fVwiPjxpbWcgaWQ9XCJ0cmFzaFwiIGFsdD1cInRyYXNoXCI+PC9hPlxyXG4gICAgPC9saT5gLFxyXG4gICk7XHJcbiAgY29uc3QgaW1nMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyN0cmFzaCcpO1xyXG4gIGltZzMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5zcmMgPSB0cmFzaEljb247XHJcbiAgfSk7XHJcbiAgLy8gdHJhc2goKTtcclxuICBlbXB0eU1lc3NhZ2UoKTtcclxufTtcclxuXHJcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcclxuaW1wb3J0IHsgZW1wdHlNZXNzYWdlIH0gZnJvbSAnLi9odG1sSW5qZWN0LmpzJztcclxuLy8gaW1wb3J0IGxvYWRlciBmcm9tICcuL3Rhc2tUZW1wbGF0ZUxvZGVyLmpzJztcclxuXHJcbmZ1bmN0aW9uIHRhc2tVcGRhdGUobGlzdCkge1xyXG4gIGNvbnN0IG5ld0Fyckxpc3QgPSBsaXN0Lm1hcCgob2JqZWN0LCBkaXIpID0+ICh7XHJcbiAgICBjb21wbGV0ZWQ6IG9iamVjdC5jb21wbGV0ZWQsXHJcbiAgICBkZXNjcmlwdGlvbjogb2JqZWN0LmRlc2NyaXB0aW9uLFxyXG4gICAgaW5kZXg6IGRpcixcclxuICB9KSk7XHJcbiAgcmV0dXJuIG5ld0Fyckxpc3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZURhdGEoaWQpIHtcclxuICBsZXQgdGFza0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrTGlzdCcpKTtcclxuICBjb25zdCBoZWxsID0gdGFza0xpc3QuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmluZGV4ICE9PSBpZCk7XHJcbiAgdGFza0xpc3QgPSB0YXNrVXBkYXRlKGhlbGwpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSk7XHJcbiAgLy8gbG9hZGVyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYXNoKCkge1xyXG4gIGNvbnN0IHRyYXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZScpIHx8IFtdO1xyXG4gIHRyYXNoLmZvckVhY2goKGljb24pID0+IHtcclxuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHJlbW92ZURhdGEoTnVtYmVyKGljb24uaWQpKTtcclxuICAgICAgaWNvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICBlbXB0eU1lc3NhZ2UoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xyXG4gIGxldCBzdG9yYWdlO1xyXG4gIHRyeSB7XHJcbiAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xyXG4gICAgY29uc3QgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcclxuICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcclxuICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBlcnJvciBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvblxyXG4gICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxyXG4gICAgICAgICAgJiYgKGVycm9yLmNvZGUgPT09IDIyXHJcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcclxuICAgICAgICAgICAgfHwgZXJyb3IuY29kZSA9PT0gMTAxNFxyXG4gICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcclxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxyXG4gICAgICAgICAgICB8fCBlcnJvci5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJ1xyXG4gICAgICAgICAgICAvLyBGaXJlZm94XHJcbiAgICAgICAgICAgIHx8IGVycm9yLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpXHJcbiAgICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxyXG4gICAgICAgICAgJiYgc3RvcmFnZVxyXG4gICAgICAgICAgJiYgc3RvcmFnZS5sZW5ndGggIT09IDBcclxuICAgICk7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9