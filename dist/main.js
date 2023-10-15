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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Slider */ \"./src/modules/Slider.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', _modules_Slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadHomePage);\n\n//# sourceURL=webpack://image-slider/./src/index.js?");

/***/ }),

/***/ "./src/modules/Slider.js":
/*!*******************************!*\
  !*** ./src/modules/Slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Slider)\n/* harmony export */ });\nclass Slider {\n    static loadHomePage() {\n        Slider.initImage();\n        Slider.autoSlide();\n    }\n\n    static initImage() {\n    const img = document.querySelector('.image');\n    img.setAttribute('src', './images/kudoimg1.jpeg');\n    document.querySelector(`[data-pos=\"1\"]`).style['background-color'] = \"black\";\n    }\n\n    static autoSlide(){\n        let nIntervId;\n        let counter = 1;\n        const images = ['./images/kudoimg1.jpeg', './images/kudoimg2.jpg', './images/kudoimg3.jpeg', './images/kudoimg4.jpeg'];\n        if(!nIntervId){\n            nIntervId = setInterval(function(){\n                Slider.slideImage(images, counter);\n                counter++;\n                if(counter > 3){\n                    counter = 0;\n                }\n            }, 5000);\n        }\n    }\n\n    static slideImage(images, count){\n        const img = document.querySelector('.image');\n        const slideDots = document.querySelector('.slide-number p');\n        const dots = Array.from(document.querySelectorAll(`.dot`))\n\n        img.setAttribute('src', images[count]);\n        slideDots.textContent = `${count + 1}`;\n        \n        dots.forEach((dot) => {\n            if(dot.dataset.pos == count + 1)\n            {\n                dot.style['background-color'] = \"black\";\n            } else {\n                dot.style['background-color'] = \"gray\";\n            }\n        }\n        )\n    }\n    // clearInterval(nIntervId);\n}\n\n//# sourceURL=webpack://image-slider/./src/modules/Slider.js?");

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