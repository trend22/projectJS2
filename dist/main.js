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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validForm */ \"./modules/validForm.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('25 june 2022')\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_validForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu')\r\n    const menu = document.querySelector('menu')\r\n    const closeBtn = menu.querySelector('.close-btn')\r\n    const menuItems = menu.querySelectorAll('ul>li>a')\r\n\r\n    const dispMenu = () => {\r\n        menu.classList.toggle('active-menu')\r\n    }\r\n\r\n    menuBtn.addEventListener('click', dispMenu)\r\n    closeBtn.addEventListener('click', dispMenu)\r\n\r\n    menuItems.forEach(menuItem => {\r\n        menuItem.addEventListener('click', dispMenu)\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const modal = document.querySelector('.popup')\r\n    const buttons = document.querySelectorAll('.popup-btn')\r\n    const closeBtn = modal.querySelector('.popup-close')\r\n    const popupContent = modal.querySelector('.popup-content')\r\n\r\n    let count = 0\r\n    let idInterval\r\n\r\n    const animationModal = () => {\r\n\r\n        if (window.screen.availWidth >= 768) {\r\n            count += 10\r\n            idInterval = requestAnimationFrame(animationModal)\r\n\r\n            if (popupContent.offsetLeft < (window.screen.availWidth / 2.6)) {\r\n                popupContent.style.left = count * 5 + 'px'\r\n            } else {\r\n                cancelAnimationFrame(idInterval)\r\n            }\r\n        }\r\n\r\n    }\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            count = 0\r\n            popupContent.style.left = 0\r\n            modal.style.display = 'block'\r\n            animationModal()\r\n        })\r\n    })\r\n\r\n\r\n    closeBtn.addEventListener('click', () => {\r\n        modal.style.display = 'none'\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerDays = document.getElementById('timer-days')\r\n    const timerHours = document.getElementById('timer-hours')\r\n    const timerMinutes = document.getElementById('timer-minutes')\r\n    const timerSeconds = document.getElementById('timer-seconds')\r\n    let idInterval\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime()\r\n        let dateNow = new Date().getTime()\r\n        let timeRemaining = (dateStop - dateNow) / 1000\r\n        let days = Math.floor(timeRemaining / 60 / 60 / 24)\r\n        let hours = Math.floor((timeRemaining / 3600) % 24)\r\n        let minutes = Math.floor((timeRemaining / 60) % 60)\r\n        let seconds = Math.floor(timeRemaining % 60)\r\n\r\n        if (hours.toString().length === 1) {\r\n            hours = '0' + hours\r\n        }\r\n        if (minutes.toString().length === 1) {\r\n            minutes = '0' + minutes\r\n        }\r\n        if (seconds.toString().length === 1) {\r\n            seconds = '0' + seconds\r\n        }\r\n\r\n        return {\r\n            timeRemaining,\r\n            days,\r\n            hours,\r\n            minutes,\r\n            seconds\r\n        }\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining()\r\n\r\n        if (getTime.timeRemaining >= 0) {\r\n            timerDays.textContent = getTime.days\r\n            timerHours.textContent = getTime.hours\r\n            timerMinutes.textContent = getTime.minutes\r\n            timerSeconds.textContent = getTime.seconds\r\n\r\n        } else {\r\n            clearInterval(idInterval)\r\n        }\r\n\r\n    }\r\n    idInterval = setInterval(updateClock, 1000)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validForm.js":
/*!******************************!*\
  !*** ./modules/validForm.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validForm = () => {\r\n    //достаём инпуты калькулятора\r\n    const calcInputs = document.querySelectorAll('.calc-block input')\r\n    //достаём forms с атрибутом [type=text]\r\n    const textInputs = document.querySelectorAll('form [type=text]')\r\n    //достаём forms с атрибутом [placeholder=\"Ваше сообщение\"]\r\n    const messageInput = document.querySelector('form [placeholder=\"Ваше сообщение\"]')\r\n    //достаём forms с атрибутом [type=text]\r\n    const emailInputs = document.querySelectorAll('form [type=email]')\r\n    //достаём forms с атрибутом [type=tel]\r\n    const phoneInputs = document.querySelectorAll('form [type=tel]')\r\n\r\n    //функция вешает на инпуты с атрибутом [type=text] события и не даёт ввод букв \r\n    calcInputs.forEach((calcInput) => {\r\n        calcInput.addEventListener('input', (event) => {\r\n            //использовано регулярное выражение /\\D+/, где \\D - ввод цифр\r\n            // + - это ввод сколько угодно большого набора цифр\r\n            event.target.value = event.target.value.replace(/\\D+/, \"\")\r\n        })\r\n    })\r\n    //функция вешает на инпуты форм события и проверяет правильность ввода\r\n    textInputs.forEach((textInput) => {\r\n        textInput.addEventListener('input', (event) => {\r\n            // регулярное выражение допускает ввод только кириллицы, - и пробела\r\n            event.target.value = event.target.value.replace(/[^а-яА-Я- ]/, \"\")\r\n            console.log(event.target.value)\r\n        })\r\n\r\n    })\r\n    //функция вешает на инпуты с атрибутом [type=text] события и не даёт ввод букв \r\n    emailInputs.forEach((emailInput) => {\r\n        emailInput.addEventListener('input', (event) => {\r\n            // регулярное выражение допускает ввод только латиницы и набора спецсимволов\r\n            event.target.value = event.target.value.replace(/[^a-zA-Z@-_.!~*']/, \"\")\r\n        })\r\n    })\r\n    //функция вешает на инпуты с атрибутом [placeholder=\"Ваше сообщение\"] события и не даёт ввод букв \r\n    messageInput.addEventListener('input', (event) => {\r\n        // регулярное выражение допускает ввод только кириллицы, - и пробела\r\n        event.target.value = event.target.value.replace(/[^а-яА-Я- ]/, \"\")\r\n    })\r\n    //функция вешает на инпуты с атрибутом [type=tel] события и не даёт ввод букв \r\n    phoneInputs.forEach((phoneInput) => {\r\n        phoneInput.addEventListener('input', (event) => {\r\n            // регулярное выражение допускает ввод только латиницы и набора спецсимволов\r\n            event.target.value = event.target.value.replace(/[^\\d()-]/, \"\")\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validForm);\n\n//# sourceURL=webpack:///./modules/validForm.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;