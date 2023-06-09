"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["loader"],{

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
/* harmony import */ var _pics_trash_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pics/trash.png */ "./src/pics/trash.png");


const emptyMessage = (taskList) => {
  const message = document.querySelector('.message');

  if (taskList === '[]'
        || taskList === undefined) {
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
    item.src = _pics_trash_png__WEBPACK_IMPORTED_MODULE_0__;
  });
  emptyMessage();
};

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


function loader(taskList) {
  for (let i = 0; i < taskList.length; i += 1) {
    _htmlInject_js__WEBPACK_IMPORTED_MODULE_0__.htmlLiTask(taskList[i].description, taskList[i].index);
  }
  _htmlInject_js__WEBPACK_IMPORTED_MODULE_0__.emptyMessage(taskList);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDMUM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLEdBQUc7QUFDMUMsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDRDQUFTO0FBQ3hCLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1QndDO0FBQ3hDO0FBQ2U7QUFDZixrQkFBa0IscUJBQXFCO0FBQ3ZDLElBQUksc0RBQWU7QUFDbkI7QUFDQSxFQUFFLHdEQUFpQjtBQUNuQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL01vZHVsZXMvaHRtbEluamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9Nb2R1bGVzL3Rhc2tUZW1wbGF0ZUxvZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0cmFzaEljb24gZnJvbSAnLi4vcGljcy90cmFzaC5wbmcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVtcHR5TWVzc2FnZSA9ICh0YXNrTGlzdCkgPT4ge1xyXG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpO1xyXG5cclxuICBpZiAodGFza0xpc3QgPT09ICdbXSdcclxuICAgICAgICB8fCB0YXNrTGlzdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBtZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGh0bWxMaVRhc2sgPSAodGFzaywgaWQpID0+IHtcclxuICBjb25zdCB1bENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0VGFzaycpO1xyXG4gIHVsQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICdiZWZvcmVlbmQnLFxyXG4gICAgYDxsaT5cclxuICAgICAgPGlucHV0IGNsYXNzPVwicmFkaW9cIiBpZD1cInJhZGlvXyR7aWR9XCIgdHlwZT1cInJhZGlvXCI+XHJcbiAgICAgIDxwPiR7dGFza308L3A+XHJcbiAgICAgIDxhIGNsYXNzPVwicmVtb3ZlXCI+PGltZyBpZD1cInRyYXNoXCIgYWx0PVwidHJhc2hcIj48L2E+XHJcbiAgICA8L2xpPmAsXHJcbiAgKTtcclxuICBjb25zdCBpbWczID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3RyYXNoJyk7XHJcbiAgaW1nMy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpdGVtLnNyYyA9IHRyYXNoSWNvbjtcclxuICB9KTtcclxuICBlbXB0eU1lc3NhZ2UoKTtcclxufTsiLCJpbXBvcnQgKiBhcyBodG1sIGZyb20gJy4vaHRtbEluamVjdC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkZXIodGFza0xpc3QpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tMaXN0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBodG1sLmh0bWxMaVRhc2sodGFza0xpc3RbaV0uZGVzY3JpcHRpb24sIHRhc2tMaXN0W2ldLmluZGV4KTtcclxuICB9XHJcbiAgaHRtbC5lbXB0eU1lc3NhZ2UodGFza0xpc3QpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==