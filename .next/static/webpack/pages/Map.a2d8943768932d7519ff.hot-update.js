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

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null),
      ride = _useState8[0],
      setRide = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      showModal = _useState9[0],
      setShowModal = _useState9[1]; // defining the style and the way the direction will be presented in the map


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
          lineNumber: 131,
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
            lineNumber: 146,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
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
                width: 40,
                height: 40
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
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
            lineNumber: 154,
            columnNumber: 15
          }, _this);
        })]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
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
        inputValue: locationProp ? locationProp : ""
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
        lineNumber: 239,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 9
    }, _this) : "", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypalModel__WEBPACK_IMPORTED_MODULE_11__.default, {
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
    lineNumber: 120,
    columnNumber: 5
  }, _this);
};

_s(Mapbox, "UI1OydUh2amSm1uoSphaoEGR20U=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYXBib3guanMiXSwibmFtZXMiOlsiTUFQQk9YX1RPS0VOIiwicHJvY2VzcyIsIm5hdkNvbnRyb2xTdHlsZSIsInJpZ2h0IiwidG9wIiwiTWFwYm94IiwibG9jYXRpb25Qcm9wIiwidXNlU3RhdGUiLCJ2aWV3cG9ydCIsInNldFZpZXdwb3J0IiwibWFwUmVmIiwidXNlUmVmIiwiZ2VvIiwic2V0R2VvIiwibWFya2VycyIsInNldE1hcmtlcnMiLCJzaG93UG9wdXAiLCJzZXRTaG93cG9wdXAiLCJvcmlnaW5OYW1lIiwic2V0T3JpZ2luTmFtZSIsImRlc3RpbmF0aW9uTmFtZSIsInNldERlc3RpbmF0aW9uTmFtZSIsInNob3ciLCJzZXRTaG93IiwicmlkZSIsInNldFJpZGUiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJsYXllclN0eWxlIiwiaWQiLCJ0eXBlIiwic291cmNlIiwicGFpbnQiLCJsYXlvdXQiLCJ1c2VFZmZlY3QiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInBvc2l0aW9uIiwibGF0aXR1ZGUiLCJjb29yZHMiLCJsb25naXR1ZGUiLCJ6b29tIiwid2lkdGgiLCJoZWlnaHQiLCJmZXRjaERhdGEiLCJ0aGVuIiwibmFtZSIsImhhbmRsZVZpZXdwb3J0Q2hhbmdlIiwibmV3Vmlld3BvcnQiLCJyb3VuZCIsIm51bSIsImRlYyIsIk1hdGgiLCJwb3ciLCJoYW5kbGVHZW9jb2RlclZpZXdwb3J0Q2hhbmdlVG8iLCJnZW9jb2RlckRlZmF1bHRPdmVycmlkZXMiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJkaXJlY3Rpb25zQXBpIiwiZGF0YSIsInNldFRpbWVvdXQiLCJjbGVhclNlYXJjaCIsInNsaWNlIiwicHJvcGVydGllcyIsImdlb21ldHJ5IiwiY29vcmRpbmF0ZXMiLCJsZW5ndGgiLCJtYXAiLCJwb2ludCIsIk51bWJlciIsImRpc3RhbmNlIiwiZHVyYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQyxrR0FBckI7QUFFQSxJQUFNQyxlQUFlLEdBQUc7QUFDdEJDLE9BQUssRUFBRSxFQURlO0FBRXRCQyxLQUFHLEVBQUU7QUFGaUIsQ0FBeEI7O0FBS0EsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBc0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1COztBQUNuQztBQURtQyxrQkFFSEMsK0NBQVEsQ0FBQyxFQUFELENBRkw7QUFBQSxNQUU1QkMsUUFGNEI7QUFBQSxNQUVsQkMsV0FGa0I7O0FBR25DLE1BQU1DLE1BQU0sR0FBR0MsNkNBQU0sRUFBckI7O0FBSG1DLG1CQUliSiwrQ0FBUSxDQUFDLEVBQUQsQ0FKSztBQUFBLE1BSTVCSyxHQUo0QjtBQUFBLE1BSXZCQyxNQUp1Qjs7QUFBQSxtQkFLTE4sK0NBQVEsQ0FBQyxFQUFELENBTEg7QUFBQSxNQUs1Qk8sT0FMNEI7QUFBQSxNQUtuQkMsVUFMbUI7O0FBQUEsbUJBTURSLCtDQUFRLENBQUMsQ0FBQyxDQUFGLENBTlA7QUFBQSxNQU01QlMsU0FONEI7QUFBQSxNQU1qQkMsWUFOaUI7O0FBQUEsbUJBT0NWLCtDQUFRLENBQUMsRUFBRCxDQVBUO0FBQUEsTUFPNUJXLFVBUDRCO0FBQUEsTUFPaEJDLGFBUGdCOztBQUFBLG1CQVFXWiwrQ0FBUSxDQUFDLEVBQUQsQ0FSbkI7QUFBQSxNQVE1QmEsZUFSNEI7QUFBQSxNQVFYQyxrQkFSVzs7QUFBQSxtQkFTWGQsK0NBQVEsQ0FBQyxLQUFELENBVEc7QUFBQSxNQVM1QmUsSUFUNEI7QUFBQSxNQVN0QkMsT0FUc0I7O0FBQUEsbUJBVVhoQiwrQ0FBUSxDQUFDLElBQUQsQ0FWRztBQUFBLE1BVTVCaUIsSUFWNEI7QUFBQSxNQVV0QkMsT0FWc0I7O0FBQUEsbUJBV0RsQiwrQ0FBUSxDQUFDLEtBQUQsQ0FYUDtBQUFBLE1BVzVCbUIsU0FYNEI7QUFBQSxNQVdqQkMsWUFYaUIsa0JBYW5DOzs7QUFDQSxNQUFNQyxVQUFVLEdBQUc7QUFDakJDLE1BQUUsRUFBRSxPQURhO0FBRWpCQyxRQUFJLEVBQUUsTUFGVztBQUdqQkMsVUFBTSxFQUFFLE9BSFM7QUFJakJDLFNBQUssRUFBRTtBQUNMLG9CQUFjLFNBRFQ7QUFFTCxvQkFBYztBQUZULEtBSlU7QUFRakJDLFVBQU0sRUFBRTtBQUNOLG1CQUFhLE9BRFA7QUFFTixrQkFBWTtBQUZOO0FBUlMsR0FBbkIsQ0FkbUMsQ0E0Qm5DOztBQUNBQyxrREFBUyxDQUFDLFlBQU07QUFDZEMsYUFBUyxDQUFDQyxXQUFWLENBQXNCQyxrQkFBdEIsQ0FBeUMsVUFBVUMsUUFBVixFQUFvQjtBQUMzRDdCLGlCQUFXLENBQUM7QUFDVjhCLGdCQUFRLEVBQUVELFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQkQsUUFEaEI7QUFFVkUsaUJBQVMsRUFBRUgsUUFBUSxDQUFDRSxNQUFULENBQWdCQyxTQUZqQjtBQUdWQyxZQUFJLEVBQUUsRUFISTtBQUlWQyxhQUFLLEVBQUUsT0FKRztBQUtWQyxjQUFNLEVBQUU7QUFMRSxPQUFELENBQVg7QUFPQTdCLGdCQUFVLENBQUMsQ0FDVDtBQUNFd0IsZ0JBQVEsRUFBRUQsUUFBUSxDQUFDRSxNQUFULENBQWdCRCxRQUQ1QjtBQUVFRSxpQkFBUyxFQUFFSCxRQUFRLENBQUNFLE1BQVQsQ0FBZ0JDO0FBRjdCLE9BRFMsQ0FBRCxDQUFWO0FBT0FJLDhEQUFTLENBQUNQLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQkMsU0FBakIsRUFBNEJILFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQkQsUUFBNUMsQ0FBVCxDQUErRE8sSUFBL0QsQ0FDRSxVQUFBQyxJQUFJLEVBQUk7QUFDTjVCLHFCQUFhLENBQUM0QixJQUFELENBQWI7QUFDRCxPQUhIO0FBS0QsS0FwQkQ7QUFxQkQsR0F0QlEsRUFzQk4sRUF0Qk0sQ0FBVCxDQTdCbUMsQ0FxRG5DOztBQUNBLE1BQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQUMsV0FBVyxFQUFJO0FBQzFDeEMsZUFBVyxDQUFDd0MsV0FBRCxDQUFYO0FBQ0QsR0FGRCxDQXREbUMsQ0EwRG5DOzs7QUFDQSxXQUFTQyxLQUFULENBQWVDLEdBQWYsRUFBb0JDLEdBQXBCLEVBQXlCO0FBQ3ZCLFdBQU9DLElBQUksQ0FBQ0gsS0FBTCxDQUFXQyxHQUFHLEdBQUdFLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEVBQVQsRUFBYUYsR0FBYixDQUFqQixJQUFzQ0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsRUFBVCxFQUFhRixHQUFiLENBQTdDO0FBQ0QsR0E3RGtDLENBK0RuQzs7O0FBQ0EsTUFBTUcsOEJBQThCLEdBQUcsU0FBakNBLDhCQUFpQyxDQUFBTixXQUFXLEVBQUk7QUFDcEQsUUFBTU8sd0JBQXdCLEdBQUc7QUFDL0JDLHdCQUFrQixFQUFFUixXQUFXLENBQUNRO0FBREQsS0FBakM7QUFHQSxRQUFJLENBQUNSLFdBQUwsRUFBa0I7QUFDbEJsQyxjQUFVLHVLQUNMRCxPQURLLElBRVI7QUFBRXlCLGNBQVEsRUFBRVUsV0FBVyxDQUFDVixRQUF4QjtBQUFrQ0UsZUFBUyxFQUFFUSxXQUFXLENBQUNSO0FBQXpELEtBRlEsR0FBVjtBQUlBaUIsZ0VBQWEsQ0FBQzVDLE9BQUQsRUFBVW1DLFdBQVYsQ0FBYixDQUFvQ0gsSUFBcEMsQ0FBeUMsVUFBQWEsSUFBSTtBQUFBLGFBQUk5QyxNQUFNLENBQUM4QyxJQUFELENBQVY7QUFBQSxLQUE3QztBQUVBZCw0REFBUyxDQUFDSSxXQUFXLENBQUNSLFNBQWIsRUFBd0JRLFdBQVcsQ0FBQ1YsUUFBcEMsQ0FBVCxDQUF1RE8sSUFBdkQsQ0FBNEQsVUFBQUMsSUFBSTtBQUFBLGFBQzlEMUIsa0JBQWtCLENBQUMwQixJQUFELENBRDRDO0FBQUEsS0FBaEU7QUFJQWEsY0FBVSxDQUFDLFlBQU07QUFDZnJDLGFBQU8sQ0FBQyxJQUFELENBQVA7QUFDRCxLQUZTLEVBRVAwQixXQUFXLENBQUNRLGtCQUZMLENBQVY7QUFHQSxXQUFPVCxvQkFBb0IsaUNBQ3RCQyxXQURzQjtBQUV6QlAsVUFBSSxFQUFFTyxXQUFXLENBQUNQO0FBRk8sT0FHdEJjLHdCQUhzQixFQUEzQjtBQUtELEdBdkJEOztBQXlCQSxNQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCaEQsVUFBTSxDQUFDLElBQUQsQ0FBTjtBQUNBRSxjQUFVLENBQUNELE9BQU8sQ0FBQ2dELEtBQVIsQ0FBYyxDQUFkLEVBQWlCLENBQWpCLENBQUQsQ0FBVjtBQUNBdkMsV0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNELEdBSkQ7O0FBTUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsNkJBRUUsOERBQUMsaURBQUQ7QUFDRSxXQUFHLEVBQUViO0FBRFAsU0FFTUYsUUFGTjtBQUdFLHdCQUFnQixFQUFFd0Msb0JBSHBCO0FBSUUsNEJBQW9CLEVBQUVoRCxZQUp4QjtBQUtFLGdCQUFRLEVBQUMsb0NBTFg7QUFBQSxnQ0FRRSw4REFBQywyREFBRDtBQUFtQixlQUFLLEVBQUVFO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkYsRUFVR1UsR0FBRyxJQUFJLElBQVAsZ0JBQ0MsOERBQUMsZ0RBQUQ7QUFDRSxZQUFFLEVBQUMsT0FETDtBQUVFLGNBQUksRUFBQyxTQUZQO0FBR0UsY0FBSSxFQUFFO0FBQ0prQixnQkFBSSxFQUFFLFNBREY7QUFFSmlDLHNCQUFVLEVBQUUsRUFGUjtBQUdKQyxvQkFBUSxFQUFFO0FBQ1JsQyxrQkFBSSxFQUFFLFlBREU7QUFFUm1DLHlCQUFXLEVBQUVyRCxHQUFGLGFBQUVBLEdBQUYsd0NBQUVBLEdBQUcsQ0FBRW9ELFFBQVAsa0RBQUUsY0FBZUM7QUFGcEI7QUFITixXQUhSO0FBQUEsaUNBWUUsOERBQUMsK0NBQUQsb0JBQVdyQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGdCQWdCQyw2SUExQkosRUE2QkdkLE9BQU8sQ0FBQ29ELE1BQVIsSUFDQ3BELE9BQU8sQ0FBQ3FELEdBQVIsQ0FBWSxVQUFDQyxLQUFELEVBQVF2QyxFQUFSO0FBQUEsOEJBQ1Y7QUFBQSxvQ0FDRSw4REFBQyxnREFBRDtBQUNFLHNCQUFRLEVBQUV3QyxNQUFNLENBQUNELEtBQUQsYUFBQ0EsS0FBRCx1QkFBQ0EsS0FBSyxDQUFFN0IsUUFBUixDQURsQjtBQUVFLHVCQUFTLEVBQUU4QixNQUFNLENBQUNELEtBQUQsYUFBQ0EsS0FBRCx1QkFBQ0EsS0FBSyxDQUFFM0IsU0FBUixDQUZuQjtBQUdFLHdCQUFVLEVBQUUsQ0FBQyxFQUhmO0FBSUUsdUJBQVMsRUFBRSxDQUFDLEVBSmQ7QUFLRSx1QkFBUyxFQUFFLEtBTGI7QUFNRSxxQkFBTyxFQUFFO0FBQUEsdUJBQU14QixZQUFZLENBQUNZLEVBQUQsQ0FBbEI7QUFBQSxlQU5YO0FBQUEscUNBUUUsOERBQUMsbURBQUQ7QUFDRSxtQkFBRyxFQUFDLG9EQUROO0FBRUUsbUJBQUcsRUFBQyxlQUZOO0FBR0UscUJBQUssRUFBRSxFQUhUO0FBSUUsc0JBQU0sRUFBRTtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBZ0JHYixTQUFTLEtBQUthLEVBQWQsaUJBQ0MsOERBQUMsK0NBQUQ7QUFDRSxzQkFBUSxFQUFFdUMsS0FBRixhQUFFQSxLQUFGLHVCQUFFQSxLQUFLLENBQUU3QixRQURuQjtBQUVFLHVCQUFTLEVBQUU2QixLQUFGLGFBQUVBLEtBQUYsdUJBQUVBLEtBQUssQ0FBRTNCLFNBRnBCO0FBR0UseUJBQVcsRUFBRSxJQUhmO0FBSUUsMEJBQVksRUFBRSxJQUpoQjtBQUtFLG9CQUFNLEVBQUMsS0FMVDtBQU1FLHFCQUFPLEVBQUU7QUFBQSx1QkFBTXhCLFlBQVksQ0FBQyxDQUFDLENBQUYsQ0FBbEI7QUFBQSxlQU5YO0FBQUEscUNBUUU7QUFBSyxxQkFBSyxFQUFFO0FBQUUwQix1QkFBSyxFQUFFO0FBQVQsaUJBQVo7QUFBQSwwQkFDR2QsRUFBRSxLQUFLLENBQVAsZ0JBQ0M7QUFBQSx5Q0FBWVgsVUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREQsZ0JBR0M7QUFBQSwwQ0FDRTtBQUFBLGlEQUFrQkUsZUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBRUU7QUFBQSw0Q0FBYThCLEtBQUssQ0FBQyxDQUFBdEMsR0FBRyxTQUFILElBQUFBLEdBQUcsV0FBSCxZQUFBQSxHQUFHLENBQUUwRCxRQUFMLElBQWdCLElBQWpCLEVBQXVCLENBQXZCLENBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRixlQUdFO0FBQUEsNkNBQWNwQixLQUFLLENBQUMsQ0FBQXRDLEdBQUcsU0FBSCxJQUFBQSxHQUFHLFdBQUgsWUFBQUEsR0FBRyxDQUFFMkQsUUFBTCxJQUFnQixFQUFqQixFQUFxQixDQUFyQixDQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBakJKO0FBQUEsYUFBVTFDLEVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEVTtBQUFBLFNBQVosQ0E5Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBNkVFO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw2QkFDRSw4REFBQywwREFBRDtBQUNFLGNBQU0sRUFBRW5CLE1BRFY7QUFFRSx3QkFBZ0IsRUFBRTZDLDhCQUZwQjtBQUdFLDRCQUFvQixFQUFFdkQsWUFIeEI7QUFJRSxnQkFBUSxFQUFDLFVBSlg7QUFLRSxtQkFBVyxFQUFDLHlCQUxkO0FBTUUsZUFBTyxFQUFFNkQsV0FOWDtBQU9FLGtCQUFVLEVBQUV2RCxZQUFZLEdBQUdBLFlBQUgsR0FBa0I7QUFQNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE3RUYsRUF3RkdnQixJQUFJLElBQUksSUFBUixnQkFDQztBQUFLLGVBQVMsRUFBQywwR0FBZjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUNFLGlCQUFTLEVBQUMsbUhBRFo7QUFFRSxlQUFPLEVBQUU7QUFBQSxpQkFDUEcsT0FBTyxDQUFDeUIsS0FBSyxDQUFDQSxLQUFLLENBQUMsQ0FBQXRDLEdBQUcsU0FBSCxJQUFBQSxHQUFHLFdBQUgsWUFBQUEsR0FBRyxDQUFFMEQsUUFBTCxJQUFnQixJQUFqQixFQUF1QixDQUF2QixDQUFMLEdBQWlDLElBQWxDLEVBQXdDLENBQXhDLENBQU4sQ0FEQTtBQUFBLFNBRlg7QUFBQSxnQ0FNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORixlQU9FO0FBQUEsZ0NBQVdwQixLQUFLLENBQUNBLEtBQUssQ0FBQyxDQUFBdEMsR0FBRyxTQUFILElBQUFBLEdBQUcsV0FBSCxZQUFBQSxHQUFHLENBQUUwRCxRQUFMLElBQWdCLElBQWpCLEVBQXVCLENBQXZCLENBQUwsR0FBaUMsSUFBbEMsRUFBd0MsQ0FBeEMsQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBV0U7QUFDRSxpQkFBUyxFQUFDLGtIQURaO0FBRUUsZUFBTyxFQUFFO0FBQUEsaUJBQ1A3QyxPQUFPLENBQUN5QixLQUFLLENBQUNBLEtBQUssQ0FBQyxDQUFBdEMsR0FBRyxTQUFILElBQUFBLEdBQUcsV0FBSCxZQUFBQSxHQUFHLENBQUUwRCxRQUFMLElBQWdCLElBQWpCLEVBQXVCLENBQXZCLENBQUwsR0FBaUMsSUFBbEMsRUFBd0MsQ0FBeEMsQ0FBTixDQURBO0FBQUEsU0FGWDtBQUFBLGdDQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GLGVBT0U7QUFBQSxnQ0FBV3BCLEtBQUssQ0FBQ0EsS0FBSyxDQUFDLENBQUF0QyxHQUFHLFNBQUgsSUFBQUEsR0FBRyxXQUFILFlBQUFBLEdBQUcsQ0FBRTBELFFBQUwsSUFBZ0IsSUFBakIsRUFBdUIsQ0FBdkIsQ0FBTCxHQUFpQyxJQUFsQyxFQUF3QyxDQUF4QyxDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEYsZUFvQkU7QUFDRSxpQkFBUyxFQUFDLGtIQURaO0FBRUUsZUFBTyxFQUFFO0FBQUEsaUJBQ1A3QyxPQUFPLENBQUN5QixLQUFLLENBQUNBLEtBQUssQ0FBQyxDQUFBdEMsR0FBRyxTQUFILElBQUFBLEdBQUcsV0FBSCxZQUFBQSxHQUFHLENBQUUwRCxRQUFMLElBQWdCLElBQWpCLEVBQXVCLENBQXZCLENBQUwsR0FBaUMsSUFBbEMsRUFBd0MsQ0FBeEMsQ0FBTixDQURBO0FBQUEsU0FGWDtBQUFBLGdDQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GLGVBT0U7QUFBQSxnQ0FBV3BCLEtBQUssQ0FBQ0EsS0FBSyxDQUFDLENBQUF0QyxHQUFHLFNBQUgsSUFBQUEsR0FBRyxXQUFILFlBQUFBLEdBQUcsQ0FBRTBELFFBQUwsSUFBZ0IsSUFBakIsRUFBdUIsQ0FBdkIsQ0FBTCxHQUFpQyxJQUFsQyxFQUF3QyxDQUF4QyxDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcEJGLEVBNkJHOUMsSUFBSSxpQkFDSCw4REFBQyxxRUFBRDtBQUNFLGFBQUssRUFBQyxXQURSO0FBRUUsWUFBSSxFQUFDLFFBRlA7QUFHRSxjQUFNLEVBQUMsT0FIVDtBQUlFLGlCQUFTLEVBQUMsTUFKWjtBQUtFLGVBQU8sRUFBRTtBQUFBLGlCQUFNRyxZQUFZLENBQUMsSUFBRCxDQUFsQjtBQUFBLFNBTFg7QUFBQSxnQ0FPWUgsSUFQWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE5Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsR0EyQ0MsRUFuSUosZUFzSUUsOERBQUMsa0RBQUQ7QUFDRSxlQUFTLEVBQUVFLFNBRGI7QUFFRSxrQkFBWSxFQUFFQyxZQUZoQjtBQUdFLFdBQUssRUFBRUg7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdElGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOElELENBN09EOztHQUFNbkIsTTs7S0FBQUEsTTtBQStPTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9NYXAuYTJkODk0Mzc2ODkzMmQ3NTE5ZmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIm1hcGJveC1nbC9kaXN0L21hcGJveC1nbC5jc3NcIlxyXG5pbXBvcnQgXCJyZWFjdC1tYXAtZ2wtZ2VvY29kZXIvZGlzdC9tYXBib3gtZ2wtZ2VvY29kZXIuY3NzXCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXHJcbmltcG9ydCBSZWFjdE1hcEdMLCB7XHJcbiAgTWFya2VyLFxyXG4gIFBvcHVwLFxyXG4gIE5hdmlnYXRpb25Db250cm9sLFxyXG4gIFNvdXJjZSxcclxuICBMYXllcixcclxufSBmcm9tIFwicmVhY3QtbWFwLWdsXCJcclxuaW1wb3J0IEdlb2NvZGVyIGZyb20gXCJyZWFjdC1tYXAtZ2wtZ2VvY29kZXJcIlxyXG5pbXBvcnQgeyBmZXRjaERhdGEsIGRpcmVjdGlvbnNBcGkgfSBmcm9tIFwiLi4vdXNlRmV0Y2hEYXRhXCJcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0J1dHRvblwiXHJcbmltcG9ydCBQYXlwYWxNb2RlbCBmcm9tIFwiLi9wYXlwYWxNb2RlbFwiXHJcblxyXG5jb25zdCBNQVBCT1hfVE9LRU4gPSBwcm9jZXNzLmVudi5tYXBib3hLRVlcclxuXHJcbmNvbnN0IG5hdkNvbnRyb2xTdHlsZSA9IHtcclxuICByaWdodDogMTAsXHJcbiAgdG9wOiAxMCxcclxufVxyXG5cclxuY29uc3QgTWFwYm94ID0gKHsgbG9jYXRpb25Qcm9wIH0pID0+IHtcclxuICAvL2RlZmluaW5nIFN0YXRlc1xyXG4gIGNvbnN0IFt2aWV3cG9ydCwgc2V0Vmlld3BvcnRdID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3QgbWFwUmVmID0gdXNlUmVmKClcclxuICBjb25zdCBbZ2VvLCBzZXRHZW9dID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3QgW21hcmtlcnMsIHNldE1hcmtlcnNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW3Nob3dQb3B1cCwgc2V0U2hvd3BvcHVwXSA9IHVzZVN0YXRlKC0xKVxyXG4gIGNvbnN0IFtvcmlnaW5OYW1lLCBzZXRPcmlnaW5OYW1lXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW2Rlc3RpbmF0aW9uTmFtZSwgc2V0RGVzdGluYXRpb25OYW1lXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3JpZGUsIHNldFJpZGVdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIC8vIGRlZmluaW5nIHRoZSBzdHlsZSBhbmQgdGhlIHdheSB0aGUgZGlyZWN0aW9uIHdpbGwgYmUgcHJlc2VudGVkIGluIHRoZSBtYXBcclxuICBjb25zdCBsYXllclN0eWxlID0ge1xyXG4gICAgaWQ6IFwicm91dGVcIixcclxuICAgIHR5cGU6IFwibGluZVwiLFxyXG4gICAgc291cmNlOiBcInJvdXRlXCIsXHJcbiAgICBwYWludDoge1xyXG4gICAgICBcImxpbmUtY29sb3JcIjogXCIjZmNmYzAzXCIsXHJcbiAgICAgIFwibGluZS13aWR0aFwiOiA1LFxyXG4gICAgfSxcclxuICAgIGxheW91dDoge1xyXG4gICAgICBcImxpbmUtam9pblwiOiBcInJvdW5kXCIsXHJcbiAgICAgIFwibGluZS1jYXBcIjogXCJyb3VuZFwiLFxyXG4gICAgfSxcclxuICB9XHJcblxyXG4gIC8vIGl0IHdpbGwgcnVuIG9uY2UgdGhlIGNvbXBvbmVudCByZS1yZW5kZXJzIGFuZCBzdG9wLCB3aGljaCBpcyBzZXR0aW5nIG91ciBjdXJyZW50IGxvY2F0aW9uIGFuZCBzdG9yZSB0aGVtIGluIHRoZSBzdGF0ZVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGZ1bmN0aW9uIChwb3NpdGlvbikge1xyXG4gICAgICBzZXRWaWV3cG9ydCh7XHJcbiAgICAgICAgbGF0aXR1ZGU6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcclxuICAgICAgICBsb25naXR1ZGU6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsXHJcbiAgICAgICAgem9vbTogMTAsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwdndcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgfSlcclxuICAgICAgc2V0TWFya2VycyhbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGF0aXR1ZGU6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcclxuICAgICAgICAgIGxvbmdpdHVkZTogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdKVxyXG5cclxuICAgICAgZmV0Y2hEYXRhKHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsIHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSkudGhlbihcclxuICAgICAgICBuYW1lID0+IHtcclxuICAgICAgICAgIHNldE9yaWdpbk5hbWUobmFtZSlcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIC8vbWFpbiBmdW5jdGlvbiByZXNwb25zaWJsZSBmb3IgY2hhbmdpbmcgdGhlIHZpZXcgaW4gdGhlIG1hcFxyXG4gIGNvbnN0IGhhbmRsZVZpZXdwb3J0Q2hhbmdlID0gbmV3Vmlld3BvcnQgPT4ge1xyXG4gICAgc2V0Vmlld3BvcnQobmV3Vmlld3BvcnQpXHJcbiAgfVxyXG5cclxuICAvL2Z1bmN0aW9uIHRvIHJvdW5kIGEgbnVtYmVyXHJcbiAgZnVuY3Rpb24gcm91bmQobnVtLCBkZWMpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIE1hdGgucG93KDEwLCBkZWMpKSAvIE1hdGgucG93KDEwLCBkZWMpXHJcbiAgfVxyXG5cclxuICAvLyBmdW5jdGlvbiBpcyBjYWxsZWQgd2hldmVyIHRoZSBzZWFyY2ggY29tcG9uZW50IGNoYW5nZXNcclxuICBjb25zdCBoYW5kbGVHZW9jb2RlclZpZXdwb3J0Q2hhbmdlVG8gPSBuZXdWaWV3cG9ydCA9PiB7XHJcbiAgICBjb25zdCBnZW9jb2RlckRlZmF1bHRPdmVycmlkZXMgPSB7XHJcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogbmV3Vmlld3BvcnQudHJhbnNpdGlvbkR1cmF0aW9uLFxyXG4gICAgfVxyXG4gICAgaWYgKCFuZXdWaWV3cG9ydCkgcmV0dXJuXHJcbiAgICBzZXRNYXJrZXJzKFtcclxuICAgICAgLi4ubWFya2VycyxcclxuICAgICAgeyBsYXRpdHVkZTogbmV3Vmlld3BvcnQubGF0aXR1ZGUsIGxvbmdpdHVkZTogbmV3Vmlld3BvcnQubG9uZ2l0dWRlIH0sXHJcbiAgICBdKVxyXG4gICAgZGlyZWN0aW9uc0FwaShtYXJrZXJzLCBuZXdWaWV3cG9ydCkudGhlbihkYXRhID0+IHNldEdlbyhkYXRhKSlcclxuXHJcbiAgICBmZXRjaERhdGEobmV3Vmlld3BvcnQubG9uZ2l0dWRlLCBuZXdWaWV3cG9ydC5sYXRpdHVkZSkudGhlbihuYW1lID0+XHJcbiAgICAgIHNldERlc3RpbmF0aW9uTmFtZShuYW1lKVxyXG4gICAgKVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRTaG93KHRydWUpXHJcbiAgICB9LCBuZXdWaWV3cG9ydC50cmFuc2l0aW9uRHVyYXRpb24pXHJcbiAgICByZXR1cm4gaGFuZGxlVmlld3BvcnRDaGFuZ2Uoe1xyXG4gICAgICAuLi5uZXdWaWV3cG9ydCxcclxuICAgICAgem9vbTogbmV3Vmlld3BvcnQuem9vbSxcclxuICAgICAgLi4uZ2VvY29kZXJEZWZhdWx0T3ZlcnJpZGVzLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsZWFyU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgc2V0R2VvKG51bGwpXHJcbiAgICBzZXRNYXJrZXJzKG1hcmtlcnMuc2xpY2UoMCwgMSkpXHJcbiAgICBzZXRTaG93KGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwXCI+XHJcbiAgICAgICAgey8qIHJlbmRlcmluZyB0aGUgbWFwIGluIHRoZSBicm93c2VyICovfVxyXG4gICAgICAgIDxSZWFjdE1hcEdMXHJcbiAgICAgICAgICByZWY9e21hcFJlZn1cclxuICAgICAgICAgIHsuLi52aWV3cG9ydH1cclxuICAgICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9e2hhbmRsZVZpZXdwb3J0Q2hhbmdlfVxyXG4gICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49e01BUEJPWF9UT0tFTn1cclxuICAgICAgICAgIG1hcFN0eWxlPVwibWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXYxMVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgey8qIG5hdmlnYXRpb24gb24gdGhlIHRvcC1sZWZ0IGNvcm5lciBvZiB0aGUgbWFwICovfVxyXG4gICAgICAgICAgPE5hdmlnYXRpb25Db250cm9sIHN0eWxlPXtuYXZDb250cm9sU3R5bGV9IC8+XHJcbiAgICAgICAgICB7LyogcmVuZGVyaW5nIHRoZSBkaXJlY3Rpb25zIGZyb20gb25lIHBvaW50IHRvIGFub3RoZXIgKi99XHJcbiAgICAgICAgICB7Z2VvICE9IG51bGwgPyAoXHJcbiAgICAgICAgICAgIDxTb3VyY2VcclxuICAgICAgICAgICAgICBpZD1cInJvdXRlXCJcclxuICAgICAgICAgICAgICB0eXBlPVwiZ2VvanNvblwiXHJcbiAgICAgICAgICAgICAgZGF0YT17e1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7fSxcclxuICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTGluZVN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogZ2VvPy5nZW9tZXRyeT8uY29vcmRpbmF0ZXMsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGF5ZXIgey4uLmxheWVyU3R5bGV9IC8+XHJcbiAgICAgICAgICAgIDwvU291cmNlPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAge21hcmtlcnMubGVuZ3RoICYmXHJcbiAgICAgICAgICAgIG1hcmtlcnMubWFwKChwb2ludCwgaWQpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aWR9PlxyXG4gICAgICAgICAgICAgICAgPE1hcmtlclxyXG4gICAgICAgICAgICAgICAgICBsYXRpdHVkZT17TnVtYmVyKHBvaW50Py5sYXRpdHVkZSl9XHJcbiAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZT17TnVtYmVyKHBvaW50Py5sb25naXR1ZGUpfVxyXG4gICAgICAgICAgICAgICAgICBvZmZzZXRMZWZ0PXstMjB9XHJcbiAgICAgICAgICAgICAgICAgIG9mZnNldFRvcD17LTEwfVxyXG4gICAgICAgICAgICAgICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93cG9wdXAoaWQpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzQ4LzAwMDAwMC9tYXAtcGluLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9jYXRpb24gbWFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L01hcmtlcj5cclxuICAgICAgICAgICAgICAgIHtzaG93UG9wdXAgPT09IGlkICYmIChcclxuICAgICAgICAgICAgICAgICAgPFBvcHVwXHJcbiAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU9e3BvaW50Py5sYXRpdHVkZX1cclxuICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU9e3BvaW50Py5sb25naXR1ZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvcj1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd3BvcHVwKC0xKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMzAwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpZCA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+T3JpZ2luOiB7b3JpZ2luTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBEZXN0aW5hdGlvbjoge2Rlc3RpbmF0aW9uTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+ZGlzdGFuY2U6e3JvdW5kKGdlbz8uZGlzdGFuY2UgLyAxMDAwLCAyKX0ga208L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+ZHVyYXRpb25zOntyb3VuZChnZW8/LmR1cmF0aW9uIC8gNjAsIDIpfSBtaW48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9Qb3B1cD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvUmVhY3RNYXBHTD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiByZW5kZXJpbmcgdGhlIFNlYXJjaCBwbGFjZXMgZnVuY3Rpb25hbGl0eSAgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XHJcbiAgICAgICAgPEdlb2NvZGVyXHJcbiAgICAgICAgICBtYXBSZWY9e21hcFJlZn1cclxuICAgICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9e2hhbmRsZUdlb2NvZGVyVmlld3BvcnRDaGFuZ2VUb31cclxuICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXtNQVBCT1hfVE9LRU59XHJcbiAgICAgICAgICBwb3NpdGlvbj1cInRvcC1sZWZ0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY2hvb3NlIHlvdXIgZGVzdGluYXRpb25cIlxyXG4gICAgICAgICAgb25DbGVhcj17Y2xlYXJTZWFyY2h9XHJcbiAgICAgICAgICBpbnB1dFZhbHVlPXtsb2NhdGlvblByb3AgPyBsb2NhdGlvblByb3AgOiBcIlwifVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvdyA9PSB0cnVlID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bMjQwcHhdIGgtWzMwMHB4XSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciByb3VuZGVkIHAtMiB6LTEwIGJnLXdoaXRlIGFic29sdXRlIHRvcC1bNTJweF0gbGVmdC1bMTBweF1cIj5cclxuICAgICAgICAgIDxoMz5DaG9vc2UgYSByaWRlPC9oMz5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bODAlXSBoLVs1MHB4XSByb3VuZGVkICBtdC00IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwLTIgaG92ZXI6YmctYmx1ZS0zMDAgYmctYmx1ZS00MDAgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgIHNldFJpZGUocm91bmQocm91bmQoZ2VvPy5kaXN0YW5jZSAvIDEwMDAsIDIpICogMi40NSwgMikpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHA+VWJlciBYPC9wPlxyXG4gICAgICAgICAgICA8cD5QcmljZToge3JvdW5kKHJvdW5kKGdlbz8uZGlzdGFuY2UgLyAxMDAwLCAyKSAqIDIuNDUsIDIpfSQ8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bODAlXSBoLVs1MHB4XSByb3VuZGVkIG10LTQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHAtMiBiZy1ibHVlLTQwMCBob3ZlcjpiZy1ibHVlLTMwMCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgc2V0UmlkZShyb3VuZChyb3VuZChnZW8/LmRpc3RhbmNlIC8gMTAwMCwgMikgKiAzLjY3LCAyKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cD5VYmVyIFhTPC9wPlxyXG4gICAgICAgICAgICA8cD5QcmljZToge3JvdW5kKHJvdW5kKGdlbz8uZGlzdGFuY2UgLyAxMDAwLCAyKSAqIDMuNjcsIDIpfSQ8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bODAlXSBoLVs1MHB4XSByb3VuZGVkIG10LTQgZmxleCBqdXN0aWZ5LWJldHdlZW4gcC0yIGl0ZW1zLWNlbnRlciBiZy1ibHVlLTQwMCBob3ZlcjpiZy1ibHVlLTMwMCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgc2V0UmlkZShyb3VuZChyb3VuZChnZW8/LmRpc3RhbmNlIC8gMTAwMCwgMikgKiA0LjU1LCAyKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cD5VYmVyIEVsPC9wPlxyXG4gICAgICAgICAgICA8cD5QcmljZToge3JvdW5kKHJvdW5kKGdlbz8uZGlzdGFuY2UgLyAxMDAwLCAyKSAqIDQuNTUsIDIpfSQ8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtyaWRlICYmIChcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNvbG9yPVwibGlnaHRCbHVlXCJcclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICByaXBwbGU9XCJsaWdodFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKHRydWUpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgR2V0IHJpZGUge3JpZGV9JFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPFBheXBhbE1vZGVsXHJcbiAgICAgICAgc2hvd01vZGFsPXtzaG93TW9kYWx9XHJcbiAgICAgICAgc2V0U2hvd01vZGFsPXtzZXRTaG93TW9kYWx9XHJcbiAgICAgICAgcHJpY2U9e3JpZGV9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcGJveFxyXG4iXSwic291cmNlUm9vdCI6IiJ9