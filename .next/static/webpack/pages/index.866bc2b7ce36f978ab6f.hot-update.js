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
  console.log(todo);
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
                  return axios__WEBPACK_IMPORTED_MODULE_14___default().post("/api/createLocation", {
                    todo: todoInput,
                    email: user.email
                  }).then( /*#__PURE__*/function () {
                    var _ref2 = (0,C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(data) {
                      return C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              console.log(data);
                              _context.next = 3;
                              return axios__WEBPACK_IMPORTED_MODULE_14___default().get("/api/createLocation").then(function (res) {
                                dispatch((0,_redux_features_todoSlice__WEBPACK_IMPORTED_MODULE_11__.SetTodo)(res.data.allLocations));
                              });

                            case 3:
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
                  console.log(data);
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
      lineNumber: 64,
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
        lineNumber: 74,
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
          lineNumber: 78,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
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
          lineNumber: 89,
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
          lineNumber: 98,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
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
            lineNumber: 116,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          onClick: function onClick() {
            return handleRemove(item.id, item.UserId);
          },
          children: "\u274C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, _this)]
      }, item.id, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HZW9Db2RpbmdUb2RvLmpzIl0sIm5hbWVzIjpbIkdlb0NvZGluZ1RvZG8iLCJ1c2VTdGF0ZSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInRvZG9JbnB1dCIsInNldFRvZG9JbnB1dCIsInRvZG8iLCJ1c2VTZWxlY3RvciIsInNlbGVjdFRvZG8iLCJjb25zb2xlIiwibG9nIiwidXNlciIsInNlbGVjdFVzZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlQWRkTG9jYXRpb24iLCJhZGRUb2RvUHJpc21hIiwiYXhpb3MiLCJlbWFpbCIsInRoZW4iLCJkYXRhIiwicmVzIiwiU2V0VG9kbyIsImFsbExvY2F0aW9ucyIsImVyciIsImhhbmRsZVJlbW92ZSIsImlkIiwidXNlcklkIiwicmVtb3ZlIiwiZmlsdGVyZWQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJpdGVtIiwicHVzaCIsIk5hbWUiLCJVc2VySWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFBQSxrQkFDUUMsK0NBQVEsQ0FBQyxLQUFELENBRGhCO0FBQUEsTUFDbkJDLFNBRG1CO0FBQUEsTUFDUkMsWUFEUTs7QUFBQSxtQkFFUUYsK0NBQVEsQ0FBQyxFQUFELENBRmhCO0FBQUEsTUFFbkJHLFNBRm1CO0FBQUEsTUFFUkMsWUFGUTs7QUFHMUIsTUFBTUMsSUFBSSxHQUFHQyx5REFBVyxDQUFDQyxrRUFBRCxDQUF4QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWjtBQUNBLE1BQU1LLElBQUksR0FBR0oseURBQVcsQ0FBQ0ssa0VB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RUUsaUJBQVMsRUFBQyx5SEFGWjtBQUFBLGdDQUlFO0FBQ0UsbUJBQVMsRUFBQyxrQkFEWjtBQUVFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTXJCLE1BQU0sQ0FBQ3NCLElBQVAseUJBQTZCRCxJQUFJLENBQUNFLElBQWxDLEVBQU47QUFBQSxXQUZYO0FBQUEsaUNBSUU7QUFBQSxzQkFBSUYsSUFBSSxDQUFDRTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBVUU7QUFBSyxpQkFBTyxFQUFFO0FBQUEsbUJBQU1YLFlBQVksQ0FBQ1MsSUFBSSxDQUFDUixFQUFOLEVBQVVRLElBQUksQ0FBQ0csTUFBZixDQUFsQjtBQUFBLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkY7QUFBQSxTQUNPSCxJQUFJLENBQUNSLEVBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURhO0FBQUEsS0FBZCxDQTVDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTZERCxDQTdHRDs7R0FBTTVCLGE7VUFHU08scUQsRUFFQUEscUQsRUFDSU8scUQsRUFDRkUsbUQ7OztLQVBYaEIsYTtBQStHTiwrREFBZUEsYUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NjZiYzJiN2NlMzZmOTc4YWI2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxcIlxyXG5pbXBvcnQgTW9kYWxIZWFkZXIgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbEhlYWRlclwiXHJcbmltcG9ydCBNb2RhbEJvZHkgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbEJvZHlcIlxyXG5pbXBvcnQgTW9kYWxGb290ZXIgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbEZvb3RlclwiXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9CdXR0b25cIlxyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9JbnB1dFwiXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IHNlbGVjdFRvZG8sIFNldFRvZG8gfSBmcm9tIFwiLi4vcmVkdXgvZmVhdHVyZXMvdG9kb1NsaWNlXCJcclxuaW1wb3J0IHsgc2VsZWN0VXNlciB9IGZyb20gXCIuLi9yZWR1eC9mZWF0dXJlcy9Vc2VyU2xpY2VcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuXHJcbmNvbnN0IEdlb0NvZGluZ1RvZG8gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFt0b2RvSW5wdXQsIHNldFRvZG9JbnB1dF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IHRvZG8gPSB1c2VTZWxlY3RvcihzZWxlY3RUb2RvKVxyXG4gIGNvbnNvbGUubG9nKHRvZG8pXHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdFVzZXIpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkTG9jYXRpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh0b2RvSW5wdXQpXHJcbiAgICBpZiAodG9kb0lucHV0KSB7XHJcbiAgICAgIGNvbnN0IGFkZFRvZG9QcmlzbWEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgYXhpb3NcclxuICAgICAgICAgIC5wb3N0KFwiL2FwaS9jcmVhdGVMb2NhdGlvblwiLCB7XHJcbiAgICAgICAgICAgIHRvZG86IHRvZG9JbnB1dCxcclxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oYXN5bmMgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLmdldChcIi9hcGkvY3JlYXRlTG9jYXRpb25cIikudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKFNldFRvZG8ocmVzLmRhdGEuYWxsTG9jYXRpb25zKSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICAgIH1cclxuICAgICAgYWRkVG9kb1ByaXNtYSgpXHJcbiAgICB9XHJcbiAgICBzZXRUb2RvSW5wdXQoXCJcIilcclxuICAgIHNldFNob3dNb2RhbChmYWxzZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlbW92ZSA9IChpZCwgdXNlcklkKSA9PiB7XHJcbiAgICBjb25zdCByZW1vdmUgPSBhc3luYyBpZCA9PiB7XHJcbiAgICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgICAgLnBvc3QoXCIvYXBpL3JlbW92ZVRvZG9Mb2NhdGlvblwiLCB7XHJcbiAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICB1c2VySWQ6IHVzZXJJZCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgIGRpc3BhdGNoKFNldFRvZG8oZGF0YS5kYXRhLmZpbHRlcmVkKSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAgIH1cclxuICAgIHJlbW92ZShpZClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS01XCI+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBjb2xvcj1cImxpZ2h0Qmx1ZVwiXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgb25DbGljaz17ZSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XHJcbiAgICAgICAgcmlwcGxlPVwibGlnaHRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgQWRkIHlvdXIgZmF2b3JpdGUgbG9jYXRpb25cclxuICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICA8TW9kYWwgc2l6ZT1cInNtXCIgYWN0aXZlPXtzaG93TW9kYWx9IHRvZ2dsZXI9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9PlxyXG4gICAgICAgIDxNb2RhbEhlYWRlciB0b2dnbGVyPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfT5cclxuICAgICAgICAgIEFkZCBhIGxvY2F0aW9uXHJcbiAgICAgICAgPC9Nb2RhbEhlYWRlcj5cclxuICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgY29sb3I9XCJsaWdodEJsdWVcIlxyXG4gICAgICAgICAgICBzaXplPVwicmVndWxhclwiXHJcbiAgICAgICAgICAgIG91dGxpbmU9e3RydWV9XHJcbiAgICAgICAgICAgIHZhbHVlPXt0b2RvSW5wdXR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFRvZG9JbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGxvY2F0aW9uXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Nb2RhbEJvZHk+XHJcbiAgICAgICAgPE1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjb2xvcj1cInJlZFwiXHJcbiAgICAgICAgICAgIGJ1dHRvblR5cGU9XCJsaW5rXCJcclxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgICByaXBwbGU9XCJkYXJrXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY29sb3I9XCJncmVlblwiXHJcbiAgICAgICAgICAgIHJpcHBsZT1cImxpZ2h0XCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQWRkTG9jYXRpb24oKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWRkIGxvY2F0aW9uXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L01vZGFsRm9vdGVyPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICB7dG9kbz8ubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyICB3LVszMDBweF0gaC1bNTBweF0gYmctcGluay00MDAgIHJvdW5kZWQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHNjYWxlLTc1ICBob3ZlcjpzY2FsZS0xMDAgcC00XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzI5MHB4XSBoLTUwcHhcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL01hcD9sb2NhdGlvbj0ke2l0ZW0uTmFtZX1gKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHA+e2l0ZW0uTmFtZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlKGl0ZW0uaWQsIGl0ZW0uVXNlcklkKX0+4p2MPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZW9Db2RpbmdUb2RvXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=