(function() {
var exports = {};
exports.id = "pages/Map";
exports.ids = ["pages/Map"];
exports.modules = {

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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-map-gl */ "react-map-gl");
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_map_gl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_map_gl_geocoder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-map-gl-geocoder */ "react-map-gl-geocoder");
/* harmony import */ var react_map_gl_geocoder__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_map_gl_geocoder__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _useFetchData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../useFetchData */ "./useFetchData.js");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-tailwind/react/Button */ "@material-tailwind/react/Button");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _paypalModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./paypalModel */ "./components/paypalModel.js");


var _jsxFileName = "C:\\D_J_S_P\\React,Next\\All_Projects\\Next_Projects\\Next_Mapbox\\mapbox\\components\\mapbox.js";

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
      (0,_useFetchData__WEBPACK_IMPORTED_MODULE_7__.fetchData)(position.coords.longitude, position.coords.latitude).then(name => {
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
    (0,_useFetchData__WEBPACK_IMPORTED_MODULE_7__.directionsApi)(markers, newViewport).then(data => setGeo(data));
    (0,_useFetchData__WEBPACK_IMPORTED_MODULE_7__.fetchData)(newViewport.longitude, newViewport.latitude).then(name => setDestinationName(name));
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
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "map",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_map_gl__WEBPACK_IMPORTED_MODULE_5___default()), _objectSpread(_objectSpread({
        ref: mapRef
      }, viewport), {}, {
        onViewportChange: handleViewportChange,
        mapboxApiAccessToken: MAPBOX_TOKEN,
        mapStyle: "mapbox://styles/mapbox/streets-v11",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_5__.NavigationControl, {
          style: navControlStyle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, undefined), geo != null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_5__.Source, {
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
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_5__.Layer, _objectSpread({}, layerStyle), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false), markers.length && markers.map((point, id) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_5__.Marker, {
            latitude: Number(point === null || point === void 0 ? void 0 : point.latitude),
            longitude: Number(point === null || point === void 0 ? void 0 : point.longitude),
            offsetLeft: -20,
            offsetTop: -10,
            draggable: false,
            onClick: () => setShowpopup(id),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
              src: "https://img.icons8.com/color/48/000000/map-pin.png",
              alt: "location mark",
              width: 40,
              height: 40
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 17
          }, undefined), showPopup === id && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_5__.Popup, {
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
          lineNumber: 154,
          columnNumber: 15
        }, undefined))]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "search",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_map_gl_geocoder__WEBPACK_IMPORTED_MODULE_6___default()), {
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
      }, undefined), ride && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
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
    }, undefined) : "", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypalModel__WEBPACK_IMPORTED_MODULE_9__.default, {
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
    lineNumber: 120,
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/features/UserSlice */ "./redux/features/UserSlice.js");

var _jsxFileName = "C:\\D_J_S_P\\React,Next\\All_Projects\\Next_Projects\\Next_Mapbox\\mapbox\\components\\paypalModel.js";










