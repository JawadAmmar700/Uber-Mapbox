(function() {
var exports = {};
exports.id = "pages/api/createLocation";
exports.ids = ["pages/api/createLocation"];
exports.modules = {

/***/ "./pages/api/createLocation.js":
/*!*************************************!*\
  !*** ./pages/api/createLocation.js ***!
  \*************************************/
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/createLocation.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBib3gvbWFwYm94Ly4vcGFnZXMvYXBpL2NyZWF0ZUxvY2F0aW9uLmpzIiwid2VicGFjazovL21hcGJveC9tYXBib3gvZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiIl0sIm5hbWVzIjpbInByaXNtYSIsIlByaXNtYUNsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwidXNlciIsImZpbmRNYW55IiwiaWQiLCJtYXAiLCJpdGVtIiwibmFtZSIsImJvZHkiLCJlbWFpbCIsImNvbnNvbGUiLCJsb2ciLCJ0b2RvIiwibG9jYXRpb25zIiwiY3JlYXRlIiwiVXNlcklkIiwiTmFtZSIsInNlbmQiLCJhbGxMb2NhdGlvbnMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxNQUFNQSxNQUFNLEdBQUcsSUFBSUMsd0RBQUosRUFBZjtBQUVlLGVBQWVDLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUM5QyxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QixVQUFNQyxJQUFJLEdBQUcsTUFBTU4sTUFBTSxDQUFDTyxJQUFQLENBQVlDLFFBQVosRUFBbkI7QUFDQSxRQUFJQyxFQUFFLEdBQUcsQ0FBVDtBQUNBSCxRQUFJLENBQUNJLEdBQUwsQ0FBU0MsSUFBSSxJQUFJO0FBQ2YsVUFBSUEsSUFBSSxDQUFDQyxJQUFMLEtBQWNULEdBQUcsQ0FBQ1UsSUFBSixDQUFTQyxLQUEzQixFQUFrQztBQUNoQ0wsVUFBRSxHQUFHRSxJQUFJLENBQUNGLEVBQVY7QUFDRDtBQUNGLEtBSkQ7QUFLQU0sV0FBTyxDQUFDQyxHQUFSLENBQVlQLEVBQVo7O0FBQ0EsUUFBSU4sR0FBRyxDQUFDVSxJQUFKLENBQVNJLElBQVQsSUFBaUJSLEVBQUUsR0FBRyxDQUExQixFQUE2QjtBQUMzQixZQUFNVCxNQUFNLENBQUNrQixTQUFQLENBQWlCQyxNQUFqQixDQUF3QjtBQUM1QmIsWUFBSSxFQUFFO0FBQ0pjLGdCQUFNLEVBQUVYLEVBREo7QUFFSlksY0FBSSxFQUFFbEIsR0FBRyxDQUFDVSxJQUFKLENBQVNJO0FBRlg7QUFEc0IsT0FBeEIsQ0FBTjtBQU1EOztBQUNEYixPQUFHLENBQUNrQixJQUFKLENBQVMsSUFBVDtBQUNELEdBbEJELE1Ba0JPO0FBQ0wsVUFBTUMsWUFBWSxHQUFHLE1BQU12QixNQUFNLENBQUNrQixTQUFQLENBQWlCVixRQUFqQixFQUEzQjtBQUNBSixPQUFHLENBQUNvQixJQUFKLENBQVM7QUFBRUQ7QUFBRixLQUFUO0FBQ0Q7QUFDRixDOzs7Ozs7Ozs7OztBQzFCRCw0QyIsImZpbGUiOiJwYWdlcy9hcGkvY3JlYXRlTG9jYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRNYW55KClcclxuICAgIGxldCBpZCA9IDBcclxuICAgIGRhdGEubWFwKGl0ZW0gPT4ge1xyXG4gICAgICBpZiAoaXRlbS5uYW1lID09PSByZXEuYm9keS5lbWFpbCkge1xyXG4gICAgICAgIGlkID0gaXRlbS5pZFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coaWQpXHJcbiAgICBpZiAocmVxLmJvZHkudG9kbyAmJiBpZCA+IDApIHtcclxuICAgICAgYXdhaXQgcHJpc21hLmxvY2F0aW9ucy5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIFVzZXJJZDogaWQsXHJcbiAgICAgICAgICBOYW1lOiByZXEuYm9keS50b2RvLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXMuc2VuZCgnb2snKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBhbGxMb2NhdGlvbnMgPSBhd2FpdCBwcmlzbWEubG9jYXRpb25zLmZpbmRNYW55KClcclxuICAgIHJlcy5qc29uKHsgYWxsTG9jYXRpb25zIH0pXHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9