"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/EntryPage.js":
/*!*********************************!*\
  !*** ./components/EntryPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignIn */ "./components/SignIn.js");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react/Button */ "@material-tailwind/react/Button");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/features/UserSlice */ "./redux/features/UserSlice.js");
/* harmony import */ var _GeoCodingTodo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GeoCodingTodo */ "./components/GeoCodingTodo.js");
/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! magic-sdk */ "magic-sdk");
/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(magic_sdk__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\D_J_S_P\\React,Next\\All_Projects\\Next_Projects\\Next_Mapbox\\mapbox\\components\\EntryPage.js";











let magic = "";

if (false) {}

const EntryPage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_5__.selectUser);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const [cookies, setCookie, removeCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_8__.useCookies)(["userToken"]);

  const handleLogout = async () => {
    await magic.user.logout();
    removeCookie("userToken");
    dispatch((0,_redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_5__.Remove)());
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    className: "flex justify-center items-center w-full h-screen bg-gray-300",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      className: "absolute top-4 right-4 flex space-x-4",
      children: [user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
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
        }, undefined)
      }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
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
        lineNumber: 47,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h1", {
      className: "absolute top-4 left-8",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
        className: "text-3xl text-blue-400 mr-4",
        children: "Hello"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
        className: "text-gray-700",
        children: user === null || user === void 0 ? void 0 : user.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }, undefined), !user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_SignIn__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 16
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_GeoCodingTodo__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 29
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EntryPage);

/***/ }),

/***/ "./components/GeoCodingTodo.js":
/*!*************************************!*\
  !*** ./components/GeoCodingTodo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_tailwind_react_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-tailwind/react/Modal */ "@material-tailwind/react/Modal");
/* harmony import */ var _material_tailwind_react_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react_ModalHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react/ModalHeader */ "@material-tailwind/react/ModalHeader");
/* harmony import */ var _material_tailwind_react_ModalHeader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_ModalHeader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_tailwind_react_ModalBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-tailwind/react/ModalBody */ "@material-tailwind/react/ModalBody");
/* harmony import */ var _material_tailwind_react_ModalBody__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_ModalBody__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_tailwind_react_ModalFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-tailwind/react/ModalFooter */ "@material-tailwind/react/ModalFooter");
/* harmony import */ var _material_tailwind_react_ModalFooter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_ModalFooter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-tailwind/react/Button */ "@material-tailwind/react/Button");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-tailwind/react/Input */ "@material-tailwind/react/Input");
/* harmony import */ var _material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_features_todoSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/features/todoSlice */ "./redux/features/todoSlice.js");
/* harmony import */ var _redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/features/UserSlice */ "./redux/features/UserSlice.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\D_J_S_P\\React,Next\\All_Projects\\Next_Projects\\Next_Mapbox\\mapbox\\components\\GeoCodingTodo.js";














const GeoCodingTodo = () => {
  const {
    0: showModal,
    1: setShowModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: todoInput,
    1: setTodoInput
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const todo = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_features_todoSlice__WEBPACK_IMPORTED_MODULE_8__.selectTodo);
  const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_9__.selectUser);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();

  const handleAddLocation = () => {
    console.log(todoInput);

    if (todoInput) {
      const addTodoPrisma = async () => {
        await axios__WEBPACK_IMPORTED_MODULE_11___default().post(`${"http://localhost:3000"}/api/createLocation`, {
          todo: todoInput,
          email: user.email
        }).then(async data => {
          await axios__WEBPACK_IMPORTED_MODULE_11___default().get(`${"http://localhost:3000"}/api/createLocation`).then(res => {
            dispatch((0,_redux_features_todoSlice__WEBPACK_IMPORTED_MODULE_8__.SetTodo)(res.data.allLocations));
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
      await axios__WEBPACK_IMPORTED_MODULE_11___default().post(`${"http://localhost:3000"}/api/removeTodoLocation`, {
        id: id,
        userId: userId
      }).then(data => {
        dispatch((0,_redux_features_todoSlice__WEBPACK_IMPORTED_MODULE_8__.SetTodo)(data.data.filtered));
      }).catch(err => console.log(err));
    };

    remove(id);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
    className: "flex flex-col space-y-5",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
      color: "lightBlue",
      type: "button",
      onClick: e => setShowModal(true),
      ripple: "light",
      children: "Add your favorite location"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_material_tailwind_react_Modal__WEBPACK_IMPORTED_MODULE_1___default()), {
      size: "sm",
      active: showModal,
      toggler: () => setShowModal(false),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_material_tailwind_react_ModalHeader__WEBPACK_IMPORTED_MODULE_2___default()), {
        toggler: () => setShowModal(false),
        children: "Add a location"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_material_tailwind_react_ModalBody__WEBPACK_IMPORTED_MODULE_3___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_6___default()), {
          type: "text",
          color: "lightBlue",
          size: "regular",
          outline: true,
          value: todoInput,
          onChange: e => setTodoInput(e.target.value),
          placeholder: "Add location"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_material_tailwind_react_ModalFooter__WEBPACK_IMPORTED_MODULE_4___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
          color: "red",
          buttonType: "link",
          onClick: e => setShowModal(false),
          ripple: "dark",
          children: "Close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
          color: "green",
          ripple: "light",
          onClick: () => handleAddLocation(),
          children: "Add location"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, undefined), todo === null || todo === void 0 ? void 0 : todo.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
      className: "cursor-pointer  w-[300px] h-[50px] bg-pink-400  rounded flex justify-between items-center scale-75  hover:scale-100 p-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
        className: "w-[290px] h-50px",
        onClick: () => router.push(`/Map?location=${item.Name}`),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("p", {
          children: item.Name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
        onClick: () => handleRemove(item.id, item.UserId),
        children: "\u274C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 11
      }, undefined)]
    }, item.id, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeoCodingTodo);

/***/ }),

