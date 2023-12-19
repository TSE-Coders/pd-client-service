"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/createplayer/page",{

/***/ "(app-pages-browser)/./src/components/players/addPlayer.js":
/*!*********************************************!*\
  !*** ./src/components/players/addPlayer.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddPlayer: function() { return /* binding */ AddPlayer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/FormControlLabel */ \"(app-pages-browser)/./node_modules/@mui/material/FormControlLabel/FormControlLabel.js\");\n/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/FormControl */ \"(app-pages-browser)/./node_modules/@mui/material/FormControl/FormControl.js\");\n/* harmony import */ var _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/FormLabel */ \"(app-pages-browser)/./node_modules/@mui/material/FormLabel/FormLabel.js\");\n/* harmony import */ var _mui_material_Radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Radio */ \"(app-pages-browser)/./node_modules/@mui/material/Radio/Radio.js\");\n/* harmony import */ var _mui_material_RadioGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/RadioGroup */ \"(app-pages-browser)/./node_modules/@mui/material/RadioGroup/RadioGroup.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TextField */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Stack_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Stack!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Stack_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Stack!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Paper */ \"(app-pages-browser)/./node_modules/@mui/material/Paper/Paper.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ AddPlayer auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction AddPlayer() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    async function postPlayer(event) {\n        event.preventDefault();\n        const newPlayer = {\n            name: event.target[0].value,\n            pod_id: event.target[2].value\n        };\n        try {\n            const res = await fetch(\"/api/players/players_create\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(newPlayer)\n            });\n            const data = await res.json();\n        } catch (error) {\n            console.error(error);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/pods/pods_list\").then((res)=>res.json()).then((data)=>{\n            setData(data.data);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            sx: {\n                p: 5\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: postPlayer,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Stack_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        justifyContent: \"center\",\n                        direction: \"column\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                sx: {\n                                    mt: 5,\n                                    mb: 4\n                                },\n                                id: \"outlined-password-input\",\n                                label: \"Name\",\n                                type: \"text\",\n                                autoComplete: \"current-password\"\n                            }, void 0, false, {\n                                fileName: \"/Users/daniel.calderon/Projects/pdrace/podrace/pdclient/src/components/players/addPlayer.js\",\n                                lineNumber: 68,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                id: \"pod\",\n                                children: \"Pod\"\n                            }, void 0, false, {\n                                fileName: \"/Users/daniel.calderon/Projects/pdrace/podrace/pdclient/src/components/players/addPlayer.js\",\n                                lineNumber: 69,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_RadioGroup__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                sx: {\n                                    mt: 5,\n                                    mb: 4\n                                },\n                                \"aria-labelledby\": \"demo-radio-buttons-group-label\",\n                                defaultValue: \"agent\",\n                                name: \"radio-buttons-group\",\n                                children: data.map((pod)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        value: pod.id,\n                                        control: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Radio__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, void 0, void 0),\n                                        label: pod.name\n                                    }, pod.id, false, {\n                                        fileName: \"/Users/daniel.calderon/Projects/pdrace/podrace/pdclient/src/components/players/addPlayer.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 21\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/daniel.calderon/Projects/pdrace/podrace/pdclient/src/components/players/addPlayer.js\",\n                                lineNumber: 70,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Stack_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                type: \"submit\",\n                                onClick: ()=>router.push(\"/\"),\n                                children: \"Create player\"\n                            }, void 0, false, {\n                                fileName: \"/Users/daniel.calderon/Projects/pdrace/podrace/pdclient/src/components/players/addPlayer.js\",\n                                lineNumber: 74,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/daniel.calderon/Projects/pdrace/podrace/pdclient/src/components/players/addPlayer.js\",\n                        lineNumber: 67,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/daniel.calderon/Projects/pdrace/podrace/pdclient/src/components/players/addPlayer.js\",\n                    lineNumber: 66,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/daniel.calderon/Projects/pdrace/podrace/pdclient/src/components/players/addPlayer.js\",\n                lineNumber: 65,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/daniel.calderon/Projects/pdrace/podrace/pdclient/src/components/players/addPlayer.js\",\n            lineNumber: 64,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/daniel.calderon/Projects/pdrace/podrace/pdclient/src/components/players/addPlayer.js\",\n        lineNumber: 63,\n        columnNumber: 7\n    }, this);\n}\n_s(AddPlayer, \"9IzkDE5kFBt4dsnXWh3YzFm1RgI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AddPlayer;\nvar _c;\n$RefreshReg$(_c, \"AddPlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3BsYXllcnMvYWRkUGxheWVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzRDO0FBQ2I7QUFDK0I7QUFDVjtBQUNKO0FBQ1I7QUFDVTtBQUNGO0FBQ0Y7QUFDTjtBQUNJO0FBRXJDLFNBQVNhOztJQUNaLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHZiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25DLE1BQU1nQixTQUFTSiwwREFBU0E7SUFFMUIsZUFBZUssV0FBV0MsS0FBSztRQUM3QkEsTUFBTUMsY0FBYztRQUVwQixNQUFNQyxZQUFZO1lBQ05DLE1BQUtILE1BQU1JLE1BQU0sQ0FBQyxFQUFFLENBQUNDLEtBQUs7WUFDMUJDLFFBQU9OLE1BQU1JLE1BQU0sQ0FBQyxFQUFFLENBQUNDLEtBQUs7UUFDOUI7UUFFVixJQUFJO1lBRUEsTUFBTUUsTUFBTSxNQUFNQyxNQUFNLCtCQUE4QjtnQkFDNUJDLFFBQVE7Z0JBQ1JDLFNBQVE7b0JBQ04sZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDWDtZQUNyQjtZQUcxQixNQUFNTixPQUFPLE1BQU1XLElBQUlPLElBQUk7UUFFN0IsRUFBRSxPQUFPQyxPQUFPO1lBRWRDLFFBQVFELEtBQUssQ0FBQ0E7UUFHaEI7SUFDRjtJQUVGaEMsZ0RBQVNBLENBQUM7UUFFTnlCLE1BQU8sdUJBQ05TLElBQUksQ0FBQyxDQUFDVixNQUFRQSxJQUFJTyxJQUFJLElBQ3RCRyxJQUFJLENBQUMsQ0FBQ3JCO1lBQ1BDLFFBQVFELEtBQUtBLElBQUk7UUFDakI7SUFDSixHQUFFLEVBQUU7SUFJSixxQkFHSSw4REFBQ3NCO2tCQUNDLDRFQUFDekIsMkRBQUtBO1lBQUMwQixJQUFJO2dCQUFFQyxHQUFHO1lBQUU7c0JBQ2hCLDRFQUFDQztnQkFBS0MsVUFBVXZCOzBCQUNkLDRFQUFDYixpRUFBV0E7OEJBQ1YsNEVBQUNNLHdGQUFLQTt3QkFBQytCLGdCQUFlO3dCQUFTQyxXQUFVOzswQ0FDdkMsOERBQUNsQywrREFBU0E7Z0NBQUM2QixJQUFJO29DQUFFTSxJQUFJO29DQUFHQyxJQUFJO2dDQUFDO2dDQUFHQyxJQUFHO2dDQUEwQkMsT0FBTTtnQ0FBT0MsTUFBSztnQ0FBT0MsY0FBYTs7Ozs7OzBDQUNuRyw4REFBQzNDLCtEQUFTQTtnQ0FBRXdDLElBQUc7MENBQU07Ozs7OzswQ0FDbkIsOERBQUN0QyxnRUFBVUE7Z0NBQUM4QixJQUFJO29DQUFFTSxJQUFJO29DQUFHQyxJQUFJO2dDQUFDO2dDQUFHSyxtQkFBZ0I7Z0NBQWlDQyxjQUFhO2dDQUFRN0IsTUFBSzswQ0FDekdQLEtBQUtxQyxHQUFHLENBQUMsQ0FBQ0Msb0JBQ1gsOERBQUNqRCxzRUFBZ0JBO3dDQUFjb0IsT0FBTzZCLElBQUlQLEVBQUU7d0NBQUVRLHVCQUFTLDhEQUFDL0MsNERBQUtBO3dDQUFLd0MsT0FBT00sSUFBSS9CLElBQUk7dUNBQTFEK0IsSUFBSVAsRUFBRTs7Ozs7Ozs7OzswQ0FFakMsOERBQUNwQyx5RkFBTUE7Z0NBQUNzQyxNQUFLO2dDQUFTTyxTQUFTLElBQUl0QyxPQUFPdUMsSUFBSSxDQUFDOzBDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVyRTtHQXBFZ0IxQzs7UUFFR0Qsc0RBQVNBOzs7S0FGWkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGxheWVycy9hZGRQbGF5ZXIuanM/ODMzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7ICB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbXVpL21hdGVyaWFsL0Zvcm1Db250cm9sTGFiZWwnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IEZvcm1MYWJlbCBmcm9tICdAbXVpL21hdGVyaWFsL0Zvcm1MYWJlbCc7XG5pbXBvcnQgUmFkaW8gZnJvbSAnQG11aS9tYXRlcmlhbC9SYWRpbyc7XG5pbXBvcnQgUmFkaW9Hcm91cCBmcm9tICdAbXVpL21hdGVyaWFsL1JhZGlvR3JvdXAnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCc7XG5pbXBvcnQgeyBCdXR0b24sIFN0YWNrIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9QYXBlcic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gQWRkUGxheWVyKCkge1xuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIFxuICBhc3luYyBmdW5jdGlvbiBwb3N0UGxheWVyKGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgXG4gICAgY29uc3QgbmV3UGxheWVyID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6ZXZlbnQudGFyZ2V0WzBdLnZhbHVlLFxuICAgICAgICAgICAgICAgIHBvZF9pZDpldmVudC50YXJnZXRbMl0udmFsdWVcbiAgICAgICAgICAgICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICBcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvcGxheWVycy9wbGF5ZXJzX2NyZWF0ZScse1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdQbGF5ZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG5cblxuICAgICAgfSBcbiAgICB9ICAgIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7IFxuXG4gICAgICBmZXRjaChgL2FwaS9wb2RzL3BvZHNfbGlzdGApXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKSAgICAgICAgXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgc2V0RGF0YShkYXRhLmRhdGEpXG4gICAgICB9KVxuICB9LFtdKVxuICBcbiAgXG4gIFxuICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgIFxuICAgICAgPGRpdj5cbiAgICAgICAgPFBhcGVyIHN4PXt7IHA6IDUgfX0+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3Bvc3RQbGF5ZXJ9PlxuICAgICAgICAgICAgPEZvcm1Db250cm9sICA+ICBcbiAgICAgICAgICAgICAgPFN0YWNrIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBzeD17eyBtdDogNSwgbWI6IDR9fSBpZD1cIm91dGxpbmVkLXBhc3N3b3JkLWlucHV0XCIgbGFiZWw9XCJOYW1lXCIgdHlwZT1cInRleHRcIiBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCIvPlxuICAgICAgICAgICAgICAgIDxGb3JtTGFiZWwgIGlkPVwicG9kXCI+UG9kPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cCBzeD17eyBtdDogNSwgbWI6IDR9fSBhcmlhLWxhYmVsbGVkYnk9XCJkZW1vLXJhZGlvLWJ1dHRvbnMtZ3JvdXAtbGFiZWxcIiBkZWZhdWx0VmFsdWU9XCJhZ2VudFwiIG5hbWU9XCJyYWRpby1idXR0b25zLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgocG9kKSA9PiAoICBcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwga2V5PXtwb2QuaWR9IHZhbHVlPXtwb2QuaWR9IGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9e3BvZC5uYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgKSl9PC9SYWRpb0dyb3VwPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eygpPT5yb3V0ZXIucHVzaCgnLycpfT5DcmVhdGUgcGxheWVyPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvU3RhY2s+IFxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD4gXG4gICAgICAgICAgPC9mb3JtPiAgICAgICAgXG4gICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgXG4gICk7XG59XG5cblxuXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSZWFjdCIsIkZvcm1Db250cm9sTGFiZWwiLCJGb3JtQ29udHJvbCIsIkZvcm1MYWJlbCIsIlJhZGlvIiwiUmFkaW9Hcm91cCIsIlRleHRGaWVsZCIsIkJ1dHRvbiIsIlN0YWNrIiwiUGFwZXIiLCJ1c2VSb3V0ZXIiLCJBZGRQbGF5ZXIiLCJkYXRhIiwic2V0RGF0YSIsInJvdXRlciIsInBvc3RQbGF5ZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibmV3UGxheWVyIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwicG9kX2lkIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwidGhlbiIsImRpdiIsInN4IiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImp1c3RpZnlDb250ZW50IiwiZGlyZWN0aW9uIiwibXQiLCJtYiIsImlkIiwibGFiZWwiLCJ0eXBlIiwiYXV0b0NvbXBsZXRlIiwiYXJpYS1sYWJlbGxlZGJ5IiwiZGVmYXVsdFZhbHVlIiwibWFwIiwicG9kIiwiY29udHJvbCIsIm9uQ2xpY2siLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/players/addPlayer.js\n"));

/***/ })

});