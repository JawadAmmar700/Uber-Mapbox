(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react/tailwind.css */ "./node_modules/@material-tailwind/react/tailwind.css");
/* harmony import */ var _material_tailwind_react_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_app_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/app/store */ "./redux/app/store.js");
/* harmony import */ var _badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @badrap/bar-of-progress */ "@badrap/bar-of-progress");
/* harmony import */ var _badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\D_J_S_P\\React,Next\\Next_Mapbox\\mapbox\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const progress = new (_badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_5___default())({
  size: 2,
  color: "#38a169",
  className: "bar-of-progress",
  delay: 70
});
next_router__WEBPACK_IMPORTED_MODULE_6___default().events.on("routeChangeStart", progress.start);
next_router__WEBPACK_IMPORTED_MODULE_6___default().events.on("routeChangeComplete", progress.finish);
next_router__WEBPACK_IMPORTED_MODULE_6___default().events.on("routeChangeError", progress.finish);

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    store: _redux_app_store__WEBPACK_IMPORTED_MODULE_4__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./redux/app/store.js":
/*!****************************!*\
  !*** ./redux/app/store.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_UserSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/UserSlice */ "./redux/features/UserSlice.js");
/* harmony import */ var _features_todoSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/todoSlice */ "./redux/features/todoSlice.js");



/* harmony default export */ __webpack_exports__["default"] = ((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSlice": function() { return /* binding */ UserSlice; },
/* harmony export */   "Add": function() { return /* binding */ Add; },
/* harmony export */   "Remove": function() { return /* binding */ Remove; },
/* harmony export */   "Check": function() { return /* binding */ Check; },
/* harmony export */   "selectUser": function() { return /* binding */ selectUser; }
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
        await axios__WEBPACK_IMPORTED_MODULE_1___default().post("api/createUser", {
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
/* harmony default export */ __webpack_exports__["default"] = (UserSlice.reducer);

/***/ }),

/***/ "./redux/features/todoSlice.js":
/*!*************************************!*\
  !*** ./redux/features/todoSlice.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoReducer": function() { return /* binding */ TodoReducer; },
/* harmony export */   "SetTodo": function() { return /* binding */ SetTodo; },
/* harmony export */   "selectTodo": function() { return /* binding */ selectTodo; }
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
/* harmony default export */ __webpack_exports__["default"] = (TodoReducer.reducer);

/***/ }),

/***/ "./node_modules/@material-tailwind/react/tailwind.css":
/*!************************************************************!*\
  !*** ./node_modules/@material-tailwind/react/tailwind.css ***!
  \************************************************************/
