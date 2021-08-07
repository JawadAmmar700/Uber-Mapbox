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
  console.log(todo);
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
          console.log(data);
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
        console.log(data);
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
      lineNumber: 64,
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
        lineNumber: 74,
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
          lineNumber: 78,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
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
          lineNumber: 89,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
          color: "green",
          ripple: "light",
          onClick: () => handleAddLocation(),
          children: "Add location"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
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
          lineNumber: 116,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onClick: () => handleRemove(item.id, item.UserId),
        children: "\u274C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 11
      }, undefined)]
    }, item.id, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
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

/***/ "./components/mapbox.js":
/*!******************************!*\
  !*** ./components/mapbox.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mapbox-gl/dist/mapbox-gl.css */ "./node_modules/mapbox-gl/dist/mapbox-gl.css");
/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_map_gl_geocoder_dist_mapbox_gl_geocoder_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-map-gl-geocoder/dist/mapbox-gl-geocoder.css */ "./node_modules/react-map-gl-geocoder/dist/mapbox-gl-geocoder.css");
/* harmony import */ var react_map_gl_geocoder_dist_mapbox_gl_geocoder_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_map_gl_geocoder_dist_mapbox_gl_geocoder_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-map-gl */ "react-map-gl");
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_map_gl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_map_gl_geocoder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-map-gl-geocoder */ "react-map-gl-geocoder");
/* harmony import */ var react_map_gl_geocoder__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_map_gl_geocoder__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _useFetchData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../useFetchData */ "./useFetchData.js");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-tailwind/react/Button */ "@material-tailwind/react/Button");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _paypalModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./paypalModel */ "./components/paypalModel.js");


var _jsxFileName = "C:\\D_J_S_P\\React,Next\\Next_Mapbox\\mapbox\\components\\mapbox.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const MAPBOX_TOKEN = "pk.eyJ1IjoiamF3YWRhbW1hcjEyIiwiYSI6ImNrcm42aG42NDRlM3oydXA4NWoza2N6dG8ifQ.UjeHP4M3MlTJg78K0THqRQ";
const navControlStyle = {
  right: 10,
  top: 10
};

const Mapbox = ({
  locationProp
}) => {
  var _geo$geometry;

  //defining States
  const {
    0: viewport,
    1: setViewport
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});
  const mapRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  const {
    0: geo,
    1: setGeo
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});
  const {
    0: markers,
    1: setMarkers
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const {
    0: showPopup,
    1: setShowpopup
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(-1);
  const {
    0: originName,
    1: setOriginName
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const {
    0: destinationName,
    1: setDestinationName
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const {
    0: show,
    1: setShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    0: location,
    1: setLocation
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(locationProp);
  const {
    0: ride,
    1: setRide
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const {
    0: showModal,
    1: setShowModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // defining the style and the way the direction will be presented in the map

  const layerStyle = {
    id: "route",
    type: "line",
    source: "route",
    paint: {
      "line-color": "#fcfc03",
      "line-width": 5
    },
    layout: {
      "line-join": "round",
      "line-cap": "round"
    }
  }; // it will run once the component re-renders and stop, which is setting our current location and store them in the state

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setViewport({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        zoom: 10,
        width: "100vw",
        height: "100vh"
      });
      setMarkers([{
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }]);
      (0,_useFetchData__WEBPACK_IMPORTED_MODULE_6__.fetchData)(position.coords.longitude, position.coords.latitude).then(name => {
        setOriginName(name);
      });
    });
  }, []); //main function responsible for changing the view in the map

  const handleViewportChange = newViewport => {
    setViewport(newViewport);
  }; //function to round a number


  function round(num, dec) {
    return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
  } // function is called whever the search component changes


  const handleGeocoderViewportChangeTo = newViewport => {
    const geocoderDefaultOverrides = {
      transitionDuration: newViewport.transitionDuration
    };
    if (!newViewport) return;
    setMarkers([...markers, {
      latitude: newViewport.latitude,
      longitude: newViewport.longitude
    }]);
    (0,_useFetchData__WEBPACK_IMPORTED_MODULE_6__.directionsApi)(markers, newViewport).then(data => setGeo(data));
    (0,_useFetchData__WEBPACK_IMPORTED_MODULE_6__.fetchData)(newViewport.longitude, newViewport.latitude).then(name => setDestinationName(name));
    console.log("zoom", newViewport);
    setTimeout(() => {
      setShow(true);
    }, newViewport.transitionDuration);
    return handleViewportChange(_objectSpread(_objectSpread({}, newViewport), {}, {
      zoom: newViewport.zoom
    }, geocoderDefaultOverrides));
  };

  const clearSearch = () => {
    setGeo(null);
    setMarkers(markers.slice(0, 1));
    setShow(false);
    setLocation("");
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "map",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_map_gl__WEBPACK_IMPORTED_MODULE_4___default()), _objectSpread(_objectSpread({
        ref: mapRef
      }, viewport), {}, {
        onViewportChange: handleViewportChange,
        mapboxApiAccessToken: MAPBOX_TOKEN,
        mapStyle: "mapbox://styles/mapbox/streets-v11",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_4__.NavigationControl, {
          style: navControlStyle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, undefined), geo != null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_4__.Source, {
          id: "route",
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: geo === null || geo === void 0 ? void 0 : (_geo$geometry = geo.geometry) === null || _geo$geometry === void 0 ? void 0 : _geo$geometry.coordinates
            }
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_4__.Layer, _objectSpread({}, layerStyle), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 13
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false), markers.length && markers.map((point, id) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_4__.Marker, {
            latitude: Number(point === null || point === void 0 ? void 0 : point.latitude),
            longitude: Number(point === null || point === void 0 ? void 0 : point.longitude),
            offsetLeft: -20,
            offsetTop: -10,
            draggable: false,
            onClick: () => setShowpopup(id),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "https://img.icons8.com/color/48/000000/map-pin.png",
              alt: "location mark"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 17
          }, undefined), showPopup === id && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_4__.Popup, {
            latitude: point === null || point === void 0 ? void 0 : point.latitude,
            longitude: point === null || point === void 0 ? void 0 : point.longitude,
            closeButton: true,
            closeOnClick: true,
            anchor: "top",
            onClose: () => setShowpopup(-1),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                width: "300px"
              },
              children: id === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: ["Origin: ", originName]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 25
              }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: [" Destination: ", destinationName]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 27
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: ["distance:", round((geo === null || geo === void 0 ? void 0 : geo.distance) / 1000, 2), " km"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 185,
                  columnNumber: 27
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: ["durations:", round((geo === null || geo === void 0 ? void 0 : geo.duration) / 60, 2), " min"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 27
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 25
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 19
          }, undefined)]
        }, id, true, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 15
        }, undefined))]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "search",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_map_gl_geocoder__WEBPACK_IMPORTED_MODULE_5___default()), {
        mapRef: mapRef,
        onViewportChange: handleGeocoderViewportChangeTo,
        mapboxApiAccessToken: MAPBOX_TOKEN,
        position: "top-left",
        placeholder: "choose your destination",
        onClear: clearSearch,
        inputValue: location ? location : ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 7
    }, undefined), show == true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-[240px] h-[300px] flex flex-col items-center rounded p-2 z-10 bg-white absolute top-[52px] left-[10px]",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Choose a ride"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w-[80%] h-[50px] rounded  mt-4 flex justify-between items-center p-2 hover:bg-blue-300 bg-blue-400 cursor-pointer",
        onClick: () => setRide(round(round((geo === null || geo === void 0 ? void 0 : geo.distance) / 1000, 2) * 2.45, 2)),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Uber X"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Price: ", round(round((geo === null || geo === void 0 ? void 0 : geo.distance) / 1000, 2) * 2.45, 2), "$"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w-[80%] h-[50px] rounded mt-4 flex justify-between items-center p-2 bg-blue-400 hover:bg-blue-300 cursor-pointer",
        onClick: () => setRide(round(round((geo === null || geo === void 0 ? void 0 : geo.distance) / 1000, 2) * 3.67, 2)),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Uber XS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Price: ", round(round((geo === null || geo === void 0 ? void 0 : geo.distance) / 1000, 2) * 3.67, 2), "$"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w-[80%] h-[50px] rounded mt-4 flex justify-between p-2 items-center bg-blue-400 hover:bg-blue-300 cursor-pointer",
        onClick: () => setRide(round(round((geo === null || geo === void 0 ? void 0 : geo.distance) / 1000, 2) * 4.55, 2)),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Uber El"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Price: ", round(round((geo === null || geo === void 0 ? void 0 : geo.distance) / 1000, 2) * 4.55, 2), "$"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 11
      }, undefined), ride && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
        color: "lightBlue",
        type: "button",
        ripple: "light",
        className: "mt-4",
        onClick: () => setShowModal(true),
        children: ["Get ride ", ride, "$"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 9
    }, undefined) : "", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypalModel__WEBPACK_IMPORTED_MODULE_8__.default, {
      showModal: showModal,
      setShowModal: setShowModal,
      price: ride
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Mapbox);

