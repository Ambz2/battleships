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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body, html {\\n  padding:0;\\n  margin:0;\\n  background-color: blueviolet;\\n}\\n\\nheader {\\n  background-color: black;\\n  font-size:100%;\\n  color:white;\\n  padding: 5%;\\n}\\n\\nh1 {\\n  margin:0;\\n  text-align:center;\\n}\\n\\n.content {\\n  display:flex;\\n  flex-direction:row;\\n  justify-content: space-around;\\n  padding:10px;\\n}\\n.grid-container {\\n  width:300px;\\n  height:300px;\\n  overflow: none;\\n  outline: 2px solid black;\\n  display:grid;\\n  grid-template-columns: repeat(10, 1fr) ;\\n  grid-template-rows: repeat(10, 1fr) ;\\n}\\n\\n.box {\\n  min-width:10%;\\n  min-height:10%;\\n  outline:1px solid black;\\n}\\n\\n.box:hover {\\n  background-color: yellow;\\n  opacity: 50%;\\n}\\n\\n.shipIsPresent {\\n  background-color: yellow;\\n}\\n\\n.missedAttack {\\n  background-color:aqua\\n}\\n\\n.successfulAttack {\\n  background-color: red;\\n}\\n\\n\\n.modal {\\n  display:none;\\n  position:fixed;\\n  z-index:1;\\n  left:0;\\n  top:0;\\n  width:100%;\\n  height: 100%;\\n  overflow:auto;\\n  background-color:rgba(0, 0, 0, 0.4);\\n  -webkit-animation-name: fadeIn;\\n  -webkit-animation-duration: 0.4s;\\n  animation-name: fadeIn;\\n  animation-duration:0.4s;\\n}\\n.gameOver {\\n  display:flex;\\n  justify-content:center;\\n  align-items: center;\\n  position:fixed;\\n  bottom:0;\\n  width:100%; \\n  height:50%;\\n  position:fixed;\\n  z-index:1;\\n  background-color: rgb(135, 240, 114);\\n  overflow:auto;\\n  -webkit-animation-name: slideIn;\\n  -webkit-animation-duration: 0.4s;\\n  animation-name:slideIn;\\n  animation-duration:0.4s;\\n}\\n\\n.ship-container {\\n  outline: 2px solid black;\\n  gap:20px;\\n}\\n@-webkit-keyframes slideIn {\\n  from {bottom: -300px; opacity: 0} \\n  to {bottom: 0; opacity: 1}\\n}\\n\\n@keyframes slideIn {\\n  from {bottom: -300px; opacity: 0}\\n  to {bottom: 0; opacity: 1}\\n}\\n\\n@-webkit-keyframes fadeIn {\\n  from {opacity: 0} \\n  to {opacity: 1}\\n}\\n\\n@keyframes fadeIn {\\n  from {opacity: 0} \\n  to {opacity: 1}\\n}\\n\\n.ship-container {\\n  padding:10px;\\n  display:flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.dragndropship {\\n  display:inline-block;\\n  width:auto;\\n  height:10%;\\n}\\n.ship-segment {\\n  padding:10px;\\n  background-color: green;\\n  float:left;\\n}\\n\\n.dragover {\\n  background-color: #3E96F9;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleships/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleships/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleships/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleships/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Box.js":
/*!********************!*\
  !*** ./src/Box.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Box)\n/* harmony export */ });\nclass Box {\n  constructor(i, j) {\n    this.element = document.createElement('div');\n    this.element.classList = 'box';\n    this.element.dataset.coordinates = `${i},${j}`;\n    this.element.dataset.valid = true;\n    this.element.addEventListener('dragenter', this.handleDragEnter)\n    this.element.ondragleave = this.handleDragLeave\n    this.valid = this.element.dataset.valid;\n  }\n\n  handleDragEnter() {\n    event.target.classList.toggle('dragover');\n  }\n\n  handleDragLeave() {\n    event.target.classList.toggle('dragover');\n  }\n}\n\n\n\n//# sourceURL=webpack://battleships/./src/Box.js?");

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ \"./src/Ship.js\");\n\n\nconst GameboardFactory = (name) => {\n  const board = [];\n  const coordinatesArray = [];\n  const placeShip = (size, coordinates) => {\n    const element = {};\n    element.shipObject = (0,_Ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(size, coordinates);\n    obj.board.push(element);\n    obj.coordinatesArray.push(coordinates);\n  };\n  // translateCoords takes a set of coordinates, and return the index in coordinatesArray,\n  // which can then be used by receive attack to find the correct ship object in the board array.\n  const translateCoords = (coords) => {\n    for (let i = 0; i < obj.coordinatesArray.length; i++) {\n      for (let j = 0; j < obj.coordinatesArray[i].length; j++) {\n        if (obj.coordinatesArray[i][j].toString() === coords.toString()) {\n          return i;\n        }\n      }\n    }\n  };\n  const missedAttacks = [];\n\n  const addToMissedAttacks = (coords) => {\n    obj.missedAttacks.push(coords);\n  };\n  const checkIfAllShipsSunk = () => {\n    const arr = obj.board.map((element) => element.shipObject.sunk);\n    if (arr.every((element) => element === true)) {\n      obj.allShipsSunk = true;\n    }\n  };\n  const addToDoneArray = (coords) => {\n    obj.doneCoords.push(coords);\n  }\n  const deleteFromNotDoneArray = (coords) => {\n    for (let i = 0; i < obj.notDoneCoords.length; i++) {\n      if (coords.toString() === notDoneCoords[i].toString()) {\n        notDoneCoords.splice(i, 1);\n      }\n    }\n  }\n  const receiveAttack = (coordinates) => {\n    console.log(coordinates)\n    const index = translateCoords(coordinates);\n    addToDoneArray(coordinates);\n    deleteFromNotDoneArray(coordinates);\n    if (index === undefined) {\n      addToMissedAttacks(coordinates);\n      return { hit: false, coords: coordinates}\n    } else {\n      obj.board[index].shipObject.hit(coordinates);\n      checkIfAllShipsSunk();\n      return { hit: true, coords: coordinates }\n    }\n    \n  };\n  const allShipsSunk = false;\n\n  const notDoneCoords = [\n    [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9],\n    [1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9],\n    [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8], [2, 9],\n    [3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8], [3, 9],\n    [4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8], [4, 9],\n    [5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [5, 9],\n    [6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7], [6, 8], [6, 9],\n    [7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [7, 8], [7, 9],\n    [8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [8, 8], [8, 9],\n    [9, 0], [9, 1], [9, 2], [9, 3], [9, 4], [9, 5], [9, 6], [9, 7], [9, 8], [9, 9],\n  ];\n  const doneCoords = [];\n\n  const obj = {\n    name,\n    board,\n    placeShip,\n    receiveAttack,\n    translateCoords,\n    missedAttacks,\n    coordinatesArray,\n    allShipsSunk,\n    notDoneCoords,\n    doneCoords,\n  };\n  return obj;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameboardFactory);\n\n\n//# sourceURL=webpack://battleships/./src/Gameboard.js?");

