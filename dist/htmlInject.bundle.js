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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbEluamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ29DO0FBQ007QUFDMUM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsOEJBQThCLE1BQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDRDQUFTO0FBQ3hCLEdBQUc7QUFDSCxFQUFFLDBEQUFLO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQytDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw0REFBWTtBQUNsQixLQUFLO0FBQ0wsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvTW9kdWxlcy9odG1sSW5qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL01vZHVsZXMvcmVtb3ZlVGFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXHJcbmltcG9ydCB0cmFzaCBmcm9tICcuL3JlbW92ZVRhc2suanMnO1xyXG5pbXBvcnQgdHJhc2hJY29uIGZyb20gJy4uL3BpY3MvdHJhc2gucG5nJztcclxuXHJcbmV4cG9ydCBjb25zdCBlbXB0eU1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJyk7XHJcblxyXG4gIGlmIChsb2NhbFN0b3JhZ2UudGFza0xpc3QgPT09ICdbXSdcclxuICAgICAgICB8fCBsb2NhbFN0b3JhZ2UudGFza0xpc3QgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgbWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9IGVsc2Uge1xyXG4gICAgbWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBodG1sTGlUYXNrID0gKHRhc2ssIGluZGV4KSA9PiB7XHJcbiAgY29uc3QgdWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdFRhc2snKTtcclxuICB1bENvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAnYmVmb3JlZW5kJyxcclxuICAgIGA8bGk+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInJhZGlvXCIgdHlwZT1cInJhZGlvXCI+XHJcbiAgICAgIDxwPiR7dGFza308L3A+XHJcbiAgICAgIDxhIGNsYXNzPVwicmVtb3ZlXCIgaWQ9XCIke2luZGV4fVwiPjxpbWcgaWQ9XCJ0cmFzaFwiIGFsdD1cInRyYXNoXCI+PC9hPlxyXG4gICAgPC9saT5gLFxyXG4gICk7XHJcbiAgY29uc3QgaW1nMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyN0cmFzaCcpO1xyXG4gIGltZzMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5zcmMgPSB0cmFzaEljb247XHJcbiAgfSk7XHJcbiAgdHJhc2goKTtcclxuICBlbXB0eU1lc3NhZ2UoKTtcclxufTsiLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXHJcbmltcG9ydCB7IGVtcHR5TWVzc2FnZSB9IGZyb20gJy4vaHRtbEluamVjdC5qcyc7XHJcblxyXG5mdW5jdGlvbiByZW1vdmVEYXRhKGlkKSB7XHJcbiAgbGV0IHRhc2tMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xpc3QnKSkgfHwgW107XHJcbiAgdGFza0xpc3QgPSB0YXNrTGlzdC5maWx0ZXIoKHRhc2spID0+IHRhc2suaW5kZXggIT09IGlkKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFzaCgpIHtcclxuICBjb25zdCB0cmFzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUnKSB8fCBbXTtcclxuICB0cmFzaC5mb3JFYWNoKChpY29uKSA9PiB7XHJcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICByZW1vdmVEYXRhKGljb24uZ2V0QXR0cmlidXRlKCdpZCcpKTtcclxuICAgICAgaWNvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICBlbXB0eU1lc3NhZ2UoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==