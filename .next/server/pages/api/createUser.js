"use strict";
(() => {
var exports = {};
exports.id = "pages/api/createUser";
exports.ids = ["pages/api/createUser"];
exports.modules = {

/***/ "./pages/api/createUser.js":
/*!*********************************!*\
  !*** ./pages/api/createUser.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
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
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/createUser.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2NyZWF0ZVVzZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUQsd0RBQUosRUFBZjtBQUVlLGVBQWVFLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUM5QyxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLEdBQUcsQ0FBQ0ssSUFBaEI7QUFDQSxVQUFNQyxLQUFLLEdBQUcsTUFBTVIsTUFBTSxDQUFDUyxJQUFQLENBQVlDLFFBQVosRUFBcEI7QUFDQSxRQUFJQyxLQUFLLEdBQUcsS0FBWjtBQUNBSCxJQUFBQSxLQUFLLENBQUNJLEdBQU4sQ0FBVSxNQUFNSCxJQUFOLElBQWM7QUFDdEIsVUFBSUEsSUFBSSxDQUFDSSxJQUFMLEtBQWNYLEdBQUcsQ0FBQ0ssSUFBSixDQUFTTyxLQUEzQixFQUFrQztBQUNoQ0gsUUFBQUEsS0FBSyxHQUFHRixJQUFSO0FBQ0Q7QUFDRixLQUpEOztBQUtBLFFBQUksQ0FBQ0UsS0FBTCxFQUFZO0FBQ1YsWUFBTUksT0FBTyxHQUFHLE1BQU1mLE1BQU0sQ0FBQ1MsSUFBUCxDQUFZTyxNQUFaLENBQW1CO0FBQ3ZDQyxRQUFBQSxJQUFJLEVBQUU7QUFBRUosVUFBQUEsSUFBSSxFQUFFWCxHQUFHLENBQUNLLElBQUosQ0FBU087QUFBakI7QUFEaUMsT0FBbkIsQ0FBdEI7QUFHQVgsTUFBQUEsR0FBRyxDQUFDZSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJKLE9BQXJCO0FBQ0QsS0FMRCxNQUtPO0FBQ0xaLE1BQUFBLEdBQUcsQ0FBQ2UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCUixLQUFyQjtBQUNELEtBaEJ3QixDQWlCekI7O0FBQ0Q7QUFDRjs7Ozs7Ozs7OztBQ3hCRCIsInNvdXJjZXMiOlsid2VicGFjazovL21hcGJveC8uL3BhZ2VzL2FwaS9jcmVhdGVVc2VyLmpzIiwid2VicGFjazovL21hcGJveC9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZE1hbnkoKVxuICAgIGxldCBmb3VuZCA9IGZhbHNlXG4gICAgdXNlcnMubWFwKGFzeW5jIHVzZXIgPT4ge1xuICAgICAgaWYgKHVzZXIubmFtZSA9PT0gcmVxLmJvZHkuZW1haWwpIHtcbiAgICAgICAgZm91bmQgPSB1c2VyXG4gICAgICB9XG4gICAgfSlcbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuY3JlYXRlKHtcbiAgICAgICAgZGF0YTogeyBuYW1lOiByZXEuYm9keS5lbWFpbCB9LFxuICAgICAgfSlcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKG5ld1VzZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGZvdW5kKVxuICAgIH1cbiAgICAvLyByZXMuc2VuZCgnb2snKVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwidXNlcnMiLCJ1c2VyIiwiZmluZE1hbnkiLCJmb3VuZCIsIm1hcCIsIm5hbWUiLCJlbWFpbCIsIm5ld1VzZXIiLCJjcmVhdGUiLCJkYXRhIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=