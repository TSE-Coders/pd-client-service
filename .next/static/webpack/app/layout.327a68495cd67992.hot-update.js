"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"c371ee2aba66\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/MDM2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImMzNzFlZTJhYmE2NlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/layout.js":
/*!***************************!*\
  !*** ./src/app/layout.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Drawer */ \"(app-pages-browser)/./node_modules/@mui/material/Drawer/Drawer.js\");\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/AppBar */ \"(app-pages-browser)/./node_modules/@mui/material/AppBar/AppBar.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Toolbar */ \"(app-pages-browser)/./node_modules/@mui/material/Toolbar/Toolbar.js\");\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Link */ \"(app-pages-browser)/./node_modules/@mui/material/Link/Link.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/colors */ \"(app-pages-browser)/./node_modules/@mui/material/colors/blueGrey.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/colors */ \"(app-pages-browser)/./node_modules/@mui/material/colors/grey.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/createTheme.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/styled.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/ThemeProvider.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"(app-pages-browser)/./node_modules/@mui/material/CssBaseline/CssBaseline.js\");\n/* harmony import */ var _mui_icons_material_RadioButtonChecked__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material/RadioButtonChecked */ \"(app-pages-browser)/./node_modules/@mui/icons-material/RadioButtonChecked.js\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Menu.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Typography */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n// Footer\nfunction Copyright(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        variant: \"body2\",\n        color: \"text.secondary\",\n        align: \"center\",\n        ...props,\n        children: [\n            \"Copyright \\xa9 \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                color: \"inherit\",\n                href: \"https://mui.com/\",\n                children: \"TSE-coders\"\n            }, void 0, false, {\n                fileName: \"/Users/daniel.calderon/Projects/pdrace/podrace/pdclient/src/app/layout.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            \" \",\n            new Date().getFullYear(),\n            \".\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/daniel.calderon/Projects/pdrace/podrace/pdclient/src/app/layout.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c = Copyright;\n// Styling theme\nconst grayBlue = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n    palette: {\n        primary: {\n            light: _mui_material_colors__WEBPACK_IMPORTED_MODULE_6__[\"default\"][200],\n            main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_6__[\"default\"][500],\n            dark: _mui_material_colors__WEBPACK_IMPORTED_MODULE_6__[\"default\"][700]\n        },\n        secondary: {\n            light: _mui_material_colors__WEBPACK_IMPORTED_MODULE_7__[\"default\"][200],\n            main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_7__[\"default\"][500],\n            dark: _mui_material_colors__WEBPACK_IMPORTED_MODULE_7__[\"default\"][700]\n        }\n    }\n});\nconst Drawer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    shouldForwardProp: (prop)=>prop !== \"open\"\n})((param)=>{\n    let { theme, open } = param;\n    return {\n        \"& .MuiDrawer-paper\": {\n            position: \"relative\",\n            whiteSpace: \"nowrap\",\n            width: drawerWidth,\n            transition: theme.transitions.create(\"width\", {\n                easing: theme.transitions.easing.sharp,\n                duration: theme.transitions.duration.enteringScreen\n            }),\n            boxSizing: \"border-box\",\n            ...!open && {\n                overflowX: \"hidden\",\n                transition: theme.transitions.create(\"width\", {\n                    easing: theme.transitions.easing.sharp,\n                    duration: theme.transitions.duration.leavingScreen\n                }),\n                width: theme.spacing(7),\n                [theme.breakpoints.up(\"sm\")]: {\n                    width: theme.spacing(9)\n                }\n            }\n        }\n    };\n});\n// Navigation bar behavior\nconst drawerWidth = 240;\nconst AppBar = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    shouldForwardProp: (prop)=>prop !== \"open\"\n})((param)=>{\n    let { theme, open } = param;\n    return {\n        zIndex: theme.zIndex.drawer + 1,\n        transition: theme.transitions.create([\n            \"width\",\n            \"margin\"\n        ], {\n            easing: theme.transitions.easing.sharp,\n            duration: theme.transitions.duration.leavingScreen\n        }),\n        ...open && {\n            marginLeft: drawerWidth,\n            width: \"calc(100% - \".concat(drawerWidth, \"px)\"),\n            transition: theme.transitions.create([\n                \"width\",\n                \"margin\"\n            ], {\n                easing: theme.transitions.easing.sharp,\n                duration: theme.transitions.duration.enteringScreen\n            })\n        }\n    };\n});\n_c1 = AppBar;\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const toggleDrawer = ()=>{\n        setOpen(!open);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    theme: grayBlue,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                        sx: {\n                            display: \"flex\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/daniel.calderon/Projects/pdrace/podrace/pdclient/src/app/layout.js\",\n                                lineNumber: 110,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppBar, {\n                                position: \"absolute\",\n                                open: open,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                                    sx: {\n                                        pr: \"24px\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_RadioButtonChecked__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n                                            edge: \"start\",\n                                            color: \"inherit\",\n                                            \"aria-label\": \"open drawer\",\n                                            onClick: toggleDrawer,\n                                            sx: {\n                                                marginRight: \"36px\",\n                                                ...open && {\n                                                    display: \"none\"\n                                                }\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/Users/daniel.calderon/Projects/pdrace/podrace/pdclient/src/app/layout.js\",\n                                                lineNumber: 114,\n                                                columnNumber: 23\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/daniel.calderon/Projects/pdrace/podrace/pdclient/src/app/layout.js\",\n                                            lineNumber: 113,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            component: \"h1\",\n                                            variant: \"h6\",\n                                            color: \"inherit\",\n                                            noWrap: true,\n                                            sx: {\n                                                flexGrow: 1\n                                            },\n                                            children: \"PodRace\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/daniel.calderon/Projects/pdrace/podrace/pdclient/src/app/layout.js\",\n                                            lineNumber: 116,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_RadioButtonChecked__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n                                            color: \"inherit\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Badge, {\n                                                badgeContent: 4,\n                                                color: \"secondary\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Notifications, {}, void 0, false, {\n                                                    fileName: \"/Users/daniel.calderon/Projects/pdrace/podrace/pdclient/src/app/layout.js\",\n                                                    lineNumber: 118,\n                                                    columnNumber: 25\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/daniel.calderon/Projects/pdrace/podrace/pdclient/src/app/layout.js\",\n                                                lineNumber: 117,\n                                                columnNumber: 57\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/daniel.calderon/Projects/pdrace/podrace/pdclient/src/app/layout.js\",\n                                            lineNumber: 117,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/daniel.calderon/Projects/pdrace/podrace/pdclient/src/app/layout.js\",\n                                    lineNumber: 112,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/daniel.calderon/Projects/pdrace/podrace/pdclient/src/app/layout.js\",\n                                lineNumber: 111,\n                                columnNumber: 17\n                            }, this),\n                            children\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/daniel.calderon/Projects/pdrace/podrace/pdclient/src/app/layout.js\",\n                        lineNumber: 109,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/daniel.calderon/Projects/pdrace/podrace/pdclient/src/app/layout.js\",\n                    lineNumber: 108,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/daniel.calderon/Projects/pdrace/podrace/pdclient/src/app/layout.js\",\n                lineNumber: 107,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/daniel.calderon/Projects/pdrace/podrace/pdclient/src/app/layout.js\",\n            lineNumber: 106,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/daniel.calderon/Projects/pdrace/podrace/pdclient/src/app/layout.js\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, this);\n}\n_s(RootLayout, \"dVkDIfRb5RN4FjtonjBYYwpg89o=\");\n_c2 = RootLayout;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Copyright\");\n$RefreshReg$(_c1, \"AppBar\");\n$RefreshReg$(_c2, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBS1JqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2pCO0dBaEN3QkQ7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9sYXlvdXQuanM/NWIxOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCAnLi9nbG9iYWxzLmNzcydcbmltcG9ydCB7ICB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE11aURyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XG5pbXBvcnQgTXVpQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XG5pbXBvcnQgTGluayBmcm9tICdAbXVpL21hdGVyaWFsL0xpbmsnO1xuaW1wb3J0IHsgYmx1ZUdyZXksIGdyZXkgfSBmcm9tICdAbXVpL21hdGVyaWFsL2NvbG9ycyc7XG5pbXBvcnQgeyBzdHlsZWQsIGNyZWF0ZVRoZW1lLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgeyBSYWRpb0J1dHRvbkNoZWNrZWQsIE1lbnUgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG5cblxuXG4vLyBGb290ZXJcblxuZnVuY3Rpb24gQ29weXJpZ2h0KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIGFsaWduPVwiY2VudGVyXCIgey4uLnByb3BzfT5cbiAgICAgIHsnQ29weXJpZ2h0IMKpICd9XG4gICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiaHR0cHM6Ly9tdWkuY29tL1wiPlxuICAgICAgICBUU0UtY29kZXJzXG4gICAgICA8L0xpbms+eycgJ31cbiAgICAgIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XG4gICAgICB7Jy4nfVxuICAgIDwvVHlwb2dyYXBoeT5cbiAgKTtcbn1cblxuLy8gU3R5bGluZyB0aGVtZVxuXG5jb25zdCBncmF5Qmx1ZSA9IGNyZWF0ZVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIGxpZ2h0OiBibHVlR3JleVsyMDBdLFxuICAgICAgbWFpbjogYmx1ZUdyZXlbNTAwXSxcbiAgICAgIGRhcms6IGJsdWVHcmV5WzcwMF0sXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIGxpZ2h0OiBncmV5WzIwMF0sXG4gICAgICBtYWluOiBncmV5WzUwMF0sXG4gICAgICBkYXJrOiBncmV5WzcwMF0sXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBEcmF3ZXIgPSBzdHlsZWQoTXVpRHJhd2VyLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xuICAgICcmIC5NdWlEcmF3ZXItcGFwZXInOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcbiAgICAgIH0pLFxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAuLi4oIW9wZW4gJiYge1xuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xuICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxuICAgICAgICB9KSxcbiAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIH0sXG4gIH0pLFxuKTtcblxuLy8gTmF2aWdhdGlvbiBiYXIgYmVoYXZpb3JcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xuXG5jb25zdCBBcHBCYXIgPSBzdHlsZWQoTXVpQXBwQmFyLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nLFxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcbiAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcbiAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcbiAgfSksXG4gIC4uLihvcGVuICYmIHtcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXG4gICAgfSksXG4gIH0pLFxufSkpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm9vdExheW91dCh7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9ICgpID0+IHtcbiAgICBzZXRPcGVuKCFvcGVuKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxodG1sPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtncmF5Qmx1ZX0+XG4gICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIG9wZW49e29wZW59PlxuICAgICAgICAgICAgICAgICAgPFRvb2xiYXIgc3g9e3sgcHI6ICcyNHB4J319PlxuICAgICAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b25DaGVja2VkIGVkZ2U9XCJzdGFydFwiIGNvbG9yPVwiaW5oZXJpdFwiIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0gc3g9e3ttYXJnaW5SaWdodDogJzM2cHgnLCAgLi4uKG9wZW4gJiYgeyBkaXNwbGF5OiAnbm9uZScgfSl9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8TWVudSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1JhZGlvQnV0dG9uQ2hlY2tlZD5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDZcIiBjb2xvcj1cImluaGVyaXRcIiBub1dyYXAgc3g9e3sgZmxleEdyb3c6IDEgfX0+UG9kUmFjZTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFJhZGlvQnV0dG9uQ2hlY2tlZCBjb2xvcj1cImluaGVyaXRcIj48QmFkZ2UgYmFkZ2VDb250ZW50PXs0fSBjb2xvcj1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbnMgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgICA8L1JhZGlvQnV0dG9uQ2hlY2tlZD5cbiAgICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgICAgICAgICA8L0FwcEJhcj4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICAgIDwvbWFpbj4gXG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJNdWlEcmF3ZXIiLCJNdWlBcHBCYXIiLCJUb29sYmFyIiwiTGluayIsImJsdWVHcmV5IiwiZ3JleSIsInN0eWxlZCIsImNyZWF0ZVRoZW1lIiwiVGhlbWVQcm92aWRlciIsIkJveCIsIkNzc0Jhc2VsaW5lIiwiUmFkaW9CdXR0b25DaGVja2VkIiwiTWVudSIsIlR5cG9ncmFwaHkiLCJDb3B5cmlnaHQiLCJwcm9wcyIsInZhcmlhbnQiLCJjb2xvciIsImFsaWduIiwiaHJlZiIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdyYXlCbHVlIiwicGFsZXR0ZSIsInByaW1hcnkiLCJsaWdodCIsIm1haW4iLCJkYXJrIiwic2Vjb25kYXJ5IiwiRHJhd2VyIiwic2hvdWxkRm9yd2FyZFByb3AiLCJwcm9wIiwidGhlbWUiLCJvcGVuIiwicG9zaXRpb24iLCJ3aGl0ZVNwYWNlIiwid2lkdGgiLCJkcmF3ZXJXaWR0aCIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJlbnRlcmluZ1NjcmVlbiIsImJveFNpemluZyIsIm92ZXJmbG93WCIsImxlYXZpbmdTY3JlZW4iLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIkFwcEJhciIsInpJbmRleCIsImRyYXdlciIsIm1hcmdpbkxlZnQiLCJSb290TGF5b3V0IiwiY2hpbGRyZW4iLCJzZXRPcGVuIiwidG9nZ2xlRHJhd2VyIiwiaHRtbCIsImJvZHkiLCJzeCIsImRpc3BsYXkiLCJwciIsImVkZ2UiLCJhcmlhLWxhYmVsIiwib25DbGljayIsIm1hcmdpblJpZ2h0IiwiY29tcG9uZW50Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJCYWRnZSIsImJhZGdlQ29udGVudCIsIk5vdGlmaWNhdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/layout.js\n"));

/***/ })

});