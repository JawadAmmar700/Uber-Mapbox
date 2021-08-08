self["webpackHotUpdate_N_E"]("pages/Map",{

/***/ "./components/mapbox.js":
/*!******************************!*\
  !*** ./components/mapbox.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mapbox-gl/dist/mapbox-gl.css */ "./node_modules/mapbox-gl/dist/mapbox-gl.css");
/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_map_gl_geocoder_dist_mapbox_gl_geocoder_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-map-gl-geocoder/dist/mapbox-gl-geocoder.css */ "./node_modules/react-map-gl-geocoder/dist/mapbox-gl-geocoder.css");
/* harmony import */ var react_map_gl_geocoder_dist_mapbox_gl_geocoder_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_map_gl_geocoder_dist_mapbox_gl_geocoder_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var react_map_gl_geocoder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-map-gl-geocoder */ "./node_modules/react-map-gl-geocoder/dist/index.m.js");
/* harmony import */ var _useFetchData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../useFetchData */ "./useFetchData.js");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-tailwind/react/Button */ "./node_modules/@material-tailwind/react/Button.js");
/* harmony import */ var _paypalModel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./paypalModel */ "./components/paypalModel.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\D_J_S_P\\React,Next\\Next_Mapbox\\mapbox\\components\\mapbox.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var MAPBOX_TOKEN = "pk.eyJ1IjoiamF3YWRhbW1hcjEyIiwiYSI6ImNrcm42aG42NDRlM3oydXA4NWoza2N6dG8ifQ.UjeHP4M3MlTJg78K0THqRQ";
var navControlStyle = {
  right: 10,
  top: 10
};

