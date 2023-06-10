"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["removeTask"],{

/***/ "./src/Modules/editDescrip.js":
/*!************************************!*\
  !*** ./src/Modules/editDescrip.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const edit = (editinput, index) => {
// console.log(editinput.value)
  const p = document.createElement('p');
  p.className = 'pt';
  const newValue = editinput.value;
  p.textContent = newValue;
  const arr = JSON.parse(localStorage.getItem('taskList'));
  arr[index].description = newValue;
  editinput.replaceWith(p);
  localStorage.setItem('taskList', JSON.stringify(arr));
  window.location.reload();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (edit);

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
/* harmony import */ var _editDescrip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editDescrip.js */ "./src/Modules/editDescrip.js");
/* harmony import */ var _pics_trash_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pics/trash.png */ "./src/pics/trash.png");



const emptyMessage = () => {
  const message = document.querySelector('.message');
  if (localStorage.getItem('taskList')) {
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
      <p class="pt">${task}</p>
      <a class="remove" id="${(index) + 1}"><img class="trash" alt="trash"></a>
    </li>`,
  );
  const img3 = document.querySelectorAll('.trash');
  img3.forEach((item) => {
    item.src = _pics_trash_png__WEBPACK_IMPORTED_MODULE_1__;
  });

  const elemTask = document.querySelectorAll('.pt');
  const editinput = document.createElement('input');
  const p = document.createElement('p');
  p.className = 'pt';
  editinput.type = 'text';
  elemTask.forEach((elem) => {
    elem.addEventListener('click', () => {
      editinput.value = elem.textContent;
      elem.replaceWith(editinput);
    });
  });
  editinput.addEventListener('focusout', () => {
    (0,_editDescrip_js__WEBPACK_IMPORTED_MODULE_0__["default"])(editinput, index);
  });

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


function taskUpdate(list) {
  const newArrList = list.map((object, dir) => ({
    completed: object.completed,
    description: object.description,
    index: (dir) + 1,
  }));
  return newArrList;
}

function removeData(id) {
  let taskList = JSON.parse(localStorage.getItem('taskList'));
  const hell = taskList.filter((task) => task.index !== id);
  taskList = taskUpdate(hell);
  localStorage.setItem('taskList', JSON.stringify(taskList));
  window.location.reload();
}

function trash() {
  const trash = document.querySelectorAll('.remove');
  trash.forEach((icon) => {
    icon.addEventListener('click', (event) => {
      const id = Number(event.target.id);
      removeData(id);
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/Modules/removeTask.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlVGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiaUI7QUFDTTtBQUMxQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLEtBQUs7QUFDM0IsOEJBQThCLFlBQVk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDRDQUFTO0FBQ3hCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxJQUFJLDJEQUFJO0FBQ1IsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0MrQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw0REFBWTtBQUNsQixLQUFLO0FBQ0wsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvTW9kdWxlcy9lZGl0RGVzY3JpcC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9Nb2R1bGVzL2h0bWxJbmplY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvTW9kdWxlcy9yZW1vdmVUYXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVkaXQgPSAoZWRpdGlucHV0LCBpbmRleCkgPT4ge1xyXG4vLyBjb25zb2xlLmxvZyhlZGl0aW5wdXQudmFsdWUpXHJcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwLmNsYXNzTmFtZSA9ICdwdCc7XHJcbiAgY29uc3QgbmV3VmFsdWUgPSBlZGl0aW5wdXQudmFsdWU7XHJcbiAgcC50ZXh0Q29udGVudCA9IG5ld1ZhbHVlO1xyXG4gIGNvbnN0IGFyciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMaXN0JykpO1xyXG4gIGFycltpbmRleF0uZGVzY3JpcHRpb24gPSBuZXdWYWx1ZTtcclxuICBlZGl0aW5wdXQucmVwbGFjZVdpdGgocCk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tMaXN0JywgSlNPTi5zdHJpbmdpZnkoYXJyKSk7XHJcbiAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZWRpdDsiLCJpbXBvcnQgZWRpdCBmcm9tICcuL2VkaXREZXNjcmlwLmpzJztcclxuaW1wb3J0IHRyYXNoSWNvbiBmcm9tICcuLi9waWNzL3RyYXNoLnBuZyc7XHJcblxyXG5leHBvcnQgY29uc3QgZW1wdHlNZXNzYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpO1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xpc3QnKSkge1xyXG4gICAgbWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9IGVsc2Uge1xyXG4gICAgbWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBodG1sTGlUYXNrID0gKHRhc2ssIGluZGV4KSA9PiB7XHJcbiAgY29uc3QgdWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdFRhc2snKTtcclxuICB1bENvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAnYmVmb3JlZW5kJyxcclxuICAgIGA8bGk+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInJhZGlvXCIgdHlwZT1cInJhZGlvXCI+XHJcbiAgICAgIDxwIGNsYXNzPVwicHRcIj4ke3Rhc2t9PC9wPlxyXG4gICAgICA8YSBjbGFzcz1cInJlbW92ZVwiIGlkPVwiJHsoaW5kZXgpICsgMX1cIj48aW1nIGNsYXNzPVwidHJhc2hcIiBhbHQ9XCJ0cmFzaFwiPjwvYT5cclxuICAgIDwvbGk+YCxcclxuICApO1xyXG4gIGNvbnN0IGltZzMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHJhc2gnKTtcclxuICBpbWczLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uc3JjID0gdHJhc2hJY29uO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBlbGVtVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wdCcpO1xyXG4gIGNvbnN0IGVkaXRpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwLmNsYXNzTmFtZSA9ICdwdCc7XHJcbiAgZWRpdGlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgZWxlbVRhc2suZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZWRpdGlucHV0LnZhbHVlID0gZWxlbS50ZXh0Q29udGVudDtcclxuICAgICAgZWxlbS5yZXBsYWNlV2l0aChlZGl0aW5wdXQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgZWRpdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKCkgPT4ge1xyXG4gICAgZWRpdChlZGl0aW5wdXQsIGluZGV4KTtcclxuICB9KTtcclxuXHJcbiAgZW1wdHlNZXNzYWdlKCk7XHJcbn07IiwiaW1wb3J0IHsgZW1wdHlNZXNzYWdlIH0gZnJvbSAnLi9odG1sSW5qZWN0LmpzJztcclxuXHJcbmZ1bmN0aW9uIHRhc2tVcGRhdGUobGlzdCkge1xyXG4gIGNvbnN0IG5ld0Fyckxpc3QgPSBsaXN0Lm1hcCgob2JqZWN0LCBkaXIpID0+ICh7XHJcbiAgICBjb21wbGV0ZWQ6IG9iamVjdC5jb21wbGV0ZWQsXHJcbiAgICBkZXNjcmlwdGlvbjogb2JqZWN0LmRlc2NyaXB0aW9uLFxyXG4gICAgaW5kZXg6IChkaXIpICsgMSxcclxuICB9KSk7XHJcbiAgcmV0dXJuIG5ld0Fyckxpc3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZURhdGEoaWQpIHtcclxuICBsZXQgdGFza0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrTGlzdCcpKTtcclxuICBjb25zdCBoZWxsID0gdGFza0xpc3QuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmluZGV4ICE9PSBpZCk7XHJcbiAgdGFza0xpc3QgPSB0YXNrVXBkYXRlKGhlbGwpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSk7XHJcbiAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFzaCgpIHtcclxuICBjb25zdCB0cmFzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUnKTtcclxuICB0cmFzaC5mb3JFYWNoKChpY29uKSA9PiB7XHJcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGlkID0gTnVtYmVyKGV2ZW50LnRhcmdldC5pZCk7XHJcbiAgICAgIHJlbW92ZURhdGEoaWQpO1xyXG4gICAgICBpY29uLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgIGVtcHR5TWVzc2FnZSgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9