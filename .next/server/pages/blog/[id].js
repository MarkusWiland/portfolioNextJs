"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/blog/[id]";
exports.ids = ["pages/blog/[id]"];
exports.modules = {

/***/ "./pages/blog/[id].js":
/*!****************************!*\
  !*** ./pages/blog/[id].js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst post = ({ data  })=>{\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.body\n    }, void 0, false, {\n        fileName: \"/Users/wiland/Hemsidor/NextJS/portfolioNextJs/pages/blog/[id].js\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (post);\nasync function getStaticProps({ params  }) {\n    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);\n    const data = await response.json();\n    return {\n        props: {\n            data\n        }\n    };\n}\nasync function getStaticPaths() {\n    const response = await fetch(\"https://jsonplaceholder.typicode.com/posts\");\n    const data = await response.json();\n    const paths = data.map((post1)=>{\n        return {\n            params: {\n                id: post1.id.toString()\n            }\n        };\n    });\n    console.log(paths);\n    return {\n        paths,\n        fallback: false\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBRTFCLE1BQU1DLElBQUksR0FBRyxDQUFDLEVBQUVDLElBQUksR0FBRSxHQUFLO0lBQ3pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDLENBQUM7SUFDbEIscUJBQU8sOERBQUNHLEtBQUc7a0JBQUVILElBQUksQ0FBQ0ksSUFBSTs7Ozs7aUJBQU8sQ0FBQztDQUMvQjtBQUVELGlFQUFlTCxJQUFJLEVBQUM7QUFDYixlQUFlTSxjQUFjLENBQUMsRUFBRUMsTUFBTSxHQUFFLEVBQUU7SUFDL0MsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FDMUIsQ0FBQywyQ0FBMkMsRUFBRUYsTUFBTSxDQUFDRyxFQUFFLENBQUMsQ0FBQyxDQUMxRDtJQUNELE1BQU1ULElBQUksR0FBRyxNQUFNTyxRQUFRLENBQUNHLElBQUksRUFBRTtJQUVsQyxPQUFPO1FBQ0xDLEtBQUssRUFBRTtZQUFFWCxJQUFJO1NBQUU7S0FDaEIsQ0FBQztDQUNIO0FBQ00sZUFBZVksY0FBYyxHQUFHO0lBQ3JDLE1BQU1MLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsNENBQTRDLENBQUM7SUFDMUUsTUFBTVIsSUFBSSxHQUFHLE1BQU1PLFFBQVEsQ0FBQ0csSUFBSSxFQUFFO0lBQ2xDLE1BQU1HLEtBQUssR0FBR2IsSUFBSSxDQUFDYyxHQUFHLENBQUMsQ0FBQ2YsS0FBSSxHQUFLO1FBQy9CLE9BQU87WUFDTE8sTUFBTSxFQUFFO2dCQUNORyxFQUFFLEVBQUVWLEtBQUksQ0FBQ1UsRUFBRSxDQUFDTSxRQUFRLEVBQUU7YUFDdkI7U0FDRixDQUFDO0tBQ0gsQ0FBQztJQUVGZCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1csS0FBSyxDQUFDLENBQUM7SUFDbkIsT0FBTztRQUNMQSxLQUFLO1FBQ0xHLFFBQVEsRUFBRSxLQUFLO0tBQ2hCLENBQUM7Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3BhZ2VzL2Jsb2cvW2lkXS5qcz81YzllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgcG9zdCA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgcmV0dXJuIDxkaXY+e2RhdGEuYm9keX08L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3N0O1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyR7cGFyYW1zLmlkfWBcbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGRhdGEgfSxcbiAgfTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c1wiKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgcGF0aHMgPSBkYXRhLm1hcCgocG9zdCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgaWQ6IHBvc3QuaWQudG9TdHJpbmcoKSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSk7XG5cbiAgY29uc29sZS5sb2cocGF0aHMpO1xuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInBvc3QiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsImJvZHkiLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJpZCIsImpzb24iLCJwcm9wcyIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJtYXAiLCJ0b1N0cmluZyIsImZhbGxiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/[id].js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blog/[id].js"));
module.exports = __webpack_exports__;

})();