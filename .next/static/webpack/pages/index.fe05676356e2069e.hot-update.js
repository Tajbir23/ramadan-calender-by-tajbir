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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Slider */ \"./components/Slider.js\");\n/* harmony import */ var _components_Sections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Sections */ \"./components/Sections.js\");\n/* harmony import */ var _components_Navber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Navber */ \"./components/Navber.js\");\n/* harmony import */ var _components_Catagory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Catagory */ \"./components/Catagory.js\");\n/* harmony import */ var _components_RamadanSchedule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/RamadanSchedule */ \"./components/RamadanSchedule.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_Tabble__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Tabble */ \"./components/Tabble.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_RamadanDataContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/RamadanDataContext */ \"./components/RamadanDataContext.js\");\n/* eslint-disable react/react-in-jsx-scope */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)();\n    const [searchDistrict, setSearchDistrict] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(\"dhaka\");\n    const [currentPosition, setCurrentPosition] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{\n        if (navigator.geolocation && currentPosition) {\n            navigator.geolocation.watchPosition(showPosition, error);\n        } else {\n            const district = searchDistrict;\n            fetch(\"https://ramadan-server-by-tajbir.vercel.app/district?district=\".concat(district)).then((res)=>res.json()).then((datas)=>setData(datas)).catch((err)=>console.log(err));\n        }\n        function showPosition(position) {\n            setCurrentPosition(true);\n            const lat = position.coords.latitude;\n            const long = position.coords.longitude;\n            fetch(\"https://ramadan-server-by-tajbir.vercel.app/locations?lat=\".concat(lat, \"&long=\").concat(long)).then((res)=>res.json()).then((datas)=>setData(datas)).catch((err)=>console.log(err));\n        }\n        function error(error) {\n            if (error) {\n                setCurrentPosition(false);\n                const district = searchDistrict;\n                fetch(\"https://ramadan-server-by-tajbir.vercel.app/district?district=\".concat(district)).then((res)=>res.json()).then((datas)=>setData(datas)).catch((err)=>console.log(err));\n            }\n        }\n    });\n    // console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RamadanDataContext__WEBPACK_IMPORTED_MODULE_11__[\"default\"].Provider, {\n            value: {\n                data,\n                setData,\n                setSearchDistrict,\n                searchDistrict,\n                currentPosition,\n                setCurrentPosition\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navber__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sections__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"py-4 bg-white\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Catagory__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tabble__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"aUkxtFRVnkAdVOb0MVQhlZzgMXk=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTJDOztBQWNyQ0E7QUFieUI7QUFFVTtBQUNBO0FBQ0k7QUFDSjtBQUNJO0FBQ2M7QUFDbEI7QUFDRDtBQUNJO0FBQ3NCO0FBSW5ELFNBQVNhOztJQUN0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osZ0RBQVFBO0lBQ2hDLE1BQU0sQ0FBQ0ssZ0JBQWdCQyxrQkFBa0IsR0FBR04sZ0RBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDTyxpQkFBaUJDLG1CQUFtQixHQUFHUixnREFBUUEsQ0FBQztJQUV2REQsaURBQVNBLENBQUM7UUFDUixJQUFJVSxVQUFVQyxXQUFXLElBQUlILGlCQUFpQjtZQUM1Q0UsVUFBVUMsV0FBVyxDQUFDQyxhQUFhLENBQUNDLGNBQWNDO1FBQ3BELE9BQUs7WUFDSCxNQUFNQyxXQUFXVDtZQUVmVSxNQUNFLGlFQUEwRSxPQUFURCxXQUVoRUUsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksSUFDdEJGLElBQUksQ0FBQyxDQUFDRyxRQUFVZixRQUFRZSxRQUN4QkMsS0FBSyxDQUFDLENBQUNDLE1BQVFDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDbEM7UUFDQSxTQUFTVCxhQUFhWSxRQUFRO1lBQzVCaEIsbUJBQW1CO1lBRW5CLE1BQU1pQixNQUFNRCxTQUFTRSxNQUFNLENBQUNDLFFBQVE7WUFDcEMsTUFBTUMsT0FBT0osU0FBU0UsTUFBTSxDQUFDRyxTQUFTO1lBRXRDZCxNQUNFLDZEQUF5RWEsT0FBWkgsS0FBSSxVQUFhLE9BQUxHLE9BRXhFWixJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxJQUN0QkYsSUFBSSxDQUFDLENBQUNHLFFBQVVmLFFBQVFlLFFBQ3hCQyxLQUFLLENBQUMsQ0FBQ0MsTUFBUUMsUUFBUUMsR0FBRyxDQUFDRjtRQUNoQztRQUVBLFNBQVNSLE1BQU1BLEtBQUs7WUFDbEIsSUFBSUEsT0FBTztnQkFDVEwsbUJBQW1CO2dCQUNuQixNQUFNTSxXQUFXVDtnQkFFakJVLE1BQ0UsaUVBQTBFLE9BQVRELFdBRWhFRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxJQUN0QkYsSUFBSSxDQUFDLENBQUNHLFFBQVVmLFFBQVFlLFFBQ3hCQyxLQUFLLENBQUMsQ0FBQ0MsTUFBUUMsUUFBUUMsR0FBRyxDQUFDRjtZQUNoQztRQUNGO0lBQ0Y7SUFFQSxxQkFBcUI7SUFDckIscUJBQ0UsOERBQUNTO2tCQUNDLDRFQUFDN0IsZ0ZBQTJCO1lBQzFCK0IsT0FBTztnQkFDTDdCO2dCQUNBQztnQkFDQUU7Z0JBQ0FEO2dCQUNBRTtnQkFDQUM7WUFDRjs7OEJBRUEsOERBQUNkLDBEQUFNQTs7Ozs7OEJBQ1AsOERBQUNILDBEQUFNQTs7Ozs7OEJBRVAsOERBQUNFLDREQUFRQTs7Ozs7OEJBQ1QsOERBQUNxQztvQkFBSUcsV0FBVTs4QkFDYiw0RUFBQ3RDLDREQUFRQTs7Ozs7Ozs7Ozs4QkFFWCw4REFBQ0csMERBQUtBOzs7Ozs4QkFDTiw4REFBQ0QsMERBQU1BOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWY7R0F4RXdCSztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3JlYWN0LWluLWpzeC1zY29wZSAqL1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9TbGlkZXJcIjtcclxuaW1wb3J0IFNlY3Rpb25zIGZyb20gXCJAL2NvbXBvbmVudHMvU2VjdGlvbnNcIjtcclxuaW1wb3J0IE5hdmJlciBmcm9tIFwiQC9jb21wb25lbnRzL05hdmJlclwiO1xyXG5pbXBvcnQgQ2F0YWdvcnkgZnJvbSBcIkAvY29tcG9uZW50cy9DYXRhZ29yeVwiO1xyXG5pbXBvcnQgUHJheWVyVGltZVRhYmxlIGZyb20gXCJAL2NvbXBvbmVudHMvUmFtYWRhblNjaGVkdWxlXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJAL2NvbXBvbmVudHMvVGFiYmxlXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJhbWFkYW5EYXRhQ29udGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9SYW1hZGFuRGF0YUNvbnRleHRcIjtcclxuXHJcbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbXCJsYXRpblwiXSB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc2VhcmNoRGlzdHJpY3QsIHNldFNlYXJjaERpc3RyaWN0XSA9IHVzZVN0YXRlKFwiZGhha2FcIik7XHJcbiAgY29uc3QgW2N1cnJlbnRQb3NpdGlvbiwgc2V0Q3VycmVudFBvc2l0aW9uXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbiAmJiBjdXJyZW50UG9zaXRpb24pIHtcclxuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24oc2hvd1Bvc2l0aW9uLCBlcnJvcik7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgY29uc3QgZGlzdHJpY3QgPSBzZWFyY2hEaXN0cmljdDtcclxuICAgICAgICBcclxuICAgICAgICBmZXRjaChcclxuICAgICAgICAgIGBodHRwczovL3JhbWFkYW4tc2VydmVyLWJ5LXRhamJpci52ZXJjZWwuYXBwL2Rpc3RyaWN0P2Rpc3RyaWN0PSR7ZGlzdHJpY3R9YFxyXG4gICAgICAgIClcclxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAudGhlbigoZGF0YXMpID0+IHNldERhdGEoZGF0YXMpKVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2hvd1Bvc2l0aW9uKHBvc2l0aW9uKSB7XHJcbiAgICAgIHNldEN1cnJlbnRQb3NpdGlvbih0cnVlKTtcclxuXHJcbiAgICAgIGNvbnN0IGxhdCA9IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZTtcclxuICAgICAgY29uc3QgbG9uZyA9IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGU7XHJcblxyXG4gICAgICBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9yYW1hZGFuLXNlcnZlci1ieS10YWpiaXIudmVyY2VsLmFwcC9sb2NhdGlvbnM/bGF0PSR7bGF0fSZsb25nPSR7bG9uZ31gXHJcbiAgICAgIClcclxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhcykgPT4gc2V0RGF0YShkYXRhcykpXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVycm9yKGVycm9yKSB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIHNldEN1cnJlbnRQb3NpdGlvbihmYWxzZSlcclxuICAgICAgICBjb25zdCBkaXN0cmljdCA9IHNlYXJjaERpc3RyaWN0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZldGNoKFxyXG4gICAgICAgICAgYGh0dHBzOi8vcmFtYWRhbi1zZXJ2ZXItYnktdGFqYmlyLnZlcmNlbC5hcHAvZGlzdHJpY3Q/ZGlzdHJpY3Q9JHtkaXN0cmljdH1gXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgIC50aGVuKChkYXRhcykgPT4gc2V0RGF0YShkYXRhcykpXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxSYW1hZGFuRGF0YUNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgZGF0YSxcclxuICAgICAgICAgIHNldERhdGEsXHJcbiAgICAgICAgICBzZXRTZWFyY2hEaXN0cmljdCxcclxuICAgICAgICAgIHNlYXJjaERpc3RyaWN0LFxyXG4gICAgICAgICAgY3VycmVudFBvc2l0aW9uLFxyXG4gICAgICAgICAgc2V0Q3VycmVudFBvc2l0aW9uXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxOYXZiZXIgLz5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgey8qIDxTbGlkZXIvPiAqL31cclxuICAgICAgICA8U2VjdGlvbnMgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTQgYmctd2hpdGVcIj5cclxuICAgICAgICAgIDxDYXRhZ29yeSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxUYWJsZSAvPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9SYW1hZGFuRGF0YUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJpbnRlciIsIkltYWdlIiwiSGVhZGVyIiwiU2xpZGVyIiwiU2VjdGlvbnMiLCJOYXZiZXIiLCJDYXRhZ29yeSIsIlByYXllclRpbWVUYWJsZSIsIkZvb3RlciIsIlRhYmxlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSYW1hZGFuRGF0YUNvbnRleHQiLCJIb21lIiwiZGF0YSIsInNldERhdGEiLCJzZWFyY2hEaXN0cmljdCIsInNldFNlYXJjaERpc3RyaWN0IiwiY3VycmVudFBvc2l0aW9uIiwic2V0Q3VycmVudFBvc2l0aW9uIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJ3YXRjaFBvc2l0aW9uIiwic2hvd1Bvc2l0aW9uIiwiZXJyb3IiLCJkaXN0cmljdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhcyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInBvc2l0aW9uIiwibGF0IiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsb25nIiwibG9uZ2l0dWRlIiwiZGl2IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});