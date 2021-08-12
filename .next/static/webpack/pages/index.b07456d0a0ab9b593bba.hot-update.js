self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/EntryPage.js":
/*!*********************************!*\
  !*** ./components/EntryPage.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SignIn */ "./components/SignIn.js");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-tailwind/react/Button */ "./node_modules/@material-tailwind/react/Button.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/features/UserSlice */ "./redux/features/UserSlice.js");
/* harmony import */ var _GeoCodingTodo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./GeoCodingTodo */ "./components/GeoCodingTodo.js");
/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! magic-sdk */ "./node_modules/magic-sdk/dist/es/index.js");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\D_J_S_P\\React,Next\\Next_Mapbox\\mapbox\\components\\EntryPage.js",
    _this = undefined,
    _s = $RefreshSig$();










var magic = "";

if (true) {
  magic = new magic_sdk__WEBPACK_IMPORTED_MODULE_11__.Magic("pk_live_AE17745A8A693DEA");
}

var EntryPage = function EntryPage() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_9__.selectUser);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();

  var _useCookies = (0,react_cookie__WEBPACK_IMPORTED_MODULE_12__.useCookies)(["userToken"]),
      _useCookies2 = (0,C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useCookies, 3),
      cookies = _useCookies2[0],
      setCookie = _useCookies2[1],
      removeCookie = _useCookies2[2];

  var handleLogout = /*#__PURE__*/function () {
    var _ref = (0,C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      return C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return magic.user.logout();

            case 2:
              removeCookie("userToken");
              dispatch((0,_redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_9__.Remove)());

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleLogout() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex justify-center items-center w-full h-screen bg-gray-300",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "absolute top-4 right-4 flex space-x-4",
      children: [user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_6__.default, {
          color: "red",
          buttonType: "outline",
          size: "regular",
          rounded: false,
          block: false,
          iconOnly: false,
          ripple: "dark",
          onClick: handleLogout,
          children: "Log Out"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, _this)
      }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_6__.default, {
        color: "lightBlue",
        buttonType: "outline",
        size: "regular",
        rounded: false,
        block: false,
        iconOnly: false,
        ripple: "dark",
        onClick: function onClick() {
          return router.push("/Map");
        },
        disabled: !user ? true : false,
        children: "View Map"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "absolute top-4 left-8",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "text-3xl text-blue-400 mr-4",
        children: "Hello"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "text-gray-700",
        children: user === null || user === void 0 ? void 0 : user.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }, _this), !user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignIn__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 16
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GeoCodingTodo__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 29
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, _this);
};

_s(EntryPage, "yY5sGIWBeGD7iknFoCs8c3rcxAA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter, react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch, react_cookie__WEBPACK_IMPORTED_MODULE_12__.useCookies];
});

_c = EntryPage;
/* harmony default export */ __webpack_exports__["default"] = (EntryPage);

var _c;