/***/ (function() {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "@badrap/bar-of-progress":
/*!******************************************!*\
  !*** external "@badrap/bar-of-progress" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@badrap/bar-of-progress");;

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBib3gvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL21hcGJveC8uL3JlZHV4L2FwcC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9tYXBib3gvLi9yZWR1eC9mZWF0dXJlcy9Vc2VyU2xpY2UuanMiLCJ3ZWJwYWNrOi8vbWFwYm94Ly4vcmVkdXgvZmVhdHVyZXMvdG9kb1NsaWNlLmpzIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcIkBiYWRyYXAvYmFyLW9mLXByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInByb2dyZXNzIiwiUHJvZ3Jlc3NCYXIiLCJzaXplIiwiY29sb3IiLCJjbGFzc05hbWUiLCJkZWxheSIsIlJvdXRlciIsInN0YXJ0IiwiZmluaXNoIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSIsImNvbmZpZ3VyZVN0b3JlIiwicmVkdWNlciIsIlVzZXIiLCJVc2VyUmVkdWNlciIsIlRvZG8iLCJUb2RvUmVkdWNlciIsIlVzZXJTbGljZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInVzZXIiLCJyZWR1Y2VycyIsIkFkZCIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImZldGNoIiwiYXhpb3MiLCJlbWFpbCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJSZW1vdmUiLCJDaGVjayIsImFjdGlvbnMiLCJzZWxlY3RVc2VyIiwidG9kbyIsIlNldFRvZG8iLCJyZXZlcnNlIiwic2VsZWN0VG9kbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsUUFBUSxHQUFHLElBQUlDLGdFQUFKLENBQWdCO0FBQy9CQyxNQUFJLEVBQUUsQ0FEeUI7QUFFL0JDLE9BQUssRUFBRSxTQUZ3QjtBQUcvQkMsV0FBUyxFQUFFLGlCQUhvQjtBQUkvQkMsT0FBSyxFQUFFO0FBSndCLENBQWhCLENBQWpCO0FBT0FDLDREQUFBLENBQWlCLGtCQUFqQixFQUFxQ04sUUFBUSxDQUFDTyxLQUE5QztBQUNBRCw0REFBQSxDQUFpQixxQkFBakIsRUFBd0NOLFFBQVEsQ0FBQ1EsTUFBakQ7QUFDQUYsNERBQUEsQ0FBaUIsa0JBQWpCLEVBQXFDTixRQUFRLENBQUNRLE1BQTlDOztBQUVBLFNBQVNDLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxzQkFDRSw4REFBQyxpREFBRDtBQUFVLFNBQUssRUFBRUMscURBQWpCO0FBQUEsMkJBQ0UsOERBQUMsU0FBRCxvQkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0FBRUQsK0RBQWVGLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFFQSwrREFBZUksZ0VBQWMsQ0FBQztBQUM1QkMsU0FBTyxFQUFFO0FBQ1BDLFFBQUksRUFBRUMsd0RBREM7QUFFUEMsUUFBSSxFQUFFQyx3REFBV0E7QUFGVjtBQURtQixDQUFELENBQTdCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUVPLE1BQU1DLFNBQVMsR0FBR0MsNkRBQVcsQ0FBQztBQUNuQ0MsTUFBSSxFQUFFLE1BRDZCO0FBRW5DQyxjQUFZLEVBQUU7QUFDWkMsUUFBSSxFQUFFO0FBRE0sR0FGcUI7QUFLbkNDLFVBQVEsRUFBRTtBQUNSQyxPQUFHLEVBQUUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ3RCRCxXQUFLLENBQUNILElBQU4sR0FBYUksTUFBTSxDQUFDQyxPQUFwQjs7QUFDQSxZQUFNQyxLQUFLLEdBQUcsWUFBWTtBQUN4QixjQUFNQyxpREFBQSxDQUNFLGdCQURGLEVBQ29CO0FBQ3RCQyxlQUFLLEVBQUVKLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlRztBQURBLFNBRHBCLEVBSUhDLElBSkcsQ0FJRUMsR0FBRyxJQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUpULEVBS0hHLEtBTEcsQ0FLR0MsR0FBRyxJQUFJSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsR0FBWixDQUxWLENBQU47QUFNRCxPQVBEOztBQVFBUixXQUFLO0FBQ04sS0FaTztBQWFSUyxVQUFNLEVBQUUsQ0FBQ1osS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ3pCRCxXQUFLLENBQUNILElBQU4sR0FBYSxJQUFiO0FBQ0QsS0FmTztBQWdCUmdCLFNBQUssRUFBRSxDQUFDYixLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDeEJELFdBQUssQ0FBQ0gsSUFBTixHQUFhSSxNQUFNLENBQUNDLE9BQXBCO0FBQ0Q7QUFsQk87QUFMeUIsQ0FBRCxDQUE3QjtBQTJCQSxNQUFNO0FBQUVILEtBQUY7QUFBT2EsUUFBUDtBQUFlQztBQUFmLElBQXlCcEIsU0FBUyxDQUFDcUIsT0FBekMsQyxDQUVQO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNPLE1BQU1DLFVBQVUsR0FBR2YsS0FBSyxJQUFJQSxLQUFLLENBQUNYLElBQU4sQ0FBV1EsSUFBdkM7QUFFUCwrREFBZUosU0FBUyxDQUFDTCxPQUF6QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUVPLE1BQU1JLFdBQVcsR0FBR0UsNkRBQVcsQ0FBQztBQUNyQ0MsTUFBSSxFQUFFLE1BRCtCO0FBRXJDQyxjQUFZLEVBQUU7QUFDWm9CLFFBQUksRUFBRTtBQURNLEdBRnVCO0FBS3JDbEIsVUFBUSxFQUFFO0FBQ1JtQixXQUFPLEVBQUUsQ0FBQ2pCLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUMxQkQsV0FBSyxDQUFDZ0IsSUFBTixHQUFhLENBQUMsR0FBR2YsTUFBTSxDQUFDQyxPQUFYLEVBQW9CZ0IsT0FBcEIsRUFBYjtBQUNEO0FBSE87QUFMMkIsQ0FBRCxDQUEvQjtBQVlBLE1BQU07QUFBRUQ7QUFBRixJQUFjekIsV0FBVyxDQUFDc0IsT0FBaEMsQyxDQUVQO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNPLE1BQU1LLFVBQVUsR0FBR25CLEtBQUssSUFBSUEsS0FBSyxDQUFDVCxJQUFOLENBQVd5QixJQUF2QztBQUVQLCtEQUFleEIsV0FBVyxDQUFDSixPQUEzQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBLHFEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIlxuaW1wb3J0IFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L3RhaWx3aW5kLmNzc1wiXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3JlZHV4L2FwcC9zdG9yZVwiXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIkBiYWRyYXAvYmFyLW9mLXByb2dyZXNzXCJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCJcblxuY29uc3QgcHJvZ3Jlc3MgPSBuZXcgUHJvZ3Jlc3NCYXIoe1xuICBzaXplOiAyLFxuICBjb2xvcjogXCIjMzhhMTY5XCIsXG4gIGNsYXNzTmFtZTogXCJiYXItb2YtcHJvZ3Jlc3NcIixcbiAgZGVsYXk6IDcwLFxufSlcblxuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgcHJvZ3Jlc3Muc3RhcnQpXG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBwcm9ncmVzcy5maW5pc2gpXG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VFcnJvclwiLCBwcm9ncmVzcy5maW5pc2gpXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiIsImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IFVzZXJSZWR1Y2VyIGZyb20gJy4uL2ZlYXR1cmVzL1VzZXJTbGljZSdcclxuaW1wb3J0IFRvZG9SZWR1Y2VyIGZyb20gJy4uL2ZlYXR1cmVzL3RvZG9TbGljZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiB7XHJcbiAgICBVc2VyOiBVc2VyUmVkdWNlcixcclxuICAgIFRvZG86IFRvZG9SZWR1Y2VyLFxyXG4gIH0sXHJcbn0pXHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJVc2VyXCIsXHJcbiAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICB1c2VyOiBudWxsLFxyXG4gIH0sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIEFkZDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXNlciA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIGNvbnN0IGZldGNoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgICAgICAucG9zdChcImFwaS9jcmVhdGVVc2VyXCIsIHtcclxuICAgICAgICAgICAgZW1haWw6IGFjdGlvbi5wYXlsb2FkLmVtYWlsLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgICB9XHJcbiAgICAgIGZldGNoKClcclxuICAgIH0sXHJcbiAgICBSZW1vdmU6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnVzZXIgPSBudWxsXHJcbiAgICB9LFxyXG4gICAgQ2hlY2s6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnVzZXIgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgfSxcclxuICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHsgQWRkLCBSZW1vdmUsIENoZWNrIH0gPSBVc2VyU2xpY2UuYWN0aW9uc1xyXG5cclxuLy8gVGhlIGZ1bmN0aW9uIGJlbG93IGlzIGNhbGxlZCBhIHRodW5rIGFuZCBhbGxvd3MgdXMgdG8gcGVyZm9ybSBhc3luYyBsb2dpYy4gSXRcclxuLy8gY2FuIGJlIGRpc3BhdGNoZWQgbGlrZSBhIHJlZ3VsYXIgYWN0aW9uOiBgZGlzcGF0Y2goaW5jcmVtZW50QXN5bmMoMTApKWAuIFRoaXNcclxuLy8gd2lsbCBjYWxsIHRoZSB0aHVuayB3aXRoIHRoZSBgZGlzcGF0Y2hgIGZ1bmN0aW9uIGFzIHRoZSBmaXJzdCBhcmd1bWVudC4gQXN5bmNcclxuLy8gY29kZSBjYW4gdGhlbiBiZSBleGVjdXRlZCBhbmQgb3RoZXIgYWN0aW9ucyBjYW4gYmUgZGlzcGF0Y2hlZFxyXG5cclxuLy8gVGhlIGZ1bmN0aW9uIGJlbG93IGlzIGNhbGxlZCBhIHNlbGVjdG9yIGFuZCBhbGxvd3MgdXMgdG8gc2VsZWN0IGEgdmFsdWUgZnJvbVxyXG4vLyB0aGUgc3RhdGUuIFNlbGVjdG9ycyBjYW4gYWxzbyBiZSBkZWZpbmVkIGlubGluZSB3aGVyZSB0aGV5J3JlIHVzZWQgaW5zdGVhZCBvZlxyXG4vLyBpbiB0aGUgc2xpY2UgZmlsZS4gRm9yIGV4YW1wbGU6IGB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvdW50ZXIudmFsdWUpYFxyXG5leHBvcnQgY29uc3Qgc2VsZWN0VXNlciA9IHN0YXRlID0+IHN0YXRlLlVzZXIudXNlclxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclNsaWNlLnJlZHVjZXJcclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgY29uc3QgVG9kb1JlZHVjZXIgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ1RvZG8nLFxyXG4gIGluaXRpYWxTdGF0ZToge1xyXG4gICAgdG9kbzogW10sXHJcbiAgfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgU2V0VG9kbzogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudG9kbyA9IFsuLi5hY3Rpb24ucGF5bG9hZF0ucmV2ZXJzZSgpXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBTZXRUb2RvIH0gPSBUb2RvUmVkdWNlci5hY3Rpb25zXHJcblxyXG4vLyBUaGUgZnVuY3Rpb24gYmVsb3cgaXMgY2FsbGVkIGEgdGh1bmsgYW5kIGFsbG93cyB1cyB0byBwZXJmb3JtIGFzeW5jIGxvZ2ljLiBJdFxyXG4vLyBjYW4gYmUgZGlzcGF0Y2hlZCBsaWtlIGEgcmVndWxhciBhY3Rpb246IGBkaXNwYXRjaChpbmNyZW1lbnRBc3luYygxMCkpYC4gVGhpc1xyXG4vLyB3aWxsIGNhbGwgdGhlIHRodW5rIHdpdGggdGhlIGBkaXNwYXRjaGAgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50LiBBc3luY1xyXG4vLyBjb2RlIGNhbiB0aGVuIGJlIGV4ZWN1dGVkIGFuZCBvdGhlciBhY3Rpb25zIGNhbiBiZSBkaXNwYXRjaGVkXHJcblxyXG4vLyBUaGUgZnVuY3Rpb24gYmVsb3cgaXMgY2FsbGVkIGEgc2VsZWN0b3IgYW5kIGFsbG93cyB1cyB0byBzZWxlY3QgYSB2YWx1ZSBmcm9tXHJcbi8vIHRoZSBzdGF0ZS4gU2VsZWN0b3JzIGNhbiBhbHNvIGJlIGRlZmluZWQgaW5saW5lIHdoZXJlIHRoZXkncmUgdXNlZCBpbnN0ZWFkIG9mXHJcbi8vIGluIHRoZSBzbGljZSBmaWxlLiBGb3IgZXhhbXBsZTogYHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY291bnRlci52YWx1ZSlgXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RUb2RvID0gc3RhdGUgPT4gc3RhdGUuVG9kby50b2RvXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvUmVkdWNlci5yZWR1Y2VyXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWRyYXAvYmFyLW9mLXByb2dyZXNzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=