var Mapbox = function Mapbox(_ref) {
  _s();

  var _geo$geometry;

  var locationProp = _ref.locationProp;

  //defining States
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({}),
      viewport = _useState[0],
      setViewport = _useState[1];

  var mapRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({}),
      geo = _useState2[0],
      setGeo = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      markers = _useState3[0],
      setMarkers = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(-1),
      showPopup = _useState4[0],
      setShowpopup = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(""),
      originName = _useState5[0],
      setOriginName = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(""),
      destinationName = _useState6[0],
      setDestinationName = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      show = _useState7[0],
      setShow = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(locationProp),
      location = _useState8[0],
      setLocation = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null),
      ride = _useState9[0],
      setRide = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      showModal = _useState10[0],
      setShowModal = _useState10[1]; // defining the style and the way the direction will be presented in the map


  var layerStyle = {
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

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
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
      (0,_useFetchData__WEBPACK_IMPORTED_MODULE_9__.fetchData)(position.coords.longitude, position.coords.latitude).then(function (name) {
        setOriginName(name);
      });
    });
  }, []); //main function responsible for changing the view in the map

  var handleViewportChange = function handleViewportChange(newViewport) {
    setViewport(newViewport);
  }; //function to round a number


  function round(num, dec) {
    return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
  } // function is called whever the search component changes


  var handleGeocoderViewportChangeTo = function handleGeocoderViewportChangeTo(newViewport) {
    var geocoderDefaultOverrides = {
      transitionDuration: newViewport.transitionDuration
    };
    if (!newViewport) return;
    setMarkers([].concat((0,C_D_J_S_P_React_Next_Next_Mapbox_mapbox_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(markers), [{
      latitude: newViewport.latitude,
      longitude: newViewport.longitude
    }]));
    (0,_useFetchData__WEBPACK_IMPORTED_MODULE_9__.directionsApi)(markers, newViewport).then(function (data) {
      return setGeo(data);
    });
    (0,_useFetchData__WEBPACK_IMPORTED_MODULE_9__.fetchData)(newViewport.longitude, newViewport.latitude).then(function (name) {
      return setDestinationName(name);
    });
    console.log("zoom", newViewport);
    setTimeout(function () {
      setShow(true);
    }, newViewport.transitionDuration);
    return handleViewportChange(_objectSpread(_objectSpread({}, newViewport), {}, {
      zoom: newViewport.zoom
    }, geocoderDefaultOverrides));
  };

  var clearSearch = function clearSearch() {
    setGeo(null);
    setMarkers(markers.slice(0, 1));
    setShow(false);
    setLocation("");
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "map",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_7__.default, _objectSpread(_objectSpread({
        ref: mapRef
      }, viewport), {}, {
        onViewportChange: handleViewportChange,
        mapboxApiAccessToken: MAPBOX_TOKEN,
        mapStyle: "mapbox://styles/mapbox/streets-v11",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_7__.NavigationControl, {
          style: navControlStyle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, _this), geo != null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_7__.Source, {
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
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_7__.Layer, _objectSpread({}, layerStyle), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 13
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false), markers.length && markers.map(function (point, id) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_7__.Marker, {
              latitude: Number(point === null || point === void 0 ? void 0 : point.latitude),
              longitude: Number(point === null || point === void 0 ? void 0 : point.longitude),
              offsetLeft: -20,
              offsetTop: -10,
              draggable: false,
              onClick: function onClick() {
                return setShowpopup(id);
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                src: "https://img.icons8.com/color/48/000000/map-pin.png",
                alt: "location mark",
                width: 20,
                height: 20
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 17
            }, _this), showPopup === id && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_7__.Popup, {
              latitude: point === null || point === void 0 ? void 0 : point.latitude,
              longitude: point === null || point === void 0 ? void 0 : point.longitude,
              closeButton: true,
              closeOnClick: true,
              anchor: "top",
              onClose: function onClose() {
                return setShowpopup(-1);
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  width: "300px"
                },
                children: id === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: ["Origin: ", originName]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 25
                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: [" Destination: ", destinationName]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 187,
                    columnNumber: 27
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: ["distance:", round((geo === null || geo === void 0 ? void 0 : geo.distance) / 1000, 2), " km"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 188,
                    columnNumber: 27
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: ["durations:", round((geo === null || geo === void 0 ? void 0 : geo.duration) / 60, 2), " min"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 189,
                    columnNumber: 27
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 25
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 19
            }, _this)]
          }, id, true, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 15
          }, _this);
        })]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "search",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl_geocoder__WEBPACK_IMPORTED_MODULE_8__.default, {
        mapRef: mapRef,
        onViewportChange: handleGeocoderViewportChangeTo,
        mapboxApiAccessToken: MAPBOX_TOKEN,
        position: "top-left",
        placeholder: "choose your destination",
        onClear: clearSearch,
        inputValue: location ? location : ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 7
    }, _this), show == true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-[240px] h-[300px] flex flex-col items-center rounded p-2 z-10 bg-white absolute top-[52px] left-[10px]",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Choose a ride"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w-[80%] h-[50px] rounded  mt-4 flex justify-between items-center p-2 hover:bg-blue-300 bg-blue-400 cursor-pointer",
        onClick: function onClick() {
          return setRide(round(round((geo === null || geo === void 0 ? void 0 : geo.distance) / 1000, 2) * 2.45, 2));
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Uber X"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Price: ", round(round((geo === null || geo === void 0 ? void 0 : geo.distance) / 1000, 2) * 2.45, 2), "$"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w-[80%] h-[50px] rounded mt-4 flex justify-between items-center p-2 bg-blue-400 hover:bg-blue-300 cursor-pointer",
        onClick: function onClick() {
          return setRide(round(round((geo === null || geo === void 0 ? void 0 : geo.distance) / 1000, 2) * 3.67, 2));
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Uber XS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Price: ", round(round((geo === null || geo === void 0 ? void 0 : geo.distance) / 1000, 2) * 3.67, 2), "$"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w-[80%] h-[50px] rounded mt-4 flex justify-between p-2 items-center bg-blue-400 hover:bg-blue-300 cursor-pointer",
        onClick: function onClick() {
          return setRide(round(round((geo === null || geo === void 0 ? void 0 : geo.distance) / 1000, 2) * 4.55, 2));
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Uber El"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Price: ", round(round((geo === null || geo === void 0 ? void 0 : geo.distance) / 1000, 2) * 4.55, 2), "$"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 11
      }, _this), ride && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_10__.default, {
        color: "lightBlue",
        type: "button",
        ripple: "light",
        className: "mt-4",
        onClick: function onClick() {
          return setShowModal(true);
        },
        children: ["Get ride ", ride, "$"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 9
    }, _this) : "", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypalModel__WEBPACK_IMPORTED_MODULE_11__.default, {
      showModal: showModal,
      setShowModal: setShowModal,
      price: ride
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 123,
    columnNumber: 5
  }, _this);
};

