(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_tailwind_react_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-tailwind/react/tailwind.css */ "./node_modules/@material-tailwind/react/tailwind.css");
/* harmony import */ var _material_tailwind_react_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_app_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/app/store */ "./redux/app/store.js");
/* harmony import */ var _badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @badrap/bar-of-progress */ "@badrap/bar-of-progress");
/* harmony import */ var _badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\D_J_S_P\\React,Next\\All_Projects\\Next_Projects\\Next_Mapbox\\mapbox\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const progress = new (_badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_4___default())({
  size: 2,
  color: "#38a169",
  className: "bar-of-progress",
  delay: 70
});
next_router__WEBPACK_IMPORTED_MODULE_5___default().events.on("routeChangeStart", progress.start);
next_router__WEBPACK_IMPORTED_MODULE_5___default().events.on("routeChangeComplete", progress.finish);
next_router__WEBPACK_IMPORTED_MODULE_5___default().events.on("routeChangeError", progress.finish);

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: _redux_app_store__WEBPACK_IMPORTED_MODULE_3__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_cookie__WEBPACK_IMPORTED_MODULE_6__.CookiesProvider, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./redux/app/store.js":
/*!****************************!*\
  !*** ./redux/app/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_UserSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/UserSlice */ "./redux/features/UserSlice.js");
/* harmony import */ var _features_todoSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/todoSlice */ "./redux/features/todoSlice.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: {
    User: _features_UserSlice__WEBPACK_IMPORTED_MODULE_1__.default,
    Todo: _features_todoSlice__WEBPACK_IMPORTED_MODULE_2__.default
  }
}));

/***/ }),

/***/ "./redux/features/UserSlice.js":
/*!*************************************!*\
  !*** ./redux/features/UserSlice.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSlice": () => (/* binding */ UserSlice),