$RefreshReg$(_c, "EntryPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FbnRyeVBhZ2UuanMiXSwibmFtZXMiOlsibWFnaWMiLCJNYWdpYyIsInByb2Nlc3MiLCJFbnRyeVBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VyIiwidXNlU2VsZWN0b3IiLCJzZWxlY3RVc2VyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUNvb2tpZXMiLCJjb29raWVzIiwic2V0Q29va2llIiwicmVtb3ZlQ29va2llIiwiaGFuZGxlTG9nb3V0IiwibG9nb3V0IiwiUmVtb3ZlIiwicHVzaCIsImVtYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEtBQUssR0FBRyxFQUFaOztBQUNBLElBQUksTUFBK0I7QUFDakNBLE9BQUssR0FBRyxJQUFJQyw2Q0FBSixDQUFVQywwQkFBVixDQUFSO0FBQ0Q7O0FBRUQsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUN0QixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyx3REFBVyxDQUFDQyxpRUFBRCxDQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUI7O0FBSHNCLG9CQUlxQkMseURBQVUsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUovQjtBQUFBO0FBQUEsTUFJZkMsT0FKZTtBQUFBLE1BSU5DLFNBSk07QUFBQSxNQUlLQyxZQUpMOztBQU10QixNQUFNQyxZQUFZO0FBQUEscVVBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ2JmLEtBQUssQ0FBQ00sSUFBTixDQUFXVSxNQUFYLEVBRGE7O0FBQUE7QUFFbkJGLDBCQUFZLENBQUMsV0FBRCxDQUFaO0FBQ0FMLHNCQUFRLENBQUNRLGlFQUFNLEVBQVAsQ0FBUjs7QUFIbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWkYsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFNQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyw4REFBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLHVDQUFmO0FBQUEsaUJBQ0dULElBQUksaUJBQ0g7QUFBQSwrQkFDRSw4REFBQyxvRUFBRDtBQUNFLGVBQUssRUFBQyxLQURSO0FBRUUsb0JBQVUsRUFBQyxTQUZiO0FBR0UsY0FBSSxFQUFDLFNBSFA7QUFJRSxpQkFBTyxFQUFFLEtBSlg7QUFLRSxlQUFLLEVBQUUsS0FMVDtBQU1FLGtCQUFRLEVBQUUsS0FOWjtBQU9FLGdCQUFNLEVBQUMsTUFQVDtBQVFFLGlCQUFPLEVBQUVTLFlBUlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERix1QkFGSixlQWlCRSw4REFBQyxvRUFBRDtBQUNFLGFBQUssRUFBQyxXQURSO0FBRUUsa0JBQVUsRUFBQyxTQUZiO0FBR0UsWUFBSSxFQUFDLFNBSFA7QUFJRSxlQUFPLEVBQUUsS0FKWDtBQUtFLGFBQUssRUFBRSxLQUxUO0FBTUUsZ0JBQVEsRUFBRSxLQU5aO0FBT0UsY0FBTSxFQUFDLE1BUFQ7QUFRRSxlQUFPLEVBQUU7QUFBQSxpQkFBTVgsTUFBTSxDQUFDYyxJQUFQLENBQVksTUFBWixDQUFOO0FBQUEsU0FSWDtBQVNFLGdCQUFRLEVBQUUsQ0FBQ1osSUFBRCxHQUFRLElBQVIsR0FBZSxLQVQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQWlDR0EsSUFBSSxpQkFDSDtBQUFJLGVBQVMsRUFBQyx1QkFBZDtBQUFBLDhCQUNFO0FBQU0saUJBQVMsRUFBQyw2QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUdFO0FBQU0saUJBQVMsRUFBQyxlQUFoQjtBQUFBLGtCQUFpQ0EsSUFBakMsYUFBaUNBLElBQWpDLHVCQUFpQ0EsSUFBSSxDQUFFYTtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbENKLEVBd0NHLENBQUNiLElBQUQsZ0JBQVEsOERBQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFSLGdCQUFxQiw4REFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeEN4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRDRCxDQXhERDs7R0FBTUgsUztVQUNXRSxrRCxFQUNGRSxvRCxFQUNJRyxvRCxFQUMwQkMscUQ7OztLQUp2Q1IsUztBQTBETiwrREFBZUEsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMDc0NTZkMGEwYWI5YjU5M2JiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBTaWduSW4gZnJvbSBcIi4vU2lnbkluXCJcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0J1dHRvblwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IHNlbGVjdFVzZXIsIFJlbW92ZSB9IGZyb20gXCIuLi9yZWR1eC9mZWF0dXJlcy9Vc2VyU2xpY2VcIlxyXG5pbXBvcnQgR2VvQ29kaW5nVG9kbyBmcm9tIFwiLi9HZW9Db2RpbmdUb2RvXCJcclxuaW1wb3J0IHsgTWFnaWMgfSBmcm9tIFwibWFnaWMtc2RrXCJcclxuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gXCJyZWFjdC1jb29raWVcIlxyXG5cclxubGV0IG1hZ2ljID0gXCJcIlxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gIG1hZ2ljID0gbmV3IE1hZ2ljKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01BR0lDX0tFWSlcclxufVxyXG5cclxuY29uc3QgRW50cnlQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdFVzZXIpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgW2Nvb2tpZXMsIHNldENvb2tpZSwgcmVtb3ZlQ29va2llXSA9IHVzZUNvb2tpZXMoW1widXNlclRva2VuXCJdKVxyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBtYWdpYy51c2VyLmxvZ291dCgpXHJcbiAgICByZW1vdmVDb29raWUoXCJ1c2VyVG9rZW5cIilcclxuICAgIGRpc3BhdGNoKFJlbW92ZSgpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIGgtc2NyZWVuIGJnLWdyYXktMzAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgcmlnaHQtNCBmbGV4IHNwYWNlLXgtNFwiPlxyXG4gICAgICAgIHt1c2VyICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXHJcbiAgICAgICAgICAgICAgYnV0dG9uVHlwZT1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgIHNpemU9XCJyZWd1bGFyXCJcclxuICAgICAgICAgICAgICByb3VuZGVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBibG9jaz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgaWNvbk9ubHk9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIHJpcHBsZT1cImRhcmtcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIExvZyBPdXRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGNvbG9yPVwibGlnaHRCbHVlXCJcclxuICAgICAgICAgIGJ1dHRvblR5cGU9XCJvdXRsaW5lXCJcclxuICAgICAgICAgIHNpemU9XCJyZWd1bGFyXCJcclxuICAgICAgICAgIHJvdW5kZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgYmxvY2s9e2ZhbHNlfVxyXG4gICAgICAgICAgaWNvbk9ubHk9e2ZhbHNlfVxyXG4gICAgICAgICAgcmlwcGxlPVwiZGFya1wiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9NYXBcIil9XHJcbiAgICAgICAgICBkaXNhYmxlZD17IXVzZXIgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgVmlldyBNYXBcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7dXNlciAmJiAoXHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IGxlZnQtOFwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1ibHVlLTQwMCBtci00XCI+SGVsbG88L3NwYW4+XHJcblxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMFwiPnt1c2VyPy5lbWFpbH08L3NwYW4+XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgKX1cclxuICAgICAgeyF1c2VyID8gPFNpZ25JbiAvPiA6IDxHZW9Db2RpbmdUb2RvIC8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbnRyeVBhZ2VcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==