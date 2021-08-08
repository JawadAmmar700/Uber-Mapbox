(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/EntryPage.js":
/*!*********************************!*\
  !*** ./components/EntryPage.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignIn */ "./components/SignIn.js");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-tailwind/react/Button */ "@material-tailwind/react/Button");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/features/UserSlice */ "./redux/features/UserSlice.js");
/* harmony import */ var _GeoCodingTodo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GeoCodingTodo */ "./components/GeoCodingTodo.js");
/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! magic-sdk */ "magic-sdk");
/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(magic_sdk__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\D_J_S_P\\React,Next\\Next_Mapbox\\mapbox\\components\\EntryPage.js";








let magic = "";

if (false) {}

const EntryPage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_6__.selectUser);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();

  const handleLogout = async () => {
    await magic.user.logout();
    dispatch((0,_redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_6__.Remove)());
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex justify-center items-center w-full h-screen bg-gray-300",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "absolute top-4 right-4 flex space-x-4",
      children: [user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
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
          lineNumber: 30,
          columnNumber: 13
        }, undefined)
      }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
        color: "lightBlue",
        buttonType: "outline",
        size: "regular",
        rounded: false,
        block: false,
        iconOnly: false,
        ripple: "dark",
        onClick: () => router.push("/Map"),
        disabled: !user ? true : false,
        children: "View Map"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined), user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "absolute top-4 left-8",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "text-3xl text-blue-400 mr-4",
        children: "Hello"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "text-gray-700",
        children: user === null || user === void 0 ? void 0 : user.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }, undefined), !user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignIn__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 16
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GeoCodingTodo__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 29
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (EntryPage);

/***/ }),

/***/ "./components/GeoCodingTodo.js":
/*!*************************************!*\
  !*** ./components/GeoCodingTodo.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react/Modal */ "@material-tailwind/react/Modal");
/* harmony import */ var _material_tailwind_react_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_tailwind_react_ModalHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-tailwind/react/ModalHeader */ "@material-tailwind/react/ModalHeader");
/* harmony import */ var _material_tailwind_react_ModalHeader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_ModalHeader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_tailwind_react_ModalBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-tailwind/react/ModalBody */ "@material-tailwind/react/ModalBody");
/* harmony import */ var _material_tailwind_react_ModalBody__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_ModalBody__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_tailwind_react_ModalFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-tailwind/react/ModalFooter */ "@material-tailwind/react/ModalFooter");
/* harmony import */ var _material_tailwind_react_ModalFooter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_ModalFooter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-tailwind/react/Button */ "@material-tailwind/react/Button");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-tailwind/react/Input */ "@material-tailwind/react/Input");
/* harmony import */ var _material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redux_features_todoSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/features/todoSlice */ "./redux/features/todoSlice.js");
/* harmony import */ var _redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/features/UserSlice */ "./redux/features/UserSlice.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "C:\\D_J_S_P\\React,Next\\Next_Mapbox\\mapbox\\components\\GeoCodingTodo.js";