/* harmony export */   "Add": () => (/* binding */ Add),
/* harmony export */   "Remove": () => (/* binding */ Remove),
/* harmony export */   "Check": () => (/* binding */ Check),
/* harmony export */   "selectUser": () => (/* binding */ selectUser),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const UserSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "User",
  initialState: {
    user: null
  },
  reducers: {
    Add: (state, action) => {
      state.user = action.payload;

      const fetch = async () => {
        await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${"http://localhost:3000"}/api/createUser`, {
          email: action.payload.email
        }).then(res => console.log(res)).catch(err => console.log(err));
      };

      fetch();
    },
    Remove: (state, action) => {
      state.user = null;
    },
    Check: (state, action) => {
      state.user = action.payload;
    }
  }
});
const {
  Add,
  Remove,
  Check
} = UserSlice.actions; // The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

const selectUser = state => state.User.user;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserSlice.reducer);

/***/ }),

/***/ "./redux/features/todoSlice.js":
/*!*************************************!*\
  !*** ./redux/features/todoSlice.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoReducer": () => (/* binding */ TodoReducer),
/* harmony export */   "SetTodo": () => (/* binding */ SetTodo),
/* harmony export */   "selectTodo": () => (/* binding */ selectTodo),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const TodoReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'Todo',
  initialState: {
    todo: []
  },
  reducers: {
    SetTodo: (state, action) => {
      state.todo = [...action.payload].reverse();
    }
  }
});
const {
  SetTodo
} = TodoReducer.actions; // The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

const selectTodo = state => state.Todo.todo;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoReducer.reducer);

/***/ }),

/***/ "./node_modules/@material-tailwind/react/tailwind.css":
/*!************************************************************!*\
  !*** ./node_modules/@material-tailwind/react/tailwind.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@badrap/bar-of-progress":
/*!******************************************!*\
  !*** external "@badrap/bar-of-progress" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@badrap/bar-of-progress");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-cookie");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNPLE1BQU1DLFVBQVUsR0FBR2xCLEtBQUssSUFBSUEsS0FBSyxDQUFDVixJQUFOLENBQVdPLElBQXZDO0FBRVAsaUVBQWVILFNBQVMsQ0FBQ0wsT0FBekI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUVPLE1BQU1ELFdBQVcsR0FBR0ksNkRBQVcsQ0FBQztBQUNyQ0csRUFBQUEsSUFBSSxFQUFFLE1BRCtCO0FBRXJDQyxFQUFBQSxZQUFZLEVBQUU7QUFDWnVCLElBQUFBLElBQUksRUFBRTtBQURNLEdBRnVCO0FBS3JDckIsRUFBQUEsUUFBUSxFQUFFO0FBQ1JzQixJQUFBQSxPQUFPLEVBQUUsQ0FBQ3BCLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUMxQkQsTUFBQUEsS0FBSyxDQUFDbUIsSUFBTixHQUFhLENBQUMsR0FBR2xCLE1BQU0sQ0FBQ0MsT0FBWCxFQUFvQm1CLE9BQXBCLEVBQWI7QUFDRDtBQUhPO0FBTDJCLENBQUQsQ0FBL0I7QUFZQSxNQUFNO0FBQUVELEVBQUFBO0FBQUYsSUFBY2hDLFdBQVcsQ0FBQzZCLE9BQWhDLEVBRVA7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTUssVUFBVSxHQUFHdEIsS0FBSyxJQUFJQSxLQUFLLENBQUNULElBQU4sQ0FBVzRCLElBQXZDO0FBRVAsaUVBQWUvQixXQUFXLENBQUNDLE9BQTNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FHM0JBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwYm94Ly4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9tYXBib3gvLi9yZWR1eC9hcHAvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vbWFwYm94Ly4vcmVkdXgvZmVhdHVyZXMvVXNlclNsaWNlLmpzIiwid2VicGFjazovL21hcGJveC8uL3JlZHV4L2ZlYXR1cmVzL3RvZG9TbGljZS5qcyIsIndlYnBhY2s6Ly9tYXBib3gvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L3RhaWx3aW5kLmNzcyIsIndlYnBhY2s6Ly9tYXBib3gvLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiQGJhZHJhcC9iYXItb2YtcHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcInJlYWN0LWNvb2tpZVwiIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCJcbmltcG9ydCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC90YWlsd2luZC5jc3NcIlxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9hcHAvc3RvcmVcIlxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCJAYmFkcmFwL2Jhci1vZi1wcm9ncmVzc1wiXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgeyBDb29raWVzUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtY29va2llXCJcblxuY29uc3QgcHJvZ3Jlc3MgPSBuZXcgUHJvZ3Jlc3NCYXIoe1xuICBzaXplOiAyLFxuICBjb2xvcjogXCIjMzhhMTY5XCIsXG4gIGNsYXNzTmFtZTogXCJiYXItb2YtcHJvZ3Jlc3NcIixcbiAgZGVsYXk6IDcwLFxufSlcblxuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgcHJvZ3Jlc3Muc3RhcnQpXG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBwcm9ncmVzcy5maW5pc2gpXG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VFcnJvclwiLCBwcm9ncmVzcy5maW5pc2gpXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPENvb2tpZXNQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9Db29raWVzUHJvdmlkZXI+XG4gICAgPC9Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgVXNlclJlZHVjZXIgZnJvbSAnLi4vZmVhdHVyZXMvVXNlclNsaWNlJ1xyXG5pbXBvcnQgVG9kb1JlZHVjZXIgZnJvbSAnLi4vZmVhdHVyZXMvdG9kb1NsaWNlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHtcclxuICAgIFVzZXI6IFVzZXJSZWR1Y2VyLFxyXG4gICAgVG9kbzogVG9kb1JlZHVjZXIsXHJcbiAgfSxcclxufSlcclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcIlVzZXJcIixcclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIHVzZXI6IG51bGwsXHJcbiAgfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgQWRkOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS51c2VyID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgY29uc3QgZmV0Y2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgYXhpb3NcclxuICAgICAgICAgIC5wb3N0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hPU1R9L2FwaS9jcmVhdGVVc2VyYCwge1xyXG4gICAgICAgICAgICBlbWFpbDogYWN0aW9uLnBheWxvYWQuZW1haWwsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICAgIH1cclxuICAgICAgZmV0Y2goKVxyXG4gICAgfSxcclxuICAgIFJlbW92ZTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXNlciA9IG51bGxcclxuICAgIH0sXHJcbiAgICBDaGVjazogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXNlciA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBBZGQsIFJlbW92ZSwgQ2hlY2sgfSA9IFVzZXJTbGljZS5hY3Rpb25zXHJcblxyXG4vLyBUaGUgZnVuY3Rpb24gYmVsb3cgaXMgY2FsbGVkIGEgdGh1bmsgYW5kIGFsbG93cyB1cyB0byBwZXJmb3JtIGFzeW5jIGxvZ2ljLiBJdFxyXG4vLyBjYW4gYmUgZGlzcGF0Y2hlZCBsaWtlIGEgcmVndWxhciBhY3Rpb246IGBkaXNwYXRjaChpbmNyZW1lbnRBc3luYygxMCkpYC4gVGhpc1xyXG4vLyB3aWxsIGNhbGwgdGhlIHRodW5rIHdpdGggdGhlIGBkaXNwYXRjaGAgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50LiBBc3luY1xyXG4vLyBjb2RlIGNhbiB0aGVuIGJlIGV4ZWN1dGVkIGFuZCBvdGhlciBhY3Rpb25zIGNhbiBiZSBkaXNwYXRjaGVkXHJcblxyXG4vLyBUaGUgZnVuY3Rpb24gYmVsb3cgaXMgY2FsbGVkIGEgc2VsZWN0b3IgYW5kIGFsbG93cyB1cyB0byBzZWxlY3QgYSB2YWx1ZSBmcm9tXHJcbi8vIHRoZSBzdGF0ZS4gU2VsZWN0b3JzIGNhbiBhbHNvIGJlIGRlZmluZWQgaW5saW5lIHdoZXJlIHRoZXkncmUgdXNlZCBpbnN0ZWFkIG9mXHJcbi8vIGluIHRoZSBzbGljZSBmaWxlLiBGb3IgZXhhbXBsZTogYHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY291bnRlci52YWx1ZSlgXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RVc2VyID0gc3RhdGUgPT4gc3RhdGUuVXNlci51c2VyXHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyU2xpY2UucmVkdWNlclxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmV4cG9ydCBjb25zdCBUb2RvUmVkdWNlciA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnVG9kbycsXHJcbiAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICB0b2RvOiBbXSxcclxuICB9LFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBTZXRUb2RvOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS50b2RvID0gWy4uLmFjdGlvbi5wYXlsb2FkXS5yZXZlcnNlKClcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IFNldFRvZG8gfSA9IFRvZG9SZWR1Y2VyLmFjdGlvbnNcclxuXHJcbi8vIFRoZSBmdW5jdGlvbiBiZWxvdyBpcyBjYWxsZWQgYSB0aHVuayBhbmQgYWxsb3dzIHVzIHRvIHBlcmZvcm0gYXN5bmMgbG9naWMuIEl0XHJcbi8vIGNhbiBiZSBkaXNwYXRjaGVkIGxpa2UgYSByZWd1bGFyIGFjdGlvbjogYGRpc3BhdGNoKGluY3JlbWVudEFzeW5jKDEwKSlgLiBUaGlzXHJcbi8vIHdpbGwgY2FsbCB0aGUgdGh1bmsgd2l0aCB0aGUgYGRpc3BhdGNoYCBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQuIEFzeW5jXHJcbi8vIGNvZGUgY2FuIHRoZW4gYmUgZXhlY3V0ZWQgYW5kIG90aGVyIGFjdGlvbnMgY2FuIGJlIGRpc3BhdGNoZWRcclxuXHJcbi8vIFRoZSBmdW5jdGlvbiBiZWxvdyBpcyBjYWxsZWQgYSBzZWxlY3RvciBhbmQgYWxsb3dzIHVzIHRvIHNlbGVjdCBhIHZhbHVlIGZyb21cclxuLy8gdGhlIHN0YXRlLiBTZWxlY3RvcnMgY2FuIGFsc28gYmUgZGVmaW5lZCBpbmxpbmUgd2hlcmUgdGhleSdyZSB1c2VkIGluc3RlYWQgb2ZcclxuLy8gaW4gdGhlIHNsaWNlIGZpbGUuIEZvciBleGFtcGxlOiBgdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb3VudGVyLnZhbHVlKWBcclxuZXhwb3J0IGNvbnN0IHNlbGVjdFRvZG8gPSBzdGF0ZSA9PiBzdGF0ZS5Ub2RvLnRvZG9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9SZWR1Y2VyLnJlZHVjZXJcclxuIiwiIiwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhZHJhcC9iYXItb2YtcHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJQcm92aWRlciIsInN0b3JlIiwiUHJvZ3Jlc3NCYXIiLCJSb3V0ZXIiLCJDb29raWVzUHJvdmlkZXIiLCJwcm9ncmVzcyIsInNpemUiLCJjb2xvciIsImNsYXNzTmFtZSIsImRlbGF5IiwiZXZlbnRzIiwib24iLCJzdGFydCIsImZpbmlzaCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY29uZmlndXJlU3RvcmUiLCJVc2VyUmVkdWNlciIsIlRvZG9SZWR1Y2VyIiwicmVkdWNlciIsIlVzZXIiLCJUb2RvIiwiY3JlYXRlU2xpY2UiLCJheGlvcyIsIlVzZXJTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJ1c2VyIiwicmVkdWNlcnMiLCJBZGQiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJmZXRjaCIsInBvc3QiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfSE9TVCIsImVtYWlsIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsIlJlbW92ZSIsIkNoZWNrIiwiYWN0aW9ucyIsInNlbGVjdFVzZXIiLCJ0b2RvIiwiU2V0VG9kbyIsInJldmVyc2UiLCJzZWxlY3RUb2RvIl0sInNvdXJjZVJvb3QiOiIifQ==