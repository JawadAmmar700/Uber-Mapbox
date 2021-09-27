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
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\D_J_S_P\\React,Next\\All_Projects\\Next_Projects\\Next_Mapbox\\mapbox\\pages\\_app.js";

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
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_cookie__WEBPACK_IMPORTED_MODULE_7__.CookiesProvider, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
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

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-cookie");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBib3gvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL21hcGJveC8uL3JlZHV4L2FwcC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9tYXBib3gvLi9yZWR1eC9mZWF0dXJlcy9Vc2VyU2xpY2UuanMiLCJ3ZWJwYWNrOi8vbWFwYm94Ly4vcmVkdXgvZmVhdHVyZXMvdG9kb1NsaWNlLmpzIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcIkBiYWRyYXAvYmFyLW9mLXByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJyZWFjdC1jb29raWVcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInByb2dyZXNzIiwiUHJvZ3Jlc3NCYXIiLCJzaXplIiwiY29sb3IiLCJjbGFzc05hbWUiLCJkZWxheSIsIlJvdXRlciIsInN0YXJ0IiwiZmluaXNoIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSIsImNvbmZpZ3VyZVN0b3JlIiwicmVkdWNlciIsIlVzZXIiLCJVc2VyUmVkdWNlciIsIlRvZG8iLCJUb2RvUmVkdWNlciIsIlVzZXJTbGljZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInVzZXIiLCJyZWR1Y2VycyIsIkFkZCIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImZldGNoIiwiYXhpb3MiLCJlbWFpbCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJSZW1vdmUiLCJDaGVjayIsImFjdGlvbnMiLCJzZWxlY3RVc2VyIiwidG9kbyIsIlNldFRvZG8iLCJyZXZlcnNlIiwic2VsZWN0VG9kbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFFBQVEsR0FBRyxJQUFJQyxnRUFBSixDQUFnQjtBQUMvQkMsTUFBSSxFQUFFLENBRHlCO0FBRS9CQyxPQUFLLEVBQUUsU0FGd0I7QUFHL0JDLFdBQVMsRUFBRSxpQkFIb0I7QUFJL0JDLE9BQUssRUFBRTtBQUp3QixDQUFoQixDQUFqQjtBQU9BQyw0REFBQSxDQUFpQixrQkFBakIsRUFBcUNOLFFBQVEsQ0FBQ08sS0FBOUM7QUFDQUQsNERBQUEsQ0FBaUIscUJBQWpCLEVBQXdDTixRQUFRLENBQUNRLE1BQWpEO0FBQ0FGLDREQUFBLENBQWlCLGtCQUFqQixFQUFxQ04sUUFBUSxDQUFDUSxNQUE5Qzs7QUFFQSxTQUFTQyxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsc0JBQ0UsOERBQUMsaURBQUQ7QUFBVSxTQUFLLEVBQUVDLHFEQUFqQjtBQUFBLDJCQUNFLDhEQUFDLHlEQUFEO0FBQUEsNkJBQ0UsOERBQUMsU0FBRCxvQkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EOztBQUVELCtEQUFlRixLQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBRUEsK0RBQWVJLGdFQUFjLENBQUM7QUFDNUJDLFNBQU8sRUFBRTtBQUNQQyxRQUFJLEVBQUVDLHdEQURDO0FBRVBDLFFBQUksRUFBRUMsd0RBQVdBO0FBRlY7QUFEbUIsQ0FBRCxDQUE3QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFFTyxNQUFNQyxTQUFTLEdBQUdDLDZEQUFXLENBQUM7QUFDbkNDLE1BQUksRUFBRSxNQUQ2QjtBQUVuQ0MsY0FBWSxFQUFFO0FBQ1pDLFFBQUksRUFBRTtBQURNLEdBRnFCO0FBS25DQyxVQUFRLEVBQUU7QUFDUkMsT0FBRyxFQUFFLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUN0QkQsV0FBSyxDQUFDSCxJQUFOLEdBQWFJLE1BQU0sQ0FBQ0MsT0FBcEI7O0FBQ0EsWUFBTUMsS0FBSyxHQUFHLFlBQVk7QUFDeEIsY0FBTUMsaURBQUEsQ0FDRSxnQkFERixFQUNvQjtBQUN0QkMsZUFBSyxFQUFFSixNQUFNLENBQUNDLE9BQVAsQ0FBZUc7QUFEQSxTQURwQixFQUlIQyxJQUpHLENBSUVDLEdBQUcsSUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FKVCxFQUtIRyxLQUxHLENBS0dDLEdBQUcsSUFBSUgsT0FBTyxDQUFDQyxHQUFSLENBQVlFLEdBQVosQ0FMVixDQUFOO0FBTUQsT0FQRDs7QUFRQVIsV0FBSztBQUNOLEtBWk87QUFhUlMsVUFBTSxFQUFFLENBQUNaLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUN6QkQsV0FBSyxDQUFDSCxJQUFOLEdBQWEsSUFBYjtBQUNELEtBZk87QUFnQlJnQixTQUFLLEVBQUUsQ0FBQ2IsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ3hCRCxXQUFLLENBQUNILElBQU4sR0FBYUksTUFBTSxDQUFDQyxPQUFwQjtBQUNEO0FBbEJPO0FBTHlCLENBQUQsQ0FBN0I7QUEyQkEsTUFBTTtBQUFFSCxLQUFGO0FBQU9hLFFBQVA7QUFBZUM7QUFBZixJQUF5QnBCLFNBQVMsQ0FBQ3FCLE9BQXpDLEMsQ0FFUDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNQyxVQUFVLEdBQUdmLEtBQUssSUFBSUEsS0FBSyxDQUFDWCxJQUFOLENBQVdRLElBQXZDO0FBRVAsK0RBQWVKLFNBQVMsQ0FBQ0wsT0FBekIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFFTyxNQUFNSSxXQUFXLEdBQUdFLDZEQUFXLENBQUM7QUFDckNDLE1BQUksRUFBRSxNQUQrQjtBQUVyQ0MsY0FBWSxFQUFFO0FBQ1pvQixRQUFJLEVBQUU7QUFETSxHQUZ1QjtBQUtyQ2xCLFVBQVEsRUFBRTtBQUNSbUIsV0FBTyxFQUFFLENBQUNqQixLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDMUJELFdBQUssQ0FBQ2dCLElBQU4sR0FBYSxDQUFDLEdBQUdmLE1BQU0sQ0FBQ0MsT0FBWCxFQUFvQmdCLE9BQXBCLEVBQWI7QUFDRDtBQUhPO0FBTDJCLENBQUQsQ0FBL0I7QUFZQSxNQUFNO0FBQUVEO0FBQUYsSUFBY3pCLFdBQVcsQ0FBQ3NCLE9BQWhDLEMsQ0FFUDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNSyxVQUFVLEdBQUduQixLQUFLLElBQUlBLEtBQUssQ0FBQ1QsSUFBTixDQUFXeUIsSUFBdkM7QUFFUCwrREFBZXhCLFdBQVcsQ0FBQ0osT0FBM0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCJcbmltcG9ydCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC90YWlsd2luZC5jc3NcIlxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9hcHAvc3RvcmVcIlxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCJAYmFkcmFwL2Jhci1vZi1wcm9ncmVzc1wiXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgeyBDb29raWVzUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtY29va2llXCJcblxuY29uc3QgcHJvZ3Jlc3MgPSBuZXcgUHJvZ3Jlc3NCYXIoe1xuICBzaXplOiAyLFxuICBjb2xvcjogXCIjMzhhMTY5XCIsXG4gIGNsYXNzTmFtZTogXCJiYXItb2YtcHJvZ3Jlc3NcIixcbiAgZGVsYXk6IDcwLFxufSlcblxuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgcHJvZ3Jlc3Muc3RhcnQpXG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBwcm9ncmVzcy5maW5pc2gpXG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VFcnJvclwiLCBwcm9ncmVzcy5maW5pc2gpXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPENvb2tpZXNQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9Db29raWVzUHJvdmlkZXI+XG4gICAgPC9Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgVXNlclJlZHVjZXIgZnJvbSAnLi4vZmVhdHVyZXMvVXNlclNsaWNlJ1xyXG5pbXBvcnQgVG9kb1JlZHVjZXIgZnJvbSAnLi4vZmVhdHVyZXMvdG9kb1NsaWNlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHtcclxuICAgIFVzZXI6IFVzZXJSZWR1Y2VyLFxyXG4gICAgVG9kbzogVG9kb1JlZHVjZXIsXHJcbiAgfSxcclxufSlcclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcIlVzZXJcIixcclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIHVzZXI6IG51bGwsXHJcbiAgfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgQWRkOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS51c2VyID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgY29uc3QgZmV0Y2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgYXhpb3NcclxuICAgICAgICAgIC5wb3N0KFwiYXBpL2NyZWF0ZVVzZXJcIiwge1xyXG4gICAgICAgICAgICBlbWFpbDogYWN0aW9uLnBheWxvYWQuZW1haWwsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICAgIH1cclxuICAgICAgZmV0Y2goKVxyXG4gICAgfSxcclxuICAgIFJlbW92ZTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXNlciA9IG51bGxcclxuICAgIH0sXHJcbiAgICBDaGVjazogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXNlciA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBBZGQsIFJlbW92ZSwgQ2hlY2sgfSA9IFVzZXJTbGljZS5hY3Rpb25zXHJcblxyXG4vLyBUaGUgZnVuY3Rpb24gYmVsb3cgaXMgY2FsbGVkIGEgdGh1bmsgYW5kIGFsbG93cyB1cyB0byBwZXJmb3JtIGFzeW5jIGxvZ2ljLiBJdFxyXG4vLyBjYW4gYmUgZGlzcGF0Y2hlZCBsaWtlIGEgcmVndWxhciBhY3Rpb246IGBkaXNwYXRjaChpbmNyZW1lbnRBc3luYygxMCkpYC4gVGhpc1xyXG4vLyB3aWxsIGNhbGwgdGhlIHRodW5rIHdpdGggdGhlIGBkaXNwYXRjaGAgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50LiBBc3luY1xyXG4vLyBjb2RlIGNhbiB0aGVuIGJlIGV4ZWN1dGVkIGFuZCBvdGhlciBhY3Rpb25zIGNhbiBiZSBkaXNwYXRjaGVkXHJcblxyXG4vLyBUaGUgZnVuY3Rpb24gYmVsb3cgaXMgY2FsbGVkIGEgc2VsZWN0b3IgYW5kIGFsbG93cyB1cyB0byBzZWxlY3QgYSB2YWx1ZSBmcm9tXHJcbi8vIHRoZSBzdGF0ZS4gU2VsZWN0b3JzIGNhbiBhbHNvIGJlIGRlZmluZWQgaW5saW5lIHdoZXJlIHRoZXkncmUgdXNlZCBpbnN0ZWFkIG9mXHJcbi8vIGluIHRoZSBzbGljZSBmaWxlLiBGb3IgZXhhbXBsZTogYHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY291bnRlci52YWx1ZSlgXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RVc2VyID0gc3RhdGUgPT4gc3RhdGUuVXNlci51c2VyXHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyU2xpY2UucmVkdWNlclxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmV4cG9ydCBjb25zdCBUb2RvUmVkdWNlciA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnVG9kbycsXHJcbiAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICB0b2RvOiBbXSxcclxuICB9LFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBTZXRUb2RvOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS50b2RvID0gWy4uLmFjdGlvbi5wYXlsb2FkXS5yZXZlcnNlKClcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IFNldFRvZG8gfSA9IFRvZG9SZWR1Y2VyLmFjdGlvbnNcclxuXHJcbi8vIFRoZSBmdW5jdGlvbiBiZWxvdyBpcyBjYWxsZWQgYSB0aHVuayBhbmQgYWxsb3dzIHVzIHRvIHBlcmZvcm0gYXN5bmMgbG9naWMuIEl0XHJcbi8vIGNhbiBiZSBkaXNwYXRjaGVkIGxpa2UgYSByZWd1bGFyIGFjdGlvbjogYGRpc3BhdGNoKGluY3JlbWVudEFzeW5jKDEwKSlgLiBUaGlzXHJcbi8vIHdpbGwgY2FsbCB0aGUgdGh1bmsgd2l0aCB0aGUgYGRpc3BhdGNoYCBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQuIEFzeW5jXHJcbi8vIGNvZGUgY2FuIHRoZW4gYmUgZXhlY3V0ZWQgYW5kIG90aGVyIGFjdGlvbnMgY2FuIGJlIGRpc3BhdGNoZWRcclxuXHJcbi8vIFRoZSBmdW5jdGlvbiBiZWxvdyBpcyBjYWxsZWQgYSBzZWxlY3RvciBhbmQgYWxsb3dzIHVzIHRvIHNlbGVjdCBhIHZhbHVlIGZyb21cclxuLy8gdGhlIHN0YXRlLiBTZWxlY3RvcnMgY2FuIGFsc28gYmUgZGVmaW5lZCBpbmxpbmUgd2hlcmUgdGhleSdyZSB1c2VkIGluc3RlYWQgb2ZcclxuLy8gaW4gdGhlIHNsaWNlIGZpbGUuIEZvciBleGFtcGxlOiBgdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb3VudGVyLnZhbHVlKWBcclxuZXhwb3J0IGNvbnN0IHNlbGVjdFRvZG8gPSBzdGF0ZSA9PiBzdGF0ZS5Ub2RvLnRvZG9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9SZWR1Y2VyLnJlZHVjZXJcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhZHJhcC9iYXItb2YtcHJvZ3Jlc3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9