const GeoCodingTodo = () => {
  const {
    0: showModal,
    1: setShowModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: todoInput,
    1: setTodoInput
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const todo = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_redux_features_todoSlice__WEBPACK_IMPORTED_MODULE_9__.selectTodo);
  const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_10__.selectUser);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();

  const handleAddLocation = () => {
    console.log(todoInput);

    if (todoInput) {
      const addTodoPrisma = async () => {
        await axios__WEBPACK_IMPORTED_MODULE_12___default().post("/api/createLocation", {
          todo: todoInput,
          email: user.email
        }).then(async data => {
          await axios__WEBPACK_IMPORTED_MODULE_12___default().get("/api/createLocation").then(res => {
            dispatch((0,_redux_features_todoSlice__WEBPACK_IMPORTED_MODULE_9__.SetTodo)(res.data.allLocations));
          });
        }).catch(err => console.log(err));
      };

      addTodoPrisma();
    }

    setTodoInput("");
    setShowModal(false);
  };

  const handleRemove = (id, userId) => {
    const remove = async id => {
      await axios__WEBPACK_IMPORTED_MODULE_12___default().post("/api/removeTodoLocation", {
        id: id,
        userId: userId
      }).then(data => {
        dispatch((0,_redux_features_todoSlice__WEBPACK_IMPORTED_MODULE_9__.SetTodo)(data.data.filtered));
      }).catch(err => console.log(err));
    };

    remove(id);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-col space-y-5",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
      color: "lightBlue",
      type: "button",
      onClick: e => setShowModal(true),
      ripple: "light",
      children: "Add your favorite location"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Modal__WEBPACK_IMPORTED_MODULE_2___default()), {
      size: "sm",
      active: showModal,
      toggler: () => setShowModal(false),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_ModalHeader__WEBPACK_IMPORTED_MODULE_3___default()), {
        toggler: () => setShowModal(false),
        children: "Add a location"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_ModalBody__WEBPACK_IMPORTED_MODULE_4___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_7___default()), {
          type: "text",
          color: "lightBlue",
          size: "regular",
          outline: true,
          value: todoInput,
          onChange: e => setTodoInput(e.target.value),
          placeholder: "Add location"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_ModalFooter__WEBPACK_IMPORTED_MODULE_5___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
          color: "red",
          buttonType: "link",
          onClick: e => setShowModal(false),
          ripple: "dark",
          children: "Close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
          color: "green",
          ripple: "light",
          onClick: () => handleAddLocation(),
          children: "Add location"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, undefined), todo === null || todo === void 0 ? void 0 : todo.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "cursor-pointer  w-[300px] h-[50px] bg-pink-400  rounded flex justify-between items-center scale-75  hover:scale-100 p-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w-[290px] h-50px",
        onClick: () => router.push(`/Map?location=${item.Name}`),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: item.Name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onClick: () => handleRemove(item.id, item.UserId),
        children: "\u274C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 11
      }, undefined)]
    }, item.id, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (GeoCodingTodo);

/***/ }),

/***/ "./components/SignIn.js":
/*!******************************!*\
  !*** ./components/SignIn.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react/Card */ "@material-tailwind/react/Card");
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-tailwind/react/CardHeader */ "@material-tailwind/react/CardHeader");
/* harmony import */ var _material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-tailwind/react/CardBody */ "@material-tailwind/react/CardBody");
/* harmony import */ var _material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_tailwind_react_CardFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-tailwind/react/CardFooter */ "@material-tailwind/react/CardFooter");
/* harmony import */ var _material_tailwind_react_CardFooter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardFooter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_tailwind_react_InputIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-tailwind/react/InputIcon */ "@material-tailwind/react/InputIcon");
/* harmony import */ var _material_tailwind_react_InputIcon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_InputIcon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-tailwind/react/Button */ "@material-tailwind/react/Button");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_tailwind_react_Heading5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-tailwind/react/Heading5 */ "@material-tailwind/react/Heading5");
/* harmony import */ var _material_tailwind_react_Heading5__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Heading5__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! magic-sdk */ "magic-sdk");
/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(magic_sdk__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/features/UserSlice */ "./redux/features/UserSlice.js");

var _jsxFileName = "C:\\D_J_S_P\\React,Next\\Next_Mapbox\\mapbox\\components\\SignIn.js";











let magic = "";

if (false) {}

