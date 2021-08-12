self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_EntryPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/EntryPage */ "./components/EntryPage.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/features/UserSlice */ "./redux/features/UserSlice.js");
/* harmony import */ var _redux_features_todoSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/features/todoSlice */ "./redux/features/todoSlice.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! magic-sdk */ "./node_modules/magic-sdk/dist/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\D_J_S_P\\React,Next\\Next_Mapbox\\mapbox\\pages\\index.js",
    _s = $RefreshSig$();










var magic = "";

if (true) {
  magic = new magic_sdk__WEBPACK_IMPORTED_MODULE_10__.Magic("pk_live_AE17745A8A693DEA");
}

var __N_SSP = true;
function Home(_ref) {
  _s();

  var user = _ref.user;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(function () {
    if (user) {
      dispatch((0,_redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_7__.Check)(user));
    }

    var chechUser_FetchTodos = /*#__PURE__*/function () {
      var _ref2 = (0,C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        return C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_9___default().get("/api/createLocation").then(function (res) {
                  dispatch((0,_redux_features_todoSlice__WEBPACK_IMPORTED_MODULE_8__.SetTodo)(res.data.allLocations));
                });

              case 3:
                _context.next = 8;
                break;

              case 5:
                _context.prev = 5;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 5]]);
      }));

      return function chechUser_FetchTodos() {
        return _ref2.apply(this, arguments);
      };
    }();

    chechUser_FetchTodos();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Uber-clone Mapbox "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EntryPage__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

_s(Home, "GYVCRs/tkFnpgB2B+fHVbI0Rd3Q=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch, next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsibWFnaWMiLCJNYWdpYyIsInByb2Nlc3MiLCJIb21lIiwidXNlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VMYXlvdXRFZmZlY3QiLCJDaGVjayIsImNoZWNoVXNlcl9GZXRjaFRvZG9zIiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwiU2V0VG9kbyIsImRhdGEiLCJhbGxMb2NhdGlvbnMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsS0FBSyxHQUFHLEVBQVo7O0FBQ0EsSUFBSSxNQUErQjtBQUNqQ0EsT0FBSyxHQUFHLElBQUlDLDZDQUFKLENBQVVDLDBCQUFWLENBQVI7QUFDRDs7O0FBUWMsU0FBU0MsSUFBVCxPQUF3QjtBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUNyQyxNQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyx1REFBUyxFQUF4QjtBQUVBQyx3REFBZSxDQUFDLFlBQU07QUFDcEIsUUFBSUwsSUFBSixFQUFVO0FBQ1JDLGNBQVEsQ0FBQ0ssZ0VBQUssQ0FBQ04sSUFBRCxDQUFOLENBQVI7QUFDRDs7QUFDRCxRQUFNTyxvQkFBb0I7QUFBQSx3VUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVuQkMsZ0RBQUEsQ0FBVSxxQkFBVixFQUFpQ0MsSUFBakMsQ0FBc0MsVUFBQUMsR0FBRyxFQUFJO0FBQ2pEVCwwQkFBUSxDQUFDVSxrRUFBTyxDQUFDRCxHQUFHLENBQUNFLElBQUosQ0FBU0MsWUFBVixDQUFSLENBQVI7QUFDRCxpQkFGSyxDQUZtQjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBTXpCQyx1QkFBTyxDQUFDQyxHQUFSOztBQU55QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFwQlIsb0JBQW9CO0FBQUE7QUFBQTtBQUFBLE9BQTFCOztBQVNBQSx3QkFBb0I7QUFDckIsR0FkYyxFQWNaLEVBZFksQ0FBZjtBQWdCQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU9FLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdEOztHQS9CdUJSLEk7VUFDTEcsb0QsRUFDRkUsbUQ7OztLQUZPTCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRhZmRkMDg5NzNhMmI1MzJiMTRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IEVudHJ5UGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9FbnRyeVBhZ2VcIlxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IHsgQ2hlY2sgfSBmcm9tIFwiLi4vcmVkdXgvZmVhdHVyZXMvVXNlclNsaWNlXCJcbmltcG9ydCB7IFNldFRvZG8gfSBmcm9tIFwiLi4vcmVkdXgvZmVhdHVyZXMvdG9kb1NsaWNlXCJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuaW1wb3J0IHsgTWFnaWMgfSBmcm9tIFwibWFnaWMtc2RrXCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5cbmxldCBtYWdpYyA9IFwiXCJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIG1hZ2ljID0gbmV3IE1hZ2ljKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01BR0lDX0tFWSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHJlcSwgcmVzIH0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyB1c2VyOiBKU09OLnBhcnNlKHJlcT8uY29va2llcz8udXNlclRva2VuKSB8fCBudWxsIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHVzZXIgfSkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyKSB7XG4gICAgICBkaXNwYXRjaChDaGVjayh1c2VyKSlcbiAgICB9XG4gICAgY29uc3QgY2hlY2hVc2VyX0ZldGNoVG9kb3MgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2NyZWF0ZUxvY2F0aW9uXCIpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChTZXRUb2RvKHJlcy5kYXRhLmFsbExvY2F0aW9ucykpXG4gICAgICAgIH0pXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgfVxuICAgIH1cbiAgICBjaGVjaFVzZXJfRmV0Y2hUb2RvcygpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VWJlci1jbG9uZSBNYXBib3ggPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxFbnRyeVBhZ2UgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==