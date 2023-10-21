/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Slider */ \"./src/modules/Slider.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', _modules_Slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadHomePage);\n\n\n//# sourceURL=webpack://image-slider/./src/index.js?");

/***/ }),

/***/ "./src/modules/Slider.js":
/*!*******************************!*\
  !*** ./src/modules/Slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Slider)\n/* harmony export */ });\nclass Slider {\n  constructor() {\n    this.nIntervId = null;\n  }\n\n  static loadHomePage() {\n    document.querySelector('.dot').classList.add('active');\n    Slider.autoSlide();\n    Slider.initArrows();\n  }\n\n  static returnImage(num) {\n    const images = ['./images/0.jpeg', './images/1.jpeg', './images/2.jpeg', './images/3.jpeg'];\n    if (num === '*') {\n      return images;\n    }\n    return images[num];\n  }\n\n  static autoSlide() {\n    let counter = Slider.returnSlide();\n    if (!Slider.nIntervId) {\n      Slider.nIntervId = setInterval(() => {\n        if (counter === 3) {\n          counter = 0;\n          Slider.slideImage(counter);\n        } else {\n          Slider.slideImage(counter + 1);\n        }\n        counter += 1;\n      }, 4000);\n    }\n  }\n\n  static stopAutoSlide() {\n    clearInterval(Slider.nIntervId);\n    Slider.nIntervId = null;\n  }\n\n  static slideImage(count) {\n    const img = document.querySelector('.image');\n    const dots = Array.from(document.querySelectorAll('.dot'));\n    img.setAttribute('src', Slider.returnImage(count));\n    dots.forEach((dot) => {\n      if (dot.dataset.pos == count) {\n        dot.classList.add('active');\n      } else {\n        dot.classList.remove('active');\n      }\n    });\n  }\n\n  static slideManual(direction) {\n    Slider.stopAutoSlide();\n    const currentSlideNum = Slider.returnSlide();\n    if (direction === 'right') {\n      if (currentSlideNum === 3) {\n        Slider.slideImage(0);\n      } else {\n        Slider.slideImage(currentSlideNum + 1);\n      }\n    } else if (direction === 'left') {\n      if (currentSlideNum === 0) {\n        Slider.slideImage(3);\n      } else {\n        Slider.slideImage(currentSlideNum - 1);\n      }\n    }\n    Slider.autoSlide();\n  }\n\n  static initArrows() {\n    const leftArrow = document.querySelector('.arrow-left');\n    const rightArrow = document.querySelector('.arrow-right');\n\n    leftArrow.addEventListener('click', () => Slider.slideManual('left'));\n    rightArrow.addEventListener('click', () => Slider.slideManual('right'));\n  }\n\n  static returnSlide() {\n    const currentSlide = document.querySelector('.dot.active');\n    return +currentSlide.dataset.pos;\n  }\n}\n\n\n//# sourceURL=webpack://image-slider/./src/modules/Slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;