/***/ "./components/SignIn.js":
/*!******************************!*\
  !*** ./components/SignIn.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-tailwind/react/Card */ "@material-tailwind/react/Card");
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react/CardHeader */ "@material-tailwind/react/CardHeader");
/* harmony import */ var _material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-tailwind/react/CardBody */ "@material-tailwind/react/CardBody");
/* harmony import */ var _material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_tailwind_react_CardFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-tailwind/react/CardFooter */ "@material-tailwind/react/CardFooter");
/* harmony import */ var _material_tailwind_react_CardFooter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardFooter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_tailwind_react_InputIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-tailwind/react/InputIcon */ "@material-tailwind/react/InputIcon");
/* harmony import */ var _material_tailwind_react_InputIcon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_InputIcon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-tailwind/react/Button */ "@material-tailwind/react/Button");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_tailwind_react_Heading5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-tailwind/react/Heading5 */ "@material-tailwind/react/Heading5");
/* harmony import */ var _material_tailwind_react_Heading5__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Heading5__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! magic-sdk */ "magic-sdk");
/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(magic_sdk__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/features/UserSlice */ "./redux/features/UserSlice.js");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\D_J_S_P\\React,Next\\All_Projects\\Next_Projects\\Next_Mapbox\\mapbox\\components\\SignIn.js";













let magic = "";

if (false) {}

