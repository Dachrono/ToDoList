"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["taskTemplateLoder"],{

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

/***/ "./src/Modules/taskTemplateLoder.js":
/*!******************************************!*\
  !*** ./src/Modules/taskTemplateLoder.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loader)
/* harmony export */ });
/* harmony import */ var _removeTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeTask.js */ "./src/Modules/removeTask.js");
/* harmony import */ var _htmlInject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmlInject.js */ "./src/Modules/htmlInject.js");
// eslint-disable-next-line import/no-cycle



function loader() {
  if (!localStorage.taskList) {
    _htmlInject_js__WEBPACK_IMPORTED_MODULE_1__.emptyMessage();
  } else {
    document.getElementById('listTask').innerHTML = '';
    const arr = JSON.parse(localStorage.getItem('taskList'));
    const arrLength = arr.length;
    for (let i = 0; i < arrLength; i += 1) {
      _htmlInject_js__WEBPACK_IMPORTED_MODULE_1__.htmlLiTask(arr[i].description, i);
    }
    (0,_removeTask_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    _htmlInject_js__WEBPACK_IMPORTED_MODULE_1__.emptyMessage();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza1RlbXBsYXRlTG9kZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYmlCO0FBQ007QUFDMUM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixLQUFLO0FBQzNCLDhCQUE4QixZQUFZO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw0Q0FBUztBQUN4QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsSUFBSSwyREFBSTtBQUNSLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNDK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNERBQVk7QUFDbEIsS0FBSztBQUNMLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDb0M7QUFDSTtBQUN4QztBQUNlO0FBQ2Y7QUFDQSxJQUFJLHdEQUFpQjtBQUNyQixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGVBQWU7QUFDbkMsTUFBTSxzREFBZTtBQUNyQjtBQUNBLElBQUksMERBQUs7QUFDVCxJQUFJLHdEQUFpQjtBQUNyQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvTW9kdWxlcy9lZGl0RGVzY3JpcC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9Nb2R1bGVzL2h0bWxJbmplY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvTW9kdWxlcy9yZW1vdmVUYXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL01vZHVsZXMvdGFza1RlbXBsYXRlTG9kZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZWRpdCA9IChlZGl0aW5wdXQsIGluZGV4KSA9PiB7XHJcbi8vIGNvbnNvbGUubG9nKGVkaXRpbnB1dC52YWx1ZSlcclxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHAuY2xhc3NOYW1lID0gJ3B0JztcclxuICBjb25zdCBuZXdWYWx1ZSA9IGVkaXRpbnB1dC52YWx1ZTtcclxuICBwLnRleHRDb250ZW50ID0gbmV3VmFsdWU7XHJcbiAgY29uc3QgYXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xpc3QnKSk7XHJcbiAgYXJyW2luZGV4XS5kZXNjcmlwdGlvbiA9IG5ld1ZhbHVlO1xyXG4gIGVkaXRpbnB1dC5yZXBsYWNlV2l0aChwKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza0xpc3QnLCBKU09OLnN0cmluZ2lmeShhcnIpKTtcclxuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlZGl0OyIsImltcG9ydCBlZGl0IGZyb20gJy4vZWRpdERlc2NyaXAuanMnO1xyXG5pbXBvcnQgdHJhc2hJY29uIGZyb20gJy4uL3BpY3MvdHJhc2gucG5nJztcclxuXHJcbmV4cG9ydCBjb25zdCBlbXB0eU1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJyk7XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrTGlzdCcpKSB7XHJcbiAgICBtZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGh0bWxMaVRhc2sgPSAodGFzaywgaW5kZXgpID0+IHtcclxuICBjb25zdCB1bENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0VGFzaycpO1xyXG4gIHVsQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICdiZWZvcmVlbmQnLFxyXG4gICAgYDxsaT5cclxuICAgICAgPGlucHV0IGNsYXNzPVwicmFkaW9cIiB0eXBlPVwicmFkaW9cIj5cclxuICAgICAgPHAgY2xhc3M9XCJwdFwiPiR7dGFza308L3A+XHJcbiAgICAgIDxhIGNsYXNzPVwicmVtb3ZlXCIgaWQ9XCIkeyhpbmRleCkgKyAxfVwiPjxpbWcgY2xhc3M9XCJ0cmFzaFwiIGFsdD1cInRyYXNoXCI+PC9hPlxyXG4gICAgPC9saT5gLFxyXG4gICk7XHJcbiAgY29uc3QgaW1nMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50cmFzaCcpO1xyXG4gIGltZzMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5zcmMgPSB0cmFzaEljb247XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGVsZW1UYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnB0Jyk7XHJcbiAgY29uc3QgZWRpdGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHAuY2xhc3NOYW1lID0gJ3B0JztcclxuICBlZGl0aW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICBlbGVtVGFzay5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBlZGl0aW5wdXQudmFsdWUgPSBlbGVtLnRleHRDb250ZW50O1xyXG4gICAgICBlbGVtLnJlcGxhY2VXaXRoKGVkaXRpbnB1dCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBlZGl0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoKSA9PiB7XHJcbiAgICBlZGl0KGVkaXRpbnB1dCwgaW5kZXgpO1xyXG4gIH0pO1xyXG5cclxuICBlbXB0eU1lc3NhZ2UoKTtcclxufTsiLCJpbXBvcnQgeyBlbXB0eU1lc3NhZ2UgfSBmcm9tICcuL2h0bWxJbmplY3QuanMnO1xyXG5cclxuZnVuY3Rpb24gdGFza1VwZGF0ZShsaXN0KSB7XHJcbiAgY29uc3QgbmV3QXJyTGlzdCA9IGxpc3QubWFwKChvYmplY3QsIGRpcikgPT4gKHtcclxuICAgIGNvbXBsZXRlZDogb2JqZWN0LmNvbXBsZXRlZCxcclxuICAgIGRlc2NyaXB0aW9uOiBvYmplY3QuZGVzY3JpcHRpb24sXHJcbiAgICBpbmRleDogKGRpcikgKyAxLFxyXG4gIH0pKTtcclxuICByZXR1cm4gbmV3QXJyTGlzdDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRGF0YShpZCkge1xyXG4gIGxldCB0YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMaXN0JykpO1xyXG4gIGNvbnN0IGhlbGwgPSB0YXNrTGlzdC5maWx0ZXIoKHRhc2spID0+IHRhc2suaW5kZXggIT09IGlkKTtcclxuICB0YXNrTGlzdCA9IHRhc2tVcGRhdGUoaGVsbCk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tMaXN0JywgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcclxuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYXNoKCkge1xyXG4gIGNvbnN0IHRyYXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZScpO1xyXG4gIHRyYXNoLmZvckVhY2goKGljb24pID0+IHtcclxuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgaWQgPSBOdW1iZXIoZXZlbnQudGFyZ2V0LmlkKTtcclxuICAgICAgcmVtb3ZlRGF0YShpZCk7XHJcbiAgICAgIGljb24ucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgZW1wdHlNZXNzYWdlKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXHJcbmltcG9ydCB0cmFzaCBmcm9tICcuL3JlbW92ZVRhc2suanMnO1xyXG5pbXBvcnQgKiBhcyBodG1sIGZyb20gJy4vaHRtbEluamVjdC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkZXIoKSB7XHJcbiAgaWYgKCFsb2NhbFN0b3JhZ2UudGFza0xpc3QpIHtcclxuICAgIGh0bWwuZW1wdHlNZXNzYWdlKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0VGFzaycpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29uc3QgYXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xpc3QnKSk7XHJcbiAgICBjb25zdCBhcnJMZW5ndGggPSBhcnIubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJMZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBodG1sLmh0bWxMaVRhc2soYXJyW2ldLmRlc2NyaXB0aW9uLCBpKTtcclxuICAgIH1cclxuICAgIHRyYXNoKCk7XHJcbiAgICBodG1sLmVtcHR5TWVzc2FnZSgpO1xyXG4gIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==