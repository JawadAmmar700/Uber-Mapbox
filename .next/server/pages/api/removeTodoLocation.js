"use strict";
(() => {
var exports = {};
exports.id = "pages/api/removeTodoLocation";
exports.ids = ["pages/api/removeTodoLocation"];
exports.modules = {

/***/ "./pages/api/removeTodoLocation.js":
/*!*****************************************!*\
  !*** ./pages/api/removeTodoLocation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      id,
      userId
    } = req.body;
    await prisma.locations.delete({
      where: {
        id: id
      }
    });
    const filtered = await prisma.locations.findMany();
    res.json({
      filtered
    });
  }
}

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/removeTodoLocation.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3JlbW92ZVRvZG9Mb2NhdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUQsd0RBQUosRUFBZjtBQUVlLGVBQWVFLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUM5QyxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QixVQUFNO0FBQUVDLE1BQUFBLEVBQUY7QUFBTUMsTUFBQUE7QUFBTixRQUFpQkosR0FBRyxDQUFDSyxJQUEzQjtBQUNBLFVBQU1QLE1BQU0sQ0FBQ1EsU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0I7QUFDNUJDLE1BQUFBLEtBQUssRUFBRTtBQUNMTCxRQUFBQSxFQUFFLEVBQUVBO0FBREM7QUFEcUIsS0FBeEIsQ0FBTjtBQUtBLFVBQU1NLFFBQVEsR0FBRyxNQUFNWCxNQUFNLENBQUNRLFNBQVAsQ0FBaUJJLFFBQWpCLEVBQXZCO0FBQ0FULElBQUFBLEdBQUcsQ0FBQ1UsSUFBSixDQUFTO0FBQUVGLE1BQUFBO0FBQUYsS0FBVDtBQUNEO0FBQ0Y7Ozs7Ozs7Ozs7QUNkRCIsInNvdXJjZXMiOlsid2VicGFjazovL21hcGJveC8uL3BhZ2VzL2FwaS9yZW1vdmVUb2RvTG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgY29uc3QgeyBpZCwgdXNlcklkIH0gPSByZXEuYm9keVxyXG4gICAgYXdhaXQgcHJpc21hLmxvY2F0aW9ucy5kZWxldGUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGlkOiBpZCxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBjb25zdCBmaWx0ZXJlZCA9IGF3YWl0IHByaXNtYS5sb2NhdGlvbnMuZmluZE1hbnkoKVxyXG4gICAgcmVzLmpzb24oeyBmaWx0ZXJlZCB9KVxyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImlkIiwidXNlcklkIiwiYm9keSIsImxvY2F0aW9ucyIsImRlbGV0ZSIsIndoZXJlIiwiZmlsdGVyZWQiLCJmaW5kTWFueSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9