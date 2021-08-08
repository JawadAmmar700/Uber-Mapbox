self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/GeoCodingTodo.js":
/*!*************************************!*\
  !*** ./components/GeoCodingTodo.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_tailwind_react_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-tailwind/react/Modal */ "./node_modules/@material-tailwind/react/Modal.js");
/* harmony import */ var _material_tailwind_react_ModalHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-tailwind/react/ModalHeader */ "./node_modules/@material-tailwind/react/ModalHeader.js");
/* harmony import */ var _material_tailwind_react_ModalBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-tailwind/react/ModalBody */ "./node_modules/@material-tailwind/react/ModalBody.js");
/* harmony import */ var _material_tailwind_react_ModalFooter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-tailwind/react/ModalFooter */ "./node_modules/@material-tailwind/react/ModalFooter.js");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-tailwind/react/Button */ "./node_modules/@material-tailwind/react/Button.js");
/* harmony import */ var _material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-tailwind/react/Input */ "./node_modules/@material-tailwind/react/Input.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_features_todoSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/features/todoSlice */ "./redux/features/todoSlice.js");
/* harmony import */ var _redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/features/UserSlice */ "./redux/features/UserSlice.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\D_J_S_P\\React,Next\\Next_Mapbox\\mapbox\\components\\GeoCodingTodo.js",
    _this = undefined,
    _s = $RefreshSig$();














