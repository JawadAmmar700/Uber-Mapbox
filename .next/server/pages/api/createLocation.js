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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBib3gvLi9wYWdlcy9hcGkvY3JlYXRlTG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vbWFwYm94L2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJQcmlzbWFDbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsInVzZXIiLCJmaW5kTWFueSIsImlkIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJib2R5IiwiZW1haWwiLCJjb25zb2xlIiwibG9nIiwidG9kbyIsImxvY2F0aW9ucyIsImNyZWF0ZSIsIlVzZXJJZCIsIk5hbWUiLCJzZW5kIiwiYWxsTG9jYXRpb25zIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsTUFBTUEsTUFBTSxHQUFHLElBQUlDLHdEQUFKLEVBQWY7QUFFZSxlQUFlQyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDOUMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekIsVUFBTUMsSUFBSSxHQUFHLE1BQU1OLE1BQU0sQ0FBQ08sSUFBUCxDQUFZQyxRQUFaLEVBQW5CO0FBQ0EsUUFBSUMsRUFBRSxHQUFHLENBQVQ7QUFDQUgsUUFBSSxDQUFDSSxHQUFMLENBQVNDLElBQUksSUFBSTtBQUNmLFVBQUlBLElBQUksQ0FBQ0MsSUFBTCxLQUFjVCxHQUFHLENBQUNVLElBQUosQ0FBU0MsS0FBM0IsRUFBa0M7QUFDaENMLFVBQUUsR0FBR0UsSUFBSSxDQUFDRixFQUFWO0FBQ0Q7QUFDRixLQUpEO0FBS0FNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUCxFQUFaOztBQUNBLFFBQUlOLEdBQUcsQ0FBQ1UsSUFBSixDQUFTSSxJQUFULElBQWlCUixFQUFFLEdBQUcsQ0FBMUIsRUFBNkI7QUFDM0IsWUFBTVQsTUFBTSxDQUFDa0IsU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0I7QUFDNUJiLFlBQUksRUFBRTtBQUNKYyxnQkFBTSxFQUFFWCxFQURKO0FBRUpZLGNBQUksRUFBRWxCLEdBQUcsQ0FBQ1UsSUFBSixDQUFTSTtBQUZYO0FBRHNCLE9BQXhCLENBQU47QUFNRDs7QUFDRGIsT0FBRyxDQUFDa0IsSUFBSixDQUFTLElBQVQ7QUFDRCxHQWxCRCxNQWtCTztBQUNMLFVBQU1DLFlBQVksR0FBRyxNQUFNdkIsTUFBTSxDQUFDa0IsU0FBUCxDQUFpQlYsUUFBakIsRUFBM0I7QUFDQUosT0FBRyxDQUFDb0IsSUFBSixDQUFTO0FBQUVEO0FBQUYsS0FBVDtBQUNEO0FBQ0YsQzs7Ozs7Ozs7Ozs7QUMxQkQsNEMiLCJmaWxlIjoicGFnZXMvYXBpL2NyZWF0ZUxvY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kTWFueSgpXHJcbiAgICBsZXQgaWQgPSAwXHJcbiAgICBkYXRhLm1hcChpdGVtID0+IHtcclxuICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gcmVxLmJvZHkuZW1haWwpIHtcclxuICAgICAgICBpZCA9IGl0ZW0uaWRcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgaWYgKHJlcS5ib2R5LnRvZG8gJiYgaWQgPiAwKSB7XHJcbiAgICAgIGF3YWl0IHByaXNtYS5sb2NhdGlvbnMuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBVc2VySWQ6IGlkLFxyXG4gICAgICAgICAgTmFtZTogcmVxLmJvZHkudG9kbyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmVzLnNlbmQoJ29rJylcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgYWxsTG9jYXRpb25zID0gYXdhaXQgcHJpc21hLmxvY2F0aW9ucy5maW5kTWFueSgpXHJcbiAgICByZXMuanNvbih7IGFsbExvY2F0aW9ucyB9KVxyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==