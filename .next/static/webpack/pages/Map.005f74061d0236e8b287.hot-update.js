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
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var react_map_gl_geocoder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-map-gl-geocoder */ "./node_modules/react-map-gl-geocoder/dist/index.m.js");
/* harmony import */ var _useFetchData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../useFetchData */ "./useFetchData.js");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-tailwind/react/Button */ "./node_modules/@material-tailwind/react/Button.js");
/* harmony import */ var _paypalModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./paypalModel */ "./components/paypalModel.js");
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
      (0,_useFetchData__WEBPACK_IMPORTED_MODULE_8__.fetchData)(position.coords.longitude, position.coords.latitude).then(function (name) {
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
    (0,_useFetchData__WEBPACK_IMPORTED_MODULE_8__.directionsApi)(markers, newViewport).then(function (data) {
      return setGeo(data);
    });
    (0,_useFetchData__WEBPACK_IMPORTED_MODULE_8__.fetchData)(newViewport.longitude, newViewport.latitude).then(function (name) {
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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_6__.default, _objectSpread(_objectSpread({
        ref: mapRef
      }, viewport), {}, {
        onViewportChange: handleViewportChange,
        mapboxApiAccessToken: MAPBOX_TOKEN,
        mapStyle: "mapbox://styles/mapbox/streets-v11",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_6__.NavigationControl, {
          style: navControlStyle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, _this), geo != null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_6__.Source, {
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
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_6__.Layer, _objectSpread({}, layerStyle), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 13
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false), markers.length && markers.map(function (point, id) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_6__.Marker, {
              latitude: Number(point === null || point === void 0 ? void 0 : point.latitude),
              longitude: Number(point === null || point === void 0 ? void 0 : point.longitude),
              offsetLeft: -20,
              offsetTop: -10,
              draggable: false,
              onClick: function onClick() {
                return setShowpopup(id);
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "https://img.icons8.com/color/48/000000/map-pin.png",
                alt: "location mark"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 17
            }, _this), showPopup === id && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_6__.Popup, {
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
                  lineNumber: 181,
                  columnNumber: 25
                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: [" Destination: ", destinationName]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 184,
                    columnNumber: 27
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: ["distance:", round((geo === null || geo === void 0 ? void 0 : geo.distance) / 1000, 2), " km"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 185,
                    columnNumber: 27
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: ["durations:", round((geo === null || geo === void 0 ? void 0 : geo.duration) / 60, 2), " min"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 186,
                    columnNumber: 27
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 183,
                  columnNumber: 25
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 19
            }, _this)]
          }, id, true, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 15
          }, _this);
        })]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "search",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl_geocoder__WEBPACK_IMPORTED_MODULE_7__.default, {
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
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 7
    }, _this), show == true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-[240px] h-[300px] flex flex-col items-center rounded p-2 z-10 bg-white absolute top-[52px] left-[10px]",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Choose a ride"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
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
          lineNumber: 217,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Price: ", round(round((geo === null || geo === void 0 ? void 0 : geo.distance) / 1000, 2) * 2.45, 2), "$"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 211,
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
          lineNumber: 226,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Price: ", round(round((geo === null || geo === void 0 ? void 0 : geo.distance) / 1000, 2) * 3.67, 2), "$"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 220,
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
          lineNumber: 235,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Price: ", round(round((geo === null || geo === void 0 ? void 0 : geo.distance) / 1000, 2) * 4.55, 2), "$"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 11
      }, _this), ride && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_9__.default, {
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
        lineNumber: 239,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 9
    }, _this) : "", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypalModel__WEBPACK_IMPORTED_MODULE_10__.default, {
      showModal: showModal,
      setShowModal: setShowModal,
      price: ride
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 122,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYXBib3guanMiXSwibmFtZXMiOlsiTUFQQk9YX1RPS0VOIiwicHJvY2VzcyIsIm5hdkNvbnRyb2xTdHlsZSIsInJpZ2h0IiwidG9wIiwiTWFwYm94IiwibG9jYXRpb25Qcm9wIiwidXNlU3RhdGUiLCJ2aWV3cG9ydCIsInNldFZpZXdwb3J0IiwibWFwUmVmIiwidXNlUmVmIiwiZ2VvIiwic2V0R2VvIiwibWFya2VycyIsInNldE1hcmtlcnMiLCJzaG93UG9wdXAiLCJzZXRTaG93cG9wdXAiLCJvcmlnaW5OYW1lIiwic2V0T3JpZ2luTmFtZSIsImRlc3RpbmF0aW9uTmFtZSIsInNldERlc3RpbmF0aW9uTmFtZSIsInNob3ciLCJzZXRTaG93IiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsInJpZGUiLCJzZXRSaWRlIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwibGF5ZXJTdHlsZSIsImlkIiwidHlwZSIsInNvdXJjZSIsInBhaW50IiwibGF5b3V0IiwidXNlRWZmZWN0IiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsImxhdGl0dWRlIiwiY29vcmRzIiwibG9uZ2l0dWRlIiwiem9vbSIsIndpZHRoIiwiaGVpZ2h0IiwiZmV0Y2hEYXRhIiwidGhlbiIsIm5hbWUiLCJoYW5kbGVWaWV3cG9ydENoYW5nZSIsIm5ld1ZpZXdwb3J0Iiwicm91bmQiLCJudW0iLCJkZWMiLCJNYXRoIiwicG93IiwiaGFuZGxlR2VvY29kZXJWaWV3cG9ydENoYW5nZVRvIiwiZ2VvY29kZXJEZWZhdWx0T3ZlcnJpZGVzIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiZGlyZWN0aW9uc0FwaSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsImNsZWFyU2VhcmNoIiwic2xpY2UiLCJwcm9wZXJ0aWVzIiwiZ2VvbWV0cnkiLCJjb29yZGluYXRlcyIsImxlbmd0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LEVBQUU7QUFBQSxpQkFBTUcsWUFBWSxDQUFDLElBQUQsQ0FBbEI7QUFBQSxTQUxYO0FBQUEsZ0NBT1lILElBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELEdBMkNDLEVBaklKLGVBb0lFLDhEQUFDLGtEQUFEO0FBQ0UsZUFBUyxFQUFFRSxTQURiO0FBRUUsa0JBQVksRUFBRUMsWUFGaEI7QUFHRSxXQUFLLEVBQUVIO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBJRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRJRCxDQTlPRDs7R0FBTXJCLE07O0tBQUFBLE07QUFnUE4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvTWFwLjAwNWY3NDA2MWQwMjM2ZThiMjg3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJtYXBib3gtZ2wvZGlzdC9tYXBib3gtZ2wuY3NzXCJcclxuaW1wb3J0IFwicmVhY3QtbWFwLWdsLWdlb2NvZGVyL2Rpc3QvbWFwYm94LWdsLWdlb2NvZGVyLmNzc1wiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFJlYWN0TWFwR0wsIHtcclxuICBNYXJrZXIsXHJcbiAgUG9wdXAsXHJcbiAgTmF2aWdhdGlvbkNvbnRyb2wsXHJcbiAgU291cmNlLFxyXG4gIExheWVyLFxyXG59IGZyb20gXCJyZWFjdC1tYXAtZ2xcIlxyXG5pbXBvcnQgR2VvY29kZXIgZnJvbSBcInJlYWN0LW1hcC1nbC1nZW9jb2RlclwiXHJcbmltcG9ydCB7IGZldGNoRGF0YSwgZGlyZWN0aW9uc0FwaSB9IGZyb20gXCIuLi91c2VGZXRjaERhdGFcIlxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQnV0dG9uXCJcclxuaW1wb3J0IFBheXBhbE1vZGVsIGZyb20gXCIuL3BheXBhbE1vZGVsXCJcclxuXHJcbmNvbnN0IE1BUEJPWF9UT0tFTiA9IHByb2Nlc3MuZW52Lm1hcGJveEtFWVxyXG5cclxuY29uc3QgbmF2Q29udHJvbFN0eWxlID0ge1xyXG4gIHJpZ2h0OiAxMCxcclxuICB0b3A6IDEwLFxyXG59XHJcblxyXG5jb25zdCBNYXBib3ggPSAoeyBsb2NhdGlvblByb3AgfSkgPT4ge1xyXG4gIC8vZGVmaW5pbmcgU3RhdGVzXHJcbiAgY29uc3QgW3ZpZXdwb3J0LCBzZXRWaWV3cG9ydF0gPSB1c2VTdGF0ZSh7fSlcclxuICBjb25zdCBtYXBSZWYgPSB1c2VSZWYoKVxyXG4gIGNvbnN0IFtnZW8sIHNldEdlb10gPSB1c2VTdGF0ZSh7fSlcclxuICBjb25zdCBbbWFya2Vycywgc2V0TWFya2Vyc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbc2hvd1BvcHVwLCBzZXRTaG93cG9wdXBdID0gdXNlU3RhdGUoLTEpXHJcbiAgY29uc3QgW29yaWdpbk5hbWUsIHNldE9yaWdpbk5hbWVdID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBbZGVzdGluYXRpb25OYW1lLCBzZXREZXN0aW5hdGlvbk5hbWVdID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKGxvY2F0aW9uUHJvcClcclxuICBjb25zdCBbcmlkZSwgc2V0UmlkZV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgLy8gZGVmaW5pbmcgdGhlIHN0eWxlIGFuZCB0aGUgd2F5IHRoZSBkaXJlY3Rpb24gd2lsbCBiZSBwcmVzZW50ZWQgaW4gdGhlIG1hcFxyXG4gIGNvbnN0IGxheWVyU3R5bGUgPSB7XHJcbiAgICBpZDogXCJyb3V0ZVwiLFxyXG4gICAgdHlwZTogXCJsaW5lXCIsXHJcbiAgICBzb3VyY2U6IFwicm91dGVcIixcclxuICAgIHBhaW50OiB7XHJcbiAgICAgIFwibGluZS1jb2xvclwiOiBcIiNmY2ZjMDNcIixcclxuICAgICAgXCJsaW5lLXdpZHRoXCI6IDUsXHJcbiAgICB9LFxyXG4gICAgbGF5b3V0OiB7XHJcbiAgICAgIFwibGluZS1qb2luXCI6IFwicm91bmRcIixcclxuICAgICAgXCJsaW5lLWNhcFwiOiBcInJvdW5kXCIsXHJcbiAgICB9LFxyXG4gIH1cclxuXHJcbiAgLy8gaXQgd2lsbCBydW4gb25jZSB0aGUgY29tcG9uZW50IHJlLXJlbmRlcnMgYW5kIHN0b3AsIHdoaWNoIGlzIHNldHRpbmcgb3VyIGN1cnJlbnQgbG9jYXRpb24gYW5kIHN0b3JlIHRoZW0gaW4gdGhlIHN0YXRlXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZnVuY3Rpb24gKHBvc2l0aW9uKSB7XHJcbiAgICAgIHNldFZpZXdwb3J0KHtcclxuICAgICAgICBsYXRpdHVkZTogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxyXG4gICAgICAgIGxvbmdpdHVkZTogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSxcclxuICAgICAgICB6b29tOiAxMCxcclxuICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICB9KVxyXG4gICAgICBzZXRNYXJrZXJzKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYXRpdHVkZTogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxyXG4gICAgICAgICAgbG9uZ2l0dWRlOiBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0pXHJcblxyXG4gICAgICBmZXRjaERhdGEocG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSwgcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlKS50aGVuKFxyXG4gICAgICAgIG5hbWUgPT4ge1xyXG4gICAgICAgICAgc2V0T3JpZ2luTmFtZShuYW1lKVxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgfSlcclxuICB9LCBbXSlcclxuXHJcbiAgLy9tYWluIGZ1bmN0aW9uIHJlc3BvbnNpYmxlIGZvciBjaGFuZ2luZyB0aGUgdmlldyBpbiB0aGUgbWFwXHJcbiAgY29uc3QgaGFuZGxlVmlld3BvcnRDaGFuZ2UgPSBuZXdWaWV3cG9ydCA9PiB7XHJcbiAgICBzZXRWaWV3cG9ydChuZXdWaWV3cG9ydClcclxuICB9XHJcblxyXG4gIC8vZnVuY3Rpb24gdG8gcm91bmQgYSBudW1iZXJcclxuICBmdW5jdGlvbiByb3VuZChudW0sIGRlYykge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtICogTWF0aC5wb3coMTAsIGRlYykpIC8gTWF0aC5wb3coMTAsIGRlYylcclxuICB9XHJcblxyXG4gIC8vIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGV2ZXIgdGhlIHNlYXJjaCBjb21wb25lbnQgY2hhbmdlc1xyXG4gIGNvbnN0IGhhbmRsZUdlb2NvZGVyVmlld3BvcnRDaGFuZ2VUbyA9IG5ld1ZpZXdwb3J0ID0+IHtcclxuICAgIGNvbnN0IGdlb2NvZGVyRGVmYXVsdE92ZXJyaWRlcyA9IHtcclxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBuZXdWaWV3cG9ydC50cmFuc2l0aW9uRHVyYXRpb24sXHJcbiAgICB9XHJcbiAgICBpZiAoIW5ld1ZpZXdwb3J0KSByZXR1cm5cclxuICAgIHNldE1hcmtlcnMoW1xyXG4gICAgICAuLi5tYXJrZXJzLFxyXG4gICAgICB7IGxhdGl0dWRlOiBuZXdWaWV3cG9ydC5sYXRpdHVkZSwgbG9uZ2l0dWRlOiBuZXdWaWV3cG9ydC5sb25naXR1ZGUgfSxcclxuICAgIF0pXHJcbiAgICBkaXJlY3Rpb25zQXBpKG1hcmtlcnMsIG5ld1ZpZXdwb3J0KS50aGVuKGRhdGEgPT4gc2V0R2VvKGRhdGEpKVxyXG5cclxuICAgIGZldGNoRGF0YShuZXdWaWV3cG9ydC5sb25naXR1ZGUsIG5ld1ZpZXdwb3J0LmxhdGl0dWRlKS50aGVuKG5hbWUgPT5cclxuICAgICAgc2V0RGVzdGluYXRpb25OYW1lKG5hbWUpXHJcbiAgICApXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJ6b29tXCIsIG5ld1ZpZXdwb3J0KVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldFNob3codHJ1ZSlcclxuICAgIH0sIG5ld1ZpZXdwb3J0LnRyYW5zaXRpb25EdXJhdGlvbilcclxuICAgIHJldHVybiBoYW5kbGVWaWV3cG9ydENoYW5nZSh7XHJcbiAgICAgIC4uLm5ld1ZpZXdwb3J0LFxyXG4gICAgICB6b29tOiBuZXdWaWV3cG9ydC56b29tLFxyXG4gICAgICAuLi5nZW9jb2RlckRlZmF1bHRPdmVycmlkZXMsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xlYXJTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBzZXRHZW8obnVsbClcclxuICAgIHNldE1hcmtlcnMobWFya2Vycy5zbGljZSgwLCAxKSlcclxuICAgIHNldFNob3coZmFsc2UpXHJcbiAgICBzZXRMb2NhdGlvbihcIlwiKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwXCI+XHJcbiAgICAgICAgey8qIHJlbmRlcmluZyB0aGUgbWFwIGluIHRoZSBicm93c2VyICovfVxyXG4gICAgICAgIDxSZWFjdE1hcEdMXHJcbiAgICAgICAgICByZWY9e21hcFJlZn1cclxuICAgICAgICAgIHsuLi52aWV3cG9ydH1cclxuICAgICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9e2hhbmRsZVZpZXdwb3J0Q2hhbmdlfVxyXG4gICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49e01BUEJPWF9UT0tFTn1cclxuICAgICAgICAgIG1hcFN0eWxlPVwibWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXYxMVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgey8qIG5hdmlnYXRpb24gb24gdGhlIHRvcC1sZWZ0IGNvcm5lciBvZiB0aGUgbWFwICovfVxyXG4gICAgICAgICAgPE5hdmlnYXRpb25Db250cm9sIHN0eWxlPXtuYXZDb250cm9sU3R5bGV9IC8+XHJcbiAgICAgICAgICB7LyogcmVuZGVyaW5nIHRoZSBkaXJlY3Rpb25zIGZyb20gb25lIHBvaW50IHRvIGFub3RoZXIgKi99XHJcbiAgICAgICAgICB7Z2VvICE9IG51bGwgPyAoXHJcbiAgICAgICAgICAgIDxTb3VyY2VcclxuICAgICAgICAgICAgICBpZD1cInJvdXRlXCJcclxuICAgICAgICAgICAgICB0eXBlPVwiZ2VvanNvblwiXHJcbiAgICAgICAgICAgICAgZGF0YT17e1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7fSxcclxuICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTGluZVN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogZ2VvPy5nZW9tZXRyeT8uY29vcmRpbmF0ZXMsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGF5ZXIgey4uLmxheWVyU3R5bGV9IC8+XHJcbiAgICAgICAgICAgIDwvU291cmNlPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAge21hcmtlcnMubGVuZ3RoICYmXHJcbiAgICAgICAgICAgIG1hcmtlcnMubWFwKChwb2ludCwgaWQpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aWR9PlxyXG4gICAgICAgICAgICAgICAgPE1hcmtlclxyXG4gICAgICAgICAgICAgICAgICBsYXRpdHVkZT17TnVtYmVyKHBvaW50Py5sYXRpdHVkZSl9XHJcbiAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZT17TnVtYmVyKHBvaW50Py5sb25naXR1ZGUpfVxyXG4gICAgICAgICAgICAgICAgICBvZmZzZXRMZWZ0PXstMjB9XHJcbiAgICAgICAgICAgICAgICAgIG9mZnNldFRvcD17LTEwfVxyXG4gICAgICAgICAgICAgICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93cG9wdXAoaWQpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci80OC8wMDAwMDAvbWFwLXBpbi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImxvY2F0aW9uIG1hcmtcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9NYXJrZXI+XHJcbiAgICAgICAgICAgICAgICB7c2hvd1BvcHVwID09PSBpZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxQb3B1cFxyXG4gICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlPXtwb2ludD8ubGF0aXR1ZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlPXtwb2ludD8ubG9uZ2l0dWRlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlT25DbGljaz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBhbmNob3I9XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3dwb3B1cCgtMSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjMwMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aWQgPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk9yaWdpbjoge29yaWdpbk5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4gRGVzdGluYXRpb246IHtkZXN0aW5hdGlvbk5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPmRpc3RhbmNlOntyb3VuZChnZW8/LmRpc3RhbmNlIC8gMTAwMCwgMil9IGttPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPmR1cmF0aW9uczp7cm91bmQoZ2VvPy5kdXJhdGlvbiAvIDYwLCAyKX0gbWluPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvUG9wdXA+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L1JlYWN0TWFwR0w+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogcmVuZGVyaW5nIHRoZSBTZWFyY2ggcGxhY2VzIGZ1bmN0aW9uYWxpdHkgICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxyXG4gICAgICAgIDxHZW9jb2RlclxyXG4gICAgICAgICAgbWFwUmVmPXttYXBSZWZ9XHJcbiAgICAgICAgICBvblZpZXdwb3J0Q2hhbmdlPXtoYW5kbGVHZW9jb2RlclZpZXdwb3J0Q2hhbmdlVG99XHJcbiAgICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj17TUFQQk9YX1RPS0VOfVxyXG4gICAgICAgICAgcG9zaXRpb249XCJ0b3AtbGVmdFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImNob29zZSB5b3VyIGRlc3RpbmF0aW9uXCJcclxuICAgICAgICAgIG9uQ2xlYXI9e2NsZWFyU2VhcmNofVxyXG4gICAgICAgICAgaW5wdXRWYWx1ZT17bG9jYXRpb24gPyBsb2NhdGlvbiA6IFwiXCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93ID09IHRydWUgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVsyNDBweF0gaC1bMzAwcHhdIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHJvdW5kZWQgcC0yIHotMTAgYmctd2hpdGUgYWJzb2x1dGUgdG9wLVs1MnB4XSBsZWZ0LVsxMHB4XVwiPlxyXG4gICAgICAgICAgPGgzPkNob29zZSBhIHJpZGU8L2gzPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVs4MCVdIGgtWzUwcHhdIHJvdW5kZWQgIG10LTQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHAtMiBob3ZlcjpiZy1ibHVlLTMwMCBiZy1ibHVlLTQwMCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgc2V0UmlkZShyb3VuZChyb3VuZChnZW8/LmRpc3RhbmNlIC8gMTAwMCwgMikgKiAyLjQ1LCAyKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cD5VYmVyIFg8L3A+XHJcbiAgICAgICAgICAgIDxwPlByaWNlOiB7cm91bmQocm91bmQoZ2VvPy5kaXN0YW5jZSAvIDEwMDAsIDIpICogMi40NSwgMil9JDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVs4MCVdIGgtWzUwcHhdIHJvdW5kZWQgbXQtNCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcC0yIGJnLWJsdWUtNDAwIGhvdmVyOmJnLWJsdWUtMzAwIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICBzZXRSaWRlKHJvdW5kKHJvdW5kKGdlbz8uZGlzdGFuY2UgLyAxMDAwLCAyKSAqIDMuNjcsIDIpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwPlViZXIgWFM8L3A+XHJcbiAgICAgICAgICAgIDxwPlByaWNlOiB7cm91bmQocm91bmQoZ2VvPy5kaXN0YW5jZSAvIDEwMDAsIDIpICogMy42NywgMil9JDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVs4MCVdIGgtWzUwcHhdIHJvdW5kZWQgbXQtNCBmbGV4IGp1c3RpZnktYmV0d2VlbiBwLTIgaXRlbXMtY2VudGVyIGJnLWJsdWUtNDAwIGhvdmVyOmJnLWJsdWUtMzAwIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICBzZXRSaWRlKHJvdW5kKHJvdW5kKGdlbz8uZGlzdGFuY2UgLyAxMDAwLCAyKSAqIDQuNTUsIDIpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwPlViZXIgRWw8L3A+XHJcbiAgICAgICAgICAgIDxwPlByaWNlOiB7cm91bmQocm91bmQoZ2VvPy5kaXN0YW5jZSAvIDEwMDAsIDIpICogNC41NSwgMil9JDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge3JpZGUgJiYgKFxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJsaWdodEJsdWVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIHJpcHBsZT1cImxpZ2h0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBHZXQgcmlkZSB7cmlkZX0kXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICBcIlwiXHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8UGF5cGFsTW9kZWxcclxuICAgICAgICBzaG93TW9kYWw9e3Nob3dNb2RhbH1cclxuICAgICAgICBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH1cclxuICAgICAgICBwcmljZT17cmlkZX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwYm94XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=