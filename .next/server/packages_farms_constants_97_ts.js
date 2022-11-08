"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "packages_farms_constants_97_ts";
exports.ids = ["packages_farms_constants_97_ts"];
exports.modules = {

/***/ "./packages/farms/constants/97.ts":
/*!****************************************!*\
  !*** ./packages/farms/constants/97.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pancakeswap/tokens */ \"./packages/tokens/src/index.ts\");\n\nconst farms = [\n    /**\r\n   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.\r\n   */ {\n        pid: 0,\n        lpSymbol: \"MIND\",\n        lpAddress: \"0x36e3E4fF6471559b19F66bD10985534d5e214D44\",\n        token: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__.bscTestnetTokens.syrup,\n        quoteToken: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__.bscTestnetTokens.wbnb\n    },\n    {\n        pid: 3,\n        lpSymbol: \"BUSD-MIND LP\",\n        lpAddress: \"0xb98C30fA9f5e9cf6749B7021b4DDc0DBFe73b73e\",\n        token: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__.bscTestnetTokens.busd,\n        quoteToken: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__.bscTestnetTokens.cake\n    },\n    {\n        pid: 4,\n        lpSymbol: \"MIND-BNB LP\",\n        lpAddress: \"0xa96818CA65B57bEc2155Ba5c81a70151f63300CD\",\n        token: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__.bscTestnetTokens.cake,\n        quoteToken: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__.bscTestnetTokens.wbnb\n    },\n    {\n        pid: 10,\n        lpSymbol: \"BNB-BUSD LP\",\n        lpAddress: \"0x4E96D2e92680Ca65D58A0e2eB5bd1c0f44cAB897\",\n        token: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__.bscTestnetTokens.wbnb,\n        quoteToken: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__.bscTestnetTokens.busd\n    },\n    {\n        pid: 9,\n        lpSymbol: \"USDC-BUSD LP\",\n        lpAddress: \"0xd1742b5eC6798cEB8C791e0ebbEf606A4946f67E\",\n        token: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__.bscTestnetTokens.usdc,\n        quoteToken: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__.bscTestnetTokens.busd,\n        stableSwapAddress: \"0x1288026D2c5a76A5bfb0730F615131A448f4Ad06\",\n        infoStableSwapAddress: \"0xaE6C14AAA753B3FCaB96149e1E10Bc4EDF39F546\"\n    }, \n].map((p)=>({\n        ...p,\n        token: p.token.serialize,\n        quoteToken: p.quoteToken.serialize\n    }));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (farms);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy9mYXJtcy9jb25zdGFudHMvOTcudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBc0Q7QUFHdEQsTUFBTUMsS0FBSyxHQUEyQjtJQUNwQztRQUlFQyxHQUFHLEVBQUUsQ0FBQzs7UUFFTkU7UUFDQUMsS0FBSyxFQUFFTDtRQUNQTyxVQUFVLEVBQUVQLGdCQUFnQixDQUFDUSxJQUFJO0tBQ2xDO0lBQ0Q7OztRQUdFSjtRQUNBQyxLQUFLLEVBQUVMLGdCQUFnQixDQUFDUztRQUN4QkYsVUFBVSxFQUFFUCxnQkFBZ0IsQ0FBQ1UsSUFBSTtLQUNsQztJQUNEOzs7UUFHRU47UUFDQUMsS0FBSyxFQUFFTCxnQkFBZ0IsQ0FBQ1U7UUFDeEJILFVBQVUsRUFBRVAsZ0JBQWdCLENBQUNRLElBQUk7S0FDbEM7SUFDRDs7O1FBR0VKO1FBQ0FDLEtBQUssRUFBRUwsZ0JBQWdCLENBQUNRO1FBQ3hCRCxVQUFVLEVBQUVQLGdCQUFnQixDQUFDUyxJQUFJO0tBQ2xDO0lBQ0Q7OztRQUdFTDtRQUNBQyxLQUFLLEVBQUVMLGdCQUFnQixDQUFDVztRQUN4QkosVUFBVSxFQUFFUCxnQkFBZ0IsQ0FBQ1MsSUFBSTtRQUNqQ0csT0FBQUEsc0VBQW1CO1FBQ25CQyxZQUFBQSxzRUFBdUI7S0FDeEI7Q0FDRixDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsQ0FBQyxHQUFNOztRQUFRVixLQUFLO1FBQXFCRTtLQUFvQyxFQUFFO0FBRXRGLGVBQWVOLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYW5jYWtlLWZyb250ZW5kLy4vcGFja2FnZXMvZmFybXMvY29uc3RhbnRzLzk3LnRzPzM1Y2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYnNjVGVzdG5ldFRva2VucyB9IGZyb20gJ0BwYW5jYWtlc3dhcC90b2tlbnMnXHJcbmltcG9ydCB7IFNlcmlhbGl6ZWRGYXJtQ29uZmlnIH0gZnJvbSAnQHBhbmNha2Vzd2FwL2Zhcm1zJ1xyXG5cclxuY29uc3QgZmFybXM6IFNlcmlhbGl6ZWRGYXJtQ29uZmlnW10gPSBbXHJcbiAgLyoqXHJcbiAgICogVGhlc2UgMyBmYXJtcyAoUElEIDAsIDIsIDMpIHNob3VsZCBhbHdheXMgYmUgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZS5cclxuICAgKi9cclxuICB7XHJcbiAgICBwaWQ6IDAsXHJcbiAgICBscFN5bWJvbDogJ01JTkQnLFxyXG4gICAgbHBBZGRyZXNzOiAnMHgzNmUzRTRmRjY0NzE1NTliMTlGNjZiRDEwOTg1NTM0ZDVlMjE0RDQ0JyxcclxuICAgIHRva2VuOiBic2NUZXN0bmV0VG9rZW5zLnN5cnVwLFxyXG4gICAgcXVvdGVUb2tlbjogYnNjVGVzdG5ldFRva2Vucy53Ym5iLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGlkOiAzLFxyXG4gICAgbHBTeW1ib2w6ICdCVVNELU1JTkQgTFAnLFxyXG4gICAgbHBBZGRyZXNzOiAnMHhiOThDMzBmQTlmNWU5Y2Y2NzQ5QjcwMjFiNEREYzBEQkZlNzNiNzNlJyxcclxuICAgIHRva2VuOiBic2NUZXN0bmV0VG9rZW5zLmJ1c2QsXHJcbiAgICBxdW90ZVRva2VuOiBic2NUZXN0bmV0VG9rZW5zLmNha2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwaWQ6IDQsXHJcbiAgICBscFN5bWJvbDogJ01JTkQtQk5CIExQJyxcclxuICAgIGxwQWRkcmVzczogJzB4YTk2ODE4Q0E2NUI1N2JFYzIxNTVCYTVjODFhNzAxNTFmNjMzMDBDRCcsXHJcbiAgICB0b2tlbjogYnNjVGVzdG5ldFRva2Vucy5jYWtlLFxyXG4gICAgcXVvdGVUb2tlbjogYnNjVGVzdG5ldFRva2Vucy53Ym5iLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGlkOiAxMCxcclxuICAgIGxwU3ltYm9sOiAnQk5CLUJVU0QgTFAnLFxyXG4gICAgbHBBZGRyZXNzOiAnMHg0RTk2RDJlOTI2ODBDYTY1RDU4QTBlMmVCNWJkMWMwZjQ0Y0FCODk3JyxcclxuICAgIHRva2VuOiBic2NUZXN0bmV0VG9rZW5zLndibmIsXHJcbiAgICBxdW90ZVRva2VuOiBic2NUZXN0bmV0VG9rZW5zLmJ1c2QsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwaWQ6IDksXHJcbiAgICBscFN5bWJvbDogJ1VTREMtQlVTRCBMUCcsXHJcbiAgICBscEFkZHJlc3M6ICcweGQxNzQyYjVlQzY3OThjRUI4Qzc5MWUwZWJiRWY2MDZBNDk0NmY2N0UnLFxyXG4gICAgdG9rZW46IGJzY1Rlc3RuZXRUb2tlbnMudXNkYywgLy8gY29pbnNbMF1cclxuICAgIHF1b3RlVG9rZW46IGJzY1Rlc3RuZXRUb2tlbnMuYnVzZCwgLy8gY29pbnNbMV1cclxuICAgIHN0YWJsZVN3YXBBZGRyZXNzOiAnMHgxMjg4MDI2RDJjNWE3NkE1YmZiMDczMEY2MTUxMzFBNDQ4ZjRBZDA2JyxcclxuICAgIGluZm9TdGFibGVTd2FwQWRkcmVzczogJzB4YUU2QzE0QUFBNzUzQjNGQ2FCOTYxNDllMUUxMEJjNEVERjM5RjU0NicsXHJcbiAgfSxcclxuXS5tYXAoKHApID0+ICh7IC4uLnAsIHRva2VuOiBwLnRva2VuLnNlcmlhbGl6ZSwgcXVvdGVUb2tlbjogcC5xdW90ZVRva2VuLnNlcmlhbGl6ZSB9KSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZhcm1zXHJcbiJdLCJuYW1lcyI6WyJic2NUZXN0bmV0VG9rZW5zIiwiZmFybXMiLCJwaWQiLCJscFN5bWJvbCIsImxwQWRkcmVzcyIsInRva2VuIiwic3lydXAiLCJxdW90ZVRva2VuIiwid2JuYiIsImJ1c2QiLCJjYWtlIiwidXNkYyIsInN0YWJsZVN3YXBBZGRyZXNzIiwiaW5mb1N0YWJsZVN3YXBBZGRyZXNzIiwibWFwIiwicCIsInNlcmlhbGl6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/farms/constants/97.ts\n");

/***/ })

};
;