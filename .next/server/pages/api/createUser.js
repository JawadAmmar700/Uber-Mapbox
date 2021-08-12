(function() {
var exports = {};
exports.id = "pages/api/createUser";
exports.ids = ["pages/api/createUser"];
exports.modules = {

/***/ "./pages/api/createUser.js":
/*!*********************************!*\
  !*** ./pages/api/createUser.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body);
    const users = await prisma.user.findMany();
    let found = false;
    users.map(async user => {
      if (user.name === req.body.email) {
        found = user;
      }
    });

    if (!found) {
      const newUser = await prisma.user.create({
        data: {
          name: req.body.email
        }
      });
      res.status(200).json(newUser);
    } else {
      res.status(200).json(found);
    } // res.send('ok')

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/createUser.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBib3gvLi9wYWdlcy9hcGkvY3JlYXRlVXNlci5qcyIsIndlYnBhY2s6Ly9tYXBib3gvZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiIl0sIm5hbWVzIjpbInByaXNtYSIsIlByaXNtYUNsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsInVzZXJzIiwidXNlciIsImZpbmRNYW55IiwiZm91bmQiLCJtYXAiLCJuYW1lIiwiZW1haWwiLCJuZXdVc2VyIiwiY3JlYXRlIiwiZGF0YSIsInN0YXR1cyIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsTUFBTUEsTUFBTSxHQUFHLElBQUlDLHdEQUFKLEVBQWY7QUFFZSxlQUFlQyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDOUMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixHQUFHLENBQUNLLElBQWhCO0FBQ0EsVUFBTUMsS0FBSyxHQUFHLE1BQU1ULE1BQU0sQ0FBQ1UsSUFBUCxDQUFZQyxRQUFaLEVBQXBCO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLEtBQVo7QUFDQUgsU0FBSyxDQUFDSSxHQUFOLENBQVUsTUFBTUgsSUFBTixJQUFjO0FBQ3RCLFVBQUlBLElBQUksQ0FBQ0ksSUFBTCxLQUFjWCxHQUFHLENBQUNLLElBQUosQ0FBU08sS0FBM0IsRUFBa0M7QUFDaENILGFBQUssR0FBR0YsSUFBUjtBQUNEO0FBQ0YsS0FKRDs7QUFLQSxRQUFJLENBQUNFLEtBQUwsRUFBWTtBQUNWLFlBQU1JLE9BQU8sR0FBRyxNQUFNaEIsTUFBTSxDQUFDVSxJQUFQLENBQVlPLE1BQVosQ0FBbUI7QUFDdkNDLFlBQUksRUFBRTtBQUFFSixjQUFJLEVBQUVYLEdBQUcsQ0FBQ0ssSUFBSixDQUFTTztBQUFqQjtBQURpQyxPQUFuQixDQUF0QjtBQUdBWCxTQUFHLENBQUNlLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkosT0FBckI7QUFDRCxLQUxELE1BS087QUFDTFosU0FBRyxDQUFDZSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJSLEtBQXJCO0FBQ0QsS0FoQndCLENBaUJ6Qjs7QUFDRDtBQUNGLEM7Ozs7Ozs7Ozs7O0FDeEJELDRDIiwiZmlsZSI6InBhZ2VzL2FwaS9jcmVhdGVVc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZE1hbnkoKVxuICAgIGxldCBmb3VuZCA9IGZhbHNlXG4gICAgdXNlcnMubWFwKGFzeW5jIHVzZXIgPT4ge1xuICAgICAgaWYgKHVzZXIubmFtZSA9PT0gcmVxLmJvZHkuZW1haWwpIHtcbiAgICAgICAgZm91bmQgPSB1c2VyXG4gICAgICB9XG4gICAgfSlcbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuY3JlYXRlKHtcbiAgICAgICAgZGF0YTogeyBuYW1lOiByZXEuYm9keS5lbWFpbCB9LFxuICAgICAgfSlcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKG5ld1VzZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGZvdW5kKVxuICAgIH1cbiAgICAvLyByZXMuc2VuZCgnb2snKVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==