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

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ \"./src/Ship.js\");\n\n\nconst GameboardFactory = (name) => {\n  const board = [];\n  const coordinatesArray = [];\n  const placeShip = (size, coordinates) => {\n    const element = {};\n    element.shipObject = (0,_Ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(size, coordinates);\n    obj.board.push(element);\n    obj.coordinatesArray.push(coordinates);\n  };\n  // translateCoords takes a set of coordinates, and return the index in coordinatesArray,\n  // which can then be used by receive attack to find the correct ship object in the board array.\n  const translateCoords = (coords) => {\n    for (let i = 0; i < obj.coordinatesArray.length; i++) {\n      for (let j = 0; j < obj.coordinatesArray[i].length; j++) {\n        if (obj.coordinatesArray[i][j].toString() == coords.toString()) {\n          return i;\n        }\n      }\n    }\n  };\n  const missedAttacks = [];\n  const addToMissedAttacks = (coords) => {\n    obj.missedAttacks.push(coords);\n  };\n  const receiveAttack = (coordinates) => {\n    const index = translateCoords(coordinates);\n    if (index == undefined) {\n      addToMissedAttacks(coordinates);\n    } else {\n      obj.board[index].shipObject.hit(coordinates);\n    }\n  };\n  const obj = { name, board, placeShip, receiveAttack, translateCoords, missedAttacks, coordinatesArray };\n  return obj;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameboardFactory);\n\n\n//# sourceURL=webpack://battleships/./src/Gameboard.js?");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ShipFactory = (size, coordinates) => {\n  let shipArray = new Array(size).fill(0);\n  let sunk = false;\n  const isSunk = () => {\n    if (shipArray.reduce((p, c) => p + c, 0) === obj.shipArray.length) {\n      obj.sunk = true;\n    }\n  };\n  const searchCoordinatesPosition = (coords) => {\n    for (let i = 0; i < coordinates.length; i++) {\n      if (coordinates[i].toString() == coords.toString()) {\n        return i;\n      }\n    }\n  }\n  const hit = (coords) => {\n    let index = searchCoordinatesPosition(coords);\n    obj.shipArray[index] = 1;\n    isSunk();\n  };\n\n  const obj = { shipArray, hit, sunk };\n  return obj;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShipFactory);\n\n\n//# sourceURL=webpack://battleships/./src/Ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ \"./src/Ship.js\");\n/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard.js */ \"./src/Gameboard.js\");\n\n\n\nlet player1 = (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Player 1');\nplayer1.placeShip(2, [[1, 2], [1, 3]]);\nplayer1.placeShip(2, [[1, 5], [1, 4]]);\nplayer1.placeShip(1, [[1, 6]]);\nplayer1.receiveAttack([1, 3]);\nconsole.log(player1);\n\n//# sourceURL=webpack://battleships/./src/index.js?");

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