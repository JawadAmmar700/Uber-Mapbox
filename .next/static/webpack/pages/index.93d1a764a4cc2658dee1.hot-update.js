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
                              return axios__WEBPACK_IMPORTED_MODULE_14___default().get("".concat(router.pathname, "/api/createLocation")).then(function (res) {
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
                return axios__WEBPACK_IMPORTED_MODULE_14___default().post("".concat(router.pathname, "/api/removeTodoLocation"), {
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
      lineNumber: 63,
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
        lineNumber: 73,
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
          lineNumber: 77,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
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
          lineNumber: 88,
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
          lineNumber: 97,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
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
            lineNumber: 115,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          onClick: function onClick() {
            return handleRemove(item.id, item.UserId);
          },
          children: "\u274C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, _this)]
      }, item.id, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HZW9Db2RpbmdUb2RvLmpzIl0sIm5hbWVzIjpbIkdlb0NvZGluZ1RvZG8iLCJ1c2VTdGF0ZSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInRvZG9JbnB1dCIsInNldFRvZG9JbnB1dCIsInRvZG8iLCJ1c2VTZWxlY3RvciIsInNlbGVjdFRvZG8iLCJ1c2VyIiwic2VsZWN0VXNlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVBZGRMb2NhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJhZGRUb2RvUHJpc21hIiwiYXhpb3MiLCJwYXRobmFtZSIsImVtYWlsIiwidGhlbiIsImRhdGEiLCJyZXMiLCJTZXRUb2RvIiwiYWxsTG9jYXRpb25zIiwiZXJyIiwiaGFuZGxlUmVtb3ZlIiwiaWQiLCJ1c2VySWQiLCJyZW1vdmUiLCJmaWx0ZXJlZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsIml0ZW0iLCJwdXNoIiwiTmFtZSIsIlVzZXJJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLGtCQUNRQywrQ0FBUSxDQUFDLEtBQUQsQ0FEaEI7QUFBQSxNQUNuQkMsU0FEbUI7QUFBQSxNQUNSQyxZQURROztBQUFBLG1CQUVRRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGaEI7QUFBQSxNQUVuQkcsU0FGbUI7QUFBQSxNQUVSQyxZQUZROztBQUcxQixNQUFNQyxJQUFJLEdBQUdDLHlEQUFXLENBQUNDLGtFQUFELENBQXhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHRix5REFBVyxDQUFDRyxrRUFBRCxDQUF4QjtBQUNBLE1BQU1DLFFB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TyxFQUFFO0FBQUEsbUJBQU14QixNQUFNLENBQUN5QixJQUFQLHlCQUE2QkQsSUFBSSxDQUFDRSxJQUFsQyxFQUFOO0FBQUEsV0FGWDtBQUFBLGlDQUlFO0FBQUEsc0JBQUlGLElBQUksQ0FBQ0U7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixlQVVFO0FBQUssaUJBQU8sRUFBRTtBQUFBLG1CQUFNWCxZQUFZLENBQUNTLElBQUksQ0FBQ1IsRUFBTixFQUFVUSxJQUFJLENBQUNHLE1BQWYsQ0FBbEI7QUFBQSxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZGO0FBQUEsU0FDT0gsSUFBSSxDQUFDUixFQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYTtBQUFBLEtBQWQsQ0E1Q0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE2REQsQ0E1R0Q7O0dBQU03QixhO1VBR1NPLHFELEVBQ0FBLHFELEVBQ0lLLHFELEVBQ0ZFLG1EOzs7S0FOWGQsYTtBQThHTiwrREFBZUEsYUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45M2QxYTc2NGE0Y2MyNjU4ZGVlMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxcIlxyXG5pbXBvcnQgTW9kYWxIZWFkZXIgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbEhlYWRlclwiXHJcbmltcG9ydCBNb2RhbEJvZHkgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbEJvZHlcIlxyXG5pbXBvcnQgTW9kYWxGb290ZXIgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbEZvb3RlclwiXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9CdXR0b25cIlxyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9JbnB1dFwiXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IHNlbGVjdFRvZG8sIFNldFRvZG8gfSBmcm9tIFwiLi4vcmVkdXgvZmVhdHVyZXMvdG9kb1NsaWNlXCJcclxuaW1wb3J0IHsgc2VsZWN0VXNlciB9IGZyb20gXCIuLi9yZWR1eC9mZWF0dXJlcy9Vc2VyU2xpY2VcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuXHJcbmNvbnN0IEdlb0NvZGluZ1RvZG8gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFt0b2RvSW5wdXQsIHNldFRvZG9JbnB1dF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IHRvZG8gPSB1c2VTZWxlY3RvcihzZWxlY3RUb2RvKVxyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RVc2VyKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZExvY2F0aW9uID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codG9kb0lucHV0KVxyXG4gICAgaWYgKHRvZG9JbnB1dCkge1xyXG4gICAgICBjb25zdCBhZGRUb2RvUHJpc21hID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgICAgICAucG9zdChgJHtyb3V0ZXIucGF0aG5hbWV9L2FwaS9jcmVhdGVMb2NhdGlvbmAsIHtcclxuICAgICAgICAgICAgdG9kbzogdG9kb0lucHV0LFxyXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbihhc3luYyBkYXRhID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3NcclxuICAgICAgICAgICAgICAuZ2V0KGAke3JvdXRlci5wYXRobmFtZX0vYXBpL2NyZWF0ZUxvY2F0aW9uYClcclxuICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goU2V0VG9kbyhyZXMuZGF0YS5hbGxMb2NhdGlvbnMpKVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgICB9XHJcbiAgICAgIGFkZFRvZG9QcmlzbWEoKVxyXG4gICAgfVxyXG4gICAgc2V0VG9kb0lucHV0KFwiXCIpXHJcbiAgICBzZXRTaG93TW9kYWwoZmFsc2UpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVSZW1vdmUgPSAoaWQsIHVzZXJJZCkgPT4ge1xyXG4gICAgY29uc3QgcmVtb3ZlID0gYXN5bmMgaWQgPT4ge1xyXG4gICAgICBhd2FpdCBheGlvc1xyXG4gICAgICAgIC5wb3N0KGAke3JvdXRlci5wYXRobmFtZX0vYXBpL3JlbW92ZVRvZG9Mb2NhdGlvbmAsIHtcclxuICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaChTZXRUb2RvKGRhdGEuZGF0YS5maWx0ZXJlZCkpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICB9XHJcbiAgICByZW1vdmUoaWQpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktNVwiPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgY29sb3I9XCJsaWdodEJsdWVcIlxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIG9uQ2xpY2s9e2UgPT4gc2V0U2hvd01vZGFsKHRydWUpfVxyXG4gICAgICAgIHJpcHBsZT1cImxpZ2h0XCJcclxuICAgICAgPlxyXG4gICAgICAgIEFkZCB5b3VyIGZhdm9yaXRlIGxvY2F0aW9uXHJcbiAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgPE1vZGFsIHNpemU9XCJzbVwiIGFjdGl2ZT17c2hvd01vZGFsfSB0b2dnbGVyPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfT5cclxuICAgICAgICA8TW9kYWxIZWFkZXIgdG9nZ2xlcj17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX0+XHJcbiAgICAgICAgICBBZGQgYSBsb2NhdGlvblxyXG4gICAgICAgIDwvTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgPE1vZGFsQm9keT5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwibGlnaHRCbHVlXCJcclxuICAgICAgICAgICAgc2l6ZT1cInJlZ3VsYXJcIlxyXG4gICAgICAgICAgICBvdXRsaW5lPXt0cnVlfVxyXG4gICAgICAgICAgICB2YWx1ZT17dG9kb0lucHV0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUb2RvSW5wdXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBsb2NhdGlvblwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTW9kYWxCb2R5PlxyXG4gICAgICAgIDxNb2RhbEZvb3Rlcj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgICBidXR0b25UeXBlPVwibGlua1wiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cclxuICAgICAgICAgICAgcmlwcGxlPVwiZGFya1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNvbG9yPVwiZ3JlZW5cIlxyXG4gICAgICAgICAgICByaXBwbGU9XCJsaWdodFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZExvY2F0aW9uKCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFkZCBsb2NhdGlvblxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAge3RvZG8/Lm1hcChpdGVtID0+IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciAgdy1bMzAwcHhdIGgtWzUwcHhdIGJnLXBpbmstNDAwICByb3VuZGVkIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBzY2FsZS03NSAgaG92ZXI6c2NhbGUtMTAwIHAtNFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVsyOTBweF0gaC01MHB4XCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9NYXA/bG9jYXRpb249JHtpdGVtLk5hbWV9YCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwPntpdGVtLk5hbWV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZShpdGVtLmlkLCBpdGVtLlVzZXJJZCl9PuKdjDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2VvQ29kaW5nVG9kb1xyXG4iXSwic291cmNlUm9vdCI6IiJ9