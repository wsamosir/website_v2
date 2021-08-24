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

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/bundle.min.css\");\n\n//# sourceURL=webpack://wsamosir.github.io/./styles/style.scss?");

/***/ }),

/***/ "./scripts/helpers.js":
/*!****************************!*\
  !*** ./scripts/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isDefined\": () => (/* binding */ isDefined)\n/* harmony export */ });\nfunction isDefined(variable) {\r\n    return !(typeof variable === 'undefined' || variable === null) \r\n}\n\n//# sourceURL=webpack://wsamosir.github.io/./scripts/helpers.js?");

/***/ }),

/***/ "./scripts/root.js":
/*!*************************!*\
  !*** ./scripts/root.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./scripts/helpers.js\");\n\r\n\r\nfunction createDisplay(config) {\r\n    \r\n    var div = document.createElement('div')\r\n    div.classList.add('standard')\r\n    var imageContainer  = document.createElement('a')\r\n    imageContainer.classList.add('image-container')\r\n    imageContainer.classList.add('iframe-popup')\r\n    var textContainer   = document.createElement('div')\r\n    textContainer.classList.add('text-container')\r\n    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isDefined)(config.href)) {\r\n        imageContainer.href = config.href\r\n    }\r\n\r\n    div.appendChild(imageContainer)\r\n    div.appendChild(textContainer)\r\n\r\n    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isDefined)(config.image)) {\r\n        var img = document.createElement('img')\r\n        img.onload = function() {\r\n            msnry.layout()\r\n        }\r\n        img.src = config.image\r\n        imageContainer.appendChild(img)\r\n    }\r\n\r\n    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isDefined)(config.title)) {\r\n        var title = document.createElement('h3')\r\n        title.innerHTML = config.title\r\n        textContainer.appendChild(title)\r\n    }\r\n\r\n    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isDefined)(config.description)) {\r\n        var pDiv = document.createElement('div')\r\n        var p = document.createElement('p')\r\n        p.innerHTML = config.description\r\n        pDiv.appendChild(p)\r\n        textContainer.appendChild(pDiv)\r\n    }\r\n    \r\n\r\n    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isDefined)(config.links)) {\r\n\r\n        var linkContainer = document.createElement('div')\r\n        linkContainer.classList.add('link-container')\r\n        \r\n        config.links.forEach(link => {\r\n\r\n            var linkDiv = document.createElement('a')\r\n            // var linkButton = document.createElement('div')\r\n            if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isDefined)(link.link)) linkDiv.href = link.link\r\n            linkDiv.classList.add('link-button')\r\n            linkDiv.classList.add('iframe-popup')\r\n            linkDiv.innerHTML = link.name\r\n            \r\n            // linkDiv.appendChild(linkButton)\r\n            linkContainer.appendChild(linkDiv)\r\n\r\n        });\r\n\r\n        div.appendChild(linkContainer)\r\n\r\n    }\r\n\r\n\r\n    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isDefined)(config.tags)) {\r\n\r\n        var tagContainer = document.createElement('div')\r\n        tagContainer.classList.add('tag-container')\r\n\r\n        config.tags.forEach(tagId => {\r\n            \r\n            var tagObject = ALL_TAGS.filter(obj => {\r\n                return obj.id === tagId\r\n            })[0]\r\n              \r\n            var tagDiv = document.createElement('div')\r\n            tagDiv.style.backgroundImage = \"url('\" + tagObject.image + \"')\"\r\n\r\n            tagDiv.classList.add('tag')\r\n            tagContainer.appendChild(tagDiv)\r\n\r\n            // var tagDescription = document.createElement('div')\r\n            // tagDescription.classList.add('tag-description')\r\n            \r\n            // var span = document.createElement('h4')\r\n            // span.innerHTML = tagObject.name\r\n            \r\n            // var span2 = document.createElement('p')\r\n            // span2.innerHTML = tagObject.description\r\n            \r\n            // tagDescription.appendChild(span)\r\n            // tagDescription.appendChild(span2)\r\n            // tagDiv.appendChild(tagDescription)\r\n            \r\n            tagDiv.setAttribute('title', tagObject.name) \r\n\r\n        });\r\n\r\n\r\n        div.appendChild(tagContainer)\r\n\r\n\r\n    }\r\n\r\n\r\n    return div\r\n}\r\n\r\nPAGE_CONFIG.forEach(object => {\r\n    \r\n    var mainContainer = document.getElementById('main-container')\r\n\r\n    let type = object.type\r\n    let config = object.config\r\n    let classNames = object.class\r\n\r\n    switch (type) {\r\n\r\n        case 'standard':\r\n            var div = createDisplay(config)\r\n            break\r\n\r\n    }\r\n\r\n    classNames.forEach(className => {\r\n        div.classList.add(className)\r\n    });\r\n\r\n    div.classList.add('component')\r\n\r\n    mainContainer.appendChild(div)\r\n\r\n});\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://wsamosir.github.io/./scripts/root.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./scripts/root.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./styles/style.scss");
/******/ 	
/******/ })()
;