/***/ }),

/***/ "./src/Grid.js":
/*!*********************!*\
  !*** ./src/Grid.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.js */ \"./src/Player.js\");\n/* harmony import */ var _Box_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Box.js */ \"./src/Box.js\");\n\n\n\nclass Grid {\n  constructor(id, name) {\n    this.element = document.createElement('div');\n    this.element.classList.add('grid-container');\n    this.element.setAttribute('id', id);\n\n    this.addBoxes();\n    this.type = name;\n    this.player = (0,_Player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name);\n\n    this.children = Array.from(this.element.children);\n    this.missedAttacks = this.player.gameboard.missedAttacks;\n  }\n\n  checkIfAllShipsPlaced() {\n    if (this.player.gameboard.board.length === 5) {\n      return true\n    }\n    return false\n  }\n\n  createArrayOfAllShipCoordinates() {\n    const allCoordinates = [];\n    for (let i = 0; i < this.player.gameboard.coordinatesArray.length; i++) {\n      for (let j = 0; j < this.player.gameboard.coordinatesArray[i].length; j++) {\n        allCoordinates.push(this.player.gameboard.coordinatesArray[i][j]);\n      }\n    }\n    return allCoordinates;\n  }\n\n  checkIfCoordinateInAllShipCoordinates(allCoordinates, k, l) {\n    if (this.element.children[k].dataset.coordinates === allCoordinates[l].toString()) {\n      return true;\n    }\n  }\n\n  loadShips() {\n    const allCoordinates = this.createArrayOfAllShipCoordinates();\n    for (let k = 0; k < this.element.children.length; k++) {\n      for (let l = 0; l < allCoordinates.length; l++) {\n        if (this.checkIfCoordinateInAllShipCoordinates(allCoordinates, k, l)) {\n          this.element.children[k].classList.add('shipIsPresent');\n        }\n      }\n    }\n  }\n\n  updateDisplay(coordinate) {\n    /// check if in all coordinates array\n    const allCoordinates = this.createArrayOfAllShipCoordinates();\n    for (let i = 0; i < this.missedAttacks.length; i++) {\n      if (coordinate === this.missedAttacks[i]) {\n        const box = this.children.find((x) => x.dataset.coordinates === coordinate.toString());\n        box.classList.add('missedAttack');\n        return;\n      }\n    }\n    const box = this.children.find((x) => x.dataset.coordinates === coordinate.toString());\n    box.classList.add('successfulAttack');\n  }\n\n  addBoxes() {\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        const box = new _Box_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](i, j);\n        this.element.appendChild(box.element);\n      }\n    }\n  }\n\n  handleShipPlacement(size, startcoordinates) {\n    if (Number(startcoordinates[1]) + Number(size - 1) <= 9) {\n      const coordinates = this.createArrayofCoordinatesForNewShip(startcoordinates, size);\n      this.player.gameboard.placeShip(size, coordinates);\n      this.loadShips();\n      return true\n    } else console.log(\"Won't fit!\");\n  }\n\n  createArrayofCoordinatesForNewShip(startcoordinates, size) {\n    const coordinates = [];\n    for (let i = 0; i < size; i++) {\n      coordinates.push([startcoordinates[0], startcoordinates[1] + i]);\n    }\n\n    return coordinates;\n  }\n\n  checkIfExistsAlready(coordinates, allShipCoordinates) {\n    for (let c of coordinates) {\n      if (allShipCoordinates.find((x) => x.toString() == c.toString())) {\n        return true\n      }\n    }\n  };\n\n  generateAIShips() {\n    const fleet = [2, 3, 3, 4, 5];\n    for (const f of fleet) {\n      let validPlacement = undefined\n      while (!validPlacement) {\n        const coordinate = this.roll()\n        let doesNotExceed9 = undefined;\n        if (coordinate[1] + f < 9) { doesNotExceed9 = true }\n        const newShipArray = this.createArrayofCoordinatesForNewShip(coordinate, f)\n        const doesNotExistAlready = this.checkIfExistsAlready(newShipArray, this.createArrayOfAllShipCoordinates())\n        if (!doesNotExistAlready && doesNotExceed9) {\n          this.player.gameboard.placeShip(f, newShipArray);\n          validPlacement = true\n        }\n      }\n    }\n    this.loadShips();\n  }\n\n  roll() {\n    const yCoordinate = Math.floor(Math.random() * 10);\n    const xCoordinate = Math.floor(Math.random() * 10);\n    return [yCoordinate, xCoordinate];\n  }\n\n  reset() {\n    this.player.resetGameboard();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grid);\n\n\n//# sourceURL=webpack://battleships/./src/Grid.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard.js */ \"./src/Gameboard.js\");\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper.js */ \"./src/helper.js\");\n\n\nconst Player = (name) => {\n  const gameboard = (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name);\n\n  const receiveAttack = (coordinates) => {\n    return obj.gameboard.receiveAttack(coordinates).coords;\n  };\n\n  // need to work on random attacks\n\n\n  \n  const roll = () => {\n    const move = Math.floor(Math.random() * (obj.gameboard.notDoneCoords.length - 1));\n    const coordinates = obj.gameboard.notDoneCoords[move];\n    return { coordinates, move };\n  };\n  const receiveRandomAttack = () => {\n    const roll = obj.roll();\n    const attack = obj.gameboard.receiveAttack(roll.coordinates);\n    const playedMove = obj.gameboard.notDoneCoords.splice(roll.move, 0);\n    obj.gameboard.doneCoords.push(playedMove);\n    obj.firedAttacks.push(attack);\n    return roll.coordinates;\n  };\n\n  const targetedAttack = () => {\n    const lastAttack = obj.firedAttacks[firedAttacks.length - 1].coords;\n    const leftSideOfLastAttack = [lastAttack[0], lastAttack[1] - 1];\n    const rightSideOfLastAttack = [lastAttack[0], lastAttack[1] + 1];\n    if (checkIfInDoneMoves(leftSideOfLastAttack)) {\n      receiveAttack(leftSideOfLastAttack);\n      return leftSideOfLastAttack\n    } else if (checkIfInDoneMoves(rightSideOfLastAttack)) {\n      receiveAttack(rightSideOfLastAttack);\n      return rightSideOfLastAttack\n    } else {\n      let coords = receiveRandomAttack()\n      return coords\n    }\n   \n  }\n\n  const checkIfInDoneMoves = (coordinates) =>  {\n    for (let c of gameboard.notDoneCoords) {\n      if ((0,_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(c, coordinates)) {\n        return true\n      }\n    }\n  }\n  const firedAttacks = [];\n\n  const obj = {\n    name, gameboard, receiveAttack, roll, receiveRandomAttack, firedAttacks, targetedAttack,\n  };\n  return obj;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack://battleships/./src/Player.js?");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ShipFactory = (size, coordinates) => {\n  let shipArray = new Array(size).fill(0);\n  let sunk = false;\n  const isSunk = () => {\n    if (shipArray.reduce((p, c) => p + c, 0) === obj.shipArray.length) {\n      obj.sunk = true;\n    }\n  };\n  const searchCoordinatesPosition = (coords) => {\n    for (let i = 0; i < coordinates.length; i++) {\n      if (coordinates[i].toString() == coords.toString()) {\n        return i;\n      }\n    }\n  }\n  const hit = (coords) => {\n    const index = searchCoordinatesPosition(coords);\n    obj.shipArray[index] = 1;\n    isSunk();\n  };\n\n  const obj = { shipArray, hit, sunk };\n  return obj;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShipFactory);\n\n\n//# sourceURL=webpack://battleships/./src/Ship.js?");

