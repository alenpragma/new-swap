/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_error"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=private-next-pages%2F_error&page=%2F_error!":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=private-next-pages%2F_error&page=%2F_error! ***!
  \***********************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/_error\",\n      function () {\n        return __webpack_require__(/*! private-next-pages/_error */ \"./src/pages/_error.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/_error\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfZXJyb3ImcGFnZT0lMkZfZXJyb3IhLmpzIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMseURBQTJCO0FBQ2xEO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz84MDdiIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvX2Vycm9yXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19lcnJvclwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvX2Vycm9yXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=private-next-pages%2F_error&page=%2F_error!\n"));

/***/ }),

/***/ "./src/pages/_error.tsx":
/*!******************************!*\
  !*** ./src/pages/_error.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sentry/nextjs */ \"./node_modules/@sentry/nextjs/esm/index.client.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/error */ \"./node_modules/next/error.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _views_NotFound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/NotFound */ \"./src/views/NotFound.tsx\");\n/**\r\n * This page is loaded by Nextjs:\r\n *  - on the server, when data-fetching methods throw or reject\r\n *  - on the client, when `getInitialProps` throws or rejects\r\n *  - on the client, when a React lifecycle method throws or rejects, and it's\r\n *    caught by the built-in Nextjs error boundary\r\n *\r\n * See:\r\n *  - https://nextjs.org/docs/basic-features/data-fetching/overview\r\n *  - https://nextjs.org/docs/api-reference/data-fetching/get-initial-props\r\n *  - https://reactjs.org/docs/error-boundaries.html\r\n */ \n\nvar _this = undefined;\n\n\n\n\nvar CustomErrorComponent = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_views_NotFound__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        statusCode: props.statusCode\n    }, void 0, false, {\n        fileName: \"D:\\\\DEX Development\\\\Mind-Cake-Swap\\\\Mindchain-Travis\\\\Mindchain\\\\src\\\\pages\\\\_error.tsx\",\n        lineNumber: 18,\n        columnNumber: 53\n    }, _this);\n};\n_c = CustomErrorComponent;\nCustomErrorComponent.getInitialProps = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(contextData) {\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    // In case this is running in a serverless function, await this in order to give Sentry\n                    // time to send the error before the lambda exits\n                    return [\n                        4,\n                        (0,_sentry_nextjs__WEBPACK_IMPORTED_MODULE_5__.captureUnderscoreErrorException)(contextData)\n                    ];\n                case 1:\n                    _state.sent();\n                    // This will contain the status code of the response\n                    return [\n                        2,\n                        next_error__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(contextData)\n                    ];\n            }\n        });\n    });\n    return function(contextData) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomErrorComponent);\nvar _c;\n$RefreshReg$(_c, \"CustomErrorComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2Vycm9yLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQWFBLFNBQVNBLCtCQUErQixRQUFRLGdCQUFnQjtBQUNoRSxPQUFPQyxrQkFBa0IsTUFBc0IsWUFBWTtBQUMzRDtBQUVBLElBQU1FO3lCQUE4QyxRQUFDRCxRQUFRO1FBQUNHLFVBQVUsRUFBRUQsS0FBSyxDQUFDQyxVQUFVOzs7OztBQUFJO0FBQUE7QUFBcEU7QUFFVTtlQUFHLDZCQUFPRTs7OztvQkFDNUMsdUZBQXVGO29CQUN2RjtvQkFDQTs7O3NCQUFrRDs7a0dBQUE7NEZBRWxEO29CQUNBOzt3QkFBT04sa0JBQWtCLENBQUNLLGVBQWUsQ0FBQ0MsV0FBVyxDQUFDO3NCQUFBOzs7SUFDeEQsQ0FBQztvQkFQNkNBOzs7R0FPN0M7QUFFRCxlQUFlSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2Vycm9yLnRzeD8wMDQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUaGlzIHBhZ2UgaXMgbG9hZGVkIGJ5IE5leHRqczpcclxuICogIC0gb24gdGhlIHNlcnZlciwgd2hlbiBkYXRhLWZldGNoaW5nIG1ldGhvZHMgdGhyb3cgb3IgcmVqZWN0XHJcbiAqICAtIG9uIHRoZSBjbGllbnQsIHdoZW4gYGdldEluaXRpYWxQcm9wc2AgdGhyb3dzIG9yIHJlamVjdHNcclxuICogIC0gb24gdGhlIGNsaWVudCwgd2hlbiBhIFJlYWN0IGxpZmVjeWNsZSBtZXRob2QgdGhyb3dzIG9yIHJlamVjdHMsIGFuZCBpdCdzXHJcbiAqICAgIGNhdWdodCBieSB0aGUgYnVpbHQtaW4gTmV4dGpzIGVycm9yIGJvdW5kYXJ5XHJcbiAqXHJcbiAqIFNlZTpcclxuICogIC0gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYmFzaWMtZmVhdHVyZXMvZGF0YS1mZXRjaGluZy9vdmVydmlld1xyXG4gKiAgLSBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcmVmZXJlbmNlL2RhdGEtZmV0Y2hpbmcvZ2V0LWluaXRpYWwtcHJvcHNcclxuICogIC0gaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2Vycm9yLWJvdW5kYXJpZXMuaHRtbFxyXG4gKi9cclxuXHJcbmltcG9ydCB7IGNhcHR1cmVVbmRlcnNjb3JlRXJyb3JFeGNlcHRpb24gfSBmcm9tICdAc2VudHJ5L25leHRqcydcclxuaW1wb3J0IE5leHRFcnJvckNvbXBvbmVudCwgeyBFcnJvclByb3BzIH0gZnJvbSAnbmV4dC9lcnJvcidcclxuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4uL3ZpZXdzL05vdEZvdW5kJ1xyXG5cclxuY29uc3QgQ3VzdG9tRXJyb3JDb21wb25lbnQgPSAocHJvcHM6IEVycm9yUHJvcHMpID0+IDxOb3RGb3VuZCBzdGF0dXNDb2RlPXtwcm9wcy5zdGF0dXNDb2RlfSAvPlxyXG5cclxuQ3VzdG9tRXJyb3JDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHREYXRhKSA9PiB7XHJcbiAgLy8gSW4gY2FzZSB0aGlzIGlzIHJ1bm5pbmcgaW4gYSBzZXJ2ZXJsZXNzIGZ1bmN0aW9uLCBhd2FpdCB0aGlzIGluIG9yZGVyIHRvIGdpdmUgU2VudHJ5XHJcbiAgLy8gdGltZSB0byBzZW5kIHRoZSBlcnJvciBiZWZvcmUgdGhlIGxhbWJkYSBleGl0c1xyXG4gIGF3YWl0IGNhcHR1cmVVbmRlcnNjb3JlRXJyb3JFeGNlcHRpb24oY29udGV4dERhdGEpXHJcblxyXG4gIC8vIFRoaXMgd2lsbCBjb250YWluIHRoZSBzdGF0dXMgY29kZSBvZiB0aGUgcmVzcG9uc2VcclxuICByZXR1cm4gTmV4dEVycm9yQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjb250ZXh0RGF0YSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tRXJyb3JDb21wb25lbnRcclxuIl0sIm5hbWVzIjpbImNhcHR1cmVVbmRlcnNjb3JlRXJyb3JFeGNlcHRpb24iLCJOZXh0RXJyb3JDb21wb25lbnQiLCJOb3RGb3VuZCIsIkN1c3RvbUVycm9yQ29tcG9uZW50IiwicHJvcHMiLCJzdGF0dXNDb2RlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dERhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_error.tsx\n"));

