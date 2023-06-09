"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["loader"],{

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
      _html_js__WEBPACK_IMPORTED_MODULE_0__.htmlLiTask(arr[i].description);
    }
    _html_js__WEBPACK_IMPORTED_MODULE_0__.emptyMessage();
  }
}

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/Modules/loader.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ1U7QUFDMUM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLEdBQUc7QUFDMUMsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDRDQUFTO0FBQ3hCLEdBQUc7QUFDSCxFQUFFLHNEQUFLO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUJrQztBQUNsQztBQUNlO0FBQ2Y7QUFDQTtBQUNBLElBQUksa0RBQWlCO0FBQ3JCLElBQUk7QUFDSjtBQUNBO0FBQ0Esb0JBQW9CLGVBQWU7QUFDbkMsTUFBTSxnREFBZTtBQUNyQjtBQUNBLElBQUksa0RBQWlCO0FBQ3JCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvTW9kdWxlcy9odG1sLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL01vZHVsZXMvbG9hZGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL01vZHVsZXMvcmVtb3ZlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0cmFzaCBmcm9tICcuL3JlbW92ZS5qcyc7XHJcbmltcG9ydCB0cmFzaEljb24gZnJvbSAnLi4vcGljcy90cmFzaC5wbmcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVtcHR5TWVzc2FnZSA9ICgpID0+IHtcclxuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKTtcclxuXHJcbiAgaWYgKGxvY2FsU3RvcmFnZS50YXNrTGlzdCA9PT0gW11cclxuICAgICAgICB8fCBsb2NhbFN0b3JhZ2UudGFza0xpc3QgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgbWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9IGVsc2Uge1xyXG4gICAgbWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBodG1sTGlUYXNrID0gKHRhc2ssIGlkKSA9PiB7XHJcbiAgY29uc3QgdWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdFRhc2snKTtcclxuICB1bENvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAnYmVmb3JlZW5kJyxcclxuICAgIGA8bGk+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInJhZGlvXCIgaWQ9XCJyYWRpb18ke2lkfVwiIHR5cGU9XCJyYWRpb1wiPlxyXG4gICAgICA8cD4ke3Rhc2t9PC9wPlxyXG4gICAgICA8YSBjbGFzcz1cInJlbW92ZVwiPjxpbWcgaWQ9XCJ0cmFzaFwiIGFsdD1cInRyYXNoXCI+PC9hPlxyXG4gICAgPC9saT5gLFxyXG4gICk7XHJcbiAgY29uc3QgaW1nMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyN0cmFzaCcpO1xyXG4gIGltZzMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5zcmMgPSB0cmFzaEljb247XHJcbiAgfSk7XHJcbiAgdHJhc2goKTtcclxuICBlbXB0eU1lc3NhZ2UoKTtcclxufTsiLCJpbXBvcnQgKiBhcyBodG1sIGZyb20gJy4vaHRtbC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkZXIoKSB7XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS50YXNrTGlzdCA9PT0gW11cclxuICAgICAgICAgIHx8IGxvY2FsU3RvcmFnZS50YXNrTGlzdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBodG1sLmVtcHR5TWVzc2FnZSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBhcnIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS50YXNrTGlzdCk7XHJcbiAgICBjb25zdCBhcnJMZW5ndGggPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS50YXNrTGlzdCkubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJMZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBodG1sLmh0bWxMaVRhc2soYXJyW2ldLmRlc2NyaXB0aW9uKTtcclxuICAgIH1cclxuICAgIGh0bWwuZW1wdHlNZXNzYWdlKCk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhc2goKSB7XHJcbiAgY29uc3QgdHJhc2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlJykgfHwgW107XHJcbiAgdHJhc2guZm9yRWFjaCgoaWNvbikgPT4ge1xyXG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgLy8gcmVtb3ZlRGF0YShidXR0b24uZ2V0QXR0cmlidXRlKCdib29rLWlkJykpO1xyXG4gICAgICBpY29uLnBhcmVudEVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmUoKTtcclxuICAgICAgLy8gZW1wdHlNZXNzYWdlKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==