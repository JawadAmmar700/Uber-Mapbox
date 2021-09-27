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
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "C:\\D_J_S_P\\React,Next\\All_Projects\\Next_Projects\\Next_Mapbox\\mapbox\\components\\EntryPage.js";









let magic = "";

if (false) {}

const EntryPage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_6__.selectUser);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const [cookies, setCookie, removeCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_9__.useCookies)(["userToken"]);

  const handleLogout = async () => {
    await magic.user.logout();
    removeCookie("userToken");
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
          lineNumber: 33,
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
        lineNumber: 47,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "absolute top-4 left-8",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "text-3xl text-blue-400 mr-4",
        children: "Hello"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
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
    }, undefined), !user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignIn__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 16
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GeoCodingTodo__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
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

var _jsxFileName = "C:\\D_J_S_P\\React,Next\\All_Projects\\Next_Projects\\Next_Mapbox\\mapbox\\components\\GeoCodingTodo.js";













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
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "C:\\D_J_S_P\\React,Next\\All_Projects\\Next_Projects\\Next_Mapbox\\mapbox\\components\\SignIn.js";












let magic = "";

if (false) {}

const SignIn = () => {
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();
  const [cookies, setCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_12__.useCookies)(["userToken"]);

  const handleSubmit = async event => {
    event.preventDefault();

    if (email) {
      await magic.auth.loginWithMagicLink({
        email
      });
      let user = await magic.user.getMetadata();
      setCookie("userToken", user);
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
          lineNumber: 39,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_4___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "mb-8 px-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_InputIcon__WEBPACK_IMPORTED_MODULE_6___default()), {
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
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; },
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);

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
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  console.log(user);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(() => {
    if (user) {
      dispatch((0,_redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_5__.Check)(JSON.parse(user)));
    }

    const chechUser_FetchTodos = async () => {
      try {
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
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EntryPage__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
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

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-cookie");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBib3gvLi9jb21wb25lbnRzL0VudHJ5UGFnZS5qcyIsIndlYnBhY2s6Ly9tYXBib3gvLi9jb21wb25lbnRzL0dlb0NvZGluZ1RvZG8uanMiLCJ3ZWJwYWNrOi8vbWFwYm94Ly4vY29tcG9uZW50cy9TaWduSW4uanMiLCJ3ZWJwYWNrOi8vbWFwYm94Ly4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWFwYm94Ly4vcmVkdXgvZmVhdHVyZXMvVXNlclNsaWNlLmpzIiwid2VicGFjazovL21hcGJveC8uL3JlZHV4L2ZlYXR1cmVzL3RvZG9TbGljZS5qcyIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0NhcmRcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQ2FyZEJvZHlcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQ2FyZEZvb3RlclwiIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9DYXJkSGVhZGVyXCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0hlYWRpbmc1XCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0lucHV0XCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0lucHV0SWNvblwiIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbFwiIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbEJvZHlcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxGb290ZXJcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxIZWFkZXJcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJtYWdpYy1zZGtcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwicmVhY3QtY29va2llXCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJtYWdpYyIsIkVudHJ5UGFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZXIiLCJ1c2VTZWxlY3RvciIsInNlbGVjdFVzZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY29va2llcyIsInNldENvb2tpZSIsInJlbW92ZUNvb2tpZSIsInVzZUNvb2tpZXMiLCJoYW5kbGVMb2dvdXQiLCJsb2dvdXQiLCJSZW1vdmUiLCJwdXNoIiwiZW1haWwiLCJHZW9Db2RpbmdUb2RvIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwidXNlU3RhdGUiLCJ0b2RvSW5wdXQiLCJzZXRUb2RvSW5wdXQiLCJ0b2RvIiwic2VsZWN0VG9kbyIsImhhbmRsZUFkZExvY2F0aW9uIiwiY29uc29sZSIsImxvZyIsImFkZFRvZG9QcmlzbWEiLCJheGlvcyIsInRoZW4iLCJkYXRhIiwicmVzIiwiU2V0VG9kbyIsImFsbExvY2F0aW9ucyIsImNhdGNoIiwiZXJyIiwiaGFuZGxlUmVtb3ZlIiwiaWQiLCJ1c2VySWQiLCJyZW1vdmUiLCJmaWx0ZXJlZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsIml0ZW0iLCJOYW1lIiwiVXNlcklkIiwiU2lnbkluIiwic2V0RW1haWwiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYXV0aCIsImxvZ2luV2l0aE1hZ2ljTGluayIsImdldE1ldGFkYXRhIiwiQWRkIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVxIiwidG9rZW4iLCJ1c2VyVG9rZW4iLCJwcm9wcyIsIkhvbWUiLCJ1c2VMYXlvdXRFZmZlY3QiLCJDaGVjayIsIkpTT04iLCJwYXJzZSIsImNoZWNoVXNlcl9GZXRjaFRvZG9zIiwiVXNlclNsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlcnMiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJmZXRjaCIsImFjdGlvbnMiLCJVc2VyIiwicmVkdWNlciIsIlRvZG9SZWR1Y2VyIiwicmV2ZXJzZSIsIlRvZG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxLQUFLLEdBQUcsRUFBWjs7QUFDQSxJQUFJLE9BQStCLEVBRWxDOztBQUVELE1BQU1DLFNBQVMsR0FBRyxNQUFNO0FBQ3RCLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxRQUFNQyxJQUFJLEdBQUdDLHdEQUFXLENBQUNDLGlFQUFELENBQXhCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHQyx3REFBVyxFQUE1QjtBQUNBLFFBQU0sQ0FBQ0MsT0FBRCxF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Q0MsY0FBWSxFQUFFO0FBQ1pqRCxRQUFJLEVBQUU7QUFETSxHQUZ1QjtBQUtyQ2tELFVBQVEsRUFBRTtBQUNSeEMsV0FBTyxFQUFFLENBQUN5QyxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDMUJELFdBQUssQ0FBQ25ELElBQU4sR0FBYSxDQUFDLEdBQUdvRCxNQUFNLENBQUNDLE9BQVgsRUFBb0JNLE9BQXBCLEVBQWI7QUFDRDtBQUhPO0FBTDJCLENBQUQsQ0FBL0I7QUFZQSxNQUFNO0FBQUVqRDtBQUFGLElBQWNnRCxXQUFXLENBQUNILE9BQWhDLEMsQ0FFUDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNdEQsVUFBVSxHQUFHa0QsS0FBSyxJQUFJQSxLQUFLLENBQUNTLElBQU4sQ0FBVzVELElBQXZDO0FBRVAsK0RBQWUwRCxXQUFXLENBQUNELE9BQTNCLEU7Ozs7Ozs7Ozs7O0FDM0JBLDZEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBTaWduSW4gZnJvbSBcIi4vU2lnbkluXCJcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0J1dHRvblwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IHNlbGVjdFVzZXIsIFJlbW92ZSB9IGZyb20gXCIuLi9yZWR1eC9mZWF0dXJlcy9Vc2VyU2xpY2VcIlxyXG5pbXBvcnQgR2VvQ29kaW5nVG9kbyBmcm9tIFwiLi9HZW9Db2RpbmdUb2RvXCJcclxuaW1wb3J0IHsgTWFnaWMgfSBmcm9tIFwibWFnaWMtc2RrXCJcclxuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gXCJyZWFjdC1jb29raWVcIlxyXG5cclxubGV0IG1hZ2ljID0gXCJcIlxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gIG1hZ2ljID0gbmV3IE1hZ2ljKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01BR0lDX0tFWSlcclxufVxyXG5cclxuY29uc3QgRW50cnlQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdFVzZXIpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgW2Nvb2tpZXMsIHNldENvb2tpZSwgcmVtb3ZlQ29va2llXSA9IHVzZUNvb2tpZXMoW1widXNlclRva2VuXCJdKVxyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBtYWdpYy51c2VyLmxvZ291dCgpXHJcbiAgICByZW1vdmVDb29raWUoXCJ1c2VyVG9rZW5cIilcclxuICAgIGRpc3BhdGNoKFJlbW92ZSgpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIGgtc2NyZWVuIGJnLWdyYXktMzAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgcmlnaHQtNCBmbGV4IHNwYWNlLXgtNFwiPlxyXG4gICAgICAgIHt1c2VyICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXHJcbiAgICAgICAgICAgICAgYnV0dG9uVHlwZT1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgIHNpemU9XCJyZWd1bGFyXCJcclxuICAgICAgICAgICAgICByb3VuZGVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBibG9jaz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgaWNvbk9ubHk9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIHJpcHBsZT1cImRhcmtcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIExvZyBPdXRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGNvbG9yPVwibGlnaHRCbHVlXCJcclxuICAgICAgICAgIGJ1dHRvblR5cGU9XCJvdXRsaW5lXCJcclxuICAgICAgICAgIHNpemU9XCJyZWd1bGFyXCJcclxuICAgICAgICAgIHJvdW5kZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgYmxvY2s9e2ZhbHNlfVxyXG4gICAgICAgICAgaWNvbk9ubHk9e2ZhbHNlfVxyXG4gICAgICAgICAgcmlwcGxlPVwiZGFya1wiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9NYXBcIil9XHJcbiAgICAgICAgICBkaXNhYmxlZD17IXVzZXIgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgVmlldyBNYXBcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7dXNlciAmJiAoXHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IGxlZnQtOFwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1ibHVlLTQwMCBtci00XCI+SGVsbG88L3NwYW4+XHJcblxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMFwiPnt1c2VyPy5lbWFpbH08L3NwYW4+XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgKX1cclxuICAgICAgeyF1c2VyID8gPFNpZ25JbiAvPiA6IDxHZW9Db2RpbmdUb2RvIC8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbnRyeVBhZ2VcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxcIlxyXG5pbXBvcnQgTW9kYWxIZWFkZXIgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbEhlYWRlclwiXHJcbmltcG9ydCBNb2RhbEJvZHkgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbEJvZHlcIlxyXG5pbXBvcnQgTW9kYWxGb290ZXIgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbEZvb3RlclwiXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9CdXR0b25cIlxyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9JbnB1dFwiXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IHNlbGVjdFRvZG8sIFNldFRvZG8gfSBmcm9tIFwiLi4vcmVkdXgvZmVhdHVyZXMvdG9kb1NsaWNlXCJcclxuaW1wb3J0IHsgc2VsZWN0VXNlciB9IGZyb20gXCIuLi9yZWR1eC9mZWF0dXJlcy9Vc2VyU2xpY2VcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuXHJcbmNvbnN0IEdlb0NvZGluZ1RvZG8gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFt0b2RvSW5wdXQsIHNldFRvZG9JbnB1dF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IHRvZG8gPSB1c2VTZWxlY3RvcihzZWxlY3RUb2RvKVxyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RVc2VyKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZExvY2F0aW9uID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codG9kb0lucHV0KVxyXG4gICAgaWYgKHRvZG9JbnB1dCkge1xyXG4gICAgICBjb25zdCBhZGRUb2RvUHJpc21hID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgICAgICAucG9zdChcIi9hcGkvY3JlYXRlTG9jYXRpb25cIiwge1xyXG4gICAgICAgICAgICB0b2RvOiB0b2RvSW5wdXQsXHJcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKGFzeW5jIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2NyZWF0ZUxvY2F0aW9uXCIpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaChTZXRUb2RvKHJlcy5kYXRhLmFsbExvY2F0aW9ucykpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgICB9XHJcbiAgICAgIGFkZFRvZG9QcmlzbWEoKVxyXG4gICAgfVxyXG4gICAgc2V0VG9kb0lucHV0KFwiXCIpXHJcbiAgICBzZXRTaG93TW9kYWwoZmFsc2UpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVSZW1vdmUgPSAoaWQsIHVzZXJJZCkgPT4ge1xyXG4gICAgY29uc3QgcmVtb3ZlID0gYXN5bmMgaWQgPT4ge1xyXG4gICAgICBhd2FpdCBheGlvc1xyXG4gICAgICAgIC5wb3N0KFwiL2FwaS9yZW1vdmVUb2RvTG9jYXRpb25cIiwge1xyXG4gICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgIGRpc3BhdGNoKFNldFRvZG8oZGF0YS5kYXRhLmZpbHRlcmVkKSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAgIH1cclxuICAgIHJlbW92ZShpZClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS01XCI+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBjb2xvcj1cImxpZ2h0Qmx1ZVwiXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgb25DbGljaz17ZSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XHJcbiAgICAgICAgcmlwcGxlPVwibGlnaHRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgQWRkIHlvdXIgZmF2b3JpdGUgbG9jYXRpb25cclxuICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICA8TW9kYWwgc2l6ZT1cInNtXCIgYWN0aXZlPXtzaG93TW9kYWx9IHRvZ2dsZXI9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9PlxyXG4gICAgICAgIDxNb2RhbEhlYWRlciB0b2dnbGVyPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfT5cclxuICAgICAgICAgIEFkZCBhIGxvY2F0aW9uXHJcbiAgICAgICAgPC9Nb2RhbEhlYWRlcj5cclxuICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgY29sb3I9XCJsaWdodEJsdWVcIlxyXG4gICAgICAgICAgICBzaXplPVwicmVndWxhclwiXHJcbiAgICAgICAgICAgIG91dGxpbmU9e3RydWV9XHJcbiAgICAgICAgICAgIHZhbHVlPXt0b2RvSW5wdXR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFRvZG9JbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGxvY2F0aW9uXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Nb2RhbEJvZHk+XHJcbiAgICAgICAgPE1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjb2xvcj1cInJlZFwiXHJcbiAgICAgICAgICAgIGJ1dHRvblR5cGU9XCJsaW5rXCJcclxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgICByaXBwbGU9XCJkYXJrXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY29sb3I9XCJncmVlblwiXHJcbiAgICAgICAgICAgIHJpcHBsZT1cImxpZ2h0XCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQWRkTG9jYXRpb24oKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWRkIGxvY2F0aW9uXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L01vZGFsRm9vdGVyPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICB7dG9kbz8ubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyICB3LVszMDBweF0gaC1bNTBweF0gYmctcGluay00MDAgIHJvdW5kZWQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHNjYWxlLTc1ICBob3ZlcjpzY2FsZS0xMDAgcC00XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzI5MHB4XSBoLTUwcHhcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL01hcD9sb2NhdGlvbj0ke2l0ZW0uTmFtZX1gKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHA+e2l0ZW0uTmFtZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlKGl0ZW0uaWQsIGl0ZW0uVXNlcklkKX0+4p2MPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZW9Db2RpbmdUb2RvXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IENhcmQgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9DYXJkXCJcclxuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9DYXJkSGVhZGVyXCJcclxuaW1wb3J0IENhcmRCb2R5IGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQ2FyZEJvZHlcIlxyXG5pbXBvcnQgQ2FyZEZvb3RlciBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0NhcmRGb290ZXJcIlxyXG5pbXBvcnQgSW5wdXRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvSW5wdXRJY29uXCJcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0J1dHRvblwiXHJcbmltcG9ydCBINSBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0hlYWRpbmc1XCJcclxuaW1wb3J0IHsgTWFnaWMgfSBmcm9tIFwibWFnaWMtc2RrXCJcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyBBZGQgfSBmcm9tIFwiLi4vcmVkdXgvZmVhdHVyZXMvVXNlclNsaWNlXCJcclxuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gXCJyZWFjdC1jb29raWVcIlxyXG5cclxubGV0IG1hZ2ljID0gXCJcIlxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gIG1hZ2ljID0gbmV3IE1hZ2ljKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01BR0lDX0tFWSlcclxufVxyXG5cclxuY29uc3QgU2lnbkluID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBbY29va2llcywgc2V0Q29va2llXSA9IHVzZUNvb2tpZXMoW1widXNlclRva2VuXCJdKVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyBldmVudCA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgaWYgKGVtYWlsKSB7XHJcbiAgICAgIGF3YWl0IG1hZ2ljLmF1dGgubG9naW5XaXRoTWFnaWNMaW5rKHsgZW1haWwgfSlcclxuICAgICAgbGV0IHVzZXIgPSBhd2FpdCBtYWdpYy51c2VyLmdldE1ldGFkYXRhKClcclxuICAgICAgc2V0Q29va2llKFwidXNlclRva2VuXCIsIHVzZXIpXHJcbiAgICAgIGRpc3BhdGNoKEFkZCh1c2VyKSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzQwMHB4XVwiPlxyXG4gICAgICA8Q2FyZD5cclxuICAgICAgICA8Q2FyZEhlYWRlciBjb2xvcj1cImxpZ2h0Qmx1ZVwiIHNpemU9XCJsZ1wiPlxyXG4gICAgICAgICAgPEg1IGNvbG9yPVwid2hpdGVcIj5Mb2dpbjwvSDU+XHJcbiAgICAgICAgPC9DYXJkSGVhZGVyPlxyXG5cclxuICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTggcHgtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXRJY29uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0Qmx1ZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgaWNvbk5hbWU9XCJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICA8Q2FyZEZvb3Rlcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwibGlnaHRCbHVlXCJcclxuICAgICAgICAgICAgICBidXR0b25UeXBlPVwibGlua1wiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICByaXBwbGU9XCJkYXJrXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIE1hZ2ljIFNpZ25JblxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2FyZEZvb3Rlcj5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW5cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCBFbnRyeVBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvRW50cnlQYWdlXCJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCB7IENoZWNrIH0gZnJvbSBcIi4uL3JlZHV4L2ZlYXR1cmVzL1VzZXJTbGljZVwiXG5pbXBvcnQgeyBTZXRUb2RvIH0gZnJvbSBcIi4uL3JlZHV4L2ZlYXR1cmVzL3RvZG9TbGljZVwiXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcbmltcG9ydCB7IE1hZ2ljIH0gZnJvbSBcIm1hZ2ljLXNka1wiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuXG5sZXQgbWFnaWMgPSBcIlwiXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBtYWdpYyA9IG5ldyBNYWdpYyhwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NQUdJQ19LRVkpXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyByZXEsIHJlcyB9KSA9PiB7XG4gIGNvbnN0IHRva2VuID0gcmVxPy5jb29raWVzPy51c2VyVG9rZW4gfHwgbnVsbFxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHVzZXI6IHRva2VuIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHVzZXIgfSkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgY29uc29sZS5sb2codXNlcilcblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyKSB7XG4gICAgICBkaXNwYXRjaChDaGVjayhKU09OLnBhcnNlKHVzZXIpKSlcbiAgICB9XG4gICAgY29uc3QgY2hlY2hVc2VyX0ZldGNoVG9kb3MgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2NyZWF0ZUxvY2F0aW9uXCIpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChTZXRUb2RvKHJlcy5kYXRhLmFsbExvY2F0aW9ucykpXG4gICAgICAgIH0pXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgfVxuICAgIH1cbiAgICBjaGVjaFVzZXJfRmV0Y2hUb2RvcygpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VWJlci1jbG9uZSBNYXBib3ggPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxFbnRyeVBhZ2UgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcIlVzZXJcIixcclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIHVzZXI6IG51bGwsXHJcbiAgfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgQWRkOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS51c2VyID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgY29uc3QgZmV0Y2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgYXhpb3NcclxuICAgICAgICAgIC5wb3N0KFwiYXBpL2NyZWF0ZVVzZXJcIiwge1xyXG4gICAgICAgICAgICBlbWFpbDogYWN0aW9uLnBheWxvYWQuZW1haWwsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICAgIH1cclxuICAgICAgZmV0Y2goKVxyXG4gICAgfSxcclxuICAgIFJlbW92ZTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXNlciA9IG51bGxcclxuICAgIH0sXHJcbiAgICBDaGVjazogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXNlciA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBBZGQsIFJlbW92ZSwgQ2hlY2sgfSA9IFVzZXJTbGljZS5hY3Rpb25zXHJcblxyXG4vLyBUaGUgZnVuY3Rpb24gYmVsb3cgaXMgY2FsbGVkIGEgdGh1bmsgYW5kIGFsbG93cyB1cyB0byBwZXJmb3JtIGFzeW5jIGxvZ2ljLiBJdFxyXG4vLyBjYW4gYmUgZGlzcGF0Y2hlZCBsaWtlIGEgcmVndWxhciBhY3Rpb246IGBkaXNwYXRjaChpbmNyZW1lbnRBc3luYygxMCkpYC4gVGhpc1xyXG4vLyB3aWxsIGNhbGwgdGhlIHRodW5rIHdpdGggdGhlIGBkaXNwYXRjaGAgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50LiBBc3luY1xyXG4vLyBjb2RlIGNhbiB0aGVuIGJlIGV4ZWN1dGVkIGFuZCBvdGhlciBhY3Rpb25zIGNhbiBiZSBkaXNwYXRjaGVkXHJcblxyXG4vLyBUaGUgZnVuY3Rpb24gYmVsb3cgaXMgY2FsbGVkIGEgc2VsZWN0b3IgYW5kIGFsbG93cyB1cyB0byBzZWxlY3QgYSB2YWx1ZSBmcm9tXHJcbi8vIHRoZSBzdGF0ZS4gU2VsZWN0b3JzIGNhbiBhbHNvIGJlIGRlZmluZWQgaW5saW5lIHdoZXJlIHRoZXkncmUgdXNlZCBpbnN0ZWFkIG9mXHJcbi8vIGluIHRoZSBzbGljZSBmaWxlLiBGb3IgZXhhbXBsZTogYHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY291bnRlci52YWx1ZSlgXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RVc2VyID0gc3RhdGUgPT4gc3RhdGUuVXNlci51c2VyXHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyU2xpY2UucmVkdWNlclxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmV4cG9ydCBjb25zdCBUb2RvUmVkdWNlciA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnVG9kbycsXHJcbiAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICB0b2RvOiBbXSxcclxuICB9LFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBTZXRUb2RvOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS50b2RvID0gWy4uLmFjdGlvbi5wYXlsb2FkXS5yZXZlcnNlKClcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IFNldFRvZG8gfSA9IFRvZG9SZWR1Y2VyLmFjdGlvbnNcclxuXHJcbi8vIFRoZSBmdW5jdGlvbiBiZWxvdyBpcyBjYWxsZWQgYSB0aHVuayBhbmQgYWxsb3dzIHVzIHRvIHBlcmZvcm0gYXN5bmMgbG9naWMuIEl0XHJcbi8vIGNhbiBiZSBkaXNwYXRjaGVkIGxpa2UgYSByZWd1bGFyIGFjdGlvbjogYGRpc3BhdGNoKGluY3JlbWVudEFzeW5jKDEwKSlgLiBUaGlzXHJcbi8vIHdpbGwgY2FsbCB0aGUgdGh1bmsgd2l0aCB0aGUgYGRpc3BhdGNoYCBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQuIEFzeW5jXHJcbi8vIGNvZGUgY2FuIHRoZW4gYmUgZXhlY3V0ZWQgYW5kIG90aGVyIGFjdGlvbnMgY2FuIGJlIGRpc3BhdGNoZWRcclxuXHJcbi8vIFRoZSBmdW5jdGlvbiBiZWxvdyBpcyBjYWxsZWQgYSBzZWxlY3RvciBhbmQgYWxsb3dzIHVzIHRvIHNlbGVjdCBhIHZhbHVlIGZyb21cclxuLy8gdGhlIHN0YXRlLiBTZWxlY3RvcnMgY2FuIGFsc28gYmUgZGVmaW5lZCBpbmxpbmUgd2hlcmUgdGhleSdyZSB1c2VkIGluc3RlYWQgb2ZcclxuLy8gaW4gdGhlIHNsaWNlIGZpbGUuIEZvciBleGFtcGxlOiBgdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb3VudGVyLnZhbHVlKWBcclxuZXhwb3J0IGNvbnN0IHNlbGVjdFRvZG8gPSBzdGF0ZSA9PiBzdGF0ZS5Ub2RvLnRvZG9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9SZWR1Y2VyLnJlZHVjZXJcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0J1dHRvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0NhcmRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9DYXJkQm9keVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0NhcmRGb290ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9DYXJkSGVhZGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvSGVhZGluZzVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9JbnB1dFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0lucHV0SWNvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L01vZGFsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxCb2R5XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxGb290ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbEhlYWRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hZ2ljLXNka1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==