"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["htmlInject"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/Modules/htmlInject.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbEluamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ29DO0FBQ007QUFDMUM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsOEJBQThCLE1BQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDRDQUFTO0FBQ3hCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUMrQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw0REFBWTtBQUNsQixLQUFLO0FBQ0wsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvTW9kdWxlcy9odG1sSW5qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL01vZHVsZXMvcmVtb3ZlVGFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXHJcbmltcG9ydCB0cmFzaCBmcm9tICcuL3JlbW92ZVRhc2suanMnO1xyXG5pbXBvcnQgdHJhc2hJY29uIGZyb20gJy4uL3BpY3MvdHJhc2gucG5nJztcclxuXHJcbmV4cG9ydCBjb25zdCBlbXB0eU1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJyk7XHJcblxyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xpc3QnKSA9PT0gJ1tdJ1xyXG4gIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrTGlzdCcpID09PSB1bmRlZmluZWQpIHtcclxuICAgIG1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfSBlbHNlIHtcclxuICAgIG1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaHRtbExpVGFzayA9ICh0YXNrLCBpbmRleCkgPT4ge1xyXG4gIGNvbnN0IHVsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RUYXNrJyk7XHJcbiAgdWxDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgJ2JlZm9yZWVuZCcsXHJcbiAgICBgPGxpPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJyYWRpb1wiIHR5cGU9XCJyYWRpb1wiPlxyXG4gICAgICA8cD4ke3Rhc2t9PC9wPlxyXG4gICAgICA8YSBjbGFzcz1cInJlbW92ZVwiIGlkPVwiJHtpbmRleH1cIj48aW1nIGlkPVwidHJhc2hcIiBhbHQ9XCJ0cmFzaFwiPjwvYT5cclxuICAgIDwvbGk+YCxcclxuICApO1xyXG4gIGNvbnN0IGltZzMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjdHJhc2gnKTtcclxuICBpbWczLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uc3JjID0gdHJhc2hJY29uO1xyXG4gIH0pO1xyXG4gIC8vIHRyYXNoKCk7XHJcbiAgZW1wdHlNZXNzYWdlKCk7XHJcbn07XHJcblxyXG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXHJcbmltcG9ydCB7IGVtcHR5TWVzc2FnZSB9IGZyb20gJy4vaHRtbEluamVjdC5qcyc7XHJcbi8vIGltcG9ydCBsb2FkZXIgZnJvbSAnLi90YXNrVGVtcGxhdGVMb2Rlci5qcyc7XHJcblxyXG5mdW5jdGlvbiB0YXNrVXBkYXRlKGxpc3QpIHtcclxuICBjb25zdCBuZXdBcnJMaXN0ID0gbGlzdC5tYXAoKG9iamVjdCwgZGlyKSA9PiAoe1xyXG4gICAgY29tcGxldGVkOiBvYmplY3QuY29tcGxldGVkLFxyXG4gICAgZGVzY3JpcHRpb246IG9iamVjdC5kZXNjcmlwdGlvbixcclxuICAgIGluZGV4OiBkaXIsXHJcbiAgfSkpO1xyXG4gIHJldHVybiBuZXdBcnJMaXN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVEYXRhKGlkKSB7XHJcbiAgbGV0IHRhc2tMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xpc3QnKSk7XHJcbiAgY29uc3QgaGVsbCA9IHRhc2tMaXN0LmZpbHRlcigodGFzaykgPT4gdGFzay5pbmRleCAhPT0gaWQpO1xyXG4gIHRhc2tMaXN0ID0gdGFza1VwZGF0ZShoZWxsKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpO1xyXG4gIC8vIGxvYWRlcigpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFzaCgpIHtcclxuICBjb25zdCB0cmFzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUnKSB8fCBbXTtcclxuICB0cmFzaC5mb3JFYWNoKChpY29uKSA9PiB7XHJcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICByZW1vdmVEYXRhKE51bWJlcihpY29uLmlkKSk7XHJcbiAgICAgIGljb24ucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgZW1wdHlNZXNzYWdlKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=