const paypalModel = ({
  showModal,
  setShowModal,
  price
}) => {
  const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_redux_features_UserSlice__WEBPACK_IMPORTED_MODULE_9__.selectUser);
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
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_ModalBody__WEBPACK_IMPORTED_MODULE_4___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_paypal_button_v2__WEBPACK_IMPORTED_MODULE_7__.PayPalButton, {
          amount: price,
          onSuccess: (details, data) => {
            alert("Transaction completed by " + (user === null || user === void 0 ? void 0 : user.email));
            setShowModal(false);
          },
          options: {
            clientId: "AeEv79hPqxk608ZE-sWsFgb8oLzi7Uhl9LV7IP3uPXJ4PqMeN1F8yXO_8IJGdNLqpnSQU8sBEJ-I_Cwz"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
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
          lineNumber: 32,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
          color: "green",
          ripple: "light",
          children: "Add location"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (paypalModel);

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":["img.icons8.com"]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(img, placeholder) {
  if (placeholder === 'blur' && img) {
    const handleLoad = () => {
      if (!img.src.startsWith('data:')) {
        const p = 'decode' in img ? img.decode() : Promise.resolve();
        p.catch(() => {}).then(() => {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        });
      }
    };

    if (img.complete) {
      // If the real image fails to load, this will still remove the placeholder.
      // This is the desired behavior for now, and will be revisited when error
      // handling is worked on for the image component itself.
      handleLoad();
    } else {
      img.onload = handleLoad;
    }
  }
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp']; // should match next-image-loader

        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = (0, _extends2.default)({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  }, placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: 'cover',
    backgroundImage: `url("${blurDataURL}")`
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: element => {
      setRef(element);
      removePlaceholder(element, placeholder);
    },
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./pages/Map.js":
/*!**********************!*\
  !*** ./pages/Map.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_mapbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/mapbox */ "./components/mapbox.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\D_J_S_P\\React,Next\\All_Projects\\Next_Projects\\Next_Mapbox\\mapbox\\pages\\Map.js";




const Map = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const location = router.query.location;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_mapbox__WEBPACK_IMPORTED_MODULE_2__.default, {
      locationProp: location
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Map);

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

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/extends.js ***!
  \**************************************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \***********************************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "@material-tailwind/react/Button":
/*!**************************************************!*\
  !*** external "@material-tailwind/react/Button" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/Button");;

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

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/Map.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBib3gvLi9jb21wb25lbnRzL21hcGJveC5qcyIsIndlYnBhY2s6Ly9tYXBib3gvLi9jb21wb25lbnRzL3BheXBhbE1vZGVsLmpzIiwid2VicGFjazovL21hcGJveC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2ltYWdlLmpzIiwid2VicGFjazovL21hcGJveC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9tYXBib3gvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL21hcGJveC8uL3BhZ2VzL01hcC5qcyIsIndlYnBhY2s6Ly9tYXBib3gvLi9yZWR1eC9mZWF0dXJlcy9Vc2VyU2xpY2UuanMiLCJ3ZWJwYWNrOi8vbWFwYm94Ly4vdXNlRmV0Y2hEYXRhLmpzIiwid2VicGFjazovL21hcGJveC8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovL21hcGJveC8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vbWFwYm94Ly4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL21hcGJveC8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0J1dHRvblwiIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbFwiIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbEJvZHlcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxGb290ZXJcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxIZWFkZXJcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJyZWFjdC1tYXAtZ2xcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJyZWFjdC1tYXAtZ2wtZ2VvY29kZXJcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJyZWFjdC1wYXlwYWwtYnV0dG9uLXYyXCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJNQVBCT1hfVE9LRU4iLCJwcm9jZXNzIiwibmF2Q29udHJvbFN0eWxlIiwicmlnaHQiLCJ0b3AiLCJNYXBib3giLCJsb2NhdGlvblByb3AiLCJ2aWV3cG9ydCIsInNldFZpZXdwb3J0IiwidXNlU3RhdGUiLCJtYXBSZWYiLCJ1c2VSZWYiLCJnZW8iLCJzZXRHZW8iLCJtYXJrZXJzIiwic2V0TWFya2VycyIsInNob3dQb3B1cCIsInNldFNob3dwb3B1cCIsIm9yaWdpbk5hbWUiLCJzZXRPcmlnaW5OYW1lIiwiZGVzdGluYXRpb25OYW1lIiwic2V0RGVzdGluYXRpb25OYW1lIiwic2hvdyIsInNldFNob3ciLCJyaWRlIiwic2V0UmlkZSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImxheWVyU3R5bGUiLCJpZCIsInR5cGUiLCJzb3VyY2UiLCJwYWludCIsImxheW91dCIsInVzZUVmZmVjdCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwicG9zaXRpb24iLCJsYXRpdHVkZSIsImNvb3JkcyIsImxvbmdpdHVkZSIsInpvb20iLCJ3aWR0aCIsImhlaWdodCIsImZldGNoRGF0YSIsInRoZW4iLCJuYW1lIiwiaGFuZGxlVmlld3BvcnRDaGFuZ2UiLCJuZXdWaWV3cG9ydCIsInJvdW5kIiwibnVtIiwiZGVjIiwiTWF0aCIsInBvdyIsImhhbmRsZUdlb2NvZGVyVmlld3BvcnRDaGFuZ2VUbyIsImdlb2NvZGVyRGVmYXVsdE92ZXJyaWRlcyIsInRyYW5zaXRpb25EdXJhdGlvbiIsImRpcmVjdGlvbnNBcGkiLCJkYXRhIiwic2V0VGltZW91dCIsImNsZWFyU2VhcmNoIiwic2xpY2UiLCJwcm9wZXJ0aWVzIiwiZ2VvbWV0cnkiLCJjb29yZGluYXRlcyIsImxlbmd0aCIsIm1hcCIsInBvaW50IiwiTnVtYmVyIiwiZGlzdGFuY2UiLCJkdXJhdGlvbiIsInBheXBhbE1vZGVsIiwicHJpY2UiLCJ1c2VyIiwidXNlU2VsZWN0b3IiLCJzZWxlY3RVc2VyIiwiZGV0YWlscyIsImFsZXJ0IiwiZW1haWwiLCJjbGllbnRJZCIsIk5FWFRfUFVCTElDX1BBWVBBTF9LRVkiLCJlIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJleHBvcnRzIiwiSW1hZ2UiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIiLCJfZXh0ZW5kczIiLCJfcmVhY3QiLCJfaGVhZCIsIl90b0Jhc2UiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiZGVmYXVsdExvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJkZWZhdWx0IiwiaXNTdGF0aWNJbWFnZURhdGEiLCJpc1N0YXRpY0ltcG9ydCIsImRldmljZVNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwiY29uZmlnSW1hZ2VTaXplcyIsImxvYWRlciIsImNvbmZpZ0xvYWRlciIsInBhdGgiLCJjb25maWdQYXRoIiwiZG9tYWlucyIsImNvbmZpZ0RvbWFpbnMiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsInNvcnQiLCJhIiwiYiIsImdldFdpZHRocyIsInNpemVzIiwidmlld3BvcnRXaWR0aFJlIiwicGVyY2VudFNpemVzIiwibWF0Y2giLCJleGVjIiwicHVzaCIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIm1pbiIsIndpZHRocyIsImZpbHRlciIsInMiLCJraW5kIiwiU2V0IiwidyIsImZpbmQiLCJwIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJpIiwiam9pbiIsImdldEludCIsIngiLCJkZWZhdWx0SW1hZ2VMb2FkZXIiLCJsb2FkZXJQcm9wcyIsImxvYWQiLCJnZXQiLCJyb290IiwiRXJyb3IiLCJWQUxJRF9MT0FERVJTIiwicmVtb3ZlUGxhY2Vob2xkZXIiLCJpbWciLCJwbGFjZWhvbGRlciIsImhhbmRsZUxvYWQiLCJzdGFydHNXaXRoIiwiZGVjb2RlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYXRjaCIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9yZWYiLCJwcmlvcml0eSIsImxvYWRpbmciLCJjbGFzc05hbWUiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aWR0aEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpbmNsdWRlcyIsIlN0cmluZyIsImlzTmFOIiwiY29uc29sZSIsIndhcm4iLCJWQUxJRF9CTFVSX0VYVCIsImlzTGF6eSIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsImxlZnQiLCJib3R0b20iLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwiZGlzcGxheSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJvdmVyZmxvdyIsImltZ0F0dHJpYnV0ZXMiLCJjcmVhdGVFbGVtZW50IiwiYWx0Iiwicm9sZSIsInRvQmFzZTY0IiwiT2JqZWN0IiwiYXNzaWduIiwiZGVjb2RpbmciLCJyZWYiLCJlbGVtZW50Iiwia2V5IiwicmVsIiwiYXMiLCJocmVmIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwicGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsIlVSTCIsImVyciIsImVycm9yIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJtYXgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VDYWxsYmFjayIsImVsIiwiY3VycmVudCIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiY2FsbGJhY2siLCJvcHRpb25zIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwic2V0IiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJpbnN0YW5jZSIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJ0YXJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9jYXRpb24iLCJxdWVyeSIsIlVzZXJTbGljZSIsImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlcnMiLCJBZGQiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJmZXRjaCIsImF4aW9zIiwicmVzIiwibG9nIiwiUmVtb3ZlIiwiQ2hlY2siLCJhY3Rpb25zIiwiVXNlciIsInJlZHVjZXIiLCJ5IiwianNvbiIsImZlYXR1cmVzIiwicGxhY2VfbmFtZSIsImRpcmVjdGlvbiIsInJvdXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsWUFBWSxHQUFHQyxrR0FBckI7QUFFQSxNQUFNQyxlQUFlLEdBQUc7QUFDdEJDLE9BQUssRUFBRSxFQURlO0FBRXRCQyxLQUFHLEVBQUU7QUFGaUIsQ0FBeEI7O0FBS0EsTUFBTUMsTUFBTSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQXNCO0FBQUE7O0FBQ25DO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLDZDQUFNLEVBQXJCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEdBQUQ7QUFBQSxPQUFNQztBQUFOLE1BQWdCSiwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUI7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JOLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDTyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QlIsK0NBQVEsQ0FBQyxDQUFDLENBQUYsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ1MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJWLCtDQUFRLENBQUMsRUFBRCxDQUE1QztBQUNBLFFBQU07QUFBQSxPQUFDVyxlQUFEO0FBQUEsT0FBa0JDO0FBQWxCLE1BQXdDWiwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ2EsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JkLCtDQUFRLENBQUMsS0FBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDZSxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQmhCLCtDQUFRLENBQUMsSUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDaUIsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJsQiwrQ0FBUSxDQUFDLEtBQUQsQ0FBMUMsQ0FYbUMsQ0FhbkM7O0FBQ0EsUUFBTW1CLFVBQVUsR0FBRztBQUNqQkMsTUFBRSxFQUFFLE9BRGE7QUFFakJDLFFBQUksRUFBRSxNQUZXO0FBR2pCQyxVQUFNLEVBQUUsT0FIUztBQUlqQkMsU0FBSyxFQUFFO0FBQ0wsb0JBQWMsU0FEVDtBQUVMLG9CQUFjO0FBRlQsS0FKVTtBQVFqQkMsVUFBTSxFQUFFO0FBQ04sbUJBQWEsT0FEUDtBQUVOLGtCQUFZO0FBRk47QUFSUyxHQUFuQixDQWRtQyxDQTRCbkM7O0FBQ0FDLGtEQUFTLENBQUMsTUFBTTtBQUNkQyxhQUFTLENBQUNDLFdBQVYsQ0FBc0JDLGtCQUF0QixDQUF5QyxVQUFVQyxRQUFWLEVBQW9CO0FBQzNEOUIsaUJBQVcsQ0FBQztBQUNWK0IsZ0JBQVEsRUFBRUQsUUFBUSxDQUFDRSxNQUFULENBQWdCRCxRQURoQjtBQUVWRSxpQkFBUyxFQUFFSCxRQUFRLENBQUNFLE1BQVQsQ0FBZ0JDLFNBRmpCO0FBR1ZDLFlBQUksRUFBRSxFQUhJO0FBSVZDLGFBQUssRUFBRSxPQUpHO0FBS1ZDLGNBQU0sRUFBRTtBQUxFLE9BQUQsQ0FBWDtBQU9BN0IsZ0JBQVUsQ0FBQyxDQUNUO0FBQ0V3QixnQkFBUSxFQUFFRCxRQUFRLENBQUNFLE1BQVQsQ0FBZ0JELFFBRDVCO0FBRUVFLGlCQUFTLEVBQUVILFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQkM7QUFGN0IsT0FEUyxDQUFELENBQVY7QUFPQUksOERBQVMsQ0FBQ1AsUUFBUSxDQUFDRSxNQUFULENBQWdCQyxTQUFqQixFQUE0QkgsUUFBUSxDQUFDRSxNQUFULENBQWdCRCxRQUE1QyxDQUFULENBQStETyxJQUEvRCxDQUNFQyxJQUFJLElBQUk7QUFDTjVCLHFCQUFhLENBQUM0QixJQUFELENBQWI7QUFDRCxPQUhIO0FBS0QsS0FwQkQ7QUFxQkQsR0F0QlEsRUFzQk4sRUF0Qk0sQ0FBVCxDQTdCbUMsQ0FxRG5DOztBQUNBLFFBQU1DLG9CQUFvQixHQUFHQyxXQUFXLElBQUk7QUFDMUN6QyxlQUFXLENBQUN5QyxXQUFELENBQVg7QUFDRCxHQUZELENBdERtQyxDQTBEbkM7OztBQUNBLFdBQVNDLEtBQVQsQ0FBZUMsR0FBZixFQUFvQkMsR0FBcEIsRUFBeUI7QUFDdkIsV0FBT0MsSUFBSSxDQUFDSCxLQUFMLENBQVdDLEdBQUcsR0FBR0UsSUFBSSxDQUFDQyxHQUFMLENBQVMsRUFBVCxFQUFhRixHQUFiLENBQWpCLElBQXNDQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxFQUFULEVBQWFGLEdBQWIsQ0FBN0M7QUFDRCxHQTdEa0MsQ0ErRG5DOzs7QUFDQSxRQUFNRyw4QkFBOEIsR0FBR04sV0FBVyxJQUFJO0FBQ3BELFVBQU1PLHdCQUF3QixHQUFHO0FBQy9CQyx3QkFBa0IsRUFBRVIsV0FBVyxDQUFDUTtBQURELEtBQWpDO0FBR0EsUUFBSSxDQUFDUixXQUFMLEVBQWtCO0FBQ2xCbEMsY0FBVSxDQUFDLENBQ1QsR0FBR0QsT0FETSxFQUVUO0FBQUV5QixjQUFRLEVBQUVVLFdBQVcsQ0FBQ1YsUUFBeEI7QUFBa0NFLGVBQVMsRUFBRVEsV0FBVyxDQUFDUjtBQUF6RCxLQUZTLENBQUQsQ0FBVjtBQUlBaUIsZ0VBQWEsQ0FBQzVDLE9BQUQsRUFBVW1DLFdBQVYsQ0FBYixDQUFvQ0gsSUFBcEMsQ0FBeUNhLElBQUksSUFBSTlDLE1BQU0sQ0FBQzhDLElBQUQsQ0FBdkQ7QUFFQWQsNERBQVMsQ0FBQ0ksV0FBVyxDQUFDUixTQUFiLEVBQXdCUSxXQUFXLENBQUNWLFFBQXBDLENBQVQsQ0FBdURPLElBQXZELENBQTREQyxJQUFJLElBQzlEMUIsa0JBQWtCLENBQUMwQixJQUFELENBRHBCO0FBSUFhLGNBQVUsQ0FBQyxNQUFNO0FBQ2ZyQyxhQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0QsS0FGUyxFQUVQMEIsV0FBVyxDQUFDUSxrQkFGTCxDQUFWO0FBR0EsV0FBT1Qsb0JBQW9CLGlDQUN0QkMsV0FEc0I7QUFFekJQLFVBQUksRUFBRU8sV0FBVyxDQUFDUDtBQUZPLE9BR3RCYyx3QkFIc0IsRUFBM0I7QUFLRCxHQXZCRDs7QUF5QkEsUUFBTUssV0FBVyxHQUFHLE1BQU07QUFDeEJoRCxVQUFNLENBQUMsSUFBRCxDQUFOO0FBQ0FFLGNBQVUsQ0FBQ0QsT0FBTyxDQUFDZ0QsS0FBUixDQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FBRCxDQUFWO0FBQ0F2QyxXQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0QsR0FKRDs7QUFNQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw2QkFFRSw4REFBQyxxREFBRDtBQUNFLFdBQUcsRUFBRWI7QUFEUCxTQUVNSCxRQUZOO0FBR0Usd0JBQWdCLEVBQUV5QyxvQkFIcEI7QUFJRSw0QkFBb0IsRUFBRWhELFlBSnhCO0FBS0UsZ0JBQVEsRUFBQyxvQ0FMWDtBQUFBLGdDQVFFLDhEQUFDLDJEQUFEO0FBQW1CLGVBQUssRUFBRUU7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRixFQVVHVSxHQUFHLElBQUksSUFBUCxnQkFDQyw4REFBQyxnREFBRDtBQUNFLFlBQUUsRUFBQyxPQURMO0FBRUUsY0FBSSxFQUFDLFNBRlA7QUFHRSxjQUFJLEVBQUU7QUFDSmtCLGdCQUFJLEVBQUUsU0FERjtBQUVKaUMsc0JBQVUsRUFBRSxFQUZSO0FBR0pDLG9CQUFRLEVBQUU7QUFDUmxDLGtCQUFJLEVBQUUsWUFERTtBQUVSbUMseUJBQVcsRUFBRXJELEdBQUYsYUFBRUEsR0FBRix3Q0FBRUEsR0FBRyxDQUFFb0QsUUFBUCxrREFBRSxjQUFlQztBQUZwQjtBQUhOLFdBSFI7QUFBQSxpQ0FZRSw4REFBQywrQ0FBRCxvQkFBV3JDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZ0JBZ0JDLDZJQTFCSixFQTZCR2QsT0FBTyxDQUFDb0QsTUFBUixJQUNDcEQsT0FBTyxDQUFDcUQsR0FBUixDQUFZLENBQUNDLEtBQUQsRUFBUXZDLEVBQVIsa0JBQ1Y7QUFBQSxrQ0FDRSw4REFBQyxnREFBRDtBQUNFLG9CQUFRLEVBQUV3QyxNQUFNLENBQUNELEtBQUQsYUFBQ0EsS0FBRCx1QkFBQ0EsS0FBSyxDQUFFN0IsUUFBUixDQURsQjtBQUVFLHFCQUFTLEVBQUU4QixNQUFNLENBQUNELEtBQUQsYUFBQ0EsS0FBRCx1QkFBQ0EsS0FBSyxDQUFFM0IsU0FBUixDQUZuQjtBQUdFLHNCQUFVLEVBQUUsQ0FBQyxFQUhmO0FBSUUscUJBQVMsRUFBRSxDQUFDLEVBSmQ7QUFLRSxxQkFBUyxFQUFFLEtBTGI7QUFNRSxtQkFBTyxFQUFFLE1BQU14QixZQUFZLENBQUNZLEVBQUQsQ0FON0I7QUFBQSxtQ0FRRSw4REFBQyxtREFBRDtBQUNFLGlCQUFHLEVBQUMsb0RBRE47QUFFRSxpQkFBRyxFQUFDLGVBRk47QUFHRSxtQkFBSyxFQUFFLEVBSFQ7QUFJRSxvQkFBTSxFQUFFO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsRUFnQkdiLFNBQVMsS0FBS2EsRUFBZCxpQkFDQyw4REFBQywrQ0FBRDtBQUNFLG9CQUFRLEVBQUV1QyxLQUFGLGFBQUVBLEtBQUYsdUJBQUVBLEtBQUssQ0FBRTdCLFFBRG5CO0FBRUUscUJBQVMsRUFBRTZCLEtBQUYsYUFBRUEsS0FBRix1QkFBRUEsS0FBSyxDQUFFM0IsU0FGcEI7QUFHRSx1QkFBVyxFQUFFLElBSGY7QUFJRSx3QkFBWSxFQUFFLElBSmhCO0FBS0Usa0JBQU0sRUFBQyxLQUxUO0FBTUUsbUJBQU8sRUFBRSxNQUFNeEIsWUFBWSxDQUFDLENBQUMsQ0FBRixDQU43QjtBQUFBLG1DQVFFO0FBQUssbUJBQUssRUFBRTtBQUFFMEIscUJBQUssRUFBRTtBQUFULGVBQVo7QUFBQSx3QkFDR2QsRUFBRSxLQUFLLENBQVAsZ0JBQ0M7QUFBQSx1Q0FBWVgsVUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREQsZ0JBR0M7QUFBQSx3Q0FDRTtBQUFBLCtDQUFrQkUsZUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLGVBRUU7QUFBQSwwQ0FBYThCLEtBQUssQ0FBQyxDQUFBdEMsR0FBRyxTQUFILElBQUFBLEdBQUcsV0FBSCxZQUFBQSxHQUFHLENBQUUwRCxRQUFMLElBQWdCLElBQWpCLEVBQXVCLENBQXZCLENBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFGRixlQUdFO0FBQUEsMkNBQWNwQixLQUFLLENBQUMsQ0FBQXRDLEdBQUcsU0FBSCxJQUFBQSxHQUFHLFdBQUgsWUFBQUEsR0FBRyxDQUFFMkQsUUFBTCxJQUFnQixFQUFqQixFQUFxQixDQUFyQixDQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBakJKO0FBQUEsV0FBVTFDLEVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixDQTlCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBNkVFO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw2QkFDRSw4REFBQyw4REFBRDtBQUNFLGNBQU0sRUFBRW5CLE1BRFY7QUFFRSx3QkFBZ0IsRUFBRTZDLDhCQUZwQjtBQUdFLDRCQUFvQixFQUFFdkQsWUFIeEI7QUFJRSxnQkFBUSxFQUFDLFVBSlg7QUFLRSxtQkFBVyxFQUFDLHlCQUxkO0FBTUUsZUFBTyxFQUFFNkQsV0FOWDtBQU9FLGtCQUFVLEVBQUV2RCxZQUFZLEdBQUdBLFlBQUgsR0FBa0I7QUFQNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0VGLEVBd0ZHZ0IsSUFBSSxJQUFJLElBQVIsZ0JBQ0M7QUFBSyxlQUFTLEVBQUMsMEdBQWY7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQ0UsaUJBQVMsRUFBQyxtSEFEWjtBQUVFLGVBQU8sRUFBRSxNQUNQRyxPQUFPLENBQUN5QixLQUFLLENBQUNBLEtBQUssQ0FBQyxDQUFBdEMsR0FBRyxTQUFILElBQUFBLEdBQUcsV0FBSCxZQUFBQSxHQUFHLENBQUUwRCxRQUFMLElBQWdCLElBQWpCLEVBQXVCLENBQXZCLENBQUwsR0FBaUMsSUFBbEMsRUFBd0MsQ0FBeEMsQ0FBTixDQUhYO0FBQUEsZ0NBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkYsZUFPRTtBQUFBLGdDQUFXcEIsS0FBSyxDQUFDQSxLQUFLLENBQUMsQ0FBQXRDLEdBQUcsU0FBSCxJQUFBQSxHQUFHLFdBQUgsWUFBQUEsR0FBRyxDQUFFMEQsUUFBTCxJQUFnQixJQUFqQixFQUF1QixDQUF2QixDQUFMLEdBQWlDLElBQWxDLEVBQXdDLENBQXhDLENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFXRTtBQUNFLGlCQUFTLEVBQUMsa0hBRFo7QUFFRSxlQUFPLEVBQUUsTUFDUDdDLE9BQU8sQ0FBQ3lCLEtBQUssQ0FBQ0EsS0FBSyxDQUFDLENBQUF0QyxHQUFHLFNBQUgsSUFBQUEsR0FBRyxXQUFILFlBQUFBLEdBQUcsQ0FBRTBELFFBQUwsSUFBZ0IsSUFBakIsRUFBdUIsQ0FBdkIsQ0FBTCxHQUFpQyxJQUFsQyxFQUF3QyxDQUF4QyxDQUFOLENBSFg7QUFBQSxnQ0FNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFORixlQU9FO0FBQUEsZ0NBQVdwQixLQUFLLENBQUNBLEtBQUssQ0FBQyxDQUFBdEMsR0FBRyxTQUFILElBQUFBLEdBQUcsV0FBSCxZQUFBQSxHQUFHLENBQUUwRCxRQUFMLElBQWdCLElBQWpCLEVBQXVCLENBQXZCLENBQUwsR0FBaUMsSUFBbEMsRUFBd0MsQ0FBeEMsQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYRixlQW9CRTtBQUNFLGlCQUFTLEVBQUMsa0hBRFo7QUFFRSxlQUFPLEVBQUUsTUFDUDdDLE9BQU8sQ0FBQ3lCLEtBQUssQ0FBQ0EsS0FBSyxDQUFDLENBQUF0QyxHQUFHLFNBQUgsSUFBQUEsR0FBRyxXQUFILFlBQUFBLEdBQUcsQ0FBRTBELFFBQUwsSUFBZ0IsSUFBakIsRUFBdUIsQ0FBdkIsQ0FBTCxHQUFpQyxJQUFsQyxFQUF3QyxDQUF4QyxDQUFOLENBSFg7QUFBQSxnQ0FNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFORixlQU9FO0FBQUEsZ0NBQVdwQixLQUFLLENBQUNBLEtBQUssQ0FBQyxDQUFBdEMsR0FBRyxTQUFILElBQUFBLEdBQUcsV0FBSCxZQUFBQSxHQUFHLENBQUUwRCxRQUFMLElBQWdCLElBQWpCLEVBQXVCLENBQXZCLENBQUwsR0FBaUMsSUFBbEMsRUFBd0MsQ0FBeEMsQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFwQkYsRUE2Qkc5QyxJQUFJLGlCQUNILDhEQUFDLHdFQUFEO0FBQ0UsYUFBSyxFQUFDLFdBRFI7QUFFRSxZQUFJLEVBQUMsUUFGUDtBQUdFLGNBQU0sRUFBQyxPQUhUO0FBSUUsaUJBQVMsRUFBQyxNQUpaO0FBS0UsZUFBTyxFQUFFLE1BQU1HLFlBQVksQ0FBQyxJQUFELENBTDdCO0FBQUEsZ0NBT1lILElBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTlCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsR0EyQ0MsRUFuSUosZUFzSUUsOERBQUMsaURBQUQ7QUFDRSxlQUFTLEVBQUVFLFNBRGI7QUFFRSxrQkFBWSxFQUFFQyxZQUZoQjtBQUdFLFdBQUssRUFBRUg7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRJRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQThJRCxDQTdPRDs7QUErT0EsK0RBQWVuQixNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTW1FLFdBQVcsR0FBRyxDQUFDO0FBQUU5QyxXQUFGO0FBQWFDLGNBQWI7QUFBMkI4QztBQUEzQixDQUFELEtBQXdDO0FBQzFELFFBQU1DLElBQUksR0FBR0Msd0RBQVcsQ0FBQ0MsaUVBQUQsQ0FBeEI7QUFFQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLHVFQUFEO0FBQU8sVUFBSSxFQUFDLElBQVo7QUFBaUIsWUFBTSxFQUFFbEQsU0FBekI7QUFBb0MsYUFBTyxFQUFFLE1BQU1DLFlBQVksQ0FBQyxLQUFELENBQS9EO0FBQUEsOEJBQ0UsOERBQUMsNkVBQUQ7QUFBYSxlQUFPLEVBQUUsTUFBTUEsWUFBWSxDQUFDLEtBQUQsQ0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRSw4REFBQywyRUFBRDtBQUFBLCtCQUNFLDhEQUFDLGdFQUFEO0FBQ0UsZ0JBQU0sRUFBRThDLEtBRFY7QUFFRSxtQkFBUyxFQUFFLENBQUNJLE9BQUQsRUFBVWxCLElBQVYsS0FBbUI7QUFDNUJtQixpQkFBSyxDQUFDLCtCQUE4QkosSUFBOUIsYUFBOEJBLElBQTlCLHVCQUE4QkEsSUFBSSxDQUFFSyxLQUFwQyxDQUFELENBQUw7QUFDQXBELHdCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0QsV0FMSDtBQU1FLGlCQUFPLEVBQUU7QUFDUHFELG9CQUFRLEVBQUUvRSxrRkFBa0NnRjtBQURyQztBQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBZ0JFLDhEQUFDLDZFQUFEO0FBQUEsZ0NBQ0UsOERBQUMsd0VBQUQ7QUFDRSxlQUFLLEVBQUMsS0FEUjtBQUVFLG9CQUFVLEVBQUMsTUFGYjtBQUdFLGlCQUFPLEVBQUVDLENBQUMsSUFBSXZELFlBQVksQ0FBQyxLQUFELENBSDVCO0FBSUUsZ0JBQU0sRUFBQyxNQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBVUUsOERBQUMsd0VBQUQ7QUFBUSxlQUFLLEVBQUMsT0FBZDtBQUFzQixnQkFBTSxFQUFDLE9BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBbUNELENBdENEOztBQXdDQSwrREFBZTZDLFdBQWYsRTs7Ozs7Ozs7Ozs7QUNqRGE7O0FBQUEsSUFBSVcsc0JBQXNCLEdBQUNDLG1CQUFPLENBQUMsc0lBQUQsQ0FBbEM7O0FBQW1GQyxrQkFBQSxHQUFtQixJQUFuQjtBQUF3QkEsZUFBQSxHQUFnQkMsS0FBaEI7O0FBQXNCLElBQUlDLDhCQUE4QixHQUFDSixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvSkFBRCxDQUFSLENBQXpEOztBQUEwSCxJQUFJSSxTQUFTLEdBQUNMLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLDBHQUFELENBQVIsQ0FBcEM7O0FBQWdGLElBQUlLLE1BQU0sR0FBQ04sc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFqQzs7QUFBb0QsSUFBSU0sS0FBSyxHQUFDUCxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyx3REFBRCxDQUFSLENBQWhDOztBQUFxRSxJQUFJTyxPQUFPLEdBQUNQLG1CQUFPLENBQUMsb0VBQUQsQ0FBbkI7O0FBQXFELElBQUlRLFlBQVksR0FBQ1IsbUJBQU8sQ0FBQyw4RUFBRCxDQUF4Qjs7QUFBK0QsSUFBSVMsZ0JBQWdCLEdBQUNULG1CQUFPLENBQUMsK0VBQUQsQ0FBNUI7O0FBQW1ELFVBQStCO0FBQUM7QUFBQ1UsUUFBTSxDQUFDQyxxQkFBUCxHQUE2QixJQUE3QjtBQUFtQzs7QUFBQSxNQUFNQyxvQkFBb0IsR0FBQyxDQUFDLE1BQUQsRUFBUSxPQUFSLEVBQWdCQyxTQUFoQixDQUEzQjtBQUFzRCxNQUFNQyxPQUFPLEdBQUMsSUFBSUMsR0FBSixDQUFRLENBQUMsQ0FBQyxPQUFELEVBQVNDLFdBQVQsQ0FBRCxFQUF1QixDQUFDLFlBQUQsRUFBY0MsZ0JBQWQsQ0FBdkIsRUFBdUQsQ0FBQyxRQUFELEVBQVVDLFlBQVYsQ0FBdkQsRUFBK0UsQ0FBQyxTQUFELEVBQVdDLGFBQVgsQ0FBL0UsQ0FBUixDQUFkO0FBQWlJLE1BQU1DLG1CQUFtQixHQUFDLENBQUMsTUFBRCxFQUFRLE9BQVIsRUFBZ0IsV0FBaEIsRUFBNEIsWUFBNUIsRUFBeUNQLFNBQXpDLENBQTFCOztBQUE4RSxTQUFTUSxlQUFULENBQXlCQyxHQUF6QixFQUE2QjtBQUFDLFNBQU9BLEdBQUcsQ0FBQ0MsT0FBSixLQUFjVixTQUFyQjtBQUFnQzs7QUFBQSxTQUFTVyxpQkFBVCxDQUEyQkYsR0FBM0IsRUFBK0I7QUFBQyxTQUFPQSxHQUFHLENBQUNBLEdBQUosS0FBVVQsU0FBakI7QUFBNEI7O0FBQUEsU0FBU1ksY0FBVCxDQUF3QkgsR0FBeEIsRUFBNEI7QUFBQyxTQUFPLE9BQU9BLEdBQVAsS0FBYSxRQUFiLEtBQXdCRCxlQUFlLENBQUNDLEdBQUQsQ0FBZixJQUFzQkUsaUJBQWlCLENBQUNGLEdBQUQsQ0FBL0QsQ0FBUDtBQUE4RTs7QUFBQSxNQUFLO0FBQUNJLGFBQVcsRUFBQ0MsaUJBQWI7QUFBK0JDLFlBQVUsRUFBQ0MsZ0JBQTFDO0FBQTJEQyxRQUFNLEVBQUNDLFlBQWxFO0FBQStFQyxNQUFJLEVBQUNDLFVBQXBGO0FBQStGQyxTQUFPLEVBQUNDO0FBQXZHLElBQXNIdEgsc0tBQUEsSUFBK0IyRixZQUFZLENBQUM0QixrQkFBdkssQyxDQUEwTDs7QUFDaDJDLE1BQU1DLFFBQVEsR0FBQyxDQUFDLEdBQUdWLGlCQUFKLEVBQXNCLEdBQUdFLGdCQUF6QixDQUFmO0FBQTBERixpQkFBaUIsQ0FBQ1csSUFBbEIsQ0FBdUIsQ0FBQ0MsQ0FBRCxFQUFHQyxDQUFILEtBQU9ELENBQUMsR0FBQ0MsQ0FBaEM7QUFBbUNILFFBQVEsQ0FBQ0MsSUFBVCxDQUFjLENBQUNDLENBQUQsRUFBR0MsQ0FBSCxLQUFPRCxDQUFDLEdBQUNDLENBQXZCOztBQUEwQixTQUFTQyxTQUFULENBQW1CbEYsS0FBbkIsRUFBeUJWLE1BQXpCLEVBQWdDNkYsS0FBaEMsRUFBc0M7QUFBQyxNQUFHQSxLQUFLLEtBQUc3RixNQUFNLEtBQUcsTUFBVCxJQUFpQkEsTUFBTSxLQUFHLFlBQTdCLENBQVIsRUFBbUQ7QUFBQztBQUNsTixVQUFNOEYsZUFBZSxHQUFDLG9CQUF0QjtBQUEyQyxVQUFNQyxZQUFZLEdBQUMsRUFBbkI7O0FBQXNCLFNBQUksSUFBSUMsS0FBUixFQUFjQSxLQUFLLEdBQUNGLGVBQWUsQ0FBQ0csSUFBaEIsQ0FBcUJKLEtBQXJCLENBQXBCLEVBQWdERyxLQUFoRCxFQUFzRDtBQUFDRCxrQkFBWSxDQUFDRyxJQUFiLENBQWtCQyxRQUFRLENBQUNILEtBQUssQ0FBQyxDQUFELENBQU4sQ0FBMUI7QUFBdUM7O0FBQUEsUUFBR0QsWUFBWSxDQUFDOUQsTUFBaEIsRUFBdUI7QUFBQyxZQUFNbUUsYUFBYSxHQUFDaEYsSUFBSSxDQUFDaUYsR0FBTCxDQUFTLEdBQUdOLFlBQVosSUFBMEIsSUFBOUM7QUFBbUQsYUFBTTtBQUFDTyxjQUFNLEVBQUNkLFFBQVEsQ0FBQ2UsTUFBVCxDQUFnQkMsQ0FBQyxJQUFFQSxDQUFDLElBQUUxQixpQkFBaUIsQ0FBQyxDQUFELENBQWpCLEdBQXFCc0IsYUFBM0MsQ0FBUjtBQUFrRUssWUFBSSxFQUFDO0FBQXZFLE9BQU47QUFBbUY7O0FBQUEsV0FBTTtBQUFDSCxZQUFNLEVBQUNkLFFBQVI7QUFBaUJpQixVQUFJLEVBQUM7QUFBdEIsS0FBTjtBQUFrQzs7QUFBQSxNQUFHLE9BQU8vRixLQUFQLEtBQWUsUUFBZixJQUF5QlYsTUFBTSxLQUFHLE1BQWxDLElBQTBDQSxNQUFNLEtBQUcsWUFBdEQsRUFBbUU7QUFBQyxXQUFNO0FBQUNzRyxZQUFNLEVBQUN4QixpQkFBUjtBQUEwQjJCLFVBQUksRUFBQztBQUEvQixLQUFOO0FBQTJDOztBQUFBLFFBQU1ILE1BQU0sR0FBQyxDQUFDLEdBQUcsSUFBSUksR0FBSixFQUFRO0FBQ3ZlO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBQ2hHLEtBQUQsRUFBT0EsS0FBSyxHQUFDO0FBQUM7QUFBZCxJQUErQndCLEdBQS9CLENBQW1DeUUsQ0FBQyxJQUFFbkIsUUFBUSxDQUFDb0IsSUFBVCxDQUFjQyxDQUFDLElBQUVBLENBQUMsSUFBRUYsQ0FBcEIsS0FBd0JuQixRQUFRLENBQUNBLFFBQVEsQ0FBQ3ZELE1BQVQsR0FBZ0IsQ0FBakIsQ0FBdEUsQ0FSK2QsQ0FBSixDQUFiO0FBUWpYLFNBQU07QUFBQ3FFLFVBQUQ7QUFBUUcsUUFBSSxFQUFDO0FBQWIsR0FBTjtBQUF5Qjs7QUFBQSxTQUFTSyxnQkFBVCxDQUEwQjtBQUFDckMsS0FBRDtBQUFLc0MsYUFBTDtBQUFpQi9HLFFBQWpCO0FBQXdCVSxPQUF4QjtBQUE4QnNHLFNBQTlCO0FBQXNDbkIsT0FBdEM7QUFBNENaO0FBQTVDLENBQTFCLEVBQThFO0FBQUMsTUFBRzhCLFdBQUgsRUFBZTtBQUFDLFdBQU07QUFBQ3RDLFNBQUQ7QUFBS3dDLFlBQU0sRUFBQ2pELFNBQVo7QUFBc0I2QixXQUFLLEVBQUM3QjtBQUE1QixLQUFOO0FBQThDOztBQUFBLFFBQUs7QUFBQ3NDLFVBQUQ7QUFBUUc7QUFBUixNQUFjYixTQUFTLENBQUNsRixLQUFELEVBQU9WLE1BQVAsRUFBYzZGLEtBQWQsQ0FBNUI7QUFBaUQsUUFBTXFCLElBQUksR0FBQ1osTUFBTSxDQUFDckUsTUFBUCxHQUFjLENBQXpCO0FBQTJCLFNBQU07QUFBQzRELFNBQUssRUFBQyxDQUFDQSxLQUFELElBQVFZLElBQUksS0FBRyxHQUFmLEdBQW1CLE9BQW5CLEdBQTJCWixLQUFsQztBQUF3Q29CLFVBQU0sRUFBQ1gsTUFBTSxDQUFDcEUsR0FBUCxDQUFXLENBQUN5RSxDQUFELEVBQUdRLENBQUgsS0FBUSxHQUFFbEMsTUFBTSxDQUFDO0FBQUNSLFNBQUQ7QUFBS3VDLGFBQUw7QUFBYXRHLFdBQUssRUFBQ2lHO0FBQW5CLEtBQUQsQ0FBd0IsSUFBR0YsSUFBSSxLQUFHLEdBQVAsR0FBV0UsQ0FBWCxHQUFhUSxDQUFDLEdBQUMsQ0FBRSxHQUFFVixJQUFLLEVBQTlFLEVBQWlGVyxJQUFqRixDQUFzRixJQUF0RixDQUEvQztBQUEySTtBQUNoZTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EzQyxPQUFHLEVBQUNRLE1BQU0sQ0FBQztBQUFDUixTQUFEO0FBQUt1QyxhQUFMO0FBQWF0RyxXQUFLLEVBQUM0RixNQUFNLENBQUNZLElBQUQ7QUFBekIsS0FBRDtBQU4yVSxHQUFOO0FBTWhTOztBQUFBLFNBQVNHLE1BQVQsQ0FBZ0JDLENBQWhCLEVBQWtCO0FBQUMsTUFBRyxPQUFPQSxDQUFQLEtBQVcsUUFBZCxFQUF1QjtBQUFDLFdBQU9BLENBQVA7QUFBVTs7QUFBQSxNQUFHLE9BQU9BLENBQVAsS0FBVyxRQUFkLEVBQXVCO0FBQUMsV0FBT25CLFFBQVEsQ0FBQ21CLENBQUQsRUFBRyxFQUFILENBQWY7QUFBdUI7O0FBQUEsU0FBT3RELFNBQVA7QUFBa0I7O0FBQUEsU0FBU3VELGtCQUFULENBQTRCQyxXQUE1QixFQUF3QztBQUFDLFFBQU1DLElBQUksR0FBQ3hELE9BQU8sQ0FBQ3lELEdBQVIsQ0FBWXhDLFlBQVosQ0FBWDs7QUFBcUMsTUFBR3VDLElBQUgsRUFBUTtBQUFDLFdBQU9BLElBQUksQ0FBQyxDQUFDLEdBQUVsRSxTQUFTLENBQUNtQixPQUFiLEVBQXNCO0FBQUNpRCxVQUFJLEVBQUN2QztBQUFOLEtBQXRCLEVBQXdDb0MsV0FBeEMsQ0FBRCxDQUFYO0FBQW1FOztBQUFBLFFBQU0sSUFBSUksS0FBSixDQUFXLHlEQUF3RGpFLFlBQVksQ0FBQ2tFLGFBQWIsQ0FBMkJULElBQTNCLENBQWdDLElBQWhDLENBQXNDLGVBQWNsQyxZQUFhLEVBQXBJLENBQU47QUFBOEksQyxDQUFBO0FBQzdjOzs7QUFDQSxTQUFTNEMsaUJBQVQsQ0FBMkJDLEdBQTNCLEVBQStCQyxXQUEvQixFQUEyQztBQUFDLE1BQUdBLFdBQVcsS0FBRyxNQUFkLElBQXNCRCxHQUF6QixFQUE2QjtBQUFDLFVBQU1FLFVBQVUsR0FBQyxNQUFJO0FBQUMsVUFBRyxDQUFDRixHQUFHLENBQUN0RCxHQUFKLENBQVF5RCxVQUFSLENBQW1CLE9BQW5CLENBQUosRUFBZ0M7QUFBQyxjQUFNckIsQ0FBQyxHQUFDLFlBQVdrQixHQUFYLEdBQWVBLEdBQUcsQ0FBQ0ksTUFBSixFQUFmLEdBQTRCQyxPQUFPLENBQUNDLE9BQVIsRUFBcEM7QUFBc0R4QixTQUFDLENBQUN5QixLQUFGLENBQVEsTUFBSSxDQUFFLENBQWQsRUFBZ0J6SCxJQUFoQixDQUFxQixNQUFJO0FBQUNrSCxhQUFHLENBQUNRLEtBQUosQ0FBVWhDLE1BQVYsR0FBaUIsTUFBakI7QUFBd0J3QixhQUFHLENBQUNRLEtBQUosQ0FBVUMsY0FBVixHQUF5QixNQUF6QjtBQUFnQ1QsYUFBRyxDQUFDUSxLQUFKLENBQVVFLGVBQVYsR0FBMEIsTUFBMUI7QUFBa0MsU0FBcEg7QUFBdUg7QUFBQyxLQUFyTzs7QUFBc08sUUFBR1YsR0FBRyxDQUFDVyxRQUFQLEVBQWdCO0FBQUM7QUFDalU7QUFDQTtBQUNBVCxnQkFBVTtBQUFJLEtBSGtTLE1BRzlSO0FBQUNGLFNBQUcsQ0FBQ1ksTUFBSixHQUFXVixVQUFYO0FBQXVCO0FBQUM7QUFBQzs7QUFBQSxTQUFTNUUsS0FBVCxDQUFldUYsSUFBZixFQUFvQjtBQUFDLE1BQUc7QUFBQ25FLE9BQUQ7QUFBS29CLFNBQUw7QUFBV2tCLGVBQVcsR0FBQyxLQUF2QjtBQUE2QjhCLFlBQVEsR0FBQyxLQUF0QztBQUE0Q0MsV0FBNUM7QUFBb0RDLGFBQXBEO0FBQThEL0IsV0FBOUQ7QUFBc0V0RyxTQUF0RTtBQUE0RUMsVUFBNUU7QUFBbUZxSSxhQUFuRjtBQUE2RkMsa0JBQTdGO0FBQTRHaEUsVUFBTSxHQUFDc0Msa0JBQW5IO0FBQXNJUyxlQUFXLEdBQUMsT0FBbEo7QUFBMEprQjtBQUExSixNQUF1S04sSUFBMUs7QUFBQSxNQUErS08sR0FBRyxHQUFDLENBQUMsR0FBRTdGLDhCQUE4QixDQUFDb0IsT0FBbEMsRUFBMkNrRSxJQUEzQyxFQUFnRCxDQUFDLEtBQUQsRUFBTyxPQUFQLEVBQWUsYUFBZixFQUE2QixVQUE3QixFQUF3QyxTQUF4QyxFQUFrRCxXQUFsRCxFQUE4RCxTQUE5RCxFQUF3RSxPQUF4RSxFQUFnRixRQUFoRixFQUF5RixXQUF6RixFQUFxRyxnQkFBckcsRUFBc0gsUUFBdEgsRUFBK0gsYUFBL0gsRUFBNkksYUFBN0ksQ0FBaEQsQ0FBbkw7QUFBZ1ksTUFBSVEsSUFBSSxHQUFDRCxHQUFUO0FBQWEsTUFBSW5KLE1BQU0sR0FBQzZGLEtBQUssR0FBQyxZQUFELEdBQWMsV0FBOUI7O0FBQTBDLE1BQUcsWUFBV3VELElBQWQsRUFBbUI7QUFBQztBQUM1Z0IsUUFBR0EsSUFBSSxDQUFDcEosTUFBUixFQUFlQSxNQUFNLEdBQUNvSixJQUFJLENBQUNwSixNQUFaLENBRDRmLENBQ3plOztBQUNsQyxXQUFPb0osSUFBSSxDQUFDLFFBQUQsQ0FBWDtBQUF1Qjs7QUFBQSxNQUFJQyxTQUFTLEdBQUMsRUFBZDs7QUFBaUIsTUFBR3pFLGNBQWMsQ0FBQ0gsR0FBRCxDQUFqQixFQUF1QjtBQUFDLFVBQU02RSxlQUFlLEdBQUM5RSxlQUFlLENBQUNDLEdBQUQsQ0FBZixHQUFxQkEsR0FBRyxDQUFDQyxPQUF6QixHQUFpQ0QsR0FBdkQ7O0FBQTJELFFBQUcsQ0FBQzZFLGVBQWUsQ0FBQzdFLEdBQXBCLEVBQXdCO0FBQUMsWUFBTSxJQUFJbUQsS0FBSixDQUFXLDhJQUE2STJCLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixlQUFmLENBQWdDLEVBQXhMLENBQU47QUFBa007O0FBQUFKLGVBQVcsR0FBQ0EsV0FBVyxJQUFFSSxlQUFlLENBQUNKLFdBQXpDO0FBQXFERyxhQUFTLEdBQUNDLGVBQWUsQ0FBQzdFLEdBQTFCOztBQUE4QixRQUFHLENBQUN6RSxNQUFELElBQVNBLE1BQU0sS0FBRyxNQUFyQixFQUE0QjtBQUFDVyxZQUFNLEdBQUNBLE1BQU0sSUFBRTJJLGVBQWUsQ0FBQzNJLE1BQS9CO0FBQXNDRCxXQUFLLEdBQUNBLEtBQUssSUFBRTRJLGVBQWUsQ0FBQzVJLEtBQTdCOztBQUFtQyxVQUFHLENBQUM0SSxlQUFlLENBQUMzSSxNQUFqQixJQUF5QixDQUFDMkksZUFBZSxDQUFDNUksS0FBN0MsRUFBbUQ7QUFBQyxjQUFNLElBQUlrSCxLQUFKLENBQVcsMkpBQTBKMkIsSUFBSSxDQUFDQyxTQUFMLENBQWVGLGVBQWYsQ0FBZ0MsRUFBck0sQ0FBTjtBQUErTTtBQUFDO0FBQUM7O0FBQUE3RSxLQUFHLEdBQUMsT0FBT0EsR0FBUCxLQUFhLFFBQWIsR0FBc0JBLEdBQXRCLEdBQTBCNEUsU0FBOUI7QUFBd0MsUUFBTUksUUFBUSxHQUFDcEMsTUFBTSxDQUFDM0csS0FBRCxDQUFyQjtBQUE2QixRQUFNZ0osU0FBUyxHQUFDckMsTUFBTSxDQUFDMUcsTUFBRCxDQUF0QjtBQUErQixRQUFNZ0osVUFBVSxHQUFDdEMsTUFBTSxDQUFDTCxPQUFELENBQXZCOztBQUFpQyxZQUF1QztBQUFDLFFBQUcsQ0FBQ3ZDLEdBQUosRUFBUTtBQUFDLFlBQU0sSUFBSW1ELEtBQUosQ0FBVywwSEFBeUgyQixJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFDOUksYUFBRDtBQUFPQyxjQUFQO0FBQWNxRztBQUFkLE9BQWYsQ0FBdUMsRUFBM0ssQ0FBTjtBQUFxTDs7QUFBQSxRQUFHLENBQUN6QyxtQkFBbUIsQ0FBQ3FGLFFBQXBCLENBQTZCNUosTUFBN0IsQ0FBSixFQUF5QztBQUFDLFlBQU0sSUFBSTRILEtBQUosQ0FBVyxtQkFBa0JuRCxHQUFJLDhDQUE2Q3pFLE1BQU8sc0JBQXFCdUUsbUJBQW1CLENBQUNyQyxHQUFwQixDQUF3QjJILE1BQXhCLEVBQWdDekMsSUFBaEMsQ0FBcUMsR0FBckMsQ0FBMEMsR0FBcEosQ0FBTjtBQUErSjs7QUFBQSxRQUFHLE9BQU9xQyxRQUFQLEtBQWtCLFdBQWxCLElBQStCSyxLQUFLLENBQUNMLFFBQUQsQ0FBcEMsSUFBZ0QsT0FBT0MsU0FBUCxLQUFtQixXQUFuQixJQUFnQ0ksS0FBSyxDQUFDSixTQUFELENBQXhGLEVBQW9HO0FBQUMsWUFBTSxJQUFJOUIsS0FBSixDQUFXLG1CQUFrQm5ELEdBQUksNkVBQWpDLENBQU47QUFBc0g7O0FBQUEsUUFBRyxDQUFDVixvQkFBb0IsQ0FBQzZGLFFBQXJCLENBQThCZCxPQUE5QixDQUFKLEVBQTJDO0FBQUMsWUFBTSxJQUFJbEIsS0FBSixDQUFXLG1CQUFrQm5ELEdBQUksK0NBQThDcUUsT0FBUSxzQkFBcUIvRSxvQkFBb0IsQ0FBQzdCLEdBQXJCLENBQXlCMkgsTUFBekIsRUFBaUN6QyxJQUFqQyxDQUFzQyxHQUF0QyxDQUEyQyxHQUF2SixDQUFOO0FBQWtLOztBQUFBLFFBQUd5QixRQUFRLElBQUVDLE9BQU8sS0FBRyxNQUF2QixFQUE4QjtBQUFDLFlBQU0sSUFBSWxCLEtBQUosQ0FBVyxtQkFBa0JuRCxHQUFJLGlGQUFqQyxDQUFOO0FBQTBIOztBQUFBLFFBQUd1RCxXQUFXLEtBQUcsTUFBakIsRUFBd0I7QUFBQyxVQUFHaEksTUFBTSxLQUFHLE1BQVQsSUFBaUIsQ0FBQ3lKLFFBQVEsSUFBRSxDQUFYLEtBQWVDLFNBQVMsSUFBRSxDQUExQixJQUE2QixJQUFqRCxFQUFzRDtBQUFDSyxlQUFPLENBQUNDLElBQVIsQ0FBYyxtQkFBa0J2RixHQUFJLHNHQUFwQztBQUE0STs7QUFBQSxVQUFHLENBQUN5RSxXQUFKLEVBQWdCO0FBQUMsY0FBTWUsY0FBYyxHQUFDLENBQUMsTUFBRCxFQUFRLEtBQVIsRUFBYyxNQUFkLENBQXJCLENBQUQsQ0FBNEM7O0FBQ2xxRSxjQUFNLElBQUlyQyxLQUFKLENBQVcsbUJBQWtCbkQsR0FBSTtBQUN2QztBQUNBO0FBQ0EsbUdBQW1Hd0YsY0FBYyxDQUFDN0MsSUFBZixDQUFvQixHQUFwQixDQUF5QjtBQUM1SDtBQUNBLGdGQUxNLENBQU47QUFLbUY7QUFBQztBQUFDOztBQUFBLE1BQUk4QyxNQUFNLEdBQUMsQ0FBQ3JCLFFBQUQsS0FBWUMsT0FBTyxLQUFHLE1BQVYsSUFBa0IsT0FBT0EsT0FBUCxLQUFpQixXQUEvQyxDQUFYOztBQUF1RSxNQUFHckUsR0FBRyxJQUFFQSxHQUFHLENBQUN5RCxVQUFKLENBQWUsT0FBZixDQUFSLEVBQWdDO0FBQUM7QUFDN0xuQixlQUFXLEdBQUMsSUFBWjtBQUFpQm1ELFVBQU0sR0FBQyxLQUFQO0FBQWM7O0FBQUEsUUFBSyxDQUFDQyxNQUFELEVBQVFDLGFBQVIsSUFBdUIsQ0FBQyxHQUFFeEcsZ0JBQWdCLENBQUN5RyxlQUFwQixFQUFxQztBQUFDQyxjQUFVLEVBQUMsT0FBWjtBQUFvQkMsWUFBUSxFQUFDLENBQUNMO0FBQTlCLEdBQXJDLENBQTVCO0FBQXdHLFFBQU1NLFNBQVMsR0FBQyxDQUFDTixNQUFELElBQVNFLGFBQXpCO0FBQXVDLE1BQUlLLFlBQUo7QUFBaUIsTUFBSUMsVUFBSjtBQUFlLE1BQUlDLFFBQUo7QUFBYSxNQUFJQyxRQUFRLEdBQUMsQ0FBQyxHQUFFckgsU0FBUyxDQUFDbUIsT0FBYixFQUFzQjtBQUFDckUsWUFBUSxFQUFDLFVBQVY7QUFBcUJsQyxPQUFHLEVBQUMsQ0FBekI7QUFBMkIwTSxRQUFJLEVBQUMsQ0FBaEM7QUFBa0NDLFVBQU0sRUFBQyxDQUF6QztBQUEyQzVNLFNBQUssRUFBQyxDQUFqRDtBQUFtRDZNLGFBQVMsRUFBQyxZQUE3RDtBQUEwRUMsV0FBTyxFQUFDLENBQWxGO0FBQW9GQyxVQUFNLEVBQUMsTUFBM0Y7QUFBa0dDLFVBQU0sRUFBQyxNQUF6RztBQUFnSEMsV0FBTyxFQUFDLE9BQXhIO0FBQWdJekssU0FBSyxFQUFDLENBQXRJO0FBQXdJQyxVQUFNLEVBQUMsQ0FBL0k7QUFBaUp5SyxZQUFRLEVBQUMsTUFBMUo7QUFBaUtDLFlBQVEsRUFBQyxNQUExSztBQUFpTEMsYUFBUyxFQUFDLE1BQTNMO0FBQWtNQyxhQUFTLEVBQUMsTUFBNU07QUFBbU52QyxhQUFuTjtBQUE2TkM7QUFBN04sR0FBdEIsRUFBbVFqQixXQUFXLEtBQUcsTUFBZCxHQUFxQjtBQUFDekIsVUFBTSxFQUFDLFlBQVI7QUFBcUJpQyxrQkFBYyxFQUFDLE9BQXBDO0FBQTRDQyxtQkFBZSxFQUFFLFFBQU9TLFdBQVk7QUFBaEYsR0FBckIsR0FBMEdsRixTQUE3VyxDQUFiOztBQUFxWSxNQUFHLE9BQU95RixRQUFQLEtBQWtCLFdBQWxCLElBQStCLE9BQU9DLFNBQVAsS0FBbUIsV0FBbEQsSUFBK0QxSixNQUFNLEtBQUcsTUFBM0UsRUFBa0Y7QUFBQztBQUNuckIsVUFBTXdMLFFBQVEsR0FBQzlCLFNBQVMsR0FBQ0QsUUFBekI7QUFBa0MsVUFBTWdDLFVBQVUsR0FBQzNCLEtBQUssQ0FBQzBCLFFBQUQsQ0FBTCxHQUFnQixNQUFoQixHQUF3QixHQUFFQSxRQUFRLEdBQUMsR0FBSSxHQUF4RDs7QUFBMkQsUUFBR3hMLE1BQU0sS0FBRyxZQUFaLEVBQXlCO0FBQUM7QUFDdkh5SyxrQkFBWSxHQUFDO0FBQUNVLGVBQU8sRUFBQyxPQUFUO0FBQWlCTyxnQkFBUSxFQUFDLFFBQTFCO0FBQW1DckwsZ0JBQVEsRUFBQyxVQUE1QztBQUF1RDBLLGlCQUFTLEVBQUMsWUFBakU7QUFBOEVHLGNBQU0sRUFBQztBQUFyRixPQUFiO0FBQXFHUixnQkFBVSxHQUFDO0FBQUNTLGVBQU8sRUFBQyxPQUFUO0FBQWlCSixpQkFBUyxFQUFDLFlBQTNCO0FBQXdDVTtBQUF4QyxPQUFYO0FBQWdFLEtBRHhFLE1BQzZFLElBQUd6TCxNQUFNLEtBQUcsV0FBWixFQUF3QjtBQUFDO0FBQ25NeUssa0JBQVksR0FBQztBQUFDVSxlQUFPLEVBQUMsY0FBVDtBQUF3QkUsZ0JBQVEsRUFBQyxNQUFqQztBQUF3Q0ssZ0JBQVEsRUFBQyxRQUFqRDtBQUEwRHJMLGdCQUFRLEVBQUMsVUFBbkU7QUFBOEUwSyxpQkFBUyxFQUFDLFlBQXhGO0FBQXFHRyxjQUFNLEVBQUM7QUFBNUcsT0FBYjtBQUE0SFIsZ0JBQVUsR0FBQztBQUFDSyxpQkFBUyxFQUFDLFlBQVg7QUFBd0JJLGVBQU8sRUFBQyxPQUFoQztBQUF3Q0UsZ0JBQVEsRUFBQztBQUFqRCxPQUFYO0FBQW9FVixjQUFRLEdBQUUsZUFBY2xCLFFBQVMsYUFBWUMsU0FBVSxzREFBdkQ7QUFBOEcsS0FEcEksTUFDeUksSUFBRzFKLE1BQU0sS0FBRyxPQUFaLEVBQW9CO0FBQUM7QUFDeFV5SyxrQkFBWSxHQUFDO0FBQUNpQixnQkFBUSxFQUFDLFFBQVY7QUFBbUJYLGlCQUFTLEVBQUMsWUFBN0I7QUFBMENJLGVBQU8sRUFBQyxjQUFsRDtBQUFpRTlLLGdCQUFRLEVBQUMsVUFBMUU7QUFBcUZLLGFBQUssRUFBQytJLFFBQTNGO0FBQW9HOUksY0FBTSxFQUFDK0k7QUFBM0csT0FBYjtBQUFvSTtBQUFDLEdBSjJkLE1BSXRkLElBQUcsT0FBT0QsUUFBUCxLQUFrQixXQUFsQixJQUErQixPQUFPQyxTQUFQLEtBQW1CLFdBQWxELElBQStEMUosTUFBTSxLQUFHLE1BQTNFLEVBQWtGO0FBQUM7QUFDN055SyxnQkFBWSxHQUFDO0FBQUNVLGFBQU8sRUFBQyxPQUFUO0FBQWlCTyxjQUFRLEVBQUMsUUFBMUI7QUFBbUNyTCxjQUFRLEVBQUMsVUFBNUM7QUFBdURsQyxTQUFHLEVBQUMsQ0FBM0Q7QUFBNkQwTSxVQUFJLEVBQUMsQ0FBbEU7QUFBb0VDLFlBQU0sRUFBQyxDQUEzRTtBQUE2RTVNLFdBQUssRUFBQyxDQUFuRjtBQUFxRjZNLGVBQVMsRUFBQyxZQUEvRjtBQUE0R0csWUFBTSxFQUFDO0FBQW5ILEtBQWI7QUFBb0ksR0FETSxNQUNGO0FBQUM7QUFDekksY0FBdUM7QUFBQyxZQUFNLElBQUl0RCxLQUFKLENBQVcsbUJBQWtCbkQsR0FBSSx5RUFBakMsQ0FBTjtBQUFrSDtBQUFDOztBQUFBLE1BQUlrSCxhQUFhLEdBQUM7QUFBQ2xILE9BQUcsRUFBQyxnRkFBTDtBQUFzRndDLFVBQU0sRUFBQ2pELFNBQTdGO0FBQXVHNkIsU0FBSyxFQUFDN0I7QUFBN0csR0FBbEI7O0FBQTBJLE1BQUd3RyxTQUFILEVBQWE7QUFBQ21CLGlCQUFhLEdBQUM3RSxnQkFBZ0IsQ0FBQztBQUFDckMsU0FBRDtBQUFLc0MsaUJBQUw7QUFBaUIvRyxZQUFqQjtBQUF3QlUsV0FBSyxFQUFDK0ksUUFBOUI7QUFBdUN6QyxhQUFPLEVBQUMyQyxVQUEvQztBQUEwRDlELFdBQTFEO0FBQWdFWjtBQUFoRSxLQUFELENBQTlCO0FBQXlHOztBQUFBLFNBQU0sYUFBYXpCLE1BQU0sQ0FBQ2tCLE9BQVAsQ0FBZWtILGFBQWYsQ0FBNkIsS0FBN0IsRUFBbUM7QUFBQ3JELFNBQUssRUFBQ2tDO0FBQVAsR0FBbkMsRUFBd0RDLFVBQVUsR0FBQyxhQUFhbEgsTUFBTSxDQUFDa0IsT0FBUCxDQUFla0gsYUFBZixDQUE2QixLQUE3QixFQUFtQztBQUFDckQsU0FBSyxFQUFDbUM7QUFBUCxHQUFuQyxFQUFzREMsUUFBUSxHQUFDLGFBQWFuSCxNQUFNLENBQUNrQixPQUFQLENBQWVrSCxhQUFmLENBQTZCLEtBQTdCLEVBQW1DO0FBQUNyRCxTQUFLLEVBQUM7QUFBQzhDLGNBQVEsRUFBQyxNQUFWO0FBQWlCRixhQUFPLEVBQUMsT0FBekI7QUFBaUNELFlBQU0sRUFBQyxDQUF4QztBQUEwQ0QsWUFBTSxFQUFDLE1BQWpEO0FBQXdERCxhQUFPLEVBQUM7QUFBaEUsS0FBUDtBQUEwRWEsT0FBRyxFQUFDLEVBQTlFO0FBQWlGLG1CQUFjLElBQS9GO0FBQW9HQyxRQUFJLEVBQUMsY0FBekc7QUFBd0hySCxPQUFHLEVBQUUsNkJBQTRCLENBQUMsR0FBRWYsT0FBTyxDQUFDcUksUUFBWCxFQUFxQnBCLFFBQXJCLENBQStCO0FBQXhMLEdBQW5DLENBQWQsR0FBNk8sSUFBM1MsQ0FBZCxHQUErVCxJQUFqWSxFQUFzWSxDQUFDSCxTQUFELElBQVksYUFBYWhILE1BQU0sQ0FBQ2tCLE9BQVAsQ0FBZWtILGFBQWYsQ0FBNkIsVUFBN0IsRUFBd0MsSUFBeEMsRUFBNkMsYUFBYXBJLE1BQU0sQ0FBQ2tCLE9BQVAsQ0FBZWtILGFBQWYsQ0FBNkIsS0FBN0IsRUFBbUNJLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBaUI3QyxJQUFqQixFQUFzQnRDLGdCQUFnQixDQUFDO0FBQUNyQyxPQUFEO0FBQUtzQyxlQUFMO0FBQWlCL0csVUFBakI7QUFBd0JVLFNBQUssRUFBQytJLFFBQTlCO0FBQXVDekMsV0FBTyxFQUFDMkMsVUFBL0M7QUFBMEQ5RCxTQUExRDtBQUFnRVo7QUFBaEUsR0FBRCxDQUF0QyxFQUFnSDtBQUFDaUgsWUFBUSxFQUFDLE9BQVY7QUFBa0IzRCxTQUFLLEVBQUNxQyxRQUF4QjtBQUFpQzdCLGFBQVMsRUFBQ0E7QUFBM0MsR0FBaEgsQ0FBbkMsQ0FBMUQsQ0FBL1osRUFBcXFCLGFBQWF2RixNQUFNLENBQUNrQixPQUFQLENBQWVrSCxhQUFmLENBQTZCLEtBQTdCLEVBQW1DSSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWlCN0MsSUFBakIsRUFBc0J1QyxhQUF0QixFQUFvQztBQUFDTyxZQUFRLEVBQUMsT0FBVjtBQUFrQm5ELGFBQVMsRUFBQ0EsU0FBNUI7QUFBc0NvRCxPQUFHLEVBQUNDLE9BQU8sSUFBRTtBQUFDakMsWUFBTSxDQUFDaUMsT0FBRCxDQUFOO0FBQWdCdEUsdUJBQWlCLENBQUNzRSxPQUFELEVBQVNwRSxXQUFULENBQWpCO0FBQXdDLEtBQTVHO0FBQTZHTyxTQUFLLEVBQUNxQztBQUFuSCxHQUFwQyxDQUFuQyxDQUFsckIsRUFBdzNCL0IsUUFBUTtBQUFDO0FBQWM7QUFDOXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0FyRixRQUFNLENBQUNrQixPQUFQLENBQWVrSCxhQUFmLENBQTZCbkksS0FBSyxDQUFDaUIsT0FBbkMsRUFBMkMsSUFBM0MsRUFBZ0QsYUFBYWxCLE1BQU0sQ0FBQ2tCLE9BQVAsQ0FBZWtILGFBQWYsQ0FBNkIsTUFBN0IsRUFBb0M7QUFBQ1MsT0FBRyxFQUFDLFlBQVVWLGFBQWEsQ0FBQ2xILEdBQXhCLEdBQTRCa0gsYUFBYSxDQUFDMUUsTUFBMUMsR0FBaUQwRSxhQUFhLENBQUM5RixLQUFwRTtBQUEwRXlHLE9BQUcsRUFBQyxTQUE5RTtBQUF3RkMsTUFBRSxFQUFDLE9BQTNGO0FBQW1HQyxRQUFJLEVBQUNiLGFBQWEsQ0FBQzFFLE1BQWQsR0FBcUJqRCxTQUFyQixHQUErQjJILGFBQWEsQ0FBQ2xILEdBQXJKLENBQXdKO0FBQXhKO0FBQ2hHZ0ksZUFBVyxFQUFDZCxhQUFhLENBQUMxRSxNQURzRSxDQUNoRTtBQURnRTtBQUVoR3lGLGNBQVUsRUFBQ2YsYUFBYSxDQUFDOUY7QUFGdUUsR0FBcEMsQ0FBN0QsQ0FMK3lDLEdBTzV3QyxJQVA0WSxDQUFuQjtBQU9sWCxDLENBQUE7OztBQUMxQyxTQUFTOEcsWUFBVCxDQUFzQmxJLEdBQXRCLEVBQTBCO0FBQUMsU0FBT0EsR0FBRyxDQUFDLENBQUQsQ0FBSCxLQUFTLEdBQVQsR0FBYUEsR0FBRyxDQUFDNUMsS0FBSixDQUFVLENBQVYsQ0FBYixHQUEwQjRDLEdBQWpDO0FBQXNDOztBQUFBLFNBQVNOLFdBQVQsQ0FBcUI7QUFBQ3dELE1BQUQ7QUFBTWxELEtBQU47QUFBVS9ELE9BQVY7QUFBZ0JzRztBQUFoQixDQUFyQixFQUE4QztBQUFDO0FBQ2hILFFBQU00RixNQUFNLEdBQUMsQ0FBQyxhQUFELEVBQWUsU0FBZixFQUF5QixPQUFLbE0sS0FBOUIsQ0FBYjtBQUFrRCxNQUFJbU0sWUFBWSxHQUFDLEVBQWpCOztBQUFvQixNQUFHN0YsT0FBSCxFQUFXO0FBQUM0RixVQUFNLENBQUMxRyxJQUFQLENBQVksT0FBS2MsT0FBakI7QUFBMkI7O0FBQUEsTUFBRzRGLE1BQU0sQ0FBQzNLLE1BQVYsRUFBaUI7QUFBQzRLLGdCQUFZLEdBQUMsTUFBSUQsTUFBTSxDQUFDeEYsSUFBUCxDQUFZLEdBQVosQ0FBakI7QUFBbUM7O0FBQUEsU0FBTyxHQUFFTyxJQUFLLEdBQUVnRixZQUFZLENBQUNsSSxHQUFELENBQU0sR0FBRW9JLFlBQWEsRUFBakQ7QUFBb0Q7O0FBQUEsU0FBU3hJLFlBQVQsQ0FBc0I7QUFBQ3NELE1BQUQ7QUFBTWxELEtBQU47QUFBVS9EO0FBQVYsQ0FBdEIsRUFBdUM7QUFBQyxTQUFPLEdBQUVpSCxJQUFLLEdBQUVnRixZQUFZLENBQUNsSSxHQUFELENBQU0sWUFBVy9ELEtBQU0sRUFBbkQ7QUFBc0Q7O0FBQUEsU0FBUzBELGdCQUFULENBQTBCO0FBQUN1RCxNQUFEO0FBQU1sRCxLQUFOO0FBQVUvRCxPQUFWO0FBQWdCc0c7QUFBaEIsQ0FBMUIsRUFBbUQ7QUFBQztBQUN4VyxRQUFNNEYsTUFBTSxHQUFDLENBQUMsUUFBRCxFQUFVLFNBQVYsRUFBb0IsT0FBS2xNLEtBQXpCLEVBQStCLFFBQU1zRyxPQUFPLElBQUUsTUFBZixDQUEvQixDQUFiO0FBQW9FLE1BQUk2RixZQUFZLEdBQUNELE1BQU0sQ0FBQ3hGLElBQVAsQ0FBWSxHQUFaLElBQWlCLEdBQWxDO0FBQXNDLFNBQU8sR0FBRU8sSUFBSyxHQUFFa0YsWUFBYSxHQUFFRixZQUFZLENBQUNsSSxHQUFELENBQU0sRUFBakQ7QUFBb0Q7O0FBQUEsU0FBU0gsYUFBVCxDQUF1QjtBQUFDcUQsTUFBRDtBQUFNbEQsS0FBTjtBQUFVL0QsT0FBVjtBQUFnQnNHO0FBQWhCLENBQXZCLEVBQWdEO0FBQUMsWUFBdUM7QUFBQyxVQUFNOEYsYUFBYSxHQUFDLEVBQXBCLENBQUQsQ0FBd0I7O0FBQzlRLFFBQUcsQ0FBQ3JJLEdBQUosRUFBUXFJLGFBQWEsQ0FBQzVHLElBQWQsQ0FBbUIsS0FBbkI7QUFBMEIsUUFBRyxDQUFDeEYsS0FBSixFQUFVb00sYUFBYSxDQUFDNUcsSUFBZCxDQUFtQixPQUFuQjs7QUFBNEIsUUFBRzRHLGFBQWEsQ0FBQzdLLE1BQWQsR0FBcUIsQ0FBeEIsRUFBMEI7QUFBQyxZQUFNLElBQUkyRixLQUFKLENBQVcsb0NBQW1Da0YsYUFBYSxDQUFDMUYsSUFBZCxDQUFtQixJQUFuQixDQUF5QixnR0FBK0ZtQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFDL0UsV0FBRDtBQUFLL0QsYUFBTDtBQUFXc0c7QUFBWCxPQUFmLENBQW9DLEVBQTFNLENBQU47QUFBb047O0FBQUEsUUFBR3ZDLEdBQUcsQ0FBQ3lELFVBQUosQ0FBZSxJQUFmLENBQUgsRUFBd0I7QUFBQyxZQUFNLElBQUlOLEtBQUosQ0FBVyx3QkFBdUJuRCxHQUFJLDBHQUF0QyxDQUFOO0FBQXdKOztBQUFBLFFBQUcsQ0FBQ0EsR0FBRyxDQUFDeUQsVUFBSixDQUFlLEdBQWYsQ0FBRCxJQUFzQjVDLGFBQXpCLEVBQXVDO0FBQUMsVUFBSXlILFNBQUo7O0FBQWMsVUFBRztBQUFDQSxpQkFBUyxHQUFDLElBQUlDLEdBQUosQ0FBUXZJLEdBQVIsQ0FBVjtBQUF3QixPQUE1QixDQUE0QixPQUFNd0ksR0FBTixFQUFVO0FBQUNsRCxlQUFPLENBQUNtRCxLQUFSLENBQWNELEdBQWQ7QUFBbUIsY0FBTSxJQUFJckYsS0FBSixDQUFXLHdCQUF1Qm5ELEdBQUksaUlBQXRDLENBQU47QUFBK0s7O0FBQUEsVUFBRyxDQUFDYSxhQUFhLENBQUNzRSxRQUFkLENBQXVCbUQsU0FBUyxDQUFDSSxRQUFqQyxDQUFKLEVBQStDO0FBQUMsY0FBTSxJQUFJdkYsS0FBSixDQUFXLHFCQUFvQm5ELEdBQUksa0NBQWlDc0ksU0FBUyxDQUFDSSxRQUFTLCtEQUE3RSxHQUE2SSw4RUFBdkosQ0FBTjtBQUE2TztBQUFDO0FBQUM7O0FBQUEsU0FBTyxHQUFFeEYsSUFBSyxRQUFPeUYsa0JBQWtCLENBQUMzSSxHQUFELENBQU0sTUFBSy9ELEtBQU0sTUFBS3NHLE9BQU8sSUFBRSxFQUFHLEVBQXpFO0FBQTRFLEM7Ozs7Ozs7Ozs7O0FDL0NybUM7O0FBQUE1RCxrQkFBQSxHQUFtQixJQUFuQjtBQUF3QkEsMEJBQUEsR0FBMkJBLDJCQUFBLEdBQTRCLEtBQUssQ0FBNUQ7O0FBQThELE1BQU1pSyxtQkFBbUIsR0FBQyxPQUFPQyxJQUFQLEtBQWMsV0FBZCxJQUEyQkEsSUFBSSxDQUFDRCxtQkFBaEMsSUFBcUQsVUFBU0UsRUFBVCxFQUFZO0FBQUMsTUFBSUMsS0FBSyxHQUFDQyxJQUFJLENBQUNDLEdBQUwsRUFBVjtBQUFxQixTQUFPL0wsVUFBVSxDQUFDLFlBQVU7QUFBQzRMLE1BQUUsQ0FBQztBQUFDSSxnQkFBVSxFQUFDLEtBQVo7QUFBa0JDLG1CQUFhLEVBQUMsWUFBVTtBQUFDLGVBQU94TSxJQUFJLENBQUN5TSxHQUFMLENBQVMsQ0FBVCxFQUFXLE1BQUlKLElBQUksQ0FBQ0MsR0FBTCxLQUFXRixLQUFmLENBQVgsQ0FBUDtBQUEwQztBQUFyRixLQUFELENBQUY7QUFBNEYsR0FBeEcsRUFBeUcsQ0FBekcsQ0FBakI7QUFBOEgsQ0FBL087O0FBQWdQcEssMkJBQUEsR0FBNEJpSyxtQkFBNUI7O0FBQWdELE1BQU1TLGtCQUFrQixHQUFDLE9BQU9SLElBQVAsS0FBYyxXQUFkLElBQTJCQSxJQUFJLENBQUNRLGtCQUFoQyxJQUFvRCxVQUFTbE8sRUFBVCxFQUFZO0FBQUMsU0FBT21PLFlBQVksQ0FBQ25PLEVBQUQsQ0FBbkI7QUFBeUIsQ0FBbkg7O0FBQW9Id0QsMEJBQUEsR0FBMkIwSyxrQkFBM0IsQzs7Ozs7Ozs7Ozs7QUNBMWU7O0FBQUExSyxrQkFBQSxHQUFtQixJQUFuQjtBQUF3QkEsdUJBQUEsR0FBd0JpSCxlQUF4Qjs7QUFBd0MsSUFBSTdHLE1BQU0sR0FBQ0wsbUJBQU8sQ0FBQyxvQkFBRCxDQUFsQjs7QUFBNEIsSUFBSTZLLG9CQUFvQixHQUFDN0ssbUJBQU8sQ0FBQyx5RkFBRCxDQUFoQzs7QUFBNEQsTUFBTThLLHVCQUF1QixHQUFDLE9BQU9DLG9CQUFQLEtBQThCLFdBQTVEOztBQUF3RSxTQUFTN0QsZUFBVCxDQUF5QjtBQUFDQyxZQUFEO0FBQVlDO0FBQVosQ0FBekIsRUFBK0M7QUFBQyxRQUFNNEQsVUFBVSxHQUFDNUQsUUFBUSxJQUFFLENBQUMwRCx1QkFBNUI7QUFBb0QsUUFBTUcsU0FBUyxHQUFDLENBQUMsR0FBRTVLLE1BQU0sQ0FBQzlFLE1BQVYsR0FBaEI7QUFBb0MsUUFBSyxDQUFDMlAsT0FBRCxFQUFTQyxVQUFULElBQXFCLENBQUMsR0FBRTlLLE1BQU0sQ0FBQ2hGLFFBQVYsRUFBb0IsS0FBcEIsQ0FBMUI7QUFBcUQsUUFBTTJMLE1BQU0sR0FBQyxDQUFDLEdBQUUzRyxNQUFNLENBQUMrSyxXQUFWLEVBQXVCQyxFQUFFLElBQUU7QUFBQyxRQUFHSixTQUFTLENBQUNLLE9BQWIsRUFBcUI7QUFBQ0wsZUFBUyxDQUFDSyxPQUFWO0FBQW9CTCxlQUFTLENBQUNLLE9BQVYsR0FBa0J6SyxTQUFsQjtBQUE2Qjs7QUFBQSxRQUFHbUssVUFBVSxJQUFFRSxPQUFmLEVBQXVCOztBQUFPLFFBQUdHLEVBQUUsSUFBRUEsRUFBRSxDQUFDRSxPQUFWLEVBQWtCO0FBQUNOLGVBQVMsQ0FBQ0ssT0FBVixHQUFrQkUsT0FBTyxDQUFDSCxFQUFELEVBQUloRSxTQUFTLElBQUVBLFNBQVMsSUFBRThELFVBQVUsQ0FBQzlELFNBQUQsQ0FBcEMsRUFBZ0Q7QUFBQ0Y7QUFBRCxPQUFoRCxDQUF6QjtBQUF3RjtBQUFDLEdBQTdPLEVBQThPLENBQUM2RCxVQUFELEVBQVk3RCxVQUFaLEVBQXVCK0QsT0FBdkIsQ0FBOU8sQ0FBYjtBQUE0UixHQUFDLEdBQUU3SyxNQUFNLENBQUN2RCxTQUFWLEVBQXFCLE1BQUk7QUFBQyxRQUFHLENBQUNnTyx1QkFBSixFQUE0QjtBQUFDLFVBQUcsQ0FBQ0ksT0FBSixFQUFZO0FBQUMsY0FBTU8sWUFBWSxHQUFDLENBQUMsR0FBRVosb0JBQW9CLENBQUNYLG1CQUF4QixFQUE2QyxNQUFJaUIsVUFBVSxDQUFDLElBQUQsQ0FBM0QsQ0FBbkI7QUFBc0YsZUFBTSxNQUFJLENBQUMsR0FBRU4sb0JBQW9CLENBQUNGLGtCQUF4QixFQUE0Q2MsWUFBNUMsQ0FBVjtBQUFxRTtBQUFDO0FBQUMsR0FBak8sRUFBa08sQ0FBQ1AsT0FBRCxDQUFsTztBQUE2TyxTQUFNLENBQUNsRSxNQUFELEVBQVFrRSxPQUFSLENBQU47QUFBd0I7O0FBQUEsU0FBU00sT0FBVCxDQUFpQnZDLE9BQWpCLEVBQXlCeUMsUUFBekIsRUFBa0NDLE9BQWxDLEVBQTBDO0FBQUMsUUFBSztBQUFDbFAsTUFBRDtBQUFJbVAsWUFBSjtBQUFhQztBQUFiLE1BQXVCQyxjQUFjLENBQUNILE9BQUQsQ0FBMUM7QUFBb0RFLFVBQVEsQ0FBQ0UsR0FBVCxDQUFhOUMsT0FBYixFQUFxQnlDLFFBQXJCO0FBQStCRSxVQUFRLENBQUNKLE9BQVQsQ0FBaUJ2QyxPQUFqQjtBQUEwQixTQUFPLFNBQVNnQyxTQUFULEdBQW9CO0FBQUNZLFlBQVEsQ0FBQ0csTUFBVCxDQUFnQi9DLE9BQWhCO0FBQXlCMkMsWUFBUSxDQUFDWCxTQUFULENBQW1CaEMsT0FBbkIsRUFBMUIsQ0FBc0Q7O0FBQ3ByQyxRQUFHNEMsUUFBUSxDQUFDSSxJQUFULEtBQWdCLENBQW5CLEVBQXFCO0FBQUNMLGNBQVEsQ0FBQ00sVUFBVDtBQUFzQkMsZUFBUyxDQUFDSCxNQUFWLENBQWlCdlAsRUFBakI7QUFBc0I7QUFBQyxHQURnaUM7QUFDOWhDOztBQUFBLE1BQU0wUCxTQUFTLEdBQUMsSUFBSXBMLEdBQUosRUFBaEI7O0FBQTBCLFNBQVMrSyxjQUFULENBQXdCSCxPQUF4QixFQUFnQztBQUFDLFFBQU1sUCxFQUFFLEdBQUNrUCxPQUFPLENBQUN4RSxVQUFSLElBQW9CLEVBQTdCO0FBQWdDLE1BQUlpRixRQUFRLEdBQUNELFNBQVMsQ0FBQzVILEdBQVYsQ0FBYzlILEVBQWQsQ0FBYjs7QUFBK0IsTUFBRzJQLFFBQUgsRUFBWTtBQUFDLFdBQU9BLFFBQVA7QUFBaUI7O0FBQUEsUUFBTVAsUUFBUSxHQUFDLElBQUk5SyxHQUFKLEVBQWY7QUFBeUIsUUFBTTZLLFFBQVEsR0FBQyxJQUFJYixvQkFBSixDQUF5QnNCLE9BQU8sSUFBRTtBQUFDQSxXQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLEtBQUssSUFBRTtBQUFDLFlBQU1iLFFBQVEsR0FBQ0csUUFBUSxDQUFDdEgsR0FBVCxDQUFhZ0ksS0FBSyxDQUFDQyxNQUFuQixDQUFmO0FBQTBDLFlBQU1uRixTQUFTLEdBQUNrRixLQUFLLENBQUNFLGNBQU4sSUFBc0JGLEtBQUssQ0FBQ0csaUJBQU4sR0FBd0IsQ0FBOUQ7O0FBQWdFLFVBQUdoQixRQUFRLElBQUVyRSxTQUFiLEVBQXVCO0FBQUNxRSxnQkFBUSxDQUFDckUsU0FBRCxDQUFSO0FBQXFCO0FBQUMsS0FBaEw7QUFBbUwsR0FBdE4sRUFBdU5zRSxPQUF2TixDQUFmO0FBQStPUSxXQUFTLENBQUNKLEdBQVYsQ0FBY3RQLEVBQWQsRUFBaUIyUCxRQUFRLEdBQUM7QUFBQzNQLE1BQUQ7QUFBSW1QLFlBQUo7QUFBYUM7QUFBYixHQUExQjtBQUFrRCxTQUFPTyxRQUFQO0FBQWlCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0R4aUI7QUFDQTtBQUNBOztBQUVBLE1BQU1yTCxHQUFHLEdBQUcsTUFBTTtBQUNoQixRQUFNNEwsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLFFBQU1DLFFBQVEsR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWFELFFBQTlCO0FBRUEsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyx1REFBRDtBQUFRLGtCQUFZLEVBQUVBO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQVREOztBQVdBLCtEQUFlOUwsR0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFFTyxNQUFNZ00sU0FBUyxHQUFHQyw2REFBVyxDQUFDO0FBQ25DclAsTUFBSSxFQUFFLE1BRDZCO0FBRW5Dc1AsY0FBWSxFQUFFO0FBQ1ozTixRQUFJLEVBQUU7QUFETSxHQUZxQjtBQUtuQzROLFVBQVEsRUFBRTtBQUNSQyxPQUFHLEVBQUUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ3RCRCxXQUFLLENBQUM5TixJQUFOLEdBQWErTixNQUFNLENBQUNDLE9BQXBCOztBQUNBLFlBQU1DLEtBQUssR0FBRyxZQUFZO0FBQ3hCLGNBQU1DLGlEQUFBLENBQ0UsZ0JBREYsRUFDb0I7QUFDdEI3TixlQUFLLEVBQUUwTixNQUFNLENBQUNDLE9BQVAsQ0FBZTNOO0FBREEsU0FEcEIsRUFJSGpDLElBSkcsQ0FJRStQLEdBQUcsSUFBSTdHLE9BQU8sQ0FBQzhHLEdBQVIsQ0FBWUQsR0FBWixDQUpULEVBS0h0SSxLQUxHLENBS0cyRSxHQUFHLElBQUlsRCxPQUFPLENBQUM4RyxHQUFSLENBQVk1RCxHQUFaLENBTFYsQ0FBTjtBQU1ELE9BUEQ7O0FBUUF5RCxXQUFLO0FBQ04sS0FaTztBQWFSSSxVQUFNLEVBQUUsQ0FBQ1AsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ3pCRCxXQUFLLENBQUM5TixJQUFOLEdBQWEsSUFBYjtBQUNELEtBZk87QUFnQlJzTyxTQUFLLEVBQUUsQ0FBQ1IsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ3hCRCxXQUFLLENBQUM5TixJQUFOLEdBQWErTixNQUFNLENBQUNDLE9BQXBCO0FBQ0Q7QUFsQk87QUFMeUIsQ0FBRCxDQUE3QjtBQTJCQSxNQUFNO0FBQUVILEtBQUY7QUFBT1EsUUFBUDtBQUFlQztBQUFmLElBQXlCYixTQUFTLENBQUNjLE9BQXpDLEMsQ0FFUDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNck8sVUFBVSxHQUFHNE4sS0FBSyxJQUFJQSxLQUFLLENBQUNVLElBQU4sQ0FBV3hPLElBQXZDO0FBRVAsK0RBQWV5TixTQUFTLENBQUNnQixPQUF6QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNPLE1BQU10USxTQUFTLEdBQUcsT0FBTzBHLENBQVAsRUFBVTZKLENBQVYsS0FBZ0I7QUFDdkMsTUFBSXJRLElBQUksR0FBRyxFQUFYO0FBQ0EsUUFBTTRQLEtBQUssQ0FDUixxREFBb0RwSixDQUFFLElBQUc2SixDQUFFLHNIQURuRCxDQUFMLENBR0h0USxJQUhHLENBR0UrUCxHQUFHLElBQUlBLEdBQUcsQ0FBQ1EsSUFBSixFQUhULEVBSUh2USxJQUpHLENBSUVhLElBQUksSUFBSTtBQUNaWixRQUFJLEdBQUdZLElBQUksQ0FBQzJQLFFBQUwsQ0FBYyxDQUFkLEVBQWlCQyxVQUF4QjtBQUNELEdBTkcsRUFPSGhKLEtBUEcsQ0FPRzJFLEdBQUcsSUFBSWxELE9BQU8sQ0FBQzhHLEdBQVIsQ0FBWTVELEdBQVosQ0FQVixDQUFOO0FBU0EsU0FBT25NLElBQVA7QUFDRCxDQVpNO0FBY0EsTUFBTVcsYUFBYSxHQUFHLE9BQU81QyxPQUFQLEVBQWdCbUMsV0FBaEIsS0FBZ0M7QUFDM0QsTUFBSXVRLFNBQVMsR0FBRyxFQUFoQjtBQUNBLFFBQU1iLEtBQUssQ0FDUiwrREFBOEQ3UixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVcyQixTQUFVLElBQUczQixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVd5QixRQUFTLElBQUdVLFdBQTlHLGFBQThHQSxXQUE5Ryx1QkFBOEdBLFdBQVcsQ0FBRVIsU0FBVSxJQUFHUSxXQUF4SSxhQUF3SUEsV0FBeEksdUJBQXdJQSxXQUFXLENBQUVWLFFBQVMsbUlBRHJKLENBQUwsQ0FHSE8sSUFIRyxDQUdFK1AsR0FBRyxJQUFJQSxHQUFHLENBQUNRLElBQUosRUFIVCxFQUlIdlEsSUFKRyxDQUlFYSxJQUFJLElBQUk7QUFDWjZQLGFBQVMsR0FBRzdQLElBQUksQ0FBQzhQLE1BQUwsQ0FBWSxDQUFaLENBQVo7QUFDRCxHQU5HLEVBT0hsSixLQVBHLENBT0cyRSxHQUFHLElBQUlsRCxPQUFPLENBQUM4RyxHQUFSLENBQVk1RCxHQUFaLENBUFYsQ0FBTjtBQVFBLDJCQUFZc0UsU0FBWjtBQUNELENBWE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZFAsMkdBQStDOzs7Ozs7Ozs7OztBQ0EvQztBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCOzs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0M7Ozs7Ozs7Ozs7O0FDZkEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvTWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwibWFwYm94LWdsL2Rpc3QvbWFwYm94LWdsLmNzc1wiXHJcbmltcG9ydCBcInJlYWN0LW1hcC1nbC1nZW9jb2Rlci9kaXN0L21hcGJveC1nbC1nZW9jb2Rlci5jc3NcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuaW1wb3J0IFJlYWN0TWFwR0wsIHtcclxuICBNYXJrZXIsXHJcbiAgUG9wdXAsXHJcbiAgTmF2aWdhdGlvbkNvbnRyb2wsXHJcbiAgU291cmNlLFxyXG4gIExheWVyLFxyXG59IGZyb20gXCJyZWFjdC1tYXAtZ2xcIlxyXG5pbXBvcnQgR2VvY29kZXIgZnJvbSBcInJlYWN0LW1hcC1nbC1nZW9jb2RlclwiXHJcbmltcG9ydCB7IGZldGNoRGF0YSwgZGlyZWN0aW9uc0FwaSB9IGZyb20gXCIuLi91c2VGZXRjaERhdGFcIlxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQnV0dG9uXCJcclxuaW1wb3J0IFBheXBhbE1vZGVsIGZyb20gXCIuL3BheXBhbE1vZGVsXCJcclxuXHJcbmNvbnN0IE1BUEJPWF9UT0tFTiA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01BUEJPWF9LRVlcclxuXHJcbmNvbnN0IG5hdkNvbnRyb2xTdHlsZSA9IHtcclxuICByaWdodDogMTAsXHJcbiAgdG9wOiAxMCxcclxufVxyXG5cclxuY29uc3QgTWFwYm94ID0gKHsgbG9jYXRpb25Qcm9wIH0pID0+IHtcclxuICAvL2RlZmluaW5nIFN0YXRlc1xyXG4gIGNvbnN0IFt2aWV3cG9ydCwgc2V0Vmlld3BvcnRdID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3QgbWFwUmVmID0gdXNlUmVmKClcclxuICBjb25zdCBbZ2VvLCBzZXRHZW9dID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3QgW21hcmtlcnMsIHNldE1hcmtlcnNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW3Nob3dQb3B1cCwgc2V0U2hvd3BvcHVwXSA9IHVzZVN0YXRlKC0xKVxyXG4gIGNvbnN0IFtvcmlnaW5OYW1lLCBzZXRPcmlnaW5OYW1lXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW2Rlc3RpbmF0aW9uTmFtZSwgc2V0RGVzdGluYXRpb25OYW1lXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3JpZGUsIHNldFJpZGVdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIC8vIGRlZmluaW5nIHRoZSBzdHlsZSBhbmQgdGhlIHdheSB0aGUgZGlyZWN0aW9uIHdpbGwgYmUgcHJlc2VudGVkIGluIHRoZSBtYXBcclxuICBjb25zdCBsYXllclN0eWxlID0ge1xyXG4gICAgaWQ6IFwicm91dGVcIixcclxuICAgIHR5cGU6IFwibGluZVwiLFxyXG4gICAgc291cmNlOiBcInJvdXRlXCIsXHJcbiAgICBwYWludDoge1xyXG4gICAgICBcImxpbmUtY29sb3JcIjogXCIjZmNmYzAzXCIsXHJcbiAgICAgIFwibGluZS13aWR0aFwiOiA1LFxyXG4gICAgfSxcclxuICAgIGxheW91dDoge1xyXG4gICAgICBcImxpbmUtam9pblwiOiBcInJvdW5kXCIsXHJcbiAgICAgIFwibGluZS1jYXBcIjogXCJyb3VuZFwiLFxyXG4gICAgfSxcclxuICB9XHJcblxyXG4gIC8vIGl0IHdpbGwgcnVuIG9uY2UgdGhlIGNvbXBvbmVudCByZS1yZW5kZXJzIGFuZCBzdG9wLCB3aGljaCBpcyBzZXR0aW5nIG91ciBjdXJyZW50IGxvY2F0aW9uIGFuZCBzdG9yZSB0aGVtIGluIHRoZSBzdGF0ZVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGZ1bmN0aW9uIChwb3NpdGlvbikge1xyXG4gICAgICBzZXRWaWV3cG9ydCh7XHJcbiAgICAgICAgbGF0aXR1ZGU6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcclxuICAgICAgICBsb25naXR1ZGU6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsXHJcbiAgICAgICAgem9vbTogMTAsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwdndcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgfSlcclxuICAgICAgc2V0TWFya2VycyhbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGF0aXR1ZGU6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcclxuICAgICAgICAgIGxvbmdpdHVkZTogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdKVxyXG5cclxuICAgICAgZmV0Y2hEYXRhKHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsIHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSkudGhlbihcclxuICAgICAgICBuYW1lID0+IHtcclxuICAgICAgICAgIHNldE9yaWdpbk5hbWUobmFtZSlcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIC8vbWFpbiBmdW5jdGlvbiByZXNwb25zaWJsZSBmb3IgY2hhbmdpbmcgdGhlIHZpZXcgaW4gdGhlIG1hcFxyXG4gIGNvbnN0IGhhbmRsZVZpZXdwb3J0Q2hhbmdlID0gbmV3Vmlld3BvcnQgPT4ge1xyXG4gICAgc2V0Vmlld3BvcnQobmV3Vmlld3BvcnQpXHJcbiAgfVxyXG5cclxuICAvL2Z1bmN0aW9uIHRvIHJvdW5kIGEgbnVtYmVyXHJcbiAgZnVuY3Rpb24gcm91bmQobnVtLCBkZWMpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIE1hdGgucG93KDEwLCBkZWMpKSAvIE1hdGgucG93KDEwLCBkZWMpXHJcbiAgfVxyXG5cclxuICAvLyBmdW5jdGlvbiBpcyBjYWxsZWQgd2hldmVyIHRoZSBzZWFyY2ggY29tcG9uZW50IGNoYW5nZXNcclxuICBjb25zdCBoYW5kbGVHZW9jb2RlclZpZXdwb3J0Q2hhbmdlVG8gPSBuZXdWaWV3cG9ydCA9PiB7XHJcbiAgICBjb25zdCBnZW9jb2RlckRlZmF1bHRPdmVycmlkZXMgPSB7XHJcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogbmV3Vmlld3BvcnQudHJhbnNpdGlvbkR1cmF0aW9uLFxyXG4gICAgfVxyXG4gICAgaWYgKCFuZXdWaWV3cG9ydCkgcmV0dXJuXHJcbiAgICBzZXRNYXJrZXJzKFtcclxuICAgICAgLi4ubWFya2VycyxcclxuICAgICAgeyBsYXRpdHVkZTogbmV3Vmlld3BvcnQubGF0aXR1ZGUsIGxvbmdpdHVkZTogbmV3Vmlld3BvcnQubG9uZ2l0dWRlIH0sXHJcbiAgICBdKVxyXG4gICAgZGlyZWN0aW9uc0FwaShtYXJrZXJzLCBuZXdWaWV3cG9ydCkudGhlbihkYXRhID0+IHNldEdlbyhkYXRhKSlcclxuXHJcbiAgICBmZXRjaERhdGEobmV3Vmlld3BvcnQubG9uZ2l0dWRlLCBuZXdWaWV3cG9ydC5sYXRpdHVkZSkudGhlbihuYW1lID0+XHJcbiAgICAgIHNldERlc3RpbmF0aW9uTmFtZShuYW1lKVxyXG4gICAgKVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRTaG93KHRydWUpXHJcbiAgICB9LCBuZXdWaWV3cG9ydC50cmFuc2l0aW9uRHVyYXRpb24pXHJcbiAgICByZXR1cm4gaGFuZGxlVmlld3BvcnRDaGFuZ2Uoe1xyXG4gICAgICAuLi5uZXdWaWV3cG9ydCxcclxuICAgICAgem9vbTogbmV3Vmlld3BvcnQuem9vbSxcclxuICAgICAgLi4uZ2VvY29kZXJEZWZhdWx0T3ZlcnJpZGVzLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsZWFyU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgc2V0R2VvKG51bGwpXHJcbiAgICBzZXRNYXJrZXJzKG1hcmtlcnMuc2xpY2UoMCwgMSkpXHJcbiAgICBzZXRTaG93KGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwXCI+XHJcbiAgICAgICAgey8qIHJlbmRlcmluZyB0aGUgbWFwIGluIHRoZSBicm93c2VyICovfVxyXG4gICAgICAgIDxSZWFjdE1hcEdMXHJcbiAgICAgICAgICByZWY9e21hcFJlZn1cclxuICAgICAgICAgIHsuLi52aWV3cG9ydH1cclxuICAgICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9e2hhbmRsZVZpZXdwb3J0Q2hhbmdlfVxyXG4gICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49e01BUEJPWF9UT0tFTn1cclxuICAgICAgICAgIG1hcFN0eWxlPVwibWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXYxMVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgey8qIG5hdmlnYXRpb24gb24gdGhlIHRvcC1sZWZ0IGNvcm5lciBvZiB0aGUgbWFwICovfVxyXG4gICAgICAgICAgPE5hdmlnYXRpb25Db250cm9sIHN0eWxlPXtuYXZDb250cm9sU3R5bGV9IC8+XHJcbiAgICAgICAgICB7LyogcmVuZGVyaW5nIHRoZSBkaXJlY3Rpb25zIGZyb20gb25lIHBvaW50IHRvIGFub3RoZXIgKi99XHJcbiAgICAgICAgICB7Z2VvICE9IG51bGwgPyAoXHJcbiAgICAgICAgICAgIDxTb3VyY2VcclxuICAgICAgICAgICAgICBpZD1cInJvdXRlXCJcclxuICAgICAgICAgICAgICB0eXBlPVwiZ2VvanNvblwiXHJcbiAgICAgICAgICAgICAgZGF0YT17e1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7fSxcclxuICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTGluZVN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogZ2VvPy5nZW9tZXRyeT8uY29vcmRpbmF0ZXMsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGF5ZXIgey4uLmxheWVyU3R5bGV9IC8+XHJcbiAgICAgICAgICAgIDwvU291cmNlPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAge21hcmtlcnMubGVuZ3RoICYmXHJcbiAgICAgICAgICAgIG1hcmtlcnMubWFwKChwb2ludCwgaWQpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aWR9PlxyXG4gICAgICAgICAgICAgICAgPE1hcmtlclxyXG4gICAgICAgICAgICAgICAgICBsYXRpdHVkZT17TnVtYmVyKHBvaW50Py5sYXRpdHVkZSl9XHJcbiAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZT17TnVtYmVyKHBvaW50Py5sb25naXR1ZGUpfVxyXG4gICAgICAgICAgICAgICAgICBvZmZzZXRMZWZ0PXstMjB9XHJcbiAgICAgICAgICAgICAgICAgIG9mZnNldFRvcD17LTEwfVxyXG4gICAgICAgICAgICAgICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93cG9wdXAoaWQpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzQ4LzAwMDAwMC9tYXAtcGluLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9jYXRpb24gbWFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L01hcmtlcj5cclxuICAgICAgICAgICAgICAgIHtzaG93UG9wdXAgPT09IGlkICYmIChcclxuICAgICAgICAgICAgICAgICAgPFBvcHVwXHJcbiAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU9e3BvaW50Py5sYXRpdHVkZX1cclxuICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU9e3BvaW50Py5sb25naXR1ZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvcj1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd3BvcHVwKC0xKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMzAwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpZCA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+T3JpZ2luOiB7b3JpZ2luTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBEZXN0aW5hdGlvbjoge2Rlc3RpbmF0aW9uTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+ZGlzdGFuY2U6e3JvdW5kKGdlbz8uZGlzdGFuY2UgLyAxMDAwLCAyKX0ga208L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+ZHVyYXRpb25zOntyb3VuZChnZW8/LmR1cmF0aW9uIC8gNjAsIDIpfSBtaW48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9Qb3B1cD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvUmVhY3RNYXBHTD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiByZW5kZXJpbmcgdGhlIFNlYXJjaCBwbGFjZXMgZnVuY3Rpb25hbGl0eSAgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XHJcbiAgICAgICAgPEdlb2NvZGVyXHJcbiAgICAgICAgICBtYXBSZWY9e21hcFJlZn1cclxuICAgICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9e2hhbmRsZUdlb2NvZGVyVmlld3BvcnRDaGFuZ2VUb31cclxuICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXtNQVBCT1hfVE9LRU59XHJcbiAgICAgICAgICBwb3NpdGlvbj1cInRvcC1sZWZ0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY2hvb3NlIHlvdXIgZGVzdGluYXRpb25cIlxyXG4gICAgICAgICAgb25DbGVhcj17Y2xlYXJTZWFyY2h9XHJcbiAgICAgICAgICBpbnB1dFZhbHVlPXtsb2NhdGlvblByb3AgPyBsb2NhdGlvblByb3AgOiBcIlwifVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvdyA9PSB0cnVlID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bMjQwcHhdIGgtWzMwMHB4XSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciByb3VuZGVkIHAtMiB6LTEwIGJnLXdoaXRlIGFic29sdXRlIHRvcC1bNTJweF0gbGVmdC1bMTBweF1cIj5cclxuICAgICAgICAgIDxoMz5DaG9vc2UgYSByaWRlPC9oMz5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bODAlXSBoLVs1MHB4XSByb3VuZGVkICBtdC00IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwLTIgaG92ZXI6YmctYmx1ZS0zMDAgYmctYmx1ZS00MDAgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgIHNldFJpZGUocm91bmQocm91bmQoZ2VvPy5kaXN0YW5jZSAvIDEwMDAsIDIpICogMi40NSwgMikpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHA+VWJlciBYPC9wPlxyXG4gICAgICAgICAgICA8cD5QcmljZToge3JvdW5kKHJvdW5kKGdlbz8uZGlzdGFuY2UgLyAxMDAwLCAyKSAqIDIuNDUsIDIpfSQ8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bODAlXSBoLVs1MHB4XSByb3VuZGVkIG10LTQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHAtMiBiZy1ibHVlLTQwMCBob3ZlcjpiZy1ibHVlLTMwMCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgc2V0UmlkZShyb3VuZChyb3VuZChnZW8/LmRpc3RhbmNlIC8gMTAwMCwgMikgKiAzLjY3LCAyKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cD5VYmVyIFhTPC9wPlxyXG4gICAgICAgICAgICA8cD5QcmljZToge3JvdW5kKHJvdW5kKGdlbz8uZGlzdGFuY2UgLyAxMDAwLCAyKSAqIDMuNjcsIDIpfSQ8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bODAlXSBoLVs1MHB4XSByb3VuZGVkIG10LTQgZmxleCBqdXN0aWZ5LWJldHdlZW4gcC0yIGl0ZW1zLWNlbnRlciBiZy1ibHVlLTQwMCBob3ZlcjpiZy1ibHVlLTMwMCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgc2V0UmlkZShyb3VuZChyb3VuZChnZW8/LmRpc3RhbmNlIC8gMTAwMCwgMikgKiA0LjU1LCAyKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cD5VYmVyIEVsPC9wPlxyXG4gICAgICAgICAgICA8cD5QcmljZToge3JvdW5kKHJvdW5kKGdlbz8uZGlzdGFuY2UgLyAxMDAwLCAyKSAqIDQuNTUsIDIpfSQ8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtyaWRlICYmIChcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNvbG9yPVwibGlnaHRCbHVlXCJcclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICByaXBwbGU9XCJsaWdodFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKHRydWUpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgR2V0IHJpZGUge3JpZGV9JFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPFBheXBhbE1vZGVsXHJcbiAgICAgICAgc2hvd01vZGFsPXtzaG93TW9kYWx9XHJcbiAgICAgICAgc2V0U2hvd01vZGFsPXtzZXRTaG93TW9kYWx9XHJcbiAgICAgICAgcHJpY2U9e3JpZGV9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcGJveFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbFwiXHJcbmltcG9ydCBNb2RhbEhlYWRlciBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L01vZGFsSGVhZGVyXCJcclxuaW1wb3J0IE1vZGFsQm9keSBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L01vZGFsQm9keVwiXHJcbmltcG9ydCBNb2RhbEZvb3RlciBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L01vZGFsRm9vdGVyXCJcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0J1dHRvblwiXHJcbmltcG9ydCB7IFBheVBhbEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1wYXlwYWwtYnV0dG9uLXYyXCJcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyBzZWxlY3RVc2VyIH0gZnJvbSBcIi4uL3JlZHV4L2ZlYXR1cmVzL1VzZXJTbGljZVwiXHJcbmNvbnN0IHBheXBhbE1vZGVsID0gKHsgc2hvd01vZGFsLCBzZXRTaG93TW9kYWwsIHByaWNlIH0pID0+IHtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0VXNlcilcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxNb2RhbCBzaXplPVwic21cIiBhY3RpdmU9e3Nob3dNb2RhbH0gdG9nZ2xlcj17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX0+XHJcbiAgICAgICAgPE1vZGFsSGVhZGVyIHRvZ2dsZXI9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9PlxyXG4gICAgICAgICAgUGF5cGFsIGNoZWNrT3V0XHJcbiAgICAgICAgPC9Nb2RhbEhlYWRlcj5cclxuICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAgPFBheVBhbEJ1dHRvblxyXG4gICAgICAgICAgICBhbW91bnQ9e3ByaWNlfVxyXG4gICAgICAgICAgICBvblN1Y2Nlc3M9eyhkZXRhaWxzLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgYWxlcnQoXCJUcmFuc2FjdGlvbiBjb21wbGV0ZWQgYnkgXCIgKyB1c2VyPy5lbWFpbClcclxuICAgICAgICAgICAgICBzZXRTaG93TW9kYWwoZmFsc2UpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUEFZUEFMX0tFWSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Nb2RhbEJvZHk+XHJcbiAgICAgICAgPE1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjb2xvcj1cInJlZFwiXHJcbiAgICAgICAgICAgIGJ1dHRvblR5cGU9XCJsaW5rXCJcclxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgICByaXBwbGU9XCJkYXJrXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJncmVlblwiIHJpcHBsZT1cImxpZ2h0XCI+XHJcbiAgICAgICAgICAgIEFkZCBsb2NhdGlvblxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGF5cGFsTW9kZWxcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1JbWFnZTt2YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7dmFyIF9leHRlbmRzMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfaGVhZD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvaGVhZFwiKSk7dmFyIF90b0Jhc2U9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0XCIpO3ZhciBfaW1hZ2VDb25maWc9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWdcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpeztnbG9iYWwuX19ORVhUX0lNQUdFX0lNUE9SVEVEPXRydWU7fWNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTPVsnbGF6eScsJ2VhZ2VyJyx1bmRlZmluZWRdO2NvbnN0IGxvYWRlcnM9bmV3IE1hcChbWydpbWdpeCcsaW1naXhMb2FkZXJdLFsnY2xvdWRpbmFyeScsY2xvdWRpbmFyeUxvYWRlcl0sWydha2FtYWknLGFrYW1haUxvYWRlcl0sWydkZWZhdWx0JyxkZWZhdWx0TG9hZGVyXV0pO2NvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVM9WydmaWxsJywnZml4ZWQnLCdpbnRyaW5zaWMnLCdyZXNwb25zaXZlJyx1bmRlZmluZWRdO2Z1bmN0aW9uIGlzU3RhdGljUmVxdWlyZShzcmMpe3JldHVybiBzcmMuZGVmYXVsdCE9PXVuZGVmaW5lZDt9ZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoc3JjKXtyZXR1cm4gc3JjLnNyYyE9PXVuZGVmaW5lZDt9ZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjKXtyZXR1cm4gdHlwZW9mIHNyYz09PSdvYmplY3QnJiYoaXNTdGF0aWNSZXF1aXJlKHNyYyl8fGlzU3RhdGljSW1hZ2VEYXRhKHNyYykpO31jb25zdHtkZXZpY2VTaXplczpjb25maWdEZXZpY2VTaXplcyxpbWFnZVNpemVzOmNvbmZpZ0ltYWdlU2l6ZXMsbG9hZGVyOmNvbmZpZ0xvYWRlcixwYXRoOmNvbmZpZ1BhdGgsZG9tYWluczpjb25maWdEb21haW5zfT1wcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUU3x8X2ltYWdlQ29uZmlnLmltYWdlQ29uZmlnRGVmYXVsdDsvLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzPVsuLi5jb25maWdEZXZpY2VTaXplcywuLi5jb25maWdJbWFnZVNpemVzXTtjb25maWdEZXZpY2VTaXplcy5zb3J0KChhLGIpPT5hLWIpO2FsbFNpemVzLnNvcnQoKGEsYik9PmEtYik7ZnVuY3Rpb24gZ2V0V2lkdGhzKHdpZHRoLGxheW91dCxzaXplcyl7aWYoc2l6ZXMmJihsYXlvdXQ9PT0nZmlsbCd8fGxheW91dD09PSdyZXNwb25zaXZlJykpey8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG5jb25zdCB2aWV3cG9ydFdpZHRoUmU9LyhefFxccykoMT9cXGQ/XFxkKXZ3L2c7Y29uc3QgcGVyY2VudFNpemVzPVtdO2ZvcihsZXQgbWF0Y2g7bWF0Y2g9dmlld3BvcnRXaWR0aFJlLmV4ZWMoc2l6ZXMpO21hdGNoKXtwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpO31pZihwZXJjZW50U2l6ZXMubGVuZ3RoKXtjb25zdCBzbWFsbGVzdFJhdGlvPU1hdGgubWluKC4uLnBlcmNlbnRTaXplcykqMC4wMTtyZXR1cm57d2lkdGhzOmFsbFNpemVzLmZpbHRlcihzPT5zPj1jb25maWdEZXZpY2VTaXplc1swXSpzbWFsbGVzdFJhdGlvKSxraW5kOid3J307fXJldHVybnt3aWR0aHM6YWxsU2l6ZXMsa2luZDondyd9O31pZih0eXBlb2Ygd2lkdGghPT0nbnVtYmVyJ3x8bGF5b3V0PT09J2ZpbGwnfHxsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpe3JldHVybnt3aWR0aHM6Y29uZmlnRGV2aWNlU2l6ZXMsa2luZDondyd9O31jb25zdCB3aWR0aHM9Wy4uLm5ldyBTZXQoLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbi8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4vLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbi8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbi8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuW3dpZHRoLHdpZHRoKjIvKiwgd2lkdGggKiAzKi9dLm1hcCh3PT5hbGxTaXplcy5maW5kKHA9PnA+PXcpfHxhbGxTaXplc1thbGxTaXplcy5sZW5ndGgtMV0pKV07cmV0dXJue3dpZHRocyxraW5kOid4J307fWZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGgscXVhbGl0eSxzaXplcyxsb2FkZXJ9KXtpZih1bm9wdGltaXplZCl7cmV0dXJue3NyYyxzcmNTZXQ6dW5kZWZpbmVkLHNpemVzOnVuZGVmaW5lZH07fWNvbnN0e3dpZHRocyxraW5kfT1nZXRXaWR0aHMod2lkdGgsbGF5b3V0LHNpemVzKTtjb25zdCBsYXN0PXdpZHRocy5sZW5ndGgtMTtyZXR1cm57c2l6ZXM6IXNpemVzJiZraW5kPT09J3cnPycxMDB2dyc6c2l6ZXMsc3JjU2V0OndpZHRocy5tYXAoKHcsaSk9PmAke2xvYWRlcih7c3JjLHF1YWxpdHksd2lkdGg6d30pfSAke2tpbmQ9PT0ndyc/dzppKzF9JHtraW5kfWApLmpvaW4oJywgJyksLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbi8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbi8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbi8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4vLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbi8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94Llxuc3JjOmxvYWRlcih7c3JjLHF1YWxpdHksd2lkdGg6d2lkdGhzW2xhc3RdfSl9O31mdW5jdGlvbiBnZXRJbnQoeCl7aWYodHlwZW9mIHg9PT0nbnVtYmVyJyl7cmV0dXJuIHg7fWlmKHR5cGVvZiB4PT09J3N0cmluZycpe3JldHVybiBwYXJzZUludCh4LDEwKTt9cmV0dXJuIHVuZGVmaW5lZDt9ZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzKXtjb25zdCBsb2FkPWxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcik7aWYobG9hZCl7cmV0dXJuIGxvYWQoKDAsX2V4dGVuZHMyLmRlZmF1bHQpKHtyb290OmNvbmZpZ1BhdGh9LGxvYWRlclByb3BzKSk7fXRocm93IG5ldyBFcnJvcihgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7X2ltYWdlQ29uZmlnLlZBTElEX0xPQURFUlMuam9pbignLCAnKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gKTt9Ly8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIHJlbW92ZVBsYWNlaG9sZGVyKGltZyxwbGFjZWhvbGRlcil7aWYocGxhY2Vob2xkZXI9PT0nYmx1cicmJmltZyl7Y29uc3QgaGFuZGxlTG9hZD0oKT0+e2lmKCFpbWcuc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6Jykpe2NvbnN0IHA9J2RlY29kZSdpbiBpbWc/aW1nLmRlY29kZSgpOlByb21pc2UucmVzb2x2ZSgpO3AuY2F0Y2goKCk9Pnt9KS50aGVuKCgpPT57aW1nLnN0eWxlLmZpbHRlcj0nbm9uZSc7aW1nLnN0eWxlLmJhY2tncm91bmRTaXplPSdub25lJztpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlPSdub25lJzt9KTt9fTtpZihpbWcuY29tcGxldGUpey8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuLy8gaGFuZGxpbmcgaXMgd29ya2VkIG9uIGZvciB0aGUgaW1hZ2UgY29tcG9uZW50IGl0c2VsZi5cbmhhbmRsZUxvYWQoKTt9ZWxzZXtpbWcub25sb2FkPWhhbmRsZUxvYWQ7fX19ZnVuY3Rpb24gSW1hZ2UoX3JlZil7bGV0e3NyYyxzaXplcyx1bm9wdGltaXplZD1mYWxzZSxwcmlvcml0eT1mYWxzZSxsb2FkaW5nLGNsYXNzTmFtZSxxdWFsaXR5LHdpZHRoLGhlaWdodCxvYmplY3RGaXQsb2JqZWN0UG9zaXRpb24sbG9hZGVyPWRlZmF1bHRJbWFnZUxvYWRlcixwbGFjZWhvbGRlcj0nZW1wdHknLGJsdXJEYXRhVVJMfT1fcmVmLGFsbD0oMCxfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3JlZixbXCJzcmNcIixcInNpemVzXCIsXCJ1bm9wdGltaXplZFwiLFwicHJpb3JpdHlcIixcImxvYWRpbmdcIixcImNsYXNzTmFtZVwiLFwicXVhbGl0eVwiLFwid2lkdGhcIixcImhlaWdodFwiLFwib2JqZWN0Rml0XCIsXCJvYmplY3RQb3NpdGlvblwiLFwibG9hZGVyXCIsXCJwbGFjZWhvbGRlclwiLFwiYmx1ckRhdGFVUkxcIl0pO2xldCByZXN0PWFsbDtsZXQgbGF5b3V0PXNpemVzPydyZXNwb25zaXZlJzonaW50cmluc2ljJztpZignbGF5b3V0J2luIHJlc3Qpey8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG5pZihyZXN0LmxheW91dClsYXlvdXQ9cmVzdC5sYXlvdXQ7Ly8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuZGVsZXRlIHJlc3RbJ2xheW91dCddO31sZXQgc3RhdGljU3JjPScnO2lmKGlzU3RhdGljSW1wb3J0KHNyYykpe2NvbnN0IHN0YXRpY0ltYWdlRGF0YT1pc1N0YXRpY1JlcXVpcmUoc3JjKT9zcmMuZGVmYXVsdDpzcmM7aWYoIXN0YXRpY0ltYWdlRGF0YS5zcmMpe3Rocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTt9Ymx1ckRhdGFVUkw9Ymx1ckRhdGFVUkx8fHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTDtzdGF0aWNTcmM9c3RhdGljSW1hZ2VEYXRhLnNyYztpZighbGF5b3V0fHxsYXlvdXQhPT0nZmlsbCcpe2hlaWdodD1oZWlnaHR8fHN0YXRpY0ltYWdlRGF0YS5oZWlnaHQ7d2lkdGg9d2lkdGh8fHN0YXRpY0ltYWdlRGF0YS53aWR0aDtpZighc3RhdGljSW1hZ2VEYXRhLmhlaWdodHx8IXN0YXRpY0ltYWdlRGF0YS53aWR0aCl7dGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTt9fX1zcmM9dHlwZW9mIHNyYz09PSdzdHJpbmcnP3NyYzpzdGF0aWNTcmM7Y29uc3Qgd2lkdGhJbnQ9Z2V0SW50KHdpZHRoKTtjb25zdCBoZWlnaHRJbnQ9Z2V0SW50KGhlaWdodCk7Y29uc3QgcXVhbGl0eUludD1nZXRJbnQocXVhbGl0eSk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKCFzcmMpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHt3aWR0aCxoZWlnaHQscXVhbGl0eX0pfWApO31pZighVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO31pZih0eXBlb2Ygd2lkdGhJbnQhPT0ndW5kZWZpbmVkJyYmaXNOYU4od2lkdGhJbnQpfHx0eXBlb2YgaGVpZ2h0SW50IT09J3VuZGVmaW5lZCcmJmlzTmFOKGhlaWdodEludCkpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcIndpZHRoXCIgb3IgXCJoZWlnaHRcIiBwcm9wZXJ0eS4gVGhlc2Ugc2hvdWxkIGJlIG51bWVyaWMgdmFsdWVzLmApO31pZighVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7fWlmKHByaW9yaXR5JiZsb2FkaW5nPT09J2xhenknKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYCk7fWlmKHBsYWNlaG9sZGVyPT09J2JsdXInKXtpZihsYXlvdXQhPT0nZmlsbCcmJih3aWR0aEludHx8MCkqKGhlaWdodEludHx8MCk8MTYwMCl7Y29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gKTt9aWYoIWJsdXJEYXRhVVJMKXtjb25zdCBWQUxJRF9CTFVSX0VYVD1bJ2pwZWcnLCdwbmcnLCd3ZWJwJ107Ly8gc2hvdWxkIG1hdGNoIG5leHQtaW1hZ2UtbG9hZGVyXG50aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbignLCcpfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgKTt9fX1sZXQgaXNMYXp5PSFwcmlvcml0eSYmKGxvYWRpbmc9PT0nbGF6eSd8fHR5cGVvZiBsb2FkaW5nPT09J3VuZGVmaW5lZCcpO2lmKHNyYyYmc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6Jykpey8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG51bm9wdGltaXplZD10cnVlO2lzTGF6eT1mYWxzZTt9Y29uc3Rbc2V0UmVmLGlzSW50ZXJzZWN0ZWRdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnLGRpc2FibGVkOiFpc0xhenl9KTtjb25zdCBpc1Zpc2libGU9IWlzTGF6eXx8aXNJbnRlcnNlY3RlZDtsZXQgd3JhcHBlclN0eWxlO2xldCBzaXplclN0eWxlO2xldCBzaXplclN2ZztsZXQgaW1nU3R5bGU9KDAsX2V4dGVuZHMyLmRlZmF1bHQpKHtwb3NpdGlvbjonYWJzb2x1dGUnLHRvcDowLGxlZnQ6MCxib3R0b206MCxyaWdodDowLGJveFNpemluZzonYm9yZGVyLWJveCcscGFkZGluZzowLGJvcmRlcjonbm9uZScsbWFyZ2luOidhdXRvJyxkaXNwbGF5OidibG9jaycsd2lkdGg6MCxoZWlnaHQ6MCxtaW5XaWR0aDonMTAwJScsbWF4V2lkdGg6JzEwMCUnLG1pbkhlaWdodDonMTAwJScsbWF4SGVpZ2h0OicxMDAlJyxvYmplY3RGaXQsb2JqZWN0UG9zaXRpb259LHBsYWNlaG9sZGVyPT09J2JsdXInP3tmaWx0ZXI6J2JsdXIoMjBweCknLGJhY2tncm91bmRTaXplOidjb3ZlcicsYmFja2dyb3VuZEltYWdlOmB1cmwoXCIke2JsdXJEYXRhVVJMfVwiKWB9OnVuZGVmaW5lZCk7aWYodHlwZW9mIHdpZHRoSW50IT09J3VuZGVmaW5lZCcmJnR5cGVvZiBoZWlnaHRJbnQhPT0ndW5kZWZpbmVkJyYmbGF5b3V0IT09J2ZpbGwnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG5jb25zdCBxdW90aWVudD1oZWlnaHRJbnQvd2lkdGhJbnQ7Y29uc3QgcGFkZGluZ1RvcD1pc05hTihxdW90aWVudCk/JzEwMCUnOmAke3F1b3RpZW50KjEwMH0lYDtpZihsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjoncmVsYXRpdmUnLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O3NpemVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLHBhZGRpbmdUb3B9O31lbHNlIGlmKGxheW91dD09PSdpbnRyaW5zaWMnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2lubGluZS1ibG9jaycsbWF4V2lkdGg6JzEwMCUnLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidyZWxhdGl2ZScsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07c2l6ZXJTdHlsZT17Ym94U2l6aW5nOidib3JkZXItYm94JyxkaXNwbGF5OidibG9jaycsbWF4V2lkdGg6JzEwMCUnfTtzaXplclN2Zz1gPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YDt9ZWxzZSBpZihsYXlvdXQ9PT0nZml4ZWQnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbndyYXBwZXJTdHlsZT17b3ZlcmZsb3c6J2hpZGRlbicsYm94U2l6aW5nOidib3JkZXItYm94JyxkaXNwbGF5OidpbmxpbmUtYmxvY2snLHBvc2l0aW9uOidyZWxhdGl2ZScsd2lkdGg6d2lkdGhJbnQsaGVpZ2h0OmhlaWdodEludH07fX1lbHNlIGlmKHR5cGVvZiB3aWR0aEludD09PSd1bmRlZmluZWQnJiZ0eXBlb2YgaGVpZ2h0SW50PT09J3VuZGVmaW5lZCcmJmxheW91dD09PSdmaWxsJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjonYWJzb2x1dGUnLHRvcDowLGxlZnQ6MCxib3R0b206MCxyaWdodDowLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O31lbHNley8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmApO319bGV0IGltZ0F0dHJpYnV0ZXM9e3NyYzonZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxzcmNTZXQ6dW5kZWZpbmVkLHNpemVzOnVuZGVmaW5lZH07aWYoaXNWaXNpYmxlKXtpbWdBdHRyaWJ1dGVzPWdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGg6d2lkdGhJbnQscXVhbGl0eTpxdWFsaXR5SW50LHNpemVzLGxvYWRlcn0pO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTp3cmFwcGVyU3R5bGV9LHNpemVyU3R5bGU/LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6c2l6ZXJTdHlsZX0sc2l6ZXJTdmc/LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIix7c3R5bGU6e21heFdpZHRoOicxMDAlJyxkaXNwbGF5OidibG9jaycsbWFyZ2luOjAsYm9yZGVyOidub25lJyxwYWRkaW5nOjB9LGFsdDpcIlwiLFwiYXJpYS1oaWRkZW5cIjp0cnVlLHJvbGU6XCJwcmVzZW50YXRpb25cIixzcmM6YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHsoMCxfdG9CYXNlLnRvQmFzZTY0KShzaXplclN2Zyl9YH0pOm51bGwpOm51bGwsIWlzVmlzaWJsZSYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIixPYmplY3QuYXNzaWduKHt9LHJlc3QsZ2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aDp3aWR0aEludCxxdWFsaXR5OnF1YWxpdHlJbnQsc2l6ZXMsbG9hZGVyfSkse2RlY29kaW5nOlwiYXN5bmNcIixzdHlsZTppbWdTdHlsZSxjbGFzc05hbWU6Y2xhc3NOYW1lfSkpKSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLE9iamVjdC5hc3NpZ24oe30scmVzdCxpbWdBdHRyaWJ1dGVzLHtkZWNvZGluZzpcImFzeW5jXCIsY2xhc3NOYW1lOmNsYXNzTmFtZSxyZWY6ZWxlbWVudD0+e3NldFJlZihlbGVtZW50KTtyZW1vdmVQbGFjZWhvbGRlcihlbGVtZW50LHBsYWNlaG9sZGVyKTt9LHN0eWxlOmltZ1N0eWxlfSkpLHByaW9yaXR5Py8qI19fUFVSRV9fKi8gLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4vLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4vL1xuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG5fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OidfX25pbWctJytpbWdBdHRyaWJ1dGVzLnNyYytpbWdBdHRyaWJ1dGVzLnNyY1NldCtpbWdBdHRyaWJ1dGVzLnNpemVzLHJlbDpcInByZWxvYWRcIixhczpcImltYWdlXCIsaHJlZjppbWdBdHRyaWJ1dGVzLnNyY1NldD91bmRlZmluZWQ6aW1nQXR0cmlidXRlcy5zcmMvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuLGltYWdlc3Jjc2V0OmltZ0F0dHJpYnV0ZXMuc3JjU2V0Ly8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuLGltYWdlc2l6ZXM6aW1nQXR0cmlidXRlcy5zaXplc30pKTpudWxsKTt9Ly9CVUlMVCBJTiBMT0FERVJTXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKXtyZXR1cm4gc3JjWzBdPT09Jy8nP3NyYy5zbGljZSgxKTpzcmM7fWZ1bmN0aW9uIGltZ2l4TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7Ly8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9mb3JtYXQ9YXV0byZmaXQ9bWF4Jnc9MzAwXG5jb25zdCBwYXJhbXM9WydhdXRvPWZvcm1hdCcsJ2ZpdD1tYXgnLCd3PScrd2lkdGhdO2xldCBwYXJhbXNTdHJpbmc9Jyc7aWYocXVhbGl0eSl7cGFyYW1zLnB1c2goJ3E9JytxdWFsaXR5KTt9aWYocGFyYW1zLmxlbmd0aCl7cGFyYW1zU3RyaW5nPSc/JytwYXJhbXMuam9pbignJicpO31yZXR1cm5gJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9JHtwYXJhbXNTdHJpbmd9YDt9ZnVuY3Rpb24gYWthbWFpTG9hZGVyKHtyb290LHNyYyx3aWR0aH0pe3JldHVybmAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7fWZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXsvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuY29uc3QgcGFyYW1zPVsnZl9hdXRvJywnY19saW1pdCcsJ3dfJyt3aWR0aCwncV8nKyhxdWFsaXR5fHwnYXV0bycpXTtsZXQgcGFyYW1zU3RyaW5nPXBhcmFtcy5qb2luKCcsJykrJy8nO3JldHVybmAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gO31mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG1pc3NpbmdWYWx1ZXM9W107Ly8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG5pZighc3JjKW1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7aWYoIXdpZHRoKW1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtpZihtaXNzaW5nVmFsdWVzLmxlbmd0aD4wKXt0aHJvdyBuZXcgRXJyb3IoYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKCcsICcpfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7c3JjLHdpZHRoLHF1YWxpdHl9KX1gKTt9aWYoc3JjLnN0YXJ0c1dpdGgoJy8vJykpe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7fWlmKCFzcmMuc3RhcnRzV2l0aCgnLycpJiZjb25maWdEb21haW5zKXtsZXQgcGFyc2VkU3JjO3RyeXtwYXJzZWRTcmM9bmV3IFVSTChzcmMpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTt9aWYoIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gK2BTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YCk7fX19cmV0dXJuYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHl8fDc1fWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXZvaWQgMDtjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oY2Ipe2xldCBzdGFydD1EYXRlLm5vdygpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2Ioe2RpZFRpbWVvdXQ6ZmFsc2UsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXN0YXJ0KSk7fX0pO30sMSk7fTtleHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWVzdElkbGVDYWxsYmFjaztjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGlkKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTt9O2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWNhbmNlbElkbGVDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTWFwYm94IGZyb20gXCIuLi9jb21wb25lbnRzL21hcGJveFwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcblxyXG5jb25zdCBNYXAgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBsb2NhdGlvbiA9IHJvdXRlci5xdWVyeS5sb2NhdGlvblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE1hcGJveCBsb2NhdGlvblByb3A9e2xvY2F0aW9ufSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXBcclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcIlVzZXJcIixcclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIHVzZXI6IG51bGwsXHJcbiAgfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgQWRkOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS51c2VyID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgY29uc3QgZmV0Y2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgYXhpb3NcclxuICAgICAgICAgIC5wb3N0KFwiYXBpL2NyZWF0ZVVzZXJcIiwge1xyXG4gICAgICAgICAgICBlbWFpbDogYWN0aW9uLnBheWxvYWQuZW1haWwsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICAgIH1cclxuICAgICAgZmV0Y2goKVxyXG4gICAgfSxcclxuICAgIFJlbW92ZTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXNlciA9IG51bGxcclxuICAgIH0sXHJcbiAgICBDaGVjazogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXNlciA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBBZGQsIFJlbW92ZSwgQ2hlY2sgfSA9IFVzZXJTbGljZS5hY3Rpb25zXHJcblxyXG4vLyBUaGUgZnVuY3Rpb24gYmVsb3cgaXMgY2FsbGVkIGEgdGh1bmsgYW5kIGFsbG93cyB1cyB0byBwZXJmb3JtIGFzeW5jIGxvZ2ljLiBJdFxyXG4vLyBjYW4gYmUgZGlzcGF0Y2hlZCBsaWtlIGEgcmVndWxhciBhY3Rpb246IGBkaXNwYXRjaChpbmNyZW1lbnRBc3luYygxMCkpYC4gVGhpc1xyXG4vLyB3aWxsIGNhbGwgdGhlIHRodW5rIHdpdGggdGhlIGBkaXNwYXRjaGAgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50LiBBc3luY1xyXG4vLyBjb2RlIGNhbiB0aGVuIGJlIGV4ZWN1dGVkIGFuZCBvdGhlciBhY3Rpb25zIGNhbiBiZSBkaXNwYXRjaGVkXHJcblxyXG4vLyBUaGUgZnVuY3Rpb24gYmVsb3cgaXMgY2FsbGVkIGEgc2VsZWN0b3IgYW5kIGFsbG93cyB1cyB0byBzZWxlY3QgYSB2YWx1ZSBmcm9tXHJcbi8vIHRoZSBzdGF0ZS4gU2VsZWN0b3JzIGNhbiBhbHNvIGJlIGRlZmluZWQgaW5saW5lIHdoZXJlIHRoZXkncmUgdXNlZCBpbnN0ZWFkIG9mXHJcbi8vIGluIHRoZSBzbGljZSBmaWxlLiBGb3IgZXhhbXBsZTogYHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY291bnRlci52YWx1ZSlgXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RVc2VyID0gc3RhdGUgPT4gc3RhdGUuVXNlci51c2VyXHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyU2xpY2UucmVkdWNlclxyXG4iLCJleHBvcnQgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHgsIHkpID0+IHtcclxuICBsZXQgbmFtZSA9ICcnXHJcbiAgYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9nZW9jb2RpbmcvdjUvbWFwYm94LnBsYWNlcy8ke3h9LCR7eX0uanNvbj9hY2Nlc3NfdG9rZW49cGsuZXlKMUlqb2lhbUYzWVdSaGJXMWhjakV5SWl3aVlTSTZJbU5yY200MmFHNDJORFJsTTNveWRYQTROV296YTJONmRHOGlmUS5VamVIUDRNM01sVEpnNzhLMFRIcVJRIGBcclxuICApXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICBuYW1lID0gZGF0YS5mZWF0dXJlc1swXS5wbGFjZV9uYW1lXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG5cclxuICByZXR1cm4gbmFtZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGlyZWN0aW9uc0FwaSA9IGFzeW5jIChtYXJrZXJzLCBuZXdWaWV3cG9ydCkgPT4ge1xyXG4gIGxldCBkaXJlY3Rpb24gPSB7fVxyXG4gIGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vYXBpLm1hcGJveC5jb20vZGlyZWN0aW9ucy92NS9tYXBib3gvZHJpdmluZy10cmFmZmljLyR7bWFya2Vyc1swXS5sb25naXR1ZGV9LCR7bWFya2Vyc1swXS5sYXRpdHVkZX07JHtuZXdWaWV3cG9ydD8ubG9uZ2l0dWRlfSwke25ld1ZpZXdwb3J0Py5sYXRpdHVkZX0/Z2VvbWV0cmllcz1nZW9qc29uJmFjY2Vzc190b2tlbj1way5leUoxSWpvaWFtRjNZV1JoYlcxaGNqRXlJaXdpWVNJNkltTnJjbTQyYUc0Mk5EUmxNM295ZFhBNE5Xb3phMk42ZEc4aWZRLlVqZUhQNE0zTWxUSmc3OEswVEhxUlFgXHJcbiAgKVxyXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgZGlyZWN0aW9uID0gZGF0YS5yb3V0ZXNbMF1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgcmV0dXJuIHsgLi4uZGlyZWN0aW9uIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0J1dHRvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L01vZGFsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxCb2R5XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxGb290ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbEhlYWRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tYXAtZ2xcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1hcC1nbC1nZW9jb2RlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcGF5cGFsLWJ1dHRvbi12MlwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==