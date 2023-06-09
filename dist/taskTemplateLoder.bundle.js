"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["taskTemplateLoder"],{

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

/***/ "./src/Modules/taskTemplateLoder.js":
/*!******************************************!*\
  !*** ./src/Modules/taskTemplateLoder.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loader)
/* harmony export */ });
/* harmony import */ var _htmlInject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlInject.js */ "./src/Modules/htmlInject.js");


function loader() {
  if (localStorage.taskList === '[]'
          || localStorage.taskList === undefined) {
    _htmlInject_js__WEBPACK_IMPORTED_MODULE_0__.emptyMessage();
  } else {
    const arr = JSON.parse(localStorage.taskList);
    const arrLength = JSON.parse(localStorage.taskList).length;
    for (let i = 0; i < arrLength; i += 1) {
      _htmlInject_js__WEBPACK_IMPORTED_MODULE_0__.htmlLiTask(arr[i].description);
    }
    _htmlInject_js__WEBPACK_IMPORTED_MODULE_0__.emptyMessage();
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/Modules/taskTemplateLoder.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza1RlbXBsYXRlTG9kZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNvQztBQUNNO0FBQzFDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLDhCQUE4QixNQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw0Q0FBUztBQUN4QixHQUFHO0FBQ0gsRUFBRSwwREFBSztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUMrQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNERBQVk7QUFDbEIsS0FBSztBQUNMLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCd0M7QUFDeEM7QUFDZTtBQUNmO0FBQ0E7QUFDQSxJQUFJLHdEQUFpQjtBQUNyQixJQUFJO0FBQ0o7QUFDQTtBQUNBLG9CQUFvQixlQUFlO0FBQ25DLE1BQU0sc0RBQWU7QUFDckI7QUFDQSxJQUFJLHdEQUFpQjtBQUNyQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvTW9kdWxlcy9odG1sSW5qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL01vZHVsZXMvcmVtb3ZlVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9Nb2R1bGVzL3Rhc2tUZW1wbGF0ZUxvZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcclxuaW1wb3J0IHRyYXNoIGZyb20gJy4vcmVtb3ZlVGFzay5qcyc7XHJcbmltcG9ydCB0cmFzaEljb24gZnJvbSAnLi4vcGljcy90cmFzaC5wbmcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVtcHR5TWVzc2FnZSA9ICgpID0+IHtcclxuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKTtcclxuXHJcbiAgaWYgKGxvY2FsU3RvcmFnZS50YXNrTGlzdCA9PT0gJ1tdJ1xyXG4gICAgICAgIHx8IGxvY2FsU3RvcmFnZS50YXNrTGlzdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBtZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGh0bWxMaVRhc2sgPSAodGFzaywgaW5kZXgpID0+IHtcclxuICBjb25zdCB1bENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0VGFzaycpO1xyXG4gIHVsQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICdiZWZvcmVlbmQnLFxyXG4gICAgYDxsaT5cclxuICAgICAgPGlucHV0IGNsYXNzPVwicmFkaW9cIiB0eXBlPVwicmFkaW9cIj5cclxuICAgICAgPHA+JHt0YXNrfTwvcD5cclxuICAgICAgPGEgY2xhc3M9XCJyZW1vdmVcIiBpZD1cIiR7aW5kZXh9XCI+PGltZyBpZD1cInRyYXNoXCIgYWx0PVwidHJhc2hcIj48L2E+XHJcbiAgICA8L2xpPmAsXHJcbiAgKTtcclxuICBjb25zdCBpbWczID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3RyYXNoJyk7XHJcbiAgaW1nMy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpdGVtLnNyYyA9IHRyYXNoSWNvbjtcclxuICB9KTtcclxuICB0cmFzaCgpO1xyXG4gIGVtcHR5TWVzc2FnZSgpO1xyXG59OyIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcclxuaW1wb3J0IHsgZW1wdHlNZXNzYWdlIH0gZnJvbSAnLi9odG1sSW5qZWN0LmpzJztcclxuXHJcbmZ1bmN0aW9uIHJlbW92ZURhdGEoaWQpIHtcclxuICBsZXQgdGFza0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrTGlzdCcpKSB8fCBbXTtcclxuICB0YXNrTGlzdCA9IHRhc2tMaXN0LmZpbHRlcigodGFzaykgPT4gdGFzay5pbmRleCAhPT0gaWQpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYXNoKCkge1xyXG4gIGNvbnN0IHRyYXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZScpIHx8IFtdO1xyXG4gIHRyYXNoLmZvckVhY2goKGljb24pID0+IHtcclxuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHJlbW92ZURhdGEoaWNvbi5nZXRBdHRyaWJ1dGUoJ2lkJykpO1xyXG4gICAgICBpY29uLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgIGVtcHR5TWVzc2FnZSgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgaHRtbCBmcm9tICcuL2h0bWxJbmplY3QuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZGVyKCkge1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UudGFza0xpc3QgPT09ICdbXSdcclxuICAgICAgICAgIHx8IGxvY2FsU3RvcmFnZS50YXNrTGlzdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBodG1sLmVtcHR5TWVzc2FnZSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBhcnIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS50YXNrTGlzdCk7XHJcbiAgICBjb25zdCBhcnJMZW5ndGggPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS50YXNrTGlzdCkubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJMZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBodG1sLmh0bWxMaVRhc2soYXJyW2ldLmRlc2NyaXB0aW9uKTtcclxuICAgIH1cclxuICAgIGh0bWwuZW1wdHlNZXNzYWdlKCk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==