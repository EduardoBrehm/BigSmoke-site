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

/***/ "(app-pages-browser)/./src/components/ProductCard.tsx":
/*!****************************************!*\
  !*** ./src/components/ProductCard.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _barrel_optimize_names_ShoppingCartIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ShoppingCartIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/ShoppingCartIcon.js\");\n/* harmony import */ var _PlaceholderImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlaceholderImage */ \"(app-pages-browser)/./src/components/PlaceholderImage.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nconst ProductCard = (param)=>{\n    let { id, name, price, image, discount, category, compact = false } = param;\n    const discountedPrice = discount ? price * (1 - discount / 100) : price;\n    const bgColor = category === \"Bong\" ? \"#4ADE80\" : category === \"Dichavador\" ? \"#F97316\" : category === \"Seda\" ? \"#FBBF24\" : category === \"Piteira\" ? \"#F472B6\" : \"#22C55E\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        href: \"/produto/\".concat(id),\n        className: \"group block\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative aspect-square\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlaceholderImage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            text: name,\n                            bgColor: bgColor,\n                            className: \"w-full h-full group-hover:scale-105 transition-transform duration-300\"\n                        }, void 0, false, {\n                            fileName: \"/home/meempresta/CascadeProjects/site/src/components/ProductCard.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        discount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute top-2 right-2 bg-red-500 text-white px-1.5 py-0.5 rounded-full text-xs font-bold\",\n                            children: [\n                                \"-\",\n                                discount,\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/meempresta/CascadeProjects/site/src/components/ProductCard.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined),\n                        category && !compact && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute top-2 left-2 bg-green-500 text-white px-1.5 py-0.5 rounded text-xs\",\n                            children: category\n                        }, void 0, false, {\n                            fileName: \"/home/meempresta/CascadeProjects/site/src/components/ProductCard.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/meempresta/CascadeProjects/site/src/components/ProductCard.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: compact ? \"p-3\" : \"p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"font-medium group-hover:text-green-600 transition-colors line-clamp-2 \".concat(compact ? \"text-sm mb-2\" : \"text-lg mb-3\"),\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"/home/meempresta/CascadeProjects/site/src/components/ProductCard.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-between gap-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: discount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"space-y-0.5\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-gray-400 line-through text-xs\",\n                                                children: [\n                                                    \"R$ \",\n                                                    price.toFixed(2)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/meempresta/CascadeProjects/site/src/components/ProductCard.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-green-600 font-semibold\",\n                                                children: [\n                                                    \"R$ \",\n                                                    discountedPrice.toFixed(2)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/meempresta/CascadeProjects/site/src/components/ProductCard.tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/meempresta/CascadeProjects/site/src/components/ProductCard.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 17\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-green-600 font-semibold\",\n                                        children: [\n                                            \"R$ \",\n                                            price.toFixed(2)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/meempresta/CascadeProjects/site/src/components/ProductCard.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/meempresta/CascadeProjects/site/src/components/ProductCard.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"p-1.5 rounded-full text-gray-400 hover:text-green-600 hover:bg-green-50 transition-colors\",\n                                    onClick: (e)=>{\n                                        e.preventDefault();\n                                    // Add to cart logic here\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ShoppingCartIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        className: \"w-5 h-5\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/meempresta/CascadeProjects/site/src/components/ProductCard.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/meempresta/CascadeProjects/site/src/components/ProductCard.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/meempresta/CascadeProjects/site/src/components/ProductCard.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/meempresta/CascadeProjects/site/src/components/ProductCard.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/meempresta/CascadeProjects/site/src/components/ProductCard.tsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/meempresta/CascadeProjects/site/src/components/ProductCard.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFNEI7QUFDa0M7QUFDYjtBQVlqRCxNQUFNRyxjQUFjO1FBQUMsRUFDbkJDLEVBQUUsRUFDRkMsSUFBSSxFQUNKQyxLQUFLLEVBQ0xDLEtBQUssRUFDTEMsUUFBUSxFQUNSQyxRQUFRLEVBQ1JDLFVBQVUsS0FBSyxFQUNFO0lBQ2pCLE1BQU1DLGtCQUFrQkgsV0FBV0YsUUFBUyxLQUFJRSxXQUFXLEdBQUUsSUFBS0Y7SUFFbEUsTUFBTU0sVUFDSkgsYUFBYSxTQUFTLFlBQ3RCQSxhQUFhLGVBQWUsWUFDNUJBLGFBQWEsU0FBUyxZQUN0QkEsYUFBYSxZQUFZLFlBQ3pCO0lBRUYscUJBQ0UsOERBQUNULGlEQUFJQTtRQUFDYSxNQUFNLFlBQWUsT0FBSFQ7UUFBTVUsV0FBVTtrQkFDdEMsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNaLHlEQUFnQkE7NEJBQ2ZjLE1BQU1YOzRCQUNOTyxTQUFTQTs0QkFDVEUsV0FBVTs7Ozs7O3dCQUVYTiwwQkFDQyw4REFBQ087NEJBQUlELFdBQVU7O2dDQUE0RjtnQ0FDdkdOO2dDQUFTOzs7Ozs7O3dCQUdkQyxZQUFZLENBQUNDLHlCQUNaLDhEQUFDSzs0QkFBSUQsV0FBVTtzQ0FDWkw7Ozs7Ozs7Ozs7Ozs4QkFJUCw4REFBQ007b0JBQUlELFdBQVdKLFVBQVUsUUFBUTs7c0NBQ2hDLDhEQUFDTzs0QkFBR0gsV0FBVyx5RUFFZCxPQURDSixVQUFVLGlCQUFpQjtzQ0FFMUJMOzs7Ozs7c0NBRUgsOERBQUNVOzRCQUFJRCxXQUFVOzs4Q0FDYiw4REFBQ0M7OENBQ0VQLHlCQUNDLDhEQUFDTzt3Q0FBSUQsV0FBVTs7MERBQ2IsOERBQUNDO2dEQUFJRCxXQUFVOztvREFBcUM7b0RBQzlDUixNQUFNWSxPQUFPLENBQUM7Ozs7Ozs7MERBRXBCLDhEQUFDSDtnREFBSUQsV0FBVTs7b0RBQStCO29EQUN4Q0gsZ0JBQWdCTyxPQUFPLENBQUM7Ozs7Ozs7Ozs7OztrRUFJaEMsOERBQUNIO3dDQUFJRCxXQUFVOzs0Q0FBK0I7NENBQ3hDUixNQUFNWSxPQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs4Q0FJeEIsOERBQUNDO29DQUNDTCxXQUFVO29DQUNWTSxTQUFTLENBQUNDO3dDQUNSQSxFQUFFQyxjQUFjO29DQUNoQix5QkFBeUI7b0NBQzNCOzhDQUVBLDRFQUFDckIsMEdBQWdCQTt3Q0FBQ2EsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8xQztLQTNFTVg7QUE2RU4sK0RBQWVBLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdENhcmQudHN4PzYwYjQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IFNob3BwaW5nQ2FydEljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmUnXG5pbXBvcnQgUGxhY2Vob2xkZXJJbWFnZSBmcm9tICcuL1BsYWNlaG9sZGVySW1hZ2UnXG5cbmludGVyZmFjZSBQcm9kdWN0Q2FyZFByb3BzIHtcbiAgaWQ6IG51bWJlclxuICBuYW1lOiBzdHJpbmdcbiAgcHJpY2U6IG51bWJlclxuICBpbWFnZTogc3RyaW5nXG4gIGRpc2NvdW50PzogbnVtYmVyXG4gIGNhdGVnb3J5Pzogc3RyaW5nXG4gIGNvbXBhY3Q/OiBib29sZWFuXG59XG5cbmNvbnN0IFByb2R1Y3RDYXJkID0gKHsgXG4gIGlkLCBcbiAgbmFtZSwgXG4gIHByaWNlLCBcbiAgaW1hZ2UsIFxuICBkaXNjb3VudCwgXG4gIGNhdGVnb3J5LFxuICBjb21wYWN0ID0gZmFsc2UgXG59OiBQcm9kdWN0Q2FyZFByb3BzKSA9PiB7XG4gIGNvbnN0IGRpc2NvdW50ZWRQcmljZSA9IGRpc2NvdW50ID8gcHJpY2UgKiAoMSAtIGRpc2NvdW50IC8gMTAwKSA6IHByaWNlXG5cbiAgY29uc3QgYmdDb2xvciA9IFxuICAgIGNhdGVnb3J5ID09PSAnQm9uZycgPyAnIzRBREU4MCcgOlxuICAgIGNhdGVnb3J5ID09PSAnRGljaGF2YWRvcicgPyAnI0Y5NzMxNicgOlxuICAgIGNhdGVnb3J5ID09PSAnU2VkYScgPyAnI0ZCQkYyNCcgOlxuICAgIGNhdGVnb3J5ID09PSAnUGl0ZWlyYScgPyAnI0Y0NzJCNicgOlxuICAgICcjMjJDNTVFJ1xuXG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj17YC9wcm9kdXRvLyR7aWR9YH0gY2xhc3NOYW1lPVwiZ3JvdXAgYmxvY2tcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctc20gaG92ZXI6c2hhZG93LW1kIHRyYW5zaXRpb24tc2hhZG93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYXNwZWN0LXNxdWFyZVwiPlxuICAgICAgICAgIDxQbGFjZWhvbGRlckltYWdlXG4gICAgICAgICAgICB0ZXh0PXtuYW1lfVxuICAgICAgICAgICAgYmdDb2xvcj17YmdDb2xvcn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgZ3JvdXAtaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICB7ZGlzY291bnQgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMiByaWdodC0yIGJnLXJlZC01MDAgdGV4dC13aGl0ZSBweC0xLjUgcHktMC41IHJvdW5kZWQtZnVsbCB0ZXh0LXhzIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAte2Rpc2NvdW50fSVcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAge2NhdGVnb3J5ICYmICFjb21wYWN0ICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIgbGVmdC0yIGJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlIHB4LTEuNSBweS0wLjUgcm91bmRlZCB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgIHtjYXRlZ29yeX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcGFjdCA/IFwicC0zXCIgOiBcInAtNFwifT5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtgZm9udC1tZWRpdW0gZ3JvdXAtaG92ZXI6dGV4dC1ncmVlbi02MDAgdHJhbnNpdGlvbi1jb2xvcnMgbGluZS1jbGFtcC0yICR7XG4gICAgICAgICAgICBjb21wYWN0ID8gXCJ0ZXh0LXNtIG1iLTJcIiA6IFwidGV4dC1sZyBtYi0zXCJcbiAgICAgICAgICB9YH0+XG4gICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC00XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7ZGlzY291bnQgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTAuNVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIGxpbmUtdGhyb3VnaCB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgICAgIFIkIHtwcmljZS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNjAwIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgUiQge2Rpc2NvdW50ZWRQcmljZS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTYwMCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICBSJCB7cHJpY2UudG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xLjUgcm91bmRlZC1mdWxsIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC1ncmVlbi02MDAgaG92ZXI6YmctZ3JlZW4tNTAgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIC8vIEFkZCB0byBjYXJ0IGxvZ2ljIGhlcmVcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFNob3BwaW5nQ2FydEljb24gY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpbms+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmRcbiJdLCJuYW1lcyI6WyJMaW5rIiwiU2hvcHBpbmdDYXJ0SWNvbiIsIlBsYWNlaG9sZGVySW1hZ2UiLCJQcm9kdWN0Q2FyZCIsImlkIiwibmFtZSIsInByaWNlIiwiaW1hZ2UiLCJkaXNjb3VudCIsImNhdGVnb3J5IiwiY29tcGFjdCIsImRpc2NvdW50ZWRQcmljZSIsImJnQ29sb3IiLCJocmVmIiwiY2xhc3NOYW1lIiwiZGl2IiwidGV4dCIsImgzIiwidG9GaXhlZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ProductCard.tsx\n"));

/***/ })

});