var GeoCodingTodo = function GeoCodingTodo() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      showModal = _useState[0],
      setShowModal = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      todoInput = _useState2[0],
      setTodoInput = _useState2[1];

  var todo = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(_redux_features_todoSlice__WEBPACK_IMPORTED_MODULE_11__.selectTodo);
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(_redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_12__.selectUser);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();

  var handleAddLocation = function handleAddLocation() {
    console.log(todoInput);

    if (todoInput) {
      var addTodoPrisma = /*#__PURE__*/function () {
        var _ref = (0,C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
          return C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return axios__WEBPACK_IMPORTED_MODULE_14___default().post("".concat(router.pathname, "/api/createLocation"), {
                    todo: todoInput,
                    email: user.email
                  }).then( /*#__PURE__*/function () {
                    var _ref2 = (0,C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(data) {
                      return C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.next = 2;
                              return axios__WEBPACK_IMPORTED_MODULE_14___default().get("/api/createLocation").then(function (res) {
                                dispatch((0,_redux_features_todoSlice__WEBPACK_IMPORTED_MODULE_11__.SetTodo)(res.data.allLocations));
                              });

                            case 2:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    return function (_x) {
                      return _ref2.apply(this, arguments);
                    };
                  }())["catch"](function (err) {
                    return console.log(err);
                  });

                case 2:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function addTodoPrisma() {
          return _ref.apply(this, arguments);
        };
      }();

      addTodoPrisma();
    }

    setTodoInput("");
    setShowModal(false);
  };

  var handleRemove = function handleRemove(id, userId) {
    var remove = /*#__PURE__*/function () {
      var _ref3 = (0,C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(id) {
        return C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_14___default().post("/api/removeTodoLocation", {
                  id: id,
                  userId: userId
                }).then(function (data) {
                  dispatch((0,_redux_features_todoSlice__WEBPACK_IMPORTED_MODULE_11__.SetTodo)(data.data.filtered));
                })["catch"](function (err) {
                  return console.log(err);
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function remove(_x2) {
        return _ref3.apply(this, arguments);
      };
    }();

    remove(id);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-col space-y-5",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
      color: "lightBlue",
      type: "button",
      onClick: function onClick(e) {
        return setShowModal(true);
      },
      ripple: "light",
      children: "Add your favorite location"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_Modal__WEBPACK_IMPORTED_MODULE_4__.default, {
      size: "sm",
      active: showModal,
      toggler: function toggler() {
        return setShowModal(false);
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_ModalHeader__WEBPACK_IMPORTED_MODULE_5__.default, {
        toggler: function toggler() {
          return setShowModal(false);
        },
        children: "Add a location"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_ModalBody__WEBPACK_IMPORTED_MODULE_6__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_9__.default, {
          type: "text",
          color: "lightBlue",
          size: "regular",
          outline: true,
          value: todoInput,
          onChange: function onChange(e) {
            return setTodoInput(e.target.value);
          },
          placeholder: "Add location"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_ModalFooter__WEBPACK_IMPORTED_MODULE_7__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
          color: "red",
          buttonType: "link",
          onClick: function onClick(e) {
            return setShowModal(false);
          },
          ripple: "dark",
          children: "Close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
          color: "green",
          ripple: "light",
          onClick: function onClick() {
            return handleAddLocation();
          },
          children: "Add location"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, _this), todo === null || todo === void 0 ? void 0 : todo.map(function (item) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "cursor-pointer  w-[300px] h-[50px] bg-pink-400  rounded flex justify-between items-center scale-75  hover:scale-100 p-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-[290px] h-50px",
          onClick: function onClick() {
            return router.push("/Map?location=".concat(item.Name));
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: item.Name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          onClick: function onClick() {
            return handleRemove(item.id, item.UserId);
          },
          children: "\u274C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, _this)]
      }, item.id, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, _this);
};

_s(GeoCodingTodo, "J1kc9b7QOB22x547pvpblBYtcmQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch, next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter];
});

_c = GeoCodingTodo;
/* harmony default export */ __webpack_exports__["default"] = (GeoCodingTodo);

var _c;

$RefreshReg$(_c, "GeoCodingTodo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HZW9Db2RpbmdUb2RvLmpzIl0sIm5hbWVzIjpbIkdlb0NvZGluZ1RvZG8iLCJ1c2VTdGF0ZSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInRvZG9JbnB1dCIsInNldFRvZG9JbnB1dCIsInRvZG8iLCJ1c2VTZWxlY3RvciIsInNlbGVjdFRvZG8iLCJ1c2VyIiwic2VsZWN0VXNlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVBZGRMb2NhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJhZGRUb2RvUHJpc21hIiwiYXhpb3MiLCJwYXRobmFtZSIsImVtYWlsIiwidGhlbiIsImRhdGEiLCJyZXMiLCJTZXRUb2RvIiwiYWxsTG9jYXRpb25zIiwiZXJyIiwiaGFuZGxlUmVtb3ZlIiwiaWQiLCJ1c2VySWQiLCJyZW1vdmUiLCJmaWx0ZXJlZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsIml0ZW0iLCJwdXNoIiwiTmFtZSIsIlVzZXJJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLGtCQUNRQywrQ0FBUSxDQUFDLEtBQUQsQ0FEaEI7QUFBQSxNQUNuQkMsU0FEbUI7QUFBQSxNQUNSQyxZQURROztBQUFBLG1CQUVRRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGaEI7QUFBQSxNQUVuQkcsU0FGbUI7QUFBQSxNQUVSQyxZQUZROztBQUcxQixNQUFNQyxJQUFJLEdBQUdDLHlEQUFXLENBQUNDLGtFQUFELENBQXhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHRix5REFBVyxDQUFDRyxrRUFBRCxDQUF4QjtBQUNBLE1BQU1DLFFB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TUFBTSxDQUFDeUIsSUFBUCx5QkFBNkJELElBQUksQ0FBQ0UsSUFBbEMsRUFBTjtBQUFBLFdBRlg7QUFBQSxpQ0FJRTtBQUFBLHNCQUFJRixJQUFJLENBQUNFO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFVRTtBQUFLLGlCQUFPLEVBQUU7QUFBQSxtQkFBTVgsWUFBWSxDQUFDUyxJQUFJLENBQUNSLEVBQU4sRUFBVVEsSUFBSSxDQUFDRyxNQUFmLENBQWxCO0FBQUEsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRjtBQUFBLFNBQ09ILElBQUksQ0FBQ1IsRUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGE7QUFBQSxLQUFkLENBNUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkRELENBMUdEOztHQUFNN0IsYTtVQUdTTyxxRCxFQUNBQSxxRCxFQUNJSyxxRCxFQUNGRSxtRDs7O0tBTlhkLGE7QUE0R04sK0RBQWVBLGFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjQ1YWI5Yzk4NGRjOTgwNTRlODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L01vZGFsXCJcclxuaW1wb3J0IE1vZGFsSGVhZGVyIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxIZWFkZXJcIlxyXG5pbXBvcnQgTW9kYWxCb2R5IGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxCb2R5XCJcclxuaW1wb3J0IE1vZGFsRm9vdGVyIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxGb290ZXJcIlxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQnV0dG9uXCJcclxuaW1wb3J0IElucHV0IGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvSW5wdXRcIlxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyBzZWxlY3RUb2RvLCBTZXRUb2RvIH0gZnJvbSBcIi4uL3JlZHV4L2ZlYXR1cmVzL3RvZG9TbGljZVwiXHJcbmltcG9ydCB7IHNlbGVjdFVzZXIgfSBmcm9tIFwiLi4vcmVkdXgvZmVhdHVyZXMvVXNlclNsaWNlXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcblxyXG5jb25zdCBHZW9Db2RpbmdUb2RvID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdG9kb0lucHV0LCBzZXRUb2RvSW5wdXRdID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCB0b2RvID0gdXNlU2VsZWN0b3Ioc2VsZWN0VG9kbylcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0VXNlcilcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBoYW5kbGVBZGRMb2NhdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHRvZG9JbnB1dClcclxuICAgIGlmICh0b2RvSW5wdXQpIHtcclxuICAgICAgY29uc3QgYWRkVG9kb1ByaXNtYSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCBheGlvc1xyXG4gICAgICAgICAgLnBvc3QoYCR7cm91dGVyLnBhdGhuYW1lfS9hcGkvY3JlYXRlTG9jYXRpb25gLCB7XHJcbiAgICAgICAgICAgIHRvZG86IHRvZG9JbnB1dCxcclxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oYXN5bmMgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLmdldChcIi9hcGkvY3JlYXRlTG9jYXRpb25cIikudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKFNldFRvZG8ocmVzLmRhdGEuYWxsTG9jYXRpb25zKSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICAgIH1cclxuICAgICAgYWRkVG9kb1ByaXNtYSgpXHJcbiAgICB9XHJcbiAgICBzZXRUb2RvSW5wdXQoXCJcIilcclxuICAgIHNldFNob3dNb2RhbChmYWxzZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlbW92ZSA9IChpZCwgdXNlcklkKSA9PiB7XHJcbiAgICBjb25zdCByZW1vdmUgPSBhc3luYyBpZCA9PiB7XHJcbiAgICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgICAgLnBvc3QoXCIvYXBpL3JlbW92ZVRvZG9Mb2NhdGlvblwiLCB7XHJcbiAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICB1c2VySWQ6IHVzZXJJZCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgZGlzcGF0Y2goU2V0VG9kbyhkYXRhLmRhdGEuZmlsdGVyZWQpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlKGlkKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTVcIj5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGNvbG9yPVwibGlnaHRCbHVlXCJcclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBvbkNsaWNrPXtlID0+IHNldFNob3dNb2RhbCh0cnVlKX1cclxuICAgICAgICByaXBwbGU9XCJsaWdodFwiXHJcbiAgICAgID5cclxuICAgICAgICBBZGQgeW91ciBmYXZvcml0ZSBsb2NhdGlvblxyXG4gICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgIDxNb2RhbCBzaXplPVwic21cIiBhY3RpdmU9e3Nob3dNb2RhbH0gdG9nZ2xlcj17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX0+XHJcbiAgICAgICAgPE1vZGFsSGVhZGVyIHRvZ2dsZXI9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9PlxyXG4gICAgICAgICAgQWRkIGEgbG9jYXRpb25cclxuICAgICAgICA8L01vZGFsSGVhZGVyPlxyXG4gICAgICAgIDxNb2RhbEJvZHk+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cImxpZ2h0Qmx1ZVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJyZWd1bGFyXCJcclxuICAgICAgICAgICAgb3V0bGluZT17dHJ1ZX1cclxuICAgICAgICAgICAgdmFsdWU9e3RvZG9JbnB1dH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VG9kb0lucHV0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgbG9jYXRpb25cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L01vZGFsQm9keT5cclxuICAgICAgICA8TW9kYWxGb290ZXI+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcclxuICAgICAgICAgICAgYnV0dG9uVHlwZT1cImxpbmtcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtlID0+IHNldFNob3dNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICAgIHJpcHBsZT1cImRhcmtcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjb2xvcj1cImdyZWVuXCJcclxuICAgICAgICAgICAgcmlwcGxlPVwibGlnaHRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRMb2NhdGlvbigpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBZGQgbG9jYXRpb25cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvTW9kYWxGb290ZXI+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIHt0b2RvPy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgIHctWzMwMHB4XSBoLVs1MHB4XSBiZy1waW5rLTQwMCAgcm91bmRlZCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgc2NhbGUtNzUgIGhvdmVyOnNjYWxlLTEwMCBwLTRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bMjkwcHhdIGgtNTBweFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvTWFwP2xvY2F0aW9uPSR7aXRlbS5OYW1lfWApfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cD57aXRlbS5OYW1lfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmUoaXRlbS5pZCwgaXRlbS5Vc2VySWQpfT7inYw8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdlb0NvZGluZ1RvZG9cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==