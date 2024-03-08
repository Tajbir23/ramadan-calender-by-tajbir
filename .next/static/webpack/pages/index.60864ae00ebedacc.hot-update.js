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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Slider */ \"./components/Slider.js\");\n/* harmony import */ var _components_Sections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Sections */ \"./components/Sections.js\");\n/* harmony import */ var _components_Navber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Navber */ \"./components/Navber.js\");\n/* harmony import */ var _components_Catagory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Catagory */ \"./components/Catagory.js\");\n/* harmony import */ var _components_RamadanSchedule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/RamadanSchedule */ \"./components/RamadanSchedule.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_Tabble__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Tabble */ \"./components/Tabble.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)();\n    const ramadanData = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_10__.createContext)(data, setData);\n    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{\n        if (navigator.geolocation) {\n            navigator.geolocation.watchPosition(showPosition, error);\n        }\n        function showPosition(position) {\n            const lat = position.coords.latitude;\n            const long = position.coords.longitude;\n            fetch(\"http://localhost:3001/locations?lat=\".concat(lat, \"&long=\").concat(long)).then((res)=>res.json()).then((datas)=>setData(datas));\n        }\n        function error() {\n            console.log(error);\n            const district = \"dhaka\";\n            fetch(\"http://localhost:3001/location?district=\".concat(district)).then((res)=>res.json()).then((datas)=>setData(datas));\n        }\n    }, []);\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ramadanData.Provider, {\n            value: {\n                data,\n                setData\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navber__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                    lineNumber: 48,\n                    columnNumber: 4\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                    lineNumber: 49,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sections__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                    lineNumber: 51,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Catagory__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                    lineNumber: 52,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tabble__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                    lineNumber: 53,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n                    lineNumber: 54,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n            lineNumber: 47,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\My files\\\\node and express js\\\\Ramadan server 2\\\\client side by Rakibul hasan\\\\Romadan\\\\pages\\\\index.js\",\n        lineNumber: 46,\n        columnNumber: 4\n    }, this);\n}\n_s(Home, \"WZ2PO9A64oHRexE1CE+yX3ebuoA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlNQTtBQVp5QjtBQUVVO0FBQ0E7QUFDSTtBQUNKO0FBQ0k7QUFDYztBQUNsQjtBQUNEO0FBQ21CO0FBSTVDLFNBQVNhOztJQUV0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsZ0RBQVFBO0lBRWhDLE1BQU1JLDRCQUFjTixxREFBYUEsQ0FBQ0ksTUFBTUM7SUFFeENKLGlEQUFTQSxDQUFDO1FBQ1IsSUFBR00sVUFBVUMsV0FBVyxFQUFDO1lBQ3ZCRCxVQUFVQyxXQUFXLENBQUNDLGFBQWEsQ0FBQ0MsY0FBY0M7UUFDcEQ7UUFDQSxTQUFTRCxhQUFhRSxRQUFRO1lBQzVCLE1BQU1DLE1BQU1ELFNBQVNFLE1BQU0sQ0FBQ0MsUUFBUTtZQUNwQyxNQUFNQyxPQUFPSixTQUFTRSxNQUFNLENBQUNHLFNBQVM7WUFFdENDLE1BQU0sdUNBQW1ERixPQUFaSCxLQUFJLFVBQWEsT0FBTEcsT0FDeERHLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ0csUUFBVWpCLFFBQVFpQjtRQUUzQjtRQUVBLFNBQVNYO1lBQ1BZLFFBQVFDLEdBQUcsQ0FBQ2I7WUFDWixNQUFNYyxXQUFXO1lBQ2pCUCxNQUFNLDJDQUFvRCxPQUFUTyxXQUNoRE4sSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksSUFDdEJGLElBQUksQ0FBQyxDQUFDRyxRQUFVakIsUUFBUWlCO1FBQzNCO0lBQ0YsR0FBRSxFQUFFO0lBRUpDLFFBQVFDLEdBQUcsQ0FBQ3BCO0lBQ1oscUJBQ0MsOERBQUNzQjtrQkFDRCw0RUFBQ3BCLFlBQVlxQixRQUFRO1lBQUNDLE9BQU87Z0JBQUN4QjtnQkFBTUM7WUFBTzs7OEJBQzNDLDhEQUFDViwwREFBTUE7Ozs7OzhCQUNOLDhEQUFDSCwwREFBTUE7Ozs7OzhCQUVQLDhEQUFDRSw0REFBUUE7Ozs7OzhCQUNULDhEQUFDRSw0REFBUUE7Ozs7OzhCQUNULDhEQUFDRywwREFBS0E7Ozs7OzhCQUNOLDhEQUFDRCwwREFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJWDtHQTNDd0JLO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IEludGVyIH0gZnJvbSBcIm5leHQvZm9udC9nb29nbGVcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvU2xpZGVyXCI7XHJcbmltcG9ydCBTZWN0aW9ucyBmcm9tIFwiQC9jb21wb25lbnRzL1NlY3Rpb25zXCI7XHJcbmltcG9ydCBOYXZiZXIgZnJvbSBcIkAvY29tcG9uZW50cy9OYXZiZXJcIjtcclxuaW1wb3J0IENhdGFnb3J5IGZyb20gXCJAL2NvbXBvbmVudHMvQ2F0YWdvcnlcIjtcclxuaW1wb3J0IFByYXllclRpbWVUYWJsZSBmcm9tIFwiQC9jb21wb25lbnRzL1JhbWFkYW5TY2hlZHVsZVwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCJAL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwiQC9jb21wb25lbnRzL1RhYmJsZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogW1wibGF0aW5cIl0gfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSgpXHJcbiAgXHJcbiAgY29uc3QgcmFtYWRhbkRhdGEgPSBjcmVhdGVDb250ZXh0KGRhdGEsIHNldERhdGEpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYobmF2aWdhdG9yLmdlb2xvY2F0aW9uKXtcclxuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24oc2hvd1Bvc2l0aW9uLCBlcnJvcilcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNob3dQb3NpdGlvbihwb3NpdGlvbil7XHJcbiAgICAgIGNvbnN0IGxhdCA9IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZTtcclxuICAgICAgY29uc3QgbG9uZyA9IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGU7XHJcbiAgICAgIFxyXG4gICAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2xvY2F0aW9ucz9sYXQ9JHtsYXR9Jmxvbmc9JHtsb25nfWApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhcykgPT4gc2V0RGF0YShkYXRhcykpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVycm9yKCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICBjb25zdCBkaXN0cmljdCA9ICdkaGFrYSdcclxuICAgICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9sb2NhdGlvbj9kaXN0cmljdD0ke2Rpc3RyaWN0fWApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhcykgPT4gc2V0RGF0YShkYXRhcykpXHJcbiAgICB9XHJcbiAgfSxbXSlcclxuXHJcbiAgY29uc29sZS5sb2coZGF0YSlcclxuICByZXR1cm4gKFxyXG4gICA8ZGl2PlxyXG4gICA8cmFtYWRhbkRhdGEuUHJvdmlkZXIgdmFsdWU9e3tkYXRhLCBzZXREYXRhfX0+XHJcbiAgIDxOYXZiZXIgLz5cclxuICAgIDxIZWFkZXIvPlxyXG4gICAgey8qIDxTbGlkZXIvPiAqL31cclxuICAgIDxTZWN0aW9ucy8+XHJcbiAgICA8Q2F0YWdvcnkvPlxyXG4gICAgPFRhYmxlLz5cclxuICAgIDxGb290ZXIvPlxyXG4gICA8L3JhbWFkYW5EYXRhLlByb3ZpZGVyPlxyXG4gICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJpbnRlciIsIkltYWdlIiwiSGVhZGVyIiwiU2xpZGVyIiwiU2VjdGlvbnMiLCJOYXZiZXIiLCJDYXRhZ29yeSIsIlByYXllclRpbWVUYWJsZSIsIkZvb3RlciIsIlRhYmxlIiwiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsImRhdGEiLCJzZXREYXRhIiwicmFtYWRhbkRhdGEiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsIndhdGNoUG9zaXRpb24iLCJzaG93UG9zaXRpb24iLCJlcnJvciIsInBvc2l0aW9uIiwibGF0IiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsb25nIiwibG9uZ2l0dWRlIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGFzIiwiY29uc29sZSIsImxvZyIsImRpc3RyaWN0IiwiZGl2IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});