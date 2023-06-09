"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["html"],{

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
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove.js */ "./src/Modules/remove.js");
/* harmony import */ var _pics_trash_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pics/trash.png */ "./src/pics/trash.png");



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
      <a class="remove"><img id="trash" alt="trash"></a>
    </li>`,
  );
  const img3 = document.querySelectorAll('#trash');
  img3.forEach((item) => {
    item.src = _pics_trash_png__WEBPACK_IMPORTED_MODULE_1__;
  });
  (0,_remove_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  emptyMessage();
};

/***/ }),

/***/ "./src/Modules/remove.js":
/*!*******************************!*\
  !*** ./src/Modules/remove.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ trash)
/* harmony export */ });
function trash() {
  const trash = document.querySelectorAll('.remove') || [];
  trash.forEach((icon) => {
    icon.addEventListener('click', () => {
      // removeData(button.getAttribute('book-id'));
      icon.parentElement.parentNode.remove();
      // emptyMessage();
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/Modules/html.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNVO0FBQzFDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxHQUFHO0FBQzFDLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw0Q0FBUztBQUN4QixHQUFHO0FBQ0gsRUFBRSxzREFBSztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDOUJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL01vZHVsZXMvaHRtbC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9Nb2R1bGVzL3JlbW92ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHJhc2ggZnJvbSAnLi9yZW1vdmUuanMnO1xyXG5pbXBvcnQgdHJhc2hJY29uIGZyb20gJy4uL3BpY3MvdHJhc2gucG5nJztcclxuXHJcbmV4cG9ydCBjb25zdCBlbXB0eU1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJyk7XHJcblxyXG4gIGlmIChsb2NhbFN0b3JhZ2UudGFza0xpc3QgPT09IFtdXHJcbiAgICAgICAgfHwgbG9jYWxTdG9yYWdlLnRhc2tMaXN0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIG1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfSBlbHNlIHtcclxuICAgIG1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaHRtbExpVGFzayA9ICh0YXNrLCBpZCkgPT4ge1xyXG4gIGNvbnN0IHVsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RUYXNrJyk7XHJcbiAgdWxDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgJ2JlZm9yZWVuZCcsXHJcbiAgICBgPGxpPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJyYWRpb1wiIGlkPVwicmFkaW9fJHtpZH1cIiB0eXBlPVwicmFkaW9cIj5cclxuICAgICAgPHA+JHt0YXNrfTwvcD5cclxuICAgICAgPGEgY2xhc3M9XCJyZW1vdmVcIj48aW1nIGlkPVwidHJhc2hcIiBhbHQ9XCJ0cmFzaFwiPjwvYT5cclxuICAgIDwvbGk+YCxcclxuICApO1xyXG4gIGNvbnN0IGltZzMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjdHJhc2gnKTtcclxuICBpbWczLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uc3JjID0gdHJhc2hJY29uO1xyXG4gIH0pO1xyXG4gIHRyYXNoKCk7XHJcbiAgZW1wdHlNZXNzYWdlKCk7XHJcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhc2goKSB7XHJcbiAgY29uc3QgdHJhc2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlJykgfHwgW107XHJcbiAgdHJhc2guZm9yRWFjaCgoaWNvbikgPT4ge1xyXG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgLy8gcmVtb3ZlRGF0YShidXR0b24uZ2V0QXR0cmlidXRlKCdib29rLWlkJykpO1xyXG4gICAgICBpY29uLnBhcmVudEVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmUoKTtcclxuICAgICAgLy8gZW1wdHlNZXNzYWdlKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==