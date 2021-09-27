"use strict";
(() => {
var exports = {};
exports.id = "pages/api/createLocation";
exports.ids = ["pages/api/createLocation"];
exports.modules = {

/***/ "./pages/api/createLocation.js":
/*!*************************************!*\
  !*** ./pages/api/createLocation.js ***!
  \*************************************/
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
    const data = await prisma.user.findMany();
    let id = 0;
    data.map(item => {
      if (item.name === req.body.email) {
        id = item.id;
      }
    });
    console.log(id);

    if (req.body.todo && id > 0) {
      await prisma.locations.create({
        data: {
          UserId: id,
          Name: req.body.todo
        }
      });
    }

    res.send('ok');
  } else {
    const allLocations = await prisma.locations.findMany();
    res.json({
      allLocations
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/createLocation.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2NyZWF0ZUxvY2F0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCx3REFBSixFQUFmO0FBRWUsZUFBZUUsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzlDLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFVBQU1DLElBQUksR0FBRyxNQUFNTCxNQUFNLENBQUNNLElBQVAsQ0FBWUMsUUFBWixFQUFuQjtBQUNBLFFBQUlDLEVBQUUsR0FBRyxDQUFUO0FBQ0FILElBQUFBLElBQUksQ0FBQ0ksR0FBTCxDQUFTQyxJQUFJLElBQUk7QUFDZixVQUFJQSxJQUFJLENBQUNDLElBQUwsS0FBY1QsR0FBRyxDQUFDVSxJQUFKLENBQVNDLEtBQTNCLEVBQWtDO0FBQ2hDTCxRQUFBQSxFQUFFLEdBQUdFLElBQUksQ0FBQ0YsRUFBVjtBQUNEO0FBQ0YsS0FKRDtBQUtBTSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsRUFBWjs7QUFDQSxRQUFJTixHQUFHLENBQUNVLElBQUosQ0FBU0ksSUFBVCxJQUFpQlIsRUFBRSxHQUFHLENBQTFCLEVBQTZCO0FBQzNCLFlBQU1SLE1BQU0sQ0FBQ2lCLFNBQVAsQ0FBaUJDLE1BQWpCLENBQXdCO0FBQzVCYixRQUFBQSxJQUFJLEVBQUU7QUFDSmMsVUFBQUEsTUFBTSxFQUFFWCxFQURKO0FBRUpZLFVBQUFBLElBQUksRUFBRWxCLEdBQUcsQ0FBQ1UsSUFBSixDQUFTSTtBQUZYO0FBRHNCLE9BQXhCLENBQU47QUFNRDs7QUFDRGIsSUFBQUEsR0FBRyxDQUFDa0IsSUFBSixDQUFTLElBQVQ7QUFDRCxHQWxCRCxNQWtCTztBQUNMLFVBQU1DLFlBQVksR0FBRyxNQUFNdEIsTUFBTSxDQUFDaUIsU0FBUCxDQUFpQlYsUUFBakIsRUFBM0I7QUFDQUosSUFBQUEsR0FBRyxDQUFDb0IsSUFBSixDQUFTO0FBQUVELE1BQUFBO0FBQUYsS0FBVDtBQUNEO0FBQ0Y7Ozs7Ozs7Ozs7QUMxQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBib3gvLi9wYWdlcy9hcGkvY3JlYXRlTG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRNYW55KClcclxuICAgIGxldCBpZCA9IDBcclxuICAgIGRhdGEubWFwKGl0ZW0gPT4ge1xyXG4gICAgICBpZiAoaXRlbS5uYW1lID09PSByZXEuYm9keS5lbWFpbCkge1xyXG4gICAgICAgIGlkID0gaXRlbS5pZFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coaWQpXHJcbiAgICBpZiAocmVxLmJvZHkudG9kbyAmJiBpZCA+IDApIHtcclxuICAgICAgYXdhaXQgcHJpc21hLmxvY2F0aW9ucy5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIFVzZXJJZDogaWQsXHJcbiAgICAgICAgICBOYW1lOiByZXEuYm9keS50b2RvLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXMuc2VuZCgnb2snKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBhbGxMb2NhdGlvbnMgPSBhd2FpdCBwcmlzbWEubG9jYXRpb25zLmZpbmRNYW55KClcclxuICAgIHJlcy5qc29uKHsgYWxsTG9jYXRpb25zIH0pXHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsInVzZXIiLCJmaW5kTWFueSIsImlkIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJib2R5IiwiZW1haWwiLCJjb25zb2xlIiwibG9nIiwidG9kbyIsImxvY2F0aW9ucyIsImNyZWF0ZSIsIlVzZXJJZCIsIk5hbWUiLCJzZW5kIiwiYWxsTG9jYXRpb25zIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=