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
                width: 40,
                height: 40
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
        inputValue: locationProp ? locationProp : ""
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYXBib3guanMiXSwibmFtZXMiOlsiTUFQQk9YX1RPS0VOIiwicHJvY2VzcyIsIm5hdkNvbnRyb2xTdHlsZSIsInJpZ2h0IiwidG9wIiwiTWFwYm94IiwibG9jYXRpb25Qcm9wIiwidXNlU3RhdGUiLCJ2aWV3cG9ydCIsInNldFZpZXdwb3J0IiwibWFwUmVmIiwidXNlUmVmIiwiZ2VvIiwic2V0R2VvIiwibWFya2VycyIsInNldE1hcmtlcnMiLCJzaG93UG9wdXAiLCJzZXRTaG93cG9wdXAiLCJvcmlnaW5OYW1lIiwic2V0T3JpZ2luTmFtZSIsImRlc3RpbmF0aW9uTmFtZSIsInNldERlc3RpbmF0aW9uTmFtZSIsInNob3ciLCJzZXRTaG93IiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsInJpZGUiLCJzZXRSaWRlIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwibGF5ZXJTdHlsZSIsImlkIiwidHlwZSIsInNvdXJjZSIsInBhaW50IiwibGF5b3V0IiwidXNlRWZmZWN0IiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsImxhdGl0dWRlIiwiY29vcmRzIiwibG9uZ2l0dWRlIiwiem9vbSIsIndpZHRoIiwiaGVpZ2h0IiwiZmV0Y2hEYXRhIiwidGhlbiIsIm5hbWUiLCJoYW5kbGVWaWV3cG9ydENoYW5nZSIsIm5ld1ZpZXdwb3J0Iiwicm91bmQiLCJudW0iLCJkZWMiLCJNYXRoIiwicG93IiwiaGFuZGxlR2VvY29kZXJWaWV3cG9ydENoYW5nZVRvIiwiZ2VvY29kZXJEZWZhdWx0T3ZlcnJpZGVzIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiZGlyZWN0aW9uc0FwaSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsImNsZWFyU2VhcmNoIiwic2xpY2UiLCJwcm9wZXJ0aWVzIiwiZ2VvbWV0cnkiLCJjb29yZGluYXRlcyIsImxlbmd0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WUFBSSxFQUFDLFFBRlA7QUFHRSxjQUFNLEVBQUMsT0FIVDtBQUlFLGlCQUFTLEVBQUMsTUFKWjtBQUtFLGVBQU8sRUFBRTtBQUFBLGlCQUFNRyxZQUFZLENBQUMsSUFBRCxDQUFsQjtBQUFBLFNBTFg7QUFBQSxnQ0FPWUgsSUFQWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE5Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsR0EyQ0MsRUFuSUosZUFzSUUsOERBQUMsa0RBQUQ7QUFDRSxlQUFTLEVBQUVFLFNBRGI7QUFFRSxrQkFBWSxFQUFFQyxZQUZoQjtBQUdFLFdBQUssRUFBRUg7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdElGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOElELENBaFBEOztHQUFNckIsTTs7S0FBQUEsTTtBQWtQTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9NYXAuNWViMGNkYjA5ZDk3YzRjMTQ4MGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIm1hcGJveC1nbC9kaXN0L21hcGJveC1nbC5jc3NcIlxyXG5pbXBvcnQgXCJyZWFjdC1tYXAtZ2wtZ2VvY29kZXIvZGlzdC9tYXBib3gtZ2wtZ2VvY29kZXIuY3NzXCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXHJcbmltcG9ydCBSZWFjdE1hcEdMLCB7XHJcbiAgTWFya2VyLFxyXG4gIFBvcHVwLFxyXG4gIE5hdmlnYXRpb25Db250cm9sLFxyXG4gIFNvdXJjZSxcclxuICBMYXllcixcclxufSBmcm9tIFwicmVhY3QtbWFwLWdsXCJcclxuaW1wb3J0IEdlb2NvZGVyIGZyb20gXCJyZWFjdC1tYXAtZ2wtZ2VvY29kZXJcIlxyXG5pbXBvcnQgeyBmZXRjaERhdGEsIGRpcmVjdGlvbnNBcGkgfSBmcm9tIFwiLi4vdXNlRmV0Y2hEYXRhXCJcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0J1dHRvblwiXHJcbmltcG9ydCBQYXlwYWxNb2RlbCBmcm9tIFwiLi9wYXlwYWxNb2RlbFwiXHJcblxyXG5jb25zdCBNQVBCT1hfVE9LRU4gPSBwcm9jZXNzLmVudi5tYXBib3hLRVlcclxuXHJcbmNvbnN0IG5hdkNvbnRyb2xTdHlsZSA9IHtcclxuICByaWdodDogMTAsXHJcbiAgdG9wOiAxMCxcclxufVxyXG5cclxuY29uc3QgTWFwYm94ID0gKHsgbG9jYXRpb25Qcm9wIH0pID0+IHtcclxuICAvL2RlZmluaW5nIFN0YXRlc1xyXG4gIGNvbnN0IFt2aWV3cG9ydCwgc2V0Vmlld3BvcnRdID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3QgbWFwUmVmID0gdXNlUmVmKClcclxuICBjb25zdCBbZ2VvLCBzZXRHZW9dID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3QgW21hcmtlcnMsIHNldE1hcmtlcnNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW3Nob3dQb3B1cCwgc2V0U2hvd3BvcHVwXSA9IHVzZVN0YXRlKC0xKVxyXG4gIGNvbnN0IFtvcmlnaW5OYW1lLCBzZXRPcmlnaW5OYW1lXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW2Rlc3RpbmF0aW9uTmFtZSwgc2V0RGVzdGluYXRpb25OYW1lXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShsb2NhdGlvblByb3ApXHJcbiAgY29uc3QgW3JpZGUsIHNldFJpZGVdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIC8vIGRlZmluaW5nIHRoZSBzdHlsZSBhbmQgdGhlIHdheSB0aGUgZGlyZWN0aW9uIHdpbGwgYmUgcHJlc2VudGVkIGluIHRoZSBtYXBcclxuICBjb25zdCBsYXllclN0eWxlID0ge1xyXG4gICAgaWQ6IFwicm91dGVcIixcclxuICAgIHR5cGU6IFwibGluZVwiLFxyXG4gICAgc291cmNlOiBcInJvdXRlXCIsXHJcbiAgICBwYWludDoge1xyXG4gICAgICBcImxpbmUtY29sb3JcIjogXCIjZmNmYzAzXCIsXHJcbiAgICAgIFwibGluZS13aWR0aFwiOiA1LFxyXG4gICAgfSxcclxuICAgIGxheW91dDoge1xyXG4gICAgICBcImxpbmUtam9pblwiOiBcInJvdW5kXCIsXHJcbiAgICAgIFwibGluZS1jYXBcIjogXCJyb3VuZFwiLFxyXG4gICAgfSxcclxuICB9XHJcblxyXG4gIC8vIGl0IHdpbGwgcnVuIG9uY2UgdGhlIGNvbXBvbmVudCByZS1yZW5kZXJzIGFuZCBzdG9wLCB3aGljaCBpcyBzZXR0aW5nIG91ciBjdXJyZW50IGxvY2F0aW9uIGFuZCBzdG9yZSB0aGVtIGluIHRoZSBzdGF0ZVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGZ1bmN0aW9uIChwb3NpdGlvbikge1xyXG4gICAgICBzZXRWaWV3cG9ydCh7XHJcbiAgICAgICAgbGF0aXR1ZGU6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcclxuICAgICAgICBsb25naXR1ZGU6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsXHJcbiAgICAgICAgem9vbTogMTAsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwdndcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgfSlcclxuICAgICAgc2V0TWFya2VycyhbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGF0aXR1ZGU6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcclxuICAgICAgICAgIGxvbmdpdHVkZTogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdKVxyXG5cclxuICAgICAgZmV0Y2hEYXRhKHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsIHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSkudGhlbihcclxuICAgICAgICBuYW1lID0+IHtcclxuICAgICAgICAgIHNldE9yaWdpbk5hbWUobmFtZSlcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIC8vbWFpbiBmdW5jdGlvbiByZXNwb25zaWJsZSBmb3IgY2hhbmdpbmcgdGhlIHZpZXcgaW4gdGhlIG1hcFxyXG4gIGNvbnN0IGhhbmRsZVZpZXdwb3J0Q2hhbmdlID0gbmV3Vmlld3BvcnQgPT4ge1xyXG4gICAgc2V0Vmlld3BvcnQobmV3Vmlld3BvcnQpXHJcbiAgfVxyXG5cclxuICAvL2Z1bmN0aW9uIHRvIHJvdW5kIGEgbnVtYmVyXHJcbiAgZnVuY3Rpb24gcm91bmQobnVtLCBkZWMpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIE1hdGgucG93KDEwLCBkZWMpKSAvIE1hdGgucG93KDEwLCBkZWMpXHJcbiAgfVxyXG5cclxuICAvLyBmdW5jdGlvbiBpcyBjYWxsZWQgd2hldmVyIHRoZSBzZWFyY2ggY29tcG9uZW50IGNoYW5nZXNcclxuICBjb25zdCBoYW5kbGVHZW9jb2RlclZpZXdwb3J0Q2hhbmdlVG8gPSBuZXdWaWV3cG9ydCA9PiB7XHJcbiAgICBjb25zdCBnZW9jb2RlckRlZmF1bHRPdmVycmlkZXMgPSB7XHJcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogbmV3Vmlld3BvcnQudHJhbnNpdGlvbkR1cmF0aW9uLFxyXG4gICAgfVxyXG4gICAgaWYgKCFuZXdWaWV3cG9ydCkgcmV0dXJuXHJcbiAgICBzZXRNYXJrZXJzKFtcclxuICAgICAgLi4ubWFya2VycyxcclxuICAgICAgeyBsYXRpdHVkZTogbmV3Vmlld3BvcnQubGF0aXR1ZGUsIGxvbmdpdHVkZTogbmV3Vmlld3BvcnQubG9uZ2l0dWRlIH0sXHJcbiAgICBdKVxyXG4gICAgZGlyZWN0aW9uc0FwaShtYXJrZXJzLCBuZXdWaWV3cG9ydCkudGhlbihkYXRhID0+IHNldEdlbyhkYXRhKSlcclxuXHJcbiAgICBmZXRjaERhdGEobmV3Vmlld3BvcnQubG9uZ2l0dWRlLCBuZXdWaWV3cG9ydC5sYXRpdHVkZSkudGhlbihuYW1lID0+XHJcbiAgICAgIHNldERlc3RpbmF0aW9uTmFtZShuYW1lKVxyXG4gICAgKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiem9vbVwiLCBuZXdWaWV3cG9ydClcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRTaG93KHRydWUpXHJcbiAgICB9LCBuZXdWaWV3cG9ydC50cmFuc2l0aW9uRHVyYXRpb24pXHJcbiAgICByZXR1cm4gaGFuZGxlVmlld3BvcnRDaGFuZ2Uoe1xyXG4gICAgICAuLi5uZXdWaWV3cG9ydCxcclxuICAgICAgem9vbTogbmV3Vmlld3BvcnQuem9vbSxcclxuICAgICAgLi4uZ2VvY29kZXJEZWZhdWx0T3ZlcnJpZGVzLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsZWFyU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgc2V0R2VvKG51bGwpXHJcbiAgICBzZXRNYXJrZXJzKG1hcmtlcnMuc2xpY2UoMCwgMSkpXHJcbiAgICBzZXRTaG93KGZhbHNlKVxyXG4gICAgc2V0TG9jYXRpb24oXCJcIilcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcFwiPlxyXG4gICAgICAgIHsvKiByZW5kZXJpbmcgdGhlIG1hcCBpbiB0aGUgYnJvd3NlciAqL31cclxuICAgICAgICA8UmVhY3RNYXBHTFxyXG4gICAgICAgICAgcmVmPXttYXBSZWZ9XHJcbiAgICAgICAgICB7Li4udmlld3BvcnR9XHJcbiAgICAgICAgICBvblZpZXdwb3J0Q2hhbmdlPXtoYW5kbGVWaWV3cG9ydENoYW5nZX1cclxuICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXtNQVBCT1hfVE9LRU59XHJcbiAgICAgICAgICBtYXBTdHlsZT1cIm1hcGJveDovL3N0eWxlcy9tYXBib3gvc3RyZWV0cy12MTFcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsvKiBuYXZpZ2F0aW9uIG9uIHRoZSB0b3AtbGVmdCBjb3JuZXIgb2YgdGhlIG1hcCAqL31cclxuICAgICAgICAgIDxOYXZpZ2F0aW9uQ29udHJvbCBzdHlsZT17bmF2Q29udHJvbFN0eWxlfSAvPlxyXG4gICAgICAgICAgey8qIHJlbmRlcmluZyB0aGUgZGlyZWN0aW9ucyBmcm9tIG9uZSBwb2ludCB0byBhbm90aGVyICovfVxyXG4gICAgICAgICAge2dlbyAhPSBudWxsID8gKFxyXG4gICAgICAgICAgICA8U291cmNlXHJcbiAgICAgICAgICAgICAgaWQ9XCJyb3V0ZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cImdlb2pzb25cIlxyXG4gICAgICAgICAgICAgIGRhdGE9e3tcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczoge30sXHJcbiAgICAgICAgICAgICAgICBnZW9tZXRyeToge1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcIkxpbmVTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGdlbz8uZ2VvbWV0cnk/LmNvb3JkaW5hdGVzLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExheWVyIHsuLi5sYXllclN0eWxlfSAvPlxyXG4gICAgICAgICAgICA8L1NvdXJjZT5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHttYXJrZXJzLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICBtYXJrZXJzLm1hcCgocG9pbnQsIGlkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgIDxNYXJrZXJcclxuICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU9e051bWJlcihwb2ludD8ubGF0aXR1ZGUpfVxyXG4gICAgICAgICAgICAgICAgICBsb25naXR1ZGU9e051bWJlcihwb2ludD8ubG9uZ2l0dWRlKX1cclxuICAgICAgICAgICAgICAgICAgb2Zmc2V0TGVmdD17LTIwfVxyXG4gICAgICAgICAgICAgICAgICBvZmZzZXRUb3A9ey0xMH1cclxuICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd3BvcHVwKGlkKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci80OC8wMDAwMDAvbWFwLXBpbi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImxvY2F0aW9uIG1hcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9NYXJrZXI+XHJcbiAgICAgICAgICAgICAgICB7c2hvd1BvcHVwID09PSBpZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxQb3B1cFxyXG4gICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlPXtwb2ludD8ubGF0aXR1ZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlPXtwb2ludD8ubG9uZ2l0dWRlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlT25DbGljaz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBhbmNob3I9XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3dwb3B1cCgtMSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjMwMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aWQgPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk9yaWdpbjoge29yaWdpbk5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4gRGVzdGluYXRpb246IHtkZXN0aW5hdGlvbk5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPmRpc3RhbmNlOntyb3VuZChnZW8/LmRpc3RhbmNlIC8gMTAwMCwgMil9IGttPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPmR1cmF0aW9uczp7cm91bmQoZ2VvPy5kdXJhdGlvbiAvIDYwLCAyKX0gbWluPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvUG9wdXA+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L1JlYWN0TWFwR0w+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogcmVuZGVyaW5nIHRoZSBTZWFyY2ggcGxhY2VzIGZ1bmN0aW9uYWxpdHkgICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxyXG4gICAgICAgIDxHZW9jb2RlclxyXG4gICAgICAgICAgbWFwUmVmPXttYXBSZWZ9XHJcbiAgICAgICAgICBvblZpZXdwb3J0Q2hhbmdlPXtoYW5kbGVHZW9jb2RlclZpZXdwb3J0Q2hhbmdlVG99XHJcbiAgICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj17TUFQQk9YX1RPS0VOfVxyXG4gICAgICAgICAgcG9zaXRpb249XCJ0b3AtbGVmdFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImNob29zZSB5b3VyIGRlc3RpbmF0aW9uXCJcclxuICAgICAgICAgIG9uQ2xlYXI9e2NsZWFyU2VhcmNofVxyXG4gICAgICAgICAgaW5wdXRWYWx1ZT17bG9jYXRpb25Qcm9wID8gbG9jYXRpb25Qcm9wIDogXCJcIn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3cgPT0gdHJ1ZSA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzI0MHB4XSBoLVszMDBweF0gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcm91bmRlZCBwLTIgei0xMCBiZy13aGl0ZSBhYnNvbHV0ZSB0b3AtWzUycHhdIGxlZnQtWzEwcHhdXCI+XHJcbiAgICAgICAgICA8aDM+Q2hvb3NlIGEgcmlkZTwvaDM+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzgwJV0gaC1bNTBweF0gcm91bmRlZCAgbXQtNCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcC0yIGhvdmVyOmJnLWJsdWUtMzAwIGJnLWJsdWUtNDAwIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICBzZXRSaWRlKHJvdW5kKHJvdW5kKGdlbz8uZGlzdGFuY2UgLyAxMDAwLCAyKSAqIDIuNDUsIDIpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwPlViZXIgWDwvcD5cclxuICAgICAgICAgICAgPHA+UHJpY2U6IHtyb3VuZChyb3VuZChnZW8/LmRpc3RhbmNlIC8gMTAwMCwgMikgKiAyLjQ1LCAyKX0kPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzgwJV0gaC1bNTBweF0gcm91bmRlZCBtdC00IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwLTIgYmctYmx1ZS00MDAgaG92ZXI6YmctYmx1ZS0zMDAgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgIHNldFJpZGUocm91bmQocm91bmQoZ2VvPy5kaXN0YW5jZSAvIDEwMDAsIDIpICogMy42NywgMikpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHA+VWJlciBYUzwvcD5cclxuICAgICAgICAgICAgPHA+UHJpY2U6IHtyb3VuZChyb3VuZChnZW8/LmRpc3RhbmNlIC8gMTAwMCwgMikgKiAzLjY3LCAyKX0kPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzgwJV0gaC1bNTBweF0gcm91bmRlZCBtdC00IGZsZXgganVzdGlmeS1iZXR3ZWVuIHAtMiBpdGVtcy1jZW50ZXIgYmctYmx1ZS00MDAgaG92ZXI6YmctYmx1ZS0zMDAgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgIHNldFJpZGUocm91bmQocm91bmQoZ2VvPy5kaXN0YW5jZSAvIDEwMDAsIDIpICogNC41NSwgMikpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHA+VWJlciBFbDwvcD5cclxuICAgICAgICAgICAgPHA+UHJpY2U6IHtyb3VuZChyb3VuZChnZW8/LmRpc3RhbmNlIC8gMTAwMCwgMikgKiA0LjU1LCAyKX0kPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7cmlkZSAmJiAoXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0Qmx1ZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgcmlwcGxlPVwibGlnaHRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTRcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbCh0cnVlKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEdldCByaWRlIHtyaWRlfSRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIFwiXCJcclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxQYXlwYWxNb2RlbFxyXG4gICAgICAgIHNob3dNb2RhbD17c2hvd01vZGFsfVxyXG4gICAgICAgIHNldFNob3dNb2RhbD17c2V0U2hvd01vZGFsfVxyXG4gICAgICAgIHByaWNlPXtyaWRlfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXBib3hcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==