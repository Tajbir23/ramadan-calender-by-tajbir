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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Slider */ \"./components/Slider.js\");\n/* harmony import */ var _components_Sections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Sections */ \"./components/Sections.js\");\n/* harmony import */ var _components_Navber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Navber */ \"./components/Navber.js\");\n/* harmony import */ var _components_Catagory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Catagory */ \"./components/Catagory.js\");\n/* harmony import */ var _components_RamadanSchedule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/RamadanSchedule */ \"./components/RamadanSchedule.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_Tabble__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Tabble */ \"./components/Tabble.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)();\n    const ramadanData = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_10__.createContext)(data, setData);\n    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{\n        if (navigator.geolocation) {\n            navigator.geolocation.watchPosition(showPosition, error);\n        }\n        function showPosition(position) {\n            const lat = position.coords.latitude;\n            const long = position.coords.longitude;\n            fetch(\"http://localhost:3001/api/locations?lat=\".concat(lat, \"&long=\").concat(long, \"/\")).then((res)=>res.json()).then((datas)=>setData(datas));\n        }\n        function error(error) {\n            const district = \"dhaka\";\n            fetch(\"http://localhost:3001/api/location?district=\".concat(district, \"/\")).then((res)=>res.json()).then((datas)=>setData(datas));\n        }\n    }, []);\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ramadanData.Provider, {\n            value: {\n                data,\n                setData\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navber__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                    lineNumber: 47,\n                    columnNumber: 4\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                    lineNumber: 48,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sections__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                    lineNumber: 50,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Catagory__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                    lineNumber: 51,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tabble__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                    lineNumber: 52,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                    lineNumber: 53,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n            lineNumber: 46,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n        lineNumber: 45,\n        columnNumber: 4\n    }, this);\n}\n_s(Home, \"WZ2PO9A64oHRexE1CE+yX3ebuoA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlNQTtBQVp5QjtBQUVVO0FBQ0E7QUFDSTtBQUNKO0FBQ0k7QUFDYztBQUNsQjtBQUNEO0FBQ21CO0FBSTVDLFNBQVNhOztJQUV0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsZ0RBQVFBO0lBRWhDLE1BQU1JLDRCQUFjTixxREFBYUEsQ0FBQ0ksTUFBTUM7SUFFeENKLGlEQUFTQSxDQUFDO1FBQ1IsSUFBR00sVUFBVUMsV0FBVyxFQUFDO1lBQ3ZCRCxVQUFVQyxXQUFXLENBQUNDLGFBQWEsQ0FBQ0MsY0FBY0M7UUFDcEQ7UUFDQSxTQUFTRCxhQUFhRSxRQUFRO1lBQzVCLE1BQU1DLE1BQU1ELFNBQVNFLE1BQU0sQ0FBQ0MsUUFBUTtZQUNwQyxNQUFNQyxPQUFPSixTQUFTRSxNQUFNLENBQUNHLFNBQVM7WUFFdENDLE1BQU0sMkNBQXVERixPQUFaSCxLQUFJLFVBQWEsT0FBTEcsTUFBSyxNQUNqRUcsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksSUFDdEJGLElBQUksQ0FBQyxDQUFDRyxRQUFVakIsUUFBUWlCO1FBRTNCO1FBRUEsU0FBU1gsTUFBTUEsS0FBSztZQUNsQixNQUFNWSxXQUFXO1lBQ2pCTCxNQUFNLCtDQUF3RCxPQUFUSyxVQUFTLE1BQzdESixJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxJQUN0QkYsSUFBSSxDQUFDLENBQUNHLFFBQVVqQixRQUFRaUI7UUFDM0I7SUFDRixHQUFFLEVBQUU7SUFFSkUsUUFBUUMsR0FBRyxDQUFDckI7SUFDWixxQkFDQyw4REFBQ3NCO2tCQUNELDRFQUFDcEIsWUFBWXFCLFFBQVE7WUFBQ0MsT0FBTztnQkFBQ3hCO2dCQUFNQztZQUFPOzs4QkFDM0MsOERBQUNWLDBEQUFNQTs7Ozs7OEJBQ04sOERBQUNILDBEQUFNQTs7Ozs7OEJBRVAsOERBQUNFLDREQUFRQTs7Ozs7OEJBQ1QsOERBQUNFLDREQUFRQTs7Ozs7OEJBQ1QsOERBQUNHLDBEQUFLQTs7Ozs7OEJBQ04sOERBQUNELDBEQUFNQTs7Ozs7Ozs7Ozs7Ozs7OztBQUlYO0dBMUN3Qks7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9TbGlkZXJcIjtcclxuaW1wb3J0IFNlY3Rpb25zIGZyb20gXCJAL2NvbXBvbmVudHMvU2VjdGlvbnNcIjtcclxuaW1wb3J0IE5hdmJlciBmcm9tIFwiQC9jb21wb25lbnRzL05hdmJlclwiO1xyXG5pbXBvcnQgQ2F0YWdvcnkgZnJvbSBcIkAvY29tcG9uZW50cy9DYXRhZ29yeVwiO1xyXG5pbXBvcnQgUHJheWVyVGltZVRhYmxlIGZyb20gXCJAL2NvbXBvbmVudHMvUmFtYWRhblNjaGVkdWxlXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJAL2NvbXBvbmVudHMvVGFiYmxlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbXCJsYXRpblwiXSB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKClcclxuICBcclxuICBjb25zdCByYW1hZGFuRGF0YSA9IGNyZWF0ZUNvbnRleHQoZGF0YSwgc2V0RGF0YSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pe1xyXG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24ud2F0Y2hQb3NpdGlvbihzaG93UG9zaXRpb24sIGVycm9yKVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2hvd1Bvc2l0aW9uKHBvc2l0aW9uKXtcclxuICAgICAgY29uc3QgbGF0ID0gcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlO1xyXG4gICAgICBjb25zdCBsb25nID0gcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZTtcclxuICAgICAgXHJcbiAgICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2xvY2F0aW9ucz9sYXQ9JHtsYXR9Jmxvbmc9JHtsb25nfS9gKVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YXMpID0+IHNldERhdGEoZGF0YXMpKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlcnJvcihlcnJvcil7XHJcbiAgICAgIGNvbnN0IGRpc3RyaWN0ID0gJ2RoYWthJ1xyXG4gICAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9sb2NhdGlvbj9kaXN0cmljdD0ke2Rpc3RyaWN0fS9gKVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YXMpID0+IHNldERhdGEoZGF0YXMpKVxyXG4gICAgfVxyXG4gIH0sW10pXHJcblxyXG4gIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgcmV0dXJuIChcclxuICAgPGRpdj5cclxuICAgPHJhbWFkYW5EYXRhLlByb3ZpZGVyIHZhbHVlPXt7ZGF0YSwgc2V0RGF0YX19PlxyXG4gICA8TmF2YmVyIC8+XHJcbiAgICA8SGVhZGVyLz5cclxuICAgIHsvKiA8U2xpZGVyLz4gKi99XHJcbiAgICA8U2VjdGlvbnMvPlxyXG4gICAgPENhdGFnb3J5Lz5cclxuICAgIDxUYWJsZS8+XHJcbiAgICA8Rm9vdGVyLz5cclxuICAgPC9yYW1hZGFuRGF0YS5Qcm92aWRlcj5cclxuICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiaW50ZXIiLCJJbWFnZSIsIkhlYWRlciIsIlNsaWRlciIsIlNlY3Rpb25zIiwiTmF2YmVyIiwiQ2F0YWdvcnkiLCJQcmF5ZXJUaW1lVGFibGUiLCJGb290ZXIiLCJUYWJsZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJkYXRhIiwic2V0RGF0YSIsInJhbWFkYW5EYXRhIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJ3YXRjaFBvc2l0aW9uIiwic2hvd1Bvc2l0aW9uIiwiZXJyb3IiLCJwb3NpdGlvbiIsImxhdCIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZyIsImxvbmdpdHVkZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhcyIsImRpc3RyaWN0IiwiY29uc29sZSIsImxvZyIsImRpdiIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});