const SignIn = () => {
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();
  const [cookies, setCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_11__.useCookies)(["userToken"]);

  const handleSubmit = async event => {
    event.preventDefault();

    if (email) {
      await magic.auth.loginWithMagicLink({
        email
      });
      let user = await magic.user.getMetadata();
      setCookie("userToken", user);
      dispatch((0,_redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_10__.Add)(user));
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
    className: "w-[400px]",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_2___default()), {
        color: "lightBlue",
        size: "lg",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_material_tailwind_react_Heading5__WEBPACK_IMPORTED_MODULE_7___default()), {
          color: "white",
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_3___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
          className: "mb-8 px-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_material_tailwind_react_InputIcon__WEBPACK_IMPORTED_MODULE_5___default()), {
            type: "email",
            color: "lightBlue",
            onChange: e => setEmail(e.target.value),
            placeholder: "Email Address",
            iconName: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_material_tailwind_react_CardFooter__WEBPACK_IMPORTED_MODULE_4___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
          className: "flex justify-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
            onClick: handleSubmit,
            color: "lightBlue",
            buttonType: "link",
            size: "lg",
            ripple: "dark",
            children: "Magic SignIn"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignIn);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_EntryPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/EntryPage */ "./components/EntryPage.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/features/UserSlice */ "./redux/features/UserSlice.js");
/* harmony import */ var _redux_features_todoSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/features/todoSlice */ "./redux/features/todoSlice.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! magic-sdk */ "magic-sdk");
/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(magic_sdk__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\D_J_S_P\\React,Next\\All_Projects\\Next_Projects\\Next_Mapbox\\mapbox\\pages\\index.js";










let magic = "";

if (false) {}

const getServerSideProps = async ({
  req,
  res
}) => {
  var _req$cookies;

  const token = (req === null || req === void 0 ? void 0 : (_req$cookies = req.cookies) === null || _req$cookies === void 0 ? void 0 : _req$cookies.userToken) || null;
  return {
    props: {
      user: token
    }
  };
};
function Home({
  user
}) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  console.log(user);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    if (user) {
      dispatch((0,_redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_4__.Check)(JSON.parse(user)));
    }

    const chechUser_FetchTodos = async () => {
      try {
        await axios__WEBPACK_IMPORTED_MODULE_6___default().get(`${"http://localhost:3000"}/api/createLocation`).then(res => {
          dispatch((0,_redux_features_todoSlice__WEBPACK_IMPORTED_MODULE_5__.SetTodo)(res.data.allLocations));
        });
      } catch (err) {
        console.log(err);
      }
    };

    chechUser_FetchTodos();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("title", {
        children: "Uber-clone Mapbox "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_EntryPage__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./redux/features/UserSlice.js":
/*!*************************************!*\
  !*** ./redux/features/UserSlice.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSlice": () => (/* binding */ UserSlice),
/* harmony export */   "Add": () => (/* binding */ Add),
/* harmony export */   "Remove": () => (/* binding */ Remove),
/* harmony export */   "Check": () => (/* binding */ Check),
/* harmony export */   "selectUser": () => (/* binding */ selectUser),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
        await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${"http://localhost:3000"}/api/createUser`, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserSlice.reducer);

/***/ }),

/***/ "./redux/features/todoSlice.js":
/*!*************************************!*\
  !*** ./redux/features/todoSlice.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoReducer": () => (/* binding */ TodoReducer),
/* harmony export */   "SetTodo": () => (/* binding */ SetTodo),
/* harmony export */   "selectTodo": () => (/* binding */ selectTodo),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoReducer.reducer);

/***/ }),

/***/ "@material-tailwind/react/Button":
/*!**************************************************!*\
  !*** external "@material-tailwind/react/Button" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("@material-tailwind/react/Button");

/***/ }),

/***/ "@material-tailwind/react/Card":
/*!************************************************!*\
  !*** external "@material-tailwind/react/Card" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@material-tailwind/react/Card");

/***/ }),

/***/ "@material-tailwind/react/CardBody":
/*!****************************************************!*\
  !*** external "@material-tailwind/react/CardBody" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("@material-tailwind/react/CardBody");

/***/ }),

/***/ "@material-tailwind/react/CardFooter":
/*!******************************************************!*\
  !*** external "@material-tailwind/react/CardFooter" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = require("@material-tailwind/react/CardFooter");

/***/ }),

/***/ "@material-tailwind/react/CardHeader":
/*!******************************************************!*\
  !*** external "@material-tailwind/react/CardHeader" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = require("@material-tailwind/react/CardHeader");

/***/ }),

/***/ "@material-tailwind/react/Heading5":
/*!****************************************************!*\
  !*** external "@material-tailwind/react/Heading5" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("@material-tailwind/react/Heading5");

/***/ }),

/***/ "@material-tailwind/react/Input":
/*!*************************************************!*\
  !*** external "@material-tailwind/react/Input" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@material-tailwind/react/Input");

/***/ }),

/***/ "@material-tailwind/react/InputIcon":
/*!*****************************************************!*\
  !*** external "@material-tailwind/react/InputIcon" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("@material-tailwind/react/InputIcon");

/***/ }),

/***/ "@material-tailwind/react/Modal":
/*!*************************************************!*\
  !*** external "@material-tailwind/react/Modal" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@material-tailwind/react/Modal");

/***/ }),

/***/ "@material-tailwind/react/ModalBody":
/*!*****************************************************!*\
  !*** external "@material-tailwind/react/ModalBody" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("@material-tailwind/react/ModalBody");

/***/ }),

/***/ "@material-tailwind/react/ModalFooter":
/*!*******************************************************!*\
  !*** external "@material-tailwind/react/ModalFooter" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("@material-tailwind/react/ModalFooter");

/***/ }),

/***/ "@material-tailwind/react/ModalHeader":
/*!*******************************************************!*\
  !*** external "@material-tailwind/react/ModalHeader" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("@material-tailwind/react/ModalHeader");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "magic-sdk":
/*!****************************!*\
  !*** external "magic-sdk" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("magic-sdk");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-cookie");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L0I7QUFZQSxNQUFNO0FBQUV4RSxFQUFBQTtBQUFGLElBQWN1RSxXQUFXLENBQUNILE9BQWhDLEVBRVA7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTXJFLFVBQVUsR0FBR2lFLEtBQUssSUFBSUEsS0FBSyxDQUFDUyxJQUFOLENBQVduRSxJQUF2QztBQUVQLGlFQUFlaUUsV0FBVyxDQUFDRCxPQUEzQjs7Ozs7Ozs7OztBQzNCQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBib3gvLi9jb21wb25lbnRzL0VudHJ5UGFnZS5qcyIsIndlYnBhY2s6Ly9tYXBib3gvLi9jb21wb25lbnRzL0dlb0NvZGluZ1RvZG8uanMiLCJ3ZWJwYWNrOi8vbWFwYm94Ly4vY29tcG9uZW50cy9TaWduSW4uanMiLCJ3ZWJwYWNrOi8vbWFwYm94Ly4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWFwYm94Ly4vcmVkdXgvZmVhdHVyZXMvVXNlclNsaWNlLmpzIiwid2VicGFjazovL21hcGJveC8uL3JlZHV4L2ZlYXR1cmVzL3RvZG9TbGljZS5qcyIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0NhcmRcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQ2FyZEJvZHlcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQ2FyZEZvb3RlclwiIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9DYXJkSGVhZGVyXCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0hlYWRpbmc1XCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0lucHV0XCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0lucHV0SWNvblwiIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbFwiIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbEJvZHlcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxGb290ZXJcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxIZWFkZXJcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJtYWdpYy1zZGtcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwicmVhY3QtY29va2llXCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFNpZ25JbiBmcm9tIFwiLi9TaWduSW5cIlxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQnV0dG9uXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IHsgc2VsZWN0VXNlciwgUmVtb3ZlIH0gZnJvbSBcIi4uL3JlZHV4L2ZlYXR1cmVzL1VzZXJTbGljZVwiXHJcbmltcG9ydCBHZW9Db2RpbmdUb2RvIGZyb20gXCIuL0dlb0NvZGluZ1RvZG9cIlxyXG5pbXBvcnQgeyBNYWdpYyB9IGZyb20gXCJtYWdpYy1zZGtcIlxyXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSBcInJlYWN0LWNvb2tpZVwiXHJcblxyXG5sZXQgbWFnaWMgPSBcIlwiXHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgbWFnaWMgPSBuZXcgTWFnaWMocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTUFHSUNfS0VZKVxyXG59XHJcblxyXG5jb25zdCBFbnRyeVBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0VXNlcilcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBbY29va2llcywgc2V0Q29va2llLCByZW1vdmVDb29raWVdID0gdXNlQ29va2llcyhbXCJ1c2VyVG9rZW5cIl0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IG1hZ2ljLnVzZXIubG9nb3V0KClcclxuICAgIHJlbW92ZUNvb2tpZShcInVzZXJUb2tlblwiKVxyXG4gICAgZGlzcGF0Y2goUmVtb3ZlKCkpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgaC1zY3JlZW4gYmctZ3JheS0zMDBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNCByaWdodC00IGZsZXggc3BhY2UteC00XCI+XHJcbiAgICAgICAge3VzZXIgJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcclxuICAgICAgICAgICAgICBidXR0b25UeXBlPVwib3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cInJlZ3VsYXJcIlxyXG4gICAgICAgICAgICAgIHJvdW5kZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGJsb2NrPXtmYWxzZX1cclxuICAgICAgICAgICAgICBpY29uT25seT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgcmlwcGxlPVwiZGFya1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9nb3V0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTG9nIE91dFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgY29sb3I9XCJsaWdodEJsdWVcIlxyXG4gICAgICAgICAgYnV0dG9uVHlwZT1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgc2l6ZT1cInJlZ3VsYXJcIlxyXG4gICAgICAgICAgcm91bmRlZD17ZmFsc2V9XHJcbiAgICAgICAgICBibG9jaz17ZmFsc2V9XHJcbiAgICAgICAgICBpY29uT25seT17ZmFsc2V9XHJcbiAgICAgICAgICByaXBwbGU9XCJkYXJrXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL01hcFwiKX1cclxuICAgICAgICAgIGRpc2FibGVkPXshdXNlciA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBWaWV3IE1hcFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHt1c2VyICYmIChcclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgbGVmdC04XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0ZXh0LWJsdWUtNDAwIG1yLTRcIj5IZWxsbzwvc3Bhbj5cclxuXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCI+e3VzZXI/LmVtYWlsfTwvc3Bhbj5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICApfVxyXG4gICAgICB7IXVzZXIgPyA8U2lnbkluIC8+IDogPEdlb0NvZGluZ1RvZG8gLz59XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVudHJ5UGFnZVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbFwiXHJcbmltcG9ydCBNb2RhbEhlYWRlciBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L01vZGFsSGVhZGVyXCJcclxuaW1wb3J0IE1vZGFsQm9keSBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L01vZGFsQm9keVwiXHJcbmltcG9ydCBNb2RhbEZvb3RlciBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L01vZGFsRm9vdGVyXCJcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0J1dHRvblwiXHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0lucHV0XCJcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IHsgc2VsZWN0VG9kbywgU2V0VG9kbyB9IGZyb20gXCIuLi9yZWR1eC9mZWF0dXJlcy90b2RvU2xpY2VcIlxyXG5pbXBvcnQgeyBzZWxlY3RVc2VyIH0gZnJvbSBcIi4uL3JlZHV4L2ZlYXR1cmVzL1VzZXJTbGljZVwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5cclxuY29uc3QgR2VvQ29kaW5nVG9kbyA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3RvZG9JbnB1dCwgc2V0VG9kb0lucHV0XSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgdG9kbyA9IHVzZVNlbGVjdG9yKHNlbGVjdFRvZG8pXHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdFVzZXIpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkTG9jYXRpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh0b2RvSW5wdXQpXHJcbiAgICBpZiAodG9kb0lucHV0KSB7XHJcbiAgICAgIGNvbnN0IGFkZFRvZG9QcmlzbWEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgYXhpb3NcclxuICAgICAgICAgIC5wb3N0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hPU1R9L2FwaS9jcmVhdGVMb2NhdGlvbmAsIHtcclxuICAgICAgICAgICAgdG9kbzogdG9kb0lucHV0LFxyXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbihhc3luYyBkYXRhID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3NcclxuICAgICAgICAgICAgICAuZ2V0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hPU1R9L2FwaS9jcmVhdGVMb2NhdGlvbmApXHJcbiAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKFNldFRvZG8ocmVzLmRhdGEuYWxsTG9jYXRpb25zKSlcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAgICAgfVxyXG4gICAgICBhZGRUb2RvUHJpc21hKClcclxuICAgIH1cclxuICAgIHNldFRvZG9JbnB1dChcIlwiKVxyXG4gICAgc2V0U2hvd01vZGFsKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlUmVtb3ZlID0gKGlkLCB1c2VySWQpID0+IHtcclxuICAgIGNvbnN0IHJlbW92ZSA9IGFzeW5jIGlkID0+IHtcclxuICAgICAgYXdhaXQgYXhpb3NcclxuICAgICAgICAucG9zdChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT1NUfS9hcGkvcmVtb3ZlVG9kb0xvY2F0aW9uYCwge1xyXG4gICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgIGRpc3BhdGNoKFNldFRvZG8oZGF0YS5kYXRhLmZpbHRlcmVkKSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAgIH1cclxuICAgIHJlbW92ZShpZClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS01XCI+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBjb2xvcj1cImxpZ2h0Qmx1ZVwiXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgb25DbGljaz17ZSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XHJcbiAgICAgICAgcmlwcGxlPVwibGlnaHRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgQWRkIHlvdXIgZmF2b3JpdGUgbG9jYXRpb25cclxuICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICA8TW9kYWwgc2l6ZT1cInNtXCIgYWN0aXZlPXtzaG93TW9kYWx9IHRvZ2dsZXI9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9PlxyXG4gICAgICAgIDxNb2RhbEhlYWRlciB0b2dnbGVyPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfT5cclxuICAgICAgICAgIEFkZCBhIGxvY2F0aW9uXHJcbiAgICAgICAgPC9Nb2RhbEhlYWRlcj5cclxuICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgY29sb3I9XCJsaWdodEJsdWVcIlxyXG4gICAgICAgICAgICBzaXplPVwicmVndWxhclwiXHJcbiAgICAgICAgICAgIG91dGxpbmU9e3RydWV9XHJcbiAgICAgICAgICAgIHZhbHVlPXt0b2RvSW5wdXR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFRvZG9JbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGxvY2F0aW9uXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Nb2RhbEJvZHk+XHJcbiAgICAgICAgPE1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjb2xvcj1cInJlZFwiXHJcbiAgICAgICAgICAgIGJ1dHRvblR5cGU9XCJsaW5rXCJcclxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgICByaXBwbGU9XCJkYXJrXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY29sb3I9XCJncmVlblwiXHJcbiAgICAgICAgICAgIHJpcHBsZT1cImxpZ2h0XCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQWRkTG9jYXRpb24oKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWRkIGxvY2F0aW9uXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L01vZGFsRm9vdGVyPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICB7dG9kbz8ubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyICB3LVszMDBweF0gaC1bNTBweF0gYmctcGluay00MDAgIHJvdW5kZWQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHNjYWxlLTc1ICBob3ZlcjpzY2FsZS0xMDAgcC00XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzI5MHB4XSBoLTUwcHhcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL01hcD9sb2NhdGlvbj0ke2l0ZW0uTmFtZX1gKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHA+e2l0ZW0uTmFtZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlKGl0ZW0uaWQsIGl0ZW0uVXNlcklkKX0+4p2MPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZW9Db2RpbmdUb2RvXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IENhcmQgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9DYXJkXCJcclxuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9DYXJkSGVhZGVyXCJcclxuaW1wb3J0IENhcmRCb2R5IGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQ2FyZEJvZHlcIlxyXG5pbXBvcnQgQ2FyZEZvb3RlciBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0NhcmRGb290ZXJcIlxyXG5pbXBvcnQgSW5wdXRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvSW5wdXRJY29uXCJcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0J1dHRvblwiXHJcbmltcG9ydCBINSBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0hlYWRpbmc1XCJcclxuaW1wb3J0IHsgTWFnaWMgfSBmcm9tIFwibWFnaWMtc2RrXCJcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyBBZGQgfSBmcm9tIFwiLi4vcmVkdXgvZmVhdHVyZXMvVXNlclNsaWNlXCJcclxuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gXCJyZWFjdC1jb29raWVcIlxyXG5cclxubGV0IG1hZ2ljID0gXCJcIlxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gIG1hZ2ljID0gbmV3IE1hZ2ljKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01BR0lDX0tFWSlcclxufVxyXG5cclxuY29uc3QgU2lnbkluID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBbY29va2llcywgc2V0Q29va2llXSA9IHVzZUNvb2tpZXMoW1widXNlclRva2VuXCJdKVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyBldmVudCA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgaWYgKGVtYWlsKSB7XHJcbiAgICAgIGF3YWl0IG1hZ2ljLmF1dGgubG9naW5XaXRoTWFnaWNMaW5rKHsgZW1haWwgfSlcclxuICAgICAgbGV0IHVzZXIgPSBhd2FpdCBtYWdpYy51c2VyLmdldE1ldGFkYXRhKClcclxuICAgICAgc2V0Q29va2llKFwidXNlclRva2VuXCIsIHVzZXIpXHJcbiAgICAgIGRpc3BhdGNoKEFkZCh1c2VyKSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzQwMHB4XVwiPlxyXG4gICAgICA8Q2FyZD5cclxuICAgICAgICA8Q2FyZEhlYWRlciBjb2xvcj1cImxpZ2h0Qmx1ZVwiIHNpemU9XCJsZ1wiPlxyXG4gICAgICAgICAgPEg1IGNvbG9yPVwid2hpdGVcIj5Mb2dpbjwvSDU+XHJcbiAgICAgICAgPC9DYXJkSGVhZGVyPlxyXG5cclxuICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTggcHgtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXRJY29uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0Qmx1ZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgaWNvbk5hbWU9XCJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICA8Q2FyZEZvb3Rlcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwibGlnaHRCbHVlXCJcclxuICAgICAgICAgICAgICBidXR0b25UeXBlPVwibGlua1wiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICByaXBwbGU9XCJkYXJrXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIE1hZ2ljIFNpZ25JblxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2FyZEZvb3Rlcj5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW5cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCBFbnRyeVBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvRW50cnlQYWdlXCJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCB7IENoZWNrIH0gZnJvbSBcIi4uL3JlZHV4L2ZlYXR1cmVzL1VzZXJTbGljZVwiXG5pbXBvcnQgeyBTZXRUb2RvIH0gZnJvbSBcIi4uL3JlZHV4L2ZlYXR1cmVzL3RvZG9TbGljZVwiXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcbmltcG9ydCB7IE1hZ2ljIH0gZnJvbSBcIm1hZ2ljLXNka1wiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuXG5sZXQgbWFnaWMgPSBcIlwiXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBtYWdpYyA9IG5ldyBNYWdpYyhwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NQUdJQ19LRVkpXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyByZXEsIHJlcyB9KSA9PiB7XG4gIGNvbnN0IHRva2VuID0gcmVxPy5jb29raWVzPy51c2VyVG9rZW4gfHwgbnVsbFxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHVzZXI6IHRva2VuIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHVzZXIgfSkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgY29uc29sZS5sb2codXNlcilcblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyKSB7XG4gICAgICBkaXNwYXRjaChDaGVjayhKU09OLnBhcnNlKHVzZXIpKSlcbiAgICB9XG4gICAgY29uc3QgY2hlY2hVc2VyX0ZldGNoVG9kb3MgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBheGlvc1xuICAgICAgICAgIC5nZXQoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSE9TVH0vYXBpL2NyZWF0ZUxvY2F0aW9uYClcbiAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goU2V0VG9kbyhyZXMuZGF0YS5hbGxMb2NhdGlvbnMpKVxuICAgICAgICAgIH0pXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgfVxuICAgIH1cbiAgICBjaGVjaFVzZXJfRmV0Y2hUb2RvcygpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VWJlci1jbG9uZSBNYXBib3ggPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxFbnRyeVBhZ2UgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcIlVzZXJcIixcclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIHVzZXI6IG51bGwsXHJcbiAgfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgQWRkOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS51c2VyID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgY29uc3QgZmV0Y2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgYXhpb3NcclxuICAgICAgICAgIC5wb3N0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hPU1R9L2FwaS9jcmVhdGVVc2VyYCwge1xyXG4gICAgICAgICAgICBlbWFpbDogYWN0aW9uLnBheWxvYWQuZW1haWwsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICAgIH1cclxuICAgICAgZmV0Y2goKVxyXG4gICAgfSxcclxuICAgIFJlbW92ZTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXNlciA9IG51bGxcclxuICAgIH0sXHJcbiAgICBDaGVjazogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXNlciA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBBZGQsIFJlbW92ZSwgQ2hlY2sgfSA9IFVzZXJTbGljZS5hY3Rpb25zXHJcblxyXG4vLyBUaGUgZnVuY3Rpb24gYmVsb3cgaXMgY2FsbGVkIGEgdGh1bmsgYW5kIGFsbG93cyB1cyB0byBwZXJmb3JtIGFzeW5jIGxvZ2ljLiBJdFxyXG4vLyBjYW4gYmUgZGlzcGF0Y2hlZCBsaWtlIGEgcmVndWxhciBhY3Rpb246IGBkaXNwYXRjaChpbmNyZW1lbnRBc3luYygxMCkpYC4gVGhpc1xyXG4vLyB3aWxsIGNhbGwgdGhlIHRodW5rIHdpdGggdGhlIGBkaXNwYXRjaGAgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50LiBBc3luY1xyXG4vLyBjb2RlIGNhbiB0aGVuIGJlIGV4ZWN1dGVkIGFuZCBvdGhlciBhY3Rpb25zIGNhbiBiZSBkaXNwYXRjaGVkXHJcblxyXG4vLyBUaGUgZnVuY3Rpb24gYmVsb3cgaXMgY2FsbGVkIGEgc2VsZWN0b3IgYW5kIGFsbG93cyB1cyB0byBzZWxlY3QgYSB2YWx1ZSBmcm9tXHJcbi8vIHRoZSBzdGF0ZS4gU2VsZWN0b3JzIGNhbiBhbHNvIGJlIGRlZmluZWQgaW5saW5lIHdoZXJlIHRoZXkncmUgdXNlZCBpbnN0ZWFkIG9mXHJcbi8vIGluIHRoZSBzbGljZSBmaWxlLiBGb3IgZXhhbXBsZTogYHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY291bnRlci52YWx1ZSlgXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RVc2VyID0gc3RhdGUgPT4gc3RhdGUuVXNlci51c2VyXHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyU2xpY2UucmVkdWNlclxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmV4cG9ydCBjb25zdCBUb2RvUmVkdWNlciA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnVG9kbycsXHJcbiAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICB0b2RvOiBbXSxcclxuICB9LFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBTZXRUb2RvOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS50b2RvID0gWy4uLmFjdGlvbi5wYXlsb2FkXS5yZXZlcnNlKClcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IFNldFRvZG8gfSA9IFRvZG9SZWR1Y2VyLmFjdGlvbnNcclxuXHJcbi8vIFRoZSBmdW5jdGlvbiBiZWxvdyBpcyBjYWxsZWQgYSB0aHVuayBhbmQgYWxsb3dzIHVzIHRvIHBlcmZvcm0gYXN5bmMgbG9naWMuIEl0XHJcbi8vIGNhbiBiZSBkaXNwYXRjaGVkIGxpa2UgYSByZWd1bGFyIGFjdGlvbjogYGRpc3BhdGNoKGluY3JlbWVudEFzeW5jKDEwKSlgLiBUaGlzXHJcbi8vIHdpbGwgY2FsbCB0aGUgdGh1bmsgd2l0aCB0aGUgYGRpc3BhdGNoYCBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQuIEFzeW5jXHJcbi8vIGNvZGUgY2FuIHRoZW4gYmUgZXhlY3V0ZWQgYW5kIG90aGVyIGFjdGlvbnMgY2FuIGJlIGRpc3BhdGNoZWRcclxuXHJcbi8vIFRoZSBmdW5jdGlvbiBiZWxvdyBpcyBjYWxsZWQgYSBzZWxlY3RvciBhbmQgYWxsb3dzIHVzIHRvIHNlbGVjdCBhIHZhbHVlIGZyb21cclxuLy8gdGhlIHN0YXRlLiBTZWxlY3RvcnMgY2FuIGFsc28gYmUgZGVmaW5lZCBpbmxpbmUgd2hlcmUgdGhleSdyZSB1c2VkIGluc3RlYWQgb2ZcclxuLy8gaW4gdGhlIHNsaWNlIGZpbGUuIEZvciBleGFtcGxlOiBgdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb3VudGVyLnZhbHVlKWBcclxuZXhwb3J0IGNvbnN0IHNlbGVjdFRvZG8gPSBzdGF0ZSA9PiBzdGF0ZS5Ub2RvLnRvZG9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9SZWR1Y2VyLnJlZHVjZXJcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQ2FyZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQ2FyZEJvZHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0NhcmRGb290ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0NhcmRIZWFkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0hlYWRpbmc1XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9JbnB1dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvSW5wdXRJY29uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxCb2R5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbEZvb3RlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxIZWFkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYWdpYy1zZGtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwiU2lnbkluIiwiQnV0dG9uIiwidXNlUm91dGVyIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInNlbGVjdFVzZXIiLCJSZW1vdmUiLCJHZW9Db2RpbmdUb2RvIiwiTWFnaWMiLCJ1c2VDb29raWVzIiwibWFnaWMiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTUFHSUNfS0VZIiwiRW50cnlQYWdlIiwicm91dGVyIiwidXNlciIsImRpc3BhdGNoIiwiY29va2llcyIsInNldENvb2tpZSIsInJlbW92ZUNvb2tpZSIsImhhbmRsZUxvZ291dCIsImxvZ291dCIsInB1c2giLCJlbWFpbCIsInVzZVN0YXRlIiwiTW9kYWwiLCJNb2RhbEhlYWRlciIsIk1vZGFsQm9keSIsIk1vZGFsRm9vdGVyIiwiSW5wdXQiLCJzZWxlY3RUb2RvIiwiU2V0VG9kbyIsImF4aW9zIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwidG9kb0lucHV0Iiwic2V0VG9kb0lucHV0IiwidG9kbyIsImhhbmRsZUFkZExvY2F0aW9uIiwiY29uc29sZSIsImxvZyIsImFkZFRvZG9QcmlzbWEiLCJwb3N0IiwiTkVYVF9QVUJMSUNfSE9TVCIsInRoZW4iLCJkYXRhIiwiZ2V0IiwicmVzIiwiYWxsTG9jYXRpb25zIiwiY2F0Y2giLCJlcnIiLCJoYW5kbGVSZW1vdmUiLCJpZCIsInVzZXJJZCIsInJlbW92ZSIsImZpbHRlcmVkIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwiaXRlbSIsIk5hbWUiLCJVc2VySWQiLCJ1c2VFZmZlY3QiLCJDYXJkIiwiQ2FyZEhlYWRlciIsIkNhcmRCb2R5IiwiQ2FyZEZvb3RlciIsIklucHV0SWNvbiIsIkg1IiwiQWRkIiwic2V0RW1haWwiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYXV0aCIsImxvZ2luV2l0aE1hZ2ljTGluayIsImdldE1ldGFkYXRhIiwidXNlTGF5b3V0RWZmZWN0IiwiSGVhZCIsIkNoZWNrIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVxIiwidG9rZW4iLCJ1c2VyVG9rZW4iLCJwcm9wcyIsIkhvbWUiLCJKU09OIiwicGFyc2UiLCJjaGVjaFVzZXJfRmV0Y2hUb2RvcyIsImNyZWF0ZVNsaWNlIiwiVXNlclNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXJzIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZmV0Y2giLCJhY3Rpb25zIiwiVXNlciIsInJlZHVjZXIiLCJUb2RvUmVkdWNlciIsInJldmVyc2UiLCJUb2RvIl0sInNvdXJjZVJvb3QiOiIifQ==