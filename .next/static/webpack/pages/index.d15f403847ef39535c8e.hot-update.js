self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/paypalModel.js":
/*!***********************************!*\
  !*** ./components/paypalModel.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react/Modal */ "./node_modules/@material-tailwind/react/Modal.js");
/* harmony import */ var _material_tailwind_react_ModalHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-tailwind/react/ModalHeader */ "./node_modules/@material-tailwind/react/ModalHeader.js");
/* harmony import */ var _material_tailwind_react_ModalBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-tailwind/react/ModalBody */ "./node_modules/@material-tailwind/react/ModalBody.js");
/* harmony import */ var _material_tailwind_react_ModalFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-tailwind/react/ModalFooter */ "./node_modules/@material-tailwind/react/ModalFooter.js");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-tailwind/react/Button */ "./node_modules/@material-tailwind/react/Button.js");
/* harmony import */ var react_paypal_button_v2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-paypal-button-v2 */ "./node_modules/react-paypal-button-v2/lib/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\D_J_S_P\\React,Next\\Next_Mapbox\\mapbox\\components\\paypalModel.js",
    _this = undefined;









var paypalModel = function paypalModel(_ref) {
  var showModal = _ref.showModal,
      setShowModal = _ref.setShowModal,
      price = _ref.price;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_Modal__WEBPACK_IMPORTED_MODULE_2__.default, {
      size: "sm",
      active: showModal,
      toggler: function toggler() {
        return setShowModal(false);
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_ModalHeader__WEBPACK_IMPORTED_MODULE_3__.default, {
        toggler: function toggler() {
          return setShowModal(false);
        },
        children: "Paypal checkOut"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_ModalBody__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_paypal_button_v2__WEBPACK_IMPORTED_MODULE_7__.PayPalButton, {
          amount: price,
          onSuccess: function onSuccess(details, data) {
            alert("Transaction completed by " + details.payer.name.given_name);
            setShowModal(false);
          },
          options: {
            clientId: "AeEv79hPqxk608ZE-sWsFgb8oLzi7Uhl9LV7IP3uPXJ4PqMeN1F8yXO_8IJGdNLqpnSQU8sBEJ-I_Cwz"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_ModalFooter__WEBPACK_IMPORTED_MODULE_5__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_6__.default, {
          color: "red",
          buttonType: "link",
          onClick: function onClick(e) {
            return setShowModal(false);
          },
          ripple: "dark",
          children: "Close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_6__.default, {
          color: "green",
          ripple: "light",
          children: "Add location"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, _this);
};

/* harmony default export */ __webpack_exports__["default"] = (paypalModel);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXlwYWxNb2RlbC5qcyJdLCJuYW1lcyI6WyJwYXlwYWxNb2RlbCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInByaWNlIiwiZGV0YWlscyIsImRhdGEiLCJhbGVydCIsInBheWVyIiwibmFtZSIsImdpdmVuX25hbWUiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJwYXlwYWxLRVkiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXdDO0FBQUEsTUFBckNDLFNBQXFDLFFBQXJDQSxTQUFxQztBQUFBLE1BQTFCQyxZQUEwQixRQUExQkEsWUFBMEI7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDMUQsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyxtRUFBRDtBQUFPLFVBQUksRUFBQyxJQUFaO0FBQWlCLFlBQU0sRUFBRUYsU0FBekI7QUFBb0MsYUFBTyxFQUFFO0FBQUEsZUFBTUMsWUFBWSxDQUFDLEtBQUQsQ0FBbEI7QUFBQSxPQUE3QztBQUFBLDhCQUNFLDhEQUFDLHlFQUFEO0FBQWEsZUFBTyxFQUFFO0FBQUEsaUJBQU1BLFlBQVksQ0FBQyxLQUFELENBQWxCO0FBQUEsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFLDhEQUFDLHVFQUFEO0FBQUEsK0JBQ0UsOERBQUMsZ0VBQUQ7QUFDRSxnQkFBTSxFQUFFQyxLQURWO0FBRUUsbUJBQVMsRUFBRSxtQkFBQ0MsT0FBRCxFQUFVQyxJQUFWLEVBQW1CO0FBQzVCQyxpQkFBSyxDQUFDLDhCQUE4QkYsT0FBTyxDQUFDRyxLQUFSLENBQWNDLElBQWQsQ0FBbUJDLFVBQWxELENBQUw7QUFDQVAsd0JBQVksQ0FBQyxLQUFELENBQVo7QUFDRCxXQUxIO0FBTUUsaUJBQU8sRUFBRTtBQUNQUSxvQkFBUSxFQUFFQyxrRkFBcUJDO0FBRHhCO0FBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQWdCRSw4REFBQyx5RUFBRDtBQUFBLGdDQUNFLDhEQUFDLG9FQUFEO0FBQ0UsZUFBSyxFQUFDLEtBRFI7QUFFRSxvQkFBVSxFQUFDLE1BRmI7QUFHRSxpQkFBTyxFQUFFLGlCQUFBQyxDQUFDO0FBQUEsbUJBQUlYLFlBQVksQ0FBQyxLQUFELENBQWhCO0FBQUEsV0FIWjtBQUlFLGdCQUFNLEVBQUMsTUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVVFLDhEQUFDLG9FQUFEO0FBQVEsZUFBSyxFQUFDLE9BQWQ7QUFBc0IsZ0JBQU0sRUFBQyxPQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUNELENBcENEOztBQXNDQSwrREFBZUYsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMTVmNDAzODQ3ZWYzOTUzNWM4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxcIlxyXG5pbXBvcnQgTW9kYWxIZWFkZXIgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbEhlYWRlclwiXHJcbmltcG9ydCBNb2RhbEJvZHkgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbEJvZHlcIlxyXG5pbXBvcnQgTW9kYWxGb290ZXIgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbEZvb3RlclwiXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9CdXR0b25cIlxyXG5pbXBvcnQgeyBQYXlQYWxCdXR0b24gfSBmcm9tIFwicmVhY3QtcGF5cGFsLWJ1dHRvbi12MlwiXHJcblxyXG5jb25zdCBwYXlwYWxNb2RlbCA9ICh7IHNob3dNb2RhbCwgc2V0U2hvd01vZGFsLCBwcmljZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxNb2RhbCBzaXplPVwic21cIiBhY3RpdmU9e3Nob3dNb2RhbH0gdG9nZ2xlcj17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX0+XHJcbiAgICAgICAgPE1vZGFsSGVhZGVyIHRvZ2dsZXI9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9PlxyXG4gICAgICAgICAgUGF5cGFsIGNoZWNrT3V0XHJcbiAgICAgICAgPC9Nb2RhbEhlYWRlcj5cclxuICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAgPFBheVBhbEJ1dHRvblxyXG4gICAgICAgICAgICBhbW91bnQ9e3ByaWNlfVxyXG4gICAgICAgICAgICBvblN1Y2Nlc3M9eyhkZXRhaWxzLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgYWxlcnQoXCJUcmFuc2FjdGlvbiBjb21wbGV0ZWQgYnkgXCIgKyBkZXRhaWxzLnBheWVyLm5hbWUuZ2l2ZW5fbmFtZSlcclxuICAgICAgICAgICAgICBzZXRTaG93TW9kYWwoZmFsc2UpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYucGF5cGFsS0VZLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L01vZGFsQm9keT5cclxuICAgICAgICA8TW9kYWxGb290ZXI+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcclxuICAgICAgICAgICAgYnV0dG9uVHlwZT1cImxpbmtcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtlID0+IHNldFNob3dNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICAgIHJpcHBsZT1cImRhcmtcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImdyZWVuXCIgcmlwcGxlPVwibGlnaHRcIj5cclxuICAgICAgICAgICAgQWRkIGxvY2F0aW9uXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L01vZGFsRm9vdGVyPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYXlwYWxNb2RlbFxyXG4iXSwic291cmNlUm9vdCI6IiJ9