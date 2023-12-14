/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-fast-marquee";
exports.ids = ["vendor-chunks/react-fast-marquee"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-fast-marquee/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-fast-marquee/dist/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\"use client\"\n\n\nfunction ___$insertStyle(css) {\n    if (!css || typeof window === 'undefined') {\n        return;\n    }\n    const style = document.createElement('style');\n    style.setAttribute('type', 'text/css');\n    style.innerHTML = css;\n    document.head.appendChild(style);\n    return css;\n}\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nvar React = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\nfunction _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }\n\nvar React__default = /*#__PURE__*/_interopDefaultLegacy(React);\n\n___$insertStyle(\".rfm-marquee-container {\\n  overflow-x: hidden;\\n  display: flex;\\n  flex-direction: row;\\n  position: relative;\\n  width: var(--width);\\n  transform: var(--transform);\\n}\\n.rfm-marquee-container:hover div {\\n  animation-play-state: var(--pause-on-hover);\\n}\\n.rfm-marquee-container:active div {\\n  animation-play-state: var(--pause-on-click);\\n}\\n\\n.rfm-overlay {\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n}\\n.rfm-overlay::before, .rfm-overlay::after {\\n  background: linear-gradient(to right, var(--gradient-color), transparent);\\n  content: \\\"\\\";\\n  height: 100%;\\n  position: absolute;\\n  width: var(--gradient-width);\\n  z-index: 2;\\n  pointer-events: none;\\n  touch-action: none;\\n}\\n.rfm-overlay::after {\\n  right: 0;\\n  top: 0;\\n  transform: rotateZ(180deg);\\n}\\n.rfm-overlay::before {\\n  left: 0;\\n  top: 0;\\n}\\n\\n.rfm-marquee {\\n  flex: 0 0 auto;\\n  min-width: var(--min-width);\\n  z-index: 1;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\\n  animation-play-state: var(--play);\\n  animation-delay: var(--delay);\\n  animation-direction: var(--direction);\\n}\\n@keyframes scroll {\\n  0% {\\n    transform: translateX(0%);\\n  }\\n  100% {\\n    transform: translateX(-100%);\\n  }\\n}\\n\\n.rfm-initial-child-container {\\n  flex: 0 0 auto;\\n  display: flex;\\n  min-width: auto;\\n  flex-direction: row;\\n  align-items: center;\\n}\\n\\n.rfm-child {\\n  transform: var(--transform);\\n}\");\n\nconst Marquee = React.forwardRef(function Marquee({ style = {}, className = \"\", autoFill = false, play = true, pauseOnHover = false, pauseOnClick = false, direction = \"left\", speed = 50, delay = 0, loop = 0, gradient = false, gradientColor = \"white\", gradientWidth = 200, onFinish, onCycleComplete, onMount, children, }, ref) {\r\n    // React Hooks\r\n    const [containerWidth, setContainerWidth] = React.useState(0);\r\n    const [marqueeWidth, setMarqueeWidth] = React.useState(0);\r\n    const [multiplier, setMultiplier] = React.useState(1);\r\n    const [isMounted, setIsMounted] = React.useState(false);\r\n    const rootRef = React.useRef(null);\r\n    const containerRef = ref || rootRef;\r\n    const marqueeRef = React.useRef(null);\r\n    // Calculate width of container and marquee and set multiplier\r\n    const calculateWidth = React.useCallback(() => {\r\n        if (marqueeRef.current && containerRef.current) {\r\n            const containerRect = containerRef.current.getBoundingClientRect();\r\n            const marqueeRect = marqueeRef.current.getBoundingClientRect();\r\n            let containerWidth = containerRect.width;\r\n            let marqueeWidth = marqueeRect.width;\r\n            // Swap width and height if direction is up or down\r\n            if (direction === \"up\" || direction === \"down\") {\r\n                containerWidth = containerRect.height;\r\n                marqueeWidth = marqueeRect.height;\r\n            }\r\n            if (autoFill && containerWidth && marqueeWidth) {\r\n                setMultiplier(marqueeWidth < containerWidth\r\n                    ? Math.ceil(containerWidth / marqueeWidth)\r\n                    : 1);\r\n            }\r\n            else {\r\n                setMultiplier(1);\r\n            }\r\n            setContainerWidth(containerWidth);\r\n            setMarqueeWidth(marqueeWidth);\r\n        }\r\n    }, [autoFill, containerRef, direction]);\r\n    // Calculate width and multiplier on mount and on window resize\r\n    React.useEffect(() => {\r\n        if (!isMounted)\r\n            return;\r\n        calculateWidth();\r\n        if (marqueeRef.current && containerRef.current) {\r\n            const resizeObserver = new ResizeObserver(() => calculateWidth());\r\n            resizeObserver.observe(containerRef.current);\r\n            resizeObserver.observe(marqueeRef.current);\r\n            return () => {\r\n                if (!resizeObserver)\r\n                    return;\r\n                resizeObserver.disconnect();\r\n            };\r\n        }\r\n    }, [calculateWidth, containerRef, isMounted]);\r\n    // Recalculate width when children change\r\n    React.useEffect(() => {\r\n        calculateWidth();\r\n    }, [calculateWidth, children]);\r\n    React.useEffect(() => {\r\n        setIsMounted(true);\r\n    }, []);\r\n    // Runs the onMount callback, if it is a function, when Marquee is mounted.\r\n    React.useEffect(() => {\r\n        if (typeof onMount === \"function\") {\r\n            onMount();\r\n        }\r\n    }, []);\r\n    // Animation duration\r\n    const duration = React.useMemo(() => {\r\n        if (autoFill) {\r\n            return (marqueeWidth * multiplier) / speed;\r\n        }\r\n        else {\r\n            return marqueeWidth < containerWidth\r\n                ? containerWidth / speed\r\n                : marqueeWidth / speed;\r\n        }\r\n    }, [autoFill, containerWidth, marqueeWidth, multiplier, speed]);\r\n    const containerStyle = React.useMemo(() => (Object.assign(Object.assign({}, style), { [\"--pause-on-hover\"]: !play || pauseOnHover ? \"paused\" : \"running\", [\"--pause-on-click\"]: !play || (pauseOnHover && !pauseOnClick) || pauseOnClick\r\n            ? \"paused\"\r\n            : \"running\", [\"--width\"]: direction === \"up\" || direction === \"down\" ? `100vh` : \"100%\", [\"--transform\"]: direction === \"up\"\r\n            ? \"rotate(-90deg)\"\r\n            : direction === \"down\"\r\n                ? \"rotate(90deg)\"\r\n                : \"none\" })), [style, play, pauseOnHover, pauseOnClick, direction]);\r\n    const gradientStyle = React.useMemo(() => ({\r\n        [\"--gradient-color\"]: gradientColor,\r\n        [\"--gradient-width\"]: typeof gradientWidth === \"number\"\r\n            ? `${gradientWidth}px`\r\n            : gradientWidth,\r\n    }), [gradientColor, gradientWidth]);\r\n    const marqueeStyle = React.useMemo(() => ({\r\n        [\"--play\"]: play ? \"running\" : \"paused\",\r\n        [\"--direction\"]: direction === \"left\" ? \"normal\" : \"reverse\",\r\n        [\"--duration\"]: `${duration}s`,\r\n        [\"--delay\"]: `${delay}s`,\r\n        [\"--iteration-count\"]: !!loop ? `${loop}` : \"infinite\",\r\n        [\"--min-width\"]: autoFill ? `auto` : \"100%\",\r\n    }), [play, direction, duration, delay, loop, autoFill]);\r\n    const childStyle = React.useMemo(() => ({\r\n        [\"--transform\"]: direction === \"up\"\r\n            ? \"rotate(90deg)\"\r\n            : direction === \"down\"\r\n                ? \"rotate(-90deg)\"\r\n                : \"none\",\r\n    }), [direction]);\r\n    // Render {multiplier} number of children\r\n    const multiplyChildren = React.useCallback((multiplier) => {\r\n        return [\r\n            ...Array(Number.isFinite(multiplier) && multiplier >= 0 ? multiplier : 0),\r\n        ].map((_, i) => (React__default['default'].createElement(React.Fragment, { key: i }, React.Children.map(children, (child) => {\r\n            return (React__default['default'].createElement(\"div\", { style: childStyle, className: \"rfm-child\" }, child));\r\n        }))));\r\n    }, [childStyle, children]);\r\n    return !isMounted ? null : (React__default['default'].createElement(\"div\", { ref: containerRef, style: containerStyle, className: \"rfm-marquee-container \" + className },\r\n        gradient && React__default['default'].createElement(\"div\", { style: gradientStyle, className: \"rfm-overlay\" }),\r\n        React__default['default'].createElement(\"div\", { className: \"rfm-marquee\", style: marqueeStyle, onAnimationIteration: onCycleComplete, onAnimationEnd: onFinish },\r\n            React__default['default'].createElement(\"div\", { className: \"rfm-initial-child-container\", ref: marqueeRef }, React.Children.map(children, (child) => {\r\n                return (React__default['default'].createElement(\"div\", { style: childStyle, className: \"rfm-child\" }, child));\r\n            })),\r\n            multiplyChildren(multiplier - 1)),\r\n        React__default['default'].createElement(\"div\", { className: \"rfm-marquee\", style: marqueeStyle }, multiplyChildren(multiplier))));\r\n});\n\nexports[\"default\"] = Marquee;\n//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtZmFzdC1tYXJxdWVlL2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQzs7QUFFN0QsWUFBWSxtQkFBTyxDQUFDLHdHQUFPOztBQUUzQixxQ0FBcUMsNERBQTREOztBQUVqRzs7QUFFQSx5Q0FBeUMsdUJBQXVCLGtCQUFrQix3QkFBd0IsdUJBQXVCLHdCQUF3QixnQ0FBZ0MsR0FBRyxvQ0FBb0MsZ0RBQWdELEdBQUcscUNBQXFDLGdEQUFnRCxHQUFHLGtCQUFrQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixHQUFHLDZDQUE2Qyw4RUFBOEUsa0JBQWtCLGlCQUFpQix1QkFBdUIsaUNBQWlDLGVBQWUseUJBQXlCLHVCQUF1QixHQUFHLHVCQUF1QixhQUFhLFdBQVcsK0JBQStCLEdBQUcsd0JBQXdCLFlBQVksV0FBVyxHQUFHLGtCQUFrQixtQkFBbUIsZ0NBQWdDLGVBQWUsa0JBQWtCLHdCQUF3Qix3QkFBd0IsaUZBQWlGLHNDQUFzQyxrQ0FBa0MsMENBQTBDLEdBQUcscUJBQXFCLFFBQVEsZ0NBQWdDLEtBQUssVUFBVSxtQ0FBbUMsS0FBSyxHQUFHLGtDQUFrQyxtQkFBbUIsa0JBQWtCLG9CQUFvQix3QkFBd0Isd0JBQXdCLEdBQUcsZ0JBQWdCLGdDQUFnQyxHQUFHOztBQUV2K0Msb0RBQW9ELFVBQVUsaVFBQWlRO0FBQy9UO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDhFQUE4RSxZQUFZO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGNBQWM7QUFDL0I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFNBQVM7QUFDcEMsd0JBQXdCLE1BQU07QUFDOUIsMkNBQTJDLEtBQUs7QUFDaEQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGVBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxtRkFBbUYsUUFBUTtBQUMzRixxRUFBcUUsMkNBQTJDO0FBQ2hILFNBQVM7QUFDVCxLQUFLO0FBQ0wsaUZBQWlGLDJGQUEyRjtBQUM1SyxxRUFBcUUsZ0RBQWdEO0FBQ3JILHlEQUF5RCxnSEFBZ0g7QUFDekssNkRBQTZELDJEQUEyRDtBQUN4SCx5RUFBeUUsMkNBQTJDO0FBQ3BILGFBQWE7QUFDYjtBQUNBLHlEQUF5RCwrQ0FBK0M7QUFDeEcsQ0FBQzs7QUFFRCxrQkFBZTtBQUNmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGRjbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtZmFzdC1tYXJxdWVlL2Rpc3QvaW5kZXguanM/MGRmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5cbmZ1bmN0aW9uIF9fXyRpbnNlcnRTdHlsZShjc3MpIHtcbiAgICBpZiAoIWNzcyB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICBzdHlsZS5pbm5lckhUTUwgPSBjc3M7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgcmV0dXJuIGNzcztcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0TGVnYWN5IChlKSB7IHJldHVybiBlICYmIHR5cGVvZiBlID09PSAnb2JqZWN0JyAmJiAnZGVmYXVsdCcgaW4gZSA/IGUgOiB7ICdkZWZhdWx0JzogZSB9OyB9XG5cbnZhciBSZWFjdF9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koUmVhY3QpO1xuXG5fX18kaW5zZXJ0U3R5bGUoXCIucmZtLW1hcnF1ZWUtY29udGFpbmVyIHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IHZhcigtLXdpZHRoKTtcXG4gIHRyYW5zZm9ybTogdmFyKC0tdHJhbnNmb3JtKTtcXG59XFxuLnJmbS1tYXJxdWVlLWNvbnRhaW5lcjpob3ZlciBkaXYge1xcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHZhcigtLXBhdXNlLW9uLWhvdmVyKTtcXG59XFxuLnJmbS1tYXJxdWVlLWNvbnRhaW5lcjphY3RpdmUgZGl2IHtcXG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiB2YXIoLS1wYXVzZS1vbi1jbGljayk7XFxufVxcblxcbi5yZm0tb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLnJmbS1vdmVybGF5OjpiZWZvcmUsIC5yZm0tb3ZlcmxheTo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1ncmFkaWVudC1jb2xvciksIHRyYW5zcGFyZW50KTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IHZhcigtLWdyYWRpZW50LXdpZHRoKTtcXG4gIHotaW5kZXg6IDI7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcXG59XFxuLnJmbS1vdmVybGF5OjphZnRlciB7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpO1xcbn1cXG4ucmZtLW92ZXJsYXk6OmJlZm9yZSB7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4ucmZtLW1hcnF1ZWUge1xcbiAgZmxleDogMCAwIGF1dG87XFxuICBtaW4td2lkdGg6IHZhcigtLW1pbi13aWR0aCk7XFxuICB6LWluZGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYW5pbWF0aW9uOiBzY3JvbGwgdmFyKC0tZHVyYXRpb24pIGxpbmVhciB2YXIoLS1kZWxheSkgdmFyKC0taXRlcmF0aW9uLWNvdW50KTtcXG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiB2YXIoLS1wbGF5KTtcXG4gIGFuaW1hdGlvbi1kZWxheTogdmFyKC0tZGVsYXkpO1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogdmFyKC0tZGlyZWN0aW9uKTtcXG59XFxuQGtleWZyYW1lcyBzY3JvbGwge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICB9XFxufVxcblxcbi5yZm0taW5pdGlhbC1jaGlsZC1jb250YWluZXIge1xcbiAgZmxleDogMCAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLXdpZHRoOiBhdXRvO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yZm0tY2hpbGQge1xcbiAgdHJhbnNmb3JtOiB2YXIoLS10cmFuc2Zvcm0pO1xcbn1cIik7XG5cbmNvbnN0IE1hcnF1ZWUgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIE1hcnF1ZWUoeyBzdHlsZSA9IHt9LCBjbGFzc05hbWUgPSBcIlwiLCBhdXRvRmlsbCA9IGZhbHNlLCBwbGF5ID0gdHJ1ZSwgcGF1c2VPbkhvdmVyID0gZmFsc2UsIHBhdXNlT25DbGljayA9IGZhbHNlLCBkaXJlY3Rpb24gPSBcImxlZnRcIiwgc3BlZWQgPSA1MCwgZGVsYXkgPSAwLCBsb29wID0gMCwgZ3JhZGllbnQgPSBmYWxzZSwgZ3JhZGllbnRDb2xvciA9IFwid2hpdGVcIiwgZ3JhZGllbnRXaWR0aCA9IDIwMCwgb25GaW5pc2gsIG9uQ3ljbGVDb21wbGV0ZSwgb25Nb3VudCwgY2hpbGRyZW4sIH0sIHJlZikge1xyXG4gICAgLy8gUmVhY3QgSG9va3NcclxuICAgIGNvbnN0IFtjb250YWluZXJXaWR0aCwgc2V0Q29udGFpbmVyV2lkdGhdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbbWFycXVlZVdpZHRoLCBzZXRNYXJxdWVlV2lkdGhdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbbXVsdGlwbGllciwgc2V0TXVsdGlwbGllcl0gPSBSZWFjdC51c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFtpc01vdW50ZWQsIHNldElzTW91bnRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCByb290UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgY29udGFpbmVyUmVmID0gcmVmIHx8IHJvb3RSZWY7XHJcbiAgICBjb25zdCBtYXJxdWVlUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gICAgLy8gQ2FsY3VsYXRlIHdpZHRoIG9mIGNvbnRhaW5lciBhbmQgbWFycXVlZSBhbmQgc2V0IG11bHRpcGxpZXJcclxuICAgIGNvbnN0IGNhbGN1bGF0ZVdpZHRoID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmIChtYXJxdWVlUmVmLmN1cnJlbnQgJiYgY29udGFpbmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyUmVjdCA9IGNvbnRhaW5lclJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXJxdWVlUmVjdCA9IG1hcnF1ZWVSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgbGV0IGNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyUmVjdC53aWR0aDtcclxuICAgICAgICAgICAgbGV0IG1hcnF1ZWVXaWR0aCA9IG1hcnF1ZWVSZWN0LndpZHRoO1xyXG4gICAgICAgICAgICAvLyBTd2FwIHdpZHRoIGFuZCBoZWlnaHQgaWYgZGlyZWN0aW9uIGlzIHVwIG9yIGRvd25cclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ1cFwiIHx8IGRpcmVjdGlvbiA9PT0gXCJkb3duXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyUmVjdC5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBtYXJxdWVlV2lkdGggPSBtYXJxdWVlUmVjdC5oZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGF1dG9GaWxsICYmIGNvbnRhaW5lcldpZHRoICYmIG1hcnF1ZWVXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgc2V0TXVsdGlwbGllcihtYXJxdWVlV2lkdGggPCBjb250YWluZXJXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgID8gTWF0aC5jZWlsKGNvbnRhaW5lcldpZHRoIC8gbWFycXVlZVdpZHRoKVxyXG4gICAgICAgICAgICAgICAgICAgIDogMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRNdWx0aXBsaWVyKDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldENvbnRhaW5lcldpZHRoKGNvbnRhaW5lcldpZHRoKTtcclxuICAgICAgICAgICAgc2V0TWFycXVlZVdpZHRoKG1hcnF1ZWVXaWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2F1dG9GaWxsLCBjb250YWluZXJSZWYsIGRpcmVjdGlvbl0pO1xyXG4gICAgLy8gQ2FsY3VsYXRlIHdpZHRoIGFuZCBtdWx0aXBsaWVyIG9uIG1vdW50IGFuZCBvbiB3aW5kb3cgcmVzaXplXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghaXNNb3VudGVkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY2FsY3VsYXRlV2lkdGgoKTtcclxuICAgICAgICBpZiAobWFycXVlZVJlZi5jdXJyZW50ICYmIGNvbnRhaW5lclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKCgpID0+IGNhbGN1bGF0ZVdpZHRoKCkpO1xyXG4gICAgICAgICAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKGNvbnRhaW5lclJlZi5jdXJyZW50KTtcclxuICAgICAgICAgICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShtYXJxdWVlUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXNpemVPYnNlcnZlcilcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICByZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2NhbGN1bGF0ZVdpZHRoLCBjb250YWluZXJSZWYsIGlzTW91bnRlZF0pO1xyXG4gICAgLy8gUmVjYWxjdWxhdGUgd2lkdGggd2hlbiBjaGlsZHJlbiBjaGFuZ2VcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY2FsY3VsYXRlV2lkdGgoKTtcclxuICAgIH0sIFtjYWxjdWxhdGVXaWR0aCwgY2hpbGRyZW5dKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNNb3VudGVkKHRydWUpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgLy8gUnVucyB0aGUgb25Nb3VudCBjYWxsYmFjaywgaWYgaXQgaXMgYSBmdW5jdGlvbiwgd2hlbiBNYXJxdWVlIGlzIG1vdW50ZWQuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb25Nb3VudCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIG9uTW91bnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICAvLyBBbmltYXRpb24gZHVyYXRpb25cclxuICAgIGNvbnN0IGR1cmF0aW9uID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgaWYgKGF1dG9GaWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAobWFycXVlZVdpZHRoICogbXVsdGlwbGllcikgLyBzcGVlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXJxdWVlV2lkdGggPCBjb250YWluZXJXaWR0aFxyXG4gICAgICAgICAgICAgICAgPyBjb250YWluZXJXaWR0aCAvIHNwZWVkXHJcbiAgICAgICAgICAgICAgICA6IG1hcnF1ZWVXaWR0aCAvIHNwZWVkO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFthdXRvRmlsbCwgY29udGFpbmVyV2lkdGgsIG1hcnF1ZWVXaWR0aCwgbXVsdGlwbGllciwgc3BlZWRdKTtcclxuICAgIGNvbnN0IGNvbnRhaW5lclN0eWxlID0gUmVhY3QudXNlTWVtbygoKSA9PiAoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdHlsZSksIHsgW1wiLS1wYXVzZS1vbi1ob3ZlclwiXTogIXBsYXkgfHwgcGF1c2VPbkhvdmVyID8gXCJwYXVzZWRcIiA6IFwicnVubmluZ1wiLCBbXCItLXBhdXNlLW9uLWNsaWNrXCJdOiAhcGxheSB8fCAocGF1c2VPbkhvdmVyICYmICFwYXVzZU9uQ2xpY2spIHx8IHBhdXNlT25DbGlja1xyXG4gICAgICAgICAgICA/IFwicGF1c2VkXCJcclxuICAgICAgICAgICAgOiBcInJ1bm5pbmdcIiwgW1wiLS13aWR0aFwiXTogZGlyZWN0aW9uID09PSBcInVwXCIgfHwgZGlyZWN0aW9uID09PSBcImRvd25cIiA/IGAxMDB2aGAgOiBcIjEwMCVcIiwgW1wiLS10cmFuc2Zvcm1cIl06IGRpcmVjdGlvbiA9PT0gXCJ1cFwiXHJcbiAgICAgICAgICAgID8gXCJyb3RhdGUoLTkwZGVnKVwiXHJcbiAgICAgICAgICAgIDogZGlyZWN0aW9uID09PSBcImRvd25cIlxyXG4gICAgICAgICAgICAgICAgPyBcInJvdGF0ZSg5MGRlZylcIlxyXG4gICAgICAgICAgICAgICAgOiBcIm5vbmVcIiB9KSksIFtzdHlsZSwgcGxheSwgcGF1c2VPbkhvdmVyLCBwYXVzZU9uQ2xpY2ssIGRpcmVjdGlvbl0pO1xyXG4gICAgY29uc3QgZ3JhZGllbnRTdHlsZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gKHtcclxuICAgICAgICBbXCItLWdyYWRpZW50LWNvbG9yXCJdOiBncmFkaWVudENvbG9yLFxyXG4gICAgICAgIFtcIi0tZ3JhZGllbnQtd2lkdGhcIl06IHR5cGVvZiBncmFkaWVudFdpZHRoID09PSBcIm51bWJlclwiXHJcbiAgICAgICAgICAgID8gYCR7Z3JhZGllbnRXaWR0aH1weGBcclxuICAgICAgICAgICAgOiBncmFkaWVudFdpZHRoLFxyXG4gICAgfSksIFtncmFkaWVudENvbG9yLCBncmFkaWVudFdpZHRoXSk7XHJcbiAgICBjb25zdCBtYXJxdWVlU3R5bGUgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7XHJcbiAgICAgICAgW1wiLS1wbGF5XCJdOiBwbGF5ID8gXCJydW5uaW5nXCIgOiBcInBhdXNlZFwiLFxyXG4gICAgICAgIFtcIi0tZGlyZWN0aW9uXCJdOiBkaXJlY3Rpb24gPT09IFwibGVmdFwiID8gXCJub3JtYWxcIiA6IFwicmV2ZXJzZVwiLFxyXG4gICAgICAgIFtcIi0tZHVyYXRpb25cIl06IGAke2R1cmF0aW9ufXNgLFxyXG4gICAgICAgIFtcIi0tZGVsYXlcIl06IGAke2RlbGF5fXNgLFxyXG4gICAgICAgIFtcIi0taXRlcmF0aW9uLWNvdW50XCJdOiAhIWxvb3AgPyBgJHtsb29wfWAgOiBcImluZmluaXRlXCIsXHJcbiAgICAgICAgW1wiLS1taW4td2lkdGhcIl06IGF1dG9GaWxsID8gYGF1dG9gIDogXCIxMDAlXCIsXHJcbiAgICB9KSwgW3BsYXksIGRpcmVjdGlvbiwgZHVyYXRpb24sIGRlbGF5LCBsb29wLCBhdXRvRmlsbF0pO1xyXG4gICAgY29uc3QgY2hpbGRTdHlsZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gKHtcclxuICAgICAgICBbXCItLXRyYW5zZm9ybVwiXTogZGlyZWN0aW9uID09PSBcInVwXCJcclxuICAgICAgICAgICAgPyBcInJvdGF0ZSg5MGRlZylcIlxyXG4gICAgICAgICAgICA6IGRpcmVjdGlvbiA9PT0gXCJkb3duXCJcclxuICAgICAgICAgICAgICAgID8gXCJyb3RhdGUoLTkwZGVnKVwiXHJcbiAgICAgICAgICAgICAgICA6IFwibm9uZVwiLFxyXG4gICAgfSksIFtkaXJlY3Rpb25dKTtcclxuICAgIC8vIFJlbmRlciB7bXVsdGlwbGllcn0gbnVtYmVyIG9mIGNoaWxkcmVuXHJcbiAgICBjb25zdCBtdWx0aXBseUNoaWxkcmVuID0gUmVhY3QudXNlQ2FsbGJhY2soKG11bHRpcGxpZXIpID0+IHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAuLi5BcnJheShOdW1iZXIuaXNGaW5pdGUobXVsdGlwbGllcikgJiYgbXVsdGlwbGllciA+PSAwID8gbXVsdGlwbGllciA6IDApLFxyXG4gICAgICAgIF0ubWFwKChfLCBpKSA9PiAoUmVhY3RfX2RlZmF1bHRbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCB7IGtleTogaSB9LCBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0X19kZWZhdWx0WydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBjaGlsZFN0eWxlLCBjbGFzc05hbWU6IFwicmZtLWNoaWxkXCIgfSwgY2hpbGQpKTtcclxuICAgICAgICB9KSkpKTtcclxuICAgIH0sIFtjaGlsZFN0eWxlLCBjaGlsZHJlbl0pO1xyXG4gICAgcmV0dXJuICFpc01vdW50ZWQgPyBudWxsIDogKFJlYWN0X19kZWZhdWx0WydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHJlZjogY29udGFpbmVyUmVmLCBzdHlsZTogY29udGFpbmVyU3R5bGUsIGNsYXNzTmFtZTogXCJyZm0tbWFycXVlZS1jb250YWluZXIgXCIgKyBjbGFzc05hbWUgfSxcclxuICAgICAgICBncmFkaWVudCAmJiBSZWFjdF9fZGVmYXVsdFsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogZ3JhZGllbnRTdHlsZSwgY2xhc3NOYW1lOiBcInJmbS1vdmVybGF5XCIgfSksXHJcbiAgICAgICAgUmVhY3RfX2RlZmF1bHRbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInJmbS1tYXJxdWVlXCIsIHN0eWxlOiBtYXJxdWVlU3R5bGUsIG9uQW5pbWF0aW9uSXRlcmF0aW9uOiBvbkN5Y2xlQ29tcGxldGUsIG9uQW5pbWF0aW9uRW5kOiBvbkZpbmlzaCB9LFxyXG4gICAgICAgICAgICBSZWFjdF9fZGVmYXVsdFsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicmZtLWluaXRpYWwtY2hpbGQtY29udGFpbmVyXCIsIHJlZjogbWFycXVlZVJlZiB9LCBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdF9fZGVmYXVsdFsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogY2hpbGRTdHlsZSwgY2xhc3NOYW1lOiBcInJmbS1jaGlsZFwiIH0sIGNoaWxkKSk7XHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgbXVsdGlwbHlDaGlsZHJlbihtdWx0aXBsaWVyIC0gMSkpLFxyXG4gICAgICAgIFJlYWN0X19kZWZhdWx0WydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJyZm0tbWFycXVlZVwiLCBzdHlsZTogbWFycXVlZVN0eWxlIH0sIG11bHRpcGx5Q2hpbGRyZW4obXVsdGlwbGllcikpKSk7XHJcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNYXJxdWVlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-fast-marquee/dist/index.js\n");

/***/ })

};
;