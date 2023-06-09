"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["storage"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/Modules/storage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL01vZHVsZXMvc3RvcmFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcclxuICBsZXQgc3RvcmFnZTtcclxuICB0cnkge1xyXG4gICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcclxuICAgIGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XHJcbiAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XHJcbiAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgZXJyb3IgaW5zdGFuY2VvZiBET01FeGNlcHRpb25cclxuICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcclxuICAgICAgICAgICYmIChlcnJvci5jb2RlID09PSAyMlxyXG4gICAgICAgICAgICAvLyBGaXJlZm94XHJcbiAgICAgICAgICAgIHx8IGVycm9yLmNvZGUgPT09IDEwMTRcclxuICAgICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XHJcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcclxuICAgICAgICAgICAgfHwgZXJyb3IubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcidcclxuICAgICAgICAgICAgLy8gRmlyZWZveFxyXG4gICAgICAgICAgICB8fCBlcnJvci5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKVxyXG4gICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcclxuICAgICAgICAgICYmIHN0b3JhZ2VcclxuICAgICAgICAgICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwXHJcbiAgICApO1xyXG4gIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==