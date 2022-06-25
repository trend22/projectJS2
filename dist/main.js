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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validForm */ \"./modules/validForm.js\");\n/* harmony import */ var _modules_scrollBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scrollBar */ \"./modules/scrollBar.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('28 june 2022')\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_validForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_scrollBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu')\r\n    const menu = document.querySelector('menu')\r\n    const closeBtn = menu.querySelector('.close-btn')\r\n    const menuItems = menu.querySelectorAll('ul>li>a')\r\n    //находим эелементы ссылок в меню\r\n    const serviceBlock = document.querySelector('#service-block')\r\n    const portfolio = document.querySelector('#portfolio')\r\n    const calc = document.querySelector('#calc')\r\n    const command = document.querySelector('#command')\r\n    const connect = document.querySelector('#connect')\r\n\r\n    const dispMenu = () => {\r\n        menu.classList.toggle('active-menu')\r\n    }\r\n\r\n    const getPositionElement = (element) => {\r\n        element.preventDefault()\r\n        switch (true) {\r\n            case element.target.hash === '#service-block':\r\n                window.scrollTo({\r\n                    top: serviceBlock.offsetTop,\r\n                    behavior: \"smooth\"\r\n                });\r\n                break;\r\n            case element.target.hash === '#portfolio':\r\n                window.scrollTo({\r\n                    top: portfolio.offsetTop,\r\n                    behavior: \"smooth\"\r\n                });\r\n                break;\r\n            case element.target.hash === '#calc':\r\n                window.scrollTo({\r\n                    top: calc.offsetTop,\r\n                    behavior: \"smooth\"\r\n                });\r\n                break;\r\n            case element.target.hash === '#connect':\r\n                window.scrollTo({\r\n                    top: connect.offsetTop,\r\n                    behavior: \"smooth\"\r\n                });\r\n                break;\r\n            case element.target.hash === '#command':\r\n                window.scrollTo({\r\n                    top: command.offsetTop,\r\n                    behavior: \"smooth\"\r\n                });\r\n                break;\r\n        }\r\n\r\n        // let elementPosition = element.getBoundingClientRect().top;\r\n        // console.dir(event.target)\r\n\r\n    }\r\n\r\n    menuBtn.addEventListener('click', dispMenu)\r\n    closeBtn.addEventListener('click', dispMenu)\r\n\r\n    menuItems.forEach(menuItem => {\r\n\r\n        menuItem.addEventListener('click', (event) => {\r\n            dispMenu()\r\n            getPositionElement(event)\r\n        })\r\n    })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const modal = document.querySelector('.popup')\r\n    const buttons = document.querySelectorAll('.popup-btn')\r\n    const closeBtn = modal.querySelector('.popup-close')\r\n    const popupContent = modal.querySelector('.popup-content')\r\n\r\n    let count = 0\r\n    let idInterval\r\n\r\n    const animationModal = () => {\r\n\r\n        if (window.screen.availWidth >= 768) {\r\n            count += 10\r\n            idInterval = requestAnimationFrame(animationModal)\r\n\r\n            if (popupContent.offsetLeft < (window.screen.availWidth / 2.6)) {\r\n                popupContent.style.left = count * 5 + 'px'\r\n            } else {\r\n                cancelAnimationFrame(idInterval)\r\n            }\r\n        }\r\n\r\n    }\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            count = 0\r\n            popupContent.style.left = 0\r\n            modal.style.display = 'block'\r\n            animationModal()\r\n        })\r\n    })\r\n\r\n\r\n    closeBtn.addEventListener('click', () => {\r\n        modal.style.display = 'none'\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scrollBar.js":
/*!******************************!*\
  !*** ./modules/scrollBar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scrollBar = () => {\r\n  const scrollBar = document.querySelector('body>main>a')\r\n  const serviceBlock = document.querySelector('#service-block')\r\n\r\n  scrollBar.addEventListener('click', (event) => {\r\n    event.preventDefault()\r\n\r\n    window.scrollTo({\r\n      top: serviceBlock.offsetTop,\r\n      behavior: 'smooth',\r\n    })\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollBar);\r\n\n\n//# sourceURL=webpack:///./modules/scrollBar.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerDays = document.getElementById('timer-days')\r\n    const timerHours = document.getElementById('timer-hours')\r\n    const timerMinutes = document.getElementById('timer-minutes')\r\n    const timerSeconds = document.getElementById('timer-seconds')\r\n    let idInterval\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime()\r\n        let dateNow = new Date().getTime()\r\n        let timeRemaining = (dateStop - dateNow) / 1000\r\n        // let days = Math.floor(timeRemaining / 60 / 60 / 24)\r\n        // let hours = Math.floor((timeRemaining / 3600) / 24)\r\n        let hours = Math.floor((timeRemaining / 3600))\r\n        let minutes = Math.floor((timeRemaining / 60) % 60)\r\n        let seconds = Math.floor(timeRemaining % 60)\r\n\r\n        if (hours.toString().length === 1) {\r\n            hours = '0' + hours\r\n        }\r\n        if (minutes.toString().length === 1) {\r\n            minutes = '0' + minutes\r\n        }\r\n        if (seconds.toString().length === 1) {\r\n            seconds = '0' + seconds\r\n        }\r\n\r\n        return {\r\n            timeRemaining,\r\n            // days,\r\n            hours,\r\n            minutes,\r\n            seconds\r\n        }\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining()\r\n\r\n        if (getTime.timeRemaining >= 0) {\r\n            // timerDays.textContent = getTime.days\r\n            timerHours.textContent = getTime.hours\r\n            timerMinutes.textContent = getTime.minutes\r\n            timerSeconds.textContent = getTime.seconds\r\n\r\n        } else {\r\n            clearInterval(idInterval)\r\n        }\r\n\r\n    }\r\n    idInterval = setInterval(updateClock, 1000)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validForm.js":
/*!******************************!*\
  !*** ./modules/validForm.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validForm = () => {\r\n    //достаём инпуты калькулятора\r\n    const calcInputs = document.querySelectorAll('.calc-block input')\r\n    //достаём forms с атрибутом [type=text]\r\n    const textInputs = document.querySelectorAll('form [type=text]')\r\n    //достаём forms с атрибутом [placeholder=\"Ваше сообщение\"]\r\n    const messageInput = document.querySelector('form [placeholder=\"Ваше сообщение\"]')\r\n    //достаём forms с атрибутом [type=text]\r\n    const emailInputs = document.querySelectorAll('form [type=email]')\r\n    //достаём forms с атрибутом [type=tel]\r\n    const phoneInputs = document.querySelectorAll('form [type=tel]')\r\n\r\n    //функция проверки двойных и более пробелов в строчке и исправление на один пробел\r\n    const validSpace = (str) => {\r\n        // console.log(event.target.value.match(/(\\s\\s)+/gi))\r\n        if (/\\s\\s/gi.test(str)) {\r\n            do {\r\n                str = str.replace(/(\\s\\s)/gi, (str) => {\r\n                    return \" \";\r\n                })\r\n            }\r\n            while (/\\s\\s/gi.test(str))\r\n            //Дополнительно удалим пробел в начале и в конце строки\r\n            str = str.replace(/^\\s/i, \"\")\r\n            str = str.replace(/\\s$/gi, \"\")\r\n        }\r\n        return str\r\n    }\r\n    //функция проверки двойных и более пробелов в строчке и исправление на один пробел\r\n    const validHyphen = (str) => {\r\n        if (/\\-\\-/gi.test(str)) {\r\n            do {\r\n                str = str.replace(/\\-\\-/gi, (str) => {\r\n                    return \"-\";\r\n                })\r\n            }\r\n            while (/\\-\\-/gi.test(str))\r\n            //Дополнительно удалим пробел в начале и в конце строки\r\n            str = str.replace(/^\\-/i, \"\")\r\n            str = str.replace(/\\-$/gi, \"\")\r\n        }\r\n        return str\r\n    }\r\n\r\n    //функция вешает на инпуты с атрибутом [type=text] события и не даёт ввод букв \r\n    calcInputs.forEach((calcInput) => {\r\n        calcInput.addEventListener('input', (event) => {\r\n            //использовано регулярное выражение /\\D+/, где \\D - ввод цифр\r\n            // + - это ввод сколько угодно большого набора цифр\r\n            event.target.value = event.target.value.replace(/\\D+/, \"\")\r\n        })\r\n    })\r\n    //функция вешает на инпуты форм события и проверяет правильность ввода\r\n    textInputs.forEach((textInput) => {\r\n        textInput.addEventListener('input', (event) => {\r\n            // регулярное выражение допускает ввод только кириллицы, - и пробела\r\n            event.target.value = event.target.value.replace(/[^а-яА-Я\\-\\ ]/, \"\")\r\n            console.log(event.target.value)\r\n        })\r\n    })\r\n    //функция вешает на инпуты форм события blur и проверяет правильность ввода [type=text]\r\n    textInputs.forEach((textInput) => {\r\n        textInput.addEventListener('blur', (event) => {\r\n            //если в тексте встречаются двойные и более пробелы,то менять на один пробел\r\n            event.target.value = validSpace(event.target.value)\r\n            //если в тексте встречаются двойные и более дефисы,то менять на один дефис\r\n            event.target.value = validHyphen(event.target.value)\r\n            //перевод первого символа в верхнйи регистр, а остальных в нижний\r\n            event.target.value = event.target.value.replace(/./, (str) => str[0].toUpperCase())\r\n        })\r\n    })\r\n    //функция вешает на инпуты с атрибутом [type=text] события и не даёт ввод букв \r\n    emailInputs.forEach((emailInput) => {\r\n        emailInput.addEventListener('input', (event) => {\r\n            // регулярное выражение допускает ввод только латиницы и набора спецсимволов\r\n            event.target.value = event.target.value.replace(/[^a-zA-Z0-9\\@\\-\\_\\.\\!\\~\\*\\']/, \"\")\r\n        })\r\n    })\r\n    //функция вешает на инпуты с атрибутом [placeholder=\"Ваше сообщение\"] события и не даёт ввод букв \r\n    messageInput.addEventListener('input', (event) => {\r\n        // регулярное выражение допускает ввод только кириллицы, - и пробела\r\n        event.target.value = event.target.value.replace(/[^а-яА-Я\\-\\ ]/, \"\")\r\n    })\r\n    //функция вешает на инпуты форм события blur и проверяет правильность ввода [placeholder=\"Ваше сообщение\"]\r\n    messageInput.addEventListener('blur', (event) => {\r\n        //если в тексте встречаются двойные и более пробелы,то менять на один пробел\r\n        event.target.value = validSpace(event.target.value)\r\n        //если в тексте встречаются двойные и более дефисы,то менять на один дефис\r\n        event.target.value = validHyphen(event.target.value)\r\n    })\r\n\r\n    //функция вешает на инпуты с атрибутом [type=tel] события и не даёт ввод букв \r\n    phoneInputs.forEach((phoneInput) => {\r\n        phoneInput.addEventListener('input', (event) => {\r\n            // регулярное выражение допускает ввод только латиницы и набора спецсимволов\r\n            event.target.value = event.target.value.replace(/[^\\d()-]/, \"\")\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validForm);\n\n//# sourceURL=webpack:///./modules/validForm.js?");

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