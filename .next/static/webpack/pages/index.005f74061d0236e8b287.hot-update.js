self["webpackHotUpdate_N_E"]("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYXBib3guanMiXSwibmFtZXMiOlsiTUFQQk9YX1RPS0VOIiwicHJvY2VzcyIsIm5hdkNvbnRyb2xTdHlsZSIsInJpZ2h0IiwidG9wIiwiTWFwYm94IiwibG9jYXRpb25Qcm9wIiwidXNlU3RhdGUiLCJ2aWV3cG9ydCIsInNldFZpZXdwb3J0IiwibWFwUmVmIiwidXNlUmVmIiwiZ2VvIiwic2V0R2VvIiwibWFya2VycyIsInNldE1hcmtlcnMiLCJzaG93UG9wdXAiLCJzZXRTaG93cG9wdXAiLCJvcmlnaW5OYW1lIiwic2V0T3JpZ2luTmFtZSIsImRlc3RpbmF0aW9uTmFtZSIsInNldERlc3RpbmF0aW9uTmFtZSIsInNob3ciLCJzZXRTaG93IiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsInJpZGUiLCJzZXRSaWRlIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwibGF5ZXJTdHlsZSIsImlkIiwidHlwZSIsInNvdXJjZSIsInBhaW50IiwibGF5b3V0IiwidXNlRWZmZWN0IiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsImxhdGl0dWRlIiwiY29vcmRzIiwibG9uZ2l0dWRlIiwiem9vbSIsIndpZHRoIiwiaGVpZ2h0IiwiZmV0Y2hEYXRhIiwidGhlbiIsIm5hbWUiLCJoYW5kbGVWaWV3cG9ydENoYW5nZSIsIm5ld1ZpZXdwb3J0Iiwicm91bmQiLCJudW0iLCJkZWMiLCJNYXRoIiwicG93IiwiaGFuZGxlR2VvY29kZXJWaWV3cG9ydENoYW5nZVRvIiwiZ2VvY29kZXJEZWZhdWx0T3ZlcnJpZGVzIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiZGlyZWN0aW9uc0FwaSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsImNsZWFyU2VhcmNoIiwic2xpY2UiLCJwcm9wZXJ0aWVzIiwiZ2VvbWV0cnkiLCJjb29yZGluYXRlcyIsImxlbmd0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LEVBQUU7QUFBQSxpQkFBTUcsWUFBWSxDQUFDLElBQUQsQ0FBbEI7QUFBQSxTQUxYO0FBQUEsZ0NBT1lILElBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELEdBMkNDLEVBaklKLGVBb0lFLDhEQUFDLGtEQUFEO0FBQ0UsZUFBUyxFQUFFRSxTQURiO0FBRUUsa0JBQVksRUFBRUMsWUFGaEI7QUFHRSxXQUFLLEVBQUVIO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBJRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRJRCxDQTlPRDs7R0FBTXJCLE07O0tBQUFBLE07QUFnUE4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDA1Zjc0MDYxZDAyMzZlOGIyODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIm1hcGJveC1nbC9kaXN0L21hcGJveC1nbC5jc3NcIlxyXG5pbXBvcnQgXCJyZWFjdC1tYXAtZ2wtZ2VvY29kZXIvZGlzdC9tYXBib3gtZ2wtZ2VvY29kZXIuY3NzXCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgUmVhY3RNYXBHTCwge1xyXG4gIE1hcmtlcixcclxuICBQb3B1cCxcclxuICBOYXZpZ2F0aW9uQ29udHJvbCxcclxuICBTb3VyY2UsXHJcbiAgTGF5ZXIsXHJcbn0gZnJvbSBcInJlYWN0LW1hcC1nbFwiXHJcbmltcG9ydCBHZW9jb2RlciBmcm9tIFwicmVhY3QtbWFwLWdsLWdlb2NvZGVyXCJcclxuaW1wb3J0IHsgZmV0Y2hEYXRhLCBkaXJlY3Rpb25zQXBpIH0gZnJvbSBcIi4uL3VzZUZldGNoRGF0YVwiXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9CdXR0b25cIlxyXG5pbXBvcnQgUGF5cGFsTW9kZWwgZnJvbSBcIi4vcGF5cGFsTW9kZWxcIlxyXG5cclxuY29uc3QgTUFQQk9YX1RPS0VOID0gcHJvY2Vzcy5lbnYubWFwYm94S0VZXHJcblxyXG5jb25zdCBuYXZDb250cm9sU3R5bGUgPSB7XHJcbiAgcmlnaHQ6IDEwLFxyXG4gIHRvcDogMTAsXHJcbn1cclxuXHJcbmNvbnN0IE1hcGJveCA9ICh7IGxvY2F0aW9uUHJvcCB9KSA9PiB7XHJcbiAgLy9kZWZpbmluZyBTdGF0ZXNcclxuICBjb25zdCBbdmlld3BvcnQsIHNldFZpZXdwb3J0XSA9IHVzZVN0YXRlKHt9KVxyXG4gIGNvbnN0IG1hcFJlZiA9IHVzZVJlZigpXHJcbiAgY29uc3QgW2dlbywgc2V0R2VvXSA9IHVzZVN0YXRlKHt9KVxyXG4gIGNvbnN0IFttYXJrZXJzLCBzZXRNYXJrZXJzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtzaG93UG9wdXAsIHNldFNob3dwb3B1cF0gPSB1c2VTdGF0ZSgtMSlcclxuICBjb25zdCBbb3JpZ2luTmFtZSwgc2V0T3JpZ2luTmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFtkZXN0aW5hdGlvbk5hbWUsIHNldERlc3RpbmF0aW9uTmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUobG9jYXRpb25Qcm9wKVxyXG4gIGNvbnN0IFtyaWRlLCBzZXRSaWRlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAvLyBkZWZpbmluZyB0aGUgc3R5bGUgYW5kIHRoZSB3YXkgdGhlIGRpcmVjdGlvbiB3aWxsIGJlIHByZXNlbnRlZCBpbiB0aGUgbWFwXHJcbiAgY29uc3QgbGF5ZXJTdHlsZSA9IHtcclxuICAgIGlkOiBcInJvdXRlXCIsXHJcbiAgICB0eXBlOiBcImxpbmVcIixcclxuICAgIHNvdXJjZTogXCJyb3V0ZVwiLFxyXG4gICAgcGFpbnQ6IHtcclxuICAgICAgXCJsaW5lLWNvbG9yXCI6IFwiI2ZjZmMwM1wiLFxyXG4gICAgICBcImxpbmUtd2lkdGhcIjogNSxcclxuICAgIH0sXHJcbiAgICBsYXlvdXQ6IHtcclxuICAgICAgXCJsaW5lLWpvaW5cIjogXCJyb3VuZFwiLFxyXG4gICAgICBcImxpbmUtY2FwXCI6IFwicm91bmRcIixcclxuICAgIH0sXHJcbiAgfVxyXG5cclxuICAvLyBpdCB3aWxsIHJ1biBvbmNlIHRoZSBjb21wb25lbnQgcmUtcmVuZGVycyBhbmQgc3RvcCwgd2hpY2ggaXMgc2V0dGluZyBvdXIgY3VycmVudCBsb2NhdGlvbiBhbmQgc3RvcmUgdGhlbSBpbiB0aGUgc3RhdGVcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihmdW5jdGlvbiAocG9zaXRpb24pIHtcclxuICAgICAgc2V0Vmlld3BvcnQoe1xyXG4gICAgICAgIGxhdGl0dWRlOiBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsXHJcbiAgICAgICAgbG9uZ2l0dWRlOiBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlLFxyXG4gICAgICAgIHpvb206IDEwLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgIH0pXHJcbiAgICAgIHNldE1hcmtlcnMoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhdGl0dWRlOiBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsXHJcbiAgICAgICAgICBsb25naXR1ZGU6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSlcclxuXHJcbiAgICAgIGZldGNoRGF0YShwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlLCBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUpLnRoZW4oXHJcbiAgICAgICAgbmFtZSA9PiB7XHJcbiAgICAgICAgICBzZXRPcmlnaW5OYW1lKG5hbWUpXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICB9KVxyXG4gIH0sIFtdKVxyXG5cclxuICAvL21haW4gZnVuY3Rpb24gcmVzcG9uc2libGUgZm9yIGNoYW5naW5nIHRoZSB2aWV3IGluIHRoZSBtYXBcclxuICBjb25zdCBoYW5kbGVWaWV3cG9ydENoYW5nZSA9IG5ld1ZpZXdwb3J0ID0+IHtcclxuICAgIHNldFZpZXdwb3J0KG5ld1ZpZXdwb3J0KVxyXG4gIH1cclxuXHJcbiAgLy9mdW5jdGlvbiB0byByb3VuZCBhIG51bWJlclxyXG4gIGZ1bmN0aW9uIHJvdW5kKG51bSwgZGVjKSB7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiBNYXRoLnBvdygxMCwgZGVjKSkgLyBNYXRoLnBvdygxMCwgZGVjKVxyXG4gIH1cclxuXHJcbiAgLy8gZnVuY3Rpb24gaXMgY2FsbGVkIHdoZXZlciB0aGUgc2VhcmNoIGNvbXBvbmVudCBjaGFuZ2VzXHJcbiAgY29uc3QgaGFuZGxlR2VvY29kZXJWaWV3cG9ydENoYW5nZVRvID0gbmV3Vmlld3BvcnQgPT4ge1xyXG4gICAgY29uc3QgZ2VvY29kZXJEZWZhdWx0T3ZlcnJpZGVzID0ge1xyXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IG5ld1ZpZXdwb3J0LnRyYW5zaXRpb25EdXJhdGlvbixcclxuICAgIH1cclxuICAgIGlmICghbmV3Vmlld3BvcnQpIHJldHVyblxyXG4gICAgc2V0TWFya2VycyhbXHJcbiAgICAgIC4uLm1hcmtlcnMsXHJcbiAgICAgIHsgbGF0aXR1ZGU6IG5ld1ZpZXdwb3J0LmxhdGl0dWRlLCBsb25naXR1ZGU6IG5ld1ZpZXdwb3J0LmxvbmdpdHVkZSB9LFxyXG4gICAgXSlcclxuICAgIGRpcmVjdGlvbnNBcGkobWFya2VycywgbmV3Vmlld3BvcnQpLnRoZW4oZGF0YSA9PiBzZXRHZW8oZGF0YSkpXHJcblxyXG4gICAgZmV0Y2hEYXRhKG5ld1ZpZXdwb3J0LmxvbmdpdHVkZSwgbmV3Vmlld3BvcnQubGF0aXR1ZGUpLnRoZW4obmFtZSA9PlxyXG4gICAgICBzZXREZXN0aW5hdGlvbk5hbWUobmFtZSlcclxuICAgIClcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInpvb21cIiwgbmV3Vmlld3BvcnQpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0U2hvdyh0cnVlKVxyXG4gICAgfSwgbmV3Vmlld3BvcnQudHJhbnNpdGlvbkR1cmF0aW9uKVxyXG4gICAgcmV0dXJuIGhhbmRsZVZpZXdwb3J0Q2hhbmdlKHtcclxuICAgICAgLi4ubmV3Vmlld3BvcnQsXHJcbiAgICAgIHpvb206IG5ld1ZpZXdwb3J0Lnpvb20sXHJcbiAgICAgIC4uLmdlb2NvZGVyRGVmYXVsdE92ZXJyaWRlcyxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBjbGVhclNlYXJjaCA9ICgpID0+IHtcclxuICAgIHNldEdlbyhudWxsKVxyXG4gICAgc2V0TWFya2VycyhtYXJrZXJzLnNsaWNlKDAsIDEpKVxyXG4gICAgc2V0U2hvdyhmYWxzZSlcclxuICAgIHNldExvY2F0aW9uKFwiXCIpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXBcIj5cclxuICAgICAgICB7LyogcmVuZGVyaW5nIHRoZSBtYXAgaW4gdGhlIGJyb3dzZXIgKi99XHJcbiAgICAgICAgPFJlYWN0TWFwR0xcclxuICAgICAgICAgIHJlZj17bWFwUmVmfVxyXG4gICAgICAgICAgey4uLnZpZXdwb3J0fVxyXG4gICAgICAgICAgb25WaWV3cG9ydENoYW5nZT17aGFuZGxlVmlld3BvcnRDaGFuZ2V9XHJcbiAgICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj17TUFQQk9YX1RPS0VOfVxyXG4gICAgICAgICAgbWFwU3R5bGU9XCJtYXBib3g6Ly9zdHlsZXMvbWFwYm94L3N0cmVldHMtdjExXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7LyogbmF2aWdhdGlvbiBvbiB0aGUgdG9wLWxlZnQgY29ybmVyIG9mIHRoZSBtYXAgKi99XHJcbiAgICAgICAgICA8TmF2aWdhdGlvbkNvbnRyb2wgc3R5bGU9e25hdkNvbnRyb2xTdHlsZX0gLz5cclxuICAgICAgICAgIHsvKiByZW5kZXJpbmcgdGhlIGRpcmVjdGlvbnMgZnJvbSBvbmUgcG9pbnQgdG8gYW5vdGhlciAqL31cclxuICAgICAgICAgIHtnZW8gIT0gbnVsbCA/IChcclxuICAgICAgICAgICAgPFNvdXJjZVxyXG4gICAgICAgICAgICAgIGlkPVwicm91dGVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJnZW9qc29uXCJcclxuICAgICAgICAgICAgICBkYXRhPXt7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHt9LFxyXG4gICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJMaW5lU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBnZW8/Lmdlb21ldHJ5Py5jb29yZGluYXRlcyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMYXllciB7Li4ubGF5ZXJTdHlsZX0gLz5cclxuICAgICAgICAgICAgPC9Tb3VyY2U+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7bWFya2Vycy5sZW5ndGggJiZcclxuICAgICAgICAgICAgbWFya2Vycy5tYXAoKHBvaW50LCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgICA8TWFya2VyXHJcbiAgICAgICAgICAgICAgICAgIGxhdGl0dWRlPXtOdW1iZXIocG9pbnQ/LmxhdGl0dWRlKX1cclxuICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlPXtOdW1iZXIocG9pbnQ/LmxvbmdpdHVkZSl9XHJcbiAgICAgICAgICAgICAgICAgIG9mZnNldExlZnQ9ey0yMH1cclxuICAgICAgICAgICAgICAgICAgb2Zmc2V0VG9wPXstMTB9XHJcbiAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dwb3B1cChpZCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzQ4LzAwMDAwMC9tYXAtcGluLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9jYXRpb24gbWFya1wiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L01hcmtlcj5cclxuICAgICAgICAgICAgICAgIHtzaG93UG9wdXAgPT09IGlkICYmIChcclxuICAgICAgICAgICAgICAgICAgPFBvcHVwXHJcbiAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU9e3BvaW50Py5sYXRpdHVkZX1cclxuICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU9e3BvaW50Py5sb25naXR1ZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvcj1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd3BvcHVwKC0xKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMzAwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpZCA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+T3JpZ2luOiB7b3JpZ2luTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBEZXN0aW5hdGlvbjoge2Rlc3RpbmF0aW9uTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+ZGlzdGFuY2U6e3JvdW5kKGdlbz8uZGlzdGFuY2UgLyAxMDAwLCAyKX0ga208L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+ZHVyYXRpb25zOntyb3VuZChnZW8/LmR1cmF0aW9uIC8gNjAsIDIpfSBtaW48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9Qb3B1cD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvUmVhY3RNYXBHTD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiByZW5kZXJpbmcgdGhlIFNlYXJjaCBwbGFjZXMgZnVuY3Rpb25hbGl0eSAgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XHJcbiAgICAgICAgPEdlb2NvZGVyXHJcbiAgICAgICAgICBtYXBSZWY9e21hcFJlZn1cclxuICAgICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9e2hhbmRsZUdlb2NvZGVyVmlld3BvcnRDaGFuZ2VUb31cclxuICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXtNQVBCT1hfVE9LRU59XHJcbiAgICAgICAgICBwb3NpdGlvbj1cInRvcC1sZWZ0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY2hvb3NlIHlvdXIgZGVzdGluYXRpb25cIlxyXG4gICAgICAgICAgb25DbGVhcj17Y2xlYXJTZWFyY2h9XHJcbiAgICAgICAgICBpbnB1dFZhbHVlPXtsb2NhdGlvbiA/IGxvY2F0aW9uIDogXCJcIn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3cgPT0gdHJ1ZSA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzI0MHB4XSBoLVszMDBweF0gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcm91bmRlZCBwLTIgei0xMCBiZy13aGl0ZSBhYnNvbHV0ZSB0b3AtWzUycHhdIGxlZnQtWzEwcHhdXCI+XHJcbiAgICAgICAgICA8aDM+Q2hvb3NlIGEgcmlkZTwvaDM+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzgwJV0gaC1bNTBweF0gcm91bmRlZCAgbXQtNCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcC0yIGhvdmVyOmJnLWJsdWUtMzAwIGJnLWJsdWUtNDAwIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICBzZXRSaWRlKHJvdW5kKHJvdW5kKGdlbz8uZGlzdGFuY2UgLyAxMDAwLCAyKSAqIDIuNDUsIDIpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwPlViZXIgWDwvcD5cclxuICAgICAgICAgICAgPHA+UHJpY2U6IHtyb3VuZChyb3VuZChnZW8/LmRpc3RhbmNlIC8gMTAwMCwgMikgKiAyLjQ1LCAyKX0kPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzgwJV0gaC1bNTBweF0gcm91bmRlZCBtdC00IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwLTIgYmctYmx1ZS00MDAgaG92ZXI6YmctYmx1ZS0zMDAgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgIHNldFJpZGUocm91bmQocm91bmQoZ2VvPy5kaXN0YW5jZSAvIDEwMDAsIDIpICogMy42NywgMikpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHA+VWJlciBYUzwvcD5cclxuICAgICAgICAgICAgPHA+UHJpY2U6IHtyb3VuZChyb3VuZChnZW8/LmRpc3RhbmNlIC8gMTAwMCwgMikgKiAzLjY3LCAyKX0kPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzgwJV0gaC1bNTBweF0gcm91bmRlZCBtdC00IGZsZXgganVzdGlmeS1iZXR3ZWVuIHAtMiBpdGVtcy1jZW50ZXIgYmctYmx1ZS00MDAgaG92ZXI6YmctYmx1ZS0zMDAgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgIHNldFJpZGUocm91bmQocm91bmQoZ2VvPy5kaXN0YW5jZSAvIDEwMDAsIDIpICogNC41NSwgMikpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHA+VWJlciBFbDwvcD5cclxuICAgICAgICAgICAgPHA+UHJpY2U6IHtyb3VuZChyb3VuZChnZW8/LmRpc3RhbmNlIC8gMTAwMCwgMikgKiA0LjU1LCAyKX0kPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7cmlkZSAmJiAoXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0Qmx1ZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgcmlwcGxlPVwibGlnaHRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTRcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbCh0cnVlKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEdldCByaWRlIHtyaWRlfSRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIFwiXCJcclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxQYXlwYWxNb2RlbFxyXG4gICAgICAgIHNob3dNb2RhbD17c2hvd01vZGFsfVxyXG4gICAgICAgIHNldFNob3dNb2RhbD17c2V0U2hvd01vZGFsfVxyXG4gICAgICAgIHByaWNlPXtyaWRlfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXBib3hcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==