const SignIn = () => {
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();

  const handleSubmit = async event => {
    event.preventDefault();

    if (email) {
      await magic.auth.loginWithMagicLink({
        email
      });
      let user = await magic.user.getMetadata();
      console.log(user);
      dispatch((0,_redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_11__.Add)(user));
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w-[400px]",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_3___default()), {
        color: "lightBlue",
        size: "lg",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Heading5__WEBPACK_IMPORTED_MODULE_8___default()), {
          color: "white",
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_4___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "mb-8 px-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_InputIcon__WEBPACK_IMPORTED_MODULE_6___default()), {
            type: "email",
            color: "lightBlue",
            onChange: e => setEmail(e.target.value),
            placeholder: "Email Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_CardFooter__WEBPACK_IMPORTED_MODULE_5___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex justify-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
            onClick: handleSubmit,
            color: "lightBlue",
            buttonType: "link",
            size: "lg",
            ripple: "dark",
            children: "Magic SignIn"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SignIn);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_EntryPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/EntryPage */ "./components/EntryPage.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/features/UserSlice */ "./redux/features/UserSlice.js");
/* harmony import */ var _redux_features_todoSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/features/todoSlice */ "./redux/features/todoSlice.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! magic-sdk */ "magic-sdk");
/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(magic_sdk__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\D_J_S_P\\React,Next\\Next_Mapbox\\mapbox\\pages\\index.js";








function Home() {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const chechUser_FetchTodos = async () => {
      const magic = new magic_sdk__WEBPACK_IMPORTED_MODULE_8__.Magic("pk_live_AE17745A8A693DEA");

      try {
        if (magic.user.isLoggedIn()) {
          let user = await magic.user.getMetadata();
          dispatch((0,_redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_5__.Check)(user));
        }

        await axios__WEBPACK_IMPORTED_MODULE_7___default().get("/api/createLocation").then(res => {
          dispatch((0,_redux_features_todoSlice__WEBPACK_IMPORTED_MODULE_6__.SetTodo)(res.data.allLocations));
        });
      } catch (err) {
        console.log(err);
      }
    };

    chechUser_FetchTodos();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Uber-clone Mapbox "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EntryPage__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

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

/***/ "@material-tailwind/react/Button":
/*!**************************************************!*\
  !*** external "@material-tailwind/react/Button" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/Button");;

/***/ }),

/***/ "@material-tailwind/react/Card":
/*!************************************************!*\
  !*** external "@material-tailwind/react/Card" ***!
  \************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/Card");;

/***/ }),

/***/ "@material-tailwind/react/CardBody":
/*!****************************************************!*\
  !*** external "@material-tailwind/react/CardBody" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/CardBody");;

/***/ }),

/***/ "@material-tailwind/react/CardFooter":
/*!******************************************************!*\
  !*** external "@material-tailwind/react/CardFooter" ***!
  \******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/CardFooter");;

/***/ }),

/***/ "@material-tailwind/react/CardHeader":
/*!******************************************************!*\
  !*** external "@material-tailwind/react/CardHeader" ***!
  \******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/CardHeader");;

/***/ }),

/***/ "@material-tailwind/react/Heading5":
/*!****************************************************!*\
  !*** external "@material-tailwind/react/Heading5" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/Heading5");;

/***/ }),

/***/ "@material-tailwind/react/Input":
/*!*************************************************!*\
  !*** external "@material-tailwind/react/Input" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/Input");;

/***/ }),

/***/ "@material-tailwind/react/InputIcon":
/*!*****************************************************!*\
  !*** external "@material-tailwind/react/InputIcon" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/InputIcon");;

/***/ }),

/***/ "@material-tailwind/react/Modal":
/*!*************************************************!*\
  !*** external "@material-tailwind/react/Modal" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/Modal");;

/***/ }),

/***/ "@material-tailwind/react/ModalBody":
/*!*****************************************************!*\
  !*** external "@material-tailwind/react/ModalBody" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/ModalBody");;

/***/ }),

/***/ "@material-tailwind/react/ModalFooter":
/*!*******************************************************!*\
  !*** external "@material-tailwind/react/ModalFooter" ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/ModalFooter");;

/***/ }),