/***/ }),

/***/ "./src/dragndropship.js":
/*!******************************!*\
  !*** ./src/dragndropship.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DragNDropShip)\n/* harmony export */ });\nclass DragNDropShip {\n  constructor(size) {\n    this.element = document.createElement('div');\n    this.element.classList.add('dragndropship');\n    this.element.setAttribute('draggable', 'true');\n    this.element.dataset.size = size;\n    this.defineSize(size);\n  }\n\n  defineSize(size) {\n    for (let i=0; i < size; i++) {\n      let box = document.createElement('div');\n      box.classList = 'ship-segment';\n      this.element.appendChild(box);\n    }\n  }\n}\n\n\n//# sourceURL=webpack://battleships/./src/dragndropship.js?");

/***/ }),

/***/ "./src/gameOver.js":
/*!*************************!*\
  !*** ./src/gameOver.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameOver)\n/* harmony export */ });\nclass GameOver {\n  constructor() {\n    this.element = document.createElement('div');\n    this.element.classList = 'gameOver';\n    this.element.textContent = 'Game Over!'\n    this.button = document.createElement('button')\n    this.button.textContent = 'try again?'\n    this.element.appendChild(this.button)\n    }\n}\n\n//# sourceURL=webpack://battleships/./src/gameOver.js?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction compare(coord1, coord2) {\n  if (coord1[0] == coord2[0] && coord1[1] == coord2[1]) {\n    return true;\n  } return false;\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compare);\n\n//# sourceURL=webpack://battleships/./src/helper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ \"./src/Ship.js\");\n/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard.js */ \"./src/Gameboard.js\");\n/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player.js */ \"./src/Player.js\");\n/* harmony import */ var _manageDOM_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manageDOM.js */ \"./src/manageDOM.js\");\n/* harmony import */ var _Grid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Grid.js */ \"./src/Grid.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _gameOver_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gameOver.js */ \"./src/gameOver.js\");\n/* harmony import */ var _ship_container_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ship-container.js */ \"./src/ship-container.js\");\n\n\n\n\n\n\n\n\nlet turn = 1;\n\nconst content = document.querySelector('.content');\nlet shipContainer = new _ship_container_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\ndocument.querySelector('body').appendChild(shipContainer.element);\n\n\nlet playerGrid = new _Grid_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('player', 'player', takeFire);\nlet computerGrid = new _Grid_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('computer', 'computer', takeFire);\ncomputerGrid.children.forEach((child) => child.addEventListener('click', (event) => { takeFire(event); }));\n_manageDOM_js__WEBPACK_IMPORTED_MODULE_3__.handleDrag(playerGrid)\n\n\ncontent.appendChild(playerGrid.element);\ncontent.appendChild(computerGrid.element);\nplayerGrid.loadShips();\ncomputerGrid.generateAIShips();\nconst resetButton = document.querySelector('#reset');\nresetButton.addEventListener('click', restart)\n\nfunction takeFire(event) {\n  if (event.target.dataset.valid === 'true' && playerGrid.checkIfAllShipsPlaced()) {\n    turn += 1;\n    event.target.dataset.valid = 'false';\n    let coordinates = event.target.dataset.coordinates\n    computerGrid.player.receiveAttack(coordinates);\n    computerGrid.updateDisplay(coordinates);\n    checkIfGameOver(computerGrid)\n    takeComputerTurn();\n  }\n}\n\nfunction takeComputerTurn() {\n  const firedAttacks = playerGrid.player.firedAttacks\n  console.log(firedAttacks)\n  if (firedAttacks[0] == undefined || firedAttacks[firedAttacks.length - 1].hit == false) {\n    const coordinates = playerGrid.player.receiveRandomAttack();\n    playerGrid.updateDisplay(coordinates);\n    checkIfGameOver(playerGrid);\n  } else {\n    const coordinates = playerGrid.player.targetedAttack()\n    playerGrid.updateDisplay(coordinates);\n    checkIfGameOver(playerGrid);\n  }\n}\n\nfunction checkIfGameOver(player) {\n  let allShipsSunk = player.player.gameboard.allShipsSunk;\n  if (allShipsSunk) {\n    gameOver();\n  }\n}\n\nfunction gameOver() {\n  const modal = document.querySelector('.modal')\n  modal.style.display = 'block';\n}\n\nfunction restart() {\n  const modal = document.querySelector('.modal');\n  modal.style.display = 'none';\n  playerGrid.element.remove();\n  computerGrid.element.remove();\n  shipContainer.element.remove();\n  shipContainer = new _ship_container_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\n  document.querySelector('body').appendChild(shipContainer.element);\n  playerGrid = new _Grid_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('player', 'player', takeFire);\n  computerGrid = new _Grid_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('computer', 'computer', takeFire);\n  computerGrid.children.forEach((child) => child.addEventListener('click', (event) => { takeFire(event); }));\n  _manageDOM_js__WEBPACK_IMPORTED_MODULE_3__.handleDrag(playerGrid);\n\n  content.appendChild(playerGrid.element);\n  content.appendChild(computerGrid.element);\n  playerGrid.loadShips();\n  computerGrid.generateAIShips();\n}\n\n//# sourceURL=webpack://battleships/./src/index.js?");

