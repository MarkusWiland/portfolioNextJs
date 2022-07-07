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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/auth/Auth.js":
/*!*********************************!*\
  !*** ./components/auth/Auth.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthProvider = ({ supabaseAdmin , ...props })=>{\n    const { 0: session , 1: setSession  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const activeSession = supabaseAdmin.auth.session();\n        setSession(activeSession);\n        setUser((activeSession === null || activeSession === void 0 ? void 0 : activeSession.user) ?? null);\n        const { data: authListener  } = supabaseAdmin.auth.onAuthStateChange((event, currentSession)=>{\n            setSession(currentSession);\n            setUser((currentSession === null || currentSession === void 0 ? void 0 : currentSession.user) ?? null);\n            fetch(\"/api/auth\", {\n                method: \"POST\",\n                headers: new Headers({\n                    \"Content-Type\": \"application/json\"\n                }),\n                credentials: \"same-origin\",\n                body: JSON.stringify({\n                    event,\n                    session: currentSession\n                })\n            }).then((res)=>res.json());\n        });\n        return ()=>{\n            authListener === null || authListener === void 0 ? void 0 : authListener.unsubscribe();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            session,\n            user,\n            signOut: ()=>supabaseAdmin.auth.signOut()\n        },\n        ...props\n    }, void 0, false, {\n        fileName: \"/Users/wiland/Hemsidor/NextJS/portmarkus/portfolioNextJs/components/auth/Auth.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\nconst useAuth = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    if (context === null) {\n        return {\n            redirectTo: \"\"\n        };\n    }\n    if (context === undefined) {\n        throw new Error(\"useAuth must be used within an AuthProvider\");\n    }\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F1dGgvQXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBdUU7QUFFaEUsTUFBTUksV0FBVyxpQkFBR0osb0RBQWEsRUFBRSxDQUFDO0FBRXBDLE1BQU1LLFlBQVksR0FBRyxDQUFDLEVBQUVDLGFBQWEsR0FBRSxHQUFHQyxLQUFLLEVBQUUsR0FBSztJQUMzRCxNQUFNLEtBQUNDLE9BQU8sTUFBRUMsVUFBVSxNQUFJTiwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUM1QyxNQUFNLEtBQUNPLElBQUksTUFBRUMsT0FBTyxNQUFJUiwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUV0Q0QsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsTUFBTVUsYUFBYSxHQUFHTixhQUFhLENBQUNPLElBQUksQ0FBQ0wsT0FBTyxFQUFFO1FBQ2xEQyxVQUFVLENBQUNHLGFBQWEsQ0FBQyxDQUFDO1FBQzFCRCxPQUFPLENBQUNDLENBQUFBLGFBQWEsYUFBYkEsYUFBYSxXQUFNLEdBQW5CQSxLQUFBQSxDQUFtQixHQUFuQkEsYUFBYSxDQUFFRixJQUFJLEtBQUksSUFBSSxDQUFDLENBQUM7UUFFckMsTUFBTSxFQUFFSSxJQUFJLEVBQUVDLFlBQVksR0FBRSxHQUFHVCxhQUFhLENBQUNPLElBQUksQ0FBQ0csaUJBQWlCLENBQ2pFLENBQUNDLEtBQUssRUFBRUMsY0FBYyxHQUFLO1lBQ3pCVCxVQUFVLENBQUNTLGNBQWMsQ0FBQyxDQUFDO1lBQzNCUCxPQUFPLENBQUNPLENBQUFBLGNBQWMsYUFBZEEsY0FBYyxXQUFNLEdBQXBCQSxLQUFBQSxDQUFvQixHQUFwQkEsY0FBYyxDQUFFUixJQUFJLEtBQUksSUFBSSxDQUFDLENBQUM7WUFDdENTLEtBQUssQ0FBQyxXQUFXLEVBQUU7Z0JBQ2pCQyxNQUFNLEVBQUUsTUFBTTtnQkFDZEMsT0FBTyxFQUFFLElBQUlDLE9BQU8sQ0FBQztvQkFBRSxjQUFjLEVBQUUsa0JBQWtCO2lCQUFFLENBQUM7Z0JBQzVEQyxXQUFXLEVBQUUsYUFBYTtnQkFDMUJDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUM7b0JBQUVULEtBQUs7b0JBQUVULE9BQU8sRUFBRVUsY0FBYztpQkFBRSxDQUFDO2FBQ3pELENBQUMsQ0FBQ1MsSUFBSSxDQUFDLENBQUNDLEdBQUcsR0FBS0EsR0FBRyxDQUFDQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQzlCLENBQ0Y7UUFFRCxPQUFPLElBQU07WUFDWGQsWUFBWSxhQUFaQSxZQUFZLFdBQWEsR0FBekJBLEtBQUFBLENBQXlCLEdBQXpCQSxZQUFZLENBQUVlLFdBQVcsRUFBRSxDQUFDO1NBQzdCLENBQUM7S0FDSCxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1AscUJBQ0UsOERBQUMxQixXQUFXLENBQUMyQixRQUFRO1FBQ25CQyxLQUFLLEVBQUU7WUFDTHhCLE9BQU87WUFDUEUsSUFBSTtZQUNKdUIsT0FBTyxFQUFFLElBQU0zQixhQUFhLENBQUNPLElBQUksQ0FBQ29CLE9BQU8sRUFBRTtTQUM1QztRQUNBLEdBQUcxQixLQUFLOzs7OztpQkFDVCxDQUNGO0NBQ0gsQ0FBQztBQUVLLE1BQU0yQixPQUFPLEdBQUcsSUFBTTtJQUMzQixNQUFNQyxPQUFPLEdBQUdsQyxpREFBVSxDQUFDRyxXQUFXLENBQUM7SUFDdkMsSUFBSStCLE9BQU8sS0FBSyxJQUFJLEVBQUU7UUFDcEIsT0FBTztZQUFFQyxVQUFVLEVBQUUsRUFBRTtTQUFFLENBQUM7S0FDM0I7SUFDRCxJQUFJRCxPQUFPLEtBQUtFLFNBQVMsRUFBRTtRQUN6QixNQUFNLElBQUlDLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO0tBQ2hFO0lBQ0QsT0FBT0gsT0FBTyxDQUFDO0NBQ2hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9jb21wb25lbnRzL2F1dGgvQXV0aC5qcz8xM2RkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgc3VwYWJhc2VBZG1pbiwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBbc2Vzc2lvbiwgc2V0U2Vzc2lvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBhY3RpdmVTZXNzaW9uID0gc3VwYWJhc2VBZG1pbi5hdXRoLnNlc3Npb24oKTtcbiAgICBzZXRTZXNzaW9uKGFjdGl2ZVNlc3Npb24pO1xuICAgIHNldFVzZXIoYWN0aXZlU2Vzc2lvbj8udXNlciA/PyBudWxsKTtcblxuICAgIGNvbnN0IHsgZGF0YTogYXV0aExpc3RlbmVyIH0gPSBzdXBhYmFzZUFkbWluLmF1dGgub25BdXRoU3RhdGVDaGFuZ2UoXG4gICAgICAoZXZlbnQsIGN1cnJlbnRTZXNzaW9uKSA9PiB7XG4gICAgICAgIHNldFNlc3Npb24oY3VycmVudFNlc3Npb24pO1xuICAgICAgICBzZXRVc2VyKGN1cnJlbnRTZXNzaW9uPy51c2VyID8/IG51bGwpO1xuICAgICAgICBmZXRjaChcIi9hcGkvYXV0aFwiLCB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0pLFxuICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBldmVudCwgc2Vzc2lvbjogY3VycmVudFNlc3Npb24gfSksXG4gICAgICAgIH0pLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBhdXRoTGlzdGVuZXI/LnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgc2Vzc2lvbixcbiAgICAgICAgdXNlcixcbiAgICAgICAgc2lnbk91dDogKCkgPT4gc3VwYWJhc2VBZG1pbi5hdXRoLnNpZ25PdXQoKSxcbiAgICAgIH19XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG4gIGlmIChjb250ZXh0ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHsgcmVkaXJlY3RUbzogXCJcIiB9O1xuICB9XG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VBdXRoIG11c3QgYmUgdXNlZCB3aXRoaW4gYW4gQXV0aFByb3ZpZGVyXCIpO1xuICB9XG4gIHJldHVybiBjb250ZXh0O1xufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJzdXBhYmFzZUFkbWluIiwicHJvcHMiLCJzZXNzaW9uIiwic2V0U2Vzc2lvbiIsInVzZXIiLCJzZXRVc2VyIiwiYWN0aXZlU2Vzc2lvbiIsImF1dGgiLCJkYXRhIiwiYXV0aExpc3RlbmVyIiwib25BdXRoU3RhdGVDaGFuZ2UiLCJldmVudCIsImN1cnJlbnRTZXNzaW9uIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiSGVhZGVycyIsImNyZWRlbnRpYWxzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsInVuc3Vic2NyaWJlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInNpZ25PdXQiLCJ1c2VBdXRoIiwiY29udGV4dCIsInJlZGlyZWN0VG8iLCJ1bmRlZmluZWQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/auth/Auth.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_tippy_dist_tippy_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-tippy/dist/tippy.css */ \"./node_modules/react-tippy/dist/tippy.css\");\n/* harmony import */ var react_tippy_dist_tippy_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_tippy_dist_tippy_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_auth_Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/auth/Auth */ \"./components/auth/Auth.js\");\n/* harmony import */ var _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/supabaseClient */ \"./utils/supabaseClient.js\");\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth_Auth__WEBPACK_IMPORTED_MODULE_4__.AuthProvider, {\n        supabaseAdmin: _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_5__.supabase,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/wiland/Hemsidor/NextJS/portmarkus/portfolioNextJs/pages/_app.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/wiland/Hemsidor/NextJS/portmarkus/portfolioNextJs/pages/_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBZ0M7QUFDRTtBQUNFO0FBQ21CO0FBQ1c7QUFDbEUsU0FBU0ksS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDdkMscUJBQ0UsOERBQUNMLCtEQUFZO1FBQUNDLGFBQWEsRUFBRUMsMkRBQVE7a0JBQ25DLDRFQUFDRSxTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7Z0JBQUk7Ozs7O1lBQ2YsQ0FDZjtDQUNIO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5zY3NzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcInJlYWN0LXRpcHB5L2Rpc3QvdGlwcHkuY3NzXCI7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9hdXRoL0F1dGhcIjtcbmltcG9ydCB7IHN1cGFiYXNlQWRtaW4sIHN1cGFiYXNlIH0gZnJvbSBcIi4uL3V0aWxzL3N1cGFiYXNlQ2xpZW50XCI7XG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QXV0aFByb3ZpZGVyIHN1cGFiYXNlQWRtaW49e3N1cGFiYXNlfT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0F1dGhQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiQXV0aFByb3ZpZGVyIiwic3VwYWJhc2VBZG1pbiIsInN1cGFiYXNlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./utils/supabaseClient.js":
