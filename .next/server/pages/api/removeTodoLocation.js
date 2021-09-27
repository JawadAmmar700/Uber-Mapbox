(function() {
var exports = {};
exports.id = "pages/api/removeTodoLocation";
exports.ids = ["pages/api/removeTodoLocation"];
exports.modules = {

/***/ "./pages/api/removeTodoLocation.js":
/*!*****************************************!*\
  !*** ./pages/api/removeTodoLocation.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
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
/***/ (function(module) {

"use strict";
module.exports = require("@prisma/client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/removeTodoLocation.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBib3gvLi9wYWdlcy9hcGkvcmVtb3ZlVG9kb0xvY2F0aW9uLmpzIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiXSwibmFtZXMiOlsicHJpc21hIiwiUHJpc21hQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImlkIiwidXNlcklkIiwiYm9keSIsImxvY2F0aW9ucyIsImRlbGV0ZSIsIndoZXJlIiwiZmlsdGVyZWQiLCJmaW5kTWFueSIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQyx3REFBSixFQUFmO0FBRWUsZUFBZUMsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzlDLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFVBQU07QUFBRUMsUUFBRjtBQUFNQztBQUFOLFFBQWlCSixHQUFHLENBQUNLLElBQTNCO0FBQ0EsVUFBTVIsTUFBTSxDQUFDUyxTQUFQLENBQWlCQyxNQUFqQixDQUF3QjtBQUM1QkMsV0FBSyxFQUFFO0FBQ0xMLFVBQUUsRUFBRUE7QUFEQztBQURxQixLQUF4QixDQUFOO0FBS0EsVUFBTU0sUUFBUSxHQUFHLE1BQU1aLE1BQU0sQ0FBQ1MsU0FBUCxDQUFpQkksUUFBakIsRUFBdkI7QUFDQVQsT0FBRyxDQUFDVSxJQUFKLENBQVM7QUFBRUY7QUFBRixLQUFUO0FBQ0Q7QUFDRixDOzs7Ozs7Ozs7OztBQ2RELDRDIiwiZmlsZSI6InBhZ2VzL2FwaS9yZW1vdmVUb2RvTG9jYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgY29uc3QgeyBpZCwgdXNlcklkIH0gPSByZXEuYm9keVxyXG4gICAgYXdhaXQgcHJpc21hLmxvY2F0aW9ucy5kZWxldGUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGlkOiBpZCxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBjb25zdCBmaWx0ZXJlZCA9IGF3YWl0IHByaXNtYS5sb2NhdGlvbnMuZmluZE1hbnkoKVxyXG4gICAgcmVzLmpzb24oeyBmaWx0ZXJlZCB9KVxyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==