/***/ "@material-tailwind/react/ModalHeader":
/*!*******************************************************!*\
  !*** external "@material-tailwind/react/ModalHeader" ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/ModalHeader");;

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

/***/ "magic-sdk":
/*!****************************!*\
  !*** external "magic-sdk" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("magic-sdk");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBib3gvLi9jb21wb25lbnRzL0VudHJ5UGFnZS5qcyIsIndlYnBhY2s6Ly9tYXBib3gvLi9jb21wb25lbnRzL0dlb0NvZGluZ1RvZG8uanMiLCJ3ZWJwYWNrOi8vbWFwYm94Ly4vY29tcG9uZW50cy9TaWduSW4uanMiLCJ3ZWJwYWNrOi8vbWFwYm94Ly4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWFwYm94Ly4vcmVkdXgvZmVhdHVyZXMvVXNlclNsaWNlLmpzIiwid2VicGFjazovL21hcGJveC8uL3JlZHV4L2ZlYXR1cmVzL3RvZG9TbGljZS5qcyIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0NhcmRcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQ2FyZEJvZHlcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQ2FyZEZvb3RlclwiIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9DYXJkSGVhZGVyXCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0hlYWRpbmc1XCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0lucHV0XCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0lucHV0SWNvblwiIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbFwiIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbEJvZHlcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxGb290ZXJcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxIZWFkZXJcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJtYWdpYy1zZGtcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJtYWdpYyIsIkVudHJ5UGFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZXIiLCJ1c2VTZWxlY3RvciIsInNlbGVjdFVzZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaGFuZGxlTG9nb3V0IiwibG9nb3V0IiwiUmVtb3ZlIiwicHVzaCIsImVtYWlsIiwiR2VvQ29kaW5nVG9kbyIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInVzZVN0YXRlIiwidG9kb0lucHV0Iiwic2V0VG9kb0lucHV0IiwidG9kbyIsInNlbGVjdFRvZG8iLCJoYW5kbGVBZGRMb2NhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJhZGRUb2RvUHJpc21hIiwiYXhpb3MiLCJ0aGVuIiwiZGF0YSIsInJlcyIsIlNldFRvZG8iLCJhbGxMb2NhdGlvbnMiLCJjYXRjaCIsImVyciIsImhhbmRsZVJlbW92ZSIsImlkIiwidXNlcklkIiwicmVtb3ZlIiwiZmlsdGVyZWQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJpdGVtIiwiTmFtZSIsIlVzZXJJZCIsIlNpZ25JbiIsInNldEVtYWlsIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImF1dGgiLCJsb2dpbldpdGhNYWdpY0xpbmsiLCJnZXRNZXRhZGF0YSIsIkFkZCIsIkhvbWUiLCJ1c2VFZmZlY3QiLCJjaGVjaFVzZXJfRmV0Y2hUb2RvcyIsIk1hZ2ljIiwicHJvY2VzcyIsImlzTG9nZ2VkSW4iLCJDaGVjayIsIlVzZXJTbGljZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXJzIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZmV0Y2giLCJhY3Rpb25zIiwiVXNlciIsInJlZHVjZXIiLCJUb2RvUmVkdWNlciIsInJldmVyc2UiLCJUb2RvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxLQUFLLEdBQUcsRUFBWjs7QUFDQSxJQUFJLE9BQStCLEVBRWxDOztBQUVELE1BQU1DLFNBQVMsR0FBRyxNQUFNO0FBQ3RCLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxRQUFNQyxJQUFJLEdBQUdDLHdEQUFXLENBQUNDLGlFQUFELENBQXhCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHQyx3REFBVyxFQUE1Qjs7QUFFQSxRQUFNQyxZQUFZLEdBQUcsWUFBWTtBQUMvQixVQUFNVCxLQUFLLENBQUNJLElBQU4sQ0FBV00sTUFBWCxFQUFOO0FBQ0FILFlBQVEsQ0FBQ0ksaUVBQU0sRUFBUCxDQUFSO0FBQ0QsR0FIRDs7QUFLQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyw4REFBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxF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Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgU2lnbkluIGZyb20gXCIuL1NpZ25JblwiXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9CdXR0b25cIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyBzZWxlY3RVc2VyLCBSZW1vdmUgfSBmcm9tIFwiLi4vcmVkdXgvZmVhdHVyZXMvVXNlclNsaWNlXCJcclxuaW1wb3J0IEdlb0NvZGluZ1RvZG8gZnJvbSBcIi4vR2VvQ29kaW5nVG9kb1wiXHJcbmltcG9ydCB7IE1hZ2ljIH0gZnJvbSBcIm1hZ2ljLXNka1wiXHJcblxyXG5sZXQgbWFnaWMgPSBcIlwiXHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgbWFnaWMgPSBuZXcgTWFnaWMocHJvY2Vzcy5lbnYubWFnaWNLRVkpXHJcbn1cclxuXHJcbmNvbnN0IEVudHJ5UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RVc2VyKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBtYWdpYy51c2VyLmxvZ291dCgpXHJcbiAgICBkaXNwYXRjaChSZW1vdmUoKSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBoLXNjcmVlbiBiZy1ncmF5LTMwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IHJpZ2h0LTQgZmxleCBzcGFjZS14LTRcIj5cclxuICAgICAgICB7dXNlciAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgICAgIGJ1dHRvblR5cGU9XCJvdXRsaW5lXCJcclxuICAgICAgICAgICAgICBzaXplPVwicmVndWxhclwiXHJcbiAgICAgICAgICAgICAgcm91bmRlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgYmxvY2s9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGljb25Pbmx5PXtmYWxzZX1cclxuICAgICAgICAgICAgICByaXBwbGU9XCJkYXJrXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBMb2cgT3V0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjb2xvcj1cImxpZ2h0Qmx1ZVwiXHJcbiAgICAgICAgICBidXR0b25UeXBlPVwib3V0bGluZVwiXHJcbiAgICAgICAgICBzaXplPVwicmVndWxhclwiXHJcbiAgICAgICAgICByb3VuZGVkPXtmYWxzZX1cclxuICAgICAgICAgIGJsb2NrPXtmYWxzZX1cclxuICAgICAgICAgIGljb25Pbmx5PXtmYWxzZX1cclxuICAgICAgICAgIHJpcHBsZT1cImRhcmtcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvTWFwXCIpfVxyXG4gICAgICAgICAgZGlzYWJsZWQ9eyF1c2VyID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFZpZXcgTWFwXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3VzZXIgJiYgKFxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNCBsZWZ0LThcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtM3hsIHRleHQtYmx1ZS00MDAgbXItNFwiPkhlbGxvPC9zcGFuPlxyXG5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj57dXNlcj8uZW1haWx9PC9zcGFuPlxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICl9XHJcbiAgICAgIHshdXNlciA/IDxTaWduSW4gLz4gOiA8R2VvQ29kaW5nVG9kbyAvPn1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW50cnlQYWdlXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L01vZGFsXCJcclxuaW1wb3J0IE1vZGFsSGVhZGVyIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxIZWFkZXJcIlxyXG5pbXBvcnQgTW9kYWxCb2R5IGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxCb2R5XCJcclxuaW1wb3J0IE1vZGFsRm9vdGVyIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxGb290ZXJcIlxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQnV0dG9uXCJcclxuaW1wb3J0IElucHV0IGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvSW5wdXRcIlxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyBzZWxlY3RUb2RvLCBTZXRUb2RvIH0gZnJvbSBcIi4uL3JlZHV4L2ZlYXR1cmVzL3RvZG9TbGljZVwiXHJcbmltcG9ydCB7IHNlbGVjdFVzZXIgfSBmcm9tIFwiLi4vcmVkdXgvZmVhdHVyZXMvVXNlclNsaWNlXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcblxyXG5jb25zdCBHZW9Db2RpbmdUb2RvID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdG9kb0lucHV0LCBzZXRUb2RvSW5wdXRdID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCB0b2RvID0gdXNlU2VsZWN0b3Ioc2VsZWN0VG9kbylcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0VXNlcilcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBoYW5kbGVBZGRMb2NhdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHRvZG9JbnB1dClcclxuICAgIGlmICh0b2RvSW5wdXQpIHtcclxuICAgICAgY29uc3QgYWRkVG9kb1ByaXNtYSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCBheGlvc1xyXG4gICAgICAgICAgLnBvc3QoXCIvYXBpL2NyZWF0ZUxvY2F0aW9uXCIsIHtcclxuICAgICAgICAgICAgdG9kbzogdG9kb0lucHV0LFxyXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbihhc3luYyBkYXRhID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9jcmVhdGVMb2NhdGlvblwiKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goU2V0VG9kbyhyZXMuZGF0YS5hbGxMb2NhdGlvbnMpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAgICAgfVxyXG4gICAgICBhZGRUb2RvUHJpc21hKClcclxuICAgIH1cclxuICAgIHNldFRvZG9JbnB1dChcIlwiKVxyXG4gICAgc2V0U2hvd01vZGFsKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlUmVtb3ZlID0gKGlkLCB1c2VySWQpID0+IHtcclxuICAgIGNvbnN0IHJlbW92ZSA9IGFzeW5jIGlkID0+IHtcclxuICAgICAgYXdhaXQgYXhpb3NcclxuICAgICAgICAucG9zdChcIi9hcGkvcmVtb3ZlVG9kb0xvY2F0aW9uXCIsIHtcclxuICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaChTZXRUb2RvKGRhdGEuZGF0YS5maWx0ZXJlZCkpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICB9XHJcbiAgICByZW1vdmUoaWQpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktNVwiPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgY29sb3I9XCJsaWdodEJsdWVcIlxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIG9uQ2xpY2s9e2UgPT4gc2V0U2hvd01vZGFsKHRydWUpfVxyXG4gICAgICAgIHJpcHBsZT1cImxpZ2h0XCJcclxuICAgICAgPlxyXG4gICAgICAgIEFkZCB5b3VyIGZhdm9yaXRlIGxvY2F0aW9uXHJcbiAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgPE1vZGFsIHNpemU9XCJzbVwiIGFjdGl2ZT17c2hvd01vZGFsfSB0b2dnbGVyPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfT5cclxuICAgICAgICA8TW9kYWxIZWFkZXIgdG9nZ2xlcj17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX0+XHJcbiAgICAgICAgICBBZGQgYSBsb2NhdGlvblxyXG4gICAgICAgIDwvTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgPE1vZGFsQm9keT5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwibGlnaHRCbHVlXCJcclxuICAgICAgICAgICAgc2l6ZT1cInJlZ3VsYXJcIlxyXG4gICAgICAgICAgICBvdXRsaW5lPXt0cnVlfVxyXG4gICAgICAgICAgICB2YWx1ZT17dG9kb0lucHV0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUb2RvSW5wdXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBsb2NhdGlvblwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTW9kYWxCb2R5PlxyXG4gICAgICAgIDxNb2RhbEZvb3Rlcj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgICBidXR0b25UeXBlPVwibGlua1wiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cclxuICAgICAgICAgICAgcmlwcGxlPVwiZGFya1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNvbG9yPVwiZ3JlZW5cIlxyXG4gICAgICAgICAgICByaXBwbGU9XCJsaWdodFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZExvY2F0aW9uKCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFkZCBsb2NhdGlvblxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAge3RvZG8/Lm1hcChpdGVtID0+IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciAgdy1bMzAwcHhdIGgtWzUwcHhdIGJnLXBpbmstNDAwICByb3VuZGVkIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBzY2FsZS03NSAgaG92ZXI6c2NhbGUtMTAwIHAtNFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVsyOTBweF0gaC01MHB4XCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9NYXA/bG9jYXRpb249JHtpdGVtLk5hbWV9YCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwPntpdGVtLk5hbWV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZShpdGVtLmlkLCBpdGVtLlVzZXJJZCl9PuKdjDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2VvQ29kaW5nVG9kb1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBDYXJkIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQ2FyZFwiXHJcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQ2FyZEhlYWRlclwiXHJcbmltcG9ydCBDYXJkQm9keSBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0NhcmRCb2R5XCJcclxuaW1wb3J0IENhcmRGb290ZXIgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9DYXJkRm9vdGVyXCJcclxuaW1wb3J0IElucHV0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0lucHV0SWNvblwiXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9CdXR0b25cIlxyXG5pbXBvcnQgSDUgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9IZWFkaW5nNVwiXHJcbmltcG9ydCB7IE1hZ2ljIH0gZnJvbSBcIm1hZ2ljLXNka1wiXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IHsgQWRkIH0gZnJvbSBcIi4uL3JlZHV4L2ZlYXR1cmVzL1VzZXJTbGljZVwiXHJcblxyXG5sZXQgbWFnaWMgPSBcIlwiXHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgbWFnaWMgPSBuZXcgTWFnaWMocHJvY2Vzcy5lbnYubWFnaWNLRVkpXHJcbn1cclxuXHJcbmNvbnN0IFNpZ25JbiA9ICgpID0+IHtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGV2ZW50ID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICBpZiAoZW1haWwpIHtcclxuICAgICAgYXdhaXQgbWFnaWMuYXV0aC5sb2dpbldpdGhNYWdpY0xpbmsoeyBlbWFpbCB9KVxyXG5cclxuICAgICAgbGV0IHVzZXIgPSBhd2FpdCBtYWdpYy51c2VyLmdldE1ldGFkYXRhKClcclxuICAgICAgY29uc29sZS5sb2codXNlcilcclxuICAgICAgZGlzcGF0Y2goQWRkKHVzZXIpKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bNDAwcHhdXCI+XHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICAgIDxDYXJkSGVhZGVyIGNvbG9yPVwibGlnaHRCbHVlXCIgc2l6ZT1cImxnXCI+XHJcbiAgICAgICAgICA8SDUgY29sb3I9XCJ3aGl0ZVwiPkxvZ2luPC9INT5cclxuICAgICAgICA8L0NhcmRIZWFkZXI+XHJcblxyXG4gICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOCBweC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dEljb25cclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwibGlnaHRCbHVlXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgPENhcmRGb290ZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0Qmx1ZVwiXHJcbiAgICAgICAgICAgICAgYnV0dG9uVHlwZT1cImxpbmtcIlxyXG4gICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgcmlwcGxlPVwiZGFya1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBNYWdpYyBTaWduSW5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NhcmRGb290ZXI+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbkluXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgRW50cnlQYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL0VudHJ5UGFnZVwiXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQgeyBDaGVjayB9IGZyb20gXCIuLi9yZWR1eC9mZWF0dXJlcy9Vc2VyU2xpY2VcIlxuaW1wb3J0IHsgU2V0VG9kbyB9IGZyb20gXCIuLi9yZWR1eC9mZWF0dXJlcy90b2RvU2xpY2VcIlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgeyBNYWdpYyB9IGZyb20gXCJtYWdpYy1zZGtcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNoVXNlcl9GZXRjaFRvZG9zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbWFnaWMgPSBuZXcgTWFnaWMocHJvY2Vzcy5lbnYubWFnaWNLRVkpXG4gICAgICB0cnkge1xuICAgICAgICBpZiAobWFnaWMudXNlci5pc0xvZ2dlZEluKCkpIHtcbiAgICAgICAgICBsZXQgdXNlciA9IGF3YWl0IG1hZ2ljLnVzZXIuZ2V0TWV0YWRhdGEoKVxuICAgICAgICAgIGRpc3BhdGNoKENoZWNrKHVzZXIpKVxuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9jcmVhdGVMb2NhdGlvblwiKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goU2V0VG9kbyhyZXMuZGF0YS5hbGxMb2NhdGlvbnMpKVxuICAgICAgICB9KVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgIH1cbiAgICB9XG4gICAgY2hlY2hVc2VyX0ZldGNoVG9kb3MoKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlViZXItY2xvbmUgTWFwYm94IDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8RW50cnlQYWdlIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJVc2VyXCIsXHJcbiAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICB1c2VyOiBudWxsLFxyXG4gIH0sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIEFkZDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXNlciA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIGNvbnN0IGZldGNoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgICAgICAucG9zdChcImFwaS9jcmVhdGVVc2VyXCIsIHtcclxuICAgICAgICAgICAgZW1haWw6IGFjdGlvbi5wYXlsb2FkLmVtYWlsLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgICB9XHJcbiAgICAgIGZldGNoKClcclxuICAgIH0sXHJcbiAgICBSZW1vdmU6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnVzZXIgPSBudWxsXHJcbiAgICB9LFxyXG4gICAgQ2hlY2s6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnVzZXIgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgfSxcclxuICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHsgQWRkLCBSZW1vdmUsIENoZWNrIH0gPSBVc2VyU2xpY2UuYWN0aW9uc1xyXG5cclxuLy8gVGhlIGZ1bmN0aW9uIGJlbG93IGlzIGNhbGxlZCBhIHRodW5rIGFuZCBhbGxvd3MgdXMgdG8gcGVyZm9ybSBhc3luYyBsb2dpYy4gSXRcclxuLy8gY2FuIGJlIGRpc3BhdGNoZWQgbGlrZSBhIHJlZ3VsYXIgYWN0aW9uOiBgZGlzcGF0Y2goaW5jcmVtZW50QXN5bmMoMTApKWAuIFRoaXNcclxuLy8gd2lsbCBjYWxsIHRoZSB0aHVuayB3aXRoIHRoZSBgZGlzcGF0Y2hgIGZ1bmN0aW9uIGFzIHRoZSBmaXJzdCBhcmd1bWVudC4gQXN5bmNcclxuLy8gY29kZSBjYW4gdGhlbiBiZSBleGVjdXRlZCBhbmQgb3RoZXIgYWN0aW9ucyBjYW4gYmUgZGlzcGF0Y2hlZFxyXG5cclxuLy8gVGhlIGZ1bmN0aW9uIGJlbG93IGlzIGNhbGxlZCBhIHNlbGVjdG9yIGFuZCBhbGxvd3MgdXMgdG8gc2VsZWN0IGEgdmFsdWUgZnJvbVxyXG4vLyB0aGUgc3RhdGUuIFNlbGVjdG9ycyBjYW4gYWxzbyBiZSBkZWZpbmVkIGlubGluZSB3aGVyZSB0aGV5J3JlIHVzZWQgaW5zdGVhZCBvZlxyXG4vLyBpbiB0aGUgc2xpY2UgZmlsZS4gRm9yIGV4YW1wbGU6IGB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvdW50ZXIudmFsdWUpYFxyXG5leHBvcnQgY29uc3Qgc2VsZWN0VXNlciA9IHN0YXRlID0+IHN0YXRlLlVzZXIudXNlclxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclNsaWNlLnJlZHVjZXJcclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgY29uc3QgVG9kb1JlZHVjZXIgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ1RvZG8nLFxyXG4gIGluaXRpYWxTdGF0ZToge1xyXG4gICAgdG9kbzogW10sXHJcbiAgfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgU2V0VG9kbzogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudG9kbyA9IFsuLi5hY3Rpb24ucGF5bG9hZF0ucmV2ZXJzZSgpXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBTZXRUb2RvIH0gPSBUb2RvUmVkdWNlci5hY3Rpb25zXHJcblxyXG4vLyBUaGUgZnVuY3Rpb24gYmVsb3cgaXMgY2FsbGVkIGEgdGh1bmsgYW5kIGFsbG93cyB1cyB0byBwZXJmb3JtIGFzeW5jIGxvZ2ljLiBJdFxyXG4vLyBjYW4gYmUgZGlzcGF0Y2hlZCBsaWtlIGEgcmVndWxhciBhY3Rpb246IGBkaXNwYXRjaChpbmNyZW1lbnRBc3luYygxMCkpYC4gVGhpc1xyXG4vLyB3aWxsIGNhbGwgdGhlIHRodW5rIHdpdGggdGhlIGBkaXNwYXRjaGAgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50LiBBc3luY1xyXG4vLyBjb2RlIGNhbiB0aGVuIGJlIGV4ZWN1dGVkIGFuZCBvdGhlciBhY3Rpb25zIGNhbiBiZSBkaXNwYXRjaGVkXHJcblxyXG4vLyBUaGUgZnVuY3Rpb24gYmVsb3cgaXMgY2FsbGVkIGEgc2VsZWN0b3IgYW5kIGFsbG93cyB1cyB0byBzZWxlY3QgYSB2YWx1ZSBmcm9tXHJcbi8vIHRoZSBzdGF0ZS4gU2VsZWN0b3JzIGNhbiBhbHNvIGJlIGRlZmluZWQgaW5saW5lIHdoZXJlIHRoZXkncmUgdXNlZCBpbnN0ZWFkIG9mXHJcbi8vIGluIHRoZSBzbGljZSBmaWxlLiBGb3IgZXhhbXBsZTogYHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY291bnRlci52YWx1ZSlgXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RUb2RvID0gc3RhdGUgPT4gc3RhdGUuVG9kby50b2RvXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvUmVkdWNlci5yZWR1Y2VyXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9CdXR0b25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9DYXJkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQ2FyZEJvZHlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9DYXJkRm9vdGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQ2FyZEhlYWRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0hlYWRpbmc1XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvSW5wdXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9JbnB1dEljb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L01vZGFsQm9keVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L01vZGFsRm9vdGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxIZWFkZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYWdpYy1zZGtcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9