/*!*********************************!*\
  !*** ./utils/supabaseClient.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"supabase\": () => (/* binding */ supabase),\n/* harmony export */   \"supabaseAdmin\": () => (/* binding */ supabaseAdmin)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabaseUrl = \"https://viavzfdziwgbjvrkzhmz.supabase.co\";\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpYXZ6ZmR6aXdnYmp2cmt6aG16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY0MDE5OTQsImV4cCI6MTk3MTk3Nzk5NH0.v4OaXPSKZ13V3Om-zXXZ3ytToZHbcK8Iqo4lTUmHkPI\";\nconst supabaseSecretKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpYXZ6ZmR6aXdnYmp2cmt6aG16Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1NjQwMTk5NCwiZXhwIjoxOTcxOTc3OTk0fQ.kYpJZeZ0C8pTqYH98Zxg4vnGpZ6aOAQyugkibSmBMh0\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey);\nconst supabaseAdmin = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseSecretKey);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9zdXBhYmFzZUNsaWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXFEO0FBRXJELE1BQU1DLFdBQVcsR0FBR0MsMENBQW9DO0FBQ3hELE1BQU1HLGVBQWUsR0FBR0gsa05BQXlDO0FBQ2pFLE1BQU1LLGlCQUFpQixHQUFHTCw2TkFBaUQ7QUFDcEUsTUFBTU8sUUFBUSxHQUFHVCxtRUFBWSxDQUFDQyxXQUFXLEVBQUVJLGVBQWUsQ0FBQyxDQUFDO0FBQzVELE1BQU1LLGFBQWEsR0FBR1YsbUVBQVksQ0FBQ0MsV0FBVyxFQUFFTSxpQkFBaUIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vdXRpbHMvc3VwYWJhc2VDbGllbnQuanM/NWFkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XG5cbmNvbnN0IHN1cGFiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMO1xuY29uc3Qgc3VwYWJhc2VBbm9uS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVk7XG5jb25zdCBzdXBhYmFzZVNlY3JldEtleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVk7XG5leHBvcnQgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwsIHN1cGFiYXNlQW5vbktleSk7XG5leHBvcnQgY29uc3Qgc3VwYWJhc2VBZG1pbiA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VTZWNyZXRLZXkpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsInN1cGFiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCIsInN1cGFiYXNlQW5vbktleSIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZIiwic3VwYWJhc2VTZWNyZXRLZXkiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9TRVJWSUNFX1JPTEVfS0VZIiwic3VwYWJhc2UiLCJzdXBhYmFzZUFkbWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/supabaseClient.js\n");

/***/ }),

/***/ "./node_modules/react-tippy/dist/tippy.css":
/*!*************************************************!*\
  !*** ./node_modules/react-tippy/dist/tippy.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();