"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/produtos/page",{

/***/ "(app-pages-browser)/./src/components/ProductGrid.tsx":
/*!****************************************!*\
  !*** ./src/components/ProductGrid.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductCard */ \"(app-pages-browser)/./src/components/ProductCard.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst ProductGrid = (param)=>{\n    let { products } = param;\n    if (products.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center py-12\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-gray-500 text-lg\",\n                children: \"Nenhum produto encontrado\"\n            }, void 0, false, {\n                fileName: \"/home/meempresta/CascadeProjects/site/src/components/ProductGrid.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/meempresta/CascadeProjects/site/src/components/ProductGrid.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6\",\n        children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                id: product.id,\n                name: product.name,\n                price: product.price,\n                image: product.image,\n                discount: product.discount,\n                category: product.category\n            }, product.id, false, {\n                fileName: \"/home/meempresta/CascadeProjects/site/src/components/ProductGrid.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/home/meempresta/CascadeProjects/site/src/components/ProductGrid.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProductGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductGrid);\nvar _c;\n$RefreshReg$(_c, \"ProductGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RHcmlkLnRzeCIsIm1hcHBpbmdzIjoiOzs7O0FBRXVDO0FBZXZDLE1BQU1DLGNBQWM7UUFBQyxFQUFFQyxRQUFRLEVBQW9CO0lBQ2pELElBQUlBLFNBQVNDLE1BQU0sS0FBSyxHQUFHO1FBQ3pCLHFCQUNFLDhEQUFDQztZQUFJQyxXQUFVO3NCQUNiLDRFQUFDQztnQkFBRUQsV0FBVTswQkFBd0I7Ozs7Ozs7Ozs7O0lBRzNDO0lBRUEscUJBQ0UsOERBQUNEO1FBQUlDLFdBQVU7a0JBQ1pILFNBQVNLLEdBQUcsQ0FBQyxDQUFDQyx3QkFDYiw4REFBQ1Isb0RBQVdBO2dCQUVWUyxJQUFJRCxRQUFRQyxFQUFFO2dCQUNkQyxNQUFNRixRQUFRRSxJQUFJO2dCQUNsQkMsT0FBT0gsUUFBUUcsS0FBSztnQkFDcEJDLE9BQU9KLFFBQVFJLEtBQUs7Z0JBQ3BCQyxVQUFVTCxRQUFRSyxRQUFRO2dCQUMxQkMsVUFBVU4sUUFBUU0sUUFBUTtlQU5yQk4sUUFBUUMsRUFBRTs7Ozs7Ozs7OztBQVd6QjtLQXhCTVI7QUEwQk4sK0RBQWVBLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEdyaWQudHN4PzJjYTYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tICcuL1Byb2R1Y3RDYXJkJ1xuXG5pbnRlcmZhY2UgUHJvZHVjdCB7XG4gIGlkOiBudW1iZXJcbiAgbmFtZTogc3RyaW5nXG4gIHByaWNlOiBudW1iZXJcbiAgaW1hZ2U6IHN0cmluZ1xuICBkaXNjb3VudD86IG51bWJlclxuICBjYXRlZ29yeT86IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgUHJvZHVjdEdyaWRQcm9wcyB7XG4gIHByb2R1Y3RzOiBQcm9kdWN0W11cbn1cblxuY29uc3QgUHJvZHVjdEdyaWQgPSAoeyBwcm9kdWN0cyB9OiBQcm9kdWN0R3JpZFByb3BzKSA9PiB7XG4gIGlmIChwcm9kdWN0cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS0xMlwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQtbGdcIj5OZW5odW0gcHJvZHV0byBlbmNvbnRyYWRvPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTZcIj5cbiAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgPFByb2R1Y3RDYXJkXG4gICAgICAgICAga2V5PXtwcm9kdWN0LmlkfVxuICAgICAgICAgIGlkPXtwcm9kdWN0LmlkfVxuICAgICAgICAgIG5hbWU9e3Byb2R1Y3QubmFtZX1cbiAgICAgICAgICBwcmljZT17cHJvZHVjdC5wcmljZX1cbiAgICAgICAgICBpbWFnZT17cHJvZHVjdC5pbWFnZX1cbiAgICAgICAgICBkaXNjb3VudD17cHJvZHVjdC5kaXNjb3VudH1cbiAgICAgICAgICBjYXRlZ29yeT17cHJvZHVjdC5jYXRlZ29yeX1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RHcmlkXG4iXSwibmFtZXMiOlsiUHJvZHVjdENhcmQiLCJQcm9kdWN0R3JpZCIsInByb2R1Y3RzIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIm1hcCIsInByb2R1Y3QiLCJpZCIsIm5hbWUiLCJwcmljZSIsImltYWdlIiwiZGlzY291bnQiLCJjYXRlZ29yeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ProductGrid.tsx\n"));

/***/ })

});