/***/ }),

/***/ "./src/manageDOM.js":
/*!**************************!*\
  !*** ./src/manageDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"populateGrids\": () => (/* binding */ populateGrids),\n/* harmony export */   \"addBoxes\": () => (/* binding */ addBoxes),\n/* harmony export */   \"updateShips\": () => (/* binding */ updateShips),\n/* harmony export */   \"handleDrag\": () => (/* binding */ handleDrag)\n/* harmony export */ });\nfunction addBoxes(grid) {\n  for (let i = 0; i < 10; i++) {\n    for (let j = 0; j < 10; j++) {\n      const box = new Box(i, j);\n      grid.appendChild(box.element);\n    }\n  }\n}\n\nfunction populateGrids() {\n  const grids = document.querySelectorAll('.grid-container');\n  grids.forEach((grid) => addBoxes(grid));\n}\n\n\n\nfunction updateShips(grid, array) {\n  let allCoordinates = [];\n  for (let i =0 ; i < array.length; i++) {\n    for (let j = 0; j < array[i].length; j++) {\n      allCoordinates.push(array[i][j])\n    }\n  }\n\n  for (let k = 0; k < grid.children.length; k++) {\n    for (let l = 0; l < allCoordinates.length; l++) {\n      if (grid.children[k].dataset.coordinates === allCoordinates[l].toString()) {\n        grid.children[k].classList.add('shipIsPresent')\n      }\n    }\n  }\n}\n\nfunction handleDrag(playerGrid) {\n  let dragged;\n  document.addEventListener(\"drag\", function(event) {\n\n  });\n\n  document.addEventListener('dragstart', function(event) {\n    dragged = event.target\n    event.target.style.opacity = 0.1;\n  });\n\n  document.addEventListener('dragend', function(event) {\n    event.target.style.opacity = '';\n  });\n\n  document.addEventListener(\"dragover\", function(event) {\n    event.preventDefault();\n  }, false);\n\n  document.addEventListener('drop', function(event) {\n    event.preventDefault();\n    if (event.target.classList.contains('box')) {\n      let shipSize = dragged.dataset.size;\n      let startCoordinates = JSON.parse('[' + event.target.dataset.coordinates + ']') \n      event.target.dataset.coordinates;\n      event.target.classList.toggle('dragover');\n      const succesfulPlacement = playerGrid.handleShipPlacement(shipSize, startCoordinates)\n      if (succesfulPlacement) {\n        dragged.remove()\n      }\n    } \n    return\n  })\n\n}\n\n\n\n\n\n//# sourceURL=webpack://battleships/./src/manageDOM.js?");

/***/ }),

/***/ "./src/ship-container.js":
/*!*******************************!*\
  !*** ./src/ship-container.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ShipContainer)\n/* harmony export */ });\n/* harmony import */ var _dragndropship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragndropship.js */ \"./src/dragndropship.js\");\n\n\nclass ShipContainer {\n  constructor() {\n    this.element = document.createElement('div');\n    this.element.classList = 'ship-container'\n    this.dragNDropShip1 = new _dragndropship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2);\n    this.dragNDropShip2 = new _dragndropship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\n    this.dragNDropShip3 = new _dragndropship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\n    this.dragNDropShip4 = new _dragndropship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4);\n    this.dragNDropShip5 = new _dragndropship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5);\n\n    this.element.appendChild(this.dragNDropShip1.element);\n    this.element.appendChild(this.dragNDropShip2.element);\n    this.element.appendChild(this.dragNDropShip3.element);\n    this.element.appendChild(this.dragNDropShip4.element);\n    this.element.appendChild(this.dragNDropShip5.element);\n  }\n}\n\n//# sourceURL=webpack://battleships/./src/ship-container.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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