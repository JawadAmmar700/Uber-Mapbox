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
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-map-gl */ "react-map-gl");
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_map_gl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_map_gl_geocoder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-map-gl-geocoder */ "react-map-gl-geocoder");
/* harmony import */ var react_map_gl_geocoder__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_map_gl_geocoder__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _useFetchData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../useFetchData */ "./useFetchData.js");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-tailwind/react/Button */ "@material-tailwind/react/Button");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _paypalModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./paypalModel */ "./components/paypalModel.js");


var _jsxFileName = "C:\\D_J_S_P\\React,Next\\Next_Mapbox\\mapbox\\components\\mapbox.js";

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
    0: location,
    1: setLocation
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(locationProp);
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
      (0,_useFetchData__WEBPACK_IMPORTED_MODULE_6__.fetchData)(position.coords.longitude, position.coords.latitude).then(name => {
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
    (0,_useFetchData__WEBPACK_IMPORTED_MODULE_6__.directionsApi)(markers, newViewport).then(data => setGeo(data));
    (0,_useFetchData__WEBPACK_IMPORTED_MODULE_6__.fetchData)(newViewport.longitude, newViewport.latitude).then(name => setDestinationName(name));
    console.log("zoom", newViewport);
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
    setLocation("");
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "map",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_map_gl__WEBPACK_IMPORTED_MODULE_4___default()), _objectSpread(_objectSpread({
        ref: mapRef
      }, viewport), {}, {
        onViewportChange: handleViewportChange,
        mapboxApiAccessToken: MAPBOX_TOKEN,
        mapStyle: "mapbox://styles/mapbox/streets-v11",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_4__.NavigationControl, {
          style: navControlStyle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, undefined), geo != null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_4__.Source, {
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
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_4__.Layer, _objectSpread({}, layerStyle), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 13
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false), markers.length && markers.map((point, id) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_4__.Marker, {
            latitude: Number(point === null || point === void 0 ? void 0 : point.latitude),
            longitude: Number(point === null || point === void 0 ? void 0 : point.longitude),
            offsetLeft: -20,
            offsetTop: -10,
            draggable: false,
            onClick: () => setShowpopup(id),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "https://img.icons8.com/color/48/000000/map-pin.png",
              alt: "location mark"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 17
          }, undefined), showPopup === id && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_4__.Popup, {
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
          lineNumber: 156,
          columnNumber: 15
        }, undefined))]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "search",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_map_gl_geocoder__WEBPACK_IMPORTED_MODULE_5___default()), {
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
      }, undefined), ride && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
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
    }, undefined) : "", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypalModel__WEBPACK_IMPORTED_MODULE_8__.default, {
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
    lineNumber: 122,
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

var _jsxFileName = "C:\\D_J_S_P\\React,Next\\Next_Mapbox\\mapbox\\components\\paypalModel.js";








const paypalModel = ({
  showModal,
  setShowModal,
  price
}) => {
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
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_ModalBody__WEBPACK_IMPORTED_MODULE_4___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_paypal_button_v2__WEBPACK_IMPORTED_MODULE_7__.PayPalButton, {
          amount: price,
          onSuccess: (details, data) => {
            alert("Transaction completed by " + details.payer.name.given_name);
            setShowModal(false);
          },
          options: {
            clientId: "AeEv79hPqxk608ZE-sWsFgb8oLzi7Uhl9LV7IP3uPXJ4PqMeN1F8yXO_8IJGdNLqpnSQU8sBEJ-I_Cwz"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
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
          lineNumber: 29,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
          color: "green",
          ripple: "light",
          children: "Add location"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (paypalModel);

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
/* harmony import */ var _badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @badrap/bar-of-progress */ "@badrap/bar-of-progress");
/* harmony import */ var _badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\D_J_S_P\\React,Next\\Next_Mapbox\\mapbox\\pages\\Map.js";






const Map = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const location = router.query.location;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_mapbox__WEBPACK_IMPORTED_MODULE_2__.default, {
      locationProp: location
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Map);

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

/***/ "@badrap/bar-of-progress":
/*!******************************************!*\
  !*** external "@badrap/bar-of-progress" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@badrap/bar-of-progress");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBib3gvLi9jb21wb25lbnRzL21hcGJveC5qcyIsIndlYnBhY2s6Ly9tYXBib3gvLi9jb21wb25lbnRzL3BheXBhbE1vZGVsLmpzIiwid2VicGFjazovL21hcGJveC8uL3BhZ2VzL01hcC5qcyIsIndlYnBhY2s6Ly9tYXBib3gvLi91c2VGZXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiQGJhZHJhcC9iYXItb2YtcHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L01vZGFsXCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L01vZGFsQm9keVwiIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbEZvb3RlclwiIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbEhlYWRlclwiIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJyZWFjdC1tYXAtZ2xcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJyZWFjdC1tYXAtZ2wtZ2VvY29kZXJcIiIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJyZWFjdC1wYXlwYWwtYnV0dG9uLXYyXCIiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTUFQQk9YX1RPS0VOIiwicHJvY2VzcyIsIm5hdkNvbnRyb2xTdHlsZSIsInJpZ2h0IiwidG9wIiwiTWFwYm94IiwibG9jYXRpb25Qcm9wIiwidmlld3BvcnQiLCJzZXRWaWV3cG9ydCIsInVzZVN0YXRlIiwibWFwUmVmIiwidXNlUmVmIiwiZ2VvIiwic2V0R2VvIiwibWFya2VycyIsInNldE1hcmtlcnMiLCJzaG93UG9wdXAiLCJzZXRTaG93cG9wdXAiLCJvcmlnaW5OYW1lIiwic2V0T3JpZ2luTmFtZSIsImRlc3RpbmF0aW9uTmFtZSIsInNldERlc3RpbmF0aW9uTmFtZSIsInNob3ciLCJzZXRTaG93IiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsInJpZGUiLCJzZXRSaWRlIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwibGF5ZXJTdHlsZSIsImlkIiwidHlwZSIsInNvdXJjZSIsInBhaW50IiwibGF5b3V0IiwidXNlRWZmZWN0IiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsImxhdGl0dWRlIiwiY29vcmRzIiwibG9uZ2l0dWRlIiwiem9vbSIsIndpZHRoIiwiaGVpZ2h0IiwiZmV0Y2hEYXRhIiwidGhlbiIsIm5hbWUiLCJoYW5kbGVWaWV3cG9ydENoYW5nZSIsIm5ld1ZpZXdwb3J0Iiwicm91bmQiLCJudW0iLCJkZWMiLCJNYXRoIiwicG93IiwiaGFuZGxlR2VvY29kZXJWaWV3cG9ydENoYW5nZVRvIiwiZ2VvY29kZXJEZWZhdWx0T3ZlcnJpZGVzIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiZGlyZWN0aW9uc0FwaSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsImNsZWFyU2VhcmNoIiwic2xpY2UiLCJwcm9wZXJ0aWVzIiwiZ2VvbWV0cnkiLCJjb29yZGluYXRlcyIsImxlbmd0aCIsIm1hcCIsInBvaW50IiwiTnVtYmVyIiwiZGlzdGFuY2UiLCJkdXJhdGlvbiIsInBheXBhbE1vZGVsIiwicHJpY2UiLCJkZXRhaWxzIiwiYWxlcnQiLCJwYXllciIsImdpdmVuX25hbWUiLCJjbGllbnRJZCIsInBheXBhbEtFWSIsImUiLCJNYXAiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsIngiLCJ5IiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZmVhdHVyZXMiLCJwbGFjZV9uYW1lIiwiY2F0Y2giLCJlcnIiLCJkaXJlY3Rpb24iLCJyb3V0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsWUFBWSxHQUFHQyxrR0FBckI7QUFFQSxNQUFNQyxlQUFlLEdBQUc7QUFDdEJDLE9BQUssRUFBRSxFQURlO0FBRXRCQyxLQUFHLEVBQUU7QUFGaUIsQ0FBeEI7O0FBS0EsTUFBTUMsTUFBTSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQXNCO0FBQUE7O0FBQ25DO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLDZDQUFNLEVBQXJCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEdBQUQ7QUFBQSxPQUFNQztBQUFOLE1BQWdCSiwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUI7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JOLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDTyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QlIsK0NBQVEsQ0FBQyxDQUFDLENBQUYsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ1MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJWLCtDQUFRLENBQUMsRUFBRCxDQUE1QztBQUNBLFFBQU07QUFBQSxPQUFDVyxlQUFEO0FBQUEsT0FBa0JDO0FBQWxCLE1BQXdDWiwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ2Es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Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvTWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwibWFwYm94LWdsL2Rpc3QvbWFwYm94LWdsLmNzc1wiXHJcbmltcG9ydCBcInJlYWN0LW1hcC1nbC1nZW9jb2Rlci9kaXN0L21hcGJveC1nbC1nZW9jb2Rlci5jc3NcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBSZWFjdE1hcEdMLCB7XHJcbiAgTWFya2VyLFxyXG4gIFBvcHVwLFxyXG4gIE5hdmlnYXRpb25Db250cm9sLFxyXG4gIFNvdXJjZSxcclxuICBMYXllcixcclxufSBmcm9tIFwicmVhY3QtbWFwLWdsXCJcclxuaW1wb3J0IEdlb2NvZGVyIGZyb20gXCJyZWFjdC1tYXAtZ2wtZ2VvY29kZXJcIlxyXG5pbXBvcnQgeyBmZXRjaERhdGEsIGRpcmVjdGlvbnNBcGkgfSBmcm9tIFwiLi4vdXNlRmV0Y2hEYXRhXCJcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0J1dHRvblwiXHJcbmltcG9ydCBQYXlwYWxNb2RlbCBmcm9tIFwiLi9wYXlwYWxNb2RlbFwiXHJcblxyXG5jb25zdCBNQVBCT1hfVE9LRU4gPSBwcm9jZXNzLmVudi5tYXBib3hLRVlcclxuXHJcbmNvbnN0IG5hdkNvbnRyb2xTdHlsZSA9IHtcclxuICByaWdodDogMTAsXHJcbiAgdG9wOiAxMCxcclxufVxyXG5cclxuY29uc3QgTWFwYm94ID0gKHsgbG9jYXRpb25Qcm9wIH0pID0+IHtcclxuICAvL2RlZmluaW5nIFN0YXRlc1xyXG4gIGNvbnN0IFt2aWV3cG9ydCwgc2V0Vmlld3BvcnRdID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3QgbWFwUmVmID0gdXNlUmVmKClcclxuICBjb25zdCBbZ2VvLCBzZXRHZW9dID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3QgW21hcmtlcnMsIHNldE1hcmtlcnNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW3Nob3dQb3B1cCwgc2V0U2hvd3BvcHVwXSA9IHVzZVN0YXRlKC0xKVxyXG4gIGNvbnN0IFtvcmlnaW5OYW1lLCBzZXRPcmlnaW5OYW1lXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW2Rlc3RpbmF0aW9uTmFtZSwgc2V0RGVzdGluYXRpb25OYW1lXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShsb2NhdGlvblByb3ApXHJcbiAgY29uc3QgW3JpZGUsIHNldFJpZGVdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIC8vIGRlZmluaW5nIHRoZSBzdHlsZSBhbmQgdGhlIHdheSB0aGUgZGlyZWN0aW9uIHdpbGwgYmUgcHJlc2VudGVkIGluIHRoZSBtYXBcclxuICBjb25zdCBsYXllclN0eWxlID0ge1xyXG4gICAgaWQ6IFwicm91dGVcIixcclxuICAgIHR5cGU6IFwibGluZVwiLFxyXG4gICAgc291cmNlOiBcInJvdXRlXCIsXHJcbiAgICBwYWludDoge1xyXG4gICAgICBcImxpbmUtY29sb3JcIjogXCIjZmNmYzAzXCIsXHJcbiAgICAgIFwibGluZS13aWR0aFwiOiA1LFxyXG4gICAgfSxcclxuICAgIGxheW91dDoge1xyXG4gICAgICBcImxpbmUtam9pblwiOiBcInJvdW5kXCIsXHJcbiAgICAgIFwibGluZS1jYXBcIjogXCJyb3VuZFwiLFxyXG4gICAgfSxcclxuICB9XHJcblxyXG4gIC8vIGl0IHdpbGwgcnVuIG9uY2UgdGhlIGNvbXBvbmVudCByZS1yZW5kZXJzIGFuZCBzdG9wLCB3aGljaCBpcyBzZXR0aW5nIG91ciBjdXJyZW50IGxvY2F0aW9uIGFuZCBzdG9yZSB0aGVtIGluIHRoZSBzdGF0ZVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGZ1bmN0aW9uIChwb3NpdGlvbikge1xyXG4gICAgICBzZXRWaWV3cG9ydCh7XHJcbiAgICAgICAgbGF0aXR1ZGU6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcclxuICAgICAgICBsb25naXR1ZGU6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsXHJcbiAgICAgICAgem9vbTogMTAsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwdndcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgfSlcclxuICAgICAgc2V0TWFya2VycyhbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGF0aXR1ZGU6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcclxuICAgICAgICAgIGxvbmdpdHVkZTogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdKVxyXG5cclxuICAgICAgZmV0Y2hEYXRhKHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsIHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSkudGhlbihcclxuICAgICAgICBuYW1lID0+IHtcclxuICAgICAgICAgIHNldE9yaWdpbk5hbWUobmFtZSlcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIC8vbWFpbiBmdW5jdGlvbiByZXNwb25zaWJsZSBmb3IgY2hhbmdpbmcgdGhlIHZpZXcgaW4gdGhlIG1hcFxyXG4gIGNvbnN0IGhhbmRsZVZpZXdwb3J0Q2hhbmdlID0gbmV3Vmlld3BvcnQgPT4ge1xyXG4gICAgc2V0Vmlld3BvcnQobmV3Vmlld3BvcnQpXHJcbiAgfVxyXG5cclxuICAvL2Z1bmN0aW9uIHRvIHJvdW5kIGEgbnVtYmVyXHJcbiAgZnVuY3Rpb24gcm91bmQobnVtLCBkZWMpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIE1hdGgucG93KDEwLCBkZWMpKSAvIE1hdGgucG93KDEwLCBkZWMpXHJcbiAgfVxyXG5cclxuICAvLyBmdW5jdGlvbiBpcyBjYWxsZWQgd2hldmVyIHRoZSBzZWFyY2ggY29tcG9uZW50IGNoYW5nZXNcclxuICBjb25zdCBoYW5kbGVHZW9jb2RlclZpZXdwb3J0Q2hhbmdlVG8gPSBuZXdWaWV3cG9ydCA9PiB7XHJcbiAgICBjb25zdCBnZW9jb2RlckRlZmF1bHRPdmVycmlkZXMgPSB7XHJcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogbmV3Vmlld3BvcnQudHJhbnNpdGlvbkR1cmF0aW9uLFxyXG4gICAgfVxyXG4gICAgaWYgKCFuZXdWaWV3cG9ydCkgcmV0dXJuXHJcbiAgICBzZXRNYXJrZXJzKFtcclxuICAgICAgLi4ubWFya2VycyxcclxuICAgICAgeyBsYXRpdHVkZTogbmV3Vmlld3BvcnQubGF0aXR1ZGUsIGxvbmdpdHVkZTogbmV3Vmlld3BvcnQubG9uZ2l0dWRlIH0sXHJcbiAgICBdKVxyXG4gICAgZGlyZWN0aW9uc0FwaShtYXJrZXJzLCBuZXdWaWV3cG9ydCkudGhlbihkYXRhID0+IHNldEdlbyhkYXRhKSlcclxuXHJcbiAgICBmZXRjaERhdGEobmV3Vmlld3BvcnQubG9uZ2l0dWRlLCBuZXdWaWV3cG9ydC5sYXRpdHVkZSkudGhlbihuYW1lID0+XHJcbiAgICAgIHNldERlc3RpbmF0aW9uTmFtZShuYW1lKVxyXG4gICAgKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiem9vbVwiLCBuZXdWaWV3cG9ydClcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRTaG93KHRydWUpXHJcbiAgICB9LCBuZXdWaWV3cG9ydC50cmFuc2l0aW9uRHVyYXRpb24pXHJcbiAgICByZXR1cm4gaGFuZGxlVmlld3BvcnRDaGFuZ2Uoe1xyXG4gICAgICAuLi5uZXdWaWV3cG9ydCxcclxuICAgICAgem9vbTogbmV3Vmlld3BvcnQuem9vbSxcclxuICAgICAgLi4uZ2VvY29kZXJEZWZhdWx0T3ZlcnJpZGVzLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsZWFyU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgc2V0R2VvKG51bGwpXHJcbiAgICBzZXRNYXJrZXJzKG1hcmtlcnMuc2xpY2UoMCwgMSkpXHJcbiAgICBzZXRTaG93KGZhbHNlKVxyXG4gICAgc2V0TG9jYXRpb24oXCJcIilcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcFwiPlxyXG4gICAgICAgIHsvKiByZW5kZXJpbmcgdGhlIG1hcCBpbiB0aGUgYnJvd3NlciAqL31cclxuICAgICAgICA8UmVhY3RNYXBHTFxyXG4gICAgICAgICAgcmVmPXttYXBSZWZ9XHJcbiAgICAgICAgICB7Li4udmlld3BvcnR9XHJcbiAgICAgICAgICBvblZpZXdwb3J0Q2hhbmdlPXtoYW5kbGVWaWV3cG9ydENoYW5nZX1cclxuICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXtNQVBCT1hfVE9LRU59XHJcbiAgICAgICAgICBtYXBTdHlsZT1cIm1hcGJveDovL3N0eWxlcy9tYXBib3gvc3RyZWV0cy12MTFcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsvKiBuYXZpZ2F0aW9uIG9uIHRoZSB0b3AtbGVmdCBjb3JuZXIgb2YgdGhlIG1hcCAqL31cclxuICAgICAgICAgIDxOYXZpZ2F0aW9uQ29udHJvbCBzdHlsZT17bmF2Q29udHJvbFN0eWxlfSAvPlxyXG4gICAgICAgICAgey8qIHJlbmRlcmluZyB0aGUgZGlyZWN0aW9ucyBmcm9tIG9uZSBwb2ludCB0byBhbm90aGVyICovfVxyXG4gICAgICAgICAge2dlbyAhPSBudWxsID8gKFxyXG4gICAgICAgICAgICA8U291cmNlXHJcbiAgICAgICAgICAgICAgaWQ9XCJyb3V0ZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cImdlb2pzb25cIlxyXG4gICAgICAgICAgICAgIGRhdGE9e3tcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczoge30sXHJcbiAgICAgICAgICAgICAgICBnZW9tZXRyeToge1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcIkxpbmVTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGdlbz8uZ2VvbWV0cnk/LmNvb3JkaW5hdGVzLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExheWVyIHsuLi5sYXllclN0eWxlfSAvPlxyXG4gICAgICAgICAgICA8L1NvdXJjZT5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHttYXJrZXJzLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICBtYXJrZXJzLm1hcCgocG9pbnQsIGlkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgIDxNYXJrZXJcclxuICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU9e051bWJlcihwb2ludD8ubGF0aXR1ZGUpfVxyXG4gICAgICAgICAgICAgICAgICBsb25naXR1ZGU9e051bWJlcihwb2ludD8ubG9uZ2l0dWRlKX1cclxuICAgICAgICAgICAgICAgICAgb2Zmc2V0TGVmdD17LTIwfVxyXG4gICAgICAgICAgICAgICAgICBvZmZzZXRUb3A9ey0xMH1cclxuICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd3BvcHVwKGlkKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvNDgvMDAwMDAwL21hcC1waW4ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2NhdGlvbiBtYXJrXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvTWFya2VyPlxyXG4gICAgICAgICAgICAgICAge3Nob3dQb3B1cCA9PT0gaWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8UG9wdXBcclxuICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZT17cG9pbnQ/LmxhdGl0dWRlfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZT17cG9pbnQ/LmxvbmdpdHVkZX1cclxuICAgICAgICAgICAgICAgICAgICBjbG9zZUJ1dHRvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yPVwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93cG9wdXAoLTEpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIzMDBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2lkID09PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5PcmlnaW46IHtvcmlnaW5OYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IERlc3RpbmF0aW9uOiB7ZGVzdGluYXRpb25OYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5kaXN0YW5jZTp7cm91bmQoZ2VvPy5kaXN0YW5jZSAvIDEwMDAsIDIpfSBrbTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5kdXJhdGlvbnM6e3JvdW5kKGdlbz8uZHVyYXRpb24gLyA2MCwgMil9IG1pbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L1BvcHVwPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9SZWFjdE1hcEdMPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIHJlbmRlcmluZyB0aGUgU2VhcmNoIHBsYWNlcyBmdW5jdGlvbmFsaXR5ICAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cclxuICAgICAgICA8R2VvY29kZXJcclxuICAgICAgICAgIG1hcFJlZj17bWFwUmVmfVxyXG4gICAgICAgICAgb25WaWV3cG9ydENoYW5nZT17aGFuZGxlR2VvY29kZXJWaWV3cG9ydENoYW5nZVRvfVxyXG4gICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49e01BUEJPWF9UT0tFTn1cclxuICAgICAgICAgIHBvc2l0aW9uPVwidG9wLWxlZnRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJjaG9vc2UgeW91ciBkZXN0aW5hdGlvblwiXHJcbiAgICAgICAgICBvbkNsZWFyPXtjbGVhclNlYXJjaH1cclxuICAgICAgICAgIGlucHV0VmFsdWU9e2xvY2F0aW9uID8gbG9jYXRpb24gOiBcIlwifVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvdyA9PSB0cnVlID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bMjQwcHhdIGgtWzMwMHB4XSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciByb3VuZGVkIHAtMiB6LTEwIGJnLXdoaXRlIGFic29sdXRlIHRvcC1bNTJweF0gbGVmdC1bMTBweF1cIj5cclxuICAgICAgICAgIDxoMz5DaG9vc2UgYSByaWRlPC9oMz5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bODAlXSBoLVs1MHB4XSByb3VuZGVkICBtdC00IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwLTIgaG92ZXI6YmctYmx1ZS0zMDAgYmctYmx1ZS00MDAgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgIHNldFJpZGUocm91bmQocm91bmQoZ2VvPy5kaXN0YW5jZSAvIDEwMDAsIDIpICogMi40NSwgMikpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHA+VWJlciBYPC9wPlxyXG4gICAgICAgICAgICA8cD5QcmljZToge3JvdW5kKHJvdW5kKGdlbz8uZGlzdGFuY2UgLyAxMDAwLCAyKSAqIDIuNDUsIDIpfSQ8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bODAlXSBoLVs1MHB4XSByb3VuZGVkIG10LTQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHAtMiBiZy1ibHVlLTQwMCBob3ZlcjpiZy1ibHVlLTMwMCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgc2V0UmlkZShyb3VuZChyb3VuZChnZW8/LmRpc3RhbmNlIC8gMTAwMCwgMikgKiAzLjY3LCAyKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cD5VYmVyIFhTPC9wPlxyXG4gICAgICAgICAgICA8cD5QcmljZToge3JvdW5kKHJvdW5kKGdlbz8uZGlzdGFuY2UgLyAxMDAwLCAyKSAqIDMuNjcsIDIpfSQ8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bODAlXSBoLVs1MHB4XSByb3VuZGVkIG10LTQgZmxleCBqdXN0aWZ5LWJldHdlZW4gcC0yIGl0ZW1zLWNlbnRlciBiZy1ibHVlLTQwMCBob3ZlcjpiZy1ibHVlLTMwMCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgc2V0UmlkZShyb3VuZChyb3VuZChnZW8/LmRpc3RhbmNlIC8gMTAwMCwgMikgKiA0LjU1LCAyKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cD5VYmVyIEVsPC9wPlxyXG4gICAgICAgICAgICA8cD5QcmljZToge3JvdW5kKHJvdW5kKGdlbz8uZGlzdGFuY2UgLyAxMDAwLCAyKSAqIDQuNTUsIDIpfSQ8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtyaWRlICYmIChcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNvbG9yPVwibGlnaHRCbHVlXCJcclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICByaXBwbGU9XCJsaWdodFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKHRydWUpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgR2V0IHJpZGUge3JpZGV9JFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPFBheXBhbE1vZGVsXHJcbiAgICAgICAgc2hvd01vZGFsPXtzaG93TW9kYWx9XHJcbiAgICAgICAgc2V0U2hvd01vZGFsPXtzZXRTaG93TW9kYWx9XHJcbiAgICAgICAgcHJpY2U9e3JpZGV9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcGJveFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbFwiXHJcbmltcG9ydCBNb2RhbEhlYWRlciBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L01vZGFsSGVhZGVyXCJcclxuaW1wb3J0IE1vZGFsQm9keSBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L01vZGFsQm9keVwiXHJcbmltcG9ydCBNb2RhbEZvb3RlciBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L01vZGFsRm9vdGVyXCJcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0J1dHRvblwiXHJcbmltcG9ydCB7IFBheVBhbEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1wYXlwYWwtYnV0dG9uLXYyXCJcclxuXHJcbmNvbnN0IHBheXBhbE1vZGVsID0gKHsgc2hvd01vZGFsLCBzZXRTaG93TW9kYWwsIHByaWNlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE1vZGFsIHNpemU9XCJzbVwiIGFjdGl2ZT17c2hvd01vZGFsfSB0b2dnbGVyPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfT5cclxuICAgICAgICA8TW9kYWxIZWFkZXIgdG9nZ2xlcj17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX0+XHJcbiAgICAgICAgICBQYXlwYWwgY2hlY2tPdXRcclxuICAgICAgICA8L01vZGFsSGVhZGVyPlxyXG4gICAgICAgIDxNb2RhbEJvZHk+XHJcbiAgICAgICAgICA8UGF5UGFsQnV0dG9uXHJcbiAgICAgICAgICAgIGFtb3VudD17cHJpY2V9XHJcbiAgICAgICAgICAgIG9uU3VjY2Vzcz17KGRldGFpbHMsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICBhbGVydChcIlRyYW5zYWN0aW9uIGNvbXBsZXRlZCBieSBcIiArIGRldGFpbHMucGF5ZXIubmFtZS5naXZlbl9uYW1lKVxyXG4gICAgICAgICAgICAgIHNldFNob3dNb2RhbChmYWxzZSlcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5wYXlwYWxLRVksXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTW9kYWxCb2R5PlxyXG4gICAgICAgIDxNb2RhbEZvb3Rlcj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgICBidXR0b25UeXBlPVwibGlua1wiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cclxuICAgICAgICAgICAgcmlwcGxlPVwiZGFya1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiZ3JlZW5cIiByaXBwbGU9XCJsaWdodFwiPlxyXG4gICAgICAgICAgICBBZGQgbG9jYXRpb25cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvTW9kYWxGb290ZXI+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBheXBhbE1vZGVsXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTWFwYm94IGZyb20gXCIuLi9jb21wb25lbnRzL21hcGJveFwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiQGJhZHJhcC9iYXItb2YtcHJvZ3Jlc3NcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXHJcblxyXG5jb25zdCBNYXAgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBsb2NhdGlvbiA9IHJvdXRlci5xdWVyeS5sb2NhdGlvblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE1hcGJveCBsb2NhdGlvblByb3A9e2xvY2F0aW9ufSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXBcclxuIiwiZXhwb3J0IGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh4LCB5KSA9PiB7XHJcbiAgbGV0IG5hbWUgPSAnJ1xyXG4gIGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vYXBpLm1hcGJveC5jb20vZ2VvY29kaW5nL3Y1L21hcGJveC5wbGFjZXMvJHt4fSwke3l9Lmpzb24/YWNjZXNzX3Rva2VuPXBrLmV5SjFJam9pYW1GM1lXUmhiVzFoY2pFeUlpd2lZU0k2SW1OcmNtNDJhRzQyTkRSbE0zb3lkWEE0TldvemEyTjZkRzhpZlEuVWplSFA0TTNNbFRKZzc4SzBUSHFSUSBgXHJcbiAgKVxyXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgbmFtZSA9IGRhdGEuZmVhdHVyZXNbMF0ucGxhY2VfbmFtZVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuXHJcbiAgcmV0dXJuIG5hbWVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRpcmVjdGlvbnNBcGkgPSBhc3luYyAobWFya2VycywgbmV3Vmlld3BvcnQpID0+IHtcclxuICBsZXQgZGlyZWN0aW9uID0ge31cclxuICBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL2FwaS5tYXBib3guY29tL2RpcmVjdGlvbnMvdjUvbWFwYm94L2RyaXZpbmctdHJhZmZpYy8ke21hcmtlcnNbMF0ubG9uZ2l0dWRlfSwke21hcmtlcnNbMF0ubGF0aXR1ZGV9OyR7bmV3Vmlld3BvcnQ/LmxvbmdpdHVkZX0sJHtuZXdWaWV3cG9ydD8ubGF0aXR1ZGV9P2dlb21ldHJpZXM9Z2VvanNvbiZhY2Nlc3NfdG9rZW49cGsuZXlKMUlqb2lhbUYzWVdSaGJXMWhjakV5SWl3aVlTSTZJbU5yY200MmFHNDJORFJsTTNveWRYQTROV296YTJONmRHOGlmUS5VamVIUDRNM01sVEpnNzhLMFRIcVJRYFxyXG4gIClcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgIGRpcmVjdGlvbiA9IGRhdGEucm91dGVzWzBdXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gIHJldHVybiB7IC4uLmRpcmVjdGlvbiB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhZHJhcC9iYXItb2YtcHJvZ3Jlc3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9CdXR0b25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L01vZGFsQm9keVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L01vZGFsRm9vdGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxIZWFkZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWFwLWdsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tYXAtZ2wtZ2VvY29kZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXBheXBhbC1idXR0b24tdjJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==