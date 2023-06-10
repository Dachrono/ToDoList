"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["htmlInject"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbEluamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiaUI7QUFDTTtBQUMxQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLEtBQUs7QUFDM0IsOEJBQThCLFlBQVk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDRDQUFTO0FBQ3hCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxJQUFJLDJEQUFJO0FBQ1IsR0FBRztBQUNIO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL01vZHVsZXMvZWRpdERlc2NyaXAuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvTW9kdWxlcy9odG1sSW5qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVkaXQgPSAoZWRpdGlucHV0LCBpbmRleCkgPT4ge1xyXG4vLyBjb25zb2xlLmxvZyhlZGl0aW5wdXQudmFsdWUpXHJcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwLmNsYXNzTmFtZSA9ICdwdCc7XHJcbiAgY29uc3QgbmV3VmFsdWUgPSBlZGl0aW5wdXQudmFsdWU7XHJcbiAgcC50ZXh0Q29udGVudCA9IG5ld1ZhbHVlO1xyXG4gIGNvbnN0IGFyciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMaXN0JykpO1xyXG4gIGFycltpbmRleF0uZGVzY3JpcHRpb24gPSBuZXdWYWx1ZTtcclxuICBlZGl0aW5wdXQucmVwbGFjZVdpdGgocCk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tMaXN0JywgSlNPTi5zdHJpbmdpZnkoYXJyKSk7XHJcbiAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZWRpdDsiLCJpbXBvcnQgZWRpdCBmcm9tICcuL2VkaXREZXNjcmlwLmpzJztcclxuaW1wb3J0IHRyYXNoSWNvbiBmcm9tICcuLi9waWNzL3RyYXNoLnBuZyc7XHJcblxyXG5leHBvcnQgY29uc3QgZW1wdHlNZXNzYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpO1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xpc3QnKSkge1xyXG4gICAgbWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9IGVsc2Uge1xyXG4gICAgbWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBodG1sTGlUYXNrID0gKHRhc2ssIGluZGV4KSA9PiB7XHJcbiAgY29uc3QgdWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdFRhc2snKTtcclxuICB1bENvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAnYmVmb3JlZW5kJyxcclxuICAgIGA8bGk+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInJhZGlvXCIgdHlwZT1cInJhZGlvXCI+XHJcbiAgICAgIDxwIGNsYXNzPVwicHRcIj4ke3Rhc2t9PC9wPlxyXG4gICAgICA8YSBjbGFzcz1cInJlbW92ZVwiIGlkPVwiJHsoaW5kZXgpICsgMX1cIj48aW1nIGNsYXNzPVwidHJhc2hcIiBhbHQ9XCJ0cmFzaFwiPjwvYT5cclxuICAgIDwvbGk+YCxcclxuICApO1xyXG4gIGNvbnN0IGltZzMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHJhc2gnKTtcclxuICBpbWczLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uc3JjID0gdHJhc2hJY29uO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBlbGVtVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wdCcpO1xyXG4gIGNvbnN0IGVkaXRpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwLmNsYXNzTmFtZSA9ICdwdCc7XHJcbiAgZWRpdGlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgZWxlbVRhc2suZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZWRpdGlucHV0LnZhbHVlID0gZWxlbS50ZXh0Q29udGVudDtcclxuICAgICAgZWxlbS5yZXBsYWNlV2l0aChlZGl0aW5wdXQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgZWRpdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKCkgPT4ge1xyXG4gICAgZWRpdChlZGl0aW5wdXQsIGluZGV4KTtcclxuICB9KTtcclxuXHJcbiAgZW1wdHlNZXNzYWdlKCk7XHJcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9