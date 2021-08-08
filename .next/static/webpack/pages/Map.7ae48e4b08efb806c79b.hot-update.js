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
  console.log(locationProp); //defining States

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
          lineNumber: 135,
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
            lineNumber: 150,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
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
                lineNumber: 167,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
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
                  lineNumber: 185,
                  columnNumber: 25
                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: [" Destination: ", destinationName]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 188,
                    columnNumber: 27
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: ["distance:", round((geo === null || geo === void 0 ? void 0 : geo.distance) / 1000, 2), " km"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 189,
                    columnNumber: 27
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: ["durations:", round((geo === null || geo === void 0 ? void 0 : geo.duration) / 60, 2), " min"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 190,
                    columnNumber: 27
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 25
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 19
            }, _this)]
          }, id, true, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 15
          }, _this);
        })]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
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
        lineNumber: 202,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 7
    }, _this), show == true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-[240px] h-[300px] flex flex-col items-center rounded p-2 z-10 bg-white absolute top-[52px] left-[10px]",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Choose a ride"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 214,
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
          lineNumber: 221,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Price: ", round(round((geo === null || geo === void 0 ? void 0 : geo.distance) / 1000, 2) * 2.45, 2), "$"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 215,
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
          lineNumber: 230,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Price: ", round(round((geo === null || geo === void 0 ? void 0 : geo.distance) / 1000, 2) * 3.67, 2), "$"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 224,
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
          lineNumber: 239,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Price: ", round(round((geo === null || geo === void 0 ? void 0 : geo.distance) / 1000, 2) * 4.55, 2), "$"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 233,
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
        lineNumber: 243,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 9
    }, _this) : "", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypalModel__WEBPACK_IMPORTED_MODULE_11__.default, {
      showModal: showModal,
      setShowModal: setShowModal,
      price: ride
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 124,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYXBib3guanMiXSwibmFtZXMiOlsiTUFQQk9YX1RPS0VOIiwicHJvY2VzcyIsIm5hdkNvbnRyb2xTdHlsZSIsInJpZ2h0IiwidG9wIiwiTWFwYm94IiwibG9jYXRpb25Qcm9wIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwidmlld3BvcnQiLCJzZXRWaWV3cG9ydCIsIm1hcFJlZiIsInVzZVJlZiIsImdlbyIsInNldEdlbyIsIm1hcmtlcnMiLCJzZXRNYXJrZXJzIiwic2hvd1BvcHVwIiwic2V0U2hvd3BvcHVwIiwib3JpZ2luTmFtZSIsInNldE9yaWdpbk5hbWUiLCJkZXN0aW5hdGlvbk5hbWUiLCJzZXREZXN0aW5hdGlvbk5hbWUiLCJzaG93Iiwic2V0U2hvdyIsImxvY2F0aW9uIiwic2V0TG9jYXRpb24iLCJyaWRlIiwic2V0UmlkZSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImxheWVyU3R5bGUiLCJpZCIsInR5cGUiLCJzb3VyY2UiLCJwYWludCIsImxheW91dCIsInVzZUVmZmVjdCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwicG9zaXRpb24iLCJsYXRpdHVkZSIsImNvb3JkcyIsImxvbmdpdHVkZSIsInpvb20iLCJ3aWR0aCIsImhlaWdodCIsImZldGNoRGF0YSIsInRoZW4iLCJuYW1lIiwiaGFuZGxlVmlld3BvcnRDaGFuZ2UiLCJuZXdWaWV3cG9ydCIsInJvdW5kIiwibnVtIiwiZGVjIiwiTWF0aCIsInBvdyIsImhhbmRsZUdlb2NvZGVyVmlld3BvcnRDaGFuZ2VUbyIsImdlb2NvZGVyRGVmYXVsdE92ZXJyaWRlcyIsInRyYW5zaXRpb25EdXJhdGlvbiIsImRpcmVjdGlvbnNBcGkiLCJkYXRhIiwic2V0VGltZW91dCIsImNsZWFyU2VhcmNoIiwic2xpY2UiLCJwcm9wZXJ0aWVzIiwiZ2VvbWV0cnkiLCJjb29yZGluYXRlcyIsImxlbmd0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QUNILDhEQUFDLHFFQUFEO0FBQ0UsYUFBSyxFQUFDLFdBRFI7QUFFRSxZQUFJLEVBQUMsUUFGUDtBQUdFLGNBQU0sRUFBQyxPQUhUO0FBSUUsaUJBQVMsRUFBQyxNQUpaO0FBS0UsZUFBTyxFQUFFO0FBQUEsaUJBQU1HLFlBQVksQ0FBQyxJQUFELENBQWxCO0FBQUEsU0FMWDtBQUFBLGdDQU9ZSCxJQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTlCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxHQTJDQyxFQW5JSixlQXNJRSw4REFBQyxrREFBRDtBQUNFLGVBQVMsRUFBRUUsU0FEYjtBQUVFLGtCQUFZLEVBQUVDLFlBRmhCO0FBR0UsV0FBSyxFQUFFSDtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0SUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4SUQsQ0FqUEQ7O0dBQU12QixNOztLQUFBQSxNO0FBbVBOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL01hcC43YWU0OGU0YjA4ZWZiODA2Yzc5Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwibWFwYm94LWdsL2Rpc3QvbWFwYm94LWdsLmNzc1wiXHJcbmltcG9ydCBcInJlYWN0LW1hcC1nbC1nZW9jb2Rlci9kaXN0L21hcGJveC1nbC1nZW9jb2Rlci5jc3NcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuaW1wb3J0IFJlYWN0TWFwR0wsIHtcclxuICBNYXJrZXIsXHJcbiAgUG9wdXAsXHJcbiAgTmF2aWdhdGlvbkNvbnRyb2wsXHJcbiAgU291cmNlLFxyXG4gIExheWVyLFxyXG59IGZyb20gXCJyZWFjdC1tYXAtZ2xcIlxyXG5pbXBvcnQgR2VvY29kZXIgZnJvbSBcInJlYWN0LW1hcC1nbC1nZW9jb2RlclwiXHJcbmltcG9ydCB7IGZldGNoRGF0YSwgZGlyZWN0aW9uc0FwaSB9IGZyb20gXCIuLi91c2VGZXRjaERhdGFcIlxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQnV0dG9uXCJcclxuaW1wb3J0IFBheXBhbE1vZGVsIGZyb20gXCIuL3BheXBhbE1vZGVsXCJcclxuXHJcbmNvbnN0IE1BUEJPWF9UT0tFTiA9IHByb2Nlc3MuZW52Lm1hcGJveEtFWVxyXG5cclxuY29uc3QgbmF2Q29udHJvbFN0eWxlID0ge1xyXG4gIHJpZ2h0OiAxMCxcclxuICB0b3A6IDEwLFxyXG59XHJcblxyXG5jb25zdCBNYXBib3ggPSAoeyBsb2NhdGlvblByb3AgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGxvY2F0aW9uUHJvcClcclxuICAvL2RlZmluaW5nIFN0YXRlc1xyXG4gIGNvbnN0IFt2aWV3cG9ydCwgc2V0Vmlld3BvcnRdID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3QgbWFwUmVmID0gdXNlUmVmKClcclxuICBjb25zdCBbZ2VvLCBzZXRHZW9dID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3QgW21hcmtlcnMsIHNldE1hcmtlcnNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW3Nob3dQb3B1cCwgc2V0U2hvd3BvcHVwXSA9IHVzZVN0YXRlKC0xKVxyXG4gIGNvbnN0IFtvcmlnaW5OYW1lLCBzZXRPcmlnaW5OYW1lXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW2Rlc3RpbmF0aW9uTmFtZSwgc2V0RGVzdGluYXRpb25OYW1lXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShsb2NhdGlvblByb3ApXHJcbiAgY29uc3QgW3JpZGUsIHNldFJpZGVdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIC8vIGRlZmluaW5nIHRoZSBzdHlsZSBhbmQgdGhlIHdheSB0aGUgZGlyZWN0aW9uIHdpbGwgYmUgcHJlc2VudGVkIGluIHRoZSBtYXBcclxuICBjb25zdCBsYXllclN0eWxlID0ge1xyXG4gICAgaWQ6IFwicm91dGVcIixcclxuICAgIHR5cGU6IFwibGluZVwiLFxyXG4gICAgc291cmNlOiBcInJvdXRlXCIsXHJcbiAgICBwYWludDoge1xyXG4gICAgICBcImxpbmUtY29sb3JcIjogXCIjZmNmYzAzXCIsXHJcbiAgICAgIFwibGluZS13aWR0aFwiOiA1LFxyXG4gICAgfSxcclxuICAgIGxheW91dDoge1xyXG4gICAgICBcImxpbmUtam9pblwiOiBcInJvdW5kXCIsXHJcbiAgICAgIFwibGluZS1jYXBcIjogXCJyb3VuZFwiLFxyXG4gICAgfSxcclxuICB9XHJcblxyXG4gIC8vIGl0IHdpbGwgcnVuIG9uY2UgdGhlIGNvbXBvbmVudCByZS1yZW5kZXJzIGFuZCBzdG9wLCB3aGljaCBpcyBzZXR0aW5nIG91ciBjdXJyZW50IGxvY2F0aW9uIGFuZCBzdG9yZSB0aGVtIGluIHRoZSBzdGF0ZVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGZ1bmN0aW9uIChwb3NpdGlvbikge1xyXG4gICAgICBzZXRWaWV3cG9ydCh7XHJcbiAgICAgICAgbGF0aXR1ZGU6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcclxuICAgICAgICBsb25naXR1ZGU6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsXHJcbiAgICAgICAgem9vbTogMTAsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwdndcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgfSlcclxuICAgICAgc2V0TWFya2VycyhbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGF0aXR1ZGU6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcclxuICAgICAgICAgIGxvbmdpdHVkZTogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdKVxyXG5cclxuICAgICAgZmV0Y2hEYXRhKHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsIHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSkudGhlbihcclxuICAgICAgICBuYW1lID0+IHtcclxuICAgICAgICAgIHNldE9yaWdpbk5hbWUobmFtZSlcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIC8vbWFpbiBmdW5jdGlvbiByZXNwb25zaWJsZSBmb3IgY2hhbmdpbmcgdGhlIHZpZXcgaW4gdGhlIG1hcFxyXG4gIGNvbnN0IGhhbmRsZVZpZXdwb3J0Q2hhbmdlID0gbmV3Vmlld3BvcnQgPT4ge1xyXG4gICAgc2V0Vmlld3BvcnQobmV3Vmlld3BvcnQpXHJcbiAgfVxyXG5cclxuICAvL2Z1bmN0aW9uIHRvIHJvdW5kIGEgbnVtYmVyXHJcbiAgZnVuY3Rpb24gcm91bmQobnVtLCBkZWMpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIE1hdGgucG93KDEwLCBkZWMpKSAvIE1hdGgucG93KDEwLCBkZWMpXHJcbiAgfVxyXG5cclxuICAvLyBmdW5jdGlvbiBpcyBjYWxsZWQgd2hldmVyIHRoZSBzZWFyY2ggY29tcG9uZW50IGNoYW5nZXNcclxuICBjb25zdCBoYW5kbGVHZW9jb2RlclZpZXdwb3J0Q2hhbmdlVG8gPSBuZXdWaWV3cG9ydCA9PiB7XHJcbiAgICBjb25zdCBnZW9jb2RlckRlZmF1bHRPdmVycmlkZXMgPSB7XHJcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogbmV3Vmlld3BvcnQudHJhbnNpdGlvbkR1cmF0aW9uLFxyXG4gICAgfVxyXG4gICAgaWYgKCFuZXdWaWV3cG9ydCkgcmV0dXJuXHJcbiAgICBzZXRNYXJrZXJzKFtcclxuICAgICAgLi4ubWFya2VycyxcclxuICAgICAgeyBsYXRpdHVkZTogbmV3Vmlld3BvcnQubGF0aXR1ZGUsIGxvbmdpdHVkZTogbmV3Vmlld3BvcnQubG9uZ2l0dWRlIH0sXHJcbiAgICBdKVxyXG4gICAgZGlyZWN0aW9uc0FwaShtYXJrZXJzLCBuZXdWaWV3cG9ydCkudGhlbihkYXRhID0+IHNldEdlbyhkYXRhKSlcclxuXHJcbiAgICBmZXRjaERhdGEobmV3Vmlld3BvcnQubG9uZ2l0dWRlLCBuZXdWaWV3cG9ydC5sYXRpdHVkZSkudGhlbihuYW1lID0+XHJcbiAgICAgIHNldERlc3RpbmF0aW9uTmFtZShuYW1lKVxyXG4gICAgKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiem9vbVwiLCBuZXdWaWV3cG9ydClcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRTaG93KHRydWUpXHJcbiAgICB9LCBuZXdWaWV3cG9ydC50cmFuc2l0aW9uRHVyYXRpb24pXHJcbiAgICByZXR1cm4gaGFuZGxlVmlld3BvcnRDaGFuZ2Uoe1xyXG4gICAgICAuLi5uZXdWaWV3cG9ydCxcclxuICAgICAgem9vbTogbmV3Vmlld3BvcnQuem9vbSxcclxuICAgICAgLi4uZ2VvY29kZXJEZWZhdWx0T3ZlcnJpZGVzLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsZWFyU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgc2V0R2VvKG51bGwpXHJcbiAgICBzZXRNYXJrZXJzKG1hcmtlcnMuc2xpY2UoMCwgMSkpXHJcbiAgICBzZXRTaG93KGZhbHNlKVxyXG4gICAgc2V0TG9jYXRpb24oXCJcIilcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcFwiPlxyXG4gICAgICAgIHsvKiByZW5kZXJpbmcgdGhlIG1hcCBpbiB0aGUgYnJvd3NlciAqL31cclxuICAgICAgICA8UmVhY3RNYXBHTFxyXG4gICAgICAgICAgcmVmPXttYXBSZWZ9XHJcbiAgICAgICAgICB7Li4udmlld3BvcnR9XHJcbiAgICAgICAgICBvblZpZXdwb3J0Q2hhbmdlPXtoYW5kbGVWaWV3cG9ydENoYW5nZX1cclxuICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXtNQVBCT1hfVE9LRU59XHJcbiAgICAgICAgICBtYXBTdHlsZT1cIm1hcGJveDovL3N0eWxlcy9tYXBib3gvc3RyZWV0cy12MTFcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsvKiBuYXZpZ2F0aW9uIG9uIHRoZSB0b3AtbGVmdCBjb3JuZXIgb2YgdGhlIG1hcCAqL31cclxuICAgICAgICAgIDxOYXZpZ2F0aW9uQ29udHJvbCBzdHlsZT17bmF2Q29udHJvbFN0eWxlfSAvPlxyXG4gICAgICAgICAgey8qIHJlbmRlcmluZyB0aGUgZGlyZWN0aW9ucyBmcm9tIG9uZSBwb2ludCB0byBhbm90aGVyICovfVxyXG4gICAgICAgICAge2dlbyAhPSBudWxsID8gKFxyXG4gICAgICAgICAgICA8U291cmNlXHJcbiAgICAgICAgICAgICAgaWQ9XCJyb3V0ZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cImdlb2pzb25cIlxyXG4gICAgICAgICAgICAgIGRhdGE9e3tcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczoge30sXHJcbiAgICAgICAgICAgICAgICBnZW9tZXRyeToge1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcIkxpbmVTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGdlbz8uZ2VvbWV0cnk/LmNvb3JkaW5hdGVzLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExheWVyIHsuLi5sYXllclN0eWxlfSAvPlxyXG4gICAgICAgICAgICA8L1NvdXJjZT5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHttYXJrZXJzLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICBtYXJrZXJzLm1hcCgocG9pbnQsIGlkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgIDxNYXJrZXJcclxuICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU9e051bWJlcihwb2ludD8ubGF0aXR1ZGUpfVxyXG4gICAgICAgICAgICAgICAgICBsb25naXR1ZGU9e051bWJlcihwb2ludD8ubG9uZ2l0dWRlKX1cclxuICAgICAgICAgICAgICAgICAgb2Zmc2V0TGVmdD17LTIwfVxyXG4gICAgICAgICAgICAgICAgICBvZmZzZXRUb3A9ey0xMH1cclxuICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd3BvcHVwKGlkKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci80OC8wMDAwMDAvbWFwLXBpbi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImxvY2F0aW9uIG1hcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9NYXJrZXI+XHJcbiAgICAgICAgICAgICAgICB7c2hvd1BvcHVwID09PSBpZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxQb3B1cFxyXG4gICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlPXtwb2ludD8ubGF0aXR1ZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlPXtwb2ludD8ubG9uZ2l0dWRlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlT25DbGljaz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBhbmNob3I9XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3dwb3B1cCgtMSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjMwMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aWQgPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk9yaWdpbjoge29yaWdpbk5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4gRGVzdGluYXRpb246IHtkZXN0aW5hdGlvbk5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPmRpc3RhbmNlOntyb3VuZChnZW8/LmRpc3RhbmNlIC8gMTAwMCwgMil9IGttPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPmR1cmF0aW9uczp7cm91bmQoZ2VvPy5kdXJhdGlvbiAvIDYwLCAyKX0gbWluPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvUG9wdXA+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L1JlYWN0TWFwR0w+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogcmVuZGVyaW5nIHRoZSBTZWFyY2ggcGxhY2VzIGZ1bmN0aW9uYWxpdHkgICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxyXG4gICAgICAgIDxHZW9jb2RlclxyXG4gICAgICAgICAgbWFwUmVmPXttYXBSZWZ9XHJcbiAgICAgICAgICBvblZpZXdwb3J0Q2hhbmdlPXtoYW5kbGVHZW9jb2RlclZpZXdwb3J0Q2hhbmdlVG99XHJcbiAgICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj17TUFQQk9YX1RPS0VOfVxyXG4gICAgICAgICAgcG9zaXRpb249XCJ0b3AtbGVmdFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImNob29zZSB5b3VyIGRlc3RpbmF0aW9uXCJcclxuICAgICAgICAgIG9uQ2xlYXI9e2NsZWFyU2VhcmNofVxyXG4gICAgICAgICAgaW5wdXRWYWx1ZT17bG9jYXRpb24gPyBsb2NhdGlvbiA6IFwiXCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93ID09IHRydWUgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVsyNDBweF0gaC1bMzAwcHhdIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHJvdW5kZWQgcC0yIHotMTAgYmctd2hpdGUgYWJzb2x1dGUgdG9wLVs1MnB4XSBsZWZ0LVsxMHB4XVwiPlxyXG4gICAgICAgICAgPGgzPkNob29zZSBhIHJpZGU8L2gzPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVs4MCVdIGgtWzUwcHhdIHJvdW5kZWQgIG10LTQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHAtMiBob3ZlcjpiZy1ibHVlLTMwMCBiZy1ibHVlLTQwMCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgc2V0UmlkZShyb3VuZChyb3VuZChnZW8/LmRpc3RhbmNlIC8gMTAwMCwgMikgKiAyLjQ1LCAyKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cD5VYmVyIFg8L3A+XHJcbiAgICAgICAgICAgIDxwPlByaWNlOiB7cm91bmQocm91bmQoZ2VvPy5kaXN0YW5jZSAvIDEwMDAsIDIpICogMi40NSwgMil9JDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVs4MCVdIGgtWzUwcHhdIHJvdW5kZWQgbXQtNCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcC0yIGJnLWJsdWUtNDAwIGhvdmVyOmJnLWJsdWUtMzAwIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICBzZXRSaWRlKHJvdW5kKHJvdW5kKGdlbz8uZGlzdGFuY2UgLyAxMDAwLCAyKSAqIDMuNjcsIDIpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwPlViZXIgWFM8L3A+XHJcbiAgICAgICAgICAgIDxwPlByaWNlOiB7cm91bmQocm91bmQoZ2VvPy5kaXN0YW5jZSAvIDEwMDAsIDIpICogMy42NywgMil9JDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVs4MCVdIGgtWzUwcHhdIHJvdW5kZWQgbXQtNCBmbGV4IGp1c3RpZnktYmV0d2VlbiBwLTIgaXRlbXMtY2VudGVyIGJnLWJsdWUtNDAwIGhvdmVyOmJnLWJsdWUtMzAwIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICBzZXRSaWRlKHJvdW5kKHJvdW5kKGdlbz8uZGlzdGFuY2UgLyAxMDAwLCAyKSAqIDQuNTUsIDIpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwPlViZXIgRWw8L3A+XHJcbiAgICAgICAgICAgIDxwPlByaWNlOiB7cm91bmQocm91bmQoZ2VvPy5kaXN0YW5jZSAvIDEwMDAsIDIpICogNC41NSwgMil9JDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge3JpZGUgJiYgKFxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJsaWdodEJsdWVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIHJpcHBsZT1cImxpZ2h0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBHZXQgcmlkZSB7cmlkZX0kXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICBcIlwiXHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8UGF5cGFsTW9kZWxcclxuICAgICAgICBzaG93TW9kYWw9e3Nob3dNb2RhbH1cclxuICAgICAgICBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH1cclxuICAgICAgICBwcmljZT17cmlkZX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwYm94XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=