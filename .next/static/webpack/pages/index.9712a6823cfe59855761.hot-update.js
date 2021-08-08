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
                  return axios__WEBPACK_IMPORTED_MODULE_14___default().post("/api/createLocation", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HZW9Db2RpbmdUb2RvLmpzIl0sIm5hbWVzIjpbIkdlb0NvZGluZ1RvZG8iLCJ1c2VTdGF0ZSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInRvZG9JbnB1dCIsInNldFRvZG9JbnB1dCIsInRvZG8iLCJ1c2VTZWxlY3RvciIsInNlbGVjdFRvZG8iLCJ1c2VyIiwic2VsZWN0VXNlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVBZGRMb2NhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJhZGRUb2RvUHJpc21hIiwiYXhpb3MiLCJlbWFpbCIsInRoZW4iLCJkYXRhIiwicmVzIiwiU2V0VG9kbyIsImFsbExvY2F0aW9ucyIsImVyciIsImhhbmRsZVJlbW92ZSIsImlkIiwidXNlcklkIiwicmVtb3ZlIiwiZmlsdGVyZWQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJpdGVtIiwicHVzaCIsIk5hbWUiLCJVc2VySWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFBQSxrQkFDUUMsK0NBQVEsQ0FBQyxLQUFELENBRGhCO0FBQUEsTUFDbkJDLFNBRG1CO0FBQUEsTUFDUkMsWUFEUTs7QUFBQSxtQkFFUUYsK0NBQVEsQ0FBQyxFQUFELENBRmhCO0FBQUEsTUFFbkJHLFNBRm1CO0FBQUEsTUFFUkMsWUFGUTs7QUFHMUIsTUFBTUMsSUFBSSxHQUFHQyx5REFBVyxDQUFDQyxrRUFBRCxDQUF4QjtBQUNBLE1BQU1DLElBQUksR0FBR0YseURBQVcsQ0FBQ0csa0VBQUQsQ0FBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLHlE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LElBQUksQ0FBQ0UsSUFBbEMsRUFBTjtBQUFBLFdBRlg7QUFBQSxpQ0FJRTtBQUFBLHNCQUFJRixJQUFJLENBQUNFO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFVRTtBQUFLLGlCQUFPLEVBQUU7QUFBQSxtQkFBTVgsWUFBWSxDQUFDUyxJQUFJLENBQUNSLEVBQU4sRUFBVVEsSUFBSSxDQUFDRyxNQUFmLENBQWxCO0FBQUEsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRjtBQUFBLFNBQ09ILElBQUksQ0FBQ1IsRUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGE7QUFBQSxLQUFkLENBNUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkRELENBMUdEOztHQUFNNUIsYTtVQUdTTyxxRCxFQUNBQSxxRCxFQUNJSyxxRCxFQUNGRSxtRDs7O0tBTlhkLGE7QUE0R04sK0RBQWVBLGFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTcxMmE2ODIzY2ZlNTk4NTU3NjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L01vZGFsXCJcclxuaW1wb3J0IE1vZGFsSGVhZGVyIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxIZWFkZXJcIlxyXG5pbXBvcnQgTW9kYWxCb2R5IGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxCb2R5XCJcclxuaW1wb3J0IE1vZGFsRm9vdGVyIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxGb290ZXJcIlxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQnV0dG9uXCJcclxuaW1wb3J0IElucHV0IGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvSW5wdXRcIlxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyBzZWxlY3RUb2RvLCBTZXRUb2RvIH0gZnJvbSBcIi4uL3JlZHV4L2ZlYXR1cmVzL3RvZG9TbGljZVwiXHJcbmltcG9ydCB7IHNlbGVjdFVzZXIgfSBmcm9tIFwiLi4vcmVkdXgvZmVhdHVyZXMvVXNlclNsaWNlXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcblxyXG5jb25zdCBHZW9Db2RpbmdUb2RvID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdG9kb0lucHV0LCBzZXRUb2RvSW5wdXRdID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCB0b2RvID0gdXNlU2VsZWN0b3Ioc2VsZWN0VG9kbylcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0VXNlcilcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBoYW5kbGVBZGRMb2NhdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHRvZG9JbnB1dClcclxuICAgIGlmICh0b2RvSW5wdXQpIHtcclxuICAgICAgY29uc3QgYWRkVG9kb1ByaXNtYSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCBheGlvc1xyXG4gICAgICAgICAgLnBvc3QoXCIvYXBpL2NyZWF0ZUxvY2F0aW9uXCIsIHtcclxuICAgICAgICAgICAgdG9kbzogdG9kb0lucHV0LFxyXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbihhc3luYyBkYXRhID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9jcmVhdGVMb2NhdGlvblwiKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goU2V0VG9kbyhyZXMuZGF0YS5hbGxMb2NhdGlvbnMpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAgICAgfVxyXG4gICAgICBhZGRUb2RvUHJpc21hKClcclxuICAgIH1cclxuICAgIHNldFRvZG9JbnB1dChcIlwiKVxyXG4gICAgc2V0U2hvd01vZGFsKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlUmVtb3ZlID0gKGlkLCB1c2VySWQpID0+IHtcclxuICAgIGNvbnN0IHJlbW92ZSA9IGFzeW5jIGlkID0+IHtcclxuICAgICAgYXdhaXQgYXhpb3NcclxuICAgICAgICAucG9zdChcIi9hcGkvcmVtb3ZlVG9kb0xvY2F0aW9uXCIsIHtcclxuICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaChTZXRUb2RvKGRhdGEuZGF0YS5maWx0ZXJlZCkpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICB9XHJcbiAgICByZW1vdmUoaWQpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktNVwiPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgY29sb3I9XCJsaWdodEJsdWVcIlxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIG9uQ2xpY2s9e2UgPT4gc2V0U2hvd01vZGFsKHRydWUpfVxyXG4gICAgICAgIHJpcHBsZT1cImxpZ2h0XCJcclxuICAgICAgPlxyXG4gICAgICAgIEFkZCB5b3VyIGZhdm9yaXRlIGxvY2F0aW9uXHJcbiAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgPE1vZGFsIHNpemU9XCJzbVwiIGFjdGl2ZT17c2hvd01vZGFsfSB0b2dnbGVyPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfT5cclxuICAgICAgICA8TW9kYWxIZWFkZXIgdG9nZ2xlcj17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX0+XHJcbiAgICAgICAgICBBZGQgYSBsb2NhdGlvblxyXG4gICAgICAgIDwvTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgPE1vZGFsQm9keT5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwibGlnaHRCbHVlXCJcclxuICAgICAgICAgICAgc2l6ZT1cInJlZ3VsYXJcIlxyXG4gICAgICAgICAgICBvdXRsaW5lPXt0cnVlfVxyXG4gICAgICAgICAgICB2YWx1ZT17dG9kb0lucHV0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUb2RvSW5wdXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBsb2NhdGlvblwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTW9kYWxCb2R5PlxyXG4gICAgICAgIDxNb2RhbEZvb3Rlcj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgICBidXR0b25UeXBlPVwibGlua1wiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cclxuICAgICAgICAgICAgcmlwcGxlPVwiZGFya1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNvbG9yPVwiZ3JlZW5cIlxyXG4gICAgICAgICAgICByaXBwbGU9XCJsaWdodFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZExvY2F0aW9uKCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFkZCBsb2NhdGlvblxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAge3RvZG8/Lm1hcChpdGVtID0+IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciAgdy1bMzAwcHhdIGgtWzUwcHhdIGJnLXBpbmstNDAwICByb3VuZGVkIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBzY2FsZS03NSAgaG92ZXI6c2NhbGUtMTAwIHAtNFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVsyOTBweF0gaC01MHB4XCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9NYXA/bG9jYXRpb249JHtpdGVtLk5hbWV9YCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwPntpdGVtLk5hbWV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZShpdGVtLmlkLCBpdGVtLlVzZXJJZCl9PuKdjDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2VvQ29kaW5nVG9kb1xyXG4iXSwic291cmNlUm9vdCI6IiJ9