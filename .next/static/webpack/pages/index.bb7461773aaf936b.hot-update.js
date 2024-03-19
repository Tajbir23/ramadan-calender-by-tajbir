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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Slider */ \"./components/Slider.js\");\n/* harmony import */ var _components_Sections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Sections */ \"./components/Sections.js\");\n/* harmony import */ var _components_Navber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Navber */ \"./components/Navber.js\");\n/* harmony import */ var _components_Catagory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Catagory */ \"./components/Catagory.js\");\n/* harmony import */ var _components_RamadanSchedule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/RamadanSchedule */ \"./components/RamadanSchedule.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_Tabble__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Tabble */ \"./components/Tabble.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_RamadanDataContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/RamadanDataContext */ \"./components/RamadanDataContext.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);\n/* eslint-disable react/react-in-jsx-scope */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    var _data_data_data_date_gregorian, _data_data_data_date, _data_data_data, _data_data, _data_data_data_date_gregorian_weekday, _data_data_data_date_gregorian1, _data_data_data_date1, _data_data_data1, _data_data1;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)();\n    const [searchDistrict, setSearchDistrict] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(\"dhaka\");\n    const [currentPosition, setCurrentPosition] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(true);\n    // console.log(searchDistrict)\n    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{\n        window.onload = ()=>{\n            window.reload;\n        };\n        // console.log(navigator.geolocation)\n        if (navigator.geolocation.watchPosition) {\n            // console.log(navigator.geolocation)\n            navigator.geolocation.watchPosition(showPosition, error);\n        }\n        function showPosition(position) {\n            // setCurrentPosition(true);\n            const lat = position.coords.latitude;\n            const long = position.coords.longitude;\n            fetch(\"https://ramadan-calender-by-tajbir.onrender.com/locations?lat=\".concat(lat, \"&long=\").concat(long)).then((res)=>res.json()).then((datas)=>setData(datas)).catch((err)=>console.log(err));\n        }\n        function error(error) {\n            if (error) {\n                setCurrentPosition(false);\n                const district = searchDistrict;\n                fetch(\"https://ramadan-calender-by-tajbir.onrender.com/district?district=\".concat(district)).then((res)=>res.json()).then((datas)=>setData(datas)).catch((err)=>console.log(err));\n            }\n        }\n    }, [\n        searchDistrict\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{\n        // setCurrentPosition(false)\n        if (currentPosition === false) {\n            const district = searchDistrict;\n            console.log(district);\n            fetch(\"https://ramadan-calender-by-tajbir.onrender.com/district?district=\".concat(district)).then((res)=>res.json()).then((datas)=>setData(datas)).catch((err)=>console.log(err));\n        }\n    }, [\n        currentPosition,\n        searchDistrict\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_12___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Ramadan calender bangladesh time\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charSet: \"utf-8\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Ramadan calender bangladesh time\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"romjan, ramadan, bangladesh, time table, timetable, \".concat(searchDistrict, \", \").concat(data === null || data === void 0 ? void 0 : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : (_data_data_data = _data_data.data) === null || _data_data_data === void 0 ? void 0 : (_data_data_data_date = _data_data_data.date) === null || _data_data_data_date === void 0 ? void 0 : (_data_data_data_date_gregorian = _data_data_data_date.gregorian) === null || _data_data_data_date_gregorian === void 0 ? void 0 : _data_data_data_date_gregorian.date, \", \").concat(data === null || data === void 0 ? void 0 : (_data_data1 = data.data) === null || _data_data1 === void 0 ? void 0 : (_data_data_data1 = _data_data1.data) === null || _data_data_data1 === void 0 ? void 0 : (_data_data_data_date1 = _data_data_data1.date) === null || _data_data_data_date1 === void 0 ? void 0 : (_data_data_data_date_gregorian1 = _data_data_data_date1.gregorian) === null || _data_data_data_date_gregorian1 === void 0 ? void 0 : (_data_data_data_date_gregorian_weekday = _data_data_data_date_gregorian1.weekday) === null || _data_data_data_date_gregorian_weekday === void 0 ? void 0 : _data_data_data_date_gregorian_weekday.en, \", romadan api, api, bangladesh api, ramadan data bangladesh api, romjan bangladesh api, ramadan bangladesh api\")\n                    }, void 0, false, {\n                        fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        author: \"Tajbir islam\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RamadanDataContext__WEBPACK_IMPORTED_MODULE_11__[\"default\"].Provider, {\n                    value: {\n                        data,\n                        setData,\n                        setSearchDistrict,\n                        searchDistrict,\n                        currentPosition,\n                        setCurrentPosition\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navber__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sections__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"py-4 bg-white\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Catagory__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tabble__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                            fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"Sog/Px48xOEa0X/h9+jn8lG/K04=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUJBQUFBLDRCQUFBQSxjQUFBQSxLQUFNQSxJQUFJLGNBQVZBLG1DQUFBQSxtQkFBQUEsWUFBWUEsSUFBSSxjQUFoQkEsd0NBQUFBLHdCQUFBQSxpQkFBa0JtQyxJQUFJLGNBQXRCbkMsNkNBQUFBLGtDQUFBQSxzQkFBd0JvQyxTQUFTLGNBQWpDcEMsdURBQUFBLHlDQUFBQSxnQ0FBbUNxQyxPQUFPLGNBQTFDckMsNkRBQUFBLHVDQUE0Q3NDLEVBQUUsRUFBQzs7Ozs7O2tDQUVoTCw4REFBQ1A7d0JBQUtRLFFBQU87Ozs7Ozs7Ozs7OzswQkFFZiw4REFBQ0M7MEJBQ0MsNEVBQUMzQyxnRkFBMkI7b0JBQzFCNkMsT0FBTzt3QkFDTDFDO3dCQUNBQzt3QkFDQUU7d0JBQ0FEO3dCQUNBRTt3QkFDQUM7b0JBQ0Y7O3NDQUVBLDhEQUFDZiwwREFBTUE7Ozs7O3NDQUNQLDhEQUFDSCwwREFBTUE7Ozs7O3NDQUVQLDhEQUFDRSw0REFBUUE7Ozs7O3NDQUNULDhEQUFDbUQ7NEJBQUlHLFdBQVU7c0NBQ2IsNEVBQUNwRCw0REFBUUE7Ozs7Ozs7Ozs7c0NBRVgsOERBQUNHLDBEQUFLQTs7Ozs7c0NBQ04sOERBQUNELDBEQUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2pCO0dBL0Z3Qk07S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9yZWFjdC1pbi1qc3gtc2NvcGUgKi9cclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IEludGVyIH0gZnJvbSBcIm5leHQvZm9udC9nb29nbGVcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvU2xpZGVyXCI7XHJcbmltcG9ydCBTZWN0aW9ucyBmcm9tIFwiQC9jb21wb25lbnRzL1NlY3Rpb25zXCI7XHJcbmltcG9ydCBOYXZiZXIgZnJvbSBcIkAvY29tcG9uZW50cy9OYXZiZXJcIjtcclxuaW1wb3J0IENhdGFnb3J5IGZyb20gXCJAL2NvbXBvbmVudHMvQ2F0YWdvcnlcIjtcclxuaW1wb3J0IFByYXllclRpbWVUYWJsZSBmcm9tIFwiQC9jb21wb25lbnRzL1JhbWFkYW5TY2hlZHVsZVwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCJAL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwiQC9jb21wb25lbnRzL1RhYmJsZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSYW1hZGFuRGF0YUNvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmFtYWRhbkRhdGFDb250ZXh0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbXCJsYXRpblwiXSB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc2VhcmNoRGlzdHJpY3QsIHNldFNlYXJjaERpc3RyaWN0XSA9IHVzZVN0YXRlKFwiZGhha2FcIik7XHJcbiAgY29uc3QgW2N1cnJlbnRQb3NpdGlvbiwgc2V0Q3VycmVudFBvc2l0aW9uXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAvLyBjb25zb2xlLmxvZyhzZWFyY2hEaXN0cmljdClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZWxvYWRcclxuICAgIH1cclxuICAgICAgLy8gY29uc29sZS5sb2cobmF2aWdhdG9yLmdlb2xvY2F0aW9uKVxyXG4gICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5hdmlnYXRvci5nZW9sb2NhdGlvbilcclxuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24oc2hvd1Bvc2l0aW9uLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzaG93UG9zaXRpb24ocG9zaXRpb24pIHtcclxuICAgICAgLy8gc2V0Q3VycmVudFBvc2l0aW9uKHRydWUpO1xyXG5cclxuICAgICAgY29uc3QgbGF0ID0gcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlO1xyXG4gICAgICBjb25zdCBsb25nID0gcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZTtcclxuXHJcbiAgICAgIGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL3JhbWFkYW4tY2FsZW5kZXItYnktdGFqYmlyLm9ucmVuZGVyLmNvbS9sb2NhdGlvbnM/bGF0PSR7bGF0fSZsb25nPSR7bG9uZ31gXHJcbiAgICAgIClcclxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhcykgPT4gc2V0RGF0YShkYXRhcykpXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVycm9yKGVycm9yKSB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIHNldEN1cnJlbnRQb3NpdGlvbihmYWxzZSk7XHJcbiAgICAgICAgY29uc3QgZGlzdHJpY3QgPSBzZWFyY2hEaXN0cmljdDtcclxuXHJcbiAgICAgICAgZmV0Y2goXHJcbiAgICAgICAgICBgaHR0cHM6Ly9yYW1hZGFuLWNhbGVuZGVyLWJ5LXRhamJpci5vbnJlbmRlci5jb20vZGlzdHJpY3Q/ZGlzdHJpY3Q9JHtkaXN0cmljdH1gXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgIC50aGVuKChkYXRhcykgPT4gc2V0RGF0YShkYXRhcykpXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbc2VhcmNoRGlzdHJpY3RdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIHNldEN1cnJlbnRQb3NpdGlvbihmYWxzZSlcclxuICAgIGlmIChjdXJyZW50UG9zaXRpb24gPT09IGZhbHNlKSB7XHJcbiAgICAgIGNvbnN0IGRpc3RyaWN0ID0gc2VhcmNoRGlzdHJpY3Q7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRpc3RyaWN0KTtcclxuICAgICAgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vcmFtYWRhbi1jYWxlbmRlci1ieS10YWpiaXIub25yZW5kZXIuY29tL2Rpc3RyaWN0P2Rpc3RyaWN0PSR7ZGlzdHJpY3R9YFxyXG4gICAgICApXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YXMpID0+IHNldERhdGEoZGF0YXMpKVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgIH1cclxuICB9LCBbY3VycmVudFBvc2l0aW9uLCBzZWFyY2hEaXN0cmljdF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+UmFtYWRhbiBjYWxlbmRlciBiYW5nbGFkZXNoIHRpbWU8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJSYW1hZGFuIGNhbGVuZGVyIGJhbmdsYWRlc2ggdGltZVwiIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJrZXl3b3Jkc1wiXHJcbiAgICAgICAgICBjb250ZW50PXtgcm9tamFuLCByYW1hZGFuLCBiYW5nbGFkZXNoLCB0aW1lIHRhYmxlLCB0aW1ldGFibGUsICR7c2VhcmNoRGlzdHJpY3R9LCAke2RhdGE/LmRhdGE/LmRhdGE/LmRhdGU/LmdyZWdvcmlhbj8uZGF0ZX0sICR7ZGF0YT8uZGF0YT8uZGF0YT8uZGF0ZT8uZ3JlZ29yaWFuPy53ZWVrZGF5Py5lbn0sIHJvbWFkYW4gYXBpLCBhcGksIGJhbmdsYWRlc2ggYXBpLCByYW1hZGFuIGRhdGEgYmFuZ2xhZGVzaCBhcGksIHJvbWphbiBiYW5nbGFkZXNoIGFwaSwgcmFtYWRhbiBiYW5nbGFkZXNoIGFwaWB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YSBhdXRob3I9XCJUYWpiaXIgaXNsYW1cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFJhbWFkYW5EYXRhQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgc2V0RGF0YSxcclxuICAgICAgICAgICAgc2V0U2VhcmNoRGlzdHJpY3QsXHJcbiAgICAgICAgICAgIHNlYXJjaERpc3RyaWN0LFxyXG4gICAgICAgICAgICBjdXJyZW50UG9zaXRpb24sXHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRQb3NpdGlvbixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPE5hdmJlciAvPlxyXG4gICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgey8qIDxTbGlkZXIvPiAqL31cclxuICAgICAgICAgIDxTZWN0aW9ucyAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00IGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgIDxDYXRhZ29yeSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8VGFibGUgLz5cclxuICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L1JhbWFkYW5EYXRhQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJpbnRlciIsIkltYWdlIiwiSGVhZGVyIiwiU2xpZGVyIiwiU2VjdGlvbnMiLCJOYXZiZXIiLCJDYXRhZ29yeSIsIlByYXllclRpbWVUYWJsZSIsIkZvb3RlciIsIlRhYmxlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSYW1hZGFuRGF0YUNvbnRleHQiLCJIZWFkIiwiSG9tZSIsImRhdGEiLCJzZXREYXRhIiwic2VhcmNoRGlzdHJpY3QiLCJzZXRTZWFyY2hEaXN0cmljdCIsImN1cnJlbnRQb3NpdGlvbiIsInNldEN1cnJlbnRQb3NpdGlvbiIsIndpbmRvdyIsIm9ubG9hZCIsInJlbG9hZCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwid2F0Y2hQb3NpdGlvbiIsInNob3dQb3NpdGlvbiIsImVycm9yIiwicG9zaXRpb24iLCJsYXQiLCJjb29yZHMiLCJsYXRpdHVkZSIsImxvbmciLCJsb25naXR1ZGUiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YXMiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJkaXN0cmljdCIsInRpdGxlIiwibWV0YSIsImNoYXJTZXQiLCJuYW1lIiwiY29udGVudCIsImRhdGUiLCJncmVnb3JpYW4iLCJ3ZWVrZGF5IiwiZW4iLCJhdXRob3IiLCJkaXYiLCJQcm92aWRlciIsInZhbHVlIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});