/***/ }),

/***/ "./components/paypalModel.js":
/*!***********************************!*\
  !*** ./components/paypalModel.js ***!
  \***********************************/
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
/* harmony import */ var react_paypal_button_v2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-paypal-button-v2 */ "react-paypal-button-v2");
/* harmony import */ var react_paypal_button_v2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_paypal_button_v2__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\D_J_S_P\\React,Next\\Next_Mapbox\\mapbox\\components\\paypalModel.js";








const paypalModel = ({
  showModal,
  setShowModal,
  price
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Modal__WEBPACK_IMPORTED_MODULE_2___default()), {
      size: "sm",
      active: showModal,
      toggler: () => setShowModal(false),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_ModalHeader__WEBPACK_IMPORTED_MODULE_3___default()), {
        toggler: () => setShowModal(false),
        children: "Paypal checkOut"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_ModalBody__WEBPACK_IMPORTED_MODULE_4___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_paypal_button_v2__WEBPACK_IMPORTED_MODULE_7__.PayPalButton, {
          amount: price,
          onSuccess: (details, data) => {
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
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
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
          lineNumber: 29,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
          color: "green",
          ripple: "light",
          children: "Add location"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (paypalModel);

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
/* harmony import */ var _components_mapbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/mapbox */ "./components/mapbox.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/features/UserSlice */ "./redux/features/UserSlice.js");
/* harmony import */ var _redux_features_todoSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/features/todoSlice */ "./redux/features/todoSlice.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! magic-sdk */ "magic-sdk");
/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(magic_sdk__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\D_J_S_P\\React,Next\\Next_Mapbox\\mapbox\\pages\\index.js";









function Home() {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const chechUser_FetchTodos = async () => {
      const magic = new magic_sdk__WEBPACK_IMPORTED_MODULE_9__.Magic("pk_live_AE17745A8A693DEA");

      try {
        if (magic.user.isLoggedIn()) {
          let user = await magic.user.getMetadata();
          dispatch((0,_redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_6__.Check)(user));
        }

        await axios__WEBPACK_IMPORTED_MODULE_8___default().get("/api/createLocation").then(res => {
          dispatch((0,_redux_features_todoSlice__WEBPACK_IMPORTED_MODULE_7__.SetTodo)(res.data.allLocations));
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
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EntryPage__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
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

/***/ "./useFetchData.js":
/*!*************************!*\
  !*** ./useFetchData.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchData": function() { return /* binding */ fetchData; },
/* harmony export */   "directionsApi": function() { return /* binding */ directionsApi; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const fetchData = async (x, y) => {
  let name = '';
  await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${x},${y}.json?access_token=pk.eyJ1IjoiamF3YWRhbW1hcjEyIiwiYSI6ImNrcm42aG42NDRlM3oydXA4NWoza2N6dG8ifQ.UjeHP4M3MlTJg78K0THqRQ `).then(res => res.json()).then(data => {
    name = data.features[0].place_name;
  }).catch(err => console.log(err));
  return name;
};
const directionsApi = async (markers, newViewport) => {
  let direction = {};
  await fetch(`https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${markers[0].longitude},${markers[0].latitude};${newViewport === null || newViewport === void 0 ? void 0 : newViewport.longitude},${newViewport === null || newViewport === void 0 ? void 0 : newViewport.latitude}?geometries=geojson&access_token=pk.eyJ1IjoiamF3YWRhbW1hcjEyIiwiYSI6ImNrcm42aG42NDRlM3oydXA4NWoza2N6dG8ifQ.UjeHP4M3MlTJg78K0THqRQ`).then(res => res.json()).then(data => {
    direction = data.routes[0];
  }).catch(err => console.log(err));
  return _objectSpread({}, direction);
};

/***/ }),

/***/ "./node_modules/mapbox-gl/dist/mapbox-gl.css":
/*!***************************************************!*\
  !*** ./node_modules/mapbox-gl/dist/mapbox-gl.css ***!
  \***************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/react-map-gl-geocoder/dist/mapbox-gl-geocoder.css":
/*!************************************************************************!*\
  !*** ./node_modules/react-map-gl-geocoder/dist/mapbox-gl-geocoder.css ***!
  \************************************************************************/
/***/ (function() {



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

/***/ "react-map-gl":
/*!*******************************!*\
  !*** external "react-map-gl" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-map-gl");;

/***/ }),

/***/ "react-map-gl-geocoder":
/*!****************************************!*\
  !*** external "react-map-gl-geocoder" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-map-gl-geocoder");;

/***/ }),

/***/ "react-paypal-button-v2":
/*!*****************************************!*\
  !*** external "react-paypal-button-v2" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-paypal-button-v2");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBib3gvLi9jb21wb25lbnRzL0VudHJ5UGFnZS5qcyIsIndlYnBhY2s6Ly9tYXBib3gvLi9jb21wb25lbnRzL0dlb0NvZGluZ1RvZG8uanMiLCJ3ZWJwYWNrOi8vbWFwYm94Ly4vY29tcG9uZW50cy9TaWduSW4uanMiLCJ3ZWJwYWNrOi8vbWFwYm94Ly4vY29tcG9uZW50cy9tYXBib3guanMiLCJ3ZWJwYWNrOi8vbWFwYm94Ly4vY29tcG9uZW50cy9wYXlwYWxNb2RlbC5qcyIsIndlYnBhY2s6Ly9tYXBib3gvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9tYXBib3gvLi9yZWR1eC9mZWF0dXJlcy9Vc2VyU2xpY2UuanMiLCJ3ZWJwYWNrOi8vbWFwYm94Ly4vcmVkdXgvZmVhdHVyZXMvdG9kb1NsaWNlLmpzIiwid2VicGFjazovL21hcGJveC8uL3VzZUZldGNoRGF0YS5qcyIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0NhcmRcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQ2FyZEJvZHlcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQ2FyZEZvb3RlclwiIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9DYXJkSGVhZGVyXCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0hlYWRpbmc1XCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0lucHV0XCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0lucHV0SWNvblwiIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbFwiIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbEJvZHlcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxGb290ZXJcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxIZWFkZXJcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJtYWdpYy1zZGtcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwicmVhY3QtbWFwLWdsXCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwicmVhY3QtbWFwLWdsLWdlb2NvZGVyXCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwicmVhY3QtcGF5cGFsLWJ1dHRvbi12MlwiIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsibWFnaWMiLCJFbnRyeVBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VyIiwidXNlU2VsZWN0b3IiLCJzZWxlY3RVc2VyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImhhbmRsZUxvZ291dCIsImxvZ291dCIsIlJlbW92ZSIsInB1c2giLCJlbWFpbCIsIkdlb0NvZGluZ1RvZG8iLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJ1c2VTdGF0ZSIsInRvZG9JbnB1dCIsInNldFRvZG9JbnB1dCIsInRvZG8iLCJzZWxlY3RUb2RvIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUFkZExvY2F0aW9uIiwiYWRkVG9kb1ByaXNtYSIsImF4aW9zIiwidGhlbiIsImRhdGEiLCJyZXMiLCJTZXRUb2RvIiwiYWxsTG9jYXRpb25zIiwiY2F0Y2giLCJlcnIiLCJoYW5kbGVSZW1vdmUiLCJpZCIsInVzZXJJZCIsInJlbW92ZSIsImZpbHRlcmVkIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwiaXRlbSIsIk5hbWUiLCJVc2VySWQiLCJTaWduSW4iLCJzZXRFbWFpbCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhdXRoIiwibG9naW5XaXRoTWFnaWNMaW5rIiwiZ2V0TWV0YWRhdGEiLCJBZGQiLCJNQVBCT1hfVE9LRU4iLCJwcm9jZXNzIiwibmF2Q29udHJvbFN0eWxlIiwicmlnaHQiLCJ0b3AiLCJNYXBib3giLCJsb2NhdGlvblByb3AiLCJ2aWV3cG9ydCIsInNldFZpZXdwb3J0IiwibWFwUmVmIiwidXNlUmVmIiwiZ2VvIiwic2V0R2VvIiwibWFya2VycyIsInNldE1hcmtlcnMiLCJzaG93UG9wdXAiLCJzZXRTaG93cG9wdXAiLCJvcmlnaW5OYW1lIiwic2V0T3JpZ2luTmFtZSIsImRlc3RpbmF0aW9uTmFtZSIsInNldERlc3RpbmF0aW9uTmFtZSIsInNob3ciLCJzZXRTaG93IiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsInJpZGUiLCJzZXRSaWRlIiwibGF5ZXJTdHlsZSIsInR5cGUiLCJzb3VyY2UiLCJwYWludCIsImxheW91dCIsInVzZUVmZmVjdCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwicG9zaXRpb24iLCJsYXRpdHVkZSIsImNvb3JkcyIsImxvbmdpdHVkZSIsInpvb20iLCJ3aWR0aCIsImhlaWdodCIsImZldGNoRGF0YSIsIm5hbWUiLCJoYW5kbGVWaWV3cG9ydENoYW5nZSIsIm5ld1ZpZXdwb3J0Iiwicm91bmQiLCJudW0iLCJkZWMiLCJNYXRoIiwicG93IiwiaGFuZGxlR2VvY29kZXJWaWV3cG9ydENoYW5nZVRvIiwiZ2VvY29kZXJEZWZhdWx0T3ZlcnJpZGVzIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiZGlyZWN0aW9uc0FwaSIsInNldFRpbWVvdXQiLCJjbGVhclNlYXJjaCIsInNsaWNlIiwicHJvcGVydGllcyIsImdlb21ldHJ5IiwiY29vcmRpbmF0ZXMiLCJsZW5ndGgiLCJwb2ludCIsIk51bWJlciIsImRpc3RhbmNlIiwiZHVyYXRpb24iLCJwYXlwYWxNb2RlbCIsInByaWNlIiwiZGV0YWlscyIsImFsZXJ0IiwicGF5ZXIiLCJnaXZlbl9uYW1lIiwiY2xpZW50SWQiLCJwYXlwYWxLRVkiLCJIb21lIiwiY2hlY2hVc2VyX0ZldGNoVG9kb3MiLCJNYWdpYyIsImlzTG9nZ2VkSW4iLCJDaGVjayIsIlVzZXJTbGljZSIsImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlcnMiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJmZXRjaCIsImFjdGlvbnMiLCJVc2VyIiwicmVkdWNlciIsIlRvZG9SZWR1Y2VyIiwicmV2ZXJzZSIsIlRvZG8iLCJ4IiwieSIsImpzb24iLCJmZWF0dXJlcyIsInBsYWNlX25hbWUiLCJkaXJlY3Rpb24iLCJyb3V0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEtBQUssR0FBRyxFQUFaOztBQUNBLElBQUksT0FBK0IsRUFFbEM7O0FBRUQsTUFBTUMsU0FBUyxHQUFH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Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgU2lnbkluIGZyb20gXCIuL1NpZ25JblwiXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9CdXR0b25cIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyBzZWxlY3RVc2VyLCBSZW1vdmUgfSBmcm9tIFwiLi4vcmVkdXgvZmVhdHVyZXMvVXNlclNsaWNlXCJcclxuaW1wb3J0IEdlb0NvZGluZ1RvZG8gZnJvbSBcIi4vR2VvQ29kaW5nVG9kb1wiXHJcbmltcG9ydCB7IE1hZ2ljIH0gZnJvbSBcIm1hZ2ljLXNka1wiXHJcblxyXG5sZXQgbWFnaWMgPSBcIlwiXHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgbWFnaWMgPSBuZXcgTWFnaWMocHJvY2Vzcy5lbnYubWFnaWNLRVkpXHJcbn1cclxuXHJcbmNvbnN0IEVudHJ5UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RVc2VyKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBtYWdpYy51c2VyLmxvZ291dCgpXHJcbiAgICBkaXNwYXRjaChSZW1vdmUoKSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBoLXNjcmVlbiBiZy1ncmF5LTMwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IHJpZ2h0LTQgZmxleCBzcGFjZS14LTRcIj5cclxuICAgICAgICB7dXNlciAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgICAgIGJ1dHRvblR5cGU9XCJvdXRsaW5lXCJcclxuICAgICAgICAgICAgICBzaXplPVwicmVndWxhclwiXHJcbiAgICAgICAgICAgICAgcm91bmRlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgYmxvY2s9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGljb25Pbmx5PXtmYWxzZX1cclxuICAgICAgICAgICAgICByaXBwbGU9XCJkYXJrXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBMb2cgT3V0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjb2xvcj1cImxpZ2h0Qmx1ZVwiXHJcbiAgICAgICAgICBidXR0b25UeXBlPVwib3V0bGluZVwiXHJcbiAgICAgICAgICBzaXplPVwicmVndWxhclwiXHJcbiAgICAgICAgICByb3VuZGVkPXtmYWxzZX1cclxuICAgICAgICAgIGJsb2NrPXtmYWxzZX1cclxuICAgICAgICAgIGljb25Pbmx5PXtmYWxzZX1cclxuICAgICAgICAgIHJpcHBsZT1cImRhcmtcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvTWFwXCIpfVxyXG4gICAgICAgICAgZGlzYWJsZWQ9eyF1c2VyID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFZpZXcgTWFwXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3VzZXIgJiYgKFxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNCBsZWZ0LThcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtM3hsIHRleHQtYmx1ZS00MDAgbXItNFwiPkhlbGxvPC9zcGFuPlxyXG5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj57dXNlcj8uZW1haWx9PC9zcGFuPlxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICl9XHJcbiAgICAgIHshdXNlciA/IDxTaWduSW4gLz4gOiA8R2VvQ29kaW5nVG9kbyAvPn1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW50cnlQYWdlXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L01vZGFsXCJcclxuaW1wb3J0IE1vZGFsSGVhZGVyIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxIZWFkZXJcIlxyXG5pbXBvcnQgTW9kYWxCb2R5IGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxCb2R5XCJcclxuaW1wb3J0IE1vZGFsRm9vdGVyIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxGb290ZXJcIlxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQnV0dG9uXCJcclxuaW1wb3J0IElucHV0IGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvSW5wdXRcIlxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyBzZWxlY3RUb2RvLCBTZXRUb2RvIH0gZnJvbSBcIi4uL3JlZHV4L2ZlYXR1cmVzL3RvZG9TbGljZVwiXHJcbmltcG9ydCB7IHNlbGVjdFVzZXIgfSBmcm9tIFwiLi4vcmVkdXgvZmVhdHVyZXMvVXNlclNsaWNlXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcblxyXG5jb25zdCBHZW9Db2RpbmdUb2RvID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdG9kb0lucHV0LCBzZXRUb2RvSW5wdXRdID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCB0b2RvID0gdXNlU2VsZWN0b3Ioc2VsZWN0VG9kbylcclxuICBjb25zb2xlLmxvZyh0b2RvKVxyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RVc2VyKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZExvY2F0aW9uID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codG9kb0lucHV0KVxyXG4gICAgaWYgKHRvZG9JbnB1dCkge1xyXG4gICAgICBjb25zdCBhZGRUb2RvUHJpc21hID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgICAgICAucG9zdChcIi9hcGkvY3JlYXRlTG9jYXRpb25cIiwge1xyXG4gICAgICAgICAgICB0b2RvOiB0b2RvSW5wdXQsXHJcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKGFzeW5jIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2NyZWF0ZUxvY2F0aW9uXCIpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaChTZXRUb2RvKHJlcy5kYXRhLmFsbExvY2F0aW9ucykpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgICB9XHJcbiAgICAgIGFkZFRvZG9QcmlzbWEoKVxyXG4gICAgfVxyXG4gICAgc2V0VG9kb0lucHV0KFwiXCIpXHJcbiAgICBzZXRTaG93TW9kYWwoZmFsc2UpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVSZW1vdmUgPSAoaWQsIHVzZXJJZCkgPT4ge1xyXG4gICAgY29uc3QgcmVtb3ZlID0gYXN5bmMgaWQgPT4ge1xyXG4gICAgICBhd2FpdCBheGlvc1xyXG4gICAgICAgIC5wb3N0KFwiL2FwaS9yZW1vdmVUb2RvTG9jYXRpb25cIiwge1xyXG4gICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICBkaXNwYXRjaChTZXRUb2RvKGRhdGEuZGF0YS5maWx0ZXJlZCkpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICB9XHJcbiAgICByZW1vdmUoaWQpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktNVwiPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgY29sb3I9XCJsaWdodEJsdWVcIlxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIG9uQ2xpY2s9e2UgPT4gc2V0U2hvd01vZGFsKHRydWUpfVxyXG4gICAgICAgIHJpcHBsZT1cImxpZ2h0XCJcclxuICAgICAgPlxyXG4gICAgICAgIEFkZCB5b3VyIGZhdm9yaXRlIGxvY2F0aW9uXHJcbiAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgPE1vZGFsIHNpemU9XCJzbVwiIGFjdGl2ZT17c2hvd01vZGFsfSB0b2dnbGVyPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfT5cclxuICAgICAgICA8TW9kYWxIZWFkZXIgdG9nZ2xlcj17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX0+XHJcbiAgICAgICAgICBBZGQgYSBsb2NhdGlvblxyXG4gICAgICAgIDwvTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgPE1vZGFsQm9keT5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwibGlnaHRCbHVlXCJcclxuICAgICAgICAgICAgc2l6ZT1cInJlZ3VsYXJcIlxyXG4gICAgICAgICAgICBvdXRsaW5lPXt0cnVlfVxyXG4gICAgICAgICAgICB2YWx1ZT17dG9kb0lucHV0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUb2RvSW5wdXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBsb2NhdGlvblwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTW9kYWxCb2R5PlxyXG4gICAgICAgIDxNb2RhbEZvb3Rlcj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgICBidXR0b25UeXBlPVwibGlua1wiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cclxuICAgICAgICAgICAgcmlwcGxlPVwiZGFya1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNvbG9yPVwiZ3JlZW5cIlxyXG4gICAgICAgICAgICByaXBwbGU9XCJsaWdodFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZExvY2F0aW9uKCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFkZCBsb2NhdGlvblxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAge3RvZG8/Lm1hcChpdGVtID0+IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciAgdy1bMzAwcHhdIGgtWzUwcHhdIGJnLXBpbmstNDAwICByb3VuZGVkIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBzY2FsZS03NSAgaG92ZXI6c2NhbGUtMTAwIHAtNFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVsyOTBweF0gaC01MHB4XCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9NYXA/bG9jYXRpb249JHtpdGVtLk5hbWV9YCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwPntpdGVtLk5hbWV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZShpdGVtLmlkLCBpdGVtLlVzZXJJZCl9PuKdjDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2VvQ29kaW5nVG9kb1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBDYXJkIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQ2FyZFwiXHJcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQ2FyZEhlYWRlclwiXHJcbmltcG9ydCBDYXJkQm9keSBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0NhcmRCb2R5XCJcclxuaW1wb3J0IENhcmRGb290ZXIgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9DYXJkRm9vdGVyXCJcclxuaW1wb3J0IElucHV0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0lucHV0SWNvblwiXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9CdXR0b25cIlxyXG5pbXBvcnQgSDUgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9IZWFkaW5nNVwiXHJcbmltcG9ydCB7IE1hZ2ljIH0gZnJvbSBcIm1hZ2ljLXNka1wiXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IHsgQWRkIH0gZnJvbSBcIi4uL3JlZHV4L2ZlYXR1cmVzL1VzZXJTbGljZVwiXHJcblxyXG5sZXQgbWFnaWMgPSBcIlwiXHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgbWFnaWMgPSBuZXcgTWFnaWMocHJvY2Vzcy5lbnYubWFnaWNLRVkpXHJcbn1cclxuXHJcbmNvbnN0IFNpZ25JbiA9ICgpID0+IHtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGV2ZW50ID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICBpZiAoZW1haWwpIHtcclxuICAgICAgYXdhaXQgbWFnaWMuYXV0aC5sb2dpbldpdGhNYWdpY0xpbmsoeyBlbWFpbCB9KVxyXG5cclxuICAgICAgbGV0IHVzZXIgPSBhd2FpdCBtYWdpYy51c2VyLmdldE1ldGFkYXRhKClcclxuICAgICAgY29uc29sZS5sb2codXNlcilcclxuICAgICAgZGlzcGF0Y2goQWRkKHVzZXIpKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bNDAwcHhdXCI+XHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICAgIDxDYXJkSGVhZGVyIGNvbG9yPVwibGlnaHRCbHVlXCIgc2l6ZT1cImxnXCI+XHJcbiAgICAgICAgICA8SDUgY29sb3I9XCJ3aGl0ZVwiPkxvZ2luPC9INT5cclxuICAgICAgICA8L0NhcmRIZWFkZXI+XHJcblxyXG4gICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOCBweC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dEljb25cclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwibGlnaHRCbHVlXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgPENhcmRGb290ZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0Qmx1ZVwiXHJcbiAgICAgICAgICAgICAgYnV0dG9uVHlwZT1cImxpbmtcIlxyXG4gICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgcmlwcGxlPVwiZGFya1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBNYWdpYyBTaWduSW5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NhcmRGb290ZXI+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbkluXHJcbiIsImltcG9ydCBcIm1hcGJveC1nbC9kaXN0L21hcGJveC1nbC5jc3NcIlxyXG5pbXBvcnQgXCJyZWFjdC1tYXAtZ2wtZ2VvY29kZXIvZGlzdC9tYXBib3gtZ2wtZ2VvY29kZXIuY3NzXCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgUmVhY3RNYXBHTCwge1xyXG4gIE1hcmtlcixcclxuICBQb3B1cCxcclxuICBOYXZpZ2F0aW9uQ29udHJvbCxcclxuICBTb3VyY2UsXHJcbiAgTGF5ZXIsXHJcbn0gZnJvbSBcInJlYWN0LW1hcC1nbFwiXHJcbmltcG9ydCBHZW9jb2RlciBmcm9tIFwicmVhY3QtbWFwLWdsLWdlb2NvZGVyXCJcclxuaW1wb3J0IHsgZmV0Y2hEYXRhLCBkaXJlY3Rpb25zQXBpIH0gZnJvbSBcIi4uL3VzZUZldGNoRGF0YVwiXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9CdXR0b25cIlxyXG5pbXBvcnQgUGF5cGFsTW9kZWwgZnJvbSBcIi4vcGF5cGFsTW9kZWxcIlxyXG5cclxuY29uc3QgTUFQQk9YX1RPS0VOID0gcHJvY2Vzcy5lbnYubWFwYm94S0VZXHJcblxyXG5jb25zdCBuYXZDb250cm9sU3R5bGUgPSB7XHJcbiAgcmlnaHQ6IDEwLFxyXG4gIHRvcDogMTAsXHJcbn1cclxuXHJcbmNvbnN0IE1hcGJveCA9ICh7IGxvY2F0aW9uUHJvcCB9KSA9PiB7XHJcbiAgLy9kZWZpbmluZyBTdGF0ZXNcclxuICBjb25zdCBbdmlld3BvcnQsIHNldFZpZXdwb3J0XSA9IHVzZVN0YXRlKHt9KVxyXG4gIGNvbnN0IG1hcFJlZiA9IHVzZVJlZigpXHJcbiAgY29uc3QgW2dlbywgc2V0R2VvXSA9IHVzZVN0YXRlKHt9KVxyXG4gIGNvbnN0IFttYXJrZXJzLCBzZXRNYXJrZXJzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtzaG93UG9wdXAsIHNldFNob3dwb3B1cF0gPSB1c2VTdGF0ZSgtMSlcclxuICBjb25zdCBbb3JpZ2luTmFtZSwgc2V0T3JpZ2luTmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFtkZXN0aW5hdGlvbk5hbWUsIHNldERlc3RpbmF0aW9uTmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUobG9jYXRpb25Qcm9wKVxyXG4gIGNvbnN0IFtyaWRlLCBzZXRSaWRlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAvLyBkZWZpbmluZyB0aGUgc3R5bGUgYW5kIHRoZSB3YXkgdGhlIGRpcmVjdGlvbiB3aWxsIGJlIHByZXNlbnRlZCBpbiB0aGUgbWFwXHJcbiAgY29uc3QgbGF5ZXJTdHlsZSA9IHtcclxuICAgIGlkOiBcInJvdXRlXCIsXHJcbiAgICB0eXBlOiBcImxpbmVcIixcclxuICAgIHNvdXJjZTogXCJyb3V0ZVwiLFxyXG4gICAgcGFpbnQ6IHtcclxuICAgICAgXCJsaW5lLWNvbG9yXCI6IFwiI2ZjZmMwM1wiLFxyXG4gICAgICBcImxpbmUtd2lkdGhcIjogNSxcclxuICAgIH0sXHJcbiAgICBsYXlvdXQ6IHtcclxuICAgICAgXCJsaW5lLWpvaW5cIjogXCJyb3VuZFwiLFxyXG4gICAgICBcImxpbmUtY2FwXCI6IFwicm91bmRcIixcclxuICAgIH0sXHJcbiAgfVxyXG5cclxuICAvLyBpdCB3aWxsIHJ1biBvbmNlIHRoZSBjb21wb25lbnQgcmUtcmVuZGVycyBhbmQgc3RvcCwgd2hpY2ggaXMgc2V0dGluZyBvdXIgY3VycmVudCBsb2NhdGlvbiBhbmQgc3RvcmUgdGhlbSBpbiB0aGUgc3RhdGVcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihmdW5jdGlvbiAocG9zaXRpb24pIHtcclxuICAgICAgc2V0Vmlld3BvcnQoe1xyXG4gICAgICAgIGxhdGl0dWRlOiBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsXHJcbiAgICAgICAgbG9uZ2l0dWRlOiBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlLFxyXG4gICAgICAgIHpvb206IDEwLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgIH0pXHJcbiAgICAgIHNldE1hcmtlcnMoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhdGl0dWRlOiBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsXHJcbiAgICAgICAgICBsb25naXR1ZGU6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSlcclxuXHJcbiAgICAgIGZldGNoRGF0YShwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlLCBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUpLnRoZW4oXHJcbiAgICAgICAgbmFtZSA9PiB7XHJcbiAgICAgICAgICBzZXRPcmlnaW5OYW1lKG5hbWUpXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICB9KVxyXG4gIH0sIFtdKVxyXG5cclxuICAvL21haW4gZnVuY3Rpb24gcmVzcG9uc2libGUgZm9yIGNoYW5naW5nIHRoZSB2aWV3IGluIHRoZSBtYXBcclxuICBjb25zdCBoYW5kbGVWaWV3cG9ydENoYW5nZSA9IG5ld1ZpZXdwb3J0ID0+IHtcclxuICAgIHNldFZpZXdwb3J0KG5ld1ZpZXdwb3J0KVxyXG4gIH1cclxuXHJcbiAgLy9mdW5jdGlvbiB0byByb3VuZCBhIG51bWJlclxyXG4gIGZ1bmN0aW9uIHJvdW5kKG51bSwgZGVjKSB7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiBNYXRoLnBvdygxMCwgZGVjKSkgLyBNYXRoLnBvdygxMCwgZGVjKVxyXG4gIH1cclxuXHJcbiAgLy8gZnVuY3Rpb24gaXMgY2FsbGVkIHdoZXZlciB0aGUgc2VhcmNoIGNvbXBvbmVudCBjaGFuZ2VzXHJcbiAgY29uc3QgaGFuZGxlR2VvY29kZXJWaWV3cG9ydENoYW5nZVRvID0gbmV3Vmlld3BvcnQgPT4ge1xyXG4gICAgY29uc3QgZ2VvY29kZXJEZWZhdWx0T3ZlcnJpZGVzID0ge1xyXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IG5ld1ZpZXdwb3J0LnRyYW5zaXRpb25EdXJhdGlvbixcclxuICAgIH1cclxuICAgIGlmICghbmV3Vmlld3BvcnQpIHJldHVyblxyXG4gICAgc2V0TWFya2VycyhbXHJcbiAgICAgIC4uLm1hcmtlcnMsXHJcbiAgICAgIHsgbGF0aXR1ZGU6IG5ld1ZpZXdwb3J0LmxhdGl0dWRlLCBsb25naXR1ZGU6IG5ld1ZpZXdwb3J0LmxvbmdpdHVkZSB9LFxyXG4gICAgXSlcclxuICAgIGRpcmVjdGlvbnNBcGkobWFya2VycywgbmV3Vmlld3BvcnQpLnRoZW4oZGF0YSA9PiBzZXRHZW8oZGF0YSkpXHJcblxyXG4gICAgZmV0Y2hEYXRhKG5ld1ZpZXdwb3J0LmxvbmdpdHVkZSwgbmV3Vmlld3BvcnQubGF0aXR1ZGUpLnRoZW4obmFtZSA9PlxyXG4gICAgICBzZXREZXN0aW5hdGlvbk5hbWUobmFtZSlcclxuICAgIClcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInpvb21cIiwgbmV3Vmlld3BvcnQpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0U2hvdyh0cnVlKVxyXG4gICAgfSwgbmV3Vmlld3BvcnQudHJhbnNpdGlvbkR1cmF0aW9uKVxyXG4gICAgcmV0dXJuIGhhbmRsZVZpZXdwb3J0Q2hhbmdlKHtcclxuICAgICAgLi4ubmV3Vmlld3BvcnQsXHJcbiAgICAgIHpvb206IG5ld1ZpZXdwb3J0Lnpvb20sXHJcbiAgICAgIC4uLmdlb2NvZGVyRGVmYXVsdE92ZXJyaWRlcyxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBjbGVhclNlYXJjaCA9ICgpID0+IHtcclxuICAgIHNldEdlbyhudWxsKVxyXG4gICAgc2V0TWFya2VycyhtYXJrZXJzLnNsaWNlKDAsIDEpKVxyXG4gICAgc2V0U2hvdyhmYWxzZSlcclxuICAgIHNldExvY2F0aW9uKFwiXCIpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXBcIj5cclxuICAgICAgICB7LyogcmVuZGVyaW5nIHRoZSBtYXAgaW4gdGhlIGJyb3dzZXIgKi99XHJcbiAgICAgICAgPFJlYWN0TWFwR0xcclxuICAgICAgICAgIHJlZj17bWFwUmVmfVxyXG4gICAgICAgICAgey4uLnZpZXdwb3J0fVxyXG4gICAgICAgICAgb25WaWV3cG9ydENoYW5nZT17aGFuZGxlVmlld3BvcnRDaGFuZ2V9XHJcbiAgICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj17TUFQQk9YX1RPS0VOfVxyXG4gICAgICAgICAgbWFwU3R5bGU9XCJtYXBib3g6Ly9zdHlsZXMvbWFwYm94L3N0cmVldHMtdjExXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7LyogbmF2aWdhdGlvbiBvbiB0aGUgdG9wLWxlZnQgY29ybmVyIG9mIHRoZSBtYXAgKi99XHJcbiAgICAgICAgICA8TmF2aWdhdGlvbkNvbnRyb2wgc3R5bGU9e25hdkNvbnRyb2xTdHlsZX0gLz5cclxuICAgICAgICAgIHsvKiByZW5kZXJpbmcgdGhlIGRpcmVjdGlvbnMgZnJvbSBvbmUgcG9pbnQgdG8gYW5vdGhlciAqL31cclxuICAgICAgICAgIHtnZW8gIT0gbnVsbCA/IChcclxuICAgICAgICAgICAgPFNvdXJjZVxyXG4gICAgICAgICAgICAgIGlkPVwicm91dGVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJnZW9qc29uXCJcclxuICAgICAgICAgICAgICBkYXRhPXt7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHt9LFxyXG4gICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJMaW5lU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBnZW8/Lmdlb21ldHJ5Py5jb29yZGluYXRlcyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMYXllciB7Li4ubGF5ZXJTdHlsZX0gLz5cclxuICAgICAgICAgICAgPC9Tb3VyY2U+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7bWFya2Vycy5sZW5ndGggJiZcclxuICAgICAgICAgICAgbWFya2Vycy5tYXAoKHBvaW50LCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgICA8TWFya2VyXHJcbiAgICAgICAgICAgICAgICAgIGxhdGl0dWRlPXtOdW1iZXIocG9pbnQ/LmxhdGl0dWRlKX1cclxuICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlPXtOdW1iZXIocG9pbnQ/LmxvbmdpdHVkZSl9XHJcbiAgICAgICAgICAgICAgICAgIG9mZnNldExlZnQ9ey0yMH1cclxuICAgICAgICAgICAgICAgICAgb2Zmc2V0VG9wPXstMTB9XHJcbiAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dwb3B1cChpZCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzQ4LzAwMDAwMC9tYXAtcGluLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9jYXRpb24gbWFya1wiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L01hcmtlcj5cclxuICAgICAgICAgICAgICAgIHtzaG93UG9wdXAgPT09IGlkICYmIChcclxuICAgICAgICAgICAgICAgICAgPFBvcHVwXHJcbiAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU9e3BvaW50Py5sYXRpdHVkZX1cclxuICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU9e3BvaW50Py5sb25naXR1ZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvcj1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd3BvcHVwKC0xKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMzAwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpZCA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+T3JpZ2luOiB7b3JpZ2luTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBEZXN0aW5hdGlvbjoge2Rlc3RpbmF0aW9uTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+ZGlzdGFuY2U6e3JvdW5kKGdlbz8uZGlzdGFuY2UgLyAxMDAwLCAyKX0ga208L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+ZHVyYXRpb25zOntyb3VuZChnZW8/LmR1cmF0aW9uIC8gNjAsIDIpfSBtaW48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9Qb3B1cD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvUmVhY3RNYXBHTD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiByZW5kZXJpbmcgdGhlIFNlYXJjaCBwbGFjZXMgZnVuY3Rpb25hbGl0eSAgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XHJcbiAgICAgICAgPEdlb2NvZGVyXHJcbiAgICAgICAgICBtYXBSZWY9e21hcFJlZn1cclxuICAgICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9e2hhbmRsZUdlb2NvZGVyVmlld3BvcnRDaGFuZ2VUb31cclxuICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXtNQVBCT1hfVE9LRU59XHJcbiAgICAgICAgICBwb3NpdGlvbj1cInRvcC1sZWZ0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY2hvb3NlIHlvdXIgZGVzdGluYXRpb25cIlxyXG4gICAgICAgICAgb25DbGVhcj17Y2xlYXJTZWFyY2h9XHJcbiAgICAgICAgICBpbnB1dFZhbHVlPXtsb2NhdGlvbiA/IGxvY2F0aW9uIDogXCJcIn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3cgPT0gdHJ1ZSA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzI0MHB4XSBoLVszMDBweF0gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcm91bmRlZCBwLTIgei0xMCBiZy13aGl0ZSBhYnNvbHV0ZSB0b3AtWzUycHhdIGxlZnQtWzEwcHhdXCI+XHJcbiAgICAgICAgICA8aDM+Q2hvb3NlIGEgcmlkZTwvaDM+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzgwJV0gaC1bNTBweF0gcm91bmRlZCAgbXQtNCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcC0yIGhvdmVyOmJnLWJsdWUtMzAwIGJnLWJsdWUtNDAwIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICBzZXRSaWRlKHJvdW5kKHJvdW5kKGdlbz8uZGlzdGFuY2UgLyAxMDAwLCAyKSAqIDIuNDUsIDIpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwPlViZXIgWDwvcD5cclxuICAgICAgICAgICAgPHA+UHJpY2U6IHtyb3VuZChyb3VuZChnZW8/LmRpc3RhbmNlIC8gMTAwMCwgMikgKiAyLjQ1LCAyKX0kPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzgwJV0gaC1bNTBweF0gcm91bmRlZCBtdC00IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwLTIgYmctYmx1ZS00MDAgaG92ZXI6YmctYmx1ZS0zMDAgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgIHNldFJpZGUocm91bmQocm91bmQoZ2VvPy5kaXN0YW5jZSAvIDEwMDAsIDIpICogMy42NywgMikpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHA+VWJlciBYUzwvcD5cclxuICAgICAgICAgICAgPHA+UHJpY2U6IHtyb3VuZChyb3VuZChnZW8/LmRpc3RhbmNlIC8gMTAwMCwgMikgKiAzLjY3LCAyKX0kPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzgwJV0gaC1bNTBweF0gcm91bmRlZCBtdC00IGZsZXgganVzdGlmeS1iZXR3ZWVuIHAtMiBpdGVtcy1jZW50ZXIgYmctYmx1ZS00MDAgaG92ZXI6YmctYmx1ZS0zMDAgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgIHNldFJpZGUocm91bmQocm91bmQoZ2VvPy5kaXN0YW5jZSAvIDEwMDAsIDIpICogNC41NSwgMikpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHA+VWJlciBFbDwvcD5cclxuICAgICAgICAgICAgPHA+UHJpY2U6IHtyb3VuZChyb3VuZChnZW8/LmRpc3RhbmNlIC8gMTAwMCwgMikgKiA0LjU1LCAyKX0kPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7cmlkZSAmJiAoXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0Qmx1ZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgcmlwcGxlPVwibGlnaHRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTRcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbCh0cnVlKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEdldCByaWRlIHtyaWRlfSRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIFwiXCJcclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxQYXlwYWxNb2RlbFxyXG4gICAgICAgIHNob3dNb2RhbD17c2hvd01vZGFsfVxyXG4gICAgICAgIHNldFNob3dNb2RhbD17c2V0U2hvd01vZGFsfVxyXG4gICAgICAgIHByaWNlPXtyaWRlfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXBib3hcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxcIlxyXG5pbXBvcnQgTW9kYWxIZWFkZXIgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbEhlYWRlclwiXHJcbmltcG9ydCBNb2RhbEJvZHkgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbEJvZHlcIlxyXG5pbXBvcnQgTW9kYWxGb290ZXIgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbEZvb3RlclwiXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9CdXR0b25cIlxyXG5pbXBvcnQgeyBQYXlQYWxCdXR0b24gfSBmcm9tIFwicmVhY3QtcGF5cGFsLWJ1dHRvbi12MlwiXHJcblxyXG5jb25zdCBwYXlwYWxNb2RlbCA9ICh7IHNob3dNb2RhbCwgc2V0U2hvd01vZGFsLCBwcmljZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxNb2RhbCBzaXplPVwic21cIiBhY3RpdmU9e3Nob3dNb2RhbH0gdG9nZ2xlcj17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX0+XHJcbiAgICAgICAgPE1vZGFsSGVhZGVyIHRvZ2dsZXI9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9PlxyXG4gICAgICAgICAgUGF5cGFsIGNoZWNrT3V0XHJcbiAgICAgICAgPC9Nb2RhbEhlYWRlcj5cclxuICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAgPFBheVBhbEJ1dHRvblxyXG4gICAgICAgICAgICBhbW91bnQ9e3ByaWNlfVxyXG4gICAgICAgICAgICBvblN1Y2Nlc3M9eyhkZXRhaWxzLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgYWxlcnQoXCJUcmFuc2FjdGlvbiBjb21wbGV0ZWQgYnkgXCIgKyBkZXRhaWxzLnBheWVyLm5hbWUuZ2l2ZW5fbmFtZSlcclxuICAgICAgICAgICAgICBzZXRTaG93TW9kYWwoZmFsc2UpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYucGF5cGFsS0VZLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L01vZGFsQm9keT5cclxuICAgICAgICA8TW9kYWxGb290ZXI+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcclxuICAgICAgICAgICAgYnV0dG9uVHlwZT1cImxpbmtcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtlID0+IHNldFNob3dNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICAgIHJpcHBsZT1cImRhcmtcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImdyZWVuXCIgcmlwcGxlPVwibGlnaHRcIj5cclxuICAgICAgICAgICAgQWRkIGxvY2F0aW9uXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L01vZGFsRm9vdGVyPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYXlwYWxNb2RlbFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IEVudHJ5UGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9FbnRyeVBhZ2VcIlxuaW1wb3J0IE1hcGJveCBmcm9tIFwiLi4vY29tcG9uZW50cy9tYXBib3hcIlxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IHsgQ2hlY2sgfSBmcm9tIFwiLi4vcmVkdXgvZmVhdHVyZXMvVXNlclNsaWNlXCJcbmltcG9ydCB7IFNldFRvZG8gfSBmcm9tIFwiLi4vcmVkdXgvZmVhdHVyZXMvdG9kb1NsaWNlXCJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuaW1wb3J0IHsgTWFnaWMgfSBmcm9tIFwibWFnaWMtc2RrXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjaGVjaFVzZXJfRmV0Y2hUb2RvcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IG1hZ2ljID0gbmV3IE1hZ2ljKHByb2Nlc3MuZW52Lm1hZ2ljS0VZKVxuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKG1hZ2ljLnVzZXIuaXNMb2dnZWRJbigpKSB7XG4gICAgICAgICAgbGV0IHVzZXIgPSBhd2FpdCBtYWdpYy51c2VyLmdldE1ldGFkYXRhKClcbiAgICAgICAgICBkaXNwYXRjaChDaGVjayh1c2VyKSlcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGF4aW9zLmdldChcIi9hcGkvY3JlYXRlTG9jYXRpb25cIikudGhlbihyZXMgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKFNldFRvZG8ocmVzLmRhdGEuYWxsTG9jYXRpb25zKSlcbiAgICAgICAgfSlcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICB9XG4gICAgfVxuICAgIGNoZWNoVXNlcl9GZXRjaFRvZG9zKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5VYmVyLWNsb25lIE1hcGJveCA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPEVudHJ5UGFnZSAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcblxyXG5leHBvcnQgY29uc3QgVXNlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwiVXNlclwiLFxyXG4gIGluaXRpYWxTdGF0ZToge1xyXG4gICAgdXNlcjogbnVsbCxcclxuICB9LFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBBZGQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnVzZXIgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBjb25zdCBmZXRjaCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCBheGlvc1xyXG4gICAgICAgICAgLnBvc3QoXCJhcGkvY3JlYXRlVXNlclwiLCB7XHJcbiAgICAgICAgICAgIGVtYWlsOiBhY3Rpb24ucGF5bG9hZC5lbWFpbCxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbihyZXMgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAgICAgfVxyXG4gICAgICBmZXRjaCgpXHJcbiAgICB9LFxyXG4gICAgUmVtb3ZlOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS51c2VyID0gbnVsbFxyXG4gICAgfSxcclxuICAgIENoZWNrOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS51c2VyID0gYWN0aW9uLnBheWxvYWRcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IEFkZCwgUmVtb3ZlLCBDaGVjayB9ID0gVXNlclNsaWNlLmFjdGlvbnNcclxuXHJcbi8vIFRoZSBmdW5jdGlvbiBiZWxvdyBpcyBjYWxsZWQgYSB0aHVuayBhbmQgYWxsb3dzIHVzIHRvIHBlcmZvcm0gYXN5bmMgbG9naWMuIEl0XHJcbi8vIGNhbiBiZSBkaXNwYXRjaGVkIGxpa2UgYSByZWd1bGFyIGFjdGlvbjogYGRpc3BhdGNoKGluY3JlbWVudEFzeW5jKDEwKSlgLiBUaGlzXHJcbi8vIHdpbGwgY2FsbCB0aGUgdGh1bmsgd2l0aCB0aGUgYGRpc3BhdGNoYCBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQuIEFzeW5jXHJcbi8vIGNvZGUgY2FuIHRoZW4gYmUgZXhlY3V0ZWQgYW5kIG90aGVyIGFjdGlvbnMgY2FuIGJlIGRpc3BhdGNoZWRcclxuXHJcbi8vIFRoZSBmdW5jdGlvbiBiZWxvdyBpcyBjYWxsZWQgYSBzZWxlY3RvciBhbmQgYWxsb3dzIHVzIHRvIHNlbGVjdCBhIHZhbHVlIGZyb21cclxuLy8gdGhlIHN0YXRlLiBTZWxlY3RvcnMgY2FuIGFsc28gYmUgZGVmaW5lZCBpbmxpbmUgd2hlcmUgdGhleSdyZSB1c2VkIGluc3RlYWQgb2ZcclxuLy8gaW4gdGhlIHNsaWNlIGZpbGUuIEZvciBleGFtcGxlOiBgdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb3VudGVyLnZhbHVlKWBcclxuZXhwb3J0IGNvbnN0IHNlbGVjdFVzZXIgPSBzdGF0ZSA9PiBzdGF0ZS5Vc2VyLnVzZXJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJTbGljZS5yZWR1Y2VyXHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFRvZG9SZWR1Y2VyID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdUb2RvJyxcclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIHRvZG86IFtdLFxyXG4gIH0sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIFNldFRvZG86IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnRvZG8gPSBbLi4uYWN0aW9uLnBheWxvYWRdLnJldmVyc2UoKVxyXG4gICAgfSxcclxuICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHsgU2V0VG9kbyB9ID0gVG9kb1JlZHVjZXIuYWN0aW9uc1xyXG5cclxuLy8gVGhlIGZ1bmN0aW9uIGJlbG93IGlzIGNhbGxlZCBhIHRodW5rIGFuZCBhbGxvd3MgdXMgdG8gcGVyZm9ybSBhc3luYyBsb2dpYy4gSXRcclxuLy8gY2FuIGJlIGRpc3BhdGNoZWQgbGlrZSBhIHJlZ3VsYXIgYWN0aW9uOiBgZGlzcGF0Y2goaW5jcmVtZW50QXN5bmMoMTApKWAuIFRoaXNcclxuLy8gd2lsbCBjYWxsIHRoZSB0aHVuayB3aXRoIHRoZSBgZGlzcGF0Y2hgIGZ1bmN0aW9uIGFzIHRoZSBmaXJzdCBhcmd1bWVudC4gQXN5bmNcclxuLy8gY29kZSBjYW4gdGhlbiBiZSBleGVjdXRlZCBhbmQgb3RoZXIgYWN0aW9ucyBjYW4gYmUgZGlzcGF0Y2hlZFxyXG5cclxuLy8gVGhlIGZ1bmN0aW9uIGJlbG93IGlzIGNhbGxlZCBhIHNlbGVjdG9yIGFuZCBhbGxvd3MgdXMgdG8gc2VsZWN0IGEgdmFsdWUgZnJvbVxyXG4vLyB0aGUgc3RhdGUuIFNlbGVjdG9ycyBjYW4gYWxzbyBiZSBkZWZpbmVkIGlubGluZSB3aGVyZSB0aGV5J3JlIHVzZWQgaW5zdGVhZCBvZlxyXG4vLyBpbiB0aGUgc2xpY2UgZmlsZS4gRm9yIGV4YW1wbGU6IGB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvdW50ZXIudmFsdWUpYFxyXG5leHBvcnQgY29uc3Qgc2VsZWN0VG9kbyA9IHN0YXRlID0+IHN0YXRlLlRvZG8udG9kb1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb1JlZHVjZXIucmVkdWNlclxyXG4iLCJleHBvcnQgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHgsIHkpID0+IHtcclxuICBsZXQgbmFtZSA9ICcnXHJcbiAgYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9nZW9jb2RpbmcvdjUvbWFwYm94LnBsYWNlcy8ke3h9LCR7eX0uanNvbj9hY2Nlc3NfdG9rZW49cGsuZXlKMUlqb2lhbUYzWVdSaGJXMWhjakV5SWl3aVlTSTZJbU5yY200MmFHNDJORFJsTTNveWRYQTROV296YTJONmRHOGlmUS5VamVIUDRNM01sVEpnNzhLMFRIcVJRIGBcclxuICApXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICBuYW1lID0gZGF0YS5mZWF0dXJlc1swXS5wbGFjZV9uYW1lXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG5cclxuICByZXR1cm4gbmFtZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGlyZWN0aW9uc0FwaSA9IGFzeW5jIChtYXJrZXJzLCBuZXdWaWV3cG9ydCkgPT4ge1xyXG4gIGxldCBkaXJlY3Rpb24gPSB7fVxyXG4gIGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vYXBpLm1hcGJveC5jb20vZGlyZWN0aW9ucy92NS9tYXBib3gvZHJpdmluZy10cmFmZmljLyR7bWFya2Vyc1swXS5sb25naXR1ZGV9LCR7bWFya2Vyc1swXS5sYXRpdHVkZX07JHtuZXdWaWV3cG9ydD8ubG9uZ2l0dWRlfSwke25ld1ZpZXdwb3J0Py5sYXRpdHVkZX0/Z2VvbWV0cmllcz1nZW9qc29uJmFjY2Vzc190b2tlbj1way5leUoxSWpvaWFtRjNZV1JoYlcxaGNqRXlJaXdpWVNJNkltTnJjbTQyYUc0Mk5EUmxNM295ZFhBNE5Xb3phMk42ZEc4aWZRLlVqZUhQNE0zTWxUSmc3OEswVEhxUlFgXHJcbiAgKVxyXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgZGlyZWN0aW9uID0gZGF0YS5yb3V0ZXNbMF1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgcmV0dXJuIHsgLi4uZGlyZWN0aW9uIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQnV0dG9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQ2FyZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0NhcmRCb2R5XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQ2FyZEZvb3RlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0NhcmRIZWFkZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9IZWFkaW5nNVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0lucHV0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvSW5wdXRJY29uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbEJvZHlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbEZvb3RlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L01vZGFsSGVhZGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFnaWMtc2RrXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWFwLWdsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tYXAtZ2wtZ2VvY29kZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXBheXBhbC1idXR0b24tdjJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=