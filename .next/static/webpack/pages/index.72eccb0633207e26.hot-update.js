"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Slider */ \"./components/Slider.js\");\n/* harmony import */ var _components_Sections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Sections */ \"./components/Sections.js\");\n/* harmony import */ var _components_Navber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Navber */ \"./components/Navber.js\");\n/* harmony import */ var _components_Catagory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Catagory */ \"./components/Catagory.js\");\n/* harmony import */ var _components_RamadanSchedule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/RamadanSchedule */ \"./components/RamadanSchedule.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_Tabble__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Tabble */ \"./components/Tabble.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_RamadanDataContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/RamadanDataContext */ \"./components/RamadanDataContext.js\");\n/* eslint-disable react/react-in-jsx-scope */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)();\n    const [searchDistrict, setSearchDistrict] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(\"dhaka\");\n    const [currentPosition, setCurrentPosition] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{\n        if (navigator.geolocation && currentPosition) {\n            navigator.geolocation.watchPosition(showPosition, error);\n        } else {}\n        function showPosition(position) {\n            setCurrentPosition(true);\n            const lat = position.coords.latitude;\n            const long = position.coords.longitude;\n            fetch(\"https://ramadan-server-by-tajbir.vercel.app/locations?lat=\".concat(lat, \"&long=\").concat(long)).then((res)=>res.json()).then((datas)=>setData(datas)).catch((err)=>console.log(err));\n        }\n        function error(error) {\n            if (error) {\n                const district = searchDistrict;\n                fetch(\"https://ramadan-server-by-tajbir.vercel.app/district?district=\".concat(district)).then((res)=>res.json()).then((datas)=>setData(datas)).catch((err)=>console.log(err));\n            }\n        }\n    }, [\n        currentPosition\n    ]);\n    // console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RamadanDataContext__WEBPACK_IMPORTED_MODULE_11__[\"default\"].Provider, {\n            value: {\n                data,\n                setData,\n                setSearchDistrict,\n                searchDistrict,\n                currentPosition\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navber__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sections__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"py-4 bg-white\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Catagory__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tabble__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"aqEXFkLcG1klT/R4EmVBPbwYYz8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTJDOztBQWNyQ0E7QUFieUI7QUFFVTtBQUNBO0FBQ0k7QUFDSjtBQUNJO0FBQ2M7QUFDbEI7QUFDRDtBQUNJO0FBQ3NCO0FBSW5ELFNBQVNhOztJQUN0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osZ0RBQVFBO0lBQ2hDLE1BQU0sQ0FBQ0ssZ0JBQWdCQyxrQkFBa0IsR0FBR04sZ0RBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDTyxpQkFBaUJDLG1CQUFtQixHQUFHUixnREFBUUEsQ0FBQztJQUV2REQsaURBQVNBLENBQUM7UUFDUixJQUFJVSxVQUFVQyxXQUFXLElBQUlILGlCQUFpQjtZQUM1Q0UsVUFBVUMsV0FBVyxDQUFDQyxhQUFhLENBQUNDLGNBQWNDO1FBQ3BELE9BQUssQ0FFTDtRQUNBLFNBQVNELGFBQWFFLFFBQVE7WUFDNUJOLG1CQUFtQjtZQUVuQixNQUFNTyxNQUFNRCxTQUFTRSxNQUFNLENBQUNDLFFBQVE7WUFDcEMsTUFBTUMsT0FBT0osU0FBU0UsTUFBTSxDQUFDRyxTQUFTO1lBRXRDQyxNQUNFLDZEQUF5RUYsT0FBWkgsS0FBSSxVQUFhLE9BQUxHLE9BRXhFRyxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxJQUN0QkYsSUFBSSxDQUFDLENBQUNHLFFBQVVwQixRQUFRb0IsUUFDeEJDLEtBQUssQ0FBQyxDQUFDQyxNQUFRQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2hDO1FBRUEsU0FBU2IsTUFBTUEsS0FBSztZQUNsQixJQUFJQSxPQUFPO2dCQUNULE1BQU1nQixXQUFXeEI7Z0JBRWpCZSxNQUNFLGlFQUEwRSxPQUFUUyxXQUVoRVIsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksSUFDdEJGLElBQUksQ0FBQyxDQUFDRyxRQUFVcEIsUUFBUW9CLFFBQ3hCQyxLQUFLLENBQUMsQ0FBQ0MsTUFBUUMsUUFBUUMsR0FBRyxDQUFDRjtZQUNoQztRQUNGO0lBQ0YsR0FBRTtRQUFDbkI7S0FBZ0I7SUFFbkIscUJBQXFCO0lBQ3JCLHFCQUNFLDhEQUFDdUI7a0JBQ0MsNEVBQUM3QixnRkFBMkI7WUFDMUIrQixPQUFPO2dCQUNMN0I7Z0JBQ0FDO2dCQUNBRTtnQkFDQUQ7Z0JBQ0FFO1lBRUY7OzhCQUVBLDhEQUFDYiwwREFBTUE7Ozs7OzhCQUNQLDhEQUFDSCwwREFBTUE7Ozs7OzhCQUVQLDhEQUFDRSw0REFBUUE7Ozs7OzhCQUNULDhEQUFDcUM7b0JBQUlHLFdBQVU7OEJBQ2IsNEVBQUN0Qyw0REFBUUE7Ozs7Ozs7Ozs7OEJBRVgsOERBQUNHLDBEQUFLQTs7Ozs7OEJBQ04sOERBQUNELDBEQUFNQTs7Ozs7Ozs7Ozs7Ozs7OztBQUlmO0dBaEV3Qks7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9yZWFjdC1pbi1qc3gtc2NvcGUgKi9cclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IEludGVyIH0gZnJvbSBcIm5leHQvZm9udC9nb29nbGVcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvU2xpZGVyXCI7XHJcbmltcG9ydCBTZWN0aW9ucyBmcm9tIFwiQC9jb21wb25lbnRzL1NlY3Rpb25zXCI7XHJcbmltcG9ydCBOYXZiZXIgZnJvbSBcIkAvY29tcG9uZW50cy9OYXZiZXJcIjtcclxuaW1wb3J0IENhdGFnb3J5IGZyb20gXCJAL2NvbXBvbmVudHMvQ2F0YWdvcnlcIjtcclxuaW1wb3J0IFByYXllclRpbWVUYWJsZSBmcm9tIFwiQC9jb21wb25lbnRzL1JhbWFkYW5TY2hlZHVsZVwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCJAL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwiQC9jb21wb25lbnRzL1RhYmJsZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSYW1hZGFuRGF0YUNvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmFtYWRhbkRhdGFDb250ZXh0XCI7XHJcblxyXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogW1wibGF0aW5cIl0gfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3NlYXJjaERpc3RyaWN0LCBzZXRTZWFyY2hEaXN0cmljdF0gPSB1c2VTdGF0ZShcImRoYWthXCIpO1xyXG4gIGNvbnN0IFtjdXJyZW50UG9zaXRpb24sIHNldEN1cnJlbnRQb3NpdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uICYmIGN1cnJlbnRQb3NpdGlvbikge1xyXG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24ud2F0Y2hQb3NpdGlvbihzaG93UG9zaXRpb24sIGVycm9yKTtcclxuICAgIH1lbHNle1xyXG5cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNob3dQb3NpdGlvbihwb3NpdGlvbikge1xyXG4gICAgICBzZXRDdXJyZW50UG9zaXRpb24odHJ1ZSk7XHJcblxyXG4gICAgICBjb25zdCBsYXQgPSBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGU7XHJcbiAgICAgIGNvbnN0IGxvbmcgPSBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xyXG5cclxuICAgICAgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vcmFtYWRhbi1zZXJ2ZXItYnktdGFqYmlyLnZlcmNlbC5hcHAvbG9jYXRpb25zP2xhdD0ke2xhdH0mbG9uZz0ke2xvbmd9YFxyXG4gICAgICApXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YXMpID0+IHNldERhdGEoZGF0YXMpKVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlcnJvcihlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBkaXN0cmljdCA9IHNlYXJjaERpc3RyaWN0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZldGNoKFxyXG4gICAgICAgICAgYGh0dHBzOi8vcmFtYWRhbi1zZXJ2ZXItYnktdGFqYmlyLnZlcmNlbC5hcHAvZGlzdHJpY3Q/ZGlzdHJpY3Q9JHtkaXN0cmljdH1gXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgIC50aGVuKChkYXRhcykgPT4gc2V0RGF0YShkYXRhcykpXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFtjdXJyZW50UG9zaXRpb25dKTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxSYW1hZGFuRGF0YUNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgZGF0YSxcclxuICAgICAgICAgIHNldERhdGEsXHJcbiAgICAgICAgICBzZXRTZWFyY2hEaXN0cmljdCxcclxuICAgICAgICAgIHNlYXJjaERpc3RyaWN0LFxyXG4gICAgICAgICAgY3VycmVudFBvc2l0aW9uLFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxOYXZiZXIgLz5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgey8qIDxTbGlkZXIvPiAqL31cclxuICAgICAgICA8U2VjdGlvbnMgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTQgYmctd2hpdGVcIj5cclxuICAgICAgICAgIDxDYXRhZ29yeSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxUYWJsZSAvPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9SYW1hZGFuRGF0YUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJpbnRlciIsIkltYWdlIiwiSGVhZGVyIiwiU2xpZGVyIiwiU2VjdGlvbnMiLCJOYXZiZXIiLCJDYXRhZ29yeSIsIlByYXllclRpbWVUYWJsZSIsIkZvb3RlciIsIlRhYmxlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSYW1hZGFuRGF0YUNvbnRleHQiLCJIb21lIiwiZGF0YSIsInNldERhdGEiLCJzZWFyY2hEaXN0cmljdCIsInNldFNlYXJjaERpc3RyaWN0IiwiY3VycmVudFBvc2l0aW9uIiwic2V0Q3VycmVudFBvc2l0aW9uIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJ3YXRjaFBvc2l0aW9uIiwic2hvd1Bvc2l0aW9uIiwiZXJyb3IiLCJwb3NpdGlvbiIsImxhdCIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZyIsImxvbmdpdHVkZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhcyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImRpc3RyaWN0IiwiZGl2IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});