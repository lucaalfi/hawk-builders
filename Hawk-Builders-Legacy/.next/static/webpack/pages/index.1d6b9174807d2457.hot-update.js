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

/***/ "./components/navbar.jsx":
/*!*******************************!*\
  !*** ./components/navbar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-awesome-reveal */ \"./node_modules/react-awesome-reveal/dist/react-awesome-reveal.esm.js\");\n/* harmony import */ var _styles_anim_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/anim.js */ \"./styles/anim.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// Input - \"name\"\nfunction Navbar(props) {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.onscroll = ()=>{\n            const nav = document.querySelector(\"#navbar-container\");\n            console.log(\"LOOK AT ME: \" + nav);\n        // if(nav!=null && $(window).scrollTop() <= 50) nav.className = ''; else nav.className = 'scroll';\n        };\n        jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on(\"click\", 'a[href^=\"#\"]', function(event) {\n            event.preventDefault();\n            jquery__WEBPACK_IMPORTED_MODULE_2___default()(\"html, body\").animate({\n                scrollTop: jquery__WEBPACK_IMPORTED_MODULE_2___default()(jquery__WEBPACK_IMPORTED_MODULE_2___default().attr(this, \"href\")).offset().top - 100\n            }, 200);\n        });\n    });\n    function navMenuToggle() {\n        jquery__WEBPACK_IMPORTED_MODULE_2___default()(\"#1\").toggleClass(\"toggle-div-btn-1\");\n        jquery__WEBPACK_IMPORTED_MODULE_2___default()(\"#2\").toggleClass(\"toggle-div-btn-2\");\n        jquery__WEBPACK_IMPORTED_MODULE_2___default()(\"#3\").toggleClass(\"toggle-div-btn-3\");\n        jquery__WEBPACK_IMPORTED_MODULE_2___default()(\"#nav-link-container\").toggleClass(\"nav-link-move\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        id: \"navbar-container\",\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            id: \"navbar\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4__.Fade, {\n                    triggerOnce: true,\n                    keyframes: _styles_anim_js__WEBPACK_IMPORTED_MODULE_3__.down,\n                    delay: \"5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"push nav-brand\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"\",\n                                children: props.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 46\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"push nav-brand nav-brand-mobile\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"\",\n                                children: props.name.split(/\\s/).reduce((response, word)=>response += word.slice(0, 1), \"\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 63\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"nav-link-container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4__.Fade, {\n                            triggerOnce: true,\n                            keyframes: _styles_anim_js__WEBPACK_IMPORTED_MODULE_3__.down,\n                            delay: \"20\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link\",\n                                    href: \"#about-us-page-container\",\n                                    children: \"About Us\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 63\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 59\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4__.Fade, {\n                            triggerOnce: true,\n                            keyframes: _styles_anim_js__WEBPACK_IMPORTED_MODULE_3__.down,\n                            delay: \"50\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link\",\n                                    href: \"#Projects\",\n                                    children: \"Projects\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 63\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 59\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4__.Fade, {\n                            triggerOnce: true,\n                            keyframes: _styles_anim_js__WEBPACK_IMPORTED_MODULE_3__.down,\n                            delay: \"80\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link\",\n                                    href: \"#contact-container\",\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 63\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 59\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"bg-nav-link-container\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    id: \"toggle-container-btn\",\n                    onClick: navMenuToggle,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"toggle-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"1\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"3\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n            lineNumber: 41,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUM7QUFDbEI7QUFDNkI7QUFDVDtBQUNhO0FBR3hELGlCQUFpQjtBQUNqQixTQUFTVSxPQUFPQyxLQUFLOztJQUVuQlYsZ0RBQVNBLENBQUM7UUFDUlcsT0FBT0MsUUFBUSxHQUFHO1lBQ2hCLE1BQU1DLE1BQU1DLFNBQVNDLGFBQWEsQ0FBQztZQUNuQ0MsUUFBUUMsR0FBRyxDQUFDLGlCQUFpQko7UUFDOUIsa0dBQWtHO1FBQ25HO1FBRUFaLDZDQUFDQSxDQUFDYSxVQUFVSSxFQUFFLENBQUMsU0FBUyxnQkFBZ0IsU0FBVUMsS0FBSztZQUNyREEsTUFBTUMsY0FBYztZQUVwQm5CLDZDQUFDQSxDQUFDLGNBQWNvQixPQUFPLENBQUM7Z0JBQ2xCQyxXQUFXckIsNkNBQUNBLENBQUNBLGtEQUFNLENBQUMsSUFBSSxFQUFFLFNBQVN1QixNQUFNLEdBQUdDLEdBQUcsR0FBRztZQUN0RCxHQUFHO1FBQ0w7SUFDSjtJQUVBLFNBQVNDO1FBQ1B6Qiw2Q0FBQ0EsQ0FBQyxNQUFNMEIsV0FBVyxDQUFDO1FBQ3BCMUIsNkNBQUNBLENBQUMsTUFBTTBCLFdBQVcsQ0FBQztRQUNwQjFCLDZDQUFDQSxDQUFDLE1BQU0wQixXQUFXLENBQUM7UUFDcEIxQiw2Q0FBQ0EsQ0FBQyx1QkFBdUIwQixXQUFXLENBQUM7SUFDdkM7SUFPQSxxQkFDRSw4REFBQ2Q7UUFBSWUsSUFBRztRQUFtQkMsV0FBVTtrQkFDakMsNEVBQUNDO1lBQUdGLElBQUc7OzhCQUNILDhEQUFDekIsc0RBQUlBO29CQUFDNEIsV0FBVztvQkFBQzNCLFdBQVdJLGlEQUFJQTtvQkFBRXdCLE9BQU07O3NDQUN2Qyw4REFBQ0M7NEJBQUdKLFdBQVU7c0NBQWlCLDRFQUFDSztnQ0FBRUMsTUFBSzswQ0FBSXpCLE1BQU0wQixJQUFJOzs7Ozs7Ozs7OztzQ0FDckQsOERBQUNIOzRCQUFHSixXQUFVO3NDQUFrQyw0RUFBQ0s7Z0NBQUVDLE1BQUs7MENBQUl6QixNQUFNMEIsSUFBSSxDQUFDQyxLQUFLLENBQUMsTUFBTUMsTUFBTSxDQUFDLENBQUNDLFVBQVNDLE9BQVFELFlBQVVDLEtBQUtDLEtBQUssQ0FBQyxHQUFFLElBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUV4SSw4REFBQ0M7b0JBQUlkLElBQUc7O3NDQUNSLDhEQUFDekIsc0RBQUlBOzRCQUFDNEIsV0FBVzs0QkFBQzNCLFdBQVdJLGlEQUFJQTs0QkFBRXdCLE9BQU07c0NBQUssNEVBQUNDOzBDQUFHLDRFQUFDQztvQ0FBRUwsV0FBVTtvQ0FBV00sTUFBSzs4Q0FBMkI7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBQzFHLDhEQUFDaEMsc0RBQUlBOzRCQUFDNEIsV0FBVzs0QkFBQzNCLFdBQVdJLGlEQUFJQTs0QkFBRXdCLE9BQU07c0NBQUssNEVBQUNDOzBDQUFHLDRFQUFDQztvQ0FBRUwsV0FBVTtvQ0FBV00sTUFBSzs4Q0FBWTs7Ozs7Ozs7Ozs7Ozs7OztzQ0FDM0YsOERBQUNoQyxzREFBSUE7NEJBQUM0QixXQUFXOzRCQUFDM0IsV0FBV0ksaURBQUlBOzRCQUFFd0IsT0FBTTtzQ0FBSyw0RUFBQ0M7MENBQUcsNEVBQUNDO29DQUFFTCxXQUFVO29DQUFXTSxNQUFLOzhDQUFxQjs7Ozs7Ozs7Ozs7Ozs7OztzQ0FDbEcsOERBQUNPOzRCQUFJZCxJQUFHOzs7Ozs7Ozs7Ozs7OEJBR1YsOERBQUNlO29CQUFPZixJQUFHO29CQUF1QmdCLFNBQVNsQjs4QkFDekMsNEVBQUNnQjt3QkFBSWQsSUFBRzs7MENBQ04sOERBQUNjO2dDQUFJZCxJQUFHOzs7Ozs7MENBQ1IsOERBQUNjO2dDQUFJZCxJQUFHOzs7Ozs7MENBQ1IsOERBQUNjO2dDQUFJZCxJQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhCO0dBdERTbkI7S0FBQUE7QUF5RFQsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanN4P2Y1M2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBSZXZlYWwsIHsgRmFkZSB9IGZyb20gXCJyZWFjdC1hd2Vzb21lLXJldmVhbFwiO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQge3VwLCBsZWZ0LCByaWdodCwgZG93bn0gZnJvbSAnLi4vc3R5bGVzL2FuaW0uanMnO1xuXG5cbi8vIElucHV0IC0gXCJuYW1lXCJcbmZ1bmN0aW9uIE5hdmJhcihwcm9wcylcbntcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uKCl7XG4gICAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmJhci1jb250YWluZXInKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiTE9PSyBBVCBNRTogXCIgKyBuYXYpO1xuICAgICAvLyBpZihuYXYhPW51bGwgJiYgJCh3aW5kb3cpLnNjcm9sbFRvcCgpIDw9IDUwKSBuYXYuY2xhc3NOYW1lID0gJyc7IGVsc2UgbmF2LmNsYXNzTmFtZSA9ICdzY3JvbGwnO1xuICAgIH07XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnYVtocmVmXj1cIiNcIl0nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIFxuICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKCQuYXR0cih0aGlzLCAnaHJlZicpKS5vZmZzZXQoKS50b3AgLSAxMDBcbiAgICAgICAgfSwgMjAwKTtcbiAgICAgIH0pO1xuICB9KTtcbiAgXG4gIGZ1bmN0aW9uIG5hdk1lbnVUb2dnbGUoKXtcbiAgICAkKFwiIzFcIikudG9nZ2xlQ2xhc3MoXCJ0b2dnbGUtZGl2LWJ0bi0xXCIpO1xuICAgICQoXCIjMlwiKS50b2dnbGVDbGFzcyhcInRvZ2dsZS1kaXYtYnRuLTJcIik7XG4gICAgJChcIiMzXCIpLnRvZ2dsZUNsYXNzKFwidG9nZ2xlLWRpdi1idG4tM1wiKTtcbiAgICAkKFwiI25hdi1saW5rLWNvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcIm5hdi1saW5rLW1vdmVcIik7XG4gIH1cbiAgXG5cblxuXG5cblxuICByZXR1cm4oXG4gICAgPG5hdiBpZD1cIm5hdmJhci1jb250YWluZXJcIiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgPHVsIGlkPVwibmF2YmFyXCI+XG4gICAgICAgICAgICA8RmFkZSB0cmlnZ2VyT25jZSBrZXlmcmFtZXM9e2Rvd259IGRlbGF5PVwiNVwiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHVzaCBuYXYtYnJhbmRcIj48YSBocmVmPVwiXCI+e3Byb3BzLm5hbWV9PC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoIG5hdi1icmFuZCBuYXYtYnJhbmQtbW9iaWxlXCI+PGEgaHJlZj1cIlwiPntwcm9wcy5uYW1lLnNwbGl0KC9cXHMvKS5yZWR1Y2UoKHJlc3BvbnNlLHdvcmQpPT4gcmVzcG9uc2UrPXdvcmQuc2xpY2UoMCwxKSwnJyl9PC9hPjwvbGk+XG4gICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICA8ZGl2IGlkPVwibmF2LWxpbmstY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8RmFkZSB0cmlnZ2VyT25jZSBrZXlmcmFtZXM9e2Rvd259IGRlbGF5PVwiMjBcIj48bGk+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI2Fib3V0LXVzLXBhZ2UtY29udGFpbmVyXCI+QWJvdXQgVXM8L2E+PC9saT48L0ZhZGU+XG4gICAgICAgICAgICA8RmFkZSB0cmlnZ2VyT25jZSBrZXlmcmFtZXM9e2Rvd259IGRlbGF5PVwiNTBcIj48bGk+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1Byb2plY3RzXCI+UHJvamVjdHM8L2E+PC9saT48L0ZhZGU+XG4gICAgICAgICAgICA8RmFkZSB0cmlnZ2VyT25jZSBrZXlmcmFtZXM9e2Rvd259IGRlbGF5PVwiODBcIj48bGk+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI2NvbnRhY3QtY29udGFpbmVyXCI+Q29udGFjdDwvYT48L2xpPjwvRmFkZT5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cImJnLW5hdi1saW5rLWNvbnRhaW5lclwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJ0b2dnbGUtY29udGFpbmVyLWJ0blwiIG9uQ2xpY2s9e25hdk1lbnVUb2dnbGV9PlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwidG9nZ2xlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIxXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIjJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiM1wiPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L3VsPlxuICAgIDwvbmF2PlxuICApO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCIkIiwiUmV2ZWFsIiwiRmFkZSIsImtleWZyYW1lcyIsInVwIiwibGVmdCIsInJpZ2h0IiwiZG93biIsIk5hdmJhciIsInByb3BzIiwid2luZG93Iiwib25zY3JvbGwiLCJuYXYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25zb2xlIiwibG9nIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsImF0dHIiLCJvZmZzZXQiLCJ0b3AiLCJuYXZNZW51VG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJpZCIsImNsYXNzTmFtZSIsInVsIiwidHJpZ2dlck9uY2UiLCJkZWxheSIsImxpIiwiYSIsImhyZWYiLCJuYW1lIiwic3BsaXQiLCJyZWR1Y2UiLCJyZXNwb25zZSIsIndvcmQiLCJzbGljZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navbar.jsx\n"));

/***/ })

});