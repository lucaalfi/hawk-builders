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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-awesome-reveal */ \"./node_modules/react-awesome-reveal/dist/react-awesome-reveal.esm.js\");\n/* harmony import */ var _styles_anim_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/anim.js */ \"./styles/anim.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// Input - \"name\"\nfunction Navbar(props) {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.onscroll = ()=>{\n            const nav = document.querySelector(\"#navbar-container\");\n            console.log(\">>>LOOK AT ME: \" + nav + \" \" + (!(nav === null) && jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).scrollTop() <= 50));\n            if (!(nav === null) && jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).scrollTop() <= 50) nav.className = \"\";\n            else nav.className = \"scroll\";\n        };\n        jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on(\"click\", 'a[href^=\"#\"]', function(event) {\n            event.preventDefault();\n            jquery__WEBPACK_IMPORTED_MODULE_2___default()(\"html, body\").animate({\n                scrollTop: jquery__WEBPACK_IMPORTED_MODULE_2___default()(jquery__WEBPACK_IMPORTED_MODULE_2___default().attr(this, \"href\")).offset().top - 100\n            }, 200);\n        });\n    });\n    function navMenuToggle() {\n        jquery__WEBPACK_IMPORTED_MODULE_2___default()(\"#1\").toggleClass(\"toggle-div-btn-1\");\n        jquery__WEBPACK_IMPORTED_MODULE_2___default()(\"#2\").toggleClass(\"toggle-div-btn-2\");\n        jquery__WEBPACK_IMPORTED_MODULE_2___default()(\"#3\").toggleClass(\"toggle-div-btn-3\");\n        jquery__WEBPACK_IMPORTED_MODULE_2___default()(\"#nav-link-container\").toggleClass(\"nav-link-move\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        id: \"navbar-container\",\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            id: \"navbar\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4__.Fade, {\n                    triggerOnce: true,\n                    keyframes: _styles_anim_js__WEBPACK_IMPORTED_MODULE_3__.down,\n                    delay: \"5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"push nav-brand\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"\",\n                                children: props.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 46\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"push nav-brand nav-brand-mobile\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"\",\n                                children: props.name.split(/\\s/).reduce((response, word)=>response += word.slice(0, 1), \"\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 63\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"nav-link-container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4__.Fade, {\n                            triggerOnce: true,\n                            keyframes: _styles_anim_js__WEBPACK_IMPORTED_MODULE_3__.down,\n                            delay: \"20\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link\",\n                                    href: \"#about-us-page-container\",\n                                    children: \"About Us\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 63\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 59\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4__.Fade, {\n                            triggerOnce: true,\n                            keyframes: _styles_anim_js__WEBPACK_IMPORTED_MODULE_3__.down,\n                            delay: \"50\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link\",\n                                    href: \"#Projects\",\n                                    children: \"Projects\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 63\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 59\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4__.Fade, {\n                            triggerOnce: true,\n                            keyframes: _styles_anim_js__WEBPACK_IMPORTED_MODULE_3__.down,\n                            delay: \"80\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link\",\n                                    href: \"#contact-container\",\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 63\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 59\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"bg-nav-link-container\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    id: \"toggle-container-btn\",\n                    onClick: navMenuToggle,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"toggle-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"1\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"3\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n            lineNumber: 41,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lucam\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\bump\\\\hawk-builders\\\\Hawk-Builders-Legacy\\\\components\\\\navbar.jsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SWIsSUFBRzs7Ozs7OzBDQUNSLDhEQUFDYTtnQ0FBSWIsSUFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14QjtHQXREU3BCO0tBQUFBO0FBeURULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2YmFyLmpzeD9mNTNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgUmV2ZWFsLCB7IEZhZGUgfSBmcm9tIFwicmVhY3QtYXdlc29tZS1yZXZlYWxcIjtcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHt1cCwgbGVmdCwgcmlnaHQsIGRvd259IGZyb20gJy4uL3N0eWxlcy9hbmltLmpzJztcblxuXG4vLyBJbnB1dCAtIFwibmFtZVwiXG5mdW5jdGlvbiBOYXZiYXIocHJvcHMpXG57XG4gIHVzZUVmZmVjdChmdW5jdGlvbigpe1xuICAgIHdpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZiYXItY29udGFpbmVyJyk7XG4gICAgICBjb25zb2xlLmxvZyhcIj4+PkxPT0sgQVQgTUU6IFwiICsgbmF2ICsgXCIgXCIrICghKG5hdj09PW51bGwpICYmICQod2luZG93KS5zY3JvbGxUb3AoKSA8PSA1MCkpO1xuICAgICBpZighKG5hdj09PW51bGwpICYmICQod2luZG93KS5zY3JvbGxUb3AoKSA8PSA1MCkgbmF2LmNsYXNzTmFtZSA9ICcnOyBlbHNlIG5hdi5jbGFzc05hbWUgPSAnc2Nyb2xsJztcbiAgICB9O1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ2FbaHJlZl49XCIjXCJdJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJCgkLmF0dHIodGhpcywgJ2hyZWYnKSkub2Zmc2V0KCkudG9wIC0gMTAwXG4gICAgICAgIH0sIDIwMCk7XG4gICAgICB9KTtcbiAgfSk7XG4gIFxuICBmdW5jdGlvbiBuYXZNZW51VG9nZ2xlKCl7XG4gICAgJChcIiMxXCIpLnRvZ2dsZUNsYXNzKFwidG9nZ2xlLWRpdi1idG4tMVwiKTtcbiAgICAkKFwiIzJcIikudG9nZ2xlQ2xhc3MoXCJ0b2dnbGUtZGl2LWJ0bi0yXCIpO1xuICAgICQoXCIjM1wiKS50b2dnbGVDbGFzcyhcInRvZ2dsZS1kaXYtYnRuLTNcIik7XG4gICAgJChcIiNuYXYtbGluay1jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJuYXYtbGluay1tb3ZlXCIpO1xuICB9XG4gIFxuXG5cblxuXG5cbiAgcmV0dXJuKFxuICAgIDxuYXYgaWQ9XCJuYXZiYXItY29udGFpbmVyXCIgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgIDx1bCBpZD1cIm5hdmJhclwiPlxuICAgICAgICAgICAgPEZhZGUgdHJpZ2dlck9uY2Uga2V5ZnJhbWVzPXtkb3dufSBkZWxheT1cIjVcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInB1c2ggbmF2LWJyYW5kXCI+PGEgaHJlZj1cIlwiPntwcm9wcy5uYW1lfTwvYT48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHVzaCBuYXYtYnJhbmQgbmF2LWJyYW5kLW1vYmlsZVwiPjxhIGhyZWY9XCJcIj57cHJvcHMubmFtZS5zcGxpdCgvXFxzLykucmVkdWNlKChyZXNwb25zZSx3b3JkKT0+IHJlc3BvbnNlKz13b3JkLnNsaWNlKDAsMSksJycpfTwvYT48L2xpPlxuICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgPGRpdiBpZD1cIm5hdi1saW5rLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPEZhZGUgdHJpZ2dlck9uY2Uga2V5ZnJhbWVzPXtkb3dufSBkZWxheT1cIjIwXCI+PGxpPjxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNhYm91dC11cy1wYWdlLWNvbnRhaW5lclwiPkFib3V0IFVzPC9hPjwvbGk+PC9GYWRlPlxuICAgICAgICAgICAgPEZhZGUgdHJpZ2dlck9uY2Uga2V5ZnJhbWVzPXtkb3dufSBkZWxheT1cIjUwXCI+PGxpPjxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNQcm9qZWN0c1wiPlByb2plY3RzPC9hPjwvbGk+PC9GYWRlPlxuICAgICAgICAgICAgPEZhZGUgdHJpZ2dlck9uY2Uga2V5ZnJhbWVzPXtkb3dufSBkZWxheT1cIjgwXCI+PGxpPjxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNjb250YWN0LWNvbnRhaW5lclwiPkNvbnRhY3Q8L2E+PC9saT48L0ZhZGU+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJiZy1uYXYtbGluay1jb250YWluZXJcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwidG9nZ2xlLWNvbnRhaW5lci1idG5cIiBvbkNsaWNrPXtuYXZNZW51VG9nZ2xlfT5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInRvZ2dsZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiMVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIjNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC91bD5cbiAgICA8L25hdj5cbiAgKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiJCIsIlJldmVhbCIsIkZhZGUiLCJrZXlmcmFtZXMiLCJ1cCIsImxlZnQiLCJyaWdodCIsImRvd24iLCJOYXZiYXIiLCJwcm9wcyIsIndpbmRvdyIsIm9uc2Nyb2xsIiwibmF2IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29uc29sZSIsImxvZyIsInNjcm9sbFRvcCIsImNsYXNzTmFtZSIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFuaW1hdGUiLCJhdHRyIiwib2Zmc2V0IiwidG9wIiwibmF2TWVudVRvZ2dsZSIsInRvZ2dsZUNsYXNzIiwiaWQiLCJ1bCIsInRyaWdnZXJPbmNlIiwiZGVsYXkiLCJsaSIsImEiLCJocmVmIiwibmFtZSIsInNwbGl0IiwicmVkdWNlIiwicmVzcG9uc2UiLCJ3b3JkIiwic2xpY2UiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navbar.jsx\n"));

/***/ })

});