/***/ }),

/***/ "./src/views/NotFound.tsx":
/*!********************************!*\
  !*** ./src/views/NotFound.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pancakeswap/uikit */ \"./packages/uikit/src/index.ts\");\n/* harmony import */ var components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Layout/Page */ \"./src/components/Layout/Page.tsx\");\n/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pancakeswap/localization */ \"./packages/localization/src/index.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  align-items: center;\\n  display: flex;\\n  flex-direction: column;\\n  height: calc(100vh - 64px);\\n  justify-content: center;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar StyledNotFound = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"D:\\\\DEX Development\\\\Mind-Cake-Swap\\\\Mindchain-Travis\\\\Mindchain\\\\src\\\\views\\\\NotFound__StyledNotFound\",\n    componentId: \"sc-3f2163dc-0\"\n})(_templateObject());\n_c = StyledNotFound;\nvar NotFound = function(param) {\n    var _statusCode = param.statusCode, statusCode = _statusCode === void 0 ? 404 : _statusCode;\n    _s();\n    var t = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__.useTranslation)().t;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledNotFound, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__.LogoIcon, {\n                    width: \"64px\",\n                    mb: \"8px\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\DEX Development\\\\Mind-Cake-Swap\\\\Mindchain-Travis\\\\Mindchain\\\\src\\\\views\\\\NotFound.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                    scale: \"xxl\",\n                    children: statusCode\n                }, void 0, false, {\n                    fileName: \"D:\\\\DEX Development\\\\Mind-Cake-Swap\\\\Mindchain-Travis\\\\Mindchain\\\\src\\\\views\\\\NotFound.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                    mb: \"16px\",\n                    children: t(\"Oops, page not found.\")\n                }, void 0, false, {\n                    fileName: \"D:\\\\DEX Development\\\\Mind-Cake-Swap\\\\Mindchain-Travis\\\\Mindchain\\\\src\\\\views\\\\NotFound.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/\",\n                    passHref: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        as: \"a\",\n                        scale: \"sm\",\n                        children: t(\"Back Home\")\n                    }, void 0, false, {\n                        fileName: \"D:\\\\DEX Development\\\\Mind-Cake-Swap\\\\Mindchain-Travis\\\\Mindchain\\\\src\\\\views\\\\NotFound.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\DEX Development\\\\Mind-Cake-Swap\\\\Mindchain-Travis\\\\Mindchain\\\\src\\\\views\\\\NotFound.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\DEX Development\\\\Mind-Cake-Swap\\\\Mindchain-Travis\\\\Mindchain\\\\src\\\\views\\\\NotFound.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\DEX Development\\\\Mind-Cake-Swap\\\\Mindchain-Travis\\\\Mindchain\\\\src\\\\views\\\\NotFound.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_s(NotFound, \"zlIdU9EjM2llFt74AbE2KsUJXyM=\", false, function() {\n    return [\n        _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__.useTranslation\n    ];\n});\n_c1 = NotFound;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFound);\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledNotFound\");\n$RefreshReg$(_c1, \"NotFound\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3MvTm90Rm91bmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQUFzQztBQUM4QjtBQUMzQjtBQUNpQjtBQUM5QjtBQUU1QixJQUFNUSxjQUFjLEdBQUdSLHdFQUFVOzs7cUJBTWhDO0FBTktRLEtBQUFBLGNBQWM7QUFRcEIsSUFBTUUsUUFBUSxHQUFHLGdCQUFtRDs0QkFBaERDLFVBQVUsRUFBVkEsVUFBVSw0QkFBRyxHQUFHOztJQUNsQyxJQUFNLENBQUcsR0FBS0wseUVBQWMsRUFBRSxDQUF0Qk0sQ0FBQztJQUVULHFCQUNFLDhEQUFDUCw4REFBSTtrQkFDSCw0RUFBQ0csY0FBYzs7OEJBQ2IsOERBQUNKLHdEQUFRO29CQUFDUyxLQUFLLEVBQUMsTUFBTTtvQkFBQ0MsRUFBRSxFQUFDLEtBQUs7Ozs7O3lCQUFHOzhCQUNsQyw4REFBQ1osdURBQU87b0JBQUNhLEtBQUssRUFBQyxLQUFLOzhCQUFFSixVQUFVOzs7Ozt5QkFBVzs4QkFDM0MsOERBQUNSLG9EQUFJO29CQUFDVyxFQUFFLEVBQUMsTUFBTTs4QkFBRUYsQ0FBQyxDQUFDLHVCQUF1QixDQUFDOzs7Ozt5QkFBUTs4QkFDbkQsOERBQUNMLGtEQUFJO29CQUFDUyxJQUFJLEVBQUMsR0FBRztvQkFBQ0MsUUFBUTs4QkFDckIsNEVBQUNoQixzREFBTTt3QkFBQ2lCLEVBQUUsRUFBQyxHQUFHO3dCQUFDSCxLQUFLLEVBQUMsSUFBSTtrQ0FDdEJILENBQUMsQ0FBQyxXQUFXLENBQUM7Ozs7OzZCQUNSOzs7Ozt5QkFDSjs7Ozs7O2lCQUNROzs7OzthQUNaLENBQ1I7QUFDSCxDQUFDO0dBakJLRixRQUFROztRQUNFSixxRUFBYzs7O0FBRHhCSSxNQUFBQSxRQUFRO0FBbUJkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy92aWV3cy9Ob3RGb3VuZC50c3g/OWQ2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBCdXR0b24sIEhlYWRpbmcsIFRleHQsIExvZ29JY29uIH0gZnJvbSAnQHBhbmNha2Vzd2FwL3Vpa2l0J1xyXG5pbXBvcnQgUGFnZSBmcm9tICdjb21wb25lbnRzL0xheW91dC9QYWdlJ1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ0BwYW5jYWtlc3dhcC9sb2NhbGl6YXRpb24nXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IFN0eWxlZE5vdEZvdW5kID0gc3R5bGVkLmRpdmBcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgTm90Rm91bmQgPSAoeyBzdGF0dXNDb2RlID0gNDA0IH06IHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSA9PiB7XHJcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZT5cclxuICAgICAgPFN0eWxlZE5vdEZvdW5kPlxyXG4gICAgICAgIDxMb2dvSWNvbiB3aWR0aD1cIjY0cHhcIiBtYj1cIjhweFwiIC8+XHJcbiAgICAgICAgPEhlYWRpbmcgc2NhbGU9XCJ4eGxcIj57c3RhdHVzQ29kZX08L0hlYWRpbmc+XHJcbiAgICAgICAgPFRleHQgbWI9XCIxNnB4XCI+e3QoJ09vcHMsIHBhZ2Ugbm90IGZvdW5kLicpfTwvVGV4dD5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgPEJ1dHRvbiBhcz1cImFcIiBzY2FsZT1cInNtXCI+XHJcbiAgICAgICAgICAgIHt0KCdCYWNrIEhvbWUnKX1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9TdHlsZWROb3RGb3VuZD5cclxuICAgIDwvUGFnZT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kXHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJCdXR0b24iLCJIZWFkaW5nIiwiVGV4dCIsIkxvZ29JY29uIiwiUGFnZSIsInVzZVRyYW5zbGF0aW9uIiwiTGluayIsIlN0eWxlZE5vdEZvdW5kIiwiZGl2IiwiTm90Rm91bmQiLCJzdGF0dXNDb2RlIiwidCIsIndpZHRoIiwibWIiLCJzY2FsZSIsImhyZWYiLCJwYXNzSHJlZiIsImFzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/views/NotFound.tsx\n"));

/***/ }),

/***/ "./node_modules/next/error.js":
/*!************************************!*\
  !*** ./node_modules/next/error.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/pages/_error */ \"./node_modules/next/dist/pages/_error.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9lcnJvci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSwyR0FBK0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZXJyb3IuanM/MTc3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fZXJyb3InKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/error.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=private-next-pages%2F_error&page=%2F_error!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);