webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function () {
    function Point(x, y) {
        _classCallCheck(this, Point);

        this.x = x;
        this.y = y;
    }

    _createClass(Point, [{
        key: 'toString',
        value: function toString() {
            return '(' + this.x + ',' + this.y + ')';
        }
    }]);

    return Point;
}();

exports.default = Point;

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Point = __webpack_require__(0);

var _Point2 = _interopRequireDefault(_Point);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moment = __webpack_require__(1);

var body = document.querySelector('body');
body.textContent = 'Good point: ' + new _Point2.default(1, 23);

/***/ })
],[2]);