_s(Mapbox, "alzVtdz/dXQ23cZDOcKWypUc3uA=");

_c = Mapbox;
/* harmony default export */ __webpack_exports__["default"] = (Mapbox);

var _c;

$RefreshReg$(_c, "Mapbox");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYXBib3guanMiXSwibmFtZXMiOlsiTUFQQk9YX1RPS0VOIiwicHJvY2VzcyIsIm5hdkNvbnRyb2xTdHlsZSIsInJpZ2h0IiwidG9wIiwiTWFwYm94IiwibG9jYXRpb25Qcm9wIiwidXNlU3RhdGUiLCJ2aWV3cG9ydCIsInNldFZpZXdwb3J0IiwibWFwUmVmIiwidXNlUmVmIiwiZ2VvIiwic2V0R2VvIiwibWFya2VycyIsInNldE1hcmtlcnMiLCJzaG93UG9wdXAiLCJzZXRTaG93cG9wdXAiLCJvcmlnaW5OYW1lIiwic2V0T3JpZ2luTmFtZSIsImRlc3RpbmF0aW9uTmFtZSIsInNldERlc3RpbmF0aW9uTmFtZSIsInNob3ciLCJzZXRTaG93IiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsInJpZGUiLCJzZXRSaWRlIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwibGF5ZXJTdHlsZSIsImlkIiwidHlwZSIsInNvdXJjZSIsInBhaW50IiwibGF5b3V0IiwidXNlRWZmZWN0IiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsImxhdGl0dWRlIiwiY29vcmRzIiwibG9uZ2l0dWRlIiwiem9vbSIsIndpZHRoIiwiaGVpZ2h0IiwiZmV0Y2hEYXRhIiwidGhlbiIsIm5hbWUiLCJoYW5kbGVWaWV3cG9ydENoYW5nZSIsIm5ld1ZpZXdwb3J0Iiwicm91bmQiLCJudW0iLCJkZWMiLCJNYXRoIiwicG93IiwiaGFuZGxlR2VvY29kZXJWaWV3cG9ydENoYW5nZVRvIiwiZ2VvY29kZXJEZWZhdWx0T3ZlcnJpZGVzIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiZGlyZWN0aW9uc0FwaSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsImNsZWFyU2VhcmNoIiwic2xpY2UiLCJwcm9wZXJ0aWVzIiwiZ2VvbWV0cnkiLCJjb29yZGluYXRlcyIsImxlbmd0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QUksRUFBQyxRQUZQO0FBR0UsY0FBTSxFQUFDLE9BSFQ7QUFJRSxpQkFBUyxFQUFDLE1BSlo7QUFLRSxlQUFPLEVBQUU7QUFBQSxpQkFBTUcsWUFBWSxDQUFDLElBQUQsQ0FBbEI7QUFBQSxTQUxYO0FBQUEsZ0NBT1lILElBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELEdBMkNDLEVBbklKLGVBc0lFLDhEQUFDLGtEQUFEO0FBQ0UsZUFBUyxFQUFFRSxTQURiO0FBRUUsa0JBQVksRUFBRUMsWUFGaEI7QUFHRSxXQUFLLEVBQUVIO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRJRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThJRCxDQWhQRDs7R0FBTXJCLE07O0tBQUFBLE07QUFrUE4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvTWFwLjE3NTlkYmI2NGE4MDA1ZTQyMTc1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJtYXBib3gtZ2wvZGlzdC9tYXBib3gtZ2wuY3NzXCJcclxuaW1wb3J0IFwicmVhY3QtbWFwLWdsLWdlb2NvZGVyL2Rpc3QvbWFwYm94LWdsLWdlb2NvZGVyLmNzc1wiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5pbXBvcnQgUmVhY3RNYXBHTCwge1xyXG4gIE1hcmtlcixcclxuICBQb3B1cCxcclxuICBOYXZpZ2F0aW9uQ29udHJvbCxcclxuICBTb3VyY2UsXHJcbiAgTGF5ZXIsXHJcbn0gZnJvbSBcInJlYWN0LW1hcC1nbFwiXHJcbmltcG9ydCBHZW9jb2RlciBmcm9tIFwicmVhY3QtbWFwLWdsLWdlb2NvZGVyXCJcclxuaW1wb3J0IHsgZmV0Y2hEYXRhLCBkaXJlY3Rpb25zQXBpIH0gZnJvbSBcIi4uL3VzZUZldGNoRGF0YVwiXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9CdXR0b25cIlxyXG5pbXBvcnQgUGF5cGFsTW9kZWwgZnJvbSBcIi4vcGF5cGFsTW9kZWxcIlxyXG5cclxuY29uc3QgTUFQQk9YX1RPS0VOID0gcHJvY2Vzcy5lbnYubWFwYm94S0VZXHJcblxyXG5jb25zdCBuYXZDb250cm9sU3R5bGUgPSB7XHJcbiAgcmlnaHQ6IDEwLFxyXG4gIHRvcDogMTAsXHJcbn1cclxuXHJcbmNvbnN0IE1hcGJveCA9ICh7IGxvY2F0aW9uUHJvcCB9KSA9PiB7XHJcbiAgLy9kZWZpbmluZyBTdGF0ZXNcclxuICBjb25zdCBbdmlld3BvcnQsIHNldFZpZXdwb3J0XSA9IHVzZVN0YXRlKHt9KVxyXG4gIGNvbnN0IG1hcFJlZiA9IHVzZVJlZigpXHJcbiAgY29uc3QgW2dlbywgc2V0R2VvXSA9IHVzZVN0YXRlKHt9KVxyXG4gIGNvbnN0IFttYXJrZXJzLCBzZXRNYXJrZXJzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtzaG93UG9wdXAsIHNldFNob3dwb3B1cF0gPSB1c2VTdGF0ZSgtMSlcclxuICBjb25zdCBbb3JpZ2luTmFtZSwgc2V0T3JpZ2luTmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFtkZXN0aW5hdGlvbk5hbWUsIHNldERlc3RpbmF0aW9uTmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUobG9jYXRpb25Qcm9wKVxyXG4gIGNvbnN0IFtyaWRlLCBzZXRSaWRlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAvLyBkZWZpbmluZyB0aGUgc3R5bGUgYW5kIHRoZSB3YXkgdGhlIGRpcmVjdGlvbiB3aWxsIGJlIHByZXNlbnRlZCBpbiB0aGUgbWFwXHJcbiAgY29uc3QgbGF5ZXJTdHlsZSA9IHtcclxuICAgIGlkOiBcInJvdXRlXCIsXHJcbiAgICB0eXBlOiBcImxpbmVcIixcclxuICAgIHNvdXJjZTogXCJyb3V0ZVwiLFxyXG4gICAgcGFpbnQ6IHtcclxuICAgICAgXCJsaW5lLWNvbG9yXCI6IFwiI2ZjZmMwM1wiLFxyXG4gICAgICBcImxpbmUtd2lkdGhcIjogNSxcclxuICAgIH0sXHJcbiAgICBsYXlvdXQ6IHtcclxuICAgICAgXCJsaW5lLWpvaW5cIjogXCJyb3VuZFwiLFxyXG4gICAgICBcImxpbmUtY2FwXCI6IFwicm91bmRcIixcclxuICAgIH0sXHJcbiAgfVxyXG5cclxuICAvLyBpdCB3aWxsIHJ1biBvbmNlIHRoZSBjb21wb25lbnQgcmUtcmVuZGVycyBhbmQgc3RvcCwgd2hpY2ggaXMgc2V0dGluZyBvdXIgY3VycmVudCBsb2NhdGlvbiBhbmQgc3RvcmUgdGhlbSBpbiB0aGUgc3RhdGVcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihmdW5jdGlvbiAocG9zaXRpb24pIHtcclxuICAgICAgc2V0Vmlld3BvcnQoe1xyXG4gICAgICAgIGxhdGl0dWRlOiBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsXHJcbiAgICAgICAgbG9uZ2l0dWRlOiBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlLFxyXG4gICAgICAgIHpvb206IDEwLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgIH0pXHJcbiAgICAgIHNldE1hcmtlcnMoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhdGl0dWRlOiBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsXHJcbiAgICAgICAgICBsb25naXR1ZGU6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSlcclxuXHJcbiAgICAgIGZldGNoRGF0YShwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlLCBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUpLnRoZW4oXHJcbiAgICAgICAgbmFtZSA9PiB7XHJcbiAgICAgICAgICBzZXRPcmlnaW5OYW1lKG5hbWUpXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICB9KVxyXG4gIH0sIFtdKVxyXG5cclxuICAvL21haW4gZnVuY3Rpb24gcmVzcG9uc2libGUgZm9yIGNoYW5naW5nIHRoZSB2aWV3IGluIHRoZSBtYXBcclxuICBjb25zdCBoYW5kbGVWaWV3cG9ydENoYW5nZSA9IG5ld1ZpZXdwb3J0ID0+IHtcclxuICAgIHNldFZpZXdwb3J0KG5ld1ZpZXdwb3J0KVxyXG4gIH1cclxuXHJcbiAgLy9mdW5jdGlvbiB0byByb3VuZCBhIG51bWJlclxyXG4gIGZ1bmN0aW9uIHJvdW5kKG51bSwgZGVjKSB7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiBNYXRoLnBvdygxMCwgZGVjKSkgLyBNYXRoLnBvdygxMCwgZGVjKVxyXG4gIH1cclxuXHJcbiAgLy8gZnVuY3Rpb24gaXMgY2FsbGVkIHdoZXZlciB0aGUgc2VhcmNoIGNvbXBvbmVudCBjaGFuZ2VzXHJcbiAgY29uc3QgaGFuZGxlR2VvY29kZXJWaWV3cG9ydENoYW5nZVRvID0gbmV3Vmlld3BvcnQgPT4ge1xyXG4gICAgY29uc3QgZ2VvY29kZXJEZWZhdWx0T3ZlcnJpZGVzID0ge1xyXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IG5ld1ZpZXdwb3J0LnRyYW5zaXRpb25EdXJhdGlvbixcclxuICAgIH1cclxuICAgIGlmICghbmV3Vmlld3BvcnQpIHJldHVyblxyXG4gICAgc2V0TWFya2VycyhbXHJcbiAgICAgIC4uLm1hcmtlcnMsXHJcbiAgICAgIHsgbGF0aXR1ZGU6IG5ld1ZpZXdwb3J0LmxhdGl0dWRlLCBsb25naXR1ZGU6IG5ld1ZpZXdwb3J0LmxvbmdpdHVkZSB9LFxyXG4gICAgXSlcclxuICAgIGRpcmVjdGlvbnNBcGkobWFya2VycywgbmV3Vmlld3BvcnQpLnRoZW4oZGF0YSA9PiBzZXRHZW8oZGF0YSkpXHJcblxyXG4gICAgZmV0Y2hEYXRhKG5ld1ZpZXdwb3J0LmxvbmdpdHVkZSwgbmV3Vmlld3BvcnQubGF0aXR1ZGUpLnRoZW4obmFtZSA9PlxyXG4gICAgICBzZXREZXN0aW5hdGlvbk5hbWUobmFtZSlcclxuICAgIClcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInpvb21cIiwgbmV3Vmlld3BvcnQpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0U2hvdyh0cnVlKVxyXG4gICAgfSwgbmV3Vmlld3BvcnQudHJhbnNpdGlvbkR1cmF0aW9uKVxyXG4gICAgcmV0dXJuIGhhbmRsZVZpZXdwb3J0Q2hhbmdlKHtcclxuICAgICAgLi4ubmV3Vmlld3BvcnQsXHJcbiAgICAgIHpvb206IG5ld1ZpZXdwb3J0Lnpvb20sXHJcbiAgICAgIC4uLmdlb2NvZGVyRGVmYXVsdE92ZXJyaWRlcyxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBjbGVhclNlYXJjaCA9ICgpID0+IHtcclxuICAgIHNldEdlbyhudWxsKVxyXG4gICAgc2V0TWFya2VycyhtYXJrZXJzLnNsaWNlKDAsIDEpKVxyXG4gICAgc2V0U2hvdyhmYWxzZSlcclxuICAgIHNldExvY2F0aW9uKFwiXCIpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXBcIj5cclxuICAgICAgICB7LyogcmVuZGVyaW5nIHRoZSBtYXAgaW4gdGhlIGJyb3dzZXIgKi99XHJcbiAgICAgICAgPFJlYWN0TWFwR0xcclxuICAgICAgICAgIHJlZj17bWFwUmVmfVxyXG4gICAgICAgICAgey4uLnZpZXdwb3J0fVxyXG4gICAgICAgICAgb25WaWV3cG9ydENoYW5nZT17aGFuZGxlVmlld3BvcnRDaGFuZ2V9XHJcbiAgICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj17TUFQQk9YX1RPS0VOfVxyXG4gICAgICAgICAgbWFwU3R5bGU9XCJtYXBib3g6Ly9zdHlsZXMvbWFwYm94L3N0cmVldHMtdjExXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7LyogbmF2aWdhdGlvbiBvbiB0aGUgdG9wLWxlZnQgY29ybmVyIG9mIHRoZSBtYXAgKi99XHJcbiAgICAgICAgICA8TmF2aWdhdGlvbkNvbnRyb2wgc3R5bGU9e25hdkNvbnRyb2xTdHlsZX0gLz5cclxuICAgICAgICAgIHsvKiByZW5kZXJpbmcgdGhlIGRpcmVjdGlvbnMgZnJvbSBvbmUgcG9pbnQgdG8gYW5vdGhlciAqL31cclxuICAgICAgICAgIHtnZW8gIT0gbnVsbCA/IChcclxuICAgICAgICAgICAgPFNvdXJjZVxyXG4gICAgICAgICAgICAgIGlkPVwicm91dGVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJnZW9qc29uXCJcclxuICAgICAgICAgICAgICBkYXRhPXt7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHt9LFxyXG4gICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJMaW5lU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBnZW8/Lmdlb21ldHJ5Py5jb29yZGluYXRlcyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMYXllciB7Li4ubGF5ZXJTdHlsZX0gLz5cclxuICAgICAgICAgICAgPC9Tb3VyY2U+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7bWFya2Vycy5sZW5ndGggJiZcclxuICAgICAgICAgICAgbWFya2Vycy5tYXAoKHBvaW50LCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgICA8TWFya2VyXHJcbiAgICAgICAgICAgICAgICAgIGxhdGl0dWRlPXtOdW1iZXIocG9pbnQ/LmxhdGl0dWRlKX1cclxuICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlPXtOdW1iZXIocG9pbnQ/LmxvbmdpdHVkZSl9XHJcbiAgICAgICAgICAgICAgICAgIG9mZnNldExlZnQ9ey0yMH1cclxuICAgICAgICAgICAgICAgICAgb2Zmc2V0VG9wPXstMTB9XHJcbiAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dwb3B1cChpZCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvNDgvMDAwMDAwL21hcC1waW4ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2NhdGlvbiBtYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvTWFya2VyPlxyXG4gICAgICAgICAgICAgICAge3Nob3dQb3B1cCA9PT0gaWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8UG9wdXBcclxuICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZT17cG9pbnQ/LmxhdGl0dWRlfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZT17cG9pbnQ/LmxvbmdpdHVkZX1cclxuICAgICAgICAgICAgICAgICAgICBjbG9zZUJ1dHRvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yPVwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93cG9wdXAoLTEpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIzMDBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2lkID09PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5PcmlnaW46IHtvcmlnaW5OYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IERlc3RpbmF0aW9uOiB7ZGVzdGluYXRpb25OYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5kaXN0YW5jZTp7cm91bmQoZ2VvPy5kaXN0YW5jZSAvIDEwMDAsIDIpfSBrbTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5kdXJhdGlvbnM6e3JvdW5kKGdlbz8uZHVyYXRpb24gLyA2MCwgMil9IG1pbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L1BvcHVwPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9SZWFjdE1hcEdMPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIHJlbmRlcmluZyB0aGUgU2VhcmNoIHBsYWNlcyBmdW5jdGlvbmFsaXR5ICAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cclxuICAgICAgICA8R2VvY29kZXJcclxuICAgICAgICAgIG1hcFJlZj17bWFwUmVmfVxyXG4gICAgICAgICAgb25WaWV3cG9ydENoYW5nZT17aGFuZGxlR2VvY29kZXJWaWV3cG9ydENoYW5nZVRvfVxyXG4gICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49e01BUEJPWF9UT0tFTn1cclxuICAgICAgICAgIHBvc2l0aW9uPVwidG9wLWxlZnRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJjaG9vc2UgeW91ciBkZXN0aW5hdGlvblwiXHJcbiAgICAgICAgICBvbkNsZWFyPXtjbGVhclNlYXJjaH1cclxuICAgICAgICAgIGlucHV0VmFsdWU9e2xvY2F0aW9uID8gbG9jYXRpb24gOiBcIlwifVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvdyA9PSB0cnVlID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bMjQwcHhdIGgtWzMwMHB4XSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciByb3VuZGVkIHAtMiB6LTEwIGJnLXdoaXRlIGFic29sdXRlIHRvcC1bNTJweF0gbGVmdC1bMTBweF1cIj5cclxuICAgICAgICAgIDxoMz5DaG9vc2UgYSByaWRlPC9oMz5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bODAlXSBoLVs1MHB4XSByb3VuZGVkICBtdC00IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwLTIgaG92ZXI6YmctYmx1ZS0zMDAgYmctYmx1ZS00MDAgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgIHNldFJpZGUocm91bmQocm91bmQoZ2VvPy5kaXN0YW5jZSAvIDEwMDAsIDIpICogMi40NSwgMikpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHA+VWJlciBYPC9wPlxyXG4gICAgICAgICAgICA8cD5QcmljZToge3JvdW5kKHJvdW5kKGdlbz8uZGlzdGFuY2UgLyAxMDAwLCAyKSAqIDIuNDUsIDIpfSQ8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bODAlXSBoLVs1MHB4XSByb3VuZGVkIG10LTQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHAtMiBiZy1ibHVlLTQwMCBob3ZlcjpiZy1ibHVlLTMwMCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgc2V0UmlkZShyb3VuZChyb3VuZChnZW8/LmRpc3RhbmNlIC8gMTAwMCwgMikgKiAzLjY3LCAyKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cD5VYmVyIFhTPC9wPlxyXG4gICAgICAgICAgICA8cD5QcmljZToge3JvdW5kKHJvdW5kKGdlbz8uZGlzdGFuY2UgLyAxMDAwLCAyKSAqIDMuNjcsIDIpfSQ8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bODAlXSBoLVs1MHB4XSByb3VuZGVkIG10LTQgZmxleCBqdXN0aWZ5LWJldHdlZW4gcC0yIGl0ZW1zLWNlbnRlciBiZy1ibHVlLTQwMCBob3ZlcjpiZy1ibHVlLTMwMCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgc2V0UmlkZShyb3VuZChyb3VuZChnZW8/LmRpc3RhbmNlIC8gMTAwMCwgMikgKiA0LjU1LCAyKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cD5VYmVyIEVsPC9wPlxyXG4gICAgICAgICAgICA8cD5QcmljZToge3JvdW5kKHJvdW5kKGdlbz8uZGlzdGFuY2UgLyAxMDAwLCAyKSAqIDQuNTUsIDIpfSQ8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtyaWRlICYmIChcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNvbG9yPVwibGlnaHRCbHVlXCJcclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICByaXBwbGU9XCJsaWdodFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKHRydWUpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgR2V0IHJpZGUge3JpZGV9JFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPFBheXBhbE1vZGVsXHJcbiAgICAgICAgc2hvd01vZGFsPXtzaG93TW9kYWx9XHJcbiAgICAgICAgc2V0U2hvd01vZGFsPXtzZXRTaG93TW9kYWx9XHJcbiAgICAgICAgcHJpY2U9e3JpZGV9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcGJveFxyXG4iXSwic291cmNlUm9vdCI6IiJ9