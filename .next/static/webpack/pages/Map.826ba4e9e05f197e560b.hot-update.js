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
        inputValue: locationProp ? locationProp : ""
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYXBib3guanMiXSwibmFtZXMiOlsiTUFQQk9YX1RPS0VOIiwicHJvY2VzcyIsIm5hdkNvbnRyb2xTdHlsZSIsInJpZ2h0IiwidG9wIiwiTWFwYm94IiwibG9jYXRpb25Qcm9wIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwidmlld3BvcnQiLCJzZXRWaWV3cG9ydCIsIm1hcFJlZiIsInVzZVJlZiIsImdlbyIsInNldEdlbyIsIm1hcmtlcnMiLCJzZXRNYXJrZXJzIiwic2hvd1BvcHVwIiwic2V0U2hvd3BvcHVwIiwib3JpZ2luTmFtZSIsInNldE9yaWdpbk5hbWUiLCJkZXN0aW5hdGlvbk5hbWUiLCJzZXREZXN0aW5hdGlvbk5hbWUiLCJzaG93Iiwic2V0U2hvdyIsImxvY2F0aW9uIiwic2V0TG9jYXRpb24iLCJyaWRlIiwic2V0UmlkZSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImxheWVyU3R5bGUiLCJpZCIsInR5cGUiLCJzb3VyY2UiLCJwYWludCIsImxheW91dCIsInVzZUVmZmVjdCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwicG9zaXRpb24iLCJsYXRpdHVkZSIsImNvb3JkcyIsImxvbmdpdHVkZSIsInpvb20iLCJ3aWR0aCIsImhlaWdodCIsImZldGNoRGF0YSIsInRoZW4iLCJuYW1lIiwiaGFuZGxlVmlld3BvcnRDaGFuZ2UiLCJuZXdWaWV3cG9ydCIsInJvdW5kIiwibnVtIiwiZGVjIiwiTWF0aCIsInBvdyIsImhhbmRsZUdlb2NvZGVyVmlld3BvcnRDaGFuZ2VUbyIsImdlb2NvZGVyRGVmYXVsdE92ZXJyaWRlcyIsInRyYW5zaXRpb25EdXJhdGlvbiIsImRpcmVjdGlvbnNBcGkiLCJkYXRhIiwic2V0VGltZW91dCIsImNsZWFyU2VhcmNoIiwic2xpY2UiLCJwcm9wZXJ0aWVzIiwiZ2VvbWV0cnkiLCJjb29yZGluYXRlcyIsImxlbmd0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aUJBQ0gsOERBQUMscUVBQUQ7QUFDRSxhQUFLLEVBQUMsV0FEUjtBQUVFLFlBQUksRUFBQyxRQUZQO0FBR0UsY0FBTSxFQUFDLE9BSFQ7QUFJRSxpQkFBUyxFQUFDLE1BSlo7QUFLRSxlQUFPLEVBQUU7QUFBQSxpQkFBTUcsWUFBWSxDQUFDLElBQUQsQ0FBbEI7QUFBQSxTQUxYO0FBQUEsZ0NBT1lILElBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELEdBMkNDLEVBbklKLGVBc0lFLDhEQUFDLGtEQUFEO0FBQ0UsZUFBUyxFQUFFRSxTQURiO0FBRUUsa0JBQVksRUFBRUMsWUFGaEI7QUFHRSxXQUFLLEVBQUVIO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRJRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThJRCxDQWpQRDs7R0FBTXZCLE07O0tBQUFBLE07QUFtUE4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvTWFwLjgyNmJhNGU5ZTA1ZjE5N2U1NjBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJtYXBib3gtZ2wvZGlzdC9tYXBib3gtZ2wuY3NzXCJcclxuaW1wb3J0IFwicmVhY3QtbWFwLWdsLWdlb2NvZGVyL2Rpc3QvbWFwYm94LWdsLWdlb2NvZGVyLmNzc1wiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5pbXBvcnQgUmVhY3RNYXBHTCwge1xyXG4gIE1hcmtlcixcclxuICBQb3B1cCxcclxuICBOYXZpZ2F0aW9uQ29udHJvbCxcclxuICBTb3VyY2UsXHJcbiAgTGF5ZXIsXHJcbn0gZnJvbSBcInJlYWN0LW1hcC1nbFwiXHJcbmltcG9ydCBHZW9jb2RlciBmcm9tIFwicmVhY3QtbWFwLWdsLWdlb2NvZGVyXCJcclxuaW1wb3J0IHsgZmV0Y2hEYXRhLCBkaXJlY3Rpb25zQXBpIH0gZnJvbSBcIi4uL3VzZUZldGNoRGF0YVwiXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9CdXR0b25cIlxyXG5pbXBvcnQgUGF5cGFsTW9kZWwgZnJvbSBcIi4vcGF5cGFsTW9kZWxcIlxyXG5cclxuY29uc3QgTUFQQk9YX1RPS0VOID0gcHJvY2Vzcy5lbnYubWFwYm94S0VZXHJcblxyXG5jb25zdCBuYXZDb250cm9sU3R5bGUgPSB7XHJcbiAgcmlnaHQ6IDEwLFxyXG4gIHRvcDogMTAsXHJcbn1cclxuXHJcbmNvbnN0IE1hcGJveCA9ICh7IGxvY2F0aW9uUHJvcCB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2cobG9jYXRpb25Qcm9wKVxyXG4gIC8vZGVmaW5pbmcgU3RhdGVzXHJcbiAgY29uc3QgW3ZpZXdwb3J0LCBzZXRWaWV3cG9ydF0gPSB1c2VTdGF0ZSh7fSlcclxuICBjb25zdCBtYXBSZWYgPSB1c2VSZWYoKVxyXG4gIGNvbnN0IFtnZW8sIHNldEdlb10gPSB1c2VTdGF0ZSh7fSlcclxuICBjb25zdCBbbWFya2Vycywgc2V0TWFya2Vyc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbc2hvd1BvcHVwLCBzZXRTaG93cG9wdXBdID0gdXNlU3RhdGUoLTEpXHJcbiAgY29uc3QgW29yaWdpbk5hbWUsIHNldE9yaWdpbk5hbWVdID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBbZGVzdGluYXRpb25OYW1lLCBzZXREZXN0aW5hdGlvbk5hbWVdID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKGxvY2F0aW9uUHJvcClcclxuICBjb25zdCBbcmlkZSwgc2V0UmlkZV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgLy8gZGVmaW5pbmcgdGhlIHN0eWxlIGFuZCB0aGUgd2F5IHRoZSBkaXJlY3Rpb24gd2lsbCBiZSBwcmVzZW50ZWQgaW4gdGhlIG1hcFxyXG4gIGNvbnN0IGxheWVyU3R5bGUgPSB7XHJcbiAgICBpZDogXCJyb3V0ZVwiLFxyXG4gICAgdHlwZTogXCJsaW5lXCIsXHJcbiAgICBzb3VyY2U6IFwicm91dGVcIixcclxuICAgIHBhaW50OiB7XHJcbiAgICAgIFwibGluZS1jb2xvclwiOiBcIiNmY2ZjMDNcIixcclxuICAgICAgXCJsaW5lLXdpZHRoXCI6IDUsXHJcbiAgICB9LFxyXG4gICAgbGF5b3V0OiB7XHJcbiAgICAgIFwibGluZS1qb2luXCI6IFwicm91bmRcIixcclxuICAgICAgXCJsaW5lLWNhcFwiOiBcInJvdW5kXCIsXHJcbiAgICB9LFxyXG4gIH1cclxuXHJcbiAgLy8gaXQgd2lsbCBydW4gb25jZSB0aGUgY29tcG9uZW50IHJlLXJlbmRlcnMgYW5kIHN0b3AsIHdoaWNoIGlzIHNldHRpbmcgb3VyIGN1cnJlbnQgbG9jYXRpb24gYW5kIHN0b3JlIHRoZW0gaW4gdGhlIHN0YXRlXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZnVuY3Rpb24gKHBvc2l0aW9uKSB7XHJcbiAgICAgIHNldFZpZXdwb3J0KHtcclxuICAgICAgICBsYXRpdHVkZTogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxyXG4gICAgICAgIGxvbmdpdHVkZTogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSxcclxuICAgICAgICB6b29tOiAxMCxcclxuICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICB9KVxyXG4gICAgICBzZXRNYXJrZXJzKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYXRpdHVkZTogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxyXG4gICAgICAgICAgbG9uZ2l0dWRlOiBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0pXHJcblxyXG4gICAgICBmZXRjaERhdGEocG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSwgcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlKS50aGVuKFxyXG4gICAgICAgIG5hbWUgPT4ge1xyXG4gICAgICAgICAgc2V0T3JpZ2luTmFtZShuYW1lKVxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgfSlcclxuICB9LCBbXSlcclxuXHJcbiAgLy9tYWluIGZ1bmN0aW9uIHJlc3BvbnNpYmxlIGZvciBjaGFuZ2luZyB0aGUgdmlldyBpbiB0aGUgbWFwXHJcbiAgY29uc3QgaGFuZGxlVmlld3BvcnRDaGFuZ2UgPSBuZXdWaWV3cG9ydCA9PiB7XHJcbiAgICBzZXRWaWV3cG9ydChuZXdWaWV3cG9ydClcclxuICB9XHJcblxyXG4gIC8vZnVuY3Rpb24gdG8gcm91bmQgYSBudW1iZXJcclxuICBmdW5jdGlvbiByb3VuZChudW0sIGRlYykge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtICogTWF0aC5wb3coMTAsIGRlYykpIC8gTWF0aC5wb3coMTAsIGRlYylcclxuICB9XHJcblxyXG4gIC8vIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGV2ZXIgdGhlIHNlYXJjaCBjb21wb25lbnQgY2hhbmdlc1xyXG4gIGNvbnN0IGhhbmRsZUdlb2NvZGVyVmlld3BvcnRDaGFuZ2VUbyA9IG5ld1ZpZXdwb3J0ID0+IHtcclxuICAgIGNvbnN0IGdlb2NvZGVyRGVmYXVsdE92ZXJyaWRlcyA9IHtcclxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBuZXdWaWV3cG9ydC50cmFuc2l0aW9uRHVyYXRpb24sXHJcbiAgICB9XHJcbiAgICBpZiAoIW5ld1ZpZXdwb3J0KSByZXR1cm5cclxuICAgIHNldE1hcmtlcnMoW1xyXG4gICAgICAuLi5tYXJrZXJzLFxyXG4gICAgICB7IGxhdGl0dWRlOiBuZXdWaWV3cG9ydC5sYXRpdHVkZSwgbG9uZ2l0dWRlOiBuZXdWaWV3cG9ydC5sb25naXR1ZGUgfSxcclxuICAgIF0pXHJcbiAgICBkaXJlY3Rpb25zQXBpKG1hcmtlcnMsIG5ld1ZpZXdwb3J0KS50aGVuKGRhdGEgPT4gc2V0R2VvKGRhdGEpKVxyXG5cclxuICAgIGZldGNoRGF0YShuZXdWaWV3cG9ydC5sb25naXR1ZGUsIG5ld1ZpZXdwb3J0LmxhdGl0dWRlKS50aGVuKG5hbWUgPT5cclxuICAgICAgc2V0RGVzdGluYXRpb25OYW1lKG5hbWUpXHJcbiAgICApXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJ6b29tXCIsIG5ld1ZpZXdwb3J0KVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldFNob3codHJ1ZSlcclxuICAgIH0sIG5ld1ZpZXdwb3J0LnRyYW5zaXRpb25EdXJhdGlvbilcclxuICAgIHJldHVybiBoYW5kbGVWaWV3cG9ydENoYW5nZSh7XHJcbiAgICAgIC4uLm5ld1ZpZXdwb3J0LFxyXG4gICAgICB6b29tOiBuZXdWaWV3cG9ydC56b29tLFxyXG4gICAgICAuLi5nZW9jb2RlckRlZmF1bHRPdmVycmlkZXMsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xlYXJTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBzZXRHZW8obnVsbClcclxuICAgIHNldE1hcmtlcnMobWFya2Vycy5zbGljZSgwLCAxKSlcclxuICAgIHNldFNob3coZmFsc2UpXHJcbiAgICBzZXRMb2NhdGlvbihcIlwiKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwXCI+XHJcbiAgICAgICAgey8qIHJlbmRlcmluZyB0aGUgbWFwIGluIHRoZSBicm93c2VyICovfVxyXG4gICAgICAgIDxSZWFjdE1hcEdMXHJcbiAgICAgICAgICByZWY9e21hcFJlZn1cclxuICAgICAgICAgIHsuLi52aWV3cG9ydH1cclxuICAgICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9e2hhbmRsZVZpZXdwb3J0Q2hhbmdlfVxyXG4gICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49e01BUEJPWF9UT0tFTn1cclxuICAgICAgICAgIG1hcFN0eWxlPVwibWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXYxMVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgey8qIG5hdmlnYXRpb24gb24gdGhlIHRvcC1sZWZ0IGNvcm5lciBvZiB0aGUgbWFwICovfVxyXG4gICAgICAgICAgPE5hdmlnYXRpb25Db250cm9sIHN0eWxlPXtuYXZDb250cm9sU3R5bGV9IC8+XHJcbiAgICAgICAgICB7LyogcmVuZGVyaW5nIHRoZSBkaXJlY3Rpb25zIGZyb20gb25lIHBvaW50IHRvIGFub3RoZXIgKi99XHJcbiAgICAgICAgICB7Z2VvICE9IG51bGwgPyAoXHJcbiAgICAgICAgICAgIDxTb3VyY2VcclxuICAgICAgICAgICAgICBpZD1cInJvdXRlXCJcclxuICAgICAgICAgICAgICB0eXBlPVwiZ2VvanNvblwiXHJcbiAgICAgICAgICAgICAgZGF0YT17e1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7fSxcclxuICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTGluZVN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogZ2VvPy5nZW9tZXRyeT8uY29vcmRpbmF0ZXMsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGF5ZXIgey4uLmxheWVyU3R5bGV9IC8+XHJcbiAgICAgICAgICAgIDwvU291cmNlPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAge21hcmtlcnMubGVuZ3RoICYmXHJcbiAgICAgICAgICAgIG1hcmtlcnMubWFwKChwb2ludCwgaWQpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aWR9PlxyXG4gICAgICAgICAgICAgICAgPE1hcmtlclxyXG4gICAgICAgICAgICAgICAgICBsYXRpdHVkZT17TnVtYmVyKHBvaW50Py5sYXRpdHVkZSl9XHJcbiAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZT17TnVtYmVyKHBvaW50Py5sb25naXR1ZGUpfVxyXG4gICAgICAgICAgICAgICAgICBvZmZzZXRMZWZ0PXstMjB9XHJcbiAgICAgICAgICAgICAgICAgIG9mZnNldFRvcD17LTEwfVxyXG4gICAgICAgICAgICAgICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93cG9wdXAoaWQpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzQ4LzAwMDAwMC9tYXAtcGluLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9jYXRpb24gbWFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L01hcmtlcj5cclxuICAgICAgICAgICAgICAgIHtzaG93UG9wdXAgPT09IGlkICYmIChcclxuICAgICAgICAgICAgICAgICAgPFBvcHVwXHJcbiAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU9e3BvaW50Py5sYXRpdHVkZX1cclxuICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU9e3BvaW50Py5sb25naXR1ZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvcj1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd3BvcHVwKC0xKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMzAwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpZCA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+T3JpZ2luOiB7b3JpZ2luTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBEZXN0aW5hdGlvbjoge2Rlc3RpbmF0aW9uTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+ZGlzdGFuY2U6e3JvdW5kKGdlbz8uZGlzdGFuY2UgLyAxMDAwLCAyKX0ga208L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+ZHVyYXRpb25zOntyb3VuZChnZW8/LmR1cmF0aW9uIC8gNjAsIDIpfSBtaW48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9Qb3B1cD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvUmVhY3RNYXBHTD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiByZW5kZXJpbmcgdGhlIFNlYXJjaCBwbGFjZXMgZnVuY3Rpb25hbGl0eSAgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XHJcbiAgICAgICAgPEdlb2NvZGVyXHJcbiAgICAgICAgICBtYXBSZWY9e21hcFJlZn1cclxuICAgICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9e2hhbmRsZUdlb2NvZGVyVmlld3BvcnRDaGFuZ2VUb31cclxuICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXtNQVBCT1hfVE9LRU59XHJcbiAgICAgICAgICBwb3NpdGlvbj1cInRvcC1sZWZ0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY2hvb3NlIHlvdXIgZGVzdGluYXRpb25cIlxyXG4gICAgICAgICAgb25DbGVhcj17Y2xlYXJTZWFyY2h9XHJcbiAgICAgICAgICBpbnB1dFZhbHVlPXtsb2NhdGlvblByb3AgPyBsb2NhdGlvblByb3AgOiBcIlwifVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvdyA9PSB0cnVlID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bMjQwcHhdIGgtWzMwMHB4XSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciByb3VuZGVkIHAtMiB6LTEwIGJnLXdoaXRlIGFic29sdXRlIHRvcC1bNTJweF0gbGVmdC1bMTBweF1cIj5cclxuICAgICAgICAgIDxoMz5DaG9vc2UgYSByaWRlPC9oMz5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bODAlXSBoLVs1MHB4XSByb3VuZGVkICBtdC00IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwLTIgaG92ZXI6YmctYmx1ZS0zMDAgYmctYmx1ZS00MDAgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgIHNldFJpZGUocm91bmQocm91bmQoZ2VvPy5kaXN0YW5jZSAvIDEwMDAsIDIpICogMi40NSwgMikpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHA+VWJlciBYPC9wPlxyXG4gICAgICAgICAgICA8cD5QcmljZToge3JvdW5kKHJvdW5kKGdlbz8uZGlzdGFuY2UgLyAxMDAwLCAyKSAqIDIuNDUsIDIpfSQ8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bODAlXSBoLVs1MHB4XSByb3VuZGVkIG10LTQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHAtMiBiZy1ibHVlLTQwMCBob3ZlcjpiZy1ibHVlLTMwMCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgc2V0UmlkZShyb3VuZChyb3VuZChnZW8/LmRpc3RhbmNlIC8gMTAwMCwgMikgKiAzLjY3LCAyKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cD5VYmVyIFhTPC9wPlxyXG4gICAgICAgICAgICA8cD5QcmljZToge3JvdW5kKHJvdW5kKGdlbz8uZGlzdGFuY2UgLyAxMDAwLCAyKSAqIDMuNjcsIDIpfSQ8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bODAlXSBoLVs1MHB4XSByb3VuZGVkIG10LTQgZmxleCBqdXN0aWZ5LWJldHdlZW4gcC0yIGl0ZW1zLWNlbnRlciBiZy1ibHVlLTQwMCBob3ZlcjpiZy1ibHVlLTMwMCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgc2V0UmlkZShyb3VuZChyb3VuZChnZW8/LmRpc3RhbmNlIC8gMTAwMCwgMikgKiA0LjU1LCAyKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cD5VYmVyIEVsPC9wPlxyXG4gICAgICAgICAgICA8cD5QcmljZToge3JvdW5kKHJvdW5kKGdlbz8uZGlzdGFuY2UgLyAxMDAwLCAyKSAqIDQuNTUsIDIpfSQ8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtyaWRlICYmIChcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNvbG9yPVwibGlnaHRCbHVlXCJcclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICByaXBwbGU9XCJsaWdodFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKHRydWUpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgR2V0IHJpZGUge3JpZGV9JFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPFBheXBhbE1vZGVsXHJcbiAgICAgICAgc2hvd01vZGFsPXtzaG93TW9kYWx9XHJcbiAgICAgICAgc2V0U2hvd01vZGFsPXtzZXRTaG93TW9kYWx9XHJcbiAgICAgICAgcHJpY2U9e3JpZGV9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcGJveFxyXG4iXSwic291cmNlUm9vdCI6IiJ9