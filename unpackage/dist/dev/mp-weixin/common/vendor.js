(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 6));var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 5);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e24) {throw _e24;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e25) {didErr = true;err = _e25;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _wrapNativeSuper(Class) {var _cache = typeof Map === "function" ? new Map() : undefined;_wrapNativeSuper = function _wrapNativeSuper(Class) {if (Class === null || !_isNativeFunction(Class)) return Class;if (typeof Class !== "function") {throw new TypeError("Super expression must either be null or a function");}if (typeof _cache !== "undefined") {if (_cache.has(Class)) return _cache.get(Class);_cache.set(Class, Wrapper);}function Wrapper() {return _construct(Class, arguments, _getPrototypeOf(this).constructor);}Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });return _setPrototypeOf(Wrapper, Class);};return _wrapNativeSuper(Class);}function _construct(Parent, args, Class) {if (_isNativeReflectConstruct()) {_construct = Reflect.construct;} else {_construct = function _construct(Parent, args, Class) {var a = [null];a.push.apply(a, args);var Constructor = Function.bind.apply(Parent, a);var instance = new Constructor();if (Class) _setPrototypeOf(instance, Class.prototype);return instance;};}return _construct.apply(null, arguments);}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _isNativeFunction(fn) {return Function.toString.call(fn).indexOf("[native code]") !== -1;}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;function t(e) {return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;}function n(e, t, n) {return e(n = { path: t, exports: {}, require: function require(e, t) {return function () {throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");}(null == t && n.path);} }, n.exports), n.exports;}var s = n(function (e, t) {var n;e.exports = (n = n || function (e, t) {var n = Object.create || function () {function e() {}return function (t) {var n;return e.prototype = t, n = new e(), e.prototype = null, n;};}(),s = {},r = s.lib = {},o = r.Base = { extend: function extend(e) {var t = n(this);return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {t.$super.init.apply(this, arguments);}), t.init.prototype = t, t.$super = this, t;}, create: function create() {var e = this.extend();return e.init.apply(e, arguments), e;}, init: function init() {}, mixIn: function mixIn(e) {for (var t in e) {e.hasOwnProperty(t) && (this[t] = e[t]);}e.hasOwnProperty("toString") && (this.toString = e.toString);}, clone: function clone() {return this.init.prototype.extend(this);} },i = r.WordArray = o.extend({ init: function init(e, n) {e = this.words = e || [], this.sigBytes = n != t ? n : 4 * e.length;}, toString: function toString(e) {return (e || c).stringify(this);}, concat: function concat(e) {var t = this.words,n = e.words,s = this.sigBytes,r = e.sigBytes;if (this.clamp(), s % 4) for (var o = 0; o < r; o++) {var i = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;t[s + o >>> 2] |= i << 24 - (s + o) % 4 * 8;} else for (o = 0; o < r; o += 4) {t[s + o >>> 2] = n[o >>> 2];}return this.sigBytes += r, this;}, clamp: function clamp() {var t = this.words,n = this.sigBytes;t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);}, clone: function clone() {var e = o.clone.call(this);return e.words = this.words.slice(0), e;}, random: function random(t) {for (var n, s = [], r = function r(t) {t = t;var n = 987654321,s = 4294967295;return function () {var r = ((n = 36969 * (65535 & n) + (n >> 16) & s) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & s) & s;return r /= 4294967296, (r += .5) * (e.random() > .5 ? 1 : -1);};}, o = 0; o < t; o += 4) {var a = r(4294967296 * (n || e.random()));n = 987654071 * a(), s.push(4294967296 * a() | 0);}return new i.init(s, t);} }),a = s.enc = {},c = a.Hex = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;s.push((o >>> 4).toString(16)), s.push((15 & o).toString(16));}return s.join("");}, parse: function parse(e) {for (var t = e.length, n = [], s = 0; s < t; s += 2) {n[s >>> 3] |= parseInt(e.substr(s, 2), 16) << 24 - s % 8 * 4;}return new i.init(n, t / 2);} },u = a.Latin1 = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;s.push(String.fromCharCode(o));}return s.join("");}, parse: function parse(e) {for (var t = e.length, n = [], s = 0; s < t; s++) {n[s >>> 2] |= (255 & e.charCodeAt(s)) << 24 - s % 4 * 8;}return new i.init(n, t);} },h = a.Utf8 = { stringify: function stringify(e) {try {return decodeURIComponent(escape(u.stringify(e)));} catch (e) {throw new Error("Malformed UTF-8 data");}}, parse: function parse(e) {return u.parse(unescape(encodeURIComponent(e)));} },l = r.BufferedBlockAlgorithm = o.extend({ reset: function reset() {this._data = new i.init(), this._nDataBytes = 0;}, _append: function _append(e) {"string" == typeof e && (e = h.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;}, _process: function _process(t) {var n = this._data,s = n.words,r = n.sigBytes,o = this.blockSize,a = r / (4 * o),c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * o,u = e.min(4 * c, r);if (c) {for (var h = 0; h < c; h += o) {this._doProcessBlock(s, h);}var l = s.splice(0, c);n.sigBytes -= u;}return new i.init(l, u);}, clone: function clone() {var e = o.clone.call(this);return e._data = this._data.clone(), e;}, _minBufferSize: 0 });r.Hasher = l.extend({ cfg: o.extend(), init: function init(e) {this.cfg = this.cfg.extend(e), this.reset();}, reset: function reset() {l.reset.call(this), this._doReset();}, update: function update(e) {return this._append(e), this._process(), this;}, finalize: function finalize(e) {return e && this._append(e), this._doFinalize();}, blockSize: 16, _createHelper: function _createHelper(e) {return function (t, n) {return new e.init(n).finalize(t);};}, _createHmacHelper: function _createHmacHelper(e) {return function (t, n) {return new d.HMAC.init(e, n).finalize(t);};} });var d = s.algo = {};return s;}(Math), n);}),r = (n(function (e, t) {var n;e.exports = (n = s, function (e) {var t = n,s = t.lib,r = s.WordArray,o = s.Hasher,i = t.algo,a = [];!function () {for (var t = 0; t < 64; t++) {a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;}}();var c = i.MD5 = o.extend({ _doReset: function _doReset() {this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);}, _doProcessBlock: function _doProcessBlock(e, t) {for (var n = 0; n < 16; n++) {var s = t + n,r = e[s];e[s] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);}var o = this._hash.words,i = e[t + 0],c = e[t + 1],f = e[t + 2],p = e[t + 3],g = e[t + 4],m = e[t + 5],y = e[t + 6],_ = e[t + 7],w = e[t + 8],k = e[t + 9],S = e[t + 10],v = e[t + 11],T = e[t + 12],A = e[t + 13],P = e[t + 14],I = e[t + 15],b = o[0],E = o[1],O = o[2],C = o[3];b = u(b, E, O, C, i, 7, a[0]), C = u(C, b, E, O, c, 12, a[1]), O = u(O, C, b, E, f, 17, a[2]), E = u(E, O, C, b, p, 22, a[3]), b = u(b, E, O, C, g, 7, a[4]), C = u(C, b, E, O, m, 12, a[5]), O = u(O, C, b, E, y, 17, a[6]), E = u(E, O, C, b, _, 22, a[7]), b = u(b, E, O, C, w, 7, a[8]), C = u(C, b, E, O, k, 12, a[9]), O = u(O, C, b, E, S, 17, a[10]), E = u(E, O, C, b, v, 22, a[11]), b = u(b, E, O, C, T, 7, a[12]), C = u(C, b, E, O, A, 12, a[13]), O = u(O, C, b, E, P, 17, a[14]), b = h(b, E = u(E, O, C, b, I, 22, a[15]), O, C, c, 5, a[16]), C = h(C, b, E, O, y, 9, a[17]), O = h(O, C, b, E, v, 14, a[18]), E = h(E, O, C, b, i, 20, a[19]), b = h(b, E, O, C, m, 5, a[20]), C = h(C, b, E, O, S, 9, a[21]), O = h(O, C, b, E, I, 14, a[22]), E = h(E, O, C, b, g, 20, a[23]), b = h(b, E, O, C, k, 5, a[24]), C = h(C, b, E, O, P, 9, a[25]), O = h(O, C, b, E, p, 14, a[26]), E = h(E, O, C, b, w, 20, a[27]), b = h(b, E, O, C, A, 5, a[28]), C = h(C, b, E, O, f, 9, a[29]), O = h(O, C, b, E, _, 14, a[30]), b = l(b, E = h(E, O, C, b, T, 20, a[31]), O, C, m, 4, a[32]), C = l(C, b, E, O, w, 11, a[33]), O = l(O, C, b, E, v, 16, a[34]), E = l(E, O, C, b, P, 23, a[35]), b = l(b, E, O, C, c, 4, a[36]), C = l(C, b, E, O, g, 11, a[37]), O = l(O, C, b, E, _, 16, a[38]), E = l(E, O, C, b, S, 23, a[39]), b = l(b, E, O, C, A, 4, a[40]), C = l(C, b, E, O, i, 11, a[41]), O = l(O, C, b, E, p, 16, a[42]), E = l(E, O, C, b, y, 23, a[43]), b = l(b, E, O, C, k, 4, a[44]), C = l(C, b, E, O, T, 11, a[45]), O = l(O, C, b, E, I, 16, a[46]), b = d(b, E = l(E, O, C, b, f, 23, a[47]), O, C, i, 6, a[48]), C = d(C, b, E, O, _, 10, a[49]), O = d(O, C, b, E, P, 15, a[50]), E = d(E, O, C, b, m, 21, a[51]), b = d(b, E, O, C, T, 6, a[52]), C = d(C, b, E, O, p, 10, a[53]), O = d(O, C, b, E, S, 15, a[54]), E = d(E, O, C, b, c, 21, a[55]), b = d(b, E, O, C, w, 6, a[56]), C = d(C, b, E, O, I, 10, a[57]), O = d(O, C, b, E, y, 15, a[58]), E = d(E, O, C, b, A, 21, a[59]), b = d(b, E, O, C, g, 6, a[60]), C = d(C, b, E, O, v, 10, a[61]), O = d(O, C, b, E, f, 15, a[62]), E = d(E, O, C, b, k, 21, a[63]), o[0] = o[0] + b | 0, o[1] = o[1] + E | 0, o[2] = o[2] + O | 0, o[3] = o[3] + C | 0;}, _doFinalize: function _doFinalize() {var t = this._data,n = t.words,s = 8 * this._nDataBytes,r = 8 * t.sigBytes;n[r >>> 5] |= 128 << 24 - r % 32;var o = e.floor(s / 4294967296),i = s;n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {var h = c[u];c[u] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8);}return a;}, clone: function clone() {var e = o.clone.call(this);return e._hash = this._hash.clone(), e;} });function u(e, t, n, s, r, o, i) {var a = e + (t & n | ~t & s) + r + i;return (a << o | a >>> 32 - o) + t;}function h(e, t, n, s, r, o, i) {var a = e + (t & s | n & ~s) + r + i;return (a << o | a >>> 32 - o) + t;}function l(e, t, n, s, r, o, i) {var a = e + (t ^ n ^ s) + r + i;return (a << o | a >>> 32 - o) + t;}function d(e, t, n, s, r, o, i) {var a = e + (n ^ (t | ~s)) + r + i;return (a << o | a >>> 32 - o) + t;}t.MD5 = o._createHelper(c), t.HmacMD5 = o._createHmacHelper(c);}(Math), n.MD5);}), n(function (e, t) {var n, r, o;e.exports = (r = (n = s).lib.Base, o = n.enc.Utf8, void (n.algo.HMAC = r.extend({ init: function init(e, t) {e = this._hasher = new e.init(), "string" == typeof t && (t = o.parse(t));var n = e.blockSize,s = 4 * n;t.sigBytes > s && (t = e.finalize(t)), t.clamp();for (var r = this._oKey = t.clone(), i = this._iKey = t.clone(), a = r.words, c = i.words, u = 0; u < n; u++) {a[u] ^= 1549556828, c[u] ^= 909522486;}r.sigBytes = i.sigBytes = s, this.reset();}, reset: function reset() {var e = this._hasher;e.reset(), e.update(this._iKey);}, update: function update(e) {return this._hasher.update(e), this;}, finalize: function finalize(e) {var t = this._hasher,n = t.finalize(e);return t.reset(), t.finalize(this._oKey.clone().concat(n));} })));}), n(function (e, t) {e.exports = s.HmacMD5;}));function o(e) {return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();}function i(e) {return "object" === o(e);}var a = /*#__PURE__*/function (_Error) {_inherits(a, _Error);var _super = _createSuper(a);function a(e, t) {var _this;_classCallCheck(this, a);_this = _super.call(this, e), _this.code = t;return _this;}return a;}( /*#__PURE__*/_wrapNativeSuper(Error));function c(e) {return e && "string" == typeof e ? JSON.parse(e) : e;}var u = "development" === "development",h = "mp-weixin",l = c({
    "address": [
        "127.0.0.1",
        "10.7.0.70",
        "192.168.31.97"
    ],
    "debugPort": 54056,
    "initialLaunchType": "local",
    "servePort": 54057
}
),d = c([{"provider":"aliyun","spaceName":"fruits","spaceId":"96896dba-9fac-4647-9a58-ee2f3d656528","clientSecret":"yocCaQOXYUKmrH3AhzcQNA==","endpoint":"https://api.bspapp.com"}]),f = true;var p = "";try {{var _e2 = __webpack_require__(/*! uni-stat-config */ 9).default || __webpack_require__(/*! uni-stat-config */ 9);p = _e2.appid;}} catch (e) {}var g = {};function m(e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var n, s;return n = g, s = e, Object.prototype.hasOwnProperty.call(n, s) || (g[e] = t), g[e];}"app-plus" === h && (g = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});var y = ["invoke", "success", "fail", "complete"],_ = m("_globalUniCloudInterceptor");function w(e, t) {_[e] || (_[e] = {}), i(t) && Object.keys(t).forEach(function (n) {y.indexOf(n) > -1 && function (e, t, n) {var s = _[e][t];s || (s = _[e][t] = []), -1 === s.indexOf(n) && "function" == typeof n && s.push(n);}(e, n, t[n]);});}function k(e, t) {_[e] || (_[e] = {}), i(t) ? Object.keys(t).forEach(function (n) {y.indexOf(n) > -1 && function (e, t, n) {var s = _[e][t];if (!s) return;var r = s.indexOf(n);r > -1 && s.splice(r, 1);}(e, n, t[n]);}) : delete _[e];}function S(e, t) {return e && 0 !== e.length ? e.reduce(function (e, n) {return e.then(function () {return n(t);});}, Promise.resolve()) : Promise.resolve();}function v(e, t) {return _[e] && _[e][t] || [];}function T(e, t) {return t ? function (n) {var _this2 = this;var s = "callFunction" === t && "DCloud-clientDB" === (n && n.name);var r;r = this.isReady ? Promise.resolve() : this.initUniCloud, n = n || {};var o = r.then(function () {return s ? Promise.resolve() : S(v(t, "invoke"), n);}).then(function () {return e.call(_this2, n);}).then(function (e) {return s ? Promise.resolve(e) : S(v(t, "success"), e).then(function () {return S(v(t, "complete"), e);}).then(function () {return Promise.resolve(e);});}, function (e) {return s ? Promise.reject(e) : S(v(t, "fail"), e).then(function () {return S(v(t, "complete"), e);}).then(function () {return Promise.reject(e);});});if (!(n.success || n.fail || n.complete)) return o;o.then(function (e) {n.success && n.success(e), n.complete && n.complete(e);}, function (e) {n.fail && n.fail(e), n.complete && n.complete(e);});} : function (t) {if (!((t = t || {}).success || t.fail || t.complete)) return e.call(this, t);e.call(this, t).then(function (e) {t.success && t.success(e), t.complete && t.complete(e);}, function (e) {t.fail && t.fail(e), t.complete && t.complete(e);});};}var A = /*#__PURE__*/function (_Error2) {_inherits(A, _Error2);var _super2 = _createSuper(A);function A(e) {var _this3;_classCallCheck(this, A);_this3 = _super2.call(this, e.message), _this3.errMsg = e.message || "", Object.defineProperties(_assertThisInitialized(_this3), { code: { get: function get() {return e.code;} }, requestId: { get: function get() {return e.requestId;} }, message: { get: function get() {return this.errMsg;}, set: function set(e) {this.errMsg = e;} } });return _this3;}return A;}( /*#__PURE__*/_wrapNativeSuper(Error));var P;function I() {var e = uni.getLocale && uni.getLocale() || "en";if (P) return _objectSpread(_objectSpread({}, P), {}, { LOCALE: e });var _uni$getSystemInfoSyn = uni.getSystemInfoSync(),t = _uni$getSystemInfoSyn.deviceId,n = _uni$getSystemInfoSyn.platform;return P = { PLATFORM: h, OS: n, APPID: p, DEVICEID: t, CLIENT_SDK_VERSION: "1.0.21" }, _objectSpread(_objectSpread({}, P), {}, { LOCALE: e });}var b = { sign: function sign(e, t) {var n = "";return Object.keys(e).sort().forEach(function (t) {e[t] && (n = n + "&" + t + "=" + e[t]);}), n = n.slice(1), r(n, t).toString();}, wrappedRequest: function wrappedRequest(e, t) {return new Promise(function (n, s) {t(Object.assign(e, { complete: function complete(e) {e || (e = {}), u && "h5" === h && e.errMsg && 0 === e.errMsg.indexOf("request:fail") && console.warn("??????H5????????????uniCloud????????????????????????????????????????????????????????????????????????????????????????????????https://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];if (!e.statusCode || e.statusCode >= 400) return s(new A({ code: "SYS_ERR", message: e.errMsg || "request:fail", requestId: t }));var r = e.data;if (r.error) return s(new A({ code: r.error.code, message: r.error.message, requestId: t }));r.result = r.data, r.requestId = t, delete r.data, n(r);} }));});} };var E = { request: function request(e) {return uni.request(e);}, uploadFile: function uploadFile(e) {return uni.uploadFile(e);}, setStorageSync: function setStorageSync(e, t) {return uni.setStorageSync(e, t);}, getStorageSync: function getStorageSync(e) {return uni.getStorageSync(e);}, removeStorageSync: function removeStorageSync(e) {return uni.removeStorageSync(e);}, clearStorageSync: function clearStorageSync() {return uni.clearStorageSync();} },O = { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" };var _e3 = (0, _uniI18n.initVueI18n)({ "zh-Hans": { "uniCloud.init.paramRequired": "???????????????{param}", "uniCloud.uploadFile.fileError": "filePath??????File??????" }, "zh-Hant": { "uniCloud.init.paramRequired": "???????????????{param}", "uniCloud.uploadFile.fileError": "filePath??????File??????" }, en: O, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, ja: O }, "zh-Hans"),C = _e3.t;var U = /*#__PURE__*/function () {function U(e) {_classCallCheck(this, U);["spaceId", "clientSecret"].forEach(function (t) {if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error(C("uniCloud.init.paramRequired", { param: t }));}), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = E, this._getAccessTokenPromise = null, this._getAccessTokenPromiseStatus = null;}_createClass(U, [{ key: "setAccessToken", value: function setAccessToken(e) {this.accessToken = e;} }, { key: "requestWrapped", value: function requestWrapped(e) {return b.wrappedRequest(e, this.adapter.request);} }, { key: "requestAuth", value: function requestAuth(e) {return this.requestWrapped(e);} }, { key: "request", value: function request(e, t) {var _this4 = this;return Promise.resolve().then(function () {return _this4.hasAccessToken ? t ? _this4.requestWrapped(e) : _this4.requestWrapped(e).catch(function (t) {return new Promise(function (e, n) {!t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e();}).then(function () {return _this4.getAccessToken();}).then(function () {var t = _this4.rebuildRequest(e);return _this4.request(t, !0);});}) : _this4.getAccessToken().then(function () {var t = _this4.rebuildRequest(e);return _this4.request(t, !0);});});} }, { key: "rebuildRequest", value: function rebuildRequest(e) {var t = Object.assign({}, e);return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = b.sign(t.data, this.config.clientSecret), t;} }, { key: "setupRequest", value: function setupRequest(e, t) {var n = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),s = { "Content-Type": "application/json" };return "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = b.sign(n, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n, dataType: "json", header: s };} }, { key: "getAccessToken", value: function getAccessToken() {var _this5 = this;if ("pending" === this._getAccessTokenPromiseStatus) return this._getAccessTokenPromise;this._getAccessTokenPromiseStatus = "pending";return this._getAccessTokenPromise = this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then(function (e) {return new Promise(function (t, n) {e.result && e.result.accessToken ? (_this5.setAccessToken(e.result.accessToken), _this5._getAccessTokenPromiseStatus = "fulfilled", t(_this5.accessToken)) : (_this5._getAccessTokenPromiseStatus = "rejected", n(new A({ code: "AUTH_FAILED", message: "??????accessToken??????" })));});}, function (e) {return _this5._getAccessTokenPromiseStatus = "rejected", Promise.reject(e);}), this._getAccessTokenPromise;} }, { key: "authorize", value: function authorize() {this.getAccessToken();} }, { key: "callFunction", value: function callFunction(e) {var t = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };return this.request(this.setupRequest(t));} }, { key: "getOSSUploadOptionsFromPath", value: function getOSSUploadOptionsFromPath(e) {var t = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref) {var _this6 = this;var e = _ref.url,t = _ref.formData,n = _ref.name,s = _ref.filePath,r = _ref.fileType,o = _ref.onUploadProgress;return new Promise(function (i, a) {var c = _this6.adapter.uploadFile({ url: e, formData: t, name: n, filePath: s, fileType: r, header: { "X-OSS-server-side-encrpytion": "AES256" }, success: function success(e) {e && e.statusCode < 400 ? i(e) : a(new A({ code: "UPLOAD_FAILED", message: "??????????????????" }));}, fail: function fail(e) {a(new A({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "??????????????????" }));} });"function" == typeof o && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {o({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "reportOSSUpload", value: function reportOSSUpload(e) {var t = { method: "serverless.file.resource.report", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFile", value: function uploadFile(_ref2) {var _this7 = this;var e = _ref2.filePath,t = _ref2.cloudPath,_ref2$fileType = _ref2.fileType,n = _ref2$fileType === void 0 ? "image" : _ref2$fileType,s = _ref2.onUploadProgress,r = _ref2.config;if ("string" !== o(t)) throw new A({ code: "INVALID_PARAM", message: "cloudPath????????????????????????" });if (!(t = t.trim())) throw new A({ code: "CLOUDPATH_REQUIRED", message: "cloudPath????????????" });if (/:\/\//.test(t)) throw new A({ code: "INVALID_PARAM", message: "cloudPath?????????" });var i = r && r.envType || this.config.envType;var a, c;return this.getOSSUploadOptionsFromPath({ env: i, filename: t }).then(function (t) {var r = t.result;a = r.id, c = "https://" + r.cdnDomain + "/" + r.ossPath;var o = { url: "https://" + r.host, formData: { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: r.accessKeyId, Signature: r.signature, host: r.host, id: a, key: r.ossPath, policy: r.policy, success_action_status: 200 }, fileName: "file", name: "file", filePath: e, fileType: n };return _this7.uploadFileToOSS(Object.assign({}, o, { onUploadProgress: s }));}).then(function () {return _this7.reportOSSUpload({ id: a });}).then(function (t) {return new Promise(function (n, s) {t.success ? n({ success: !0, filePath: e, fileID: c }) : s(new A({ code: "UPLOAD_FAILED", message: "??????????????????" }));});});} }, { key: "deleteFile", value: function deleteFile(_ref3) {var e = _ref3.fileList;var t = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: e[0] }) };return this.request(this.setupRequest(t));} }, { key: "getTempFileURL", value: function getTempFileURL() {var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref4.fileList;return new Promise(function (t, n) {Array.isArray(e) && 0 !== e.length || n(new A({ code: "INVALID_PARAM", message: "fileList????????????????????????????????????" })), t({ fileList: e.map(function (e) {return { fileID: e, tempFileURL: e };}) });});} }, { key: "hasAccessToken", get: function get() {return !!this.accessToken;} }]);return U;}();var x = { init: function init(e) {var t = new U(e),n = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return n;}, t.customAuth = t.auth, t;} };var D = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";var R;!function (e) {e.local = "local", e.none = "none", e.session = "session";}(R || (R = {}));var q = function q() {};var L = function L() {var e;if (!Promise) {e = function e() {}, e.promise = {};var _t2 = function _t2() {throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.');};return Object.defineProperty(e.promise, "then", { get: _t2 }), Object.defineProperty(e.promise, "catch", { get: _t2 }), e;}var t = new Promise(function (t, n) {e = function e(_e4, s) {return _e4 ? n(_e4) : t(s);};});return e.promise = t, e;};function F(e) {return void 0 === e;}function N(e) {return "[object Null]" === Object.prototype.toString.call(e);}var $;function M(e) {var t = (n = e, "[object Array]" === Object.prototype.toString.call(n) ? e : [e]);var n;var _iterator = _createForOfIteratorHelper(t),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var _e5 = _step.value;var _t3 = _e5.isMatch,_n = _e5.genAdapter,_s = _e5.runtime;if (_t3()) return { adapter: _n(), runtime: _s };}} catch (err) {_iterator.e(err);} finally {_iterator.f();}}!function (e) {e.WEB = "web", e.WX_MP = "wx_mp";}($ || ($ = {}));var j = { adapter: null, runtime: void 0 },B = ["anonymousUuidKey"];var K = /*#__PURE__*/function (_q) {_inherits(K, _q);var _super3 = _createSuper(K);function K() {var _this8;_classCallCheck(this, K);_this8 = _super3.call(this), j.adapter.root.tcbObject || (j.adapter.root.tcbObject = {});return _this8;}_createClass(K, [{ key: "setItem", value: function setItem(e, t) {j.adapter.root.tcbObject[e] = t;} }, { key: "getItem", value: function getItem(e) {return j.adapter.root.tcbObject[e];} }, { key: "removeItem", value: function removeItem(e) {delete j.adapter.root.tcbObject[e];} }, { key: "clear", value: function clear() {delete j.adapter.root.tcbObject;} }]);return K;}(q);function H(e, t) {switch (e) {case "local":return t.localStorage || new K();case "none":return new K();default:return t.sessionStorage || new K();}}var W = /*#__PURE__*/function () {function W(e) {_classCallCheck(this, W);if (!this._storage) {this._persistence = j.adapter.primaryStorage || e.persistence, this._storage = H(this._persistence, j.adapter);var _t4 = "access_token_".concat(e.env),_n2 = "access_token_expire_".concat(e.env),_s2 = "refresh_token_".concat(e.env),_r = "anonymous_uuid_".concat(e.env),_o = "login_type_".concat(e.env),_i = "user_info_".concat(e.env);this.keys = { accessTokenKey: _t4, accessTokenExpireKey: _n2, refreshTokenKey: _s2, anonymousUuidKey: _r, loginTypeKey: _o, userInfoKey: _i };}}_createClass(W, [{ key: "updatePersistence", value: function updatePersistence(e) {if (e === this._persistence) return;var t = "local" === this._persistence;this._persistence = e;var n = H(e, j.adapter);for (var _e6 in this.keys) {var _s3 = this.keys[_e6];if (t && B.includes(_e6)) continue;var _r2 = this._storage.getItem(_s3);F(_r2) || N(_r2) || (n.setItem(_s3, _r2), this._storage.removeItem(_s3));}this._storage = n;} }, { key: "setStore", value: function setStore(e, t, n) {if (!this._storage) return;var s = { version: n || "localCachev1", content: t },r = JSON.stringify(s);try {this._storage.setItem(e, r);} catch (e) {throw e;}} }, { key: "getStore", value: function getStore(e, t) {try {if (!this._storage) return;} catch (e) {return "";}t = t || "localCachev1";var n = this._storage.getItem(e);if (!n) return "";if (n.indexOf(t) >= 0) {return JSON.parse(n).content;}return "";} }, { key: "removeStore", value: function removeStore(e) {this._storage.removeItem(e);} }]);return W;}();var z = {},J = {};function V(e) {return z[e];}var Y = function Y(e, t) {_classCallCheck(this, Y);this.data = t || null, this.name = e;};var X = /*#__PURE__*/function (_Y) {_inherits(X, _Y);var _super4 = _createSuper(X);function X(e, t) {var _this9;_classCallCheck(this, X);_this9 = _super4.call(this, "error", { error: e, data: t }), _this9.error = e;return _this9;}return X;}(Y);var G = new ( /*#__PURE__*/function () {function _class() {_classCallCheck(this, _class);this._listeners = {};}_createClass(_class, [{ key: "on", value: function on(e, t) {return function (e, t, n) {n[e] = n[e] || [], n[e].push(t);}(e, t, this._listeners), this;} }, { key: "off", value: function off(e, t) {return function (e, t, n) {if (n && n[e]) {var _s4 = n[e].indexOf(t);-1 !== _s4 && n[e].splice(_s4, 1);}}(e, t, this._listeners), this;} }, { key: "fire", value: function fire(e, t) {if (e instanceof X) return console.error(e.error), this;var n = "string" == typeof e ? new Y(e, t || {}) : e;var s = n.name;if (this._listens(s)) {n.target = this;var _e7 = this._listeners[s] ? _toConsumableArray(this._listeners[s]) : [];var _iterator2 = _createForOfIteratorHelper(_e7),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var _t5 = _step2.value;_t5.call(this, n);}} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}}return this;} }, { key: "_listens", value: function _listens(e) {return this._listeners[e] && this._listeners[e].length > 0;} }]);return _class;}())();function Q(e, t) {G.on(e, t);}function Z(e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};G.fire(e, t);}function ee(e, t) {G.off(e, t);}var te = "loginStateChanged",ne = "loginStateExpire",se = "loginTypeChanged",re = "anonymousConverted",oe = "refreshAccessToken";var ie;!function (e) {e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";}(ie || (ie = {}));var ae = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],ce = { "X-SDK-Version": "1.3.5" };function ue(e, t, n) {var s = e[t];e[t] = function (t) {var r = {},o = {};n.forEach(function (n) {var _n$call = n.call(e, t),s = _n$call.data,i = _n$call.headers;Object.assign(r, s), Object.assign(o, i);});var i = t.data;return i && function () {var e;if (e = i, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = _objectSpread(_objectSpread({}, i), r);else for (var _e8 in r) {i.append(_e8, r[_e8]);}}(), t.headers = _objectSpread(_objectSpread({}, t.headers || {}), o), s.call(e, t);};}function he() {var e = Math.random().toString(16).slice(2);return { data: { seqId: e }, headers: _objectSpread(_objectSpread({}, ce), {}, { "x-seqid": e }) };}var le = /*#__PURE__*/function () {function le() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};_classCallCheck(this, le);var t;this.config = e, this._reqClass = new j.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: "\u8BF7\u6C42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"), restrictedMethods: ["post"] }), this._cache = V(this.config.env), this._localCache = (t = this.config.env, J[t]), ue(this._reqClass, "post", [he]), ue(this._reqClass, "upload", [he]), ue(this._reqClass, "download", [he]);}_createClass(le, [{ key: "post", value: function () {var _post = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(e) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return this._reqClass.post(e);case 2:return _context.abrupt("return", _context.sent);case 3:case "end":return _context.stop();}}}, _callee, this);}));function post(_x) {return _post.apply(this, arguments);}return post;}() }, { key: "upload", value: function () {var _upload = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(e) {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return this._reqClass.upload(e);case 2:return _context2.abrupt("return", _context2.sent);case 3:case "end":return _context2.stop();}}}, _callee2, this);}));function upload(_x2) {return _upload.apply(this, arguments);}return upload;}() }, { key: "download", value: function () {var _download = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(e) {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return this._reqClass.download(e);case 2:return _context3.abrupt("return", _context3.sent);case 3:case "end":return _context3.stop();}}}, _callee3, this);}));function download(_x3) {return _download.apply(this, arguments);}return download;}() }, { key: "refreshAccessToken", value: function () {var _refreshAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var e, t;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());_context4.prev = 1;_context4.next = 4;return this._refreshAccessTokenPromise;case 4:e = _context4.sent;_context4.next = 10;break;case 7:_context4.prev = 7;_context4.t0 = _context4["catch"](1);t = _context4.t0;case 10:if (!(this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t)) {_context4.next = 12;break;}throw t;case 12:return _context4.abrupt("return", e);case 13:case "end":return _context4.stop();}}}, _callee4, this, [[1, 7]]);}));function refreshAccessToken() {return _refreshAccessToken2.apply(this, arguments);}return refreshAccessToken;}() }, { key: "_refreshAccessToken", value: function () {var _refreshAccessToken3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var _this$_cache$keys, e, t, n, s, r, o, i, a, _e9, _e10, _t6, _s5;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_this$_cache$keys = this._cache.keys, e = _this$_cache$keys.accessTokenKey, t = _this$_cache$keys.accessTokenExpireKey, n = _this$_cache$keys.refreshTokenKey, s = _this$_cache$keys.loginTypeKey, r = _this$_cache$keys.anonymousUuidKey;this._cache.removeStore(e), this._cache.removeStore(t);o = this._cache.getStore(n);if (o) {_context5.next = 5;break;}throw new Error("?????????CloudBase");case 5:i = { refresh_token: o };_context5.next = 8;return this.request("auth.fetchAccessTokenWithRefreshToken", i);case 8:a = _context5.sent;if (!a.data.code) {_context5.next = 21;break;}_e9 = a.data.code;if (!("SIGN_PARAM_INVALID" === _e9 || "REFRESH_TOKEN_EXPIRED" === _e9 || "INVALID_REFRESH_TOKEN" === _e9)) {_context5.next = 20;break;}if (!(this._cache.getStore(s) === ie.ANONYMOUS && "INVALID_REFRESH_TOKEN" === _e9)) {_context5.next = 19;break;}_e10 = this._cache.getStore(r);_t6 = this._cache.getStore(n);_context5.next = 17;return this.send("auth.signInAnonymously", { anonymous_uuid: _e10, refresh_token: _t6 });case 17:_s5 = _context5.sent;return _context5.abrupt("return", (this.setRefreshToken(_s5.refresh_token), this._refreshAccessToken()));case 19:Z(ne), this._cache.removeStore(n);case 20:throw new Error("\u5237\u65B0access token\u5931\u8D25\uFF1A".concat(a.data.code));case 21:if (!a.data.access_token) {_context5.next = 23;break;}return _context5.abrupt("return", (Z(oe), this._cache.setStore(e, a.data.access_token), this._cache.setStore(t, a.data.access_token_expire + Date.now()), { accessToken: a.data.access_token, accessTokenExpire: a.data.access_token_expire }));case 23:a.data.refresh_token && (this._cache.removeStore(n), this._cache.setStore(n, a.data.refresh_token), this._refreshAccessToken());case 24:case "end":return _context5.stop();}}}, _callee5, this);}));function _refreshAccessToken() {return _refreshAccessToken3.apply(this, arguments);}return _refreshAccessToken;}() }, { key: "getAccessToken", value: function () {var _getAccessToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var _this$_cache$keys2, e, t, n, s, r, o;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_this$_cache$keys2 = this._cache.keys, e = _this$_cache$keys2.accessTokenKey, t = _this$_cache$keys2.accessTokenExpireKey, n = _this$_cache$keys2.refreshTokenKey;if (this._cache.getStore(n)) {_context6.next = 3;break;}throw new Error("refresh token??????????????????????????????");case 3:s = this._cache.getStore(e), r = this._cache.getStore(t), o = !0;_context6.t0 = this._shouldRefreshAccessTokenHook;if (!_context6.t0) {_context6.next = 9;break;}_context6.next = 8;return this._shouldRefreshAccessTokenHook(s, r);case 8:_context6.t0 = !_context6.sent;case 9:_context6.t1 = _context6.t0;if (!_context6.t1) {_context6.next = 12;break;}o = !1;case 12:return _context6.abrupt("return", (!s || !r || r < Date.now()) && o ? this.refreshAccessToken() : { accessToken: s, accessTokenExpire: r });case 13:case "end":return _context6.stop();}}}, _callee6, this);}));function getAccessToken() {return _getAccessToken.apply(this, arguments);}return getAccessToken;}() }, { key: "request", value: function () {var _request = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(e, t, n) {var s, r, o, _e11, i, _e12, _e13, a, c, u, h, l, d, f, p, g;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:s = "x-tcb-trace_".concat(this.config.env);r = "application/x-www-form-urlencoded";o = _objectSpread({ action: e, env: this.config.env, dataVersion: "2019-08-16" }, t);if (!(-1 === ae.indexOf(e))) {_context7.next = 10;break;}_e11 = this._cache.keys.refreshTokenKey;_context7.t0 = this._cache.getStore(_e11);if (!_context7.t0) {_context7.next = 10;break;}_context7.next = 9;return this.getAccessToken();case 9:o.access_token = _context7.sent.accessToken;case 10:if ("storage.uploadFile" === e) {i = new FormData();for (_e12 in i) {i.hasOwnProperty(_e12) && void 0 !== i[_e12] && i.append(_e12, o[_e12]);}r = "multipart/form-data";} else {r = "application/json", i = {};for (_e13 in o) {void 0 !== o[_e13] && (i[_e13] = o[_e13]);}}a = { headers: { "content-type": r } };n && n.onUploadProgress && (a.onUploadProgress = n.onUploadProgress);c = this._localCache.getStore(s);c && (a.headers["X-TCB-Trace"] = c);u = t.parse, h = t.inQuery, l = t.search;d = { env: this.config.env };u && (d.parse = !0), h && (d = _objectSpread(_objectSpread({}, h), d));f = function (e, t) {var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var s = /\?/.test(t);var r = "";for (var _e14 in n) {"" === r ? !s && (t += "?") : r += "&", r += "".concat(_e14, "=").concat(encodeURIComponent(n[_e14]));}return /^http(s)?\:\/\//.test(t += r) ? t : "".concat(e).concat(t);}(D, "//tcb-api.tencentcloudapi.com/web", d);l && (f += l);_context7.next = 22;return this.post(_objectSpread({ url: f, data: i }, a));case 22:p = _context7.sent;g = p.header && p.header["x-tcb-trace"];if (!(g && this._localCache.setStore(s, g), 200 !== Number(p.status) && 200 !== Number(p.statusCode) || !p.data)) {_context7.next = 26;break;}throw new Error("network request error");case 26:return _context7.abrupt("return", p);case 27:case "end":return _context7.stop();}}}, _callee7, this);}));function request(_x4, _x5, _x6) {return _request.apply(this, arguments);}return request;}() }, { key: "send", value: function () {var _send = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8(e) {var t,n,_n3,_args8 = arguments;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:t = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};_context8.next = 3;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 3:n = _context8.sent;if (!("ACCESS_TOKEN_EXPIRED" === n.data.code && -1 === ae.indexOf(e))) {_context8.next = 13;break;}_context8.next = 7;return this.refreshAccessToken();case 7:_context8.next = 9;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 9:_n3 = _context8.sent;if (!_n3.data.code) {_context8.next = 12;break;}throw new Error("[".concat(_n3.data.code, "] ").concat(_n3.data.message));case 12:return _context8.abrupt("return", _n3.data);case 13:if (!n.data.code) {_context8.next = 15;break;}throw new Error("[".concat(n.data.code, "] ").concat(n.data.message));case 15:return _context8.abrupt("return", n.data);case 16:case "end":return _context8.stop();}}}, _callee8, this);}));function send(_x7) {return _send.apply(this, arguments);}return send;}() }, { key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys3 = this._cache.keys,t = _this$_cache$keys3.accessTokenKey,n = _this$_cache$keys3.accessTokenExpireKey,s = _this$_cache$keys3.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);} }]);return le;}();var de = {};function fe(e) {return de[e];}var pe = /*#__PURE__*/function () {function pe(e) {_classCallCheck(this, pe);this.config = e, this._cache = V(e.env), this._request = fe(e.env);}_createClass(pe, [{ key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys4 = this._cache.keys,t = _this$_cache$keys4.accessTokenKey,n = _this$_cache$keys4.accessTokenExpireKey,s = _this$_cache$keys4.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);} }, { key: "setAccessToken", value: function setAccessToken(e, t) {var _this$_cache$keys5 = this._cache.keys,n = _this$_cache$keys5.accessTokenKey,s = _this$_cache$keys5.accessTokenExpireKey;this._cache.setStore(n, e), this._cache.setStore(s, t);} }, { key: "refreshUserInfo", value: function () {var _refreshUserInfo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9() {var _yield$this$_request$, e;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:_context9.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$ = _context9.sent;e = _yield$this$_request$.data;return _context9.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context9.stop();}}}, _callee9, this);}));function refreshUserInfo() {return _refreshUserInfo.apply(this, arguments);}return refreshUserInfo;}() }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e);} }]);return pe;}();var ge = /*#__PURE__*/function () {function ge(e) {_classCallCheck(this, ge);if (!e) throw new Error("envId is not defined");this._envId = e, this._cache = V(this._envId), this._request = fe(this._envId), this.setUserInfo();}_createClass(ge, [{ key: "linkWithTicket", value: function linkWithTicket(e) {if ("string" != typeof e) throw new Error("ticket must be string");return this._request.send("auth.linkWithTicket", { ticket: e });} }, { key: "linkWithRedirect", value: function linkWithRedirect(e) {e.signInWithRedirect();} }, { key: "updatePassword", value: function updatePassword(e, t) {return this._request.send("auth.updatePassword", { oldPassword: t, newPassword: e });} }, { key: "updateEmail", value: function updateEmail(e) {return this._request.send("auth.updateEmail", { newEmail: e });} }, { key: "updateUsername", value: function updateUsername(e) {if ("string" != typeof e) throw new Error("username must be a string");return this._request.send("auth.updateUsername", { username: e });} }, { key: "getLinkedUidList", value: function () {var _getLinkedUidList = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10() {var _yield$this$_request$2, e, t, n;return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:_context10.next = 2;return this._request.send("auth.getLinkedUidList", {});case 2:_yield$this$_request$2 = _context10.sent;e = _yield$this$_request$2.data;t = !1;n = e.users;return _context10.abrupt("return", (n.forEach(function (e) {e.wxOpenId && e.wxPublicId && (t = !0);}), { users: n, hasPrimaryUid: t }));case 7:case "end":return _context10.stop();}}}, _callee10, this);}));function getLinkedUidList() {return _getLinkedUidList.apply(this, arguments);}return getLinkedUidList;}() }, { key: "setPrimaryUid", value: function setPrimaryUid(e) {return this._request.send("auth.setPrimaryUid", { uid: e });} }, { key: "unlink", value: function unlink(e) {return this._request.send("auth.unlink", { platform: e });} }, { key: "update", value: function () {var _update = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11(e) {var t, n, s, r, o, i, _yield$this$_request$3, a;return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:t = e.nickName;n = e.gender;s = e.avatarUrl;r = e.province;o = e.country;i = e.city;_context11.next = 8;return this._request.send("auth.updateUserInfo", { nickName: t, gender: n, avatarUrl: s, province: r, country: o, city: i });case 8:_yield$this$_request$3 = _context11.sent;a = _yield$this$_request$3.data;this.setLocalUserInfo(a);case 11:case "end":return _context11.stop();}}}, _callee11, this);}));function update(_x8) {return _update.apply(this, arguments);}return update;}() }, { key: "refresh", value: function () {var _refresh = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12() {var _yield$this$_request$4, e;return _regenerator.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:_context12.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$4 = _context12.sent;e = _yield$this$_request$4.data;return _context12.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context12.stop();}}}, _callee12, this);}));function refresh() {return _refresh.apply(this, arguments);}return refresh;}() }, { key: "setUserInfo", value: function setUserInfo() {var _this10 = this;var e = this._cache.keys.userInfoKey,t = this._cache.getStore(e);["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach(function (e) {_this10[e] = t[e];}), this.location = { country: t.country, province: t.province, city: t.city };} }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e), this.setUserInfo();} }]);return ge;}();var me = /*#__PURE__*/function () {function me(e) {_classCallCheck(this, me);if (!e) throw new Error("envId is not defined");this._cache = V(e);var _this$_cache$keys6 = this._cache.keys,t = _this$_cache$keys6.refreshTokenKey,n = _this$_cache$keys6.accessTokenKey,s = _this$_cache$keys6.accessTokenExpireKey,r = this._cache.getStore(t),o = this._cache.getStore(n),i = this._cache.getStore(s);this.credential = { refreshToken: r, accessToken: o, accessTokenExpire: i }, this.user = new ge(e);}_createClass(me, [{ key: "isAnonymousAuth", get: function get() {return this.loginType === ie.ANONYMOUS;} }, { key: "isCustomAuth", get: function get() {return this.loginType === ie.CUSTOM;} }, { key: "isWeixinAuth", get: function get() {return this.loginType === ie.WECHAT || this.loginType === ie.WECHAT_OPEN || this.loginType === ie.WECHAT_PUBLIC;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }]);return me;}();var ye = /*#__PURE__*/function (_pe) {_inherits(ye, _pe);var _super5 = _createSuper(ye);function ye() {_classCallCheck(this, ye);return _super5.apply(this, arguments);}_createClass(ye, [{ key: "signIn", value: function () {var _signIn = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee13() {var _this$_cache$keys7, e, t, n, s, r, _e15;return _regenerator.default.wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:this._cache.updatePersistence("local");_this$_cache$keys7 = this._cache.keys;e = _this$_cache$keys7.anonymousUuidKey;t = _this$_cache$keys7.refreshTokenKey;n = this._cache.getStore(e) || void 0;s = this._cache.getStore(t) || void 0;_context13.next = 8;return this._request.send("auth.signInAnonymously", { anonymous_uuid: n, refresh_token: s });case 8:r = _context13.sent;if (!(r.uuid && r.refresh_token)) {_context13.next = 20;break;}this._setAnonymousUUID(r.uuid);this.setRefreshToken(r.refresh_token);_context13.next = 14;return this._request.refreshAccessToken();case 14:Z(te);Z(se, { env: this.config.env, loginType: ie.ANONYMOUS, persistence: "local" });_e15 = new me(this.config.env);_context13.next = 19;return _e15.user.refresh();case 19:return _context13.abrupt("return", _e15);case 20:throw new Error("??????????????????");case 21:case "end":return _context13.stop();}}}, _callee13, this);}));function signIn() {return _signIn.apply(this, arguments);}return signIn;}() }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee14(e) {var _this$_cache$keys8, t, n, s, r, o;return _regenerator.default.wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:_this$_cache$keys8 = this._cache.keys;t = _this$_cache$keys8.anonymousUuidKey;n = _this$_cache$keys8.refreshTokenKey;s = this._cache.getStore(t);r = this._cache.getStore(n);_context14.next = 7;return this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s, refresh_token: r, ticket: e });case 7:o = _context14.sent;if (!o.refresh_token) {_context14.next = 16;break;}this._clearAnonymousUUID();this.setRefreshToken(o.refresh_token);_context14.next = 13;return this._request.refreshAccessToken();case 13:Z(re, { env: this.config.env });Z(se, { loginType: ie.CUSTOM, persistence: "local" });return _context14.abrupt("return", { credential: { refreshToken: o.refresh_token } });case 16:throw new Error("??????????????????");case 17:case "end":return _context14.stop();}}}, _callee14, this);}));function linkAndRetrieveDataWithTicket(_x9) {return _linkAndRetrieveDataWithTicket.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "_setAnonymousUUID", value: function _setAnonymousUUID(e) {var _this$_cache$keys9 = this._cache.keys,t = _this$_cache$keys9.anonymousUuidKey,n = _this$_cache$keys9.loginTypeKey;this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(n, ie.ANONYMOUS);} }, { key: "_clearAnonymousUUID", value: function _clearAnonymousUUID() {this._cache.removeStore(this._cache.keys.anonymousUuidKey);} }]);return ye;}(pe);var _e = /*#__PURE__*/function (_pe2) {_inherits(_e, _pe2);var _super6 = _createSuper(_e);function _e() {_classCallCheck(this, _e);return _super6.apply(this, arguments);}_createClass(_e, [{ key: "signIn", value: function () {var _signIn2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee15(e) {var t, n;return _regenerator.default.wrap(function _callee15$(_context15) {while (1) {switch (_context15.prev = _context15.next) {case 0:if (!("string" != typeof e)) {_context15.next = 2;break;}throw new Error("ticket must be a string");case 2:t = this._cache.keys.refreshTokenKey;_context15.next = 5;return this._request.send("auth.signInWithTicket", { ticket: e, refresh_token: this._cache.getStore(t) || "" });case 5:n = _context15.sent;if (!n.refresh_token) {_context15.next = 15;break;}this.setRefreshToken(n.refresh_token);_context15.next = 10;return this._request.refreshAccessToken();case 10:Z(te);Z(se, { env: this.config.env, loginType: ie.CUSTOM, persistence: this.config.persistence });_context15.next = 14;return this.refreshUserInfo();case 14:return _context15.abrupt("return", new me(this.config.env));case 15:throw new Error("?????????????????????");case 16:case "end":return _context15.stop();}}}, _callee15, this);}));function signIn(_x10) {return _signIn2.apply(this, arguments);}return signIn;}() }]);return _e;}(pe);var we = /*#__PURE__*/function (_pe3) {_inherits(we, _pe3);var _super7 = _createSuper(we);function we() {_classCallCheck(this, we);return _super7.apply(this, arguments);}_createClass(we, [{ key: "signIn", value: function () {var _signIn3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee16(e, t) {var n, s, r, o, i;return _regenerator.default.wrap(function _callee16$(_context16) {while (1) {switch (_context16.prev = _context16.next) {case 0:if (!("string" != typeof e)) {_context16.next = 2;break;}throw new Error("email must be a string");case 2:n = this._cache.keys.refreshTokenKey;_context16.next = 5;return this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t, refresh_token: this._cache.getStore(n) || "" });case 5:s = _context16.sent;r = s.refresh_token;o = s.access_token;i = s.access_token_expire;if (!r) {_context16.next = 22;break;}this.setRefreshToken(r);if (!(o && i)) {_context16.next = 15;break;}this.setAccessToken(o, i);_context16.next = 17;break;case 15:_context16.next = 17;return this._request.refreshAccessToken();case 17:_context16.next = 19;return this.refreshUserInfo();case 19:Z(te);Z(se, { env: this.config.env, loginType: ie.EMAIL, persistence: this.config.persistence });return _context16.abrupt("return", new me(this.config.env));case 22:throw s.code ? new Error("\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: [".concat(s.code, "] ").concat(s.message)) : new Error("??????????????????");case 23:case "end":return _context16.stop();}}}, _callee16, this);}));function signIn(_x11, _x12) {return _signIn3.apply(this, arguments);}return signIn;}() }, { key: "activate", value: function () {var _activate = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee17(e) {return _regenerator.default.wrap(function _callee17$(_context17) {while (1) {switch (_context17.prev = _context17.next) {case 0:return _context17.abrupt("return", this._request.send("auth.activateEndUserMail", { token: e }));case 1:case "end":return _context17.stop();}}}, _callee17, this);}));function activate(_x13) {return _activate.apply(this, arguments);}return activate;}() }, { key: "resetPasswordWithToken", value: function () {var _resetPasswordWithToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee18(e, t) {return _regenerator.default.wrap(function _callee18$(_context18) {while (1) {switch (_context18.prev = _context18.next) {case 0:return _context18.abrupt("return", this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t }));case 1:case "end":return _context18.stop();}}}, _callee18, this);}));function resetPasswordWithToken(_x14, _x15) {return _resetPasswordWithToken.apply(this, arguments);}return resetPasswordWithToken;}() }]);return we;}(pe);var ke = /*#__PURE__*/function (_pe4) {_inherits(ke, _pe4);var _super8 = _createSuper(ke);function ke() {_classCallCheck(this, ke);return _super8.apply(this, arguments);}_createClass(ke, [{ key: "signIn", value: function () {var _signIn4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee19(e, t) {var n, s, r, o, i;return _regenerator.default.wrap(function _callee19$(_context19) {while (1) {switch (_context19.prev = _context19.next) {case 0:if (!("string" != typeof e)) {_context19.next = 2;break;}throw new Error("username must be a string");case 2:"string" != typeof t && (t = "", console.warn("password is empty"));n = this._cache.keys.refreshTokenKey;_context19.next = 6;return this._request.send("auth.signIn", { loginType: ie.USERNAME, username: e, password: t, refresh_token: this._cache.getStore(n) || "" });case 6:s = _context19.sent;r = s.refresh_token;o = s.access_token_expire;i = s.access_token;if (!r) {_context19.next = 23;break;}this.setRefreshToken(r);if (!(i && o)) {_context19.next = 16;break;}this.setAccessToken(i, o);_context19.next = 18;break;case 16:_context19.next = 18;return this._request.refreshAccessToken();case 18:_context19.next = 20;return this.refreshUserInfo();case 20:Z(te);Z(se, { env: this.config.env, loginType: ie.USERNAME, persistence: this.config.persistence });return _context19.abrupt("return", new me(this.config.env));case 23:throw s.code ? new Error("\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: [".concat(s.code, "] ").concat(s.message)) : new Error("???????????????????????????");case 24:case "end":return _context19.stop();}}}, _callee19, this);}));function signIn(_x16, _x17) {return _signIn4.apply(this, arguments);}return signIn;}() }]);return ke;}(pe);var Se = /*#__PURE__*/function () {function Se(e) {_classCallCheck(this, Se);this.config = e, this._cache = V(e.env), this._request = fe(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), Q(se, this._onLoginTypeChanged);}_createClass(Se, [{ key: "anonymousAuthProvider", value: function anonymousAuthProvider() {return new ye(this.config);} }, { key: "customAuthProvider", value: function customAuthProvider() {return new _e(this.config);} }, { key: "emailAuthProvider", value: function emailAuthProvider() {return new we(this.config);} }, { key: "usernameAuthProvider", value: function usernameAuthProvider() {return new ke(this.config);} }, { key: "signInAnonymously", value: function () {var _signInAnonymously = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee20() {return _regenerator.default.wrap(function _callee20$(_context20) {while (1) {switch (_context20.prev = _context20.next) {case 0:return _context20.abrupt("return", new ye(this.config).signIn());case 1:case "end":return _context20.stop();}}}, _callee20, this);}));function signInAnonymously() {return _signInAnonymously.apply(this, arguments);}return signInAnonymously;}() }, { key: "signInWithEmailAndPassword", value: function () {var _signInWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee21(e, t) {return _regenerator.default.wrap(function _callee21$(_context21) {while (1) {switch (_context21.prev = _context21.next) {case 0:return _context21.abrupt("return", new we(this.config).signIn(e, t));case 1:case "end":return _context21.stop();}}}, _callee21, this);}));function signInWithEmailAndPassword(_x18, _x19) {return _signInWithEmailAndPassword.apply(this, arguments);}return signInWithEmailAndPassword;}() }, { key: "signInWithUsernameAndPassword", value: function signInWithUsernameAndPassword(e, t) {return new ke(this.config).signIn(e, t);} }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee22(e) {return _regenerator.default.wrap(function _callee22$(_context22) {while (1) {switch (_context22.prev = _context22.next) {case 0:this._anonymousAuthProvider || (this._anonymousAuthProvider = new ye(this.config)), Q(re, this._onAnonymousConverted);_context22.next = 3;return this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);case 3:return _context22.abrupt("return", _context22.sent);case 4:case "end":return _context22.stop();}}}, _callee22, this);}));function linkAndRetrieveDataWithTicket(_x20) {return _linkAndRetrieveDataWithTicket2.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "signOut", value: function () {var _signOut = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee23() {var _this$_cache$keys10, e, t, n, s, r;return _regenerator.default.wrap(function _callee23$(_context23) {while (1) {switch (_context23.prev = _context23.next) {case 0:if (!(this.loginType === ie.ANONYMOUS)) {_context23.next = 2;break;}throw new Error("?????????????????????????????????");case 2:_this$_cache$keys10 = this._cache.keys, e = _this$_cache$keys10.refreshTokenKey, t = _this$_cache$keys10.accessTokenKey, n = _this$_cache$keys10.accessTokenExpireKey, s = this._cache.getStore(e);if (s) {_context23.next = 5;break;}return _context23.abrupt("return");case 5:_context23.next = 7;return this._request.send("auth.logout", { refresh_token: s });case 7:r = _context23.sent;return _context23.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.removeStore(n), Z(te), Z(se, { env: this.config.env, loginType: ie.NULL, persistence: this.config.persistence }), r));case 9:case "end":return _context23.stop();}}}, _callee23, this);}));function signOut() {return _signOut.apply(this, arguments);}return signOut;}() }, { key: "signUpWithEmailAndPassword", value: function () {var _signUpWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee24(e, t) {return _regenerator.default.wrap(function _callee24$(_context24) {while (1) {switch (_context24.prev = _context24.next) {case 0:return _context24.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t }));case 1:case "end":return _context24.stop();}}}, _callee24, this);}));function signUpWithEmailAndPassword(_x21, _x22) {return _signUpWithEmailAndPassword.apply(this, arguments);}return signUpWithEmailAndPassword;}() }, { key: "sendPasswordResetEmail", value: function () {var _sendPasswordResetEmail = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee25(e) {return _regenerator.default.wrap(function _callee25$(_context25) {while (1) {switch (_context25.prev = _context25.next) {case 0:return _context25.abrupt("return", this._request.send("auth.sendPasswordResetEmail", { email: e }));case 1:case "end":return _context25.stop();}}}, _callee25, this);}));function sendPasswordResetEmail(_x23) {return _sendPasswordResetEmail.apply(this, arguments);}return sendPasswordResetEmail;}() }, { key: "onLoginStateChanged", value: function onLoginStateChanged(e) {var _this11 = this;Q(te, function () {var t = _this11.hasLoginState();e.call(_this11, t);});var t = this.hasLoginState();e.call(this, t);} }, { key: "onLoginStateExpired", value: function onLoginStateExpired(e) {Q(ne, e.bind(this));} }, { key: "onAccessTokenRefreshed", value: function onAccessTokenRefreshed(e) {Q(oe, e.bind(this));} }, { key: "onAnonymousConverted", value: function onAnonymousConverted(e) {Q(re, e.bind(this));} }, { key: "onLoginTypeChanged", value: function onLoginTypeChanged(e) {var _this12 = this;Q(se, function () {var t = _this12.hasLoginState();e.call(_this12, t);});} }, { key: "getAccessToken", value: function () {var _getAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee26() {return _regenerator.default.wrap(function _callee26$(_context26) {while (1) {switch (_context26.prev = _context26.next) {case 0:_context26.next = 2;return this._request.getAccessToken();case 2:_context26.t0 = _context26.sent.accessToken;_context26.t1 = this.config.env;return _context26.abrupt("return", { accessToken: _context26.t0, env: _context26.t1 });case 5:case "end":return _context26.stop();}}}, _callee26, this);}));function getAccessToken() {return _getAccessToken2.apply(this, arguments);}return getAccessToken;}() }, { key: "hasLoginState", value: function hasLoginState() {var e = this._cache.keys.refreshTokenKey;return this._cache.getStore(e) ? new me(this.config.env) : null;} }, { key: "isUsernameRegistered", value: function () {var _isUsernameRegistered = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee27(e) {var _yield$this$_request$5, t;return _regenerator.default.wrap(function _callee27$(_context27) {while (1) {switch (_context27.prev = _context27.next) {case 0:if (!("string" != typeof e)) {_context27.next = 2;break;}throw new Error("username must be a string");case 2:_context27.next = 4;return this._request.send("auth.isUsernameRegistered", { username: e });case 4:_yield$this$_request$5 = _context27.sent;t = _yield$this$_request$5.data;return _context27.abrupt("return", t && t.isRegistered);case 7:case "end":return _context27.stop();}}}, _callee27, this);}));function isUsernameRegistered(_x24) {return _isUsernameRegistered.apply(this, arguments);}return isUsernameRegistered;}() }, { key: "getLoginState", value: function getLoginState() {return Promise.resolve(this.hasLoginState());} }, { key: "signInWithTicket", value: function () {var _signInWithTicket = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee28(e) {return _regenerator.default.wrap(function _callee28$(_context28) {while (1) {switch (_context28.prev = _context28.next) {case 0:return _context28.abrupt("return", new _e(this.config).signIn(e));case 1:case "end":return _context28.stop();}}}, _callee28, this);}));function signInWithTicket(_x25) {return _signInWithTicket.apply(this, arguments);}return signInWithTicket;}() }, { key: "shouldRefreshAccessToken", value: function shouldRefreshAccessToken(e) {this._request._shouldRefreshAccessTokenHook = e.bind(this);} }, { key: "getUserInfo", value: function getUserInfo() {return this._request.send("auth.getUserInfo", {}).then(function (e) {return e.code ? e : _objectSpread(_objectSpread({}, e.data), {}, { requestId: e.seqId });});} }, { key: "getAuthHeader", value: function getAuthHeader() {var _this$_cache$keys11 = this._cache.keys,e = _this$_cache$keys11.refreshTokenKey,t = _this$_cache$keys11.accessTokenKey,n = this._cache.getStore(e);return { "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + n };} }, { key: "_onAnonymousConverted", value: function _onAnonymousConverted(e) {var t = e.data.env;t === this.config.env && this._cache.updatePersistence(this.config.persistence);} }, { key: "_onLoginTypeChanged", value: function _onLoginTypeChanged(e) {var _e$data = e.data,t = _e$data.loginType,n = _e$data.persistence,s = _e$data.env;s === this.config.env && (this._cache.updatePersistence(n), this._cache.setStore(this._cache.keys.loginTypeKey, t));} }, { key: "currentUser", get: function get() {var e = this.hasLoginState();return e && e.user || null;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }]);return Se;}();var ve = function ve(e, t) {t = t || L();var n = fe(this.config.env),s = e.cloudPath,r = e.filePath,o = e.onUploadProgress,_e$fileType = e.fileType,i = _e$fileType === void 0 ? "image" : _e$fileType;return n.send("storage.getUploadMetadata", { path: s }).then(function (e) {var _e$data2 = e.data,a = _e$data2.url,c = _e$data2.authorization,u = _e$data2.token,h = _e$data2.fileId,l = _e$data2.cosFileId,d = e.requestId,f = { key: s, signature: c, "x-cos-meta-fileid": l, success_action_status: "201", "x-cos-security-token": u };n.upload({ url: a, data: f, file: r, name: s, fileType: i, onUploadProgress: o }).then(function (e) {201 === e.statusCode ? t(null, { fileID: h, requestId: d }) : t(new Error("STORAGE_REQUEST_FAIL: ".concat(e.data)));}).catch(function (e) {t(e);});}).catch(function (e) {t(e);}), t.promise;},Te = function Te(e, t) {t = t || L();var n = fe(this.config.env),s = e.cloudPath;return n.send("storage.getUploadMetadata", { path: s }).then(function (e) {t(null, e);}).catch(function (e) {t(e);}), t.promise;},Ae = function Ae(_ref5, t) {var e = _ref5.fileList;if (t = t || L(), !e || !Array.isArray(e)) return { code: "INVALID_PARAM", message: "fileList????????????????????????" };var _iterator3 = _createForOfIteratorHelper(e),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var _t7 = _step3.value;if (!_t7 || "string" != typeof _t7) return { code: "INVALID_PARAM", message: "fileList????????????????????????????????????" };}} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}var n = { fileid_list: e };return fe(this.config.env).send("storage.batchDeleteFile", n).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.delete_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},Pe = function Pe(_ref6, t) {var e = _ref6.fileList;t = t || L(), e && Array.isArray(e) || t(null, { code: "INVALID_PARAM", message: "fileList????????????????????????" });var n = [];var _iterator4 = _createForOfIteratorHelper(e),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var _s6 = _step4.value;"object" == typeof _s6 ? (_s6.hasOwnProperty("fileID") && _s6.hasOwnProperty("maxAge") || t(null, { code: "INVALID_PARAM", message: "fileList????????????????????????fileID???maxAge?????????" }), n.push({ fileid: _s6.fileID, max_age: _s6.maxAge })) : "string" == typeof _s6 ? n.push({ fileid: _s6 }) : t(null, { code: "INVALID_PARAM", message: "fileList???????????????????????????" });}} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}var s = { file_list: n };return fe(this.config.env).send("storage.batchGetDownloadUrl", s).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.download_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},Ie = /*#__PURE__*/function () {var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee29(_ref7, t) {var e, n, s, r;return _regenerator.default.wrap(function _callee29$(_context29) {while (1) {switch (_context29.prev = _context29.next) {case 0:e = _ref7.fileID;_context29.next = 3;return Pe.call(this, { fileList: [{ fileID: e, maxAge: 600 }] });case 3:n = _context29.sent.fileList[0];if (!("SUCCESS" !== n.code)) {_context29.next = 6;break;}return _context29.abrupt("return", t ? t(n) : new Promise(function (e) {e(n);}));case 6:s = fe(this.config.env);r = n.download_url;if (!(r = encodeURI(r), !t)) {_context29.next = 10;break;}return _context29.abrupt("return", s.download({ url: r }));case 10:_context29.t0 = t;_context29.next = 13;return s.download({ url: r });case 13:_context29.t1 = _context29.sent;(0, _context29.t0)(_context29.t1);case 15:case "end":return _context29.stop();}}}, _callee29, this);}));return function Ie(_x26, _x27) {return _ref8.apply(this, arguments);};}(),be = function be(_ref9, o) {var e = _ref9.name,t = _ref9.data,n = _ref9.query,s = _ref9.parse,r = _ref9.search;var i = o || L();var a;try {a = t ? JSON.stringify(t) : "";} catch (e) {return Promise.reject(e);}if (!e) return Promise.reject(new Error("?????????????????????"));var c = { inQuery: n, parse: s, search: r, function_name: e, request_data: a };return fe(this.config.env).send("functions.invokeFunction", c).then(function (e) {if (e.code) i(null, e);else {var _t8 = e.data.response_data;if (s) i(null, { result: _t8, requestId: e.requestId });else try {_t8 = JSON.parse(e.data.response_data), i(null, { result: _t8, requestId: e.requestId });} catch (e) {i(new Error("response data must be json"));}}return i.promise;}).catch(function (e) {i(e);}), i.promise;},Ee = { timeout: 15e3, persistence: "session" },Oe = {};var Ce = /*#__PURE__*/function () {function Ce(e) {_classCallCheck(this, Ce);this.config = e || this.config, this.authObj = void 0;}_createClass(Ce, [{ key: "init", value: function init(e) {switch (j.adapter || (this.requestClient = new j.adapter.reqClass({ timeout: e.timeout || 5e3, timeoutMsg: "\u8BF7\u6C42\u5728".concat((e.timeout || 5e3) / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD") })), this.config = _objectSpread(_objectSpread({}, Ee), e), !0) {case this.config.timeout > 6e5:console.warn("timeout?????????????????????[10??????]???????????????????????????"), this.config.timeout = 6e5;break;case this.config.timeout < 100:console.warn("timeout?????????????????????[100ms]???????????????????????????"), this.config.timeout = 100;}return new Ce(this.config);} }, { key: "auth", value: function auth() {var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref10.persistence;if (this.authObj) return this.authObj;var t = e || j.adapter.primaryStorage || Ee.persistence;var n;return t !== this.config.persistence && (this.config.persistence = t), function (e) {var t = e.env;z[t] = new W(e), J[t] = new W(_objectSpread(_objectSpread({}, e), {}, { persistence: "local" }));}(this.config), n = this.config, de[n.env] = new le(n), this.authObj = new Se(this.config), this.authObj;} }, { key: "on", value: function on(e, t) {return Q.apply(this, [e, t]);} }, { key: "off", value: function off(e, t) {return ee.apply(this, [e, t]);} }, { key: "callFunction", value: function callFunction(e, t) {return be.apply(this, [e, t]);} }, { key: "deleteFile", value: function deleteFile(e, t) {return Ae.apply(this, [e, t]);} }, { key: "getTempFileURL", value: function getTempFileURL(e, t) {return Pe.apply(this, [e, t]);} }, { key: "downloadFile", value: function downloadFile(e, t) {return Ie.apply(this, [e, t]);} }, { key: "uploadFile", value: function uploadFile(e, t) {return ve.apply(this, [e, t]);} }, { key: "getUploadMetadata", value: function getUploadMetadata(e, t) {return Te.apply(this, [e, t]);} }, { key: "registerExtension", value: function registerExtension(e) {Oe[e.name] = e;} }, { key: "invokeExtension", value: function () {var _invokeExtension = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee30(e, t) {var n;return _regenerator.default.wrap(function _callee30$(_context30) {while (1) {switch (_context30.prev = _context30.next) {case 0:n = Oe[e];if (n) {_context30.next = 3;break;}throw Error("\u6269\u5C55".concat(e, " \u5FC5\u987B\u5148\u6CE8\u518C"));case 3:_context30.next = 5;return n.invoke(t, this);case 5:return _context30.abrupt("return", _context30.sent);case 6:case "end":return _context30.stop();}}}, _callee30, this);}));function invokeExtension(_x28, _x29) {return _invokeExtension.apply(this, arguments);}return invokeExtension;}() }, { key: "useAdapters", value: function useAdapters(e) {var _ref11 = M(e) || {},t = _ref11.adapter,n = _ref11.runtime;t && (j.adapter = t), n && (j.runtime = n);} }]);return Ce;}();var Ue = new Ce();function xe(e, t, n) {void 0 === n && (n = {});var s = /\?/.test(t),r = "";for (var o in n) {"" === r ? !s && (t += "?") : r += "&", r += o + "=" + encodeURIComponent(n[o]);}return /^http(s)?:\/\//.test(t += r) ? t : "" + e + t;}var De = /*#__PURE__*/function () {function De() {_classCallCheck(this, De);}_createClass(De, [{ key: "post", value: function post(e) {var t = e.url,n = e.data,s = e.headers;return new Promise(function (e, r) {E.request({ url: xe("https:", t), data: n, method: "POST", header: s, success: function success(t) {e(t);}, fail: function fail(e) {r(e);} });});} }, { key: "upload", value: function upload(e) {return new Promise(function (t, n) {var s = e.url,r = e.file,o = e.data,i = e.headers,a = e.fileType,c = E.uploadFile({ url: xe("https:", s), name: "file", formData: Object.assign({}, o), filePath: r, fileType: a, header: i, success: function success(e) {var n = { statusCode: e.statusCode, data: e.data || {} };200 === e.statusCode && o.success_action_status && (n.statusCode = parseInt(o.success_action_status, 10)), t(n);}, fail: function fail(e) {u && "mp-alipay" === h && console.warn("????????????????????????????????????????????????????????????????????????????????????????????????????????????"), n(new Error(e.errMsg || "uploadFile:fail"));} });"function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {e.onUploadProgress({ loaded: t.totalBytesSent, total: t.totalBytesExpectedToSend });});});} }]);return De;}();var Re = { setItem: function setItem(e, t) {E.setStorageSync(e, t);}, getItem: function getItem(e) {return E.getStorageSync(e);}, removeItem: function removeItem(e) {E.removeStorageSync(e);}, clear: function clear() {E.clearStorageSync();} };var qe = { genAdapter: function genAdapter() {return { root: {}, reqClass: De, localStorage: Re, primaryStorage: "local" };}, isMatch: function isMatch() {return !0;}, runtime: "uni_app" };Ue.useAdapters(qe);var Le = Ue,Fe = Le.init;Le.init = function (e) {e.env = e.spaceId;var t = Fe.call(this, e);t.config.provider = "tencent", t.config.spaceId = e.spaceId;var n = t.auth;return t.auth = function (e) {var t = n.call(this, e);return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {t[e] = T(t[e]).bind(t);}), t;}, t.customAuth = t.auth, t;};var Ne = Le;function $e() {return { token: E.getStorageSync("uni_id_token") || E.getStorageSync("uniIdToken"), tokenExpired: E.getStorageSync("uni_id_token_expired") };}function Me() {if (!u || "h5" !== h) return;uni.getStorageSync("__LAST_DCLOUD_APPID") !== p && (uni.setStorageSync("__LAST_DCLOUD_APPID", p), console.warn("?????????????????????????????????????????????????????????????????????????????????uni-id?????????token????????????????????????????????????"), E.removeStorageSync("uni_id_token"), E.removeStorageSync("uniIdToken"), E.removeStorageSync("uni_id_token_expired"));}var je = /*#__PURE__*/function (_U) {_inherits(je, _U);var _super9 = _createSuper(je);function je() {_classCallCheck(this, je);return _super9.apply(this, arguments);}_createClass(je, [{ key: "getAccessToken", value: function getAccessToken() {var _this13 = this;return new Promise(function (e, t) {var n = "Anonymous_Access_token";_this13.setAccessToken(n), e(n);});} }, { key: "setupRequest", value: function setupRequest(e, t) {var n = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),s = { "Content-Type": "application/json" };"auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = b.sign(n, this.config.clientSecret);var r = I();s["x-client-info"] = JSON.stringify(r);var _$e = $e(),o = _$e.token;return s["x-client-token"] = o, { url: this.config.requestUrl, method: "POST", data: n, dataType: "json", header: JSON.parse(JSON.stringify(s)) };} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref12) {var _this14 = this;var e = _ref12.url,t = _ref12.formData,n = _ref12.name,s = _ref12.filePath,r = _ref12.fileType,o = _ref12.onUploadProgress;return new Promise(function (i, a) {var c = _this14.adapter.uploadFile({ url: e, formData: t, name: n, filePath: s, fileType: r, success: function success(e) {e && e.statusCode < 400 ? i(e) : a(new A({ code: "UPLOAD_FAILED", message: "??????????????????" }));}, fail: function fail(e) {a(new A({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "??????????????????" }));} });"function" == typeof o && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {o({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "uploadFile", value: function uploadFile(_ref13) {var _this15 = this;var e = _ref13.filePath,t = _ref13.cloudPath,_ref13$fileType = _ref13.fileType,n = _ref13$fileType === void 0 ? "image" : _ref13$fileType,s = _ref13.onUploadProgress;if (!t) throw new A({ code: "CLOUDPATH_REQUIRED", message: "cloudPath????????????" });var r;return this.getOSSUploadOptionsFromPath({ cloudPath: t }).then(function (t) {var _t$result = t.result,o = _t$result.url,i = _t$result.formData,a = _t$result.name;r = t.result.fileUrl;var c = { url: o, formData: i, name: a, filePath: e, fileType: n };return _this15.uploadFileToOSS(Object.assign({}, c, { onUploadProgress: s }));}).then(function () {return _this15.reportOSSUpload({ cloudPath: t });}).then(function (t) {return new Promise(function (n, s) {t.success ? n({ success: !0, filePath: e, fileID: r }) : s(new A({ code: "UPLOAD_FAILED", message: "??????????????????" }));});});} }, { key: "deleteFile", value: function deleteFile(_ref14) {var e = _ref14.fileList;var t = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e }) };return this.request(this.setupRequest(t));} }, { key: "getTempFileURL", value: function getTempFileURL() {var _ref15 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref15.fileList;var t = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e }) };return this.request(this.setupRequest(t));} }]);return je;}(U);var Be = { init: function init(e) {var t = new je(e),n = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return n;}, t.customAuth = t.auth, t;} };function Ke(_ref16) {var e = _ref16.data;var t;t = I();var n = JSON.parse(JSON.stringify(e || {}));if (Object.assign(n, { clientInfo: t }), !n.uniIdToken) {var _$e2 = $e(),_e16 = _$e2.token;_e16 && (n.uniIdToken = _e16);}return n;}function He(_ref17) {var _this16 = this;var e = _ref17.name,t = _ref17.data;var n = this.localAddress,s = this.localPort,r = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider],o = this.config.spaceId,i = "http://".concat(n, ":").concat(s, "/system/check-function"),a = "http://".concat(n, ":").concat(s, "/cloudfunctions/").concat(e);return new Promise(function (t, n) {E.request({ method: "POST", url: i, data: { name: e, platform: h, provider: r, spaceId: o }, timeout: 3e3, success: function success(e) {t(e);}, fail: function fail() {t({ data: { code: "NETWORK_ERROR", message: "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????" } });} });}).then(function () {var _ref18 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref18.data;var _ref19 = e || {},t = _ref19.code,n = _ref19.message;return { code: 0 === t ? 0 : t || "SYS_ERR", message: n || "SYS_ERR" };}).then(function (_ref20) {var n = _ref20.code,s = _ref20.message;if (0 !== n) {switch (n) {case "MODULE_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "FUNCTION_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "ACTION_ENCRYPTED":console.error(s || "?????????????????????uni-clientDB-action??????????????????????????????");break;case "NETWORK_ERROR":{var _e17 = "???????????????????????????????????????????????????????????????????????????????????????";throw console.error(_e17), new Error(_e17);}case "SWITCH_TO_CLOUD":break;default:{var _e18 = "\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A".concat(s, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5");throw console.error(_e18), new Error(_e18);}}return _this16._originCallFunction({ name: e, data: t });}return new Promise(function (e, n) {var s = Ke.call(_this16, { data: t });E.request({ method: "POST", url: a, data: { provider: r, platform: h, param: s }, success: function success() {var _ref21 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},t = _ref21.statusCode,s = _ref21.data;return !t || t >= 400 ? n(new A({ code: s.code || "SYS_ERR", message: s.message || "request:fail" })) : e({ result: s });}, fail: function fail(e) {n(new A({ code: e.code || e.errCode || "SYS_ERR", message: e.message || e.errMsg || "request:fail" }));} });});});}var We = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "????????????[{functionName}]????????????????????????????????????????????????????????????????????????????????????????????????????????????", mode: "append" }];var ze = /[\\^$.*+?()[\]{}|]/g,Je = RegExp(ze.source);function Ve(e, t, n) {return e.replace(new RegExp((s = t) && Je.test(s) ? s.replace(ze, "\\$&") : s, "g"), n);var s;}function Ye(_ref22) {var e = _ref22.functionName,t = _ref22.result,n = _ref22.logPvd;if (this.config.useDebugFunction && t && t.requestId) {var _s7 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e, requestId: t.requestId });console.log("[".concat(n, "-request]").concat(_s7, "[/").concat(n, "-request]"));}}function Xe(e) {var t = e.callFunction,n = function n(_n4) {var _this17 = this;var s = _n4.name;_n4.data = Ke.call(e, { data: _n4.data });var r = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider];return t.call(this, _n4).then(function (e) {return Ye.call(_this17, { functionName: s, result: e, logPvd: r }), Promise.resolve(e);}, function (e) {return Ye.call(_this17, { functionName: s, result: e, logPvd: r }), e && e.message && (e.message = function () {var _ref23 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref23$message = _ref23.message,e = _ref23$message === void 0 ? "" : _ref23$message,_ref23$extraInfo = _ref23.extraInfo,t = _ref23$extraInfo === void 0 ? {} : _ref23$extraInfo,_ref23$formatter = _ref23.formatter,n = _ref23$formatter === void 0 ? [] : _ref23$formatter;for (var _s8 = 0; _s8 < n.length; _s8++) {var _n$_s = n[_s8],_r3 = _n$_s.rule,_o2 = _n$_s.content,i = _n$_s.mode,_a = e.match(_r3);if (!_a) continue;var _c = _o2;for (var _e19 = 1; _e19 < _a.length; _e19++) {_c = Ve(_c, "{$".concat(_e19, "}"), _a[_e19]);}for (var _e20 in t) {_c = Ve(_c, "{".concat(_e20, "}"), t[_e20]);}return "replace" === i ? _c : e + _c;}return e;}({ message: "[".concat(_n4.name, "]: ").concat(e.message), formatter: We, extraInfo: { functionName: s } })), Promise.reject(e);});};e.callFunction = function (t) {var s;return u && e.debugInfo && !e.debugInfo.forceRemote && d ? (e._originCallFunction || (e._originCallFunction = n), s = He.call(this, t)) : s = n.call(this, t), Object.defineProperty(s, "result", { get: function get() {return console.warn("?????????????????????Promise??????????????????????????????result???????????????????????????https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {};} }), s;};}var Ge = Symbol("CLIENT_DB_INTERNAL");function Qe(e, t) {return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = Ge, e.__ob__ = void 0, new Proxy(e, { get: function get(e, n, s) {if ("_uniClient" === n) return null;if (n in e || "string" != typeof n) {var _t9 = e[n];return "function" == typeof _t9 ? _t9.bind(e) : _t9;}return t.get(e, n, s);} });}function Ze(e) {return { on: function on(t, n) {e[t] = e[t] || [], e[t].indexOf(n) > -1 || e[t].push(n);}, off: function off(t, n) {e[t] = e[t] || [];var s = e[t].indexOf(n);-1 !== s && e[t].splice(s, 1);} };}var et = ["db.Geo", "db.command", "command.aggregate"];function tt(e, t) {return et.indexOf("".concat(e, ".").concat(t)) > -1;}function nt(e) {switch (o(e)) {case "array":return e.map(function (e) {return nt(e);});case "object":return e._internalType === Ge || Object.keys(e).forEach(function (t) {e[t] = nt(e[t]);}), e;case "regexp":return { $regexp: { source: e.source, flags: e.flags } };case "date":return { $date: e.toISOString() };default:return e;}}var st = /*#__PURE__*/function () {function st(e, t, n) {_classCallCheck(this, st);this.content = e, this.prevStage = t || null, this.udb = null, this._database = n;}_createClass(st, [{ key: "toJSON", value: function toJSON() {var e = this;var t = [e.content];for (; e.prevStage;) {e = e.prevStage, t.push(e.content);}return { $db: t.reverse().map(function (e) {return { $method: e.$method, $param: nt(e.$param) };}) };} }, { key: "getAction", value: function getAction() {var e = this.toJSON().$db.find(function (e) {return "action" === e.$method;});return e && e.$param && e.$param[0];} }, { key: "getCommand", value: function getCommand() {return { $db: this.toJSON().$db.filter(function (e) {return "action" !== e.$method;}) };} }, { key: "get", value: function get() {return this._send("get", Array.from(arguments));} }, { key: "add", value: function add() {return this._send("add", Array.from(arguments));} }, { key: "remove", value: function remove() {return this._send("remove", Array.from(arguments));} }, { key: "update", value: function update() {return this._send("update", Array.from(arguments));} }, { key: "end", value: function end() {return this._send("end", Array.from(arguments));} }, { key: "set", value: function set() {throw new Error("clientDB????????????set??????");} }, { key: "_send", value: function _send(e, t) {var n = this.getAction(),s = this.getCommand();if (s.$db.push({ $method: e, $param: nt(t) }), u) {var _e21 = s.$db.find(function (e) {return "collection" === e.$method;}),_t10 = _e21 && _e21.$param;_t10 && 1 === _t10.length && "string" == typeof _e21.$param[0] && _e21.$param[0].indexOf(",") > -1 && console.warn("???????????????JQL?????????????????????????????????getTemp?????????????????????????????????????????????????????????????????????????????????\n- ?????????????????????????????????https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- ???????????????????????????????????????????????????????????????????????????????????????");}return this._database._callCloudFunction({ action: n, command: s });} }, { key: "useAggregate", get: function get() {var e = this,t = !1;for (; e.prevStage;) {e = e.prevStage;var _n5 = e.content.$method;if ("aggregate" === _n5 || "pipeline" === _n5) {t = !0;break;}}return t;} }, { key: "count", get: function get() {if (!this.useAggregate) return function () {return this._send("count", Array.from(arguments));};var e = this;return function () {return rt({ $method: "count", $param: nt(Array.from(arguments)) }, e, this._database);};} }]);return st;}();function rt(e, t, n) {return Qe(new st(e, t, n), { get: function get(e, t) {var s = "db";return e && e.content && (s = e.content.$method), tt(s, t) ? rt({ $method: t }, e, n) : function () {return rt({ $method: t, $param: nt(Array.from(arguments)) }, e, n);};} });}function ot(_ref24) {var e = _ref24.path,t = _ref24.method;return /*#__PURE__*/function () {function _class2() {_classCallCheck(this, _class2);this.param = Array.from(arguments);}_createClass(_class2, [{ key: "toJSON", value: function toJSON() {return { $newDb: [].concat(_toConsumableArray(e.map(function (e) {return { $method: e };})), [{ $method: t, $param: this.param }]) };} }]);return _class2;}();}var it = /*#__PURE__*/function (_ref25) {_inherits(it, _ref25);var _super10 = _createSuper(it);function it() {_classCallCheck(this, it);return _super10.apply(this, arguments);}_createClass(it, [{ key: "_callCloudFunction", value: function _callCloudFunction(_ref26) {var _this18 = this;var e = _ref26.action,t = _ref26.command,n = _ref26.multiCommand,s = _ref26.queryList;function r(e, t) {if (n && s) for (var _n6 = 0; _n6 < s.length; _n6++) {var _r4 = s[_n6];_r4.udb && "function" == typeof _r4.udb.setResult && (t ? _r4.udb.setResult(t) : _r4.udb.setResult(e.result.dataList[_n6]));}}var o = S(v("database", "invoke")),i = this._uniClient;return o.then(function () {return i.callFunction({ name: "DCloud-clientDB", data: { action: e, command: t, multiCommand: n } });}).then(function (e) {var _e$result = e.result,t = _e$result.code,n = _e$result.message,s = _e$result.token,o = _e$result.tokenExpired,_e$result$systemInfo = _e$result.systemInfo,i = _e$result$systemInfo === void 0 ? [] : _e$result$systemInfo;if (i) for (var _e22 = 0; _e22 < i.length; _e22++) {var _i$_e = i[_e22],_t11 = _i$_e.level,_n7 = _i$_e.message,_s9 = _i$_e.detail,_r5 = console["app-plus" === h && "warn" === _t11 ? "error" : _t11] || console.log;var _o3 = "[System Info]" + _n7;_s9 && (_o3 = "".concat(_o3, "\n\u8BE6\u7EC6\u4FE1\u606F\uFF1A").concat(_s9)), _r5(_o3);}if (t) {var _e23 = new a(n, t);return _this18._callback("error", [_e23]), Promise.reject(_e23);}s && o && (!function () {var _ref27 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref27.token,t = _ref27.tokenExpired;e && E.setStorageSync("uni_id_token", e), t && E.setStorageSync("uni_id_token_expired", t);}({ token: s, tokenExpired: o }), _this18._callbackAuth("refreshToken", [{ token: s, tokenExpired: o }]), _this18._callback("refreshToken", [{ token: s, tokenExpired: o }]));var c = e.result.affectedDocs;return "number" == typeof c && Object.defineProperty(e.result, "affectedDocs", { get: function get() {return console.warn("affectedDocs??????????????????????????????inserted/deleted/updated/data.length??????"), c;} }), S(v("database", "success"), e).then(function () {return S(v("database", "complete"), e);}).then(function () {return r(e, null), Promise.resolve(e);});}, function (e) {var t = new a(e.message, e.code || "SYSTEM_ERROR");return _this18._callback("error", [t]), /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB?????????????????????web?????????????????????schema?????????clientDB"), S(v("database", "fail"), e).then(function () {return S(v("database", "complete"), e);}).then(function () {return r(null, e), Promise.reject(e);});});} }]);return it;}( /*#__PURE__*/function () {function _class3() {var _ref28 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref28$uniClient = _ref28.uniClient,e = _ref28$uniClient === void 0 ? {} : _ref28$uniClient;_classCallCheck(this, _class3);this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e.isDefault && (this._dbCallBacks = m("_globalUniCloudDatabaseCallback")), this.auth = Ze(this._authCallBacks), Object.assign(this, Ze(this._dbCallBacks)), this.env = Qe({}, { get: function get(e, t) {return { $env: t };} }), this.Geo = Qe({}, { get: function get(e, t) {return ot({ path: ["Geo"], method: t });} }), this.serverDate = ot({ path: [], method: "serverDate" }), this.RegExp = ot({ path: [], method: "RegExp" });}_createClass(_class3, [{ key: "getCloudEnv", value: function getCloudEnv(e) {if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv????????????");return { $env: e.replace("$cloudEnv_", "") };} }, { key: "_callback", value: function _callback(e, t) {var n = this._dbCallBacks;n[e] && n[e].forEach(function (e) {e.apply(void 0, _toConsumableArray(t));});} }, { key: "_callbackAuth", value: function _callbackAuth(e, t) {var n = this._authCallBacks;n[e] && n[e].forEach(function (e) {e.apply(void 0, _toConsumableArray(t));});} }, { key: "multiSend", value: function multiSend() {var e = Array.from(arguments),t = e.map(function (e) {var t = e.getAction(),n = e.getCommand();if ("getTemp" !== n.$db[n.$db.length - 1].$method) throw new Error("multiSend???????????????????????????getTemp");return { action: t, command: n };});return this._callCloudFunction({ multiCommand: t, queryList: e });} }]);return _class3;}());function at(e) {e.database = function (t) {if (t && Object.keys(t).length > 0) return e.init(t).database();if (this._database) return this._database;var n = function (e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};return Qe(new e(t), { get: function get(e, t) {return tt("db", t) ? rt({ $method: t }, null, e) : function () {return rt({ $method: t, $param: nt(Array.from(arguments)) }, null, e);};} });}(it, { uniClient: e });return this._database = n, n;};}var ct;var ut = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",ht = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;function lt() {var e = $e().token || "",t = e.split(".");if (!e || 3 !== t.length) return { uid: null, role: [], permission: [], tokenExpired: 0 };var n;try {n = JSON.parse((s = t[1], decodeURIComponent(ct(s).split("").map(function (e) {return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);}).join(""))));} catch (e) {throw new Error("?????????????????????????????????????????????????????????" + e.message);}var s;return n.tokenExpired = 1e3 * n.exp, delete n.exp, delete n.iat, n;}ct = "function" != typeof atob ? function (e) {if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !ht.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");var t;e += "==".slice(2 - (3 & e.length));for (var n, s, r = "", o = 0; o < e.length;) {t = ut.indexOf(e.charAt(o++)) << 18 | ut.indexOf(e.charAt(o++)) << 12 | (n = ut.indexOf(e.charAt(o++))) << 6 | (s = ut.indexOf(e.charAt(o++))), r += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === s ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);}return r;} : atob;var dt = t(n(function (e, t) {Object.defineProperty(t, "__esModule", { value: !0 });var n = "chooseAndUploadFile:ok",s = "chooseAndUploadFile:fail";function r(e, t) {return e.tempFiles.forEach(function (e, n) {e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + n + e.name.substring(e.name.lastIndexOf("."));}), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function (e) {return e.path;})), e;}function o(e, t, _ref29) {var s = _ref29.onChooseFile,r = _ref29.onUploadProgress;return t.then(function (e) {if (s) {var _t12 = s(e);if (void 0 !== _t12) return Promise.resolve(_t12).then(function (t) {return void 0 === t ? e : t;});}return e;}).then(function (t) {return !1 === t ? { errMsg: n, tempFilePaths: [], tempFiles: [] } : function (e, t) {var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;var r = arguments.length > 3 ? arguments[3] : undefined;(t = Object.assign({}, t)).errMsg = n;var o = t.tempFiles,i = o.length;var a = 0;return new Promise(function (n) {for (; a < s;) {c();}function c() {var s = a++;if (s >= i) return void (!o.find(function (e) {return !e.url && !e.errMsg;}) && n(t));var u = o[s];e.uploadFile({ filePath: u.path, cloudPath: u.cloudPath, fileType: u.fileType, onUploadProgress: function onUploadProgress(e) {e.index = s, e.tempFile = u, e.tempFilePath = u.path, r && r(e);} }).then(function (e) {u.url = e.fileID, s < i && c();}).catch(function (e) {u.errMsg = e.errMsg || e.message, s < i && c();});}});}(e, t, 5, r);});}t.initChooseAndUploadFile = function (e) {return function () {var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { type: "all" };return "image" === t.type ? o(e, function (e) {var t = e.count,n = e.sizeType,_e$sourceType = e.sourceType,o = _e$sourceType === void 0 ? ["album", "camera"] : _e$sourceType,i = e.extension;return new Promise(function (e, a) {uni.chooseImage({ count: t, sizeType: n, sourceType: o, extension: i, success: function success(t) {e(r(t, "image"));}, fail: function fail(e) {a({ errMsg: e.errMsg.replace("chooseImage:fail", s) });} });});}(t), t) : "video" === t.type ? o(e, function (e) {var t = e.camera,n = e.compressed,o = e.maxDuration,_e$sourceType2 = e.sourceType,i = _e$sourceType2 === void 0 ? ["album", "camera"] : _e$sourceType2,a = e.extension;return new Promise(function (e, c) {uni.chooseVideo({ camera: t, compressed: n, maxDuration: o, sourceType: i, extension: a, success: function success(t) {var n = t.tempFilePath,s = t.duration,o = t.size,i = t.height,a = t.width;e(r({ errMsg: "chooseVideo:ok", tempFilePaths: [n], tempFiles: [{ name: t.tempFile && t.tempFile.name || "", path: n, size: o, type: t.tempFile && t.tempFile.type || "", width: a, height: i, duration: s, fileType: "video", cloudPath: "" }] }, "video"));}, fail: function fail(e) {c({ errMsg: e.errMsg.replace("chooseVideo:fail", s) });} });});}(t), t) : o(e, function (e) {var t = e.count,n = e.extension;return new Promise(function (e, o) {var i = uni.chooseFile;if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (i = wx.chooseMessageFile), "function" != typeof i) return o({ errMsg: s + " ????????? type ????????????????????????????????? image ??? video???" });i({ type: "all", count: t, extension: n, success: function success(t) {e(r(t));}, fail: function fail(e) {o({ errMsg: e.errMsg.replace("chooseFile:fail", s) });} });});}(t), t);};};}));var ft = "manual";function pt(e) {return { props: { localdata: { type: Array, default: function _default() {return [];} }, options: { type: [Object, Array], default: function _default() {return {};} }, spaceInfo: { type: Object, default: function _default() {return {};} }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: !1 }, gettree: { type: [Boolean, String], default: !1 }, gettreepath: { type: [Boolean, String], default: !1 }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: !1 }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: !1 } }, data: function data() {return { mixinDatacomLoading: !1, mixinDatacomHasMore: !1, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} };}, created: function created() {var _this19 = this;this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(function () {var e = [];return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach(function (t) {e.push(_this19[t]);}), e;}, function (e, t) {if (_this19.loadtime === ft) return;var n = !1;var s = [];for (var _r6 = 2; _r6 < e.length; _r6++) {e[_r6] !== t[_r6] && (s.push(e[_r6]), n = !0);}e[0] !== t[0] && (_this19.mixinDatacomPage.current = _this19.pageCurrent), _this19.mixinDatacomPage.size = _this19.pageSize, _this19.onMixinDatacomPropsChange(n, s);});}, methods: { onMixinDatacomPropsChange: function onMixinDatacomPropsChange(e, t) {}, mixinDatacomEasyGet: function mixinDatacomEasyGet() {var _this20 = this;var _ref30 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref30$getone = _ref30.getone,e = _ref30$getone === void 0 ? !1 : _ref30$getone,t = _ref30.success,n = _ref30.fail;this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then(function (n) {_this20.mixinDatacomLoading = !1;var _n$result = n.result,s = _n$result.data,r = _n$result.count;_this20.getcount && (_this20.mixinDatacomPage.count = r), _this20.mixinDatacomHasMore = s.length < _this20.pageSize;var o = e ? s.length ? s[0] : void 0 : s;_this20.mixinDatacomResData = o, t && t(o);}).catch(function (e) {_this20.mixinDatacomLoading = !1, _this20.mixinDatacomErrorMessage = e, n && n(e);}));}, mixinDatacomGet: function mixinDatacomGet() {var _n8;var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var n = e.database(this.spaceInfo);var s = t.action || this.action;s && (n = n.action(s));var r = t.collection || this.collection;n = Array.isArray(r) ? (_n8 = n).collection.apply(_n8, _toConsumableArray(r)) : n.collection(r);var o = t.where || this.where;o && Object.keys(o).length && (n = n.where(o));var i = t.field || this.field;i && (n = n.field(i));var a = t.foreignKey || this.foreignKey;a && (n = n.foreignKey(a));var c = t.groupby || this.groupby;c && (n = n.groupBy(c));var u = t.groupField || this.groupField;u && (n = n.groupField(u));!0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (n = n.distinct());var h = t.orderby || this.orderby;h && (n = n.orderBy(h));var l = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current,d = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size,f = void 0 !== t.getcount ? t.getcount : this.getcount,p = void 0 !== t.gettree ? t.gettree : this.gettree,g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath,m = { getCount: f },y = { limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel, startWith: void 0 !== t.startwith ? t.startwith : this.startwith };return p && (m.getTree = y), g && (m.getTreePath = y), n = n.skip(d * (l - 1)).limit(d).get(m), n;} } };}function gt(_x30, _x31) {return _gt.apply(this, arguments);}function _gt() {_gt = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee32(e, t) {var n, _e26, s;return _regenerator.default.wrap(function _callee32$(_context32) {while (1) {switch (_context32.prev = _context32.next) {case 0:n = "http://".concat(e, ":").concat(t, "/system/ping");_context32.prev = 1;_context32.next = 4;return s = { url: n, timeout: 500 }, new Promise(function (e, t) {E.request(_objectSpread(_objectSpread({}, s), {}, { success: function success(t) {e(t);}, fail: function fail(e) {t(e);} }));});case 4:_e26 = _context32.sent;return _context32.abrupt("return", !(!_e26.data || 0 !== _e26.data.code));case 8:_context32.prev = 8;_context32.t0 = _context32["catch"](1);return _context32.abrupt("return", !1);case 11:case "end":return _context32.stop();}}}, _callee32, null, [[1, 8]]);}));return _gt.apply(this, arguments);}function mt(e) {if (e.initUniCloudStatus && "rejected" !== e.initUniCloudStatus) return;var t = Promise.resolve();var n;n = 1, t = new Promise(function (e, t) {setTimeout(function () {e();}, n);}), e.isReady = !1, e.isDefault = !1;var s = e.auth();e.initUniCloudStatus = "pending", e.initUniCloud = t.then(function () {return s.getLoginState();}).then(function (e) {return e ? Promise.resolve() : s.signInAnonymously();}).then(function () {if (!u) return Promise.resolve();if (u && e.debugInfo) {var _e$debugInfo = e.debugInfo,_t13 = _e$debugInfo.address,_n9 = _e$debugInfo.servePort;return function () {var _ref31 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee31(e, t) {var n, _s10, _r7;return _regenerator.default.wrap(function _callee31$(_context31) {while (1) {switch (_context31.prev = _context31.next) {case 0:_s10 = 0;case 1:if (!(_s10 < e.length)) {_context31.next = 11;break;}_r7 = e[_s10];_context31.next = 5;return gt(_r7, t);case 5:if (!_context31.sent) {_context31.next = 8;break;}n = _r7;return _context31.abrupt("break", 11);case 8:_s10++;_context31.next = 1;break;case 11:return _context31.abrupt("return", { address: n, port: t });case 12:case "end":return _context31.stop();}}}, _callee31);}));return function (_x32, _x33) {return _ref31.apply(this, arguments);};}()(_t13, _n9);}}).then(function () {var _ref32 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},t = _ref32.address,n = _ref32.port;if (!u) return Promise.resolve();if (t) e.localAddress = t, e.localPort = n;else if (e.debugInfo) {var _t14 = console["app-plus" === h ? "error" : "warn"];var _n10 = "";"remote" === e.debugInfo.initialLaunchType ? (e.debugInfo.forceRemote = !0, _n10 = "??????????????????HBuilderX????????????????????????????????????????????????????????????HBuilderX??????uniCloud????????????????????????????????????????????????\n- ???????????????uniCloud????????????????????????????????????????????????\n- ????????????uniCloud??????????????????????????????????????????????????????????????????????????????????????????????????????\n- ?????????HBuilderX???????????????????????????????????????????????????HBuilderX?????????\n- ????????????????????????????????????HBuilderX?????????nodejs") : _n10 = "????????????uniCloud????????????????????????????????????????????????????????????????????????????????????\n- ????????????uniCloud??????????????????????????????????????????????????????????????????????????????????????????????????????\n- ?????????HBuilderX???????????????????????????????????????????????????HBuilderX?????????\n- ????????????????????????????????????HBuilderX?????????nodejs", "h5" === h && (_n10 += "\n- ??????????????????????????????????????????????????????????????????????????????????????????????????????"), _t14(_n10);}}).then(function () {Me(), e.isReady = !0, e.initUniCloudStatus = "fulfilled";}).catch(function (t) {console.error(t), e.initUniCloudStatus = "rejected";});}var yt = new ( /*#__PURE__*/function () {function _class4() {_classCallCheck(this, _class4);}_createClass(_class4, [{ key: "init", value: function init(e) {var t = {};var n = !1 !== e.debugFunction && u && ("h5" === h && navigator.userAgent.indexOf("HBuilderX") > 0 || "app-plus" === h);switch (e.provider) {case "tencent":t = Ne.init(Object.assign(e, { useDebugFunction: n }));break;case "aliyun":t = x.init(Object.assign(e, { useDebugFunction: n }));break;case "private":t = Be.init(Object.assign(e, { useDebugFunction: n }));break;default:throw new Error("??????????????????provider??????");}var s = l;u && s && !s.code && (t.debugInfo = s), mt(t), t.reInit = function () {mt(this);}, Xe(t), function (e) {var t = e.uploadFile;e.uploadFile = function (e) {return t.call(this, e);};}(t), at(t), function (e) {e.getCurrentUserInfo = lt, e.chooseAndUploadFile = dt.initChooseAndUploadFile(e), Object.assign(e, { get mixinDatacom() {return pt(e);} });}(t);return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach(function (e) {if (!t[e]) return;var n = t[e];t[e] = function () {return t.reInit(), n.apply(t, Array.from(arguments));}, t[e] = T(t[e], e).bind(t);}), t.init = this.init, t;} }]);return _class4;}())();(function () {{var e = d;var t = {};if (1 === e.length) t = e[0], yt = yt.init(t), yt.isDefault = !0;else {var _t15 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo"];var _n11;_n11 = e && e.length > 0 ? "???????????????????????????????????????uniCloud.init????????????????????????????????????" : f ? "????????????????????????????????????uniCloud??????????????????????????????" : "uni-app cli???????????????uniCloud????????????HBuilderX??????????????????????????????????????????uniCloud????????????????????????", _t15.forEach(function (e) {yt[e] = function () {return console.error(_n11), Promise.reject(new A({ code: "SYS_ERR", message: _n11 }));};});}Object.assign(yt, { get mixinDatacom() {return pt(yt);} }), yt.addInterceptor = w, yt.removeInterceptor = k, u && "h5" === h && (window.uniCloud = yt);}})();var _t = yt;exports.default = _t;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2), __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 3)["default"]))

/***/ }),

/***/ 10:
/*!********************************************!*\
  !*** D:/Code/uniapp/fruitsShop/pages.json ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 101:
/*!**************************************************!*\
  !*** D:/Code/uniapp/fruitsShop/common/poster.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var uposter = {
  // ????????????
  goods: {
    width: '750rpx',
    height: '1114rpx',
    background: '#ff6a6c',
    views: [{
      type: 'view',
      css: {
        left: '40rpx',
        top: '144rpx',
        background: '#fff',
        radius: '30rpx',
        width: '670rpx',
        height: '900rpx',
        shadow: '0 20rpx 48rpx rgba(0,0,0,.05)' } },


    // 1. ????????????
    {
      type: 'image',
      src: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLj1JIHX0icWAu4Jw920k6ZIAqNd9ZfHLalqWsweMLphLrcwRJCYr0hcyeY6Y5Kyaqibl6icTAykDWRA/132',
      mode: 'widthFix',
      css: {
        left: '50rpx',
        top: '40rpx',
        width: '84rpx',
        height: '84rpx',
        radius: '50%',
        color: '#999',
        shadow: '0px 0px 7px #f0f0f0' } },


    // 2. ????????????
    {
      type: 'text',
      text: 'Usecloud',
      css: {
        color: '#fff',
        left: '154rpx',
        top: '40rpx',
        fontSize: '32rpx',
        fontWeight: 'bold' } },


    {
      type: 'text',
      text: '???????????????????????????',
      css: {
        color: '#fff',
        left: '154rpx',
        top: '90rpx',
        fontSize: '24rpx' } },


    // 4. ?????????
    {
      type: 'image',
      src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7e00db99-ad65-4b9f-a74b-61bccb92b124/11bd19fa-6a70-49fd-9e71-72950828f6a8.jpg',
      mode: 'widthFix',
      css: {
        left: '72rpx',
        top: '176rpx',
        width: '606rpx',
        height: '606rpx',
        radius: '12rpx' } },


    {
      type: 'text',
      text: '???',
      css: {
        color: '#ff6a6c',
        left: '70rpx',
        top: '840rpx',
        fontSize: '26rpx' } },


    // 6. ????????????
    {
      type: 'text',
      text: '1339.90',
      css: {
        color: '#ff6a6c',
        left: '94rpx',
        top: '812rpx',
        fontSize: '56rpx',
        fontWeight: 'bold' } },


    // 7. ????????????
    {
      type: 'text',
      text: '??????10 Xiaomi/??????????????????10????????????865 1???????????????5G???????????? ??????865??????????????? 1?????????8K????????????',
      css: {
        maxLines: 2,
        width: '450rpx',
        color: '#333',
        left: '76rpx',
        top: '908rpx',
        fontSize: '30rpx',
        lineHeight: '50rpx' } },


    // 8. ???????????????
    {
      type: 'image',
      src: '',
      mode: 'widthFix',
      css: {
        left: '545rpx',
        top: '875rpx',
        width: '135rpx',
        height: '135rpx',
        background: '#fff' } },


    {
      type: 'view',
      css: {
        top: '1040rpx',
        height: '100rpx',
        background: '#ff6a6c' } },


    {
      type: 'view',
      css: {
        left: '190rpx',
        top: '1078rpx',
        border: '1px solid #fff',
        width: '70rpx' } },


    {
      type: 'text',
      text: '?????????????????????',
      css: {
        color: '#fff',
        left: '276rpx',
        top: '1060rpx',
        fontSize: '24rpx' } },


    {
      type: 'view',
      css: {
        left: '496rpx',
        top: '1078rpx',
        border: '1px solid #fff',
        width: '64rpx' } }] },




  // ??????????????????
  getGoodsData: function getGoodsData(member, goods, qrcode) {
    // ????????????
    this.goods.views[1].src = member.member_headimg;
    // ????????????
    this.goods.views[2].text = member.member_nickname;
    // ?????????
    this.goods.views[4].src = goods.img;
    // ????????????
    this.goods.views[6].text = '' + goods.price / 100;
    // ????????????
    this.goods.views[7].text = goods.name + ' ' + goods.name_pw;

    // ?????????
    this.goods.views[8].src = qrcode;
    return this.goods;
  },

  // ????????????
  member: {},


  // ???????????????
  fxs: {} };var _default =





uposter;exports.default = _default;

/***/ }),

/***/ 14:
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(item =>String.fromCharCode(item)).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('?????? log end ??????');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 17:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 18:
/*!**************************************************!*\
  !*** D:/Code/uniapp/fruitsShop/common/config.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var config = {
  debug: !0,
  version: '1.0.9',

  route: {
    home: '/pages/tabbar/home',
    login: '/pages/login/login',
    order: '/pages/user/order/order',
    pay: '/pages/pay/pay',
    search: '/pages/home/search/search',
    goods: '/pages/goods/goods',
    goodslist: '/pages/goods/goods-list' },

  provider: '',
  provider_names: {
    'weixin': '??????',
    'qq': 'QQ',
    'alipay': '?????????',
    'baidu': '??????',
    'toutiao': '??????' },


  const: {
    __app: '__app',
    __member: '__member',
    __access_token: 'USE_ACCESS_TOKEN' } };var _default =




config;exports.default = _default;

/***/ }),

/***/ 19:
/*!**************************************************!*\
  !*** D:/Code/uniapp/fruitsShop/common/common.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _config = _interopRequireDefault(__webpack_require__(/*! ./config.js */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var

Common = /*#__PURE__*/function () {
  function Common(arg) {_classCallCheck(this, Common);

  }

  /**
     * @description ???????????????
     */_createClass(Common, [{ key: "format", value: function format(
    date, fmt) {
      if (typeof date === 'string') {
        date = date.replace(/\.|\-/g, '/');
      }
      if (typeof date !== 'object') {
        date = new Date(date);
      }

      fmt = fmt || 'yyyy-MM-dd hh:mm:ss';
      var o = {
        "M+": date.getMonth() + 1, //??????   
        "d+": date.getDate(), //???   
        "h+": date.getHours(), //??????   
        "m+": date.getMinutes(), //???   
        "s+": date.getSeconds(), //???
        "q+": Math.floor((date.getMonth() + 3) / 3), //??????
        "S": date.getMilliseconds() //??????
      };
      if (/(y+)/.test(fmt))
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt))
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));}
      return fmt;
    } }, { key: "format_price", value: function format_price(

    _number, _sep) {
      _number = typeof _number != "undefined" && _number > 0 ? _number + '' : "";
      if (_number.indexOf('.') != -1) {
        _number = _number.split('.')[0];
      }
      _number = _number.replace(new RegExp("^(\\d{" + (_number.length % 3 ? _number.length % 3 : 0) + "})(\\d{3})", "g"),
      "$1 $2").replace(/(\d{3})+?/gi, "$1 ").trim();
      if (typeof _sep != "undefined" && _sep != " ") {
        _number = _number.replace(/\s/g, _sep);
      }
      return _number;
    } }, { key: "get_price_decimal", value: function get_price_decimal(

    _price) {
      _price = _price + '';

      if (_price.indexOf('.') != -1) {
        return '.' + _price.split('.')[1];
      } else {
        _price = Math.random(2).toFixed(2);
      }

      return this.get_price_decimal(_price);
    }

    /**
       * @description ???????????? guid
       */ }, { key: "guid", value: function guid()
    {
      return this.__s4() + this.__s4() + "-" + this.__s4() + "-" + this.__s4() + "-" + this.__s4() + "-" + this.__s4() +
      this.__s4() + this.__s4();
    } }, { key: "__s4", value: function __s4()
    {
      return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    }

    /**
       * @description ???????????? toast
       */ }, { key: "msg", value: function msg(
    title) {var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;var mask = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;var icon = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'none';
      if (!title) return;

      uni.showToast({
        title: title,
        duration: duration,
        mask: mask,
        icon: icon });

    }

    /**
       * @description ???????????? alert
       */ }, { key: "alert", value: function alert(
    content, callback) {















    } // uni.showModal({
    // 	title: '??????',
    // 	content: content,
    // 	showCancel: false,
    // 	success(res) {
    // 		if (res.confirm) {
    // 			if(typeof callback === 'function') {
    // 				callback();
    // 			}
    // 		} else if (res.cancel) {
    // 		}
    // 	}
    // })
    /**
     * @description ??????????????????
     */ }, { key: "get_params", value: function get_params(data) {var params = '';if (typeof data === 'object') {for (var _ in data) {params += '&' + encodeURIComponent(_) + '=' + encodeURIComponent(data[_]);}params = '?' + params.slice(1);} else if (typeof data === 'string') {if (data.indexOf('?') != -1) params = data;else params = '?' + data;} else {
        params = data;
      }

      return params;
    }

    /**
       * @description ??????????????????
       * */ }, { key: "trim", value: function trim(
    str) {
      return str.replace(/\s+/g, "");
    }

    /**
       * @description ??????????????????
       * */ }, { key: "register_env", value: function register_env(
    callback) {

      var __timer = setTimeout(function () {
        uni.getSystemInfo({
          success: function success(sis) {
            var env = {
              platform: '' };


            if (uni.canIUse('getAccountInfoSync')) {
              {
                var accountInfo = uni.getAccountInfoSync();
                if (accountInfo && accountInfo.miniProgram) {
                  env.appid = accountInfo.miniProgram.appId;
                }
              }
            }

            env.brand = sis.brand;
            env.language = sis.language;
            env.model = sis.model;
            env.platform = sis.platform;
            env.screenHeight = sis.screenHeight;
            env.screenWidth = sis.screenWidth;
            env.statusBarHeight = sis.statusBarHeight;
            env.system = sis.system;
            env.version = sis.version;
            env.windowHeight = sis.windowHeight;
            env.windowWidth = sis.windowWidth;
            env.pixelRatio = sis.pixelRatio;
            env.pixelRatio = sis.pixelRatio;
            env.mobileType = sis.platform;
            env.is_mp = false;
            env.is_wx = false;
            env.is_h5 = false;
            env.is_app = false;

            if (uni.canIUse('SDKVersion')) {
              env.sdkversion = my.SDKVersion;
            }


            env.platform = "weixin";
            env.platform_name = "??????";
            env.is_mp = true;
            env.is_wx = true;
















































            env.platform_icon = "icon" + env.platform;
            env.sis = sis;

            uni.getNetworkType({
              success: function success(res) {
                // console.log(res.networkType);
                env.networkType = res.networkType;
              },
              complete: function complete() {
                // console.log('set storage env', env);
                uni.setStorage({
                  key: '__env',
                  data: env });


                if (typeof callback === 'function') {
                  callback(env);
                }
              } });

          } });


        clearTimeout(__timer);
      }, 1);

    }

    /**
       * @description ????????????
       * */ }, { key: "get_env", value: function get_env(
    callback) {
      // return uni.getStorageSync('env');
      uni.getStorage({
        key: '__env',
        success: function success(res) {
          if (typeof callback === 'function') {
            callback(res.data || {});
          }
        } });

    } }, { key: "dom", value: function dom(

    a, b) {
      if (arguments.length === 1 && typeof arguments[0] == 'string') {
        if (document.querySelector) {
          return document.querySelector(arguments[0]);
        }
      } else if (arguments.length === 2) {
        if (typeof a === 'string')
        a = this.dom(a);
        if (a.querySelector) {
          return a.querySelector(b);
        }
      }
      return a;
    } }, { key: "domAll", value: function domAll(

    a, b) {
      if (arguments.length === 1 && typeof arguments[0] == 'string') {
        if (document.querySelectorAll) {
          return document.querySelectorAll(arguments[0]);
        }
      } else if (arguments.length === 2) {
        if (typeof a === 'string')
        a = this.dom(a);
        if (a.querySelectorAll) {
          return a.querySelectorAll(b);
        }
      }
      return a;
    }

    /**
       * @description ?????? info ??????
       * */ }, { key: "info", value: function info(
    msg) {

    } // console.info(msg)

    /**
     * @description ??????????????????
     * */ }, { key: "pages", value: function pages()
    {
      return getCurrentPages();
    }

    /**
       * @description ?????????????????????|????????????
       * */ }, { key: "back", value: function back()
    {
      if (getCurrentPages().length > 1) {
        uni.navigateBack({});
        return;
      }

      this.tohome();
    }

    /**
       * @description ????????????????????? offset
       */ }, { key: "offset", value: function offset(
    selector, callback) {
      var query = uni.createSelectorQuery().select(selector);
      // console.log('offset query', query);
      if (typeof callback === 'function') {
        query.boundingClientRect(function (res) {
          callback(res);
        });
      }
    }

    /**
       * @description ??????
       */ }, { key: "timerout", value: function timerout(
    callback) {var timer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
      var _timer = setTimeout(function () {
        if (typeof callback === 'function') {
          callback();
        }
        clearTimeout(_timer);
      }, timer);
    }

    /**
       * @description ???????????????
       */ }, { key: "tologin", value: function tologin()
    {
      uni.navigateTo({
        url: _config.default.route.login });

    }

    /**
       * @description ????????????
       */ }, { key: "tohome", value: function tohome()
    {
      uni.switchTab({
        url: _config.default.route.home });

    }

    /**
       * @description ???????????????
       */ }, { key: "toorder", value: function toorder()
    {
      uni.redirectTo({
        url: _config.default.route.order });

    }

    /**
       * @description ???????????????
       */ }, { key: "topay", value: function topay(
    params) {
      params.money = params.money || 0;
      params.type = params.type || 'navigate';

      if (params.type == 'redirect') {
        uni.redirectTo({
          url: _config.default.route.pay + this.get_params(params) });

        return;
      }

      uni.navigateTo({
        url: _config.default.route.pay + this.get_params(params) });

    }

    /**
       * @description ???????????????
       */ }, { key: "tosearch", value: function tosearch()
    {
      uni.reLaunch({
        url: _config.default.route.search });

    }

    /**
       * @description ?????????????????????
       */ }, { key: "togoods", value: function togoods(
    params) {
      uni.navigateTo({
        url: _config.default.route.goods + this.get_params(params) });

    }

    /**
       * @description ?????????????????????
       */ }, { key: "togoodslist", value: function togoodslist(
    params) {
      uni.navigateTo({
        url: _config.default.route.goodslist + this.get_params(params) });

    } }]);return Common;}();var _default =


new Common();exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 3)["default"]))

/***/ }),

/***/ 2:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 20:
/*!**********************************************!*\
  !*** D:/Code/uniapp/fruitsShop/common/db.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uniCloud, uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _config = _interopRequireDefault(__webpack_require__(/*! ./config.js */ 18));
var _common = _interopRequireDefault(__webpack_require__(/*! ./common.js */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var db = {};
var unidb = uniCloud.database();


db = new Proxy(db, {
  get: function get(target, key) {
    return new DbContext(key);
  } });


function DbContext(name) {
  this.table = name;
  this.where_obj = {};
  this.where_arr = [];
  this.where_str = '';
  this.response = {
    code: 200,
    datas: {},
    msg: '' };

}

DbContext.prototype = {
  table: '', // ????????????|??????
  where_obj: {}, // where ??????
  where_arr: [], // where ??????
  where_str: '', // where ??????
  response: {} // ??????????????????
};

DbContext.prototype.where = function (params) {
  if (typeof params === 'object') {
    Object.assign(this.where_obj, params);
  }
  if (typeof params === 'string') {
    this.where_arr.push(params);
  }
  return this;
};
DbContext.prototype.whereif = function (_flag, _obj) {
  if (_flag) this.where(_obj);
  return this;
};

DbContext.prototype.collection = function () {
  return unidb.collection(this.table);
};

DbContext.prototype.add = function (obj) {var _this = this;
  uni.showLoading({
    title: '?????????' });

  return this.collection().
  add(obj).
  then(function (res) {
    if (_config.default.debug) {
      // console.log(this.table + ' add', res);
    }
    if (res.result) {
      _this.response.datas = res.result;
      if (res.result.code === '') _this.response.code = 200;

      return Promise.resolve(_this.response);
    }

    return Promise.reject(res);
  }).
  catch(function (err) {
    if (_config.default.debug) {
      // console.log(this.table + ' add catch', err);
      _common.default.alert(JSON.stringify(err));
    }
    return Promise.reject(err);
  }).
  finally(function (res) {
    uni.hideLoading();
  });
};

DbContext.prototype.remove = function (_id) {var _this2 = this;
  uni.showLoading({
    title: '?????????' });


  if (_id) {
    return this.collection().
    doc(_id).
    remove().
    then(function (res) {
      if (_config.default.debug) {
        // console.log(this.table + ' remove', res);
      }
      if (res.result) {
        _this2.response.datas = res.result;
        if (res.result.code === '') _this2.response.code = 200;

        return Promise.resolve(_this2.response);
      }

      return Promise.reject(res);
    }).
    catch(function (err) {
      if (_config.default.debug) {
        // console.log(this.table + ' remove catch', err);
        _common.default.alert(JSON.stringify(err));
      }
      return Promise.reject(err);
    }).
    finally(function (res) {
      uni.hideLoading();
    });
  }
  this.where_str = this.where_arr.join(' && ');
  return this.collection().
  where(this.where_str || this.where_obj).
  remove().
  then(function (res) {
    if (_config.default.debug) {
      // console.log(this.table + ' remove', res);
    }
    if (res.result) {
      _this2.response.datas = res.result;
      if (res.result.code === '') _this2.response.code = 200;

      return Promise.resolve(_this2.response);
    }

    return Promise.reject(res);
  }).
  catch(function (err) {
    if (_config.default.debug) {
      // console.log(this.table + ' remove catch', err);
      _common.default.alert(JSON.stringify(err));
    }
    return Promise.reject(err);
  }).
  finally(function (res) {
    uni.hideLoading();
  });
};

DbContext.prototype.set = function (_id, obj) {var _this3 = this;
  uni.showLoading({
    title: '?????????' });

  return this.collection().
  doc(_id).
  set(obj).
  then(function (res) {
    if (_config.default.debug) {
      // console.log(this.table + ' set', res);
    }
    if (res.result) {
      _this3.response.datas = res.result;
      if (res.result.code === '') _this3.response.code = 200;

      return Promise.resolve(_this3.response);
    }

    return Promise.reject(res);
  }).
  catch(function (err) {
    if (_config.default.debug) {
      // console.log(this.table + ' set catch', err);
      _common.default.alert(JSON.stringify(err));
    }
    return Promise.reject(err);
  }).
  finally(function (res) {
    uni.hideLoading();
  });
};

DbContext.prototype.update = function (_id, obj) {var _this4 = this;
  uni.showLoading({
    title: '?????????' });


  if (_id && typeof _id === 'string') {
    return this.collection().
    doc(_id).
    update(obj).
    then(function (res) {
      if (_config.default.debug) {
        // console.log(this.table + ' update', res);
      }
      if (res.result) {
        _this4.response.datas = res.result;
        if (res.result.code === '') _this4.response.code = 200;

        return Promise.resolve(_this4.response);
      }

      return Promise.reject(res);
    }).
    catch(function (err) {
      if (_config.default.debug) {
        // console.log(this.table + ' doc update catch', err);
        _common.default.alert(JSON.stringify(err));
      }
      return Promise.reject(err);
    }).
    finally(function (res) {
      uni.hideLoading();
    });
  }

  if (typeof _id === 'object') obj = _id;
  this.where_str = this.where_arr.join(' && ');
  return this.collection().
  where(this.where_str || this.where_obj).
  update(obj).
  then(function (res) {
    if (_config.default.debug) {
      // console.log(this.table + ' update', res);
    }
    if (res.result) {
      _this4.response.datas = res.result;
      if (res.result.code === '') _this4.response.code = 200;

      return Promise.resolve(_this4.response);
    }

    return Promise.reject(res);
  }).
  catch(function (err) {
    if (_config.default.debug) {
      // console.log(this.table + ' update catch', err);
      _common.default.alert(JSON.stringify(err));
    }
    return Promise.reject(err);
  }).
  finally(function (res) {
    uni.hideLoading();
  });
};

// 
DbContext.prototype.tofirst = function (_id) {var _this5 = this;
  uni.showNavigationBarLoading();
  if (_id) {
    return this.collection().
    doc(_id).
    get({
      getOne: true }).

    then(function (res) {
      if (_config.default.debug) {
        // console.log(this.table + ' doc.tofirst', res);
      }

      if (res.result && res.result.code === '') {
        _this5.response.code = 200;
        _this5.response.datas = res.result.data || {};

        return Promise.resolve(_this5.response);
      }

      return Promise.reject(res);
    }).
    catch(function (err) {
      if (_config.default.debug) {
        // console.log(this.table + ' doc.tofirst catch', err);
        _common.default.alert(JSON.stringify(err));
      }
      return Promise.reject(err);
    }).
    finally(function (res) {
      uni.hideNavigationBarLoading();
    });
  }
  this.where_str = this.where_arr.join(' && ');
  return this.collection().
  where(this.where_str || this.where_obj).
  get({
    getOne: true }).

  then(function (res) {
    if (_config.default.debug) {
      // console.log(this.table + ' tofirst', res);
    }
    if (res.result && res.result.code === '') {
      _this5.response.code = 200;
      _this5.response.datas = res.result.data || {};

      return Promise.resolve(_this5.response);
    }

    return Promise.reject(res);
  }).
  catch(function (err) {
    if (_config.default.debug) {
      // console.log(this.table + ' tofirst catch', err);
      _common.default.alert(JSON.stringify(err));
    }
    // return Promise.reject(err);
  }).
  finally(function (res) {
    uni.hideNavigationBarLoading();
  });
};

DbContext.prototype.tolist = function (req) {var _this6 = this;
  // ?????? ?????? ??????
  req = Object.assign({
    page: 1,
    rows: 30,
    orderby: '' },
  req);
  uni.showNavigationBarLoading();
  this.where_str = this.where_arr.join(' && ');
  return this.collection().
  where(this.where_str || this.where_obj).
  skip((req.page - 1) * req.rows).
  limit(req.rows).
  orderBy(req.orderby).
  get().
  then(function (res) {
    if (_config.default.debug) {
      // console.log(this.table + ' tolist', res);
    }
    if (res.result) {
      _this6.response.datas = res.result.data;

      if (res.result.code === '') _this6.response.code = 200;

      return Promise.resolve(_this6.response);
    }

    return Promise.reject(res);
  }).
  catch(function (err) {
    if (_config.default.debug) {
      // console.log(this.table + ' totable catch', err);
      _common.default.alert(JSON.stringify(err));
    }
    return Promise.reject(err);
  }).
  finally(function (res) {
    uni.hideNavigationBarLoading();
  });
};

DbContext.prototype.totable = function (req) {var _this7 = this;
  // ?????? ?????? ??????
  req = Object.assign({
    page: 1,
    rows: 10,
    orderby: '' },
  req);
  uni.showNavigationBarLoading();
  this.where_str = this.where_arr.join(' && ');
  return this.collection().
  where(this.where_str || this.where_obj).
  skip((req.page - 1) * req.rows).
  limit(req.rows).
  orderBy(req.orderby).
  get({
    getCount: true }).

  then(function (res) {
    if (_config.default.debug) {
      // console.log(this.table + ' totable', res);
    }
    if (res.result) {
      _this7.response.datas.rows = res.result.data;
      _this7.response.datas.total = res.result.count;

      if (res.result.code === '') _this7.response.code = 200;

      return Promise.resolve(_this7.response);
    }

    return Promise.reject(res);
  }).
  catch(function (err) {
    if (_config.default.debug) {
      // console.log(this.table + ' totable catch', err);
      _common.default.alert(JSON.stringify(err));
    }
    return Promise.reject(err);
  }).
  finally(function (res) {
    uni.hideNavigationBarLoading();
  });
};var _default =

db;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 3)["default"]))

/***/ }),

/***/ 21:
/*!************************************************!*\
  !*** D:/Code/uniapp/fruitsShop/common/func.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, uniCloud) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _config = _interopRequireDefault(__webpack_require__(/*! ./config.js */ 18));
var _common = _interopRequireDefault(__webpack_require__(/*! ./common.js */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var func = {};

func = new Proxy(func, {
  get: function get(target, key) {
    return new FuncContext(key);
  } });


function FuncContext(name) {
  this.funcname = name;
  this.response = {
    code: 200,
    datas: {},
    msg: '' };

}

FuncContext.prototype = {
  funcname: '', // ???????????????
  response: {} // ??????????????????
};

/**
    * ???????????????
    * action controller ????????????
    * data controller ????????????
    * */
FuncContext.prototype.call = function (action, data) {var _this = this;
  uni.showNavigationBarLoading();
  return uniCloud.callFunction({
    name: this.funcname,
    data: {
      action: action,
      data: data } }).

  then(function (res) {
    if (_config.default.debug) {
      // console.log(this.funcname + '/' + action + ' call', res);
    }
    if (res.result) {
      _this.response.code = res.result.code === 0 ? 200 : res.result.code;
      if (_this.response.code != 200) {
        _this.response.msg = res.result.msg || res.result.message;
      } else {
        _this.response.msg = res.result.msg;
      }
      _this.response.datas = res.result.datas || res.result;
      return Promise.resolve(_this.response);
    }

    return Promise.reject(res);
  }).catch(function (err) {
    if (_config.default.debug) {
      // console.log(this.table + ' call catch', err);
      _common.default.alert(JSON.stringify(err));
    }
    return Promise.reject(err);
  }).finally(function (res) {
    uni.hideNavigationBarLoading();
  });
};var _default =

func;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 3)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 22:
/*!*************************************************!*\
  !*** D:/Code/uniapp/fruitsShop/common/store.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 14));
var _config = _interopRequireDefault(__webpack_require__(/*! ./config.js */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_vue.default.use(_vuex.default);

var store = new _vuex.default.Store({
  state: {
    islogin: false,
    member: {},
    token: '',
    token_expired: 0,

    __key_member: 'usemall_member',
    __key_token: 'uni_id_token',
    __key_token_expired: 'uni_id_token_expired' },

  mutations: {
    // ????????????
    login: function login(state, res) {
      // ???????????????
      state.islogin = true;

      state.member = res.member;
      state.token = res.user.token;
      state.token_expired = res.user.tokenExpired;

      // ???????????? member ??????
      uni.setStorage({
        key: state.__key_member,
        data: state.member });


      // ??????uid token ??????
      uni.setStorage({
        key: state.__key_token,
        data: state.token });

      // ??????uid token_expired ??????
      uni.setStorage({
        key: state.__key_token_expired,
        data: state.token_expired });

    },

    // ?????? Token
    loadToken: function loadToken(state) {
      state.member = uni.getStorageSync(state.__key_member);
      state.token = uni.getStorageSync(state.__key_token);
      state.token_expired = uni.getStorageSync(state.__key_token_expired);

      if (state.token_expired > new Date().getTime()) {
        state.islogin = true;
      }
    },

    // ?????? 
    logout: function logout(state) {
      state.islogin = false;
      state.member = {};
      state.token = '';
      state.token_expired = 0;

      uni.removeStorage({
        key: state.__key_member });

      uni.removeStorage({
        key: state.__key_token });

      uni.removeStorage({
        key: state.__key_token_expired });

    },

    // token ??????
    token: function token(state, _token, token_expired) {
      state.token = _token;
      state.token_expired = token_expired;

      // ??????uid token ??????
      uni.setStorage({
        key: state.__key_token,
        data: state.token });

      // ??????uid token_expired ??????
      uni.setStorage({
        key: state.__key_token_expired,
        data: state.token_expired });

    },

    // ?????? member ??????
    putMember: function putMember(state, user) {
      state.member = user;

      // ???????????? member ??????
      uni.setStorage({
        key: state.__key_member,
        data: state.member });

    } },

  actions: {} });var _default =




store;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 3)["default"]))

/***/ }),

/***/ 3:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 5);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var realAtob;

var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");}

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;var result = '';var r1;var r2;var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 |
      (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));

      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
      r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
      String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // ??????atob??????????????????????????????????????????`const Base64 = {atob};Base64.atob('xxxx')`??????????????????
  realAtob = atob;
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('?????????????????????????????????????????????????????????' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context????????????
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// ??????????????????
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime ??????????????? uni ???????????????????????????????????? uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

function getLocale() {
  // ???????????? $locale
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return wx.getSystemInfoSync().language || 'zh-Hans';
}

function setLocale(locale) {
  var app = getApp();
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {return fn({
        locale: locale });});

    return true;
  }
  return false;
}

var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}

if (typeof global !== 'undefined') {
  global.getLocale = getLocale;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale,
  setLocale: setLocale,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function addUuid(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // ?????????????????????????????????????????????????????????__id__???????????????????????????mp-weixin??????navigateTo???AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// ?????? api ???????????????
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue ??? false ???????????????????????????????????????????????????????????????????????????
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// ??????????????????
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// ???????????? key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}????????????????????? key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// ???????????? returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// ??????????????? api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// ?????? api ??????????????????
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// ?????? api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
  try {
    // ??????????????? triggerEvent ?????????
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}

function initHook(name, options, isComponent) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // ?????? Vue.prototype ???????????????
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"usemall.210601","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('?????? Vue ??? data ???????????????????????? data ???????????????????????? data ?????????????????? vm ??????????????????????????????????????????????????????', data);
      }
    }
  } else {
    try {
      // ??? data ?????????
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // ????????????????????? render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // ?????????????????????????????????????????????
    properties.generic = {
      type: Object,
      value: null };

    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // ??????????????????????????? $slots ??? props??????????????? vueSlots ????????? $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO ???????????? mpvue ??? mp ??????
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for ???????????????????????????', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent ????????????????????? event ??????
  if (isCustom) {// ???????????????
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// ???????????????????????? event ??? detail ??????
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent ?????????????????????
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // ???????????? scoped slots ??????????????????????????????????????????
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('?????????????????????');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // ????????? web-view ?????? dataset ?????????
  if (!eventOpts) {
    return console.warn('?????????????????????');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao ?????????????????? scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // ??????????????????????????????????????????????????????????????????????????????
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var messages = {};

var locale;

{
  locale = wx.getSystemInfoSync().language;
}

function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}

initI18nMessages();

var i18n = (0, _uniI18n.initVueI18n)(
locale,
{});

var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {var _this2 = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this2.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    } } };


var setLocale$1 = i18n.setLocale;
var getLocale$1 = i18n.getLocale;

function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale() });

  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {return watch(v);});
    } });

}

function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}

// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // ???????????????????????????getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// ?????????????????????????????????????????????????????? onShow ??? onLaunch ??????
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// ?????? ???2.2.3 ????????????????????? 2.3.0 ??? nextTick ??????
          console.error('?????????????????????????????????????????? ?????????????????????-??????-????????????-????????????????????? ?????????`2.3.0`??????');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm ???????????? globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // ??????????????? globalData
  appOptions.globalData = vm.$options.globalData || {};
  // ??? methods ?????????????????? getApp() ???
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initAppLocale(_vue.default, vm, wx.getSystemInfoSync().language || 'zh-Hans');

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // ??????????????????(????????????:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // ??????????????????
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO ???????????? for ?????? scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail ?????????,value ?????????(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // ?????? multipleSlots ??????????????? bug??????????????????????????? ??? u-list?????????????????????
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // ??????????????????
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // ????????? vue ??????
        this.$vm = new VueComponent(options);

        // ??????$slots,$scopedSlots???????????????????????????$slots???
        initSlots(this.$vm, properties.vueSlots);

        // ???????????? setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // ????????? props ???????????? true????????????????????? false ????????? created,ready ??????, ??? attached ?????????
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // ?????? mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 351:
/*!*****************************************************************!*\
  !*** D:/Code/uniapp/fruitsShop/components/use-qrcode/qrcode.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var QRCode = {};
(function () {
  /**
               * ?????????????????????utf8??????
               * unicode BMP?????????65535?????????
               * @param {num} code
               * return {array}
               */
  function unicodeFormat8(code) {
    // 1 byte
    var c0, c1, c2;
    if (code < 128) {
      return [code];
      // 2 bytes
    } else if (code < 2048) {
      c0 = 192 + (code >> 6);
      c1 = 128 + (code & 63);
      return [c0, c1];
      // 3 bytes
    } else {
      c0 = 224 + (code >> 12);
      c1 = 128 + (code >> 6 & 63);
      c2 = 128 + (code & 63);
      return [c0, c1, c2];
    }
  }
  /**
     * ??????????????????utf8???????????????
     * @param {string} string
     * @return {array}
     */
  function getUTF8Bytes(string) {
    var utf8codes = [];
    for (var i = 0; i < string.length; i++) {
      var code = string.charCodeAt(i);
      var utf8 = unicodeFormat8(code);
      for (var j = 0; j < utf8.length; j++) {
        utf8codes.push(utf8[j]);
      }
    }
    return utf8codes;
  }
  /**
     * ?????????????????????
     * @param {string} data              ???????????????????????????
     * @param {num} errorCorrectLevel ????????????
     */
  function QRCodeAlg(data, errorCorrectLevel) {
    this.typeNumber = -1; //??????
    this.errorCorrectLevel = errorCorrectLevel;
    this.modules = null; //?????????????????????????????????
    this.moduleCount = 0; //????????????
    this.dataCache = null; //????????????
    this.rsBlocks = null; //??????????????????
    this.totalDataCount = -1; //?????????????????????
    this.data = data;
    this.utf8bytes = getUTF8Bytes(data);
    this.make();
  }
  QRCodeAlg.prototype = {
    constructor: QRCodeAlg,
    /**
                             * ???????????????????????????
                             * @return {num} ????????????
                             */
    getModuleCount: function getModuleCount() {
      return this.moduleCount;
    },
    /**
        * ??????
        */
    make: function make() {
      this.getRightType();
      this.dataCache = this.createData();
      this.createQrcode();
    },
    /**
        * ??????????????????????????????
        * @param  {bool} test ???????????????????????????????????????
        * @param  {num} maskPattern ???????????????
        */
    makeImpl: function makeImpl(maskPattern) {
      this.moduleCount = this.typeNumber * 4 + 17;
      this.modules = new Array(this.moduleCount);
      for (var row = 0; row < this.moduleCount; row++) {
        this.modules[row] = new Array(this.moduleCount);
      }
      this.setupPositionProbePattern(0, 0);
      this.setupPositionProbePattern(this.moduleCount - 7, 0);
      this.setupPositionProbePattern(0, this.moduleCount - 7);
      this.setupPositionAdjustPattern();
      this.setupTimingPattern();
      this.setupTypeInfo(true, maskPattern);
      if (this.typeNumber >= 7) {
        this.setupTypeNumber(true);
      }
      this.mapData(this.dataCache, maskPattern);
    },
    /**
        * ????????????????????????????????????
        * @param  {num} row ??????????????????????????????
        * @param  {num} col ??????????????????????????????
        */
    setupPositionProbePattern: function setupPositionProbePattern(row, col) {
      for (var r = -1; r <= 7; r++) {
        if (row + r <= -1 || this.moduleCount <= row + r) continue;
        for (var c = -1; c <= 7; c++) {
          if (col + c <= -1 || this.moduleCount <= col + c) continue;
          if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
            this.modules[row + r][col + c] = true;
          } else {
            this.modules[row + r][col + c] = false;
          }
        }
      }
    },
    /**
        * ???????????????
        * @return {[type]} [description]
        */
    createQrcode: function createQrcode() {
      var minLostPoint = 0;
      var pattern = 0;
      var bestModules = null;
      for (var i = 0; i < 8; i++) {
        this.makeImpl(i);
        var lostPoint = QRUtil.getLostPoint(this);
        if (i == 0 || minLostPoint > lostPoint) {
          minLostPoint = lostPoint;
          pattern = i;
          bestModules = this.modules;
        }
      }
      this.modules = bestModules;
      this.setupTypeInfo(false, pattern);
      if (this.typeNumber >= 7) {
        this.setupTypeNumber(false);
      }
    },
    /**
        * ??????????????????
        * @return {[type]} [description]
        */
    setupTimingPattern: function setupTimingPattern() {
      for (var r = 8; r < this.moduleCount - 8; r++) {
        if (this.modules[r][6] != null) {
          continue;
        }
        this.modules[r][6] = r % 2 == 0;
        if (this.modules[6][r] != null) {
          continue;
        }
        this.modules[6][r] = r % 2 == 0;
      }
    },
    /**
        * ??????????????????
        * @return {[type]} [description]
        */
    setupPositionAdjustPattern: function setupPositionAdjustPattern() {
      var pos = QRUtil.getPatternPosition(this.typeNumber);
      for (var i = 0; i < pos.length; i++) {
        for (var j = 0; j < pos.length; j++) {
          var row = pos[i];
          var col = pos[j];
          if (this.modules[row][col] != null) {
            continue;
          }
          for (var r = -2; r <= 2; r++) {
            for (var c = -2; c <= 2; c++) {
              if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
                this.modules[row + r][col + c] = true;
              } else {
                this.modules[row + r][col + c] = false;
              }
            }
          }
        }
      }
    },
    /**
        * ?????????????????????7?????????????????????
        * @param  {bool} test ????????????????????????????????????
        * @return {[type]}      [description]
        */
    setupTypeNumber: function setupTypeNumber(test) {
      var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
      for (var i = 0; i < 18; i++) {
        var mod = !test && (bits >> i & 1) == 1;
        this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
        this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
      }
    },
    /**
        * ???????????????????????????????????????????????????
        * @param  {bool} test
        * @param  {num} maskPattern ????????????
        * @return {}
        */
    setupTypeInfo: function setupTypeInfo(test, maskPattern) {
      var data = QRErrorCorrectLevel[this.errorCorrectLevel] << 3 | maskPattern;
      var bits = QRUtil.getBCHTypeInfo(data);
      // vertical
      for (var i = 0; i < 15; i++) {
        var mod = !test && (bits >> i & 1) == 1;
        if (i < 6) {
          this.modules[i][8] = mod;
        } else if (i < 8) {
          this.modules[i + 1][8] = mod;
        } else {
          this.modules[this.moduleCount - 15 + i][8] = mod;
        }
        // horizontal
        var mod = !test && (bits >> i & 1) == 1;
        if (i < 8) {
          this.modules[8][this.moduleCount - i - 1] = mod;
        } else if (i < 9) {
          this.modules[8][15 - i - 1 + 1] = mod;
        } else {
          this.modules[8][15 - i - 1] = mod;
        }
      }
      // fixed module
      this.modules[this.moduleCount - 8][8] = !test;
    },
    /**
        * ????????????
        * @return {[type]} [description]
        */
    createData: function createData() {
      var buffer = new QRBitBuffer();
      var lengthBits = this.typeNumber > 9 ? 16 : 8;
      buffer.put(4, 4); //????????????
      buffer.put(this.utf8bytes.length, lengthBits);
      for (var i = 0, l = this.utf8bytes.length; i < l; i++) {
        buffer.put(this.utf8bytes[i], 8);
      }
      if (buffer.length + 4 <= this.totalDataCount * 8) {
        buffer.put(0, 4);
      }
      // padding
      while (buffer.length % 8 != 0) {
        buffer.putBit(false);
      }
      // padding
      while (true) {
        if (buffer.length >= this.totalDataCount * 8) {
          break;
        }
        buffer.put(QRCodeAlg.PAD0, 8);
        if (buffer.length >= this.totalDataCount * 8) {
          break;
        }
        buffer.put(QRCodeAlg.PAD1, 8);
      }
      return this.createBytes(buffer);
    },
    /**
        * ???????????????
        * @param  {buffer} buffer ????????????
        * @return {[type]}
        */
    createBytes: function createBytes(buffer) {
      var offset = 0;
      var maxDcCount = 0;
      var maxEcCount = 0;
      var length = this.rsBlock.length / 3;
      var rsBlocks = new Array();
      for (var i = 0; i < length; i++) {
        var count = this.rsBlock[i * 3 + 0];
        var totalCount = this.rsBlock[i * 3 + 1];
        var dataCount = this.rsBlock[i * 3 + 2];
        for (var j = 0; j < count; j++) {
          rsBlocks.push([dataCount, totalCount]);
        }
      }
      var dcdata = new Array(rsBlocks.length);
      var ecdata = new Array(rsBlocks.length);
      for (var r = 0; r < rsBlocks.length; r++) {
        var dcCount = rsBlocks[r][0];
        var ecCount = rsBlocks[r][1] - dcCount;
        maxDcCount = Math.max(maxDcCount, dcCount);
        maxEcCount = Math.max(maxEcCount, ecCount);
        dcdata[r] = new Array(dcCount);
        for (var i = 0; i < dcdata[r].length; i++) {
          dcdata[r][i] = 0xff & buffer.buffer[i + offset];
        }
        offset += dcCount;
        var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
        var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
        var modPoly = rawPoly.mod(rsPoly);
        ecdata[r] = new Array(rsPoly.getLength() - 1);
        for (var i = 0; i < ecdata[r].length; i++) {
          var modIndex = i + modPoly.getLength() - ecdata[r].length;
          ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
        }
      }
      var data = new Array(this.totalDataCount);
      var index = 0;
      for (var i = 0; i < maxDcCount; i++) {
        for (var r = 0; r < rsBlocks.length; r++) {
          if (i < dcdata[r].length) {
            data[index++] = dcdata[r][i];
          }
        }
      }
      for (var i = 0; i < maxEcCount; i++) {
        for (var r = 0; r < rsBlocks.length; r++) {
          if (i < ecdata[r].length) {
            data[index++] = ecdata[r][i];
          }
        }
      }
      return data;

    },
    /**
        * ?????????????????????????????????
        * @param  {} data
        * @param  {} maskPattern
        * @return {}
        */
    mapData: function mapData(data, maskPattern) {
      var inc = -1;
      var row = this.moduleCount - 1;
      var bitIndex = 7;
      var byteIndex = 0;
      for (var col = this.moduleCount - 1; col > 0; col -= 2) {
        if (col == 6) col--;
        while (true) {
          for (var c = 0; c < 2; c++) {
            if (this.modules[row][col - c] == null) {
              var dark = false;
              if (byteIndex < data.length) {
                dark = (data[byteIndex] >>> bitIndex & 1) == 1;
              }
              var mask = QRUtil.getMask(maskPattern, row, col - c);
              if (mask) {
                dark = !dark;
              }
              this.modules[row][col - c] = dark;
              bitIndex--;
              if (bitIndex == -1) {
                byteIndex++;
                bitIndex = 7;
              }
            }
          }
          row += inc;
          if (row < 0 || this.moduleCount <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    } };

  /**
          * ????????????
          */
  QRCodeAlg.PAD0 = 0xEC;
  QRCodeAlg.PAD1 = 0x11;
  //---------------------------------------------------------------------
  // ???????????????????????????
  //---------------------------------------------------------------------
  var QRErrorCorrectLevel = [1, 0, 3, 2];
  //---------------------------------------------------------------------
  // ????????????
  //---------------------------------------------------------------------
  var QRMaskPattern = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7 };

  //---------------------------------------------------------------------
  // ?????????
  //---------------------------------------------------------------------
  var QRUtil = {
    /*
                 ?????????????????????????????????
                  */
    PATTERN_POSITION_TABLE: [
    [],
    [6, 18],
    [6, 22],
    [6, 26],
    [6, 30],
    [6, 34],
    [6, 22, 38],
    [6, 24, 42],
    [6, 26, 46],
    [6, 28, 50],
    [6, 30, 54],
    [6, 32, 58],
    [6, 34, 62],
    [6, 26, 46, 66],
    [6, 26, 48, 70],
    [6, 26, 50, 74],
    [6, 30, 54, 78],
    [6, 30, 56, 82],
    [6, 30, 58, 86],
    [6, 34, 62, 90],
    [6, 28, 50, 72, 94],
    [6, 26, 50, 74, 98],
    [6, 30, 54, 78, 102],
    [6, 28, 54, 80, 106],
    [6, 32, 58, 84, 110],
    [6, 30, 58, 86, 114],
    [6, 34, 62, 90, 118],
    [6, 26, 50, 74, 98, 122],
    [6, 30, 54, 78, 102, 126],
    [6, 26, 52, 78, 104, 130],
    [6, 30, 56, 82, 108, 134],
    [6, 34, 60, 86, 112, 138],
    [6, 30, 58, 86, 114, 142],
    [6, 34, 62, 90, 118, 146],
    [6, 30, 54, 78, 102, 126, 150],
    [6, 24, 50, 76, 102, 128, 154],
    [6, 28, 54, 80, 106, 132, 158],
    [6, 32, 58, 84, 110, 136, 162],
    [6, 26, 54, 82, 110, 138, 166],
    [6, 30, 58, 86, 114, 142, 170]],

    G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
    G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
    G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
    /*
                                                             BCH??????????????????
                                                              */
    getBCHTypeInfo: function getBCHTypeInfo(data) {
      var d = data << 10;
      while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
        d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
      }
      return (data << 10 | d) ^ QRUtil.G15_MASK;
    },
    /*
       BCH??????????????????
        */
    getBCHTypeNumber: function getBCHTypeNumber(data) {
      var d = data << 12;
      while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
        d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
      }
      return data << 12 | d;
    },
    /*
       ??????BCH?????????
        */
    getBCHDigit: function getBCHDigit(data) {
      var digit = 0;
      while (data != 0) {
        digit++;
        data >>>= 1;
      }
      return digit;
    },
    /*
       ???????????????????????????????????????
        */
    getPatternPosition: function getPatternPosition(typeNumber) {
      return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
    },
    /*
       ????????????
        */
    getMask: function getMask(maskPattern, i, j) {
      switch (maskPattern) {
        case QRMaskPattern.PATTERN000:
          return (i + j) % 2 == 0;
        case QRMaskPattern.PATTERN001:
          return i % 2 == 0;
        case QRMaskPattern.PATTERN010:
          return j % 3 == 0;
        case QRMaskPattern.PATTERN011:
          return (i + j) % 3 == 0;
        case QRMaskPattern.PATTERN100:
          return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
        case QRMaskPattern.PATTERN101:
          return i * j % 2 + i * j % 3 == 0;
        case QRMaskPattern.PATTERN110:
          return (i * j % 2 + i * j % 3) % 2 == 0;
        case QRMaskPattern.PATTERN111:
          return (i * j % 3 + (i + j) % 2) % 2 == 0;
        default:
          throw new Error("bad maskPattern:" + maskPattern);}

    },
    /*
       ??????RS??????????????????
        */
    getErrorCorrectPolynomial: function getErrorCorrectPolynomial(errorCorrectLength) {
      var a = new QRPolynomial([1], 0);
      for (var i = 0; i < errorCorrectLength; i++) {
        a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
      }
      return a;
    },
    /*
       ????????????
        */
    getLostPoint: function getLostPoint(qrCode) {
      var moduleCount = qrCode.getModuleCount(),
      lostPoint = 0,
      darkCount = 0;
      for (var row = 0; row < moduleCount; row++) {
        var sameCount = 0;
        var head = qrCode.modules[row][0];
        for (var col = 0; col < moduleCount; col++) {
          var current = qrCode.modules[row][col];
          //level 3 ??????
          if (col < moduleCount - 6) {
            if (current && !qrCode.modules[row][col + 1] && qrCode.modules[row][col + 2] && qrCode.modules[row][col + 3] && qrCode.modules[row][col + 4] && !qrCode.modules[row][col + 5] && qrCode.modules[row][col + 6]) {
              if (col < moduleCount - 10) {
                if (qrCode.modules[row][col + 7] && qrCode.modules[row][col + 8] && qrCode.modules[row][col + 9] && qrCode.modules[row][col + 10]) {
                  lostPoint += 40;
                }
              } else if (col > 3) {
                if (qrCode.modules[row][col - 1] && qrCode.modules[row][col - 2] && qrCode.modules[row][col - 3] && qrCode.modules[row][col - 4]) {
                  lostPoint += 40;
                }
              }
            }
          }
          //level 2 ??????
          if (row < moduleCount - 1 && col < moduleCount - 1) {
            var count = 0;
            if (current) count++;
            if (qrCode.modules[row + 1][col]) count++;
            if (qrCode.modules[row][col + 1]) count++;
            if (qrCode.modules[row + 1][col + 1]) count++;
            if (count == 0 || count == 4) {
              lostPoint += 3;
            }
          }
          //level 1 ??????
          if (head ^ current) {
            sameCount++;
          } else {
            head = current;
            if (sameCount >= 5) {
              lostPoint += 3 + sameCount - 5;
            }
            sameCount = 1;
          }
          //level 4 ??????
          if (current) {
            darkCount++;
          }
        }
      }
      for (var col = 0; col < moduleCount; col++) {
        var sameCount = 0;
        var head = qrCode.modules[0][col];
        for (var row = 0; row < moduleCount; row++) {
          var current = qrCode.modules[row][col];
          //level 3 ??????
          if (row < moduleCount - 6) {
            if (current && !qrCode.modules[row + 1][col] && qrCode.modules[row + 2][col] && qrCode.modules[row + 3][col] && qrCode.modules[row + 4][col] && !qrCode.modules[row + 5][col] && qrCode.modules[row + 6][col]) {
              if (row < moduleCount - 10) {
                if (qrCode.modules[row + 7][col] && qrCode.modules[row + 8][col] && qrCode.modules[row + 9][col] && qrCode.modules[row + 10][col]) {
                  lostPoint += 40;
                }
              } else if (row > 3) {
                if (qrCode.modules[row - 1][col] && qrCode.modules[row - 2][col] && qrCode.modules[row - 3][col] && qrCode.modules[row - 4][col]) {
                  lostPoint += 40;
                }
              }
            }
          }
          //level 1 ??????
          if (head ^ current) {
            sameCount++;
          } else {
            head = current;
            if (sameCount >= 5) {
              lostPoint += 3 + sameCount - 5;
            }
            sameCount = 1;
          }
        }
      }
      // LEVEL4
      var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
      lostPoint += ratio * 10;
      return lostPoint;
    } };


  //---------------------------------------------------------------------
  // QRMath?????????????????????
  //---------------------------------------------------------------------
  var QRMath = {
    /*
                 ???n?????????a^m
                  */
    glog: function glog(n) {
      if (n < 1) {
        throw new Error("glog(" + n + ")");
      }
      return QRMath.LOG_TABLE[n];
    },
    /*
       ???a^m?????????n
        */
    gexp: function gexp(n) {
      while (n < 0) {
        n += 255;
      }
      while (n >= 256) {
        n -= 255;
      }
      return QRMath.EXP_TABLE[n];
    },
    EXP_TABLE: new Array(256),
    LOG_TABLE: new Array(256) };


  for (var i = 0; i < 8; i++) {
    QRMath.EXP_TABLE[i] = 1 << i;
  }
  for (var i = 8; i < 256; i++) {
    QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
  }
  for (var i = 0; i < 255; i++) {
    QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
  }
  //---------------------------------------------------------------------
  // QRPolynomial ?????????
  //---------------------------------------------------------------------
  /**
   * ????????????
   * @param {Array} num   ??????
   * @param {num} shift a^shift
   */
  function QRPolynomial(num, shift) {
    if (num.length == undefined) {
      throw new Error(num.length + "/" + shift);
    }
    var offset = 0;
    while (offset < num.length && num[offset] == 0) {
      offset++;
    }
    this.num = new Array(num.length - offset + shift);
    for (var i = 0; i < num.length - offset; i++) {
      this.num[i] = num[i + offset];
    }
  }
  QRPolynomial.prototype = {
    get: function get(index) {
      return this.num[index];
    },
    getLength: function getLength() {
      return this.num.length;
    },
    /**
        * ???????????????
        * @param  {QRPolynomial} e ???????????????
        * @return {[type]}   [description]
        */
    multiply: function multiply(e) {
      var num = new Array(this.getLength() + e.getLength() - 1);
      for (var i = 0; i < this.getLength(); i++) {
        for (var j = 0; j < e.getLength(); j++) {
          num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
        }
      }
      return new QRPolynomial(num, 0);
    },
    /**
        * ??????????????????
        * @param  {QRPolynomial} e ????????????
        * @return {}
        */
    mod: function mod(e) {
      var tl = this.getLength(),
      el = e.getLength();
      if (tl - el < 0) {
        return this;
      }
      var num = new Array(tl);
      for (var i = 0; i < tl; i++) {
        num[i] = this.get(i);
      }
      while (num.length >= el) {
        var ratio = QRMath.glog(num[0]) - QRMath.glog(e.get(0));

        for (var i = 0; i < e.getLength(); i++) {
          num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
        }
        while (num[0] == 0) {
          num.shift();
        }
      }
      return new QRPolynomial(num, 0);
    } };


  //---------------------------------------------------------------------
  // RS_BLOCK_TABLE
  //---------------------------------------------------------------------
  /*
  ???????????????????????????[??????, ????????????????????????, ????????????????????????]
   */
  var RS_BLOCK_TABLE = [
  // L
  // M
  // Q
  // H
  // 1
  [1, 26, 19],
  [1, 26, 16],
  [1, 26, 13],
  [1, 26, 9],

  // 2
  [1, 44, 34],
  [1, 44, 28],
  [1, 44, 22],
  [1, 44, 16],

  // 3
  [1, 70, 55],
  [1, 70, 44],
  [2, 35, 17],
  [2, 35, 13],

  // 4
  [1, 100, 80],
  [2, 50, 32],
  [2, 50, 24],
  [4, 25, 9],

  // 5
  [1, 134, 108],
  [2, 67, 43],
  [2, 33, 15, 2, 34, 16],
  [2, 33, 11, 2, 34, 12],

  // 6
  [2, 86, 68],
  [4, 43, 27],
  [4, 43, 19],
  [4, 43, 15],

  // 7
  [2, 98, 78],
  [4, 49, 31],
  [2, 32, 14, 4, 33, 15],
  [4, 39, 13, 1, 40, 14],

  // 8
  [2, 121, 97],
  [2, 60, 38, 2, 61, 39],
  [4, 40, 18, 2, 41, 19],
  [4, 40, 14, 2, 41, 15],

  // 9
  [2, 146, 116],
  [3, 58, 36, 2, 59, 37],
  [4, 36, 16, 4, 37, 17],
  [4, 36, 12, 4, 37, 13],

  // 10
  [2, 86, 68, 2, 87, 69],
  [4, 69, 43, 1, 70, 44],
  [6, 43, 19, 2, 44, 20],
  [6, 43, 15, 2, 44, 16],

  // 11
  [4, 101, 81],
  [1, 80, 50, 4, 81, 51],
  [4, 50, 22, 4, 51, 23],
  [3, 36, 12, 8, 37, 13],

  // 12
  [2, 116, 92, 2, 117, 93],
  [6, 58, 36, 2, 59, 37],
  [4, 46, 20, 6, 47, 21],
  [7, 42, 14, 4, 43, 15],

  // 13
  [4, 133, 107],
  [8, 59, 37, 1, 60, 38],
  [8, 44, 20, 4, 45, 21],
  [12, 33, 11, 4, 34, 12],

  // 14
  [3, 145, 115, 1, 146, 116],
  [4, 64, 40, 5, 65, 41],
  [11, 36, 16, 5, 37, 17],
  [11, 36, 12, 5, 37, 13],

  // 15
  [5, 109, 87, 1, 110, 88],
  [5, 65, 41, 5, 66, 42],
  [5, 54, 24, 7, 55, 25],
  [11, 36, 12],

  // 16
  [5, 122, 98, 1, 123, 99],
  [7, 73, 45, 3, 74, 46],
  [15, 43, 19, 2, 44, 20],
  [3, 45, 15, 13, 46, 16],

  // 17
  [1, 135, 107, 5, 136, 108],
  [10, 74, 46, 1, 75, 47],
  [1, 50, 22, 15, 51, 23],
  [2, 42, 14, 17, 43, 15],

  // 18
  [5, 150, 120, 1, 151, 121],
  [9, 69, 43, 4, 70, 44],
  [17, 50, 22, 1, 51, 23],
  [2, 42, 14, 19, 43, 15],

  // 19
  [3, 141, 113, 4, 142, 114],
  [3, 70, 44, 11, 71, 45],
  [17, 47, 21, 4, 48, 22],
  [9, 39, 13, 16, 40, 14],

  // 20
  [3, 135, 107, 5, 136, 108],
  [3, 67, 41, 13, 68, 42],
  [15, 54, 24, 5, 55, 25],
  [15, 43, 15, 10, 44, 16],

  // 21
  [4, 144, 116, 4, 145, 117],
  [17, 68, 42],
  [17, 50, 22, 6, 51, 23],
  [19, 46, 16, 6, 47, 17],

  // 22
  [2, 139, 111, 7, 140, 112],
  [17, 74, 46],
  [7, 54, 24, 16, 55, 25],
  [34, 37, 13],

  // 23
  [4, 151, 121, 5, 152, 122],
  [4, 75, 47, 14, 76, 48],
  [11, 54, 24, 14, 55, 25],
  [16, 45, 15, 14, 46, 16],

  // 24
  [6, 147, 117, 4, 148, 118],
  [6, 73, 45, 14, 74, 46],
  [11, 54, 24, 16, 55, 25],
  [30, 46, 16, 2, 47, 17],

  // 25
  [8, 132, 106, 4, 133, 107],
  [8, 75, 47, 13, 76, 48],
  [7, 54, 24, 22, 55, 25],
  [22, 45, 15, 13, 46, 16],

  // 26
  [10, 142, 114, 2, 143, 115],
  [19, 74, 46, 4, 75, 47],
  [28, 50, 22, 6, 51, 23],
  [33, 46, 16, 4, 47, 17],

  // 27
  [8, 152, 122, 4, 153, 123],
  [22, 73, 45, 3, 74, 46],
  [8, 53, 23, 26, 54, 24],
  [12, 45, 15, 28, 46, 16],

  // 28
  [3, 147, 117, 10, 148, 118],
  [3, 73, 45, 23, 74, 46],
  [4, 54, 24, 31, 55, 25],
  [11, 45, 15, 31, 46, 16],

  // 29
  [7, 146, 116, 7, 147, 117],
  [21, 73, 45, 7, 74, 46],
  [1, 53, 23, 37, 54, 24],
  [19, 45, 15, 26, 46, 16],

  // 30
  [5, 145, 115, 10, 146, 116],
  [19, 75, 47, 10, 76, 48],
  [15, 54, 24, 25, 55, 25],
  [23, 45, 15, 25, 46, 16],

  // 31
  [13, 145, 115, 3, 146, 116],
  [2, 74, 46, 29, 75, 47],
  [42, 54, 24, 1, 55, 25],
  [23, 45, 15, 28, 46, 16],

  // 32
  [17, 145, 115],
  [10, 74, 46, 23, 75, 47],
  [10, 54, 24, 35, 55, 25],
  [19, 45, 15, 35, 46, 16],

  // 33
  [17, 145, 115, 1, 146, 116],
  [14, 74, 46, 21, 75, 47],
  [29, 54, 24, 19, 55, 25],
  [11, 45, 15, 46, 46, 16],

  // 34
  [13, 145, 115, 6, 146, 116],
  [14, 74, 46, 23, 75, 47],
  [44, 54, 24, 7, 55, 25],
  [59, 46, 16, 1, 47, 17],

  // 35
  [12, 151, 121, 7, 152, 122],
  [12, 75, 47, 26, 76, 48],
  [39, 54, 24, 14, 55, 25],
  [22, 45, 15, 41, 46, 16],

  // 36
  [6, 151, 121, 14, 152, 122],
  [6, 75, 47, 34, 76, 48],
  [46, 54, 24, 10, 55, 25],
  [2, 45, 15, 64, 46, 16],

  // 37
  [17, 152, 122, 4, 153, 123],
  [29, 74, 46, 14, 75, 47],
  [49, 54, 24, 10, 55, 25],
  [24, 45, 15, 46, 46, 16],

  // 38
  [4, 152, 122, 18, 153, 123],
  [13, 74, 46, 32, 75, 47],
  [48, 54, 24, 14, 55, 25],
  [42, 45, 15, 32, 46, 16],

  // 39
  [20, 147, 117, 4, 148, 118],
  [40, 75, 47, 7, 76, 48],
  [43, 54, 24, 22, 55, 25],
  [10, 45, 15, 67, 46, 16],

  // 40
  [19, 148, 118, 6, 149, 119],
  [18, 75, 47, 31, 76, 48],
  [34, 54, 24, 34, 55, 25],
  [20, 45, 15, 61, 46, 16]];


  /**
                              * ??????????????????????????????
                              * @return {[type]} [description]
                              */
  QRCodeAlg.prototype.getRightType = function () {
    for (var typeNumber = 1; typeNumber < 41; typeNumber++) {
      var rsBlock = RS_BLOCK_TABLE[(typeNumber - 1) * 4 + this.errorCorrectLevel];
      if (rsBlock == undefined) {
        throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + this.errorCorrectLevel);
      }
      var length = rsBlock.length / 3;
      var totalDataCount = 0;
      for (var i = 0; i < length; i++) {
        var count = rsBlock[i * 3 + 0];
        var dataCount = rsBlock[i * 3 + 2];
        totalDataCount += dataCount * count;
      }
      var lengthBytes = typeNumber > 9 ? 2 : 1;
      if (this.utf8bytes.length + lengthBytes < totalDataCount || typeNumber == 40) {
        this.typeNumber = typeNumber;
        this.rsBlock = rsBlock;
        this.totalDataCount = totalDataCount;
        break;
      }
    }
  };

  //---------------------------------------------------------------------
  // QRBitBuffer
  //---------------------------------------------------------------------
  function QRBitBuffer() {
    this.buffer = new Array();
    this.length = 0;
  }
  QRBitBuffer.prototype = {
    get: function get(index) {
      var bufIndex = Math.floor(index / 8);
      return this.buffer[bufIndex] >>> 7 - index % 8 & 1;
    },
    put: function put(num, length) {
      for (var i = 0; i < length; i++) {
        this.putBit(num >>> length - i - 1 & 1);
      }
    },
    putBit: function putBit(bit) {
      var bufIndex = Math.floor(this.length / 8);
      if (this.buffer.length <= bufIndex) {
        this.buffer.push(0);
      }
      if (bit) {
        this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
      }
      this.length++;
    } };




  // xzedit
  var qrcodeAlgObjCache = [];
  /**
                               * ??????????????????????????????????????????
                               * @param  {????????????} opt ????????????
                               * @return {}
                               */
  QRCode = function QRCode(opt) {
    //??????????????????
    this.options = {
      text: '',
      size: 256,
      correctLevel: 3,
      background: '#ffffff',
      foreground: '#000000',
      pdground: '#000000',
      image: '',
      imageSize: 30,
      canvasId: opt.canvasId,
      context: opt.context,
      usingComponents: opt.usingComponents,
      showLoading: opt.showLoading,
      loadingText: opt.loadingText };

    if (typeof opt === 'string') {// ?????????ASCII?????????
      opt = {
        text: opt };

    }
    if (opt) {
      for (var i in opt) {
        this.options[i] = opt[i];
      }
    }
    //??????QRCodeAlg?????????????????????
    var qrCodeAlg = null;
    for (var i = 0, l = qrcodeAlgObjCache.length; i < l; i++) {
      if (qrcodeAlgObjCache[i].text == this.options.text && qrcodeAlgObjCache[i].text.correctLevel == this.options.correctLevel) {
        qrCodeAlg = qrcodeAlgObjCache[i].obj;
        break;
      }
    }
    if (i == l) {
      qrCodeAlg = new QRCodeAlg(this.options.text, this.options.correctLevel);
      qrcodeAlgObjCache.push({
        text: this.options.text,
        correctLevel: this.options.correctLevel,
        obj: qrCodeAlg });

    }
    /**
       * ???????????????????????????
       * @param {Obj} config
       * @param {Number} config.row ???x??????
       * @param {Number} config.col ???y??????
       * @param {Number} config.count ????????????
       * @param {Number} config.options ?????????options
       * @return {String}
       */
    var getForeGround = function getForeGround(config) {
      var options = config.options;
      if (options.pdground && (
      config.row > 1 && config.row < 5 && config.col > 1 && config.col < 5 ||
      config.row > config.count - 6 && config.row < config.count - 2 && config.col > 1 && config.col < 5 ||
      config.row > 1 && config.row < 5 && config.col > config.count - 6 && config.col < config.count - 2))
      {
        return options.pdground;
      }
      return options.foreground;
    };
    // ??????canvas
    var createCanvas = function createCanvas(options) {
      if (options.showLoading) {
        uni.showLoading({
          title: options.loadingText,
          mask: true });

      }
      var ctx = uni.createCanvasContext(options.canvasId, options.context);
      var count = qrCodeAlg.getModuleCount();
      var ratioSize = options.size;
      var ratioImgSize = options.imageSize;
      //????????????????????????
      var tileW = (ratioSize / count).toPrecision(4);
      var tileH = (ratioSize / count).toPrecision(4);
      //??????
      for (var row = 0; row < count; row++) {
        for (var col = 0; col < count; col++) {
          var w = Math.ceil((col + 1) * tileW) - Math.floor(col * tileW);
          var h = Math.ceil((row + 1) * tileW) - Math.floor(row * tileW);
          var foreground = getForeGround({
            row: row,
            col: col,
            count: count,
            options: options });

          ctx.setFillStyle(qrCodeAlg.modules[row][col] ? foreground : options.background);
          ctx.fillRect(Math.round(col * tileW), Math.round(row * tileH), w, h);
        }
      }
      if (options.image) {




        // ???????????????
        var drawRoundedRect = function drawRoundedRect(ctxi, x, y, width, height, r, lineWidth, fill, stroke) {
          ctxi.setLineWidth(lineWidth);
          ctxi.setFillStyle(options.background);
          ctxi.setStrokeStyle(options.background);
          ctxi.beginPath(); // draw top and top right corner 
          ctxi.moveTo(x + r, y);
          ctxi.arcTo(x + width, y, x + width, y + r, r); // draw right side and bottom right corner 
          ctxi.arcTo(x + width, y + height, x + width - r, y + height, r); // draw bottom and bottom left corner 
          ctxi.arcTo(x, y + height, x, y + height - r, r); // draw left and top left corner 
          ctxi.arcTo(x, y, x + r, y, r);
          ctxi.closePath();
          if (fill) {
            ctxi.fill();
          }
          if (stroke) {
            ctxi.stroke();
          }
        };var x = Number(((ratioSize - ratioImgSize) / 2).toFixed(2));var y = Number(((ratioSize - ratioImgSize) / 2).toFixed(2));drawRoundedRect(ctx, x, y, ratioImgSize, ratioImgSize, 2, 6, true, true);ctx.drawImage(options.image, x, y, ratioImgSize, ratioImgSize);
      }
      setTimeout(function () {
        ctx.draw(true, function () {
          // ?????????????????????
          setTimeout(function () {
            uni.canvasToTempFilePath({
              width: options.width,
              height: options.height,
              destWidth: options.width,
              destHeight: options.height,
              canvasId: options.canvasId,
              quality: Number(1),
              success: function success(res) {
                if (options.cbResult) {
                  options.cbResult(res.tempFilePath);
                }
              },
              fail: function fail(res) {
                if (options.cbResult) {
                  options.cbResult(res);
                }
              },
              complete: function complete() {
                if (options.showLoading) {
                  uni.hideLoading();
                }
              } },
            options.context);
          }, options.text.length + 100);
        });
      }, options.usingComponents ? 0 : 150);
    };
    createCanvas(this.options);
    // ?????????
    var empty = function empty(v) {
      var tp = typeof v,
      rt = false;
      if (tp == "number" && String(v) == "") {
        rt = true;
      } else if (tp == "undefined") {
        rt = true;
      } else if (tp == "object") {
        if (JSON.stringify(v) == "{}" || JSON.stringify(v) == "[]" || v == null) rt = true;
      } else if (tp == "string") {
        if (v == "" || v == "undefined" || v == "null" || v == "{}" || v == "[]") rt = true;
      } else if (tp == "function") {
        rt = false;
      }
      return rt;
    };
  };
  QRCode.prototype.clear = function (fn) {
    var ctx = uni.createCanvasContext(this.options.canvasId, this.options.context);
    ctx.clearRect(0, 0, this.options.size, this.options.size);
    ctx.draw(false, function () {
      if (fn) {
        fn();
      }
    });
  };
})();var _default =

QRCode;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 3)["default"]))

/***/ }),

/***/ 366:
/*!*******************************************************************************************!*\
  !*** D:/Code/uniapp/fruitsShop/uni_modules/lime-painter/components/lime-painter/utils.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.sleep = sleep;exports.isNumber = isNumber;exports.toPx = toPx;exports.compareVersion = compareVersion;exports.base64ToPath = base64ToPath;exports.pathToBase64 = pathToBase64;exports.getImageInfo = getImageInfo;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 6));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}var networkReg = /^(http|\/\/)/;
function sleep(delay) {
  return new Promise(function (resolve) {return setTimeout(resolve, delay);});
}
// ????????????
var cache = {};
function isNumber(value) {
  return /^-?\d+(\.\d+)?$/.test(value);
}
function toPx(value, baseSize) {var isDecimal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // ???????????????
  if (typeof value === 'number') {
    return value;
  }
  // ????????????????????????
  if (isNumber(value)) {
    return value * 1;
  }
  // ???????????????
  if (typeof value === 'string') {
    var reg = /^-?([0-9]+)?([.]{1}[0-9]+){0,1}(em|rpx|px|%)$/g;
    var results = reg.exec(value);
    if (!value || !results) {
      return 0;
    }
    var unit = results[3];
    value = parseFloat(value);
    var res = 0;
    if (unit === 'rpx') {
      res = uni.upx2px(value);
    } else if (unit === 'px') {
      res = value * 1;
    } else if (unit === '%') {
      res = value * toPx(baseSize) / 100;
    } else if (unit === 'em') {
      res = value * toPx(baseSize || 14);
    }
    return isDecimal ? res.toFixed(2) * 1 : Math.round(res);
  }
}

// ????????????
function compareVersion(v1, v2) {
  v1 = v1.split('.');
  v2 = v2.split('.');
  var len = Math.max(v1.length, v2.length);
  while (v1.length < len) {
    v1.push('0');
  }
  while (v2.length < len) {
    v2.push('0');
  }
  for (var i = 0; i < len; i++) {
    var num1 = parseInt(v1[i], 10);
    var num2 = parseInt(v2[i], 10);

    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }
  return 0;
}

var prefix = function prefix() {




  return wx;













};


var base64ToArrayBuffer = function base64ToArrayBuffer(data) {






























































  return uni.base64ToArrayBuffer(data);

};


/**
    * base64?????????
    * @param {Object} base64
    */
function base64ToPath(base64) {var _ref =
  /data:image\/(\w+);base64,(.*)/.exec(base64) || [],_ref2 = _slicedToArray(_ref, 3),format = _ref2[1],bodyData = _ref2[2];

  return new Promise(function (resolve, reject) {

    var fs = uni.getFileSystemManager();
    //??????????????????
    if (!format) {
      console.error('ERROR_BASE64SRC_PARSE');
      reject(new Error('ERROR_BASE64SRC_PARSE'));
    }
    var time = new Date().getTime();
    var pre = prefix();
    var filePath = "".concat(pre.env.USER_DATA_PATH, "/").concat(time, ".").concat(format);
    var buffer = base64ToArrayBuffer(bodyData);
    fs.writeFile({
      filePath: filePath,
      data: buffer,
      encoding: 'binary',
      success: function success() {
        resolve(filePath);
      },
      fail: function fail(err) {
        console.error('??????base64????????????', JSON.stringify(err));
        reject(err);
      } });











































  });
}

/**
   * ?????????base64
   * @param {Object} string
   */
function pathToBase64(path) {
  return new Promise(function (resolve, reject) {




























































    if (uni.canIUse('getFileSystemManager')) {
      uni.getFileSystemManager().readFile({
        filePath: path,
        encoding: 'base64',
        success: function success(res) {
          resolve('data:image/png;base64,' + res.data);
        },
        fail: function fail(error) {
          console.error('urlToBase64 error:', JSON.stringify(error));
          reject(error);
        } });

    }





















  });
}
























function getImageInfo(img, isH5PathToBase64) {var isReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return new Promise( /*#__PURE__*/function () {var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(resolve, reject) {var base64Reg, localReg, imgName;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              base64Reg = /^data:image\/(\w+);base64/;
              localReg = /^\.|^\/(?=[^\/])/;if (!







              base64Reg.test(img)) {_context.next = 12;break;}if (
              cache[img]) {_context.next = 11;break;}
              imgName = img;_context.next = 7;return (
                base64ToPath(img));case 7:img = _context.sent;
              cache[imgName] = img;_context.next = 12;break;case 11:

              img = cache[img];case 12:



              if (cache[img] && cache[img].errMsg && !isReset) {
                resolve(cache[img]);
              } else {
                uni.getImageInfo({
                  src: img,
                  success: function success(image) {

                    image.path = localReg.test(img) ? "/".concat(image.path) : image.path;




                    image.originSrc = img;
                    cache[img] = image;
                    resolve(cache[img]);
                  },
                  fail: function fail(err) {
                    resolve({ path: img });
                    console.error("getImageInfo:fail ".concat(img, " failed ").concat(JSON.stringify(err)));
                  } });

              }case 13:case "end":return _context.stop();}}}, _callee);}));return function (_x, _x2) {return _ref3.apply(this, arguments);};}());

}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 3)["default"]))

/***/ }),

/***/ 367:
/*!******************************************************************************************!*\
  !*** D:/Code/uniapp/fruitsShop/uni_modules/lime-painter/components/lime-painter/draw.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.Draw = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 6));var _utils = __webpack_require__(/*! ./utils */ 366);




var _gradient = __webpack_require__(/*! ./gradient */ 368);


var _qrcode = _interopRequireDefault(__webpack_require__(/*! ./qrcode */ 369));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e2) {throw _e2;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e3) {didErr = true;err = _e3;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var


Draw = /*#__PURE__*/function () {
  function Draw(context, canvas) {var use2dCanvas = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;var isH5PathToBase64 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;var sleep = arguments.length > 4 ? arguments[4] : undefined;_classCallCheck(this, Draw);
    this.ctx = context;
    this.canvas = canvas || null;
    this.use2dCanvas = use2dCanvas;
    this.isH5PathToBase64 = isH5PathToBase64;
    this.sleep = sleep;
    this.count = 0;
    this.progress = 0;
  }_createClass(Draw, [{ key: "roundRect", value: function roundRect(
    x, y, w, h, r) {var fill = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;var stroke = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
      if (r < 0) return;var

      ctx =
      this.ctx;
      ctx.beginPath();
      if (!r) {
        ctx.rect(x, y, w, h);
      } else {var _ref =





        r || {},_ref$borderTopLeftRad = _ref.borderTopLeftRadius,tl = _ref$borderTopLeftRad === void 0 ? r || 0 : _ref$borderTopLeftRad,_ref$borderTopRightRa = _ref.borderTopRightRadius,tr = _ref$borderTopRightRa === void 0 ? r || 0 : _ref$borderTopRightRa,_ref$borderBottomRigh = _ref.borderBottomRightRadius,br = _ref$borderBottomRigh === void 0 ? r || 0 : _ref$borderBottomRigh,_ref$borderBottomLeft = _ref.borderBottomLeftRadius,bl = _ref$borderBottomLeft === void 0 ? r || 0 : _ref$borderBottomLeft;
        // ?????????
        ctx.arc(x + w - br, y + h - br, br, 0, Math.PI * 0.5);
        ctx.lineTo(x + bl, y + h);
        // ?????????
        ctx.arc(x + bl, y + h - bl, bl, Math.PI * 0.5, Math.PI);
        ctx.lineTo(x, y + tl);
        // ?????????
        ctx.arc(x + tl, y + tl, tl, Math.PI, Math.PI * 1.5);
        ctx.lineTo(x + w - tr, y);
        // ?????????
        ctx.arc(x + w - tr, y + tr, tr, Math.PI * 1.5, Math.PI * 2);
        ctx.lineTo(x + w, y + h - br);
      }
      ctx.closePath();
      if (stroke) ctx.stroke();
      if (fill) ctx.fill();
    } }, { key: "setTransform", value: function setTransform(
    box, _ref2)


    {var transform = _ref2.transform,_ref2$transformOrigin = _ref2.transformOrigin,o = _ref2$transformOrigin === void 0 ? 'center center' : _ref2$transformOrigin;var

      ctx =
      this.ctx;var _ref3 =








      transform || {},_ref3$scaleX = _ref3.scaleX,scaleX = _ref3$scaleX === void 0 ? 1 : _ref3$scaleX,_ref3$scaleY = _ref3.scaleY,scaleY = _ref3$scaleY === void 0 ? 1 : _ref3$scaleY,_ref3$translateX = _ref3.translateX,translateX = _ref3$translateX === void 0 ? 0 : _ref3$translateX,_ref3$translateY = _ref3.translateY,translateY = _ref3$translateY === void 0 ? 0 : _ref3$translateY,_ref3$rotate = _ref3.rotate,rotate = _ref3$rotate === void 0 ? 0 : _ref3$rotate,_ref3$skewX = _ref3.skewX,skewX = _ref3$skewX === void 0 ? 0 : _ref3$skewX,_ref3$skewY = _ref3.skewY,skewY = _ref3$skewY === void 0 ? 0 : _ref3$skewY;var

      x =



      box.left,y = box.top,w = box.width,h = box.height;
      translateX = (0, _utils.toPx)(translateX, w) || 0;
      translateY = (0, _utils.toPx)(translateY, h) || 0;

      var yMaps = {
        "top": (0, _utils.toPx)('0%', 1),
        "center": (0, _utils.toPx)('50%', 1, true),
        "bottom": (0, _utils.toPx)('100%', 1) };

      var xMaps = {
        "left": (0, _utils.toPx)('0%', 1),
        "center": (0, _utils.toPx)('50%', 1, true),
        "right": (0, _utils.toPx)('100%', 1) };

      o = o.split(' ').filter(function (v, i) {return i < 2;}).reduce(function (c, v) {
        if (/\d+/.test(v)) {
          var n = (0, _utils.toPx)(v, 1, true) / (/px|rpx$/.test(v) ? (0, _utils.isNumber)(c.x) ? h : w : 1);
          return (0, _utils.isNumber)(c.x) ? Object.assign(c, {
            y: n }) :
          Object.assign(c, {
            x: n });

        } else {
          return (0, _utils.isNumber)(xMaps[v]) && !(0, _utils.isNumber)(c.x) ? Object.assign(c, {
            x: xMaps[v] }) :
          Object.assign(c, {
            y: yMaps[v] || 0.5 });

        }
      }, {});
      ctx.scale(scaleX, scaleY);
      var offset = {
        x: w * (scaleX > 0 ? 1 : -1) * o.x + (x + translateX) / scaleX,
        y: h * (scaleY > 0 ? 1 : -1) * o.y + (y + translateY) / scaleY };

      ctx.translate(offset.x, offset.y);
      if (rotate) {
        ctx.rotate(rotate * Math.PI / 180);
      }
      if (skewX || skewY) {
        ctx.transform(1, Math.tan(skewY * Math.PI / 180), Math.tan(skewX * Math.PI / 180), 1, 0, 0);
      }
      return {
        x: -w * o.x,
        y: -h * o.y,
        w: w,
        h: h };

    } }, { key: "setBackground", value: function setBackground(
    bg, w, h) {var

      ctx =
      this.ctx;
      if (!bg) {

        ctx.setFillStyle('transparent');




      } else if (_gradient.GD.isGradient(bg)) {
        _gradient.GD.doGradient(bg, w, h, ctx);
      } else {
        ctx.setFillStyle(bg);
      }
    } }, { key: "setShadow", value: function setShadow(_ref4)


    {var _ref4$boxShadow = _ref4.boxShadow,bs = _ref4$boxShadow === void 0 ? [] : _ref4$boxShadow;var

      ctx =
      this.ctx;
      if (bs.length) {var _bs = _slicedToArray(
        bs, 4),x = _bs[0],y = _bs[1],b = _bs[2],c = _bs[3];
        ctx.setShadow(x, y, b, c);
      }
    } }, { key: "setBorder", value: function setBorder(
    box, style) {var _ref11;var

      ctx =
      this.ctx;var

      w =

      box.width,h = box.height;var

      border =





      style.border,borderBottom = style.borderBottom,borderTop = style.borderTop,borderRight = style.borderRight,borderLeft = style.borderLeft,r = style.borderRadius;var _ref5 =




      border || {},_ref5$borderWidth = _ref5.borderWidth,bw = _ref5$borderWidth === void 0 ? 0 : _ref5$borderWidth,bs = _ref5.borderStyle,bc = _ref5.borderColor;var _ref6 =




      borderBottom || {},_ref6$borderBottomWid = _ref6.borderBottomWidth,bbw = _ref6$borderBottomWid === void 0 ? bw : _ref6$borderBottomWid,_ref6$borderBottomSty = _ref6.borderBottomStyle,bbs = _ref6$borderBottomSty === void 0 ? bs : _ref6$borderBottomSty,_ref6$borderBottomCol = _ref6.borderBottomColor,bbc = _ref6$borderBottomCol === void 0 ? bc : _ref6$borderBottomCol;var _ref7 =




      borderTop || {},_ref7$borderTopWidth = _ref7.borderTopWidth,btw = _ref7$borderTopWidth === void 0 ? bw : _ref7$borderTopWidth,_ref7$borderTopStyle = _ref7.borderTopStyle,bts = _ref7$borderTopStyle === void 0 ? bs : _ref7$borderTopStyle,_ref7$borderTopColor = _ref7.borderTopColor,btc = _ref7$borderTopColor === void 0 ? bc : _ref7$borderTopColor;var _ref8 =




      borderRight || {},_ref8$borderRightWidt = _ref8.borderRightWidth,brw = _ref8$borderRightWidt === void 0 ? bw : _ref8$borderRightWidt,_ref8$borderRightStyl = _ref8.borderRightStyle,brs = _ref8$borderRightStyl === void 0 ? bs : _ref8$borderRightStyl,_ref8$borderRightColo = _ref8.borderRightColor,brc = _ref8$borderRightColo === void 0 ? bc : _ref8$borderRightColo;var _ref9 =




      borderLeft || {},_ref9$borderLeftWidth = _ref9.borderLeftWidth,blw = _ref9$borderLeftWidth === void 0 ? bw : _ref9$borderLeftWidth,_ref9$borderLeftStyle = _ref9.borderLeftStyle,bls = _ref9$borderLeftStyle === void 0 ? bs : _ref9$borderLeftStyle,_ref9$borderLeftColor = _ref9.borderLeftColor,blc = _ref9$borderLeftColor === void 0 ? bc : _ref9$borderLeftColor;var _ref10 =






      r || (_ref11 = {
        r: r }, _defineProperty(_ref11, "r",
      r), _defineProperty(_ref11, "r",
      r), _defineProperty(_ref11, "r",
      r), _ref11),_ref10$borderTopLeftR = _ref10.borderTopLeftRadius,tl = _ref10$borderTopLeftR === void 0 ? r || 0 : _ref10$borderTopLeftR,_ref10$borderTopRight = _ref10.borderTopRightRadius,tr = _ref10$borderTopRight === void 0 ? r || 0 : _ref10$borderTopRight,_ref10$borderBottomRi = _ref10.borderBottomRightRadius,br = _ref10$borderBottomRi === void 0 ? r || 0 : _ref10$borderBottomRi,_ref10$borderBottomLe = _ref10.borderBottomLeftRadius,bl = _ref10$borderBottomLe === void 0 ? r || 0 : _ref10$borderBottomLe;

      if (!borderBottom && !borderLeft && !borderTop && !borderRight && !border) return;
      var _borderType = function _borderType(w, s, c) {
        if (s == 'dashed') {

          ctx.setLineDash([Math.ceil(w * 4 / 3), Math.ceil(w * 4 / 3)]);




        } else if (s == 'dotted') {
          ctx.setLineDash([w, w]);
        }
        ctx.setStrokeStyle(c);
      };
      var _setBorder = function _setBorder(x1, y1, x2, y2, x3, y3, r1, r2, p1, p2, p3, bw, bs, bc) {
        ctx.save();
        // this.setOpacity(style)
        // this.setTransform(box, style)
        ctx.setLineWidth(bw);
        _borderType(bw, bs, bc);
        ctx.beginPath();
        ctx.arc(x1, y1, r1, Math.PI * p1, Math.PI * p2);
        ctx.lineTo(x2, y2);
        ctx.arc(x3, y3, r2, Math.PI * p2, Math.PI * p3);
        ctx.stroke();
        ctx.restore();
      };
      ctx.save();
      this.setOpacity(style);var _this$setTransform =



      this.setTransform(box, style),x = _this$setTransform.x,y = _this$setTransform.y;
      if (border) {
        ctx.setLineWidth(bw);
        _borderType(bw, bs, bc);
        this.roundRect(x, y, w, h, r, false, bc ? true : false);
        ctx.restore();
      }

      if (borderBottom) {
        _setBorder(x + w - br, y + h - br, x + bl, y + h, x + bl, y + h - bl, br, bl, 0.25, 0.5, 0.75, bbw, bbs,
        bbc);
      }
      if (borderLeft) {
        // ?????????
        _setBorder(x + bl, y + h - bl, x, y + tl, x + tl, y + tl, bl, tl, 0.75, 1, 1.25, blw, bls, blc);
      }
      if (borderTop) {
        // ?????????
        _setBorder(x + tl, y + tl, x + w - tr, y, x + w - tr, y + tr, tl, tr, 1.25, 1.5, 1.75, btw, bts, btc);
      }
      if (borderRight) {
        // ?????????
        _setBorder(x + w - tr, y + tr, x + w, y + h - br, x + w - br, y + h - br, tr, br, 1.75, 2, 0.25, btw,
        bts, btc);
      }
    } }, { key: "setOpacity", value: function setOpacity(_ref12)


    {var _ref12$opacity = _ref12.opacity,opacity = _ref12$opacity === void 0 ? 1 : _ref12$opacity;
      this.ctx.setGlobalAlpha(opacity);
    } }, { key: "drawView", value: function drawView(
    box, style) {var

      ctx =
      this.ctx;var

      w =

      box.width,h = box.height;var _ref13 =



      style || {},_ref13$borderRadius = _ref13.borderRadius,br = _ref13$borderRadius === void 0 ? 0 : _ref13$borderRadius,bg = _ref13.backgroundColor;
      ctx.save();
      this.setOpacity(style);var _this$setTransform2 =



      this.setTransform(box, style),x = _this$setTransform2.x,y = _this$setTransform2.y;
      this.setShadow(style);
      this.setBackground(bg, w, h);
      this.roundRect(x, y, w, h, br, true, false);
      ctx.restore();
      this.setBorder(box, style);
    } }, { key: "drawImage", value: function () {var _drawImage2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(
      img) {var _this = this;var box,style,custom,_args3 = arguments;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:box = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};style = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {};custom = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : true;_context3.next = 5;return (
                  new Promise( /*#__PURE__*/function () {var _ref14 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(resolve, reject) {var ctx, sleep, canvas, _style$borderRadius, borderRadius, mode, _style$padding, padding, bg, _padding$paddingTop, pt, _padding$paddingLeft, pl, _padding$paddingRight, pr, _padding$paddingBotto, pb, x, y, w, h, _this$setTransform3, x1, y1, _modeImage, _restore, _drawImage, _yield$getImageInfo, src, width, height, _yield$getImageInfo2, _src, _width, _height;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:

                              ctx =

                              _this.ctx, sleep = _this.sleep;
                              canvas = _this.canvas;_style$borderRadius =





                              style.borderRadius, borderRadius = _style$borderRadius === void 0 ? 0 : _style$borderRadius, mode = style.mode, _style$padding = style.padding, padding = _style$padding === void 0 ? {} : _style$padding, bg = style.backgroundColor;_padding$paddingTop =





                              padding.paddingTop, pt = _padding$paddingTop === void 0 ? 0 : _padding$paddingTop, _padding$paddingLeft = padding.paddingLeft, pl = _padding$paddingLeft === void 0 ? 0 : _padding$paddingLeft, _padding$paddingRight = padding.paddingRight, pr = _padding$paddingRight === void 0 ? 0 : _padding$paddingRight, _padding$paddingBotto = padding.paddingBottom, pb = _padding$paddingBotto === void 0 ? 0 : _padding$paddingBotto;

                              x =



                              box.left, y = box.top, w = box.width, h = box.height;
                              ctx.save();
                              if (!custom) {
                                _this.setOpacity(style);_this$setTransform3 =



                                _this.setTransform(box, style), x1 = _this$setTransform3.x, y1 = _this$setTransform3.y;
                                if (bg) {
                                  _this.setBackground(bg, w, h);
                                }
                                x = x1;
                                y = y1;
                                _this.setShadow(style);
                                _this.roundRect(x, y, w, h, borderRadius, borderRadius ? true : false, false);
                              }
                              ctx.clip();
                              _modeImage = function _modeImage(img) {
                                x += pl;
                                y += pt;
                                w = w - pl - pr;
                                h = h - pt - pb;
                                // ????????????????????????
                                var
                                rw =


                                img.width,rh = img.height,src = img.src;
                                var sX = 0;
                                var sY = 0;
                                // ??????????????????
                                var cp = w / h;
                                // ????????????
                                var op = rw / rh;
                                if (!rw) {
                                  mode = 'scaleToFill';
                                }
                                switch (mode) {
                                  case 'aspectFit':
                                    if (cp >= op) {
                                      rw = h * op;
                                      rh = h;
                                      sX = x + Math.round(w - rw) / 2;
                                      sY = y;
                                    } else {
                                      rw = w;
                                      rh = w / op;
                                      sX = x;
                                      sY = y + Math.round(h - rh) / 2;
                                    }
                                    ctx.drawImage(src, sX, sY, rw, rh);
                                    break;
                                  case 'aspectFill':
                                    if (cp >= op) {
                                      rh = rw / cp;
                                      // sY = Math.round((h - rh) / 2)
                                    } else {
                                      rw = rh * cp;
                                      sX = Math.round(((img.width || w) - rw) / 2);
                                    }
                                    // ???????????????




                                    ctx.drawImage(src, sX, sY, rw, rh, x, y, w, h);

                                    break;
                                  default:
                                    // scaleToFill
                                    ctx.drawImage(src, x, y, w, h);}

                              };
                              _restore = function _restore() {
                                ctx.restore();
                                _this.setBorder(box, style);
                                setTimeout(resolve, sleep);
                              };
                              _drawImage = function _drawImage(img) {var isReset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                                if (_this.use2dCanvas) {
                                  var Image = canvas.createImage();
                                  Image.onload = function () {
                                    img.src = Image;
                                    _modeImage(img);
                                    _restore();
                                  };
                                  Image.onerror = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                                            if (isReset) {
                                              console.error("createImage fail: ".concat(JSON.stringify(img)));
                                            }
                                            resolve(true);case 2:case "end":return _context.stop();}}}, _callee);}));

                                  Image.src = img.src;
                                } else {
                                  _modeImage(img);
                                  _restore();
                                }
                              };if (!(
                              typeof img === 'string')) {_context2.next = 21;break;}_context2.next = 14;return (




                                (0, _utils.getImageInfo)(img, _this.isH5PathToBase64));case 14:_yield$getImageInfo = _context2.sent;src = _yield$getImageInfo.path;width = _yield$getImageInfo.width;height = _yield$getImageInfo.height;
                              _drawImage({
                                src: src,
                                width: width,
                                height: height });_context2.next = 34;break;case 21:_context2.prev = 21;



                              _drawImage(img);_context2.next = 34;break;case 25:_context2.prev = 25;_context2.t0 = _context2["catch"](21);_context2.next = 29;return (





                                (0, _utils.getImageInfo)(img.originSrc, _this.isH5PathToBase64, true));case 29:_yield$getImageInfo2 = _context2.sent;_src = _yield$getImageInfo2.path;_width = _yield$getImageInfo2.width;_height = _yield$getImageInfo2.height;
                              _drawImage({
                                src: _src,
                                width: _width,
                                height: _height },
                              true);case 34:case "end":return _context2.stop();}}}, _callee2, null, [[21, 25]]);}));return function (_x3, _x4) {return _ref14.apply(this, arguments);};}()));case 5:case "end":return _context3.stop();}}}, _callee3);}));function drawImage(_x2) {return _drawImage2.apply(this, arguments);}return drawImage;}() }, { key: "drawText", value: function drawText(





    text, box, style, rules) {var

      ctx =
      this.ctx;var

      w =



      box.width,h = box.height,_box$offsetLeft = box.offsetLeft,ol = _box$offsetLeft === void 0 ? 0 : _box$offsetLeft,_box$offsetTop = box.offsetTop,ot = _box$offsetTop === void 0 ? 0 : _box$offsetTop;var _style$color =















      style.color,color = _style$color === void 0 ? '#000000' : _style$color,_style$lineHeight = style.lineHeight,lineHeight = _style$lineHeight === void 0 ? '1.4em' : _style$lineHeight,_style$fontSize = style.fontSize,fontSize = _style$fontSize === void 0 ? 14 : _style$fontSize,fontWeight = style.fontWeight,fontFamily = style.fontFamily,textStyle = style.textStyle,_style$textAlign = style.textAlign,textAlign = _style$textAlign === void 0 ? 'left' : _style$textAlign,_style$verticalAlign = style.verticalAlign,va = _style$verticalAlign === void 0 ? 'top' : _style$verticalAlign,bg = style.backgroundColor,maxLines = style.maxLines,display = style.display,_style$padding2 = style.padding,padding = _style$padding2 === void 0 ? {} : _style$padding2,_style$borderRadius2 = style.borderRadius,borderRadius = _style$borderRadius2 === void 0 ? 0 : _style$borderRadius2,td = style.textDecoration;
      lineHeight = (0, _utils.toPx)(lineHeight, fontSize);
      if (!text) return;
      ctx.save();
      this.setOpacity(style);var _this$setTransform4 =



      this.setTransform(box, style),x = _this$setTransform4.x,y = _this$setTransform4.y;
      ctx.setTextBaseline('middle');
      ctx.setFonts({
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontWeight: fontWeight,
        textStyle: textStyle });

      ctx.setTextAlign(textAlign);
      ctx.translate(0, -(fontSize / 2));
      // ????????????
      y += fontSize;
      if (bg) {
        this.setBackground(bg, w, h);
        this.roundRect(x, y - fontSize / 2, w, h, borderRadius, 1, 0);
      }
      y += ot;
      this.setShadow(style);
      ctx.setFillStyle(color);
      var rulesObj = {};
      if (rules) {
        if (rules.word.length > 0) {
          for (var i = 0; i < rules.word.length; i++) {
            // let reg = new RegExp(rules.word[i], "g")
            // let result;
            // while(result=reg.exec(text)) {
            // 		rulesObj[result.index] = {
            // 			reset: true,
            // 			char: result[0]
            // 		};
            // }
            var _startIndex = 0,
            index = void 0;
            while ((index = text.indexOf(rules.word[i], _startIndex)) > -1) {
              rulesObj[index] = {
                reset: true };

              for (var j = 0; j < rules.word[i].length; j++) {
                rulesObj[index + j] = {
                  reset: true };

              }
              _startIndex = index + 1;
            }
          }
        }
      }
      // ????????????
      switch (textAlign) {
        case 'left':
          break;
        case 'center':
          x += 0.5 * w;
          break;
        case 'right':
          x += w;
          break;
        default:
          break;}

      var textWidth = ctx.measureText(text).width;
      var actualHeight = Math.ceil(textWidth / w) * lineHeight;
      var paddingTop = Math.ceil((h - actualHeight) / 2);
      if (paddingTop < 0) paddingTop = 0;

      // ??????
      var _drawLine = function _drawLine(x, y, textWidth) {
        var to = x;
        switch (textAlign) {
          case 'left':
            x = x;
            to += textWidth;
            break;
          case 'center':
            x = x - textWidth / 2;
            to = x + textWidth;
            break;
          case 'right':
            to = x;
            x = x - textWidth;
            break;
          default:
            break;}


        if (td) {
          ctx.setLineWidth(fontSize / 13);
          ctx.beginPath();

          if (/\bunderline\b/.test(td)) {
            ctx.moveTo(x, y - fontSize * 0.5);
            ctx.lineTo(to, y - fontSize * 0.5);
          }

          if (/\boverline\b/.test(td)) {
            ctx.moveTo(x, y - fontSize * 1.5);
            ctx.lineTo(to, y - fontSize * 1.5);
          }
          if (/\bline-through\b/.test(td)) {
            ctx.moveTo(x, y - fontSize);
            ctx.lineTo(to, y - fontSize);
          }
          ctx.closePath();
          ctx.setStrokeStyle(color);
          ctx.stroke();
        }
      };
      var _reset = function _reset(text, x, y) {
        var rs = Object.keys(rulesObj);
        for (var _i2 = 0; _i2 < rs.length; _i2++) {
          var item = rulesObj[rs[_i2]];
          ctx.save();
          ctx.setFillStyle(rules.color);
          if (item.char) {
            ctx.fillText(item.char, item.x, item.y);
          }
          ctx.restore();
        }
      };
      var _setText = function _setText(isReset, char) {
        if (isReset) {
          var t1 = Math.round(ctx.measureText(" ").width);
          var t2 = Math.round(ctx.measureText("\u3000").width);
          var width = Math.round(ctx.measureText(char).width);
          var _char = '';
          var _num = 1;
          if (width == t2) {
            _char = "\u3000";
            _num = 1;
          } else {
            _char = " ";
            _num = Math.ceil(width / t1);
          }
          return {
            char: new Array(_num).fill(_char).join(''),
            width: width };

        } else {
          return {
            char: char };

        }
      };
      var _setRulesObj = function _setRulesObj(text, index, x, y) {
        rulesObj[index].x = x;
        rulesObj[index].y = y;
        rulesObj[index].char = text;
      };
      var _setRules = function _setRules(x, rs, text, textWidth, _ref16)


      {var _ref16$startIndex = _ref16.startIndex,startIndex = _ref16$startIndex === void 0 ? 0 : _ref16$startIndex,endIndex = _ref16.endIndex;
        var clonetext = text;
        if (/??/.test(text)) {
          clonetext = clonetext.replace(/??/g, '.');
          textWidth = ctx.measureText(clonetext).width;
        }
        var _text = text.split('');
        var _x = x;
        for (var _i3 = 0; _i3 < rs.length; _i3++) {
          var _index = rs[_i3];
          var key = _index - startIndex;
          var t = _text[key];
          if (t) {var _setText2 =



            _setText(rulesObj[_index], t),char = _setText2.char,width = _setText2.width;
            _text[key] = char;
            if (textAlign == 'center') {
              _x = x - 0.5 * (textWidth - width);
            }
            if (textAlign == 'right') {
              _x = x - textWidth + width;
            }
            _setRulesObj(t, _index, _x + ctx.measureText(clonetext.substring(0, key)).width, y +
            inlinePaddingTop);
          } else {
            continue;
          }

        }
        return _text;
      };
      var inlinePaddingTop = Math.ceil((lineHeight - fontSize) / 2) + 1;
      // ???????????????
      if (textWidth + ol <= w && !text.includes('\n')) {
        x = x + ol;
        var rs = Object.keys(rulesObj);
        var _text = '';
        if (rs) {
          _text = _setRules(x, rs, text, textWidth, {});
          _reset();
        }
        ctx.fillText(_text.join(''), x, y + inlinePaddingTop);
        y += lineHeight;
        _drawLine(x, y, textWidth);
        ctx.restore();
        this.setBorder(box, style);
        return;
      }
      // ????????????
      var chars = text.split('');
      var _y = y;
      var _x = x;
      // ????????????
      var line = '';
      var lineIndex = 0;
      var startIndex = 0;
      for (var _index2 = 0; _index2 <= chars.length; _index2++) {
        var ch = chars[_index2] || '';
        var isLine = ch === '\n';
        var isRight = ch == ''; // index == chars.length
        ch = isLine ? '' : ch;
        var textline = line + ch;
        var _textWidth = ctx.measureText(textline).width;
        // ??????????????????????????????????????????????????????
        if (lineIndex >= maxLines) {
          break;
        }
        if (lineIndex == 0) {
          _textWidth = _textWidth + ol;
          _x = x + ol;
        } else {
          _textWidth = _textWidth;
          _x = x;
        }

        if (_textWidth > w || isLine || isRight) {
          var endIndex = _index2;
          lineIndex++;
          line = isRight && _textWidth <= w ? textline : line;
          if (lineIndex === maxLines && _textWidth > w) {
            while (ctx.measureText("".concat(line, "...")).width > w) {
              if (line.length <= 1) {
                // ????????????????????????????????????????????????
                break;
              }
              line = line.substring(0, line.length - 1);
            }
            line += '...';
          }
          var _rs = Object.keys(rulesObj);
          var _text2 = '';
          if (_rs) {
            _text2 = _setRules(x, _rs, line, _textWidth, {
              startIndex: startIndex,
              endIndex: endIndex });

            _reset();
          }
          ctx.fillText(_text2.join(''), _x, y + inlinePaddingTop);
          y += lineHeight;
          _drawLine(_x, y, _textWidth);
          line = ch;
          startIndex = endIndex + (isLine ? 1 : 0);
          if (y + lineHeight > _y + h) break;
        } else {
          line = textline;
        }
      }
      ctx.restore();
      this.setBorder(box, style);
    } }, { key: "drawNode", value: function () {var _drawNode = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(
      element) {var box, style, attr, name, rules, children, parent, _element$attributes, src, text, childs, _iterator, _step, child;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:

                box =






                element.layoutBox, style = element.computedStyle, attr = element.attributes, name = element.name, rules = element.rules, children = element.children, parent = element.parent;
                if (!parent.hasOwnProperty('id')) {
                  this.count = Math.max(element.count || 1, this.count);
                }_element$attributes =



                element.attributes, src = _element$attributes.src, text = _element$attributes.text;if (!(
                name === 'view')) {_context4.next = 7;break;}
                this.drawView(box, style);_context4.next = 13;break;case 7:if (!(
                name === 'image' && src)) {_context4.next = 12;break;}_context4.next = 10;return (
                  this.drawImage(attr, box, style, false));case 10:_context4.next = 13;break;case 12:
                if (name === 'text') {
                  this.drawText(text, box, style, rules);
                } else if (name === 'qrcode') {
                  if (_qrcode.default === null || _qrcode.default === void 0 ? void 0 : _qrcode.default.api) {
                    _qrcode.default.api.draw(text, this, box, style);
                  }
                }case 13:
                this.progress = (this.progress || 0) + 1;if (
                children) {_context4.next = 16;break;}return _context4.abrupt("return");case 16:
                childs = Object.values ? Object.values(children) : Object.keys(children).map(function (key) {return children[key];});_iterator = _createForOfIteratorHelper(
                childs);_context4.prev = 18;_iterator.s();case 20:if ((_step = _iterator.n()).done) {_context4.next = 26;break;}child = _step.value;_context4.next = 24;return (
                  this.drawNode(child));case 24:_context4.next = 20;break;case 26:_context4.next = 31;break;case 28:_context4.prev = 28;_context4.t0 = _context4["catch"](18);_iterator.e(_context4.t0);case 31:_context4.prev = 31;_iterator.f();return _context4.finish(31);case 34:case "end":return _context4.stop();}}}, _callee4, this, [[18, 28, 31, 34]]);}));function drawNode(_x5) {return _drawNode.apply(this, arguments);}return drawNode;}() }, { key: "listen", value: function listen(


    type, callBack) {var _this2 = this;
      if (type == 'progressChange') {
        Object.defineProperty(this, 'progress', {
          configurable: true,
          set: function set(v) {
            _this2._progress = v;
            callBack(v / _this2.count);
          },
          get: function get() {
            return _this2._progress;
          } });

      }
    } }]);return Draw;}();exports.Draw = Draw;

/***/ }),

/***/ 368:
/*!**********************************************************************************************!*\
  !*** D:/Code/uniapp/fruitsShop/uni_modules/lime-painter/components/lime-painter/gradient.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.GD = void 0;function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;} /* eslint-disable */

var GD = {
  isGradient: function isGradient(bg) {
    if (bg && (bg.startsWith('linear') || bg.startsWith('radial'))) {
      return true;
    }
    return false;
  },
  doGradient: function doGradient(bg, width, height, ctx) {
    if (bg.startsWith('linear')) {
      linearEffect(width, height, bg, ctx);
    } else if (bg.startsWith('radial')) {
      radialEffect(width, height, bg, ctx);
    }
  } };exports.GD = GD;


function analizeGrad(string) {
  var colorPercents = string.substring(0, string.length - 1).split("%,");
  var colors = [];
  var percents = [];var _iterator = _createForOfIteratorHelper(
  colorPercents),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var colorPercent = _step.value;
      colors.push(colorPercent.substring(0, colorPercent.lastIndexOf(" ")).trim());
      percents.push(colorPercent.substring(colorPercent.lastIndexOf(" "), colorPercent.length) / 100);
    }} catch (err) {_iterator.e(err);} finally {_iterator.f();}
  return {
    colors: colors,
    percents: percents };

}

function radialEffect(width, height, bg, ctx) {
  var colorPer = analizeGrad(bg.match(/radial-gradient\((.+)\)/)[1]);
  var grd = ctx.createCircularGradient(0, 0, width < height ? height / 2 : width / 2);
  for (var i = 0; i < colorPer.colors.length; i++) {
    grd.addColorStop(colorPer.percents[i], colorPer.colors[i]);
  }
  ctx.setFillStyle(grd);
}

function analizeLinear(bg, width, height) {
  var direction = bg.match(/([-]?\d{1,3})deg/);
  var dir = direction && direction[1] ? parseFloat(direction[1]) : 0;
  var coordinate;
  switch (dir) {
    case 0:
      coordinate = [0, -height / 2, 0, height / 2];
      break;
    case 90:
      coordinate = [width / 2, 0, -width / 2, 0];
      break;
    case -90:
      coordinate = [-width / 2, 0, width / 2, 0];
      break;
    case 180:
      coordinate = [0, height / 2, 0, -height / 2];
      break;
    case -180:
      coordinate = [0, -height / 2, 0, height / 2];
      break;
    default:
      var x1 = 0;
      var y1 = 0;
      var x2 = 0;
      var y2 = 0;
      if (direction[1] > 0 && direction[1] < 90) {
        x1 = width / 2 - (width / 2 * Math.tan((90 - direction[1]) * Math.PI * 2 / 360) - height / 2) * Math.sin(2 * (
        90 - direction[1]) * Math.PI * 2 / 360) / 2;
        y2 = Math.tan((90 - direction[1]) * Math.PI * 2 / 360) * x1;
        x2 = -x1;
        y1 = -y2;
      } else if (direction[1] > -180 && direction[1] < -90) {
        x1 = -(width / 2) + (width / 2 * Math.tan((90 - direction[1]) * Math.PI * 2 / 360) - height / 2) * Math.sin(2 * (
        90 - direction[1]) * Math.PI * 2 / 360) / 2;
        y2 = Math.tan((90 - direction[1]) * Math.PI * 2 / 360) * x1;
        x2 = -x1;
        y1 = -y2;
      } else if (direction[1] > 90 && direction[1] < 180) {
        x1 = width / 2 + (-(width / 2) * Math.tan((90 - direction[1]) * Math.PI * 2 / 360) - height / 2) * Math.sin(2 * (
        90 - direction[1]) * Math.PI * 2 / 360) / 2;
        y2 = Math.tan((90 - direction[1]) * Math.PI * 2 / 360) * x1;
        x2 = -x1;
        y1 = -y2;
      } else {
        x1 = -(width / 2) - (-(width / 2) * Math.tan((90 - direction[1]) * Math.PI * 2 / 360) - height / 2) * Math.sin(2 * (
        90 - direction[1]) * Math.PI * 2 / 360) / 2;
        y2 = Math.tan((90 - direction[1]) * Math.PI * 2 / 360) * x1;
        x2 = -x1;
        y1 = -y2;
      }
      coordinate = [x1, y1, x2, y2];
      break;}

  return coordinate;
}

function linearEffect(width, height, bg, ctx) {
  var param = analizeLinear(bg, width, height);
  var grd = ctx.createLinearGradient(param[0], param[1], param[2], param[3]);
  var content = bg.match(/linear-gradient\((.+)\)/)[1];
  var colorPer = analizeGrad(content.substring(content.indexOf(',') + 1));
  for (var i = 0; i < colorPer.colors.length; i++) {
    grd.addColorStop(colorPer.percents[i], colorPer.colors[i]);
  }
  ctx.setFillStyle(grd);
}

/***/ }),

/***/ 369:
/*!********************************************************************************************!*\
  !*** D:/Code/uniapp/fruitsShop/uni_modules/lime-painter/components/lime-painter/qrcode.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 370:
/*!********************************************************************************************!*\
  !*** D:/Code/uniapp/fruitsShop/uni_modules/lime-painter/components/lime-painter/layout.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.Layout = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 6));var _utils = __webpack_require__(/*! ./utils */ 366);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var

Layout = /*#__PURE__*/function () {
  function Layout() {_classCallCheck(this, Layout);
    this.layoutHeight = 0;
    this.layoutWidth = 0;
    this.uuid = 0;
    this.count = 0;
  }_createClass(Layout, [{ key: "init", value: function init(
    context, root, isH5PathToBase64) {
      this.ctx = context;
      this.root = root;
      this.layoutWidth = root.width || 0;
      this.layoutHeight = root.height || 0;
      this.uuid = 0;
      this.isH5PathToBase64 = isH5PathToBase64;
    } }, { key: "getNodeTree", value: function () {var _getNodeTree = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(
      element) {var parent,index,siblings,source,computedStyle,attributes,node,_computedStyle$left,left,_computedStyle$top,top,_computedStyle$width,width,_computedStyle$height,height,childrens,i,v,_args = arguments;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:parent = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};index = _args.length > 2 && _args[2] !== undefined ? _args[2] : 0;siblings = _args.length > 3 && _args[3] !== undefined ? _args[3] : [];source = _args.length > 4 ? _args[4] : undefined;
                this.count++;
                computedStyle = Object.assign({}, this.getComputedStyle(element, parent, index));_context.next = 8;return (
                  this.getAttributes(element));case 8:attributes = _context.sent;
                node = {
                  id: this.uuid++,
                  parent: parent,
                  computedStyle: computedStyle,
                  rules: element.rules,
                  attributes: Object.assign({}, attributes),
                  name: (element === null || element === void 0 ? void 0 : element.type) || 'view',
                  isRoot: !(element === null || element === void 0 ? void 0 : element.type) && JSON.stringify(parent) == '{}' };

                if (JSON.stringify(parent) === '{}' && !element.type) {_computedStyle$left =
                  computedStyle.left, left = _computedStyle$left === void 0 ? 0 : _computedStyle$left, _computedStyle$top = computedStyle.top, top = _computedStyle$top === void 0 ? 0 : _computedStyle$top, _computedStyle$width = computedStyle.width, width = _computedStyle$width === void 0 ? 0 : _computedStyle$width, _computedStyle$height = computedStyle.height, height = _computedStyle$height === void 0 ? 0 : _computedStyle$height;
                  node.layoutBox = { left: left, top: top, width: width, height: height };
                } else {
                  node.layoutBox = Object.assign({ left: 0, top: 0 }, this.getLayoutBox(node, parent, index, siblings, source));
                }if (!(
                element === null || element === void 0 ? void 0 : element.views)) {_context.next = 26;break;}
                childrens = [];
                node.children = [];
                i = 0;case 15:if (!(i < element.views.length)) {_context.next = 25;break;}
                v = element.views[i];_context.t0 =
                childrens;_context.next = 20;return this.getNodeTree(v, node, i, childrens, element);case 20:_context.t1 = _context.sent;_context.t0.push.call(_context.t0, _context.t1);case 22:i++;_context.next = 15;break;case 25:

                node.children = childrens;case 26:return _context.abrupt("return",

                node);case 27:case "end":return _context.stop();}}}, _callee, this);}));function getNodeTree(_x) {return _getNodeTree.apply(this, arguments);}return getNodeTree;}() }, { key: "getComputedStyle", value: function getComputedStyle(

    element) {var _this = this;var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var style = {};
      var name = element.name || element.type;
      var node = JSON.stringify(parent) == '{}' && !name ? element : element.css;

      if (!node) return style;
      var inheritProps = ['color', 'fontSize', 'lineHeight', 'verticalAlign', 'fontWeight', 'textAlign'];
      if (parent.computedStyle) {
        inheritProps.forEach(function (prop) {
          if (node[prop] || parent.computedStyle[prop]) {
            node[prop] = node[prop] || parent.computedStyle[prop];
          }
        });
      }var _loop = function _loop() {
        var value = _Object$keys[_i];
        var item = node[value];
        if (value == 'views') {return "continue";}
        if (/^(box)?shadow$/i.test(value)) {
          var shadows = item.split(' ').map(function (v) {return /^\d/.test(v) ? (0, _utils.toPx)(v) : v;});
          style.boxShadow = shadows;
          return "continue";
        }
        if (/^border/i.test(value) && !/radius$/i.test(value)) {var _style$prefix;
          var prefix = value.match(/^border([BTRLa-z]+)?/)[0];
          var type = value.match(/[W|S|C][a-z]+/);
          var v = item.replace(/([\(,])\s+|\s+([\),])/g, '$1$2').split(' ').map(function (v) {return /^\d/.test(v) ? (0, _utils.toPx)(v, '', true) : v;});
          style[prefix] = (_style$prefix = {}, _defineProperty(_style$prefix,
          prefix + 'Width', ((0, _utils.isNumber)(v[0]) ? v[0] : 0) || 1), _defineProperty(_style$prefix,
          prefix + 'Style', v[1] || 'solid'), _defineProperty(_style$prefix,
          prefix + 'Color', v[2] || 'black'), _style$prefix);

          if (v.length == 1 && type) {
            style[prefix][prefix + type[0]] = v[0];
          }
          return "continue";
        }
        if (/^background(color)?$/i.test(value)) {
          style['backgroundColor'] = item;
          return "continue";
        }
        if (/padding|margin|radius/i.test(value)) {
          var isRadius = /radius$/i.test(value);
          var _prefix = isRadius ? 'borderRadius' : value.match(/[a-z]+/)[0];
          var pre = [0, 0, 0, 0].map(function (item, i) {return isRadius ? ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'][i] : [_prefix + 'Top', _prefix + 'Right', _prefix + 'Bottom', _prefix + 'Left'][i];});
          if (value === 'padding' || value === 'margin' || /^(border)?radius$/i.test(value)) {var _style$_type;
            var _v = (item === null || item === void 0 ? void 0 : item.split(' ').map(function (item) {return /^\d/.test(item) && (0, _utils.toPx)(item, node['width']);}, [])) || [0];
            var _type = isRadius ? 'borderRadius' : value;var _v2 = _slicedToArray(
            _v, 4),t = _v2[0],r = _v2[1],b = _v2[2],l = _v2[3];
            style[_type] = (_style$_type = {}, _defineProperty(_style$_type,
            pre[0], t), _defineProperty(_style$_type,
            pre[1], (0, _utils.isNumber)(r) ? r : t), _defineProperty(_style$_type,
            pre[2], (0, _utils.isNumber)(b) ? b : t), _defineProperty(_style$_type,
            pre[3], (0, _utils.isNumber)(l) ? l : r || t), _style$_type);

          } else {
            if (typeof style[_prefix] === 'object') {
              style[_prefix][value] = (0, _utils.toPx)(item, node['width']);
            } else {var _style$_prefix;
              style[_prefix] = (_style$_prefix = {}, _defineProperty(_style$_prefix,
              pre[0], style[_prefix] || 0), _defineProperty(_style$_prefix,
              pre[1], style[_prefix] || 0), _defineProperty(_style$_prefix,
              pre[2], style[_prefix] || 0), _defineProperty(_style$_prefix,
              pre[3], style[_prefix] || 0), _style$_prefix);

              style[_prefix][value] = (0, _utils.toPx)(item, node['width']);
            }
          }
          return "continue";
        }
        if (/^(width|height)$/i.test(value)) {
          if (/%$/.test(item)) {
            style[value] = (0, _utils.toPx)(item, parent.layoutBox[value]);
          } else {
            style[value] = /px|rpx$/.test(item) ? (0, _utils.toPx)(item) : item;
          }
          return "continue";
        }
        if (/^transform$/i.test(value)) {
          style[value] = {};
          item.replace(/([a-zA-Z]+)\(([0-9,-\.%rpxdeg\s]+)\)/g, function (g1, g2, g3) {
            var v = g3.split(',').map(function (k) {return k.replace(/(^\s*)|(\s*$)/g, '');});
            var transform = function transform(v, r) {
              return v.includes('deg') ? v * 1 : r && !/%$/.test(r) ? (0, _utils.toPx)(v, r) : v;
            };
            if (g2.includes('matrix')) {
              style[value][g2] = v.map(function (v) {return v * 1;});
            } else if (g2.includes('rotate')) {
              style[value][g2] = g3.match(/^-?\d+(\.\d+)?/)[0] * 1;
            } else if (/[X, Y]/.test(g2)) {
              style[value][g2] = /[X]/.test(g2) ? transform(v[0], node['width']) : transform(v[0], node['height']);
            } else {
              style[value][g2 + 'X'] = transform(v[0], node['width']);
              style[value][g2 + 'Y'] = transform(v[1] || v[0], node['height']);
            }
          });
          return "continue";
        }
        if (/^transformOrigin/i.test(value)) {
          style[value] = item.replace(/^([%\.\da-zA-Z]+)$/, "$1 $1");
          return "continue";
        }
        if (/%/.test(item)) {var _parent$layoutBox =
          parent.layoutBox,pw = _parent$layoutBox.width,ph = _parent$layoutBox.height,pl = _parent$layoutBox.left,pt = _parent$layoutBox.top;var _this$root =
          _this.root,rw = _this$root.width,rh = _this$root.height;
          var isR = style.position == 'relative';
          if (value == 'width') {
            style[value] = (0, _utils.toPx)(item, pw || rw);
          } else if (value == 'height') {
            style[value] = (0, _utils.toPx)(item, ph || rh);
          } else if (value == 'left') {
            style[value] = item; // isR ? toPx(item, pw) + pl : toPx(item, rw)
          } else if (value == 'top') {
            style[value] = item; // isR ? toPx(item, ph) + pt : toPx(item, rh)
          } else {
            style[value] = (0, _utils.toPx)(item, node['width']);
          }
        } else {
          style[value] = /px|rpx$/.test(item) ? (0, _utils.toPx)(item) : /em$/.test(item) && name == 'text' ? (0, _utils.toPx)(item, node['fontSize']) : item;
        }};for (var _i = 0, _Object$keys = Object.keys(node); _i < _Object$keys.length; _i++) {var _ret = _loop();if (_ret === "continue") continue;
      }
      if (/image/.test(element.name || element.type) && !style.mode) {
        style.mode = element.mode || 'scaleToFill';
        if ((!node.width || node.width == 'auto') && (!node.height || node.width == 'auto')) {
          style.mode = '';
        }
      }
      return style;
    } }, { key: "getLayoutBox", value: function getLayoutBox(
    element) {var _ls$margin, _ls$margin2;var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;var siblings = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var source = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      var box = {};var _ref =
      element || {},name = _ref.name,cstyle = _ref.computedStyle,layoutBox = _ref.layoutBox,attributes = _ref.attributes,isRoot = _ref.isRoot;
      if (!name) return box;var
      ctx = this.ctx;var _parent$layoutBox2 =
      parent.layoutBox,pbox = _parent$layoutBox2 === void 0 ? this.root : _parent$layoutBox2,pstyle = parent.computedStyle;var

      v =














      cstyle.verticalAlign,x = cstyle.left,y = cstyle.top,w = cstyle.width,h = cstyle.height,_cstyle$fontSize = cstyle.fontSize,fontSize = _cstyle$fontSize === void 0 ? 14 : _cstyle$fontSize,_cstyle$lineHeight = cstyle.lineHeight,lineHeight = _cstyle$lineHeight === void 0 ? '1.4em' : _cstyle$lineHeight,maxLines = cstyle.maxLines,fontWeight = cstyle.fontWeight,fontFamily = cstyle.fontFamily,textStyle = cstyle.textStyle,position = cstyle.position,display = cstyle.display,_cstyle$padding = cstyle.padding,p = _cstyle$padding === void 0 ? {} : _cstyle$padding,_cstyle$margin = cstyle.margin,m = _cstyle$margin === void 0 ? {} : _cstyle$margin;var _p$paddingTop =
      p.paddingTop,pt = _p$paddingTop === void 0 ? 0 : _p$paddingTop,_p$paddingRight = p.paddingRight,pr = _p$paddingRight === void 0 ? 0 : _p$paddingRight,_p$paddingBottom = p.paddingBottom,pb = _p$paddingBottom === void 0 ? 0 : _p$paddingBottom,_p$paddingLeft = p.paddingLeft,pl = _p$paddingLeft === void 0 ? 0 : _p$paddingLeft;var _m$marginTop =
      m.marginTop,mt = _m$marginTop === void 0 ? 0 : _m$marginTop,_m$marginRight = m.marginRight,mr = _m$marginRight === void 0 ? 0 : _m$marginRight,_m$marginBottom = m.marginBottom,mb = _m$marginBottom === void 0 ? 0 : _m$marginBottom,_m$marginLeft = m.marginLeft,ml = _m$marginLeft === void 0 ? 0 : _m$marginLeft;var _ref2 =
      siblings[index - 1] || {},lbox = _ref2.layoutBox,ls = _ref2.computedStyle,lname = _ref2.name;var _ref3 =
      siblings[index + 1] || {},rbox = _ref3.layoutBox,rs = _ref3.computedStyle,rname = _ref3.name;

      var lmb = (ls === null || ls === void 0 ? void 0 : (_ls$margin = ls.margin) === null || _ls$margin === void 0 ? void 0 : _ls$margin.marginBottom) || 0;
      var lmr = (ls === null || ls === void 0 ? void 0 : (_ls$margin2 = ls.margin) === null || _ls$margin2 === void 0 ? void 0 : _ls$margin2.marginRight) || 0;

      if (/%$/.test(x)) {
        x = (0, _utils.toPx)(x, pbox.width);
      }
      if (/%$/.test(y)) {
        y = (0, _utils.toPx)(y, pbox.height);
      }
      if (position == 'relative') {
        x += pbox.left;
        y += pbox.top;
      }
      if (name === 'text') {
        var text = attributes.text || '';
        lineHeight = (0, _utils.toPx)(lineHeight, fontSize);
        ctx.save();
        ctx.setFonts({ fontFamily: fontFamily, fontSize: fontSize, fontWeight: fontWeight, textStyle: textStyle });
        var isLeft = index == 0;
        var islineBlock = display === 'inlineBlock';
        var isblock = display === 'block' || (ls === null || ls === void 0 ? void 0 : ls.display) === 'block';
        var isOnly = isLeft && !rbox || !(parent === null || parent === void 0 ? void 0 : parent.id);
        var lboxR = isLeft || isblock ? 0 : lbox.offsetRight || 0;
        var texts = text.split('\n');
        var lineIndex = 1;
        var line = '';
        var textIndent = cstyle.textIndent || 0;
        if (!isOnly && !islineBlock) {
          texts.map(function (t, i) {
            lineIndex += i;
            var chars = t.split('');
            for (var j = 0; j < chars.length; j++) {
              var ch = chars[j];
              var textline = line + ch;
              var textWidth = ctx.measureText(textline, fontSize).width;
              if (lineIndex == 1) {
                textWidth = textWidth + (isblock ? 0 : lboxR) + textIndent;
              }
              if (textWidth > (w || pbox.width)) {
                lineIndex++;
                line = ch;
              } else {
                line = textline;
              }
            }
          });
        } else {
          line = text;
          lineIndex = Math.max(texts.length, Math.ceil(ctx.measureText(text, fontSize).width / ((w || pbox.width) - ctx.measureText('!', fontSize).width / 2)));
        }
        if (!islineBlock) {
          box.offsetLeft = ((0, _utils.isNumber)(x) || isblock || isOnly ? textIndent : lboxR) + pl + ml;
        }
        box.offsetTop = pt;
        // ??????????????????
        var remain = ctx.measureText(line, fontSize).width;
        var width = (lineIndex > 1 ? pbox.width : remain + ((box === null || box === void 0 ? void 0 : box.offsetLeft) || 0)) + pr;
        if (!islineBlock) {
          box.offsetRight = (x || 0) + box.offsetLeft + (w ? w : isblock ? pbox.width : remain) + pr + mr;
        }
        var lboxOffset = lbox ? lbox.left + lbox.width : 0;
        var _getLeft = function _getLeft() {
          if (islineBlock) {
            return (lboxOffset + width > pbox.width || isLeft ? pbox.left : lboxOffset + lmr) + ml;
          }
          return x || pbox.left;
        };
        var _getWidth = function _getWidth() {
          if (islineBlock) {
            return width + pl + pr;
          }
          return w || (!isOnly || isblock ? pbox.width : width > pbox.width - box.left || lineIndex > 1 ? pbox.width - box.left : width);
        };
        var _getHeight = function _getHeight() {
          if (h) {
            return h;
          } else if (lineIndex > 1) {
            return (maxLines ? Math.min(maxLines, lineIndex) : lineIndex) * lineHeight + pt + pb;
          } else {
            return lineHeight + pt + pb;
          }
        };
        var _getTop = function _getTop() {
          var _y = y;
          if (_y) {} else if (isLeft) {
            _y = pbox.top;
          } else if (
          lineIndex == 1 && width < pbox.width && lname === 'text' && !isblock && !islineBlock ||
          lbox.width < pbox.width && !(islineBlock && lboxOffset + width > pbox.width))
          {
            _y = lbox.top;
          } else {
            _y = lbox.top + lbox.height - ((parent === null || parent === void 0 ? void 0 : parent.id) && ((ls === null || ls === void 0 ? void 0 : ls.lineHeight) || 0));
          }
          if (v === 'bottom') {
            _y = pbox.top + (pbox.height - box.height || 0);
          }
          if (v === 'middle') {
            _y = pbox.top + (pbox.height ? (pbox.height - box.height || 0) / 2 : 0);
          }
          return _y + mt + (isblock && (ls === null || ls === void 0 ? void 0 : ls.lineHeight) || 0) + (lboxOffset + width > pbox.width ? lmb : 0);
        };
        box.left = _getLeft();
        box.width = _getWidth();
        box.height = _getHeight();
        box.top = _getTop();
        if (pstyle && !pstyle.height) {
          pbox.height = box.top - pbox.top + box.height;
        }
        ctx.restore();
      } else if (['view', 'qrcode'].includes(name)) {
        box.left = (x || pbox.left) + ml - mr;
        box.width = (w || (pbox === null || pbox === void 0 ? void 0 : pbox.width)) - pl - pr;
        box.height = h || 0;
        if ((0, _utils.isNumber)(y)) {
          box.top = y + mt;
        } else {
          box.top = (lbox && lbox.top + lbox.height || pbox.top) + mt + lmb;
        }
      } else if (name === 'image') {var

        rWidth =

        attributes.width,rHeight = attributes.height;
        var limageOffset = lbox && lbox.left + lbox.width;
        if ((0, _utils.isNumber)(x)) {
          box.left = x + ml - mr;
        } else {
          box.left = (lbox && (limageOffset < pbox.width ? limageOffset : pbox.left) || pbox.left) + ml - mr;
        }
        if ((0, _utils.isNumber)(w)) {
          box.width = w; // - pl - pr 
        } else {
          box.width = Math.round((0, _utils.isNumber)(h) ? rWidth * h / rHeight : pbox === null || pbox === void 0 ? void 0 : pbox.width); // - pl - pr
        }
        if ((0, _utils.isNumber)(h)) {
          box.height = h;
        } else {
          var cH = Math.round(box.width * rHeight / rWidth);
          box.height = Math.min(cH, pbox === null || pbox === void 0 ? void 0 : pbox.height);
        }
        if ((0, _utils.isNumber)(y)) {
          box.top = y + mt;
        } else {
          box.top = (lbox && (limageOffset < pbox.width ? limageOffset : lbox.top + lbox.height) || pbox.top) + mt + lmb;
        }
      }

      if (box.top + box.height + mb > this.layoutHeight) {
        this.layoutHeight = box.top + box.height + mb;
      }
      return box;
    } }, { key: "getAttributes", value: function () {var _getAttributes = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(
      element) {var arr, _ref4, _ref4$width, width, _ref4$height, height, src, originSrc;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                arr = {};if (!(
                (element === null || element === void 0 ? void 0 : element.url) || (element === null || element === void 0 ? void 0 : element.src))) {_context2.next = 16;break;}
                arr.src = element.url || (element === null || element === void 0 ? void 0 : element.src);_context2.next = 5;return (
                  (0, _utils.getImageInfo)(arr.src, this.isH5PathToBase64));case 5:_context2.t0 = _context2.sent;if (_context2.t0) {_context2.next = 8;break;}_context2.t0 = {};case 8:_ref4 = _context2.t0;_ref4$width = _ref4.width;width = _ref4$width === void 0 ? 0 : _ref4$width;_ref4$height = _ref4.height;height = _ref4$height === void 0 ? 0 : _ref4$height;src = _ref4.path;originSrc = _ref4.originSrc;
                arr = Object.assign({}, arr, { width: width, height: height, src: src, originSrc: originSrc });case 16:

                if (element === null || element === void 0 ? void 0 : element.text) {
                  arr.text = element.text;
                }return _context2.abrupt("return",
                arr);case 18:case "end":return _context2.stop();}}}, _callee2, this);}));function getAttributes(_x2) {return _getAttributes.apply(this, arguments);}return getAttributes;}() }, { key: "calcNode", value: function () {var _calcNode = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(

      element) {var node;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
                  this.getNodeTree(element));case 2:node = _context3.sent;
                node.count = this.count;return _context3.abrupt("return",
                node);case 5:case "end":return _context3.stop();}}}, _callee3, this);}));function calcNode(_x3) {return _calcNode.apply(this, arguments);}return calcNode;}() }]);return Layout;}();exports.Layout = Layout;

/***/ }),

/***/ 371:
/*!********************************************************************************************!*\
  !*** D:/Code/uniapp/fruitsShop/uni_modules/lime-painter/components/lime-painter/canvas.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.expand = expand;exports.adaptor = adaptor;var _expand = function _expand(ctx) {
  return {
    setFonts: function setFonts(_ref) {var _ref$fontFamily = _ref.fontFamily,ff = _ref$fontFamily === void 0 ? 'sans-serif' : _ref$fontFamily,_ref$fontSize = _ref.fontSize,fs = _ref$fontSize === void 0 ? 14 : _ref$fontSize,_ref$fontWeight = _ref.fontWeight,fw = _ref$fontWeight === void 0 ? 'normal' : _ref$fontWeight,_ref$textStyle = _ref.textStyle,ts = _ref$textStyle === void 0 ? 'normal' : _ref$textStyle;
      // ????????????




      ctx.font = "".concat(ts, " ").concat(fw, " ").concat(fs, "px ").concat(ff);
    } };

};
function expand(ctx) {
  return Object.assign(ctx, _expand(ctx));
}
function adaptor(ctx) {
  return Object.assign(ctx, _expand(ctx), {
    setStrokeStyle: function setStrokeStyle(val) {
      ctx.strokeStyle = val;
    },
    setLineWidth: function setLineWidth(val) {
      ctx.lineWidth = val;
    },
    setLineCap: function setLineCap(val) {
      ctx.lineCap = val;
    },
    setFillStyle: function setFillStyle(val) {
      ctx.fillStyle = val;
    },
    setFontSize: function setFontSize(val) {
      ctx.font = String(val);
    },
    setGlobalAlpha: function setGlobalAlpha(val) {
      ctx.globalAlpha = val;
    },
    setLineJoin: function setLineJoin(val) {
      ctx.lineJoin = val;
    },
    setTextAlign: function setTextAlign(val) {
      ctx.textAlign = val;
    },
    setMiterLimit: function setMiterLimit(val) {
      ctx.miterLimit = val;
    },
    setShadow: function setShadow(offsetX, offsetY, blur, color) {
      ctx.shadowOffsetX = offsetX;
      ctx.shadowOffsetY = offsetY;
      ctx.shadowBlur = blur;
      ctx.shadowColor = color;
    },
    setTextBaseline: function setTextBaseline(val) {
      ctx.textBaseline = val;
    },
    createCircularGradient: function createCircularGradient() {},
    draw: function draw() {} });

}

/***/ }),

/***/ 377:
/*!******************************************************************************!*\
  !*** D:/Code/uniapp/fruitsShop/components/use-address/city-data/province.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /* eslint-disable */
var provinceData = [{
  "label": "?????????",
  "value": "11" },

{
  "label": "?????????",
  "value": "12" },

{
  "label": "?????????",
  "value": "13" },

{
  "label": "?????????",
  "value": "14" },

{
  "label": "??????????????????",
  "value": "15" },

{
  "label": "?????????",
  "value": "21" },

{
  "label": "?????????",
  "value": "22" },

{
  "label": "????????????",
  "value": "23" },

{
  "label": "?????????",
  "value": "31" },

{
  "label": "?????????",
  "value": "32" },

{
  "label": "?????????",
  "value": "33" },

{
  "label": "?????????",
  "value": "34" },

{
  "label": "?????????",
  "value": "35" },

{
  "label": "?????????",
  "value": "36" },

{
  "label": "?????????",
  "value": "37" },

{
  "label": "?????????",
  "value": "41" },

{
  "label": "?????????",
  "value": "42" },

{
  "label": "?????????",
  "value": "43" },

{
  "label": "?????????",
  "value": "44" },

{
  "label": "?????????????????????",
  "value": "45" },

{
  "label": "?????????",
  "value": "46" },

{
  "label": "?????????",
  "value": "50" },

{
  "label": "?????????",
  "value": "51" },

{
  "label": "?????????",
  "value": "52" },

{
  "label": "?????????",
  "value": "53" },

{
  "label": "???????????????",
  "value": "54" },

{
  "label": "?????????",
  "value": "61" },

{
  "label": "?????????",
  "value": "62" },

{
  "label": "?????????",
  "value": "63" },

{
  "label": "?????????????????????",
  "value": "64" },

{
  "label": "????????????????????????",
  "value": "65" },

{
  "label": "??????",
  "value": "66" },

{
  "label": "??????",
  "value": "67" },

{
  "label": "??????",
  "value": "68" },

{
  "label": "?????????",
  "value": "69" }];var _default =


provinceData;exports.default = _default;

/***/ }),

/***/ 378:
/*!**************************************************************************!*\
  !*** D:/Code/uniapp/fruitsShop/components/use-address/city-data/city.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /* eslint-disable */
var cityData = [
[{
  "label": "?????????",
  "value": "1101" }],

[{
  "label": "?????????",
  "value": "1201" }],

[{
  "label": "????????????",
  "value": "1301" },

{
  "label": "?????????",
  "value": "1302" },

{
  "label": "????????????",
  "value": "1303" },

{
  "label": "?????????",
  "value": "1304" },

{
  "label": "?????????",
  "value": "1305" },

{
  "label": "?????????",
  "value": "1306" },

{
  "label": "????????????",
  "value": "1307" },

{
  "label": "?????????",
  "value": "1308" },

{
  "label": "?????????",
  "value": "1309" },

{
  "label": "?????????",
  "value": "1310" },

{
  "label": "?????????",
  "value": "1311" }],


[{
  "label": "?????????",
  "value": "1401" },

{
  "label": "?????????",
  "value": "1402" },

{
  "label": "?????????",
  "value": "1403" },

{
  "label": "?????????",
  "value": "1404" },

{
  "label": "?????????",
  "value": "1405" },

{
  "label": "?????????",
  "value": "1406" },

{
  "label": "?????????",
  "value": "1407" },

{
  "label": "?????????",
  "value": "1408" },

{
  "label": "?????????",
  "value": "1409" },

{
  "label": "?????????",
  "value": "1410" },

{
  "label": "?????????",
  "value": "1411" }],


[{
  "label": "???????????????",
  "value": "1501" },

{
  "label": "?????????",
  "value": "1502" },

{
  "label": "?????????",
  "value": "1503" },

{
  "label": "?????????",
  "value": "1504" },

{
  "label": "?????????",
  "value": "1505" },

{
  "label": "???????????????",
  "value": "1506" },

{
  "label": "???????????????",
  "value": "1507" },

{
  "label": "???????????????",
  "value": "1508" },

{
  "label": "???????????????",
  "value": "1509" },

{
  "label": "?????????",
  "value": "1522" },

{
  "label": "???????????????",
  "value": "1525" },

{
  "label": "????????????",
  "value": "1529" }],


[{
  "label": "?????????",
  "value": "2101" },

{
  "label": "?????????",
  "value": "2102" },

{
  "label": "?????????",
  "value": "2103" },

{
  "label": "?????????",
  "value": "2104" },

{
  "label": "?????????",
  "value": "2105" },

{
  "label": "?????????",
  "value": "2106" },

{
  "label": "?????????",
  "value": "2107" },

{
  "label": "?????????",
  "value": "2108" },

{
  "label": "?????????",
  "value": "2109" },

{
  "label": "?????????",
  "value": "2110" },

{
  "label": "?????????",
  "value": "2111" },

{
  "label": "?????????",
  "value": "2112" },

{
  "label": "?????????",
  "value": "2113" },

{
  "label": "????????????",
  "value": "2114" }],


[{
  "label": "?????????",
  "value": "2201" },

{
  "label": "?????????",
  "value": "2202" },

{
  "label": "?????????",
  "value": "2203" },

{
  "label": "?????????",
  "value": "2204" },

{
  "label": "?????????",
  "value": "2205" },

{
  "label": "?????????",
  "value": "2206" },

{
  "label": "?????????",
  "value": "2207" },

{
  "label": "?????????",
  "value": "2208" },

{
  "label": "????????????????????????",
  "value": "2224" }],


[{
  "label": "????????????",
  "value": "2301" },

{
  "label": "???????????????",
  "value": "2302" },

{
  "label": "?????????",
  "value": "2303" },

{
  "label": "?????????",
  "value": "2304" },

{
  "label": "????????????",
  "value": "2305" },

{
  "label": "?????????",
  "value": "2306" },

{
  "label": "?????????",
  "value": "2307" },

{
  "label": "????????????",
  "value": "2308" },

{
  "label": "????????????",
  "value": "2309" },

{
  "label": "????????????",
  "value": "2310" },

{
  "label": "?????????",
  "value": "2311" },

{
  "label": "?????????",
  "value": "2312" },

{
  "label": "??????????????????",
  "value": "2327" }],


[{
  "label": "?????????",
  "value": "3101" }],

[{
  "label": "?????????",
  "value": "3201" },

{
  "label": "?????????",
  "value": "3202" },

{
  "label": "?????????",
  "value": "3203" },

{
  "label": "?????????",
  "value": "3204" },

{
  "label": "?????????",
  "value": "3205" },

{
  "label": "?????????",
  "value": "3206" },

{
  "label": "????????????",
  "value": "3207" },

{
  "label": "?????????",
  "value": "3208" },

{
  "label": "?????????",
  "value": "3209" },

{
  "label": "?????????",
  "value": "3210" },

{
  "label": "?????????",
  "value": "3211" },

{
  "label": "?????????",
  "value": "3212" },

{
  "label": "?????????",
  "value": "3213" }],


[{
  "label": "?????????",
  "value": "3301" },

{
  "label": "?????????",
  "value": "3302" },

{
  "label": "?????????",
  "value": "3303" },

{
  "label": "?????????",
  "value": "3304" },

{
  "label": "?????????",
  "value": "3305" },

{
  "label": "?????????",
  "value": "3306" },

{
  "label": "?????????",
  "value": "3307" },

{
  "label": "?????????",
  "value": "3308" },

{
  "label": "?????????",
  "value": "3309" },

{
  "label": "?????????",
  "value": "3310" },

{
  "label": "?????????",
  "value": "3311" }],


[{
  "label": "?????????",
  "value": "3401" },

{
  "label": "?????????",
  "value": "3402" },

{
  "label": "?????????",
  "value": "3403" },

{
  "label": "?????????",
  "value": "3404" },

{
  "label": "????????????",
  "value": "3405" },

{
  "label": "?????????",
  "value": "3406" },

{
  "label": "?????????",
  "value": "3407" },

{
  "label": "?????????",
  "value": "3408" },

{
  "label": "?????????",
  "value": "3410" },

{
  "label": "?????????",
  "value": "3411" },

{
  "label": "?????????",
  "value": "3412" },

{
  "label": "?????????",
  "value": "3413" },

{
  "label": "?????????",
  "value": "3415" },

{
  "label": "?????????",
  "value": "3416" },

{
  "label": "?????????",
  "value": "3417" },

{
  "label": "?????????",
  "value": "3418" }],


[{
  "label": "?????????",
  "value": "3501" },

{
  "label": "?????????",
  "value": "3502" },

{
  "label": "?????????",
  "value": "3503" },

{
  "label": "?????????",
  "value": "3504" },

{
  "label": "?????????",
  "value": "3505" },

{
  "label": "?????????",
  "value": "3506" },

{
  "label": "?????????",
  "value": "3507" },

{
  "label": "?????????",
  "value": "3508" },

{
  "label": "?????????",
  "value": "3509" }],


[{
  "label": "?????????",
  "value": "3601" },

{
  "label": "????????????",
  "value": "3602" },

{
  "label": "?????????",
  "value": "3603" },

{
  "label": "?????????",
  "value": "3604" },

{
  "label": "?????????",
  "value": "3605" },

{
  "label": "?????????",
  "value": "3606" },

{
  "label": "?????????",
  "value": "3607" },

{
  "label": "?????????",
  "value": "3608" },

{
  "label": "?????????",
  "value": "3609" },

{
  "label": "?????????",
  "value": "3610" },

{
  "label": "?????????",
  "value": "3611" }],


[{
  "label": "?????????",
  "value": "3701" },

{
  "label": "?????????",
  "value": "3702" },

{
  "label": "?????????",
  "value": "3703" },

{
  "label": "?????????",
  "value": "3704" },

{
  "label": "?????????",
  "value": "3705" },

{
  "label": "?????????",
  "value": "3706" },

{
  "label": "?????????",
  "value": "3707" },

{
  "label": "?????????",
  "value": "3708" },

{
  "label": "?????????",
  "value": "3709" },

{
  "label": "?????????",
  "value": "3710" },

{
  "label": "?????????",
  "value": "3711" },

{
  "label": "?????????",
  "value": "3712" },

{
  "label": "?????????",
  "value": "3713" },

{
  "label": "?????????",
  "value": "3714" },

{
  "label": "?????????",
  "value": "3715" },

{
  "label": "?????????",
  "value": "3716" },

{
  "label": "?????????",
  "value": "3717" }],


[{
  "label": "?????????",
  "value": "4101" },

{
  "label": "?????????",
  "value": "4102" },

{
  "label": "?????????",
  "value": "4103" },

{
  "label": "????????????",
  "value": "4104" },

{
  "label": "?????????",
  "value": "4105" },

{
  "label": "?????????",
  "value": "4106" },

{
  "label": "?????????",
  "value": "4107" },

{
  "label": "?????????",
  "value": "4108" },

{
  "label": "?????????",
  "value": "4109" },

{
  "label": "?????????",
  "value": "4110" },

{
  "label": "?????????",
  "value": "4111" },

{
  "label": "????????????",
  "value": "4112" },

{
  "label": "?????????",
  "value": "4113" },

{
  "label": "?????????",
  "value": "4114" },

{
  "label": "?????????",
  "value": "4115" },

{
  "label": "?????????",
  "value": "4116" },

{
  "label": "????????????",
  "value": "4117" },

{
  "label": "???????????????????????????",
  "value": "4190" }],


[{
  "label": "?????????",
  "value": "4201" },

{
  "label": "?????????",
  "value": "4202" },

{
  "label": "?????????",
  "value": "4203" },

{
  "label": "?????????",
  "value": "4205" },

{
  "label": "?????????",
  "value": "4206" },

{
  "label": "?????????",
  "value": "4207" },

{
  "label": "?????????",
  "value": "4208" },

{
  "label": "?????????",
  "value": "4209" },

{
  "label": "?????????",
  "value": "4210" },

{
  "label": "?????????",
  "value": "4211" },

{
  "label": "?????????",
  "value": "4212" },

{
  "label": "?????????",
  "value": "4213" },

{
  "label": "??????????????????????????????",
  "value": "4228" },

{
  "label": "???????????????????????????",
  "value": "4290" }],


[{
  "label": "?????????",
  "value": "4301" },

{
  "label": "?????????",
  "value": "4302" },

{
  "label": "?????????",
  "value": "4303" },

{
  "label": "?????????",
  "value": "4304" },

{
  "label": "?????????",
  "value": "4305" },

{
  "label": "?????????",
  "value": "4306" },

{
  "label": "?????????",
  "value": "4307" },

{
  "label": "????????????",
  "value": "4308" },

{
  "label": "?????????",
  "value": "4309" },

{
  "label": "?????????",
  "value": "4310" },

{
  "label": "?????????",
  "value": "4311" },

{
  "label": "?????????",
  "value": "4312" },

{
  "label": "?????????",
  "value": "4313" },

{
  "label": "??????????????????????????????",
  "value": "4331" }],


[{
  "label": "?????????",
  "value": "4401" },

{
  "label": "?????????",
  "value": "4402" },

{
  "label": "?????????",
  "value": "4403" },

{
  "label": "?????????",
  "value": "4404" },

{
  "label": "?????????",
  "value": "4405" },

{
  "label": "?????????",
  "value": "4406" },

{
  "label": "?????????",
  "value": "4407" },

{
  "label": "?????????",
  "value": "4408" },

{
  "label": "?????????",
  "value": "4409" },

{
  "label": "?????????",
  "value": "4412" },

{
  "label": "?????????",
  "value": "4413" },

{
  "label": "?????????",
  "value": "4414" },

{
  "label": "?????????",
  "value": "4415" },

{
  "label": "?????????",
  "value": "4416" },

{
  "label": "?????????",
  "value": "4417" },

{
  "label": "?????????",
  "value": "4418" },

{
  "label": "?????????",
  "value": "4419" },

{
  "label": "?????????",
  "value": "4420" },

{
  "label": "?????????",
  "value": "4451" },

{
  "label": "?????????",
  "value": "4452" },

{
  "label": "?????????",
  "value": "4453" }],


[{
  "label": "?????????",
  "value": "4501" },

{
  "label": "?????????",
  "value": "4502" },

{
  "label": "?????????",
  "value": "4503" },

{
  "label": "?????????",
  "value": "4504" },

{
  "label": "?????????",
  "value": "4505" },

{
  "label": "????????????",
  "value": "4506" },

{
  "label": "?????????",
  "value": "4507" },

{
  "label": "?????????",
  "value": "4508" },

{
  "label": "?????????",
  "value": "4509" },

{
  "label": "?????????",
  "value": "4510" },

{
  "label": "?????????",
  "value": "4511" },

{
  "label": "?????????",
  "value": "4512" },

{
  "label": "?????????",
  "value": "4513" },

{
  "label": "?????????",
  "value": "4514" }],


[{
  "label": "?????????",
  "value": "4601" },

{
  "label": "?????????",
  "value": "4602" },

{
  "label": "?????????",
  "value": "4603" },

{
  "label": "?????????",
  "value": "4604" },

{
  "label": "???????????????????????????",
  "value": "4690" }],


[{
  "label": "?????????",
  "value": "5001" },

{
  "label": "???",
  "value": "5002" }],


[{
  "label": "?????????",
  "value": "5101" },

{
  "label": "?????????",
  "value": "5103" },

{
  "label": "????????????",
  "value": "5104" },

{
  "label": "?????????",
  "value": "5105" },

{
  "label": "?????????",
  "value": "5106" },

{
  "label": "?????????",
  "value": "5107" },

{
  "label": "?????????",
  "value": "5108" },

{
  "label": "?????????",
  "value": "5109" },

{
  "label": "?????????",
  "value": "5110" },

{
  "label": "?????????",
  "value": "5111" },

{
  "label": "?????????",
  "value": "5113" },

{
  "label": "?????????",
  "value": "5114" },

{
  "label": "?????????",
  "value": "5115" },

{
  "label": "?????????",
  "value": "5116" },

{
  "label": "?????????",
  "value": "5117" },

{
  "label": "?????????",
  "value": "5118" },

{
  "label": "?????????",
  "value": "5119" },

{
  "label": "?????????",
  "value": "5120" },

{
  "label": "???????????????????????????",
  "value": "5132" },

{
  "label": "?????????????????????",
  "value": "5133" },

{
  "label": "?????????????????????",
  "value": "5134" }],


[{
  "label": "?????????",
  "value": "5201" },

{
  "label": "????????????",
  "value": "5202" },

{
  "label": "?????????",
  "value": "5203" },

{
  "label": "?????????",
  "value": "5204" },

{
  "label": "?????????",
  "value": "5205" },

{
  "label": "?????????",
  "value": "5206" },

{
  "label": "?????????????????????????????????",
  "value": "5223" },

{
  "label": "??????????????????????????????",
  "value": "5226" },

{
  "label": "??????????????????????????????",
  "value": "5227" }],


[{
  "label": "?????????",
  "value": "5301" },

{
  "label": "?????????",
  "value": "5303" },

{
  "label": "?????????",
  "value": "5304" },

{
  "label": "?????????",
  "value": "5305" },

{
  "label": "?????????",
  "value": "5306" },

{
  "label": "?????????",
  "value": "5307" },

{
  "label": "?????????",
  "value": "5308" },

{
  "label": "?????????",
  "value": "5309" },

{
  "label": "?????????????????????",
  "value": "5323" },

{
  "label": "??????????????????????????????",
  "value": "5325" },

{
  "label": "???????????????????????????",
  "value": "5326" },

{
  "label": "???????????????????????????",
  "value": "5328" },

{
  "label": "?????????????????????",
  "value": "5329" },

{
  "label": "??????????????????????????????",
  "value": "5331" },

{
  "label": "????????????????????????",
  "value": "5333" },

{
  "label": "?????????????????????",
  "value": "5334" }],


[{
  "label": "?????????",
  "value": "5401" },

{
  "label": "????????????",
  "value": "5402" },

{
  "label": "?????????",
  "value": "5403" },

{
  "label": "?????????",
  "value": "5404" },

{
  "label": "?????????",
  "value": "5405" },

{
  "label": "????????????",
  "value": "5424" },

{
  "label": "????????????",
  "value": "5425" }],


[{
  "label": "?????????",
  "value": "6101" },

{
  "label": "?????????",
  "value": "6102" },

{
  "label": "?????????",
  "value": "6103" },

{
  "label": "?????????",
  "value": "6104" },

{
  "label": "?????????",
  "value": "6105" },

{
  "label": "?????????",
  "value": "6106" },

{
  "label": "?????????",
  "value": "6107" },

{
  "label": "?????????",
  "value": "6108" },

{
  "label": "?????????",
  "value": "6109" },

{
  "label": "?????????",
  "value": "6110" }],


[{
  "label": "?????????",
  "value": "6201" },

{
  "label": "????????????",
  "value": "6202" },

{
  "label": "?????????",
  "value": "6203" },

{
  "label": "?????????",
  "value": "6204" },

{
  "label": "?????????",
  "value": "6205" },

{
  "label": "?????????",
  "value": "6206" },

{
  "label": "?????????",
  "value": "6207" },

{
  "label": "?????????",
  "value": "6208" },

{
  "label": "?????????",
  "value": "6209" },

{
  "label": "?????????",
  "value": "6210" },

{
  "label": "?????????",
  "value": "6211" },

{
  "label": "?????????",
  "value": "6212" },

{
  "label": "?????????????????????",
  "value": "6229" },

{
  "label": "?????????????????????",
  "value": "6230" }],


[{
  "label": "?????????",
  "value": "6301" },

{
  "label": "?????????",
  "value": "6302" },

{
  "label": "?????????????????????",
  "value": "6322" },

{
  "label": "?????????????????????",
  "value": "6323" },

{
  "label": "?????????????????????",
  "value": "6325" },

{
  "label": "?????????????????????",
  "value": "6326" },

{
  "label": "?????????????????????",
  "value": "6327" },

{
  "label": "??????????????????????????????",
  "value": "6328" }],


[{
  "label": "?????????",
  "value": "6401" },

{
  "label": "????????????",
  "value": "6402" },

{
  "label": "?????????",
  "value": "6403" },

{
  "label": "?????????",
  "value": "6404" },

{
  "label": "?????????",
  "value": "6405" }],


[{
  "label": "???????????????",
  "value": "6501" },

{
  "label": "???????????????",
  "value": "6502" },

{
  "label": "????????????",
  "value": "6504" },

{
  "label": "?????????",
  "value": "6505" },

{
  "label": "?????????????????????",
  "value": "6523" },

{
  "label": "???????????????????????????",
  "value": "6527" },

{
  "label": "???????????????????????????",
  "value": "6528" },

{
  "label": "???????????????",
  "value": "6529" },

{
  "label": "?????????????????????????????????",
  "value": "6530" },

{
  "label": "????????????",
  "value": "6531" },

{
  "label": "????????????",
  "value": "6532" },

{
  "label": "????????????????????????",
  "value": "6540" },

{
  "label": "????????????",
  "value": "6542" },

{
  "label": "???????????????",
  "value": "6543" },

{
  "label": "?????????????????????????????????",
  "value": "6590" }],


[{
  "label": "??????",
  "value": "6601" },

{
  "label": "??????",
  "value": "6602" },

{
  "label": "??????",
  "value": "6603" },

{
  "label": "??????",
  "value": "6604" },

{
  "label": "??????",
  "value": "6605" },

{
  "label": "??????",
  "value": "6606" },

{
  "label": "??????",
  "value": "6607" },

{
  "label": "??????",
  "value": "6608" },

{
  "label": "??????",
  "value": "6609" },

{
  "label": "??????",
  "value": "6610" },

{
  "label": "??????",
  "value": "6611" },

{
  "label": "??????",
  "value": "6612" },

{
  "label": "??????",
  "value": "6613" },

{
  "label": "??????",
  "value": "6614" },

{
  "label": "??????",
  "value": "6615" },

{
  "label": "??????",
  "value": "6616" },

{
  "label": "??????",
  "value": "6617" }],


[{
  "label": "?????????",
  "value": "6701" },

{
  "label": "??????",
  "value": "6702" },

{
  "label": "??????",
  "value": "6703" }],


[{
  "label": "????????????",
  "value": "6801" },

{
  "label": "?????????",
  "value": "6802" },

{
  "label": "?????????",
  "value": "6803" },

{
  "label": "?????????",
  "value": "6804" }],


[{
  "label": "?????????",
  "value": "6901" }]];var _default =


cityData;exports.default = _default;

/***/ }),

/***/ 379:
/*!**************************************************************************!*\
  !*** D:/Code/uniapp/fruitsShop/components/use-address/city-data/area.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /* eslint-disable */
var areaData = [
[
[{
  "label": "?????????",
  "value": "110101" },

{
  "label": "?????????",
  "value": "110102" },

{
  "label": "?????????",
  "value": "110105" },

{
  "label": "?????????",
  "value": "110106" },

{
  "label": "????????????",
  "value": "110107" },

{
  "label": "?????????",
  "value": "110108" },

{
  "label": "????????????",
  "value": "110109" },

{
  "label": "?????????",
  "value": "110111" },

{
  "label": "?????????",
  "value": "110112" },

{
  "label": "?????????",
  "value": "110113" },

{
  "label": "?????????",
  "value": "110114" },

{
  "label": "?????????",
  "value": "110115" },

{
  "label": "?????????",
  "value": "110116" },

{
  "label": "?????????",
  "value": "110117" },

{
  "label": "?????????",
  "value": "110118" },

{
  "label": "?????????",
  "value": "110119" }]],



[
[{
  "label": "?????????",
  "value": "120101" },

{
  "label": "?????????",
  "value": "120102" },

{
  "label": "?????????",
  "value": "120103" },

{
  "label": "?????????",
  "value": "120104" },

{
  "label": "?????????",
  "value": "120105" },

{
  "label": "?????????",
  "value": "120106" },

{
  "label": "?????????",
  "value": "120110" },

{
  "label": "?????????",
  "value": "120111" },

{
  "label": "?????????",
  "value": "120112" },

{
  "label": "?????????",
  "value": "120113" },

{
  "label": "?????????",
  "value": "120114" },

{
  "label": "?????????",
  "value": "120115" },

{
  "label": "????????????",
  "value": "120116" },

{
  "label": "?????????",
  "value": "120117" },

{
  "label": "?????????",
  "value": "120118" },

{
  "label": "?????????",
  "value": "120119" }]],



[
[{
  "label": "?????????",
  "value": "130102" },

{
  "label": "?????????",
  "value": "130104" },

{
  "label": "?????????",
  "value": "130105" },

{
  "label": "????????????",
  "value": "130107" },

{
  "label": "?????????",
  "value": "130108" },

{
  "label": "?????????",
  "value": "130109" },

{
  "label": "?????????",
  "value": "130110" },

{
  "label": "?????????",
  "value": "130111" },

{
  "label": "?????????",
  "value": "130121" },

{
  "label": "?????????",
  "value": "130123" },

{
  "label": "?????????",
  "value": "130125" },

{
  "label": "?????????",
  "value": "130126" },

{
  "label": "?????????",
  "value": "130127" },

{
  "label": "?????????",
  "value": "130128" },

{
  "label": "?????????",
  "value": "130129" },

{
  "label": "?????????",
  "value": "130130" },

{
  "label": "?????????",
  "value": "130131" },

{
  "label": "?????????",
  "value": "130132" },

{
  "label": "??????",
  "value": "130133" },

{
  "label": "????????????????????????????????????",
  "value": "130171" },

{
  "label": "???????????????????????????",
  "value": "130172" },

{
  "label": "?????????",
  "value": "130181" },

{
  "label": "?????????",
  "value": "130183" },

{
  "label": "?????????",
  "value": "130184" }],


[{
  "label": "?????????",
  "value": "130202" },

{
  "label": "?????????",
  "value": "130203" },

{
  "label": "?????????",
  "value": "130204" },

{
  "label": "?????????",
  "value": "130205" },

{
  "label": "?????????",
  "value": "130207" },

{
  "label": "?????????",
  "value": "130208" },

{
  "label": "????????????",
  "value": "130209" },

{
  "label": "??????",
  "value": "130223" },

{
  "label": "?????????",
  "value": "130224" },

{
  "label": "?????????",
  "value": "130225" },

{
  "label": "?????????",
  "value": "130227" },

{
  "label": "?????????",
  "value": "130229" },

{
  "label": "????????????????????????????????????",
  "value": "130271" },

{
  "label": "????????????????????????",
  "value": "130272" },

{
  "label": "?????????????????????????????????",
  "value": "130273" },

{
  "label": "?????????????????????????????????",
  "value": "130274" },

{
  "label": "?????????",
  "value": "130281" },

{
  "label": "?????????",
  "value": "130283" }],


[{
  "label": "?????????",
  "value": "130302" },

{
  "label": "????????????",
  "value": "130303" },

{
  "label": "????????????",
  "value": "130304" },

{
  "label": "?????????",
  "value": "130306" },

{
  "label": "?????????????????????",
  "value": "130321" },

{
  "label": "?????????",
  "value": "130322" },

{
  "label": "?????????",
  "value": "130324" },

{
  "label": "?????????????????????????????????",
  "value": "130371" },

{
  "label": "???????????????",
  "value": "130372" }],


[{
  "label": "?????????",
  "value": "130402" },

{
  "label": "?????????",
  "value": "130403" },

{
  "label": "?????????",
  "value": "130404" },

{
  "label": "????????????",
  "value": "130406" },

{
  "label": "?????????",
  "value": "130407" },

{
  "label": "?????????",
  "value": "130408" },

{
  "label": "?????????",
  "value": "130423" },

{
  "label": "?????????",
  "value": "130424" },

{
  "label": "?????????",
  "value": "130425" },

{
  "label": "??????",
  "value": "130426" },

{
  "label": "??????",
  "value": "130427" },

{
  "label": "??????",
  "value": "130430" },

{
  "label": "?????????",
  "value": "130431" },

{
  "label": "?????????",
  "value": "130432" },

{
  "label": "?????????",
  "value": "130433" },

{
  "label": "??????",
  "value": "130434" },

{
  "label": "?????????",
  "value": "130435" },

{
  "label": "???????????????????????????",
  "value": "130471" },

{
  "label": "??????????????????",
  "value": "130473" },

{
  "label": "?????????",
  "value": "130481" }],


[{
  "label": "?????????",
  "value": "130502" },

{
  "label": "?????????",
  "value": "130503" },

{
  "label": "?????????",
  "value": "130521" },

{
  "label": "?????????",
  "value": "130522" },

{
  "label": "?????????",
  "value": "130523" },

{
  "label": "?????????",
  "value": "130524" },

{
  "label": "?????????",
  "value": "130525" },

{
  "label": "??????",
  "value": "130526" },

{
  "label": "?????????",
  "value": "130527" },

{
  "label": "?????????",
  "value": "130528" },

{
  "label": "?????????",
  "value": "130529" },

{
  "label": "?????????",
  "value": "130530" },

{
  "label": "?????????",
  "value": "130531" },

{
  "label": "?????????",
  "value": "130532" },

{
  "label": "??????",
  "value": "130533" },

{
  "label": "?????????",
  "value": "130534" },

{
  "label": "?????????",
  "value": "130535" },

{
  "label": "???????????????????????????",
  "value": "130571" },

{
  "label": "?????????",
  "value": "130581" },

{
  "label": "?????????",
  "value": "130582" }],


[{
  "label": "?????????",
  "value": "130602" },

{
  "label": "?????????",
  "value": "130606" },

{
  "label": "?????????",
  "value": "130607" },

{
  "label": "?????????",
  "value": "130608" },

{
  "label": "?????????",
  "value": "130609" },

{
  "label": "?????????",
  "value": "130623" },

{
  "label": "?????????",
  "value": "130624" },

{
  "label": "?????????",
  "value": "130626" },

{
  "label": "??????",
  "value": "130627" },

{
  "label": "?????????",
  "value": "130628" },

{
  "label": "?????????",
  "value": "130629" },

{
  "label": "?????????",
  "value": "130630" },

{
  "label": "?????????",
  "value": "130631" },

{
  "label": "?????????",
  "value": "130632" },

{
  "label": "??????",
  "value": "130633" },

{
  "label": "?????????",
  "value": "130634" },

{
  "label": "??????",
  "value": "130635" },

{
  "label": "?????????",
  "value": "130636" },

{
  "label": "?????????",
  "value": "130637" },

{
  "label": "??????",
  "value": "130638" },

{
  "label": "?????????????????????????????????",
  "value": "130671" },

{
  "label": "??????????????????",
  "value": "130672" },

{
  "label": "?????????",
  "value": "130681" },

{
  "label": "?????????",
  "value": "130682" },

{
  "label": "?????????",
  "value": "130683" },

{
  "label": "????????????",
  "value": "130684" }],


[{
  "label": "?????????",
  "value": "130702" },

{
  "label": "?????????",
  "value": "130703" },

{
  "label": "?????????",
  "value": "130705" },

{
  "label": "????????????",
  "value": "130706" },

{
  "label": "?????????",
  "value": "130708" },

{
  "label": "?????????",
  "value": "130709" },

{
  "label": "?????????",
  "value": "130722" },

{
  "label": "?????????",
  "value": "130723" },

{
  "label": "?????????",
  "value": "130724" },

{
  "label": "?????????",
  "value": "130725" },

{
  "label": "??????",
  "value": "130726" },

{
  "label": "?????????",
  "value": "130727" },

{
  "label": "?????????",
  "value": "130728" },

{
  "label": "?????????",
  "value": "130730" },

{
  "label": "?????????",
  "value": "130731" },

{
  "label": "?????????",
  "value": "130732" },

{
  "label": "???????????????????????????????????????",
  "value": "130771" },

{
  "label": "???????????????????????????",
  "value": "130772" },

{
  "label": "???????????????????????????",
  "value": "130773" }],


[{
  "label": "?????????",
  "value": "130802" },

{
  "label": "?????????",
  "value": "130803" },

{
  "label": "??????????????????",
  "value": "130804" },

{
  "label": "?????????",
  "value": "130821" },

{
  "label": "?????????",
  "value": "130822" },

{
  "label": "?????????",
  "value": "130824" },

{
  "label": "?????????",
  "value": "130825" },

{
  "label": "?????????????????????",
  "value": "130826" },

{
  "label": "?????????????????????",
  "value": "130827" },

{
  "label": "??????????????????????????????",
  "value": "130828" },

{
  "label": "?????????????????????????????????",
  "value": "130871" },

{
  "label": "?????????",
  "value": "130881" }],


[{
  "label": "?????????",
  "value": "130902" },

{
  "label": "?????????",
  "value": "130903" },

{
  "label": "??????",
  "value": "130921" },

{
  "label": "??????",
  "value": "130922" },

{
  "label": "?????????",
  "value": "130923" },

{
  "label": "?????????",
  "value": "130924" },

{
  "label": "?????????",
  "value": "130925" },

{
  "label": "?????????",
  "value": "130926" },

{
  "label": "?????????",
  "value": "130927" },

{
  "label": "?????????",
  "value": "130928" },

{
  "label": "??????",
  "value": "130929" },

{
  "label": "?????????????????????",
  "value": "130930" },

{
  "label": "???????????????????????????",
  "value": "130971" },

{
  "label": "?????????????????????????????????",
  "value": "130972" },

{
  "label": "??????????????????",
  "value": "130973" },

{
  "label": "?????????",
  "value": "130981" },

{
  "label": "?????????",
  "value": "130982" },

{
  "label": "?????????",
  "value": "130983" },

{
  "label": "?????????",
  "value": "130984" }],


[{
  "label": "?????????",
  "value": "131002" },

{
  "label": "?????????",
  "value": "131003" },

{
  "label": "?????????",
  "value": "131022" },

{
  "label": "?????????",
  "value": "131023" },

{
  "label": "?????????",
  "value": "131024" },

{
  "label": "?????????",
  "value": "131025" },

{
  "label": "?????????",
  "value": "131026" },

{
  "label": "?????????????????????",
  "value": "131028" },

{
  "label": "???????????????????????????",
  "value": "131071" },

{
  "label": "?????????",
  "value": "131081" },

{
  "label": "?????????",
  "value": "131082" }],


[{
  "label": "?????????",
  "value": "131102" },

{
  "label": "?????????",
  "value": "131103" },

{
  "label": "?????????",
  "value": "131121" },

{
  "label": "?????????",
  "value": "131122" },

{
  "label": "?????????",
  "value": "131123" },

{
  "label": "?????????",
  "value": "131124" },

{
  "label": "?????????",
  "value": "131125" },

{
  "label": "?????????",
  "value": "131126" },

{
  "label": "??????",
  "value": "131127" },

{
  "label": "?????????",
  "value": "131128" },

{
  "label": "???????????????????????????",
  "value": "131171" },

{
  "label": "??????????????????",
  "value": "131172" },

{
  "label": "?????????",
  "value": "131182" }]],



[
[{
  "label": "?????????",
  "value": "140105" },

{
  "label": "?????????",
  "value": "140106" },

{
  "label": "????????????",
  "value": "140107" },

{
  "label": "????????????",
  "value": "140108" },

{
  "label": "????????????",
  "value": "140109" },

{
  "label": "?????????",
  "value": "140110" },

{
  "label": "?????????",
  "value": "140121" },

{
  "label": "?????????",
  "value": "140122" },

{
  "label": "?????????",
  "value": "140123" },

{
  "label": "?????????????????????????????????",
  "value": "140171" },

{
  "label": "?????????",
  "value": "140181" }],


[{
  "label": "??????",
  "value": "140202" },

{
  "label": "??????",
  "value": "140203" },

{
  "label": "?????????",
  "value": "140211" },

{
  "label": "?????????",
  "value": "140212" },

{
  "label": "?????????",
  "value": "140221" },

{
  "label": "?????????",
  "value": "140222" },

{
  "label": "?????????",
  "value": "140223" },

{
  "label": "?????????",
  "value": "140224" },

{
  "label": "?????????",
  "value": "140225" },

{
  "label": "?????????",
  "value": "140226" },

{
  "label": "?????????",
  "value": "140227" },

{
  "label": "???????????????????????????",
  "value": "140271" }],


[{
  "label": "??????",
  "value": "140302" },

{
  "label": "??????",
  "value": "140303" },

{
  "label": "??????",
  "value": "140311" },

{
  "label": "?????????",
  "value": "140321" },

{
  "label": "??????",
  "value": "140322" },

{
  "label": "???????????????????????????",
  "value": "140371" }],


[{
  "label": "??????",
  "value": "140402" },

{
  "label": "??????",
  "value": "140411" },

{
  "label": "?????????",
  "value": "140421" },

{
  "label": "?????????",
  "value": "140423" },

{
  "label": "?????????",
  "value": "140424" },

{
  "label": "?????????",
  "value": "140425" },

{
  "label": "?????????",
  "value": "140426" },

{
  "label": "?????????",
  "value": "140427" },

{
  "label": "?????????",
  "value": "140428" },

{
  "label": "?????????",
  "value": "140429" },

{
  "label": "??????",
  "value": "140430" },

{
  "label": "?????????",
  "value": "140431" },

{
  "label": "????????????????????????????????????",
  "value": "140471" },

{
  "label": "?????????",
  "value": "140481" }],


[{
  "label": "??????",
  "value": "140502" },

{
  "label": "?????????",
  "value": "140521" },

{
  "label": "?????????",
  "value": "140522" },

{
  "label": "?????????",
  "value": "140524" },

{
  "label": "?????????",
  "value": "140525" },

{
  "label": "?????????",
  "value": "140581" }],


[{
  "label": "?????????",
  "value": "140602" },

{
  "label": "?????????",
  "value": "140603" },

{
  "label": "?????????",
  "value": "140621" },

{
  "label": "??????",
  "value": "140622" },

{
  "label": "?????????",
  "value": "140623" },

{
  "label": "?????????",
  "value": "140624" },

{
  "label": "???????????????????????????",
  "value": "140671" }],


[{
  "label": "?????????",
  "value": "140702" },

{
  "label": "?????????",
  "value": "140721" },

{
  "label": "?????????",
  "value": "140722" },

{
  "label": "?????????",
  "value": "140723" },

{
  "label": "?????????",
  "value": "140724" },

{
  "label": "?????????",
  "value": "140725" },

{
  "label": "?????????",
  "value": "140726" },

{
  "label": "??????",
  "value": "140727" },

{
  "label": "?????????",
  "value": "140728" },

{
  "label": "?????????",
  "value": "140729" },

{
  "label": "?????????",
  "value": "140781" }],


[{
  "label": "?????????",
  "value": "140802" },

{
  "label": "?????????",
  "value": "140821" },

{
  "label": "?????????",
  "value": "140822" },

{
  "label": "?????????",
  "value": "140823" },

{
  "label": "?????????",
  "value": "140824" },

{
  "label": "?????????",
  "value": "140825" },

{
  "label": "??????",
  "value": "140826" },

{
  "label": "?????????",
  "value": "140827" },

{
  "label": "??????",
  "value": "140828" },

{
  "label": "?????????",
  "value": "140829" },

{
  "label": "?????????",
  "value": "140830" },

{
  "label": "?????????",
  "value": "140881" },

{
  "label": "?????????",
  "value": "140882" }],


[{
  "label": "?????????",
  "value": "140902" },

{
  "label": "?????????",
  "value": "140921" },

{
  "label": "?????????",
  "value": "140922" },

{
  "label": "??????",
  "value": "140923" },

{
  "label": "?????????",
  "value": "140924" },

{
  "label": "?????????",
  "value": "140925" },

{
  "label": "?????????",
  "value": "140926" },

{
  "label": "?????????",
  "value": "140927" },

{
  "label": "?????????",
  "value": "140928" },

{
  "label": "?????????",
  "value": "140929" },

{
  "label": "?????????",
  "value": "140930" },

{
  "label": "?????????",
  "value": "140931" },

{
  "label": "?????????",
  "value": "140932" },

{
  "label": "????????????????????????",
  "value": "140971" },

{
  "label": "?????????",
  "value": "140981" }],


[{
  "label": "?????????",
  "value": "141002" },

{
  "label": "?????????",
  "value": "141021" },

{
  "label": "?????????",
  "value": "141022" },

{
  "label": "?????????",
  "value": "141023" },

{
  "label": "?????????",
  "value": "141024" },

{
  "label": "??????",
  "value": "141025" },

{
  "label": "?????????",
  "value": "141026" },

{
  "label": "?????????",
  "value": "141027" },

{
  "label": "??????",
  "value": "141028" },

{
  "label": "?????????",
  "value": "141029" },

{
  "label": "?????????",
  "value": "141030" },

{
  "label": "??????",
  "value": "141031" },

{
  "label": "?????????",
  "value": "141032" },

{
  "label": "??????",
  "value": "141033" },

{
  "label": "?????????",
  "value": "141034" },

{
  "label": "?????????",
  "value": "141081" },

{
  "label": "?????????",
  "value": "141082" }],


[{
  "label": "?????????",
  "value": "141102" },

{
  "label": "?????????",
  "value": "141121" },

{
  "label": "?????????",
  "value": "141122" },

{
  "label": "??????",
  "value": "141123" },

{
  "label": "??????",
  "value": "141124" },

{
  "label": "?????????",
  "value": "141125" },

{
  "label": "?????????",
  "value": "141126" },

{
  "label": "??????",
  "value": "141127" },

{
  "label": "?????????",
  "value": "141128" },

{
  "label": "?????????",
  "value": "141129" },

{
  "label": "?????????",
  "value": "141130" },

{
  "label": "?????????",
  "value": "141181" },

{
  "label": "?????????",
  "value": "141182" }]],



[
[{
  "label": "?????????",
  "value": "150102" },

{
  "label": "?????????",
  "value": "150103" },

{
  "label": "?????????",
  "value": "150104" },

{
  "label": "?????????",
  "value": "150105" },

{
  "label": "???????????????",
  "value": "150121" },

{
  "label": "????????????",
  "value": "150122" },

{
  "label": "???????????????",
  "value": "150123" },

{
  "label": "????????????",
  "value": "150124" },

{
  "label": "?????????",
  "value": "150125" },

{
  "label": "??????????????????????????????",
  "value": "150171" },

{
  "label": "?????????????????????????????????",
  "value": "150172" }],


[{
  "label": "?????????",
  "value": "150202" },

{
  "label": "????????????",
  "value": "150203" },

{
  "label": "?????????",
  "value": "150204" },

{
  "label": "?????????",
  "value": "150205" },

{
  "label": "??????????????????",
  "value": "150206" },

{
  "label": "?????????",
  "value": "150207" },

{
  "label": "???????????????",
  "value": "150221" },

{
  "label": "?????????",
  "value": "150222" },

{
  "label": "???????????????????????????",
  "value": "150223" },

{
  "label": "???????????????????????????????????????",
  "value": "150271" }],


[{
  "label": "????????????",
  "value": "150302" },

{
  "label": "?????????",
  "value": "150303" },

{
  "label": "?????????",
  "value": "150304" }],


[{
  "label": "?????????",
  "value": "150402" },

{
  "label": "????????????",
  "value": "150403" },

{
  "label": "?????????",
  "value": "150404" },

{
  "label": "??????????????????",
  "value": "150421" },

{
  "label": "????????????",
  "value": "150422" },

{
  "label": "????????????",
  "value": "150423" },

{
  "label": "?????????",
  "value": "150424" },

{
  "label": "???????????????",
  "value": "150425" },

{
  "label": "????????????",
  "value": "150426" },

{
  "label": "????????????",
  "value": "150428" },

{
  "label": "?????????",
  "value": "150429" },

{
  "label": "?????????",
  "value": "150430" }],


[{
  "label": "????????????",
  "value": "150502" },

{
  "label": "?????????????????????",
  "value": "150521" },

{
  "label": "?????????????????????",
  "value": "150522" },

{
  "label": "?????????",
  "value": "150523" },

{
  "label": "?????????",
  "value": "150524" },

{
  "label": "?????????",
  "value": "150525" },

{
  "label": "????????????",
  "value": "150526" },

{
  "label": "???????????????????????????",
  "value": "150571" },

{
  "label": "???????????????",
  "value": "150581" }],


[{
  "label": "?????????",
  "value": "150602" },

{
  "label": "????????????",
  "value": "150603" },

{
  "label": "????????????",
  "value": "150621" },

{
  "label": "????????????",
  "value": "150622" },

{
  "label": "???????????????",
  "value": "150623" },

{
  "label": "????????????",
  "value": "150624" },

{
  "label": "?????????",
  "value": "150625" },

{
  "label": "?????????",
  "value": "150626" },

{
  "label": "???????????????",
  "value": "150627" }],


[{
  "label": "????????????",
  "value": "150702" },

{
  "label": "???????????????",
  "value": "150703" },

{
  "label": "?????????",
  "value": "150721" },

{
  "label": "?????????????????????????????????",
  "value": "150722" },

{
  "label": "??????????????????",
  "value": "150723" },

{
  "label": "?????????????????????",
  "value": "150724" },

{
  "label": "???????????????",
  "value": "150725" },

{
  "label": "??????????????????",
  "value": "150726" },

{
  "label": "??????????????????",
  "value": "150727" },

{
  "label": "????????????",
  "value": "150781" },

{
  "label": "????????????",
  "value": "150782" },

{
  "label": "????????????",
  "value": "150783" },

{
  "label": "???????????????",
  "value": "150784" },

{
  "label": "?????????",
  "value": "150785" }],


[{
  "label": "?????????",
  "value": "150802" },

{
  "label": "?????????",
  "value": "150821" },

{
  "label": "?????????",
  "value": "150822" },

{
  "label": "???????????????",
  "value": "150823" },

{
  "label": "???????????????",
  "value": "150824" },

{
  "label": "???????????????",
  "value": "150825" },

{
  "label": "????????????",
  "value": "150826" }],


[{
  "label": "?????????",
  "value": "150902" },

{
  "label": "?????????",
  "value": "150921" },

{
  "label": "?????????",
  "value": "150922" },

{
  "label": "?????????",
  "value": "150923" },

{
  "label": "?????????",
  "value": "150924" },

{
  "label": "?????????",
  "value": "150925" },

{
  "label": "?????????????????????",
  "value": "150926" },

{
  "label": "?????????????????????",
  "value": "150927" },

{
  "label": "?????????????????????",
  "value": "150928" },

{
  "label": "????????????",
  "value": "150929" },

{
  "label": "?????????",
  "value": "150981" }],


[{
  "label": "???????????????",
  "value": "152201" },

{
  "label": "????????????",
  "value": "152202" },

{
  "label": "?????????????????????",
  "value": "152221" },

{
  "label": "?????????????????????",
  "value": "152222" },

{
  "label": "????????????",
  "value": "152223" },

{
  "label": "?????????",
  "value": "152224" }],


[{
  "label": "???????????????",
  "value": "152501" },

{
  "label": "???????????????",
  "value": "152502" },

{
  "label": "????????????",
  "value": "152522" },

{
  "label": "???????????????",
  "value": "152523" },

{
  "label": "???????????????",
  "value": "152524" },

{
  "label": "??????????????????",
  "value": "152525" },

{
  "label": "??????????????????",
  "value": "152526" },

{
  "label": "????????????",
  "value": "152527" },

{
  "label": "?????????",
  "value": "152528" },

{
  "label": "????????????",
  "value": "152529" },

{
  "label": "?????????",
  "value": "152530" },

{
  "label": "?????????",
  "value": "152531" },

{
  "label": "??????????????????",
  "value": "152571" }],


[{
  "label": "???????????????",
  "value": "152921" },

{
  "label": "???????????????",
  "value": "152922" },

{
  "label": "????????????",
  "value": "152923" },

{
  "label": "?????????????????????????????????",
  "value": "152971" }]],



[
[{
  "label": "?????????",
  "value": "210102" },

{
  "label": "?????????",
  "value": "210103" },

{
  "label": "?????????",
  "value": "210104" },

{
  "label": "?????????",
  "value": "210105" },

{
  "label": "?????????",
  "value": "210106" },

{
  "label": "????????????",
  "value": "210111" },

{
  "label": "?????????",
  "value": "210112" },

{
  "label": "????????????",
  "value": "210113" },

{
  "label": "?????????",
  "value": "210114" },

{
  "label": "?????????",
  "value": "210115" },

{
  "label": "?????????",
  "value": "210123" },

{
  "label": "?????????",
  "value": "210124" },

{
  "label": "?????????",
  "value": "210181" }],


[{
  "label": "?????????",
  "value": "210202" },

{
  "label": "?????????",
  "value": "210203" },

{
  "label": "????????????",
  "value": "210204" },

{
  "label": "????????????",
  "value": "210211" },

{
  "label": "????????????",
  "value": "210212" },

{
  "label": "?????????",
  "value": "210213" },

{
  "label": "????????????",
  "value": "210214" },

{
  "label": "?????????",
  "value": "210224" },

{
  "label": "????????????",
  "value": "210281" },

{
  "label": "?????????",
  "value": "210283" }],


[{
  "label": "?????????",
  "value": "210302" },

{
  "label": "?????????",
  "value": "210303" },

{
  "label": "?????????",
  "value": "210304" },

{
  "label": "?????????",
  "value": "210311" },

{
  "label": "?????????",
  "value": "210321" },

{
  "label": "?????????????????????",
  "value": "210323" },

{
  "label": "?????????",
  "value": "210381" }],


[{
  "label": "?????????",
  "value": "210402" },

{
  "label": "?????????",
  "value": "210403" },

{
  "label": "?????????",
  "value": "210404" },

{
  "label": "?????????",
  "value": "210411" },

{
  "label": "?????????",
  "value": "210421" },

{
  "label": "?????????????????????",
  "value": "210422" },

{
  "label": "?????????????????????",
  "value": "210423" }],


[{
  "label": "?????????",
  "value": "210502" },

{
  "label": "?????????",
  "value": "210503" },

{
  "label": "?????????",
  "value": "210504" },

{
  "label": "?????????",
  "value": "210505" },

{
  "label": "?????????????????????",
  "value": "210521" },

{
  "label": "?????????????????????",
  "value": "210522" }],


[{
  "label": "?????????",
  "value": "210602" },

{
  "label": "?????????",
  "value": "210603" },

{
  "label": "?????????",
  "value": "210604" },

{
  "label": "?????????????????????",
  "value": "210624" },

{
  "label": "?????????",
  "value": "210681" },

{
  "label": "?????????",
  "value": "210682" }],


[{
  "label": "?????????",
  "value": "210702" },

{
  "label": "?????????",
  "value": "210703" },

{
  "label": "?????????",
  "value": "210711" },

{
  "label": "?????????",
  "value": "210726" },

{
  "label": "??????",
  "value": "210727" },

{
  "label": "?????????",
  "value": "210781" },

{
  "label": "?????????",
  "value": "210782" }],


[{
  "label": "?????????",
  "value": "210802" },

{
  "label": "?????????",
  "value": "210803" },

{
  "label": "????????????",
  "value": "210804" },

{
  "label": "?????????",
  "value": "210811" },

{
  "label": "?????????",
  "value": "210881" },

{
  "label": "????????????",
  "value": "210882" }],


[{
  "label": "?????????",
  "value": "210902" },

{
  "label": "?????????",
  "value": "210903" },

{
  "label": "?????????",
  "value": "210904" },

{
  "label": "????????????",
  "value": "210905" },

{
  "label": "?????????",
  "value": "210911" },

{
  "label": "????????????????????????",
  "value": "210921" },

{
  "label": "?????????",
  "value": "210922" }],


[{
  "label": "?????????",
  "value": "211002" },

{
  "label": "?????????",
  "value": "211003" },

{
  "label": "?????????",
  "value": "211004" },

{
  "label": "????????????",
  "value": "211005" },

{
  "label": "????????????",
  "value": "211011" },

{
  "label": "?????????",
  "value": "211021" },

{
  "label": "?????????",
  "value": "211081" }],


[{
  "label": "????????????",
  "value": "211102" },

{
  "label": "????????????",
  "value": "211103" },

{
  "label": "?????????",
  "value": "211104" },

{
  "label": "?????????",
  "value": "211122" }],


[{
  "label": "?????????",
  "value": "211202" },

{
  "label": "?????????",
  "value": "211204" },

{
  "label": "?????????",
  "value": "211221" },

{
  "label": "?????????",
  "value": "211223" },

{
  "label": "?????????",
  "value": "211224" },

{
  "label": "????????????",
  "value": "211281" },

{
  "label": "?????????",
  "value": "211282" }],


[{
  "label": "?????????",
  "value": "211302" },

{
  "label": "?????????",
  "value": "211303" },

{
  "label": "?????????",
  "value": "211321" },

{
  "label": "?????????",
  "value": "211322" },

{
  "label": "?????????????????????????????????",
  "value": "211324" },

{
  "label": "?????????",
  "value": "211381" },

{
  "label": "?????????",
  "value": "211382" }],


[{
  "label": "?????????",
  "value": "211402" },

{
  "label": "?????????",
  "value": "211403" },

{
  "label": "?????????",
  "value": "211404" },

{
  "label": "?????????",
  "value": "211421" },

{
  "label": "?????????",
  "value": "211422" },

{
  "label": "?????????",
  "value": "211481" }]],



[
[{
  "label": "?????????",
  "value": "220102" },

{
  "label": "?????????",
  "value": "220103" },

{
  "label": "?????????",
  "value": "220104" },

{
  "label": "?????????",
  "value": "220105" },

{
  "label": "?????????",
  "value": "220106" },

{
  "label": "?????????",
  "value": "220112" },

{
  "label": "?????????",
  "value": "220113" },

{
  "label": "?????????",
  "value": "220122" },

{
  "label": "???????????????????????????",
  "value": "220171" },

{
  "label": "???????????????????????????????????????",
  "value": "220172" },

{
  "label": "?????????????????????????????????",
  "value": "220173" },

{
  "label": "?????????????????????????????????",
  "value": "220174" },

{
  "label": "?????????",
  "value": "220182" },

{
  "label": "?????????",
  "value": "220183" }],


[{
  "label": "?????????",
  "value": "220202" },

{
  "label": "?????????",
  "value": "220203" },

{
  "label": "?????????",
  "value": "220204" },

{
  "label": "?????????",
  "value": "220211" },

{
  "label": "?????????",
  "value": "220221" },

{
  "label": "?????????????????????",
  "value": "220271" },

{
  "label": "?????????????????????????????????",
  "value": "220272" },

{
  "label": "??????????????????????????????",
  "value": "220273" },

{
  "label": "?????????",
  "value": "220281" },

{
  "label": "?????????",
  "value": "220282" },

{
  "label": "?????????",
  "value": "220283" },

{
  "label": "?????????",
  "value": "220284" }],


[{
  "label": "?????????",
  "value": "220302" },

{
  "label": "?????????",
  "value": "220303" },

{
  "label": "?????????",
  "value": "220322" },

{
  "label": "?????????????????????",
  "value": "220323" },

{
  "label": "????????????",
  "value": "220381" },

{
  "label": "?????????",
  "value": "220382" }],


[{
  "label": "?????????",
  "value": "220402" },

{
  "label": "?????????",
  "value": "220403" },

{
  "label": "?????????",
  "value": "220421" },

{
  "label": "?????????",
  "value": "220422" }],


[{
  "label": "?????????",
  "value": "220502" },

{
  "label": "????????????",
  "value": "220503" },

{
  "label": "?????????",
  "value": "220521" },

{
  "label": "?????????",
  "value": "220523" },

{
  "label": "?????????",
  "value": "220524" },

{
  "label": "????????????",
  "value": "220581" },

{
  "label": "?????????",
  "value": "220582" }],


[{
  "label": "?????????",
  "value": "220602" },

{
  "label": "?????????",
  "value": "220605" },

{
  "label": "?????????",
  "value": "220621" },

{
  "label": "?????????",
  "value": "220622" },

{
  "label": "????????????????????????",
  "value": "220623" },

{
  "label": "?????????",
  "value": "220681" }],


[{
  "label": "?????????",
  "value": "220702" },

{
  "label": "?????????????????????????????????",
  "value": "220721" },

{
  "label": "?????????",
  "value": "220722" },

{
  "label": "?????????",
  "value": "220723" },

{
  "label": "???????????????????????????",
  "value": "220771" },

{
  "label": "?????????",
  "value": "220781" }],


[{
  "label": "?????????",
  "value": "220802" },

{
  "label": "?????????",
  "value": "220821" },

{
  "label": "?????????",
  "value": "220822" },

{
  "label": "???????????????????????????",
  "value": "220871" },

{
  "label": "?????????",
  "value": "220881" },

{
  "label": "?????????",
  "value": "220882" }],


[{
  "label": "?????????",
  "value": "222401" },

{
  "label": "?????????",
  "value": "222402" },

{
  "label": "?????????",
  "value": "222403" },

{
  "label": "?????????",
  "value": "222404" },

{
  "label": "?????????",
  "value": "222405" },

{
  "label": "?????????",
  "value": "222406" },

{
  "label": "?????????",
  "value": "222424" },

{
  "label": "?????????",
  "value": "222426" }]],



[
[{
  "label": "?????????",
  "value": "230102" },

{
  "label": "?????????",
  "value": "230103" },

{
  "label": "?????????",
  "value": "230104" },

{
  "label": "?????????",
  "value": "230108" },

{
  "label": "?????????",
  "value": "230109" },

{
  "label": "?????????",
  "value": "230110" },

{
  "label": "?????????",
  "value": "230111" },

{
  "label": "?????????",
  "value": "230112" },

{
  "label": "?????????",
  "value": "230113" },

{
  "label": "?????????",
  "value": "230123" },

{
  "label": "?????????",
  "value": "230124" },

{
  "label": "??????",
  "value": "230125" },

{
  "label": "?????????",
  "value": "230126" },

{
  "label": "?????????",
  "value": "230127" },

{
  "label": "?????????",
  "value": "230128" },

{
  "label": "?????????",
  "value": "230129" },

{
  "label": "?????????",
  "value": "230183" },

{
  "label": "?????????",
  "value": "230184" }],


[{
  "label": "?????????",
  "value": "230202" },

{
  "label": "?????????",
  "value": "230203" },

{
  "label": "?????????",
  "value": "230204" },

{
  "label": "????????????",
  "value": "230205" },

{
  "label": "???????????????",
  "value": "230206" },

{
  "label": "????????????",
  "value": "230207" },

{
  "label": "????????????????????????",
  "value": "230208" },

{
  "label": "?????????",
  "value": "230221" },

{
  "label": "?????????",
  "value": "230223" },

{
  "label": "?????????",
  "value": "230224" },

{
  "label": "?????????",
  "value": "230225" },

{
  "label": "?????????",
  "value": "230227" },

{
  "label": "?????????",
  "value": "230229" },

{
  "label": "?????????",
  "value": "230230" },

{
  "label": "?????????",
  "value": "230231" },

{
  "label": "?????????",
  "value": "230281" }],


[{
  "label": "?????????",
  "value": "230302" },

{
  "label": "?????????",
  "value": "230303" },

{
  "label": "?????????",
  "value": "230304" },

{
  "label": "?????????",
  "value": "230305" },

{
  "label": "????????????",
  "value": "230306" },

{
  "label": "?????????",
  "value": "230307" },

{
  "label": "?????????",
  "value": "230321" },

{
  "label": "?????????",
  "value": "230381" },

{
  "label": "?????????",
  "value": "230382" }],


[{
  "label": "?????????",
  "value": "230402" },

{
  "label": "?????????",
  "value": "230403" },

{
  "label": "?????????",
  "value": "230404" },

{
  "label": "?????????",
  "value": "230405" },

{
  "label": "?????????",
  "value": "230406" },

{
  "label": "?????????",
  "value": "230407" },

{
  "label": "?????????",
  "value": "230421" },

{
  "label": "?????????",
  "value": "230422" }],


[{
  "label": "?????????",
  "value": "230502" },

{
  "label": "?????????",
  "value": "230503" },

{
  "label": "????????????",
  "value": "230505" },

{
  "label": "?????????",
  "value": "230506" },

{
  "label": "?????????",
  "value": "230521" },

{
  "label": "?????????",
  "value": "230522" },

{
  "label": "?????????",
  "value": "230523" },

{
  "label": "?????????",
  "value": "230524" }],


[{
  "label": "????????????",
  "value": "230602" },

{
  "label": "?????????",
  "value": "230603" },

{
  "label": "????????????",
  "value": "230604" },

{
  "label": "?????????",
  "value": "230605" },

{
  "label": "?????????",
  "value": "230606" },

{
  "label": "?????????",
  "value": "230621" },

{
  "label": "?????????",
  "value": "230622" },

{
  "label": "?????????",
  "value": "230623" },

{
  "label": "??????????????????????????????",
  "value": "230624" },

{
  "label": "?????????????????????????????????",
  "value": "230671" }],


[{
  "label": "?????????",
  "value": "230702" },

{
  "label": "?????????",
  "value": "230703" },

{
  "label": "?????????",
  "value": "230704" },

{
  "label": "?????????",
  "value": "230705" },

{
  "label": "?????????",
  "value": "230706" },

{
  "label": "?????????",
  "value": "230707" },

{
  "label": "?????????",
  "value": "230708" },

{
  "label": "????????????",
  "value": "230709" },

{
  "label": "?????????",
  "value": "230710" },

{
  "label": "????????????",
  "value": "230711" },

{
  "label": "????????????",
  "value": "230712" },

{
  "label": "?????????",
  "value": "230713" },

{
  "label": "????????????",
  "value": "230714" },

{
  "label": "?????????",
  "value": "230715" },

{
  "label": "????????????",
  "value": "230716" },

{
  "label": "?????????",
  "value": "230722" },

{
  "label": "?????????",
  "value": "230781" }],


[{
  "label": "?????????",
  "value": "230803" },

{
  "label": "?????????",
  "value": "230804" },

{
  "label": "?????????",
  "value": "230805" },

{
  "label": "??????",
  "value": "230811" },

{
  "label": "?????????",
  "value": "230822" },

{
  "label": "?????????",
  "value": "230826" },

{
  "label": "?????????",
  "value": "230828" },

{
  "label": "?????????",
  "value": "230881" },

{
  "label": "?????????",
  "value": "230882" },

{
  "label": "?????????",
  "value": "230883" }],


[{
  "label": "?????????",
  "value": "230902" },

{
  "label": "?????????",
  "value": "230903" },

{
  "label": "????????????",
  "value": "230904" },

{
  "label": "?????????",
  "value": "230921" }],


[{
  "label": "?????????",
  "value": "231002" },

{
  "label": "?????????",
  "value": "231003" },

{
  "label": "?????????",
  "value": "231004" },

{
  "label": "?????????",
  "value": "231005" },

{
  "label": "?????????",
  "value": "231025" },

{
  "label": "??????????????????????????????",
  "value": "231071" },

{
  "label": "????????????",
  "value": "231081" },

{
  "label": "?????????",
  "value": "231083" },

{
  "label": "?????????",
  "value": "231084" },

{
  "label": "?????????",
  "value": "231085" },

{
  "label": "?????????",
  "value": "231086" }],


[{
  "label": "?????????",
  "value": "231102" },

{
  "label": "?????????",
  "value": "231121" },

{
  "label": "?????????",
  "value": "231123" },

{
  "label": "?????????",
  "value": "231124" },

{
  "label": "?????????",
  "value": "231181" },

{
  "label": "???????????????",
  "value": "231182" }],


[{
  "label": "?????????",
  "value": "231202" },

{
  "label": "?????????",
  "value": "231221" },

{
  "label": "?????????",
  "value": "231222" },

{
  "label": "?????????",
  "value": "231223" },

{
  "label": "?????????",
  "value": "231224" },

{
  "label": "?????????",
  "value": "231225" },

{
  "label": "?????????",
  "value": "231226" },

{
  "label": "?????????",
  "value": "231281" },

{
  "label": "?????????",
  "value": "231282" },

{
  "label": "?????????",
  "value": "231283" }],


[{
  "label": "???????????????",
  "value": "232701" },

{
  "label": "?????????",
  "value": "232702" },

{
  "label": "?????????",
  "value": "232703" },

{
  "label": "?????????",
  "value": "232704" },

{
  "label": "?????????",
  "value": "232721" },

{
  "label": "?????????",
  "value": "232722" },

{
  "label": "?????????",
  "value": "232723" }]],



[
[{
  "label": "?????????",
  "value": "310101" },

{
  "label": "?????????",
  "value": "310104" },

{
  "label": "?????????",
  "value": "310105" },

{
  "label": "?????????",
  "value": "310106" },

{
  "label": "?????????",
  "value": "310107" },

{
  "label": "?????????",
  "value": "310109" },

{
  "label": "?????????",
  "value": "310110" },

{
  "label": "?????????",
  "value": "310112" },

{
  "label": "?????????",
  "value": "310113" },

{
  "label": "?????????",
  "value": "310114" },

{
  "label": "????????????",
  "value": "310115" },

{
  "label": "?????????",
  "value": "310116" },

{
  "label": "?????????",
  "value": "310117" },

{
  "label": "?????????",
  "value": "310118" },

{
  "label": "?????????",
  "value": "310120" },

{
  "label": "?????????",
  "value": "310151" }]],



[
[{
  "label": "?????????",
  "value": "320102" },

{
  "label": "?????????",
  "value": "320104" },

{
  "label": "?????????",
  "value": "320105" },

{
  "label": "?????????",
  "value": "320106" },

{
  "label": "?????????",
  "value": "320111" },

{
  "label": "?????????",
  "value": "320113" },

{
  "label": "????????????",
  "value": "320114" },

{
  "label": "?????????",
  "value": "320115" },

{
  "label": "?????????",
  "value": "320116" },

{
  "label": "?????????",
  "value": "320117" },

{
  "label": "?????????",
  "value": "320118" }],


[{
  "label": "?????????",
  "value": "320205" },

{
  "label": "?????????",
  "value": "320206" },

{
  "label": "?????????",
  "value": "320211" },

{
  "label": "?????????",
  "value": "320213" },

{
  "label": "?????????",
  "value": "320214" },

{
  "label": "?????????",
  "value": "320281" },

{
  "label": "?????????",
  "value": "320282" }],


[{
  "label": "?????????",
  "value": "320302" },

{
  "label": "?????????",
  "value": "320303" },

{
  "label": "?????????",
  "value": "320305" },

{
  "label": "?????????",
  "value": "320311" },

{
  "label": "?????????",
  "value": "320312" },

{
  "label": "??????",
  "value": "320321" },

{
  "label": "??????",
  "value": "320322" },

{
  "label": "?????????",
  "value": "320324" },

{
  "label": "???????????????????????????",
  "value": "320371" },

{
  "label": "?????????",
  "value": "320381" },

{
  "label": "?????????",
  "value": "320382" }],


[{
  "label": "?????????",
  "value": "320402" },

{
  "label": "?????????",
  "value": "320404" },

{
  "label": "?????????",
  "value": "320411" },

{
  "label": "?????????",
  "value": "320412" },

{
  "label": "?????????",
  "value": "320413" },

{
  "label": "?????????",
  "value": "320481" }],


[{
  "label": "?????????",
  "value": "320505" },

{
  "label": "?????????",
  "value": "320506" },

{
  "label": "?????????",
  "value": "320507" },

{
  "label": "?????????",
  "value": "320508" },

{
  "label": "?????????",
  "value": "320509" },

{
  "label": "??????????????????",
  "value": "320571" },

{
  "label": "?????????",
  "value": "320581" },

{
  "label": "????????????",
  "value": "320582" },

{
  "label": "?????????",
  "value": "320583" },

{
  "label": "?????????",
  "value": "320585" }],


[{
  "label": "?????????",
  "value": "320602" },

{
  "label": "?????????",
  "value": "320611" },

{
  "label": "?????????",
  "value": "320612" },

{
  "label": "?????????",
  "value": "320621" },

{
  "label": "?????????",
  "value": "320623" },

{
  "label": "???????????????????????????",
  "value": "320671" },

{
  "label": "?????????",
  "value": "320681" },

{
  "label": "?????????",
  "value": "320682" },

{
  "label": "?????????",
  "value": "320684" }],


[{
  "label": "?????????",
  "value": "320703" },

{
  "label": "?????????",
  "value": "320706" },

{
  "label": "?????????",
  "value": "320707" },

{
  "label": "?????????",
  "value": "320722" },

{
  "label": "?????????",
  "value": "320723" },

{
  "label": "?????????",
  "value": "320724" },

{
  "label": "??????????????????????????????",
  "value": "320771" },

{
  "label": "????????????????????????????????????",
  "value": "320772" }],


[{
  "label": "?????????",
  "value": "320803" },

{
  "label": "?????????",
  "value": "320804" },

{
  "label": "????????????",
  "value": "320812" },

{
  "label": "?????????",
  "value": "320813" },

{
  "label": "?????????",
  "value": "320826" },

{
  "label": "?????????",
  "value": "320830" },

{
  "label": "?????????",
  "value": "320831" },

{
  "label": "???????????????????????????",
  "value": "320871" }],


[{
  "label": "?????????",
  "value": "320902" },

{
  "label": "?????????",
  "value": "320903" },

{
  "label": "?????????",
  "value": "320904" },

{
  "label": "?????????",
  "value": "320921" },

{
  "label": "?????????",
  "value": "320922" },

{
  "label": "?????????",
  "value": "320923" },

{
  "label": "?????????",
  "value": "320924" },

{
  "label": "?????????",
  "value": "320925" },

{
  "label": "???????????????????????????",
  "value": "320971" },

{
  "label": "?????????",
  "value": "320981" }],


[{
  "label": "?????????",
  "value": "321002" },

{
  "label": "?????????",
  "value": "321003" },

{
  "label": "?????????",
  "value": "321012" },

{
  "label": "?????????",
  "value": "321023" },

{
  "label": "???????????????????????????",
  "value": "321071" },

{
  "label": "?????????",
  "value": "321081" },

{
  "label": "?????????",
  "value": "321084" }],


[{
  "label": "?????????",
  "value": "321102" },

{
  "label": "?????????",
  "value": "321111" },

{
  "label": "?????????",
  "value": "321112" },

{
  "label": "????????????",
  "value": "321171" },

{
  "label": "?????????",
  "value": "321181" },

{
  "label": "?????????",
  "value": "321182" },

{
  "label": "?????????",
  "value": "321183" }],


[{
  "label": "?????????",
  "value": "321202" },

{
  "label": "?????????",
  "value": "321203" },

{
  "label": "?????????",
  "value": "321204" },

{
  "label": "???????????????????????????????????????",
  "value": "321271" },

{
  "label": "?????????",
  "value": "321281" },

{
  "label": "?????????",
  "value": "321282" },

{
  "label": "?????????",
  "value": "321283" }],


[{
  "label": "?????????",
  "value": "321302" },

{
  "label": "?????????",
  "value": "321311" },

{
  "label": "?????????",
  "value": "321322" },

{
  "label": "?????????",
  "value": "321323" },

{
  "label": "?????????",
  "value": "321324" },

{
  "label": "???????????????????????????",
  "value": "321371" }]],



[
[{
  "label": "?????????",
  "value": "330102" },

{
  "label": "?????????",
  "value": "330103" },

{
  "label": "?????????",
  "value": "330104" },

{
  "label": "?????????",
  "value": "330105" },

{
  "label": "?????????",
  "value": "330106" },

{
  "label": "?????????",
  "value": "330108" },

{
  "label": "?????????",
  "value": "330109" },

{
  "label": "?????????",
  "value": "330110" },

{
  "label": "?????????",
  "value": "330111" },

{
  "label": "?????????",
  "value": "330112" },

{
  "label": "?????????",
  "value": "330122" },

{
  "label": "?????????",
  "value": "330127" },

{
  "label": "?????????",
  "value": "330182" }],


[{
  "label": "?????????",
  "value": "330203" },

{
  "label": "?????????",
  "value": "330205" },

{
  "label": "?????????",
  "value": "330206" },

{
  "label": "?????????",
  "value": "330211" },

{
  "label": "?????????",
  "value": "330212" },

{
  "label": "?????????",
  "value": "330213" },

{
  "label": "?????????",
  "value": "330225" },

{
  "label": "?????????",
  "value": "330226" },

{
  "label": "?????????",
  "value": "330281" },

{
  "label": "?????????",
  "value": "330282" }],


[{
  "label": "?????????",
  "value": "330302" },

{
  "label": "?????????",
  "value": "330303" },

{
  "label": "?????????",
  "value": "330304" },

{
  "label": "?????????",
  "value": "330305" },

{
  "label": "?????????",
  "value": "330324" },

{
  "label": "?????????",
  "value": "330326" },

{
  "label": "?????????",
  "value": "330327" },

{
  "label": "?????????",
  "value": "330328" },

{
  "label": "?????????",
  "value": "330329" },

{
  "label": "???????????????????????????",
  "value": "330371" },

{
  "label": "?????????",
  "value": "330381" },

{
  "label": "?????????",
  "value": "330382" }],


[{
  "label": "?????????",
  "value": "330402" },

{
  "label": "?????????",
  "value": "330411" },

{
  "label": "?????????",
  "value": "330421" },

{
  "label": "?????????",
  "value": "330424" },

{
  "label": "?????????",
  "value": "330481" },

{
  "label": "?????????",
  "value": "330482" },

{
  "label": "?????????",
  "value": "330483" }],


[{
  "label": "?????????",
  "value": "330502" },

{
  "label": "?????????",
  "value": "330503" },

{
  "label": "?????????",
  "value": "330521" },

{
  "label": "?????????",
  "value": "330522" },

{
  "label": "?????????",
  "value": "330523" }],


[{
  "label": "?????????",
  "value": "330602" },

{
  "label": "?????????",
  "value": "330603" },

{
  "label": "?????????",
  "value": "330604" },

{
  "label": "?????????",
  "value": "330624" },

{
  "label": "?????????",
  "value": "330681" },

{
  "label": "?????????",
  "value": "330683" }],


[{
  "label": "?????????",
  "value": "330702" },

{
  "label": "?????????",
  "value": "330703" },

{
  "label": "?????????",
  "value": "330723" },

{
  "label": "?????????",
  "value": "330726" },

{
  "label": "?????????",
  "value": "330727" },

{
  "label": "?????????",
  "value": "330781" },

{
  "label": "?????????",
  "value": "330782" },

{
  "label": "?????????",
  "value": "330783" },

{
  "label": "?????????",
  "value": "330784" }],


[{
  "label": "?????????",
  "value": "330802" },

{
  "label": "?????????",
  "value": "330803" },

{
  "label": "?????????",
  "value": "330822" },

{
  "label": "?????????",
  "value": "330824" },

{
  "label": "?????????",
  "value": "330825" },

{
  "label": "?????????",
  "value": "330881" }],


[{
  "label": "?????????",
  "value": "330902" },

{
  "label": "?????????",
  "value": "330903" },

{
  "label": "?????????",
  "value": "330921" },

{
  "label": "?????????",
  "value": "330922" }],


[{
  "label": "?????????",
  "value": "331002" },

{
  "label": "?????????",
  "value": "331003" },

{
  "label": "?????????",
  "value": "331004" },

{
  "label": "?????????",
  "value": "331022" },

{
  "label": "?????????",
  "value": "331023" },

{
  "label": "?????????",
  "value": "331024" },

{
  "label": "?????????",
  "value": "331081" },

{
  "label": "?????????",
  "value": "331082" },

{
  "label": "?????????",
  "value": "331083" }],


[{
  "label": "?????????",
  "value": "331102" },

{
  "label": "?????????",
  "value": "331121" },

{
  "label": "?????????",
  "value": "331122" },

{
  "label": "?????????",
  "value": "331123" },

{
  "label": "?????????",
  "value": "331124" },

{
  "label": "?????????",
  "value": "331125" },

{
  "label": "?????????",
  "value": "331126" },

{
  "label": "?????????????????????",
  "value": "331127" },

{
  "label": "?????????",
  "value": "331181" }]],



[
[{
  "label": "?????????",
  "value": "340102" },

{
  "label": "?????????",
  "value": "340103" },

{
  "label": "?????????",
  "value": "340104" },

{
  "label": "?????????",
  "value": "340111" },

{
  "label": "?????????",
  "value": "340121" },

{
  "label": "?????????",
  "value": "340122" },

{
  "label": "?????????",
  "value": "340123" },

{
  "label": "?????????",
  "value": "340124" },

{
  "label": "?????????????????????????????????",
  "value": "340171" },

{
  "label": "???????????????????????????",
  "value": "340172" },

{
  "label": "???????????????????????????????????????",
  "value": "340173" },

{
  "label": "?????????",
  "value": "340181" }],


[{
  "label": "?????????",
  "value": "340202" },

{
  "label": "?????????",
  "value": "340203" },

{
  "label": "?????????",
  "value": "340207" },

{
  "label": "?????????",
  "value": "340208" },

{
  "label": "?????????",
  "value": "340221" },

{
  "label": "?????????",
  "value": "340222" },

{
  "label": "?????????",
  "value": "340223" },

{
  "label": "?????????",
  "value": "340225" },

{
  "label": "???????????????????????????",
  "value": "340271" },

{
  "label": "???????????????????????????????????????",
  "value": "340272" }],


[{
  "label": "????????????",
  "value": "340302" },

{
  "label": "?????????",
  "value": "340303" },

{
  "label": "?????????",
  "value": "340304" },

{
  "label": "?????????",
  "value": "340311" },

{
  "label": "?????????",
  "value": "340321" },

{
  "label": "?????????",
  "value": "340322" },

{
  "label": "?????????",
  "value": "340323" },

{
  "label": "??????????????????????????????",
  "value": "340371" },

{
  "label": "????????????????????????",
  "value": "340372" }],


[{
  "label": "?????????",
  "value": "340402" },

{
  "label": "????????????",
  "value": "340403" },

{
  "label": "????????????",
  "value": "340404" },

{
  "label": "????????????",
  "value": "340405" },

{
  "label": "?????????",
  "value": "340406" },

{
  "label": "?????????",
  "value": "340421" },

{
  "label": "??????",
  "value": "340422" }],


[{
  "label": "?????????",
  "value": "340503" },

{
  "label": "?????????",
  "value": "340504" },

{
  "label": "?????????",
  "value": "340506" },

{
  "label": "?????????",
  "value": "340521" },

{
  "label": "?????????",
  "value": "340522" },

{
  "label": "??????",
  "value": "340523" }],


[{
  "label": "?????????",
  "value": "340602" },

{
  "label": "?????????",
  "value": "340603" },

{
  "label": "?????????",
  "value": "340604" },

{
  "label": "?????????",
  "value": "340621" }],


[{
  "label": "?????????",
  "value": "340705" },

{
  "label": "?????????",
  "value": "340706" },

{
  "label": "??????",
  "value": "340711" },

{
  "label": "?????????",
  "value": "340722" }],


[{
  "label": "?????????",
  "value": "340802" },

{
  "label": "?????????",
  "value": "340803" },

{
  "label": "?????????",
  "value": "340811" },

{
  "label": "?????????",
  "value": "340822" },

{
  "label": "?????????",
  "value": "340824" },

{
  "label": "?????????",
  "value": "340825" },

{
  "label": "?????????",
  "value": "340826" },

{
  "label": "?????????",
  "value": "340827" },

{
  "label": "?????????",
  "value": "340828" },

{
  "label": "???????????????????????????",
  "value": "340871" },

{
  "label": "?????????",
  "value": "340881" }],


[{
  "label": "?????????",
  "value": "341002" },

{
  "label": "?????????",
  "value": "341003" },

{
  "label": "?????????",
  "value": "341004" },

{
  "label": "??????",
  "value": "341021" },

{
  "label": "?????????",
  "value": "341022" },

{
  "label": "??????",
  "value": "341023" },

{
  "label": "?????????",
  "value": "341024" }],


[{
  "label": "?????????",
  "value": "341102" },

{
  "label": "?????????",
  "value": "341103" },

{
  "label": "?????????",
  "value": "341122" },

{
  "label": "?????????",
  "value": "341124" },

{
  "label": "?????????",
  "value": "341125" },

{
  "label": "?????????",
  "value": "341126" },

{
  "label": "?????????????????????",
  "value": "341171" },

{
  "label": "???????????????????????????",
  "value": "341172" },

{
  "label": "?????????",
  "value": "341181" },

{
  "label": "?????????",
  "value": "341182" }],


[{
  "label": "?????????",
  "value": "341202" },

{
  "label": "?????????",
  "value": "341203" },

{
  "label": "?????????",
  "value": "341204" },

{
  "label": "?????????",
  "value": "341221" },

{
  "label": "?????????",
  "value": "341222" },

{
  "label": "?????????",
  "value": "341225" },

{
  "label": "?????????",
  "value": "341226" },

{
  "label": "??????????????????????????????",
  "value": "341271" },

{
  "label": "???????????????????????????",
  "value": "341272" },

{
  "label": "?????????",
  "value": "341282" }],


[{
  "label": "?????????",
  "value": "341302" },

{
  "label": "?????????",
  "value": "341321" },

{
  "label": "??????",
  "value": "341322" },

{
  "label": "?????????",
  "value": "341323" },

{
  "label": "??????",
  "value": "341324" },

{
  "label": "?????????????????????????????????",
  "value": "341371" },

{
  "label": "???????????????????????????",
  "value": "341372" }],


[{
  "label": "?????????",
  "value": "341502" },

{
  "label": "?????????",
  "value": "341503" },

{
  "label": "?????????",
  "value": "341504" },

{
  "label": "?????????",
  "value": "341522" },

{
  "label": "?????????",
  "value": "341523" },

{
  "label": "?????????",
  "value": "341524" },

{
  "label": "?????????",
  "value": "341525" }],


[{
  "label": "?????????",
  "value": "341602" },

{
  "label": "?????????",
  "value": "341621" },

{
  "label": "?????????",
  "value": "341622" },

{
  "label": "?????????",
  "value": "341623" }],


[{
  "label": "?????????",
  "value": "341702" },

{
  "label": "?????????",
  "value": "341721" },

{
  "label": "?????????",
  "value": "341722" },

{
  "label": "?????????",
  "value": "341723" }],


[{
  "label": "?????????",
  "value": "341802" },

{
  "label": "?????????",
  "value": "341821" },

{
  "label": "?????????",
  "value": "341822" },

{
  "label": "??????",
  "value": "341823" },

{
  "label": "?????????",
  "value": "341824" },

{
  "label": "?????????",
  "value": "341825" },

{
  "label": "????????????????????????",
  "value": "341871" },

{
  "label": "?????????",
  "value": "341881" }]],



[
[{
  "label": "?????????",
  "value": "350102" },

{
  "label": "?????????",
  "value": "350103" },

{
  "label": "?????????",
  "value": "350104" },

{
  "label": "?????????",
  "value": "350105" },

{
  "label": "?????????",
  "value": "350111" },

{
  "label": "?????????",
  "value": "350121" },

{
  "label": "?????????",
  "value": "350122" },

{
  "label": "?????????",
  "value": "350123" },

{
  "label": "?????????",
  "value": "350124" },

{
  "label": "?????????",
  "value": "350125" },

{
  "label": "?????????",
  "value": "350128" },

{
  "label": "?????????",
  "value": "350181" },

{
  "label": "?????????",
  "value": "350182" }],


[{
  "label": "?????????",
  "value": "350203" },

{
  "label": "?????????",
  "value": "350205" },

{
  "label": "?????????",
  "value": "350206" },

{
  "label": "?????????",
  "value": "350211" },

{
  "label": "?????????",
  "value": "350212" },

{
  "label": "?????????",
  "value": "350213" }],


[{
  "label": "?????????",
  "value": "350302" },

{
  "label": "?????????",
  "value": "350303" },

{
  "label": "?????????",
  "value": "350304" },

{
  "label": "?????????",
  "value": "350305" },

{
  "label": "?????????",
  "value": "350322" }],


[{
  "label": "?????????",
  "value": "350402" },

{
  "label": "?????????",
  "value": "350403" },

{
  "label": "?????????",
  "value": "350421" },

{
  "label": "?????????",
  "value": "350423" },

{
  "label": "?????????",
  "value": "350424" },

{
  "label": "?????????",
  "value": "350425" },

{
  "label": "?????????",
  "value": "350426" },

{
  "label": "??????",
  "value": "350427" },

{
  "label": "?????????",
  "value": "350428" },

{
  "label": "?????????",
  "value": "350429" },

{
  "label": "?????????",
  "value": "350430" },

{
  "label": "?????????",
  "value": "350481" }],


[{
  "label": "?????????",
  "value": "350502" },

{
  "label": "?????????",
  "value": "350503" },

{
  "label": "?????????",
  "value": "350504" },

{
  "label": "?????????",
  "value": "350505" },

{
  "label": "?????????",
  "value": "350521" },

{
  "label": "?????????",
  "value": "350524" },

{
  "label": "?????????",
  "value": "350525" },

{
  "label": "?????????",
  "value": "350526" },

{
  "label": "?????????",
  "value": "350527" },

{
  "label": "?????????",
  "value": "350581" },

{
  "label": "?????????",
  "value": "350582" },

{
  "label": "?????????",
  "value": "350583" }],


[{
  "label": "?????????",
  "value": "350602" },

{
  "label": "?????????",
  "value": "350603" },

{
  "label": "?????????",
  "value": "350622" },

{
  "label": "?????????",
  "value": "350623" },

{
  "label": "?????????",
  "value": "350624" },

{
  "label": "?????????",
  "value": "350625" },

{
  "label": "?????????",
  "value": "350626" },

{
  "label": "?????????",
  "value": "350627" },

{
  "label": "?????????",
  "value": "350628" },

{
  "label": "?????????",
  "value": "350629" },

{
  "label": "?????????",
  "value": "350681" }],


[{
  "label": "?????????",
  "value": "350702" },

{
  "label": "?????????",
  "value": "350703" },

{
  "label": "?????????",
  "value": "350721" },

{
  "label": "?????????",
  "value": "350722" },

{
  "label": "?????????",
  "value": "350723" },

{
  "label": "?????????",
  "value": "350724" },

{
  "label": "?????????",
  "value": "350725" },

{
  "label": "?????????",
  "value": "350781" },

{
  "label": "????????????",
  "value": "350782" },

{
  "label": "?????????",
  "value": "350783" }],


[{
  "label": "?????????",
  "value": "350802" },

{
  "label": "?????????",
  "value": "350803" },

{
  "label": "?????????",
  "value": "350821" },

{
  "label": "?????????",
  "value": "350823" },

{
  "label": "?????????",
  "value": "350824" },

{
  "label": "?????????",
  "value": "350825" },

{
  "label": "?????????",
  "value": "350881" }],


[{
  "label": "?????????",
  "value": "350902" },

{
  "label": "?????????",
  "value": "350921" },

{
  "label": "?????????",
  "value": "350922" },

{
  "label": "?????????",
  "value": "350923" },

{
  "label": "?????????",
  "value": "350924" },

{
  "label": "?????????",
  "value": "350925" },

{
  "label": "?????????",
  "value": "350926" },

{
  "label": "?????????",
  "value": "350981" },

{
  "label": "?????????",
  "value": "350982" }]],



[
[{
  "label": "?????????",
  "value": "360102" },

{
  "label": "?????????",
  "value": "360103" },

{
  "label": "????????????",
  "value": "360104" },

{
  "label": "?????????",
  "value": "360105" },

{
  "label": "????????????",
  "value": "360111" },

{
  "label": "?????????",
  "value": "360112" },

{
  "label": "?????????",
  "value": "360121" },

{
  "label": "?????????",
  "value": "360123" },

{
  "label": "?????????",
  "value": "360124" }],


[{
  "label": "?????????",
  "value": "360202" },

{
  "label": "?????????",
  "value": "360203" },

{
  "label": "?????????",
  "value": "360222" },

{
  "label": "?????????",
  "value": "360281" }],


[{
  "label": "?????????",
  "value": "360302" },

{
  "label": "?????????",
  "value": "360313" },

{
  "label": "?????????",
  "value": "360321" },

{
  "label": "?????????",
  "value": "360322" },

{
  "label": "?????????",
  "value": "360323" }],


[{
  "label": "?????????",
  "value": "360402" },

{
  "label": "?????????",
  "value": "360403" },

{
  "label": "?????????",
  "value": "360404" },

{
  "label": "?????????",
  "value": "360423" },

{
  "label": "?????????",
  "value": "360424" },

{
  "label": "?????????",
  "value": "360425" },

{
  "label": "?????????",
  "value": "360426" },

{
  "label": "?????????",
  "value": "360428" },

{
  "label": "?????????",
  "value": "360429" },

{
  "label": "?????????",
  "value": "360430" },

{
  "label": "?????????",
  "value": "360481" },

{
  "label": "????????????",
  "value": "360482" },

{
  "label": "?????????",
  "value": "360483" }],


[{
  "label": "?????????",
  "value": "360502" },

{
  "label": "?????????",
  "value": "360521" }],


[{
  "label": "?????????",
  "value": "360602" },

{
  "label": "?????????",
  "value": "360622" },

{
  "label": "?????????",
  "value": "360681" }],


[{
  "label": "?????????",
  "value": "360702" },

{
  "label": "?????????",
  "value": "360703" },

{
  "label": "?????????",
  "value": "360704" },

{
  "label": "?????????",
  "value": "360722" },

{
  "label": "?????????",
  "value": "360723" },

{
  "label": "?????????",
  "value": "360724" },

{
  "label": "?????????",
  "value": "360725" },

{
  "label": "?????????",
  "value": "360726" },

{
  "label": "?????????",
  "value": "360727" },

{
  "label": "?????????",
  "value": "360728" },

{
  "label": "?????????",
  "value": "360729" },

{
  "label": "?????????",
  "value": "360730" },

{
  "label": "?????????",
  "value": "360731" },

{
  "label": "?????????",
  "value": "360732" },

{
  "label": "?????????",
  "value": "360733" },

{
  "label": "?????????",
  "value": "360734" },

{
  "label": "?????????",
  "value": "360735" },

{
  "label": "?????????",
  "value": "360781" }],


[{
  "label": "?????????",
  "value": "360802" },

{
  "label": "?????????",
  "value": "360803" },

{
  "label": "?????????",
  "value": "360821" },

{
  "label": "?????????",
  "value": "360822" },

{
  "label": "?????????",
  "value": "360823" },

{
  "label": "?????????",
  "value": "360824" },

{
  "label": "?????????",
  "value": "360825" },

{
  "label": "?????????",
  "value": "360826" },

{
  "label": "?????????",
  "value": "360827" },

{
  "label": "?????????",
  "value": "360828" },

{
  "label": "?????????",
  "value": "360829" },

{
  "label": "?????????",
  "value": "360830" },

{
  "label": "????????????",
  "value": "360881" }],


[{
  "label": "?????????",
  "value": "360902" },

{
  "label": "?????????",
  "value": "360921" },

{
  "label": "?????????",
  "value": "360922" },

{
  "label": "?????????",
  "value": "360923" },

{
  "label": "?????????",
  "value": "360924" },

{
  "label": "?????????",
  "value": "360925" },

{
  "label": "?????????",
  "value": "360926" },

{
  "label": "?????????",
  "value": "360981" },

{
  "label": "?????????",
  "value": "360982" },

{
  "label": "?????????",
  "value": "360983" }],


[{
  "label": "?????????",
  "value": "361002" },

{
  "label": "?????????",
  "value": "361003" },

{
  "label": "?????????",
  "value": "361021" },

{
  "label": "?????????",
  "value": "361022" },

{
  "label": "?????????",
  "value": "361023" },

{
  "label": "?????????",
  "value": "361024" },

{
  "label": "?????????",
  "value": "361025" },

{
  "label": "?????????",
  "value": "361026" },

{
  "label": "?????????",
  "value": "361027" },

{
  "label": "?????????",
  "value": "361028" },

{
  "label": "?????????",
  "value": "361030" }],


[{
  "label": "?????????",
  "value": "361102" },

{
  "label": "?????????",
  "value": "361103" },

{
  "label": "?????????",
  "value": "361121" },

{
  "label": "?????????",
  "value": "361123" },

{
  "label": "?????????",
  "value": "361124" },

{
  "label": "?????????",
  "value": "361125" },

{
  "label": "?????????",
  "value": "361126" },

{
  "label": "?????????",
  "value": "361127" },

{
  "label": "?????????",
  "value": "361128" },

{
  "label": "?????????",
  "value": "361129" },

{
  "label": "?????????",
  "value": "361130" },

{
  "label": "?????????",
  "value": "361181" }]],



[
[{
  "label": "?????????",
  "value": "370102" },

{
  "label": "?????????",
  "value": "370103" },

{
  "label": "?????????",
  "value": "370104" },

{
  "label": "?????????",
  "value": "370105" },

{
  "label": "?????????",
  "value": "370112" },

{
  "label": "?????????",
  "value": "370113" },

{
  "label": "?????????",
  "value": "370114" },

{
  "label": "?????????",
  "value": "370124" },

{
  "label": "?????????",
  "value": "370125" },

{
  "label": "?????????",
  "value": "370126" },

{
  "label": "?????????????????????????????????",
  "value": "370171" }],


[{
  "label": "?????????",
  "value": "370202" },

{
  "label": "?????????",
  "value": "370203" },

{
  "label": "?????????",
  "value": "370211" },

{
  "label": "?????????",
  "value": "370212" },

{
  "label": "?????????",
  "value": "370213" },

{
  "label": "?????????",
  "value": "370214" },

{
  "label": "?????????",
  "value": "370215" },

{
  "label": "?????????????????????????????????",
  "value": "370271" },

{
  "label": "?????????",
  "value": "370281" },

{
  "label": "?????????",
  "value": "370283" },

{
  "label": "?????????",
  "value": "370285" }],


[{
  "label": "?????????",
  "value": "370302" },

{
  "label": "?????????",
  "value": "370303" },

{
  "label": "?????????",
  "value": "370304" },

{
  "label": "?????????",
  "value": "370305" },

{
  "label": "?????????",
  "value": "370306" },

{
  "label": "?????????",
  "value": "370321" },

{
  "label": "?????????",
  "value": "370322" },

{
  "label": "?????????",
  "value": "370323" }],


[{
  "label": "?????????",
  "value": "370402" },

{
  "label": "?????????",
  "value": "370403" },

{
  "label": "?????????",
  "value": "370404" },

{
  "label": "????????????",
  "value": "370405" },

{
  "label": "?????????",
  "value": "370406" },

{
  "label": "?????????",
  "value": "370481" }],


[{
  "label": "?????????",
  "value": "370502" },

{
  "label": "?????????",
  "value": "370503" },

{
  "label": "?????????",
  "value": "370505" },

{
  "label": "?????????",
  "value": "370522" },

{
  "label": "?????????",
  "value": "370523" },

{
  "label": "???????????????????????????",
  "value": "370571" },

{
  "label": "????????????????????????",
  "value": "370572" }],


[{
  "label": "?????????",
  "value": "370602" },

{
  "label": "?????????",
  "value": "370611" },

{
  "label": "?????????",
  "value": "370612" },

{
  "label": "?????????",
  "value": "370613" },

{
  "label": "?????????",
  "value": "370634" },

{
  "label": "?????????????????????????????????",
  "value": "370671" },

{
  "label": "???????????????????????????",
  "value": "370672" },

{
  "label": "?????????",
  "value": "370681" },

{
  "label": "?????????",
  "value": "370682" },

{
  "label": "?????????",
  "value": "370683" },

{
  "label": "?????????",
  "value": "370684" },

{
  "label": "?????????",
  "value": "370685" },

{
  "label": "?????????",
  "value": "370686" },

{
  "label": "?????????",
  "value": "370687" }],


[{
  "label": "?????????",
  "value": "370702" },

{
  "label": "?????????",
  "value": "370703" },

{
  "label": "?????????",
  "value": "370704" },

{
  "label": "?????????",
  "value": "370705" },

{
  "label": "?????????",
  "value": "370724" },

{
  "label": "?????????",
  "value": "370725" },

{
  "label": "?????????????????????????????????",
  "value": "370772" },

{
  "label": "?????????",
  "value": "370781" },

{
  "label": "?????????",
  "value": "370782" },

{
  "label": "?????????",
  "value": "370783" },

{
  "label": "?????????",
  "value": "370784" },

{
  "label": "?????????",
  "value": "370785" },

{
  "label": "?????????",
  "value": "370786" }],


[{
  "label": "?????????",
  "value": "370811" },

{
  "label": "?????????",
  "value": "370812" },

{
  "label": "?????????",
  "value": "370826" },

{
  "label": "?????????",
  "value": "370827" },

{
  "label": "?????????",
  "value": "370828" },

{
  "label": "?????????",
  "value": "370829" },

{
  "label": "?????????",
  "value": "370830" },

{
  "label": "?????????",
  "value": "370831" },

{
  "label": "?????????",
  "value": "370832" },

{
  "label": "?????????????????????????????????",
  "value": "370871" },

{
  "label": "?????????",
  "value": "370881" },

{
  "label": "?????????",
  "value": "370883" }],


[{
  "label": "?????????",
  "value": "370902" },

{
  "label": "?????????",
  "value": "370911" },

{
  "label": "?????????",
  "value": "370921" },

{
  "label": "?????????",
  "value": "370923" },

{
  "label": "?????????",
  "value": "370982" },

{
  "label": "?????????",
  "value": "370983" }],


[{
  "label": "?????????",
  "value": "371002" },

{
  "label": "?????????",
  "value": "371003" },

{
  "label": "????????????????????????????????????",
  "value": "371071" },

{
  "label": "???????????????????????????",
  "value": "371072" },

{
  "label": "?????????????????????????????????",
  "value": "371073" },

{
  "label": "?????????",
  "value": "371082" },

{
  "label": "?????????",
  "value": "371083" }],


[{
  "label": "?????????",
  "value": "371102" },

{
  "label": "?????????",
  "value": "371103" },

{
  "label": "?????????",
  "value": "371121" },

{
  "label": "??????",
  "value": "371122" },

{
  "label": "???????????????????????????",
  "value": "371171" },

{
  "label": "?????????????????????",
  "value": "371172" }],


[{
  "label": "?????????",
  "value": "371202" },

{
  "label": "?????????",
  "value": "371203" }],


[{
  "label": "?????????",
  "value": "371302" },

{
  "label": "?????????",
  "value": "371311" },

{
  "label": "?????????",
  "value": "371312" },

{
  "label": "?????????",
  "value": "371321" },

{
  "label": "?????????",
  "value": "371322" },

{
  "label": "?????????",
  "value": "371323" },

{
  "label": "?????????",
  "value": "371324" },

{
  "label": "??????",
  "value": "371325" },

{
  "label": "?????????",
  "value": "371326" },

{
  "label": "?????????",
  "value": "371327" },

{
  "label": "?????????",
  "value": "371328" },

{
  "label": "?????????",
  "value": "371329" },

{
  "label": "?????????????????????????????????",
  "value": "371371" },

{
  "label": "???????????????????????????",
  "value": "371372" },

{
  "label": "???????????????????????????",
  "value": "371373" }],


[{
  "label": "?????????",
  "value": "371402" },

{
  "label": "?????????",
  "value": "371403" },

{
  "label": "?????????",
  "value": "371422" },

{
  "label": "?????????",
  "value": "371423" },

{
  "label": "?????????",
  "value": "371424" },

{
  "label": "?????????",
  "value": "371425" },

{
  "label": "?????????",
  "value": "371426" },

{
  "label": "?????????",
  "value": "371427" },

{
  "label": "?????????",
  "value": "371428" },

{
  "label": "???????????????????????????",
  "value": "371471" },

{
  "label": "???????????????????????????",
  "value": "371472" },

{
  "label": "?????????",
  "value": "371481" },

{
  "label": "?????????",
  "value": "371482" }],


[{
  "label": "????????????",
  "value": "371502" },

{
  "label": "?????????",
  "value": "371521" },

{
  "label": "??????",
  "value": "371522" },

{
  "label": "?????????",
  "value": "371523" },

{
  "label": "?????????",
  "value": "371524" },

{
  "label": "??????",
  "value": "371525" },

{
  "label": "?????????",
  "value": "371526" },

{
  "label": "?????????",
  "value": "371581" }],


[{
  "label": "?????????",
  "value": "371602" },

{
  "label": "?????????",
  "value": "371603" },

{
  "label": "?????????",
  "value": "371621" },

{
  "label": "?????????",
  "value": "371622" },

{
  "label": "?????????",
  "value": "371623" },

{
  "label": "?????????",
  "value": "371625" },

{
  "label": "?????????",
  "value": "371626" }],


[{
  "label": "?????????",
  "value": "371702" },

{
  "label": "?????????",
  "value": "371703" },

{
  "label": "??????",
  "value": "371721" },

{
  "label": "??????",
  "value": "371722" },

{
  "label": "?????????",
  "value": "371723" },

{
  "label": "?????????",
  "value": "371724" },

{
  "label": "?????????",
  "value": "371725" },

{
  "label": "?????????",
  "value": "371726" },

{
  "label": "?????????",
  "value": "371728" },

{
  "label": "???????????????????????????",
  "value": "371771" },

{
  "label": "???????????????????????????",
  "value": "371772" }]],



[
[{
  "label": "?????????",
  "value": "410102" },

{
  "label": "?????????",
  "value": "410103" },

{
  "label": "???????????????",
  "value": "410104" },

{
  "label": "?????????",
  "value": "410105" },

{
  "label": "?????????",
  "value": "410106" },

{
  "label": "?????????",
  "value": "410108" },

{
  "label": "?????????",
  "value": "410122" },

{
  "label": "???????????????????????????",
  "value": "410171" },

{
  "label": "?????????????????????????????????",
  "value": "410172" },

{
  "label": "????????????????????????????????????",
  "value": "410173" },

{
  "label": "?????????",
  "value": "410181" },

{
  "label": "?????????",
  "value": "410182" },

{
  "label": "?????????",
  "value": "410183" },

{
  "label": "?????????",
  "value": "410184" },

{
  "label": "?????????",
  "value": "410185" }],


[{
  "label": "?????????",
  "value": "410202" },

{
  "label": "???????????????",
  "value": "410203" },

{
  "label": "?????????",
  "value": "410204" },

{
  "label": "????????????",
  "value": "410205" },

{
  "label": "?????????",
  "value": "410212" },

{
  "label": "??????",
  "value": "410221" },

{
  "label": "?????????",
  "value": "410222" },

{
  "label": "?????????",
  "value": "410223" },

{
  "label": "?????????",
  "value": "410225" }],


[{
  "label": "?????????",
  "value": "410302" },

{
  "label": "?????????",
  "value": "410303" },

{
  "label": "???????????????",
  "value": "410304" },

{
  "label": "?????????",
  "value": "410305" },

{
  "label": "?????????",
  "value": "410306" },

{
  "label": "?????????",
  "value": "410311" },

{
  "label": "?????????",
  "value": "410322" },

{
  "label": "?????????",
  "value": "410323" },

{
  "label": "?????????",
  "value": "410324" },

{
  "label": "??????",
  "value": "410325" },

{
  "label": "?????????",
  "value": "410326" },

{
  "label": "?????????",
  "value": "410327" },

{
  "label": "?????????",
  "value": "410328" },

{
  "label": "?????????",
  "value": "410329" },

{
  "label": "?????????????????????????????????",
  "value": "410371" },

{
  "label": "?????????",
  "value": "410381" }],


[{
  "label": "?????????",
  "value": "410402" },

{
  "label": "?????????",
  "value": "410403" },

{
  "label": "?????????",
  "value": "410404" },

{
  "label": "?????????",
  "value": "410411" },

{
  "label": "?????????",
  "value": "410421" },

{
  "label": "??????",
  "value": "410422" },

{
  "label": "?????????",
  "value": "410423" },

{
  "label": "??????",
  "value": "410425" },

{
  "label": "????????????????????????????????????",
  "value": "410471" },

{
  "label": "?????????????????????",
  "value": "410472" },

{
  "label": "?????????",
  "value": "410481" },

{
  "label": "?????????",
  "value": "410482" }],


[{
  "label": "?????????",
  "value": "410502" },

{
  "label": "?????????",
  "value": "410503" },

{
  "label": "?????????",
  "value": "410505" },

{
  "label": "?????????",
  "value": "410506" },

{
  "label": "?????????",
  "value": "410522" },

{
  "label": "?????????",
  "value": "410523" },

{
  "label": "??????",
  "value": "410526" },

{
  "label": "?????????",
  "value": "410527" },

{
  "label": "?????????????????????????????????",
  "value": "410571" },

{
  "label": "?????????",
  "value": "410581" }],


[{
  "label": "?????????",
  "value": "410602" },

{
  "label": "?????????",
  "value": "410603" },

{
  "label": "?????????",
  "value": "410611" },

{
  "label": "??????",
  "value": "410621" },

{
  "label": "??????",
  "value": "410622" },

{
  "label": "???????????????????????????",
  "value": "410671" }],


[{
  "label": "?????????",
  "value": "410702" },

{
  "label": "?????????",
  "value": "410703" },

{
  "label": "?????????",
  "value": "410704" },

{
  "label": "?????????",
  "value": "410711" },

{
  "label": "?????????",
  "value": "410721" },

{
  "label": "?????????",
  "value": "410724" },

{
  "label": "?????????",
  "value": "410725" },

{
  "label": "?????????",
  "value": "410726" },

{
  "label": "?????????",
  "value": "410727" },

{
  "label": "?????????",
  "value": "410728" },

{
  "label": "?????????????????????????????????",
  "value": "410771" },

{
  "label": "???????????????????????????",
  "value": "410772" },

{
  "label": "???????????????????????????????????????",
  "value": "410773" },

{
  "label": "?????????",
  "value": "410781" },

{
  "label": "?????????",
  "value": "410782" }],


[{
  "label": "?????????",
  "value": "410802" },

{
  "label": "?????????",
  "value": "410803" },

{
  "label": "?????????",
  "value": "410804" },

{
  "label": "?????????",
  "value": "410811" },

{
  "label": "?????????",
  "value": "410821" },

{
  "label": "?????????",
  "value": "410822" },

{
  "label": "?????????",
  "value": "410823" },

{
  "label": "??????",
  "value": "410825" },

{
  "label": "??????????????????????????????",
  "value": "410871" },

{
  "label": "?????????",
  "value": "410882" },

{
  "label": "?????????",
  "value": "410883" }],


[{
  "label": "?????????",
  "value": "410902" },

{
  "label": "?????????",
  "value": "410922" },

{
  "label": "?????????",
  "value": "410923" },

{
  "label": "??????",
  "value": "410926" },

{
  "label": "?????????",
  "value": "410927" },

{
  "label": "?????????",
  "value": "410928" },

{
  "label": "????????????????????????",
  "value": "410971" },

{
  "label": "???????????????????????????",
  "value": "410972" }],


[{
  "label": "?????????",
  "value": "411002" },

{
  "label": "?????????",
  "value": "411003" },

{
  "label": "?????????",
  "value": "411024" },

{
  "label": "?????????",
  "value": "411025" },

{
  "label": "???????????????????????????",
  "value": "411071" },

{
  "label": "?????????",
  "value": "411081" },

{
  "label": "?????????",
  "value": "411082" }],


[{
  "label": "?????????",
  "value": "411102" },

{
  "label": "?????????",
  "value": "411103" },

{
  "label": "?????????",
  "value": "411104" },

{
  "label": "?????????",
  "value": "411121" },

{
  "label": "?????????",
  "value": "411122" },

{
  "label": "???????????????????????????",
  "value": "411171" }],


[{
  "label": "?????????",
  "value": "411202" },

{
  "label": "?????????",
  "value": "411203" },

{
  "label": "?????????",
  "value": "411221" },

{
  "label": "?????????",
  "value": "411224" },

{
  "label": "??????????????????????????????",
  "value": "411271" },

{
  "label": "?????????",
  "value": "411281" },

{
  "label": "?????????",
  "value": "411282" }],


[{
  "label": "?????????",
  "value": "411302" },

{
  "label": "?????????",
  "value": "411303" },

{
  "label": "?????????",
  "value": "411321" },

{
  "label": "?????????",
  "value": "411322" },

{
  "label": "?????????",
  "value": "411323" },

{
  "label": "?????????",
  "value": "411324" },

{
  "label": "?????????",
  "value": "411325" },

{
  "label": "?????????",
  "value": "411326" },

{
  "label": "?????????",
  "value": "411327" },

{
  "label": "?????????",
  "value": "411328" },

{
  "label": "?????????",
  "value": "411329" },

{
  "label": "?????????",
  "value": "411330" },

{
  "label": "?????????????????????????????????",
  "value": "411371" },

{
  "label": "?????????????????????????????????",
  "value": "411372" },

{
  "label": "?????????",
  "value": "411381" }],


[{
  "label": "?????????",
  "value": "411402" },

{
  "label": "?????????",
  "value": "411403" },

{
  "label": "?????????",
  "value": "411421" },

{
  "label": "??????",
  "value": "411422" },

{
  "label": "?????????",
  "value": "411423" },

{
  "label": "?????????",
  "value": "411424" },

{
  "label": "?????????",
  "value": "411425" },

{
  "label": "?????????",
  "value": "411426" },

{
  "label": "?????????????????????????????????",
  "value": "411471" },

{
  "label": "???????????????????????????",
  "value": "411472" },

{
  "label": "?????????",
  "value": "411481" }],


[{
  "label": "?????????",
  "value": "411502" },

{
  "label": "?????????",
  "value": "411503" },

{
  "label": "?????????",
  "value": "411521" },

{
  "label": "?????????",
  "value": "411522" },

{
  "label": "??????",
  "value": "411523" },

{
  "label": "?????????",
  "value": "411524" },

{
  "label": "?????????",
  "value": "411525" },

{
  "label": "?????????",
  "value": "411526" },

{
  "label": "?????????",
  "value": "411527" },

{
  "label": "??????",
  "value": "411528" },

{
  "label": "?????????????????????????????????",
  "value": "411571" }],


[{
  "label": "?????????",
  "value": "411602" },

{
  "label": "?????????",
  "value": "411621" },

{
  "label": "?????????",
  "value": "411622" },

{
  "label": "?????????",
  "value": "411623" },

{
  "label": "?????????",
  "value": "411624" },

{
  "label": "?????????",
  "value": "411625" },

{
  "label": "?????????",
  "value": "411626" },

{
  "label": "?????????",
  "value": "411627" },

{
  "label": "?????????",
  "value": "411628" },

{
  "label": "???????????????????????????",
  "value": "411671" },

{
  "label": "?????????",
  "value": "411681" }],


[{
  "label": "?????????",
  "value": "411702" },

{
  "label": "?????????",
  "value": "411721" },

{
  "label": "?????????",
  "value": "411722" },

{
  "label": "?????????",
  "value": "411723" },

{
  "label": "?????????",
  "value": "411724" },

{
  "label": "?????????",
  "value": "411725" },

{
  "label": "?????????",
  "value": "411726" },

{
  "label": "?????????",
  "value": "411727" },

{
  "label": "?????????",
  "value": "411728" },

{
  "label": "?????????",
  "value": "411729" },

{
  "label": "??????????????????????????????",
  "value": "411771" }],


[{
  "label": "?????????",
  "value": "419001" }]],


[
[{
  "label": "?????????",
  "value": "420102" },

{
  "label": "?????????",
  "value": "420103" },

{
  "label": "?????????",
  "value": "420104" },

{
  "label": "?????????",
  "value": "420105" },

{
  "label": "?????????",
  "value": "420106" },

{
  "label": "?????????",
  "value": "420107" },

{
  "label": "?????????",
  "value": "420111" },

{
  "label": "????????????",
  "value": "420112" },

{
  "label": "?????????",
  "value": "420113" },

{
  "label": "?????????",
  "value": "420114" },

{
  "label": "?????????",
  "value": "420115" },

{
  "label": "?????????",
  "value": "420116" },

{
  "label": "?????????",
  "value": "420117" }],


[{
  "label": "????????????",
  "value": "420202" },

{
  "label": "????????????",
  "value": "420203" },

{
  "label": "?????????",
  "value": "420204" },

{
  "label": "?????????",
  "value": "420205" },

{
  "label": "?????????",
  "value": "420222" },

{
  "label": "?????????",
  "value": "420281" }],


[{
  "label": "?????????",
  "value": "420302" },

{
  "label": "?????????",
  "value": "420303" },

{
  "label": "?????????",
  "value": "420304" },

{
  "label": "?????????",
  "value": "420322" },

{
  "label": "?????????",
  "value": "420323" },

{
  "label": "?????????",
  "value": "420324" },

{
  "label": "??????",
  "value": "420325" },

{
  "label": "????????????",
  "value": "420381" }],


[{
  "label": "?????????",
  "value": "420502" },

{
  "label": "????????????",
  "value": "420503" },

{
  "label": "?????????",
  "value": "420504" },

{
  "label": "?????????",
  "value": "420505" },

{
  "label": "?????????",
  "value": "420506" },

{
  "label": "?????????",
  "value": "420525" },

{
  "label": "?????????",
  "value": "420526" },

{
  "label": "?????????",
  "value": "420527" },

{
  "label": "????????????????????????",
  "value": "420528" },

{
  "label": "????????????????????????",
  "value": "420529" },

{
  "label": "?????????",
  "value": "420581" },

{
  "label": "?????????",
  "value": "420582" },

{
  "label": "?????????",
  "value": "420583" }],


[{
  "label": "?????????",
  "value": "420602" },

{
  "label": "?????????",
  "value": "420606" },

{
  "label": "?????????",
  "value": "420607" },

{
  "label": "?????????",
  "value": "420624" },

{
  "label": "?????????",
  "value": "420625" },

{
  "label": "?????????",
  "value": "420626" },

{
  "label": "????????????",
  "value": "420682" },

{
  "label": "?????????",
  "value": "420683" },

{
  "label": "?????????",
  "value": "420684" }],


[{
  "label": "????????????",
  "value": "420702" },

{
  "label": "?????????",
  "value": "420703" },

{
  "label": "?????????",
  "value": "420704" }],


[{
  "label": "?????????",
  "value": "420802" },

{
  "label": "?????????",
  "value": "420804" },

{
  "label": "?????????",
  "value": "420821" },

{
  "label": "?????????",
  "value": "420822" },

{
  "label": "?????????",
  "value": "420881" }],


[{
  "label": "?????????",
  "value": "420902" },

{
  "label": "?????????",
  "value": "420921" },

{
  "label": "?????????",
  "value": "420922" },

{
  "label": "?????????",
  "value": "420923" },

{
  "label": "?????????",
  "value": "420981" },

{
  "label": "?????????",
  "value": "420982" },

{
  "label": "?????????",
  "value": "420984" }],


[{
  "label": "?????????",
  "value": "421002" },

{
  "label": "?????????",
  "value": "421003" },

{
  "label": "?????????",
  "value": "421022" },

{
  "label": "?????????",
  "value": "421023" },

{
  "label": "?????????",
  "value": "421024" },

{
  "label": "???????????????????????????",
  "value": "421071" },

{
  "label": "?????????",
  "value": "421081" },

{
  "label": "?????????",
  "value": "421083" },

{
  "label": "?????????",
  "value": "421087" }],


[{
  "label": "?????????",
  "value": "421102" },

{
  "label": "?????????",
  "value": "421121" },

{
  "label": "?????????",
  "value": "421122" },

{
  "label": "?????????",
  "value": "421123" },

{
  "label": "?????????",
  "value": "421124" },

{
  "label": "?????????",
  "value": "421125" },

{
  "label": "?????????",
  "value": "421126" },

{
  "label": "?????????",
  "value": "421127" },

{
  "label": "??????????????????",
  "value": "421171" },

{
  "label": "?????????",
  "value": "421181" },

{
  "label": "?????????",
  "value": "421182" }],


[{
  "label": "?????????",
  "value": "421202" },

{
  "label": "?????????",
  "value": "421221" },

{
  "label": "?????????",
  "value": "421222" },

{
  "label": "?????????",
  "value": "421223" },

{
  "label": "?????????",
  "value": "421224" },

{
  "label": "?????????",
  "value": "421281" }],


[{
  "label": "?????????",
  "value": "421303" },

{
  "label": "??????",
  "value": "421321" },

{
  "label": "?????????",
  "value": "421381" }],


[{
  "label": "?????????",
  "value": "422801" },

{
  "label": "?????????",
  "value": "422802" },

{
  "label": "?????????",
  "value": "422822" },

{
  "label": "?????????",
  "value": "422823" },

{
  "label": "?????????",
  "value": "422825" },

{
  "label": "?????????",
  "value": "422826" },

{
  "label": "?????????",
  "value": "422827" },

{
  "label": "?????????",
  "value": "422828" }],


[{
  "label": "?????????",
  "value": "429004" },

{
  "label": "?????????",
  "value": "429005" },

{
  "label": "?????????",
  "value": "429006" },

{
  "label": "???????????????",
  "value": "429021" }]],



[
[{
  "label": "?????????",
  "value": "430102" },

{
  "label": "?????????",
  "value": "430103" },

{
  "label": "?????????",
  "value": "430104" },

{
  "label": "?????????",
  "value": "430105" },

{
  "label": "?????????",
  "value": "430111" },

{
  "label": "?????????",
  "value": "430112" },

{
  "label": "?????????",
  "value": "430121" },

{
  "label": "?????????",
  "value": "430181" },

{
  "label": "?????????",
  "value": "430182" }],


[{
  "label": "?????????",
  "value": "430202" },

{
  "label": "?????????",
  "value": "430203" },

{
  "label": "?????????",
  "value": "430204" },

{
  "label": "?????????",
  "value": "430211" },

{
  "label": "?????????",
  "value": "430221" },

{
  "label": "??????",
  "value": "430223" },

{
  "label": "?????????",
  "value": "430224" },

{
  "label": "?????????",
  "value": "430225" },

{
  "label": "???????????????",
  "value": "430271" },

{
  "label": "?????????",
  "value": "430281" }],


[{
  "label": "?????????",
  "value": "430302" },

{
  "label": "?????????",
  "value": "430304" },

{
  "label": "?????????",
  "value": "430321" },

{
  "label": "????????????????????????????????????",
  "value": "430371" },

{
  "label": "?????????????????????",
  "value": "430372" },

{
  "label": "?????????????????????",
  "value": "430373" },

{
  "label": "?????????",
  "value": "430381" },

{
  "label": "?????????",
  "value": "430382" }],


[{
  "label": "?????????",
  "value": "430405" },

{
  "label": "?????????",
  "value": "430406" },

{
  "label": "?????????",
  "value": "430407" },

{
  "label": "?????????",
  "value": "430408" },

{
  "label": "?????????",
  "value": "430412" },

{
  "label": "?????????",
  "value": "430421" },

{
  "label": "?????????",
  "value": "430422" },

{
  "label": "?????????",
  "value": "430423" },

{
  "label": "?????????",
  "value": "430424" },

{
  "label": "?????????",
  "value": "430426" },

{
  "label": "?????????????????????",
  "value": "430471" },

{
  "label": "????????????????????????????????????",
  "value": "430472" },

{
  "label": "?????????????????????????????????",
  "value": "430473" },

{
  "label": "?????????",
  "value": "430481" },

{
  "label": "?????????",
  "value": "430482" }],


[{
  "label": "?????????",
  "value": "430502" },

{
  "label": "?????????",
  "value": "430503" },

{
  "label": "?????????",
  "value": "430511" },

{
  "label": "?????????",
  "value": "430521" },

{
  "label": "?????????",
  "value": "430522" },

{
  "label": "?????????",
  "value": "430523" },

{
  "label": "?????????",
  "value": "430524" },

{
  "label": "?????????",
  "value": "430525" },

{
  "label": "?????????",
  "value": "430527" },

{
  "label": "?????????",
  "value": "430528" },

{
  "label": "?????????????????????",
  "value": "430529" },

{
  "label": "?????????",
  "value": "430581" }],


[{
  "label": "????????????",
  "value": "430602" },

{
  "label": "?????????",
  "value": "430603" },

{
  "label": "?????????",
  "value": "430611" },

{
  "label": "?????????",
  "value": "430621" },

{
  "label": "?????????",
  "value": "430623" },

{
  "label": "?????????",
  "value": "430624" },

{
  "label": "?????????",
  "value": "430626" },

{
  "label": "????????????????????????",
  "value": "430671" },

{
  "label": "?????????",
  "value": "430681" },

{
  "label": "?????????",
  "value": "430682" }],


[{
  "label": "?????????",
  "value": "430702" },

{
  "label": "?????????",
  "value": "430703" },

{
  "label": "?????????",
  "value": "430721" },

{
  "label": "?????????",
  "value": "430722" },

{
  "label": "??????",
  "value": "430723" },

{
  "label": "?????????",
  "value": "430724" },

{
  "label": "?????????",
  "value": "430725" },

{
  "label": "?????????",
  "value": "430726" },

{
  "label": "???????????????????????????",
  "value": "430771" },

{
  "label": "?????????",
  "value": "430781" }],


[{
  "label": "?????????",
  "value": "430802" },

{
  "label": "????????????",
  "value": "430811" },

{
  "label": "?????????",
  "value": "430821" },

{
  "label": "?????????",
  "value": "430822" }],


[{
  "label": "?????????",
  "value": "430902" },

{
  "label": "?????????",
  "value": "430903" },

{
  "label": "??????",
  "value": "430921" },

{
  "label": "?????????",
  "value": "430922" },

{
  "label": "?????????",
  "value": "430923" },

{
  "label": "???????????????????????????",
  "value": "430971" },

{
  "label": "????????????????????????????????????",
  "value": "430972" },

{
  "label": "?????????",
  "value": "430981" }],


[{
  "label": "?????????",
  "value": "431002" },

{
  "label": "?????????",
  "value": "431003" },

{
  "label": "?????????",
  "value": "431021" },

{
  "label": "?????????",
  "value": "431022" },

{
  "label": "?????????",
  "value": "431023" },

{
  "label": "?????????",
  "value": "431024" },

{
  "label": "?????????",
  "value": "431025" },

{
  "label": "?????????",
  "value": "431026" },

{
  "label": "?????????",
  "value": "431027" },

{
  "label": "?????????",
  "value": "431028" },

{
  "label": "?????????",
  "value": "431081" }],


[{
  "label": "?????????",
  "value": "431102" },

{
  "label": "????????????",
  "value": "431103" },

{
  "label": "?????????",
  "value": "431121" },

{
  "label": "?????????",
  "value": "431122" },

{
  "label": "?????????",
  "value": "431123" },

{
  "label": "??????",
  "value": "431124" },

{
  "label": "?????????",
  "value": "431125" },

{
  "label": "?????????",
  "value": "431126" },

{
  "label": "?????????",
  "value": "431127" },

{
  "label": "?????????",
  "value": "431128" },

{
  "label": "?????????????????????",
  "value": "431129" },

{
  "label": "???????????????????????????",
  "value": "431171" },

{
  "label": "????????????????????????",
  "value": "431172" },

{
  "label": "???????????????????????????",
  "value": "431173" }],


[{
  "label": "?????????",
  "value": "431202" },

{
  "label": "?????????",
  "value": "431221" },

{
  "label": "?????????",
  "value": "431222" },

{
  "label": "?????????",
  "value": "431223" },

{
  "label": "?????????",
  "value": "431224" },

{
  "label": "?????????",
  "value": "431225" },

{
  "label": "?????????????????????",
  "value": "431226" },

{
  "label": "?????????????????????",
  "value": "431227" },

{
  "label": "?????????????????????",
  "value": "431228" },

{
  "label": "???????????????????????????",
  "value": "431229" },

{
  "label": "?????????????????????",
  "value": "431230" },

{
  "label": "????????????????????????",
  "value": "431271" },

{
  "label": "?????????",
  "value": "431281" }],


[{
  "label": "?????????",
  "value": "431302" },

{
  "label": "?????????",
  "value": "431321" },

{
  "label": "?????????",
  "value": "431322" },

{
  "label": "????????????",
  "value": "431381" },

{
  "label": "?????????",
  "value": "431382" }],


[{
  "label": "?????????",
  "value": "433101" },

{
  "label": "?????????",
  "value": "433122" },

{
  "label": "?????????",
  "value": "433123" },

{
  "label": "?????????",
  "value": "433124" },

{
  "label": "?????????",
  "value": "433125" },

{
  "label": "?????????",
  "value": "433126" },

{
  "label": "?????????",
  "value": "433127" },

{
  "label": "?????????",
  "value": "433130" },

{
  "label": "???????????????????????????",
  "value": "433172" },

{
  "label": "???????????????????????????",
  "value": "433173" }]],



[
[{
  "label": "?????????",
  "value": "440103" },

{
  "label": "?????????",
  "value": "440104" },

{
  "label": "?????????",
  "value": "440105" },

{
  "label": "?????????",
  "value": "440106" },

{
  "label": "?????????",
  "value": "440111" },

{
  "label": "?????????",
  "value": "440112" },

{
  "label": "?????????",
  "value": "440113" },

{
  "label": "?????????",
  "value": "440114" },

{
  "label": "?????????",
  "value": "440115" },

{
  "label": "?????????",
  "value": "440117" },

{
  "label": "?????????",
  "value": "440118" }],


[{
  "label": "?????????",
  "value": "440203" },

{
  "label": "?????????",
  "value": "440204" },

{
  "label": "?????????",
  "value": "440205" },

{
  "label": "?????????",
  "value": "440222" },

{
  "label": "?????????",
  "value": "440224" },

{
  "label": "?????????",
  "value": "440229" },

{
  "label": "?????????????????????",
  "value": "440232" },

{
  "label": "?????????",
  "value": "440233" },

{
  "label": "?????????",
  "value": "440281" },

{
  "label": "?????????",
  "value": "440282" }],


[{
  "label": "?????????",
  "value": "440303" },

{
  "label": "?????????",
  "value": "440304" },

{
  "label": "?????????",
  "value": "440305" },

{
  "label": "?????????",
  "value": "440306" },

{
  "label": "?????????",
  "value": "440307" },

{
  "label": "?????????",
  "value": "440308" },

{
  "label": "?????????",
  "value": "440309" },

{
  "label": "?????????",
  "value": "440310" }],


[{
  "label": "?????????",
  "value": "440402" },

{
  "label": "?????????",
  "value": "440403" },

{
  "label": "?????????",
  "value": "440404" }],


[{
  "label": "?????????",
  "value": "440507" },

{
  "label": "?????????",
  "value": "440511" },

{
  "label": "?????????",
  "value": "440512" },

{
  "label": "?????????",
  "value": "440513" },

{
  "label": "?????????",
  "value": "440514" },

{
  "label": "?????????",
  "value": "440515" },

{
  "label": "?????????",
  "value": "440523" }],


[{
  "label": "?????????",
  "value": "440604" },

{
  "label": "?????????",
  "value": "440605" },

{
  "label": "?????????",
  "value": "440606" },

{
  "label": "?????????",
  "value": "440607" },

{
  "label": "?????????",
  "value": "440608" }],


[{
  "label": "?????????",
  "value": "440703" },

{
  "label": "?????????",
  "value": "440704" },

{
  "label": "?????????",
  "value": "440705" },

{
  "label": "?????????",
  "value": "440781" },

{
  "label": "?????????",
  "value": "440783" },

{
  "label": "?????????",
  "value": "440784" },

{
  "label": "?????????",
  "value": "440785" }],


[{
  "label": "?????????",
  "value": "440802" },

{
  "label": "?????????",
  "value": "440803" },

{
  "label": "?????????",
  "value": "440804" },

{
  "label": "?????????",
  "value": "440811" },

{
  "label": "?????????",
  "value": "440823" },

{
  "label": "?????????",
  "value": "440825" },

{
  "label": "?????????",
  "value": "440881" },

{
  "label": "?????????",
  "value": "440882" },

{
  "label": "?????????",
  "value": "440883" }],


[{
  "label": "?????????",
  "value": "440902" },

{
  "label": "?????????",
  "value": "440904" },

{
  "label": "?????????",
  "value": "440981" },

{
  "label": "?????????",
  "value": "440982" },

{
  "label": "?????????",
  "value": "440983" }],


[{
  "label": "?????????",
  "value": "441202" },

{
  "label": "?????????",
  "value": "441203" },

{
  "label": "?????????",
  "value": "441204" },

{
  "label": "?????????",
  "value": "441223" },

{
  "label": "?????????",
  "value": "441224" },

{
  "label": "?????????",
  "value": "441225" },

{
  "label": "?????????",
  "value": "441226" },

{
  "label": "?????????",
  "value": "441284" }],


[{
  "label": "?????????",
  "value": "441302" },

{
  "label": "?????????",
  "value": "441303" },

{
  "label": "?????????",
  "value": "441322" },

{
  "label": "?????????",
  "value": "441323" },

{
  "label": "?????????",
  "value": "441324" }],


[{
  "label": "?????????",
  "value": "441402" },

{
  "label": "?????????",
  "value": "441403" },

{
  "label": "?????????",
  "value": "441422" },

{
  "label": "?????????",
  "value": "441423" },

{
  "label": "?????????",
  "value": "441424" },

{
  "label": "?????????",
  "value": "441426" },

{
  "label": "?????????",
  "value": "441427" },

{
  "label": "?????????",
  "value": "441481" }],


[{
  "label": "??????",
  "value": "441502" },

{
  "label": "?????????",
  "value": "441521" },

{
  "label": "?????????",
  "value": "441523" },

{
  "label": "?????????",
  "value": "441581" }],


[{
  "label": "?????????",
  "value": "441602" },

{
  "label": "?????????",
  "value": "441621" },

{
  "label": "?????????",
  "value": "441622" },

{
  "label": "?????????",
  "value": "441623" },

{
  "label": "?????????",
  "value": "441624" },

{
  "label": "?????????",
  "value": "441625" }],


[{
  "label": "?????????",
  "value": "441702" },

{
  "label": "?????????",
  "value": "441704" },

{
  "label": "?????????",
  "value": "441721" },

{
  "label": "?????????",
  "value": "441781" }],


[{
  "label": "?????????",
  "value": "441802" },

{
  "label": "?????????",
  "value": "441803" },

{
  "label": "?????????",
  "value": "441821" },

{
  "label": "?????????",
  "value": "441823" },

{
  "label": "???????????????????????????",
  "value": "441825" },

{
  "label": "?????????????????????",
  "value": "441826" },

{
  "label": "?????????",
  "value": "441881" },

{
  "label": "?????????",
  "value": "441882" }],


[{
  "label": "?????????",
  "value": "441900" }],

[{
  "label": "?????????",
  "value": "442000" }],

[{
  "label": "?????????",
  "value": "445102" },

{
  "label": "?????????",
  "value": "445103" },

{
  "label": "?????????",
  "value": "445122" }],


[{
  "label": "?????????",
  "value": "445202" },

{
  "label": "?????????",
  "value": "445203" },

{
  "label": "?????????",
  "value": "445222" },

{
  "label": "?????????",
  "value": "445224" },

{
  "label": "?????????",
  "value": "445281" }],


[{
  "label": "?????????",
  "value": "445302" },

{
  "label": "?????????",
  "value": "445303" },

{
  "label": "?????????",
  "value": "445321" },

{
  "label": "?????????",
  "value": "445322" },

{
  "label": "?????????",
  "value": "445381" }]],



[
[{
  "label": "?????????",
  "value": "450102" },

{
  "label": "?????????",
  "value": "450103" },

{
  "label": "?????????",
  "value": "450105" },

{
  "label": "????????????",
  "value": "450107" },

{
  "label": "?????????",
  "value": "450108" },

{
  "label": "?????????",
  "value": "450109" },

{
  "label": "?????????",
  "value": "450110" },

{
  "label": "?????????",
  "value": "450123" },

{
  "label": "?????????",
  "value": "450124" },

{
  "label": "?????????",
  "value": "450125" },

{
  "label": "?????????",
  "value": "450126" },

{
  "label": "??????",
  "value": "450127" }],


[{
  "label": "?????????",
  "value": "450202" },

{
  "label": "?????????",
  "value": "450203" },

{
  "label": "?????????",
  "value": "450204" },

{
  "label": "?????????",
  "value": "450205" },

{
  "label": "?????????",
  "value": "450206" },

{
  "label": "?????????",
  "value": "450222" },

{
  "label": "?????????",
  "value": "450223" },

{
  "label": "?????????",
  "value": "450224" },

{
  "label": "?????????????????????",
  "value": "450225" },

{
  "label": "?????????????????????",
  "value": "450226" }],


[{
  "label": "?????????",
  "value": "450302" },

{
  "label": "?????????",
  "value": "450303" },

{
  "label": "?????????",
  "value": "450304" },

{
  "label": "?????????",
  "value": "450305" },

{
  "label": "?????????",
  "value": "450311" },

{
  "label": "?????????",
  "value": "450312" },

{
  "label": "?????????",
  "value": "450321" },

{
  "label": "?????????",
  "value": "450323" },

{
  "label": "?????????",
  "value": "450324" },

{
  "label": "?????????",
  "value": "450325" },

{
  "label": "?????????",
  "value": "450326" },

{
  "label": "?????????",
  "value": "450327" },

{
  "label": "?????????????????????",
  "value": "450328" },

{
  "label": "?????????",
  "value": "450329" },

{
  "label": "?????????",
  "value": "450330" },

{
  "label": "?????????",
  "value": "450331" },

{
  "label": "?????????????????????",
  "value": "450332" }],


[{
  "label": "?????????",
  "value": "450403" },

{
  "label": "?????????",
  "value": "450405" },

{
  "label": "?????????",
  "value": "450406" },

{
  "label": "?????????",
  "value": "450421" },

{
  "label": "??????",
  "value": "450422" },

{
  "label": "?????????",
  "value": "450423" },

{
  "label": "?????????",
  "value": "450481" }],


[{
  "label": "?????????",
  "value": "450502" },

{
  "label": "?????????",
  "value": "450503" },

{
  "label": "????????????",
  "value": "450512" },

{
  "label": "?????????",
  "value": "450521" }],


[{
  "label": "?????????",
  "value": "450602" },

{
  "label": "?????????",
  "value": "450603" },

{
  "label": "?????????",
  "value": "450621" },

{
  "label": "?????????",
  "value": "450681" }],


[{
  "label": "?????????",
  "value": "450702" },

{
  "label": "?????????",
  "value": "450703" },

{
  "label": "?????????",
  "value": "450721" },

{
  "label": "?????????",
  "value": "450722" }],


[{
  "label": "?????????",
  "value": "450802" },

{
  "label": "?????????",
  "value": "450803" },

{
  "label": "?????????",
  "value": "450804" },

{
  "label": "?????????",
  "value": "450821" },

{
  "label": "?????????",
  "value": "450881" }],


[{
  "label": "?????????",
  "value": "450902" },

{
  "label": "?????????",
  "value": "450903" },

{
  "label": "??????",
  "value": "450921" },

{
  "label": "?????????",
  "value": "450922" },

{
  "label": "?????????",
  "value": "450923" },

{
  "label": "?????????",
  "value": "450924" },

{
  "label": "?????????",
  "value": "450981" }],


[{
  "label": "?????????",
  "value": "451002" },

{
  "label": "?????????",
  "value": "451021" },

{
  "label": "?????????",
  "value": "451022" },

{
  "label": "?????????",
  "value": "451023" },

{
  "label": "?????????",
  "value": "451024" },

{
  "label": "?????????",
  "value": "451026" },

{
  "label": "?????????",
  "value": "451027" },

{
  "label": "?????????",
  "value": "451028" },

{
  "label": "?????????",
  "value": "451029" },

{
  "label": "?????????",
  "value": "451030" },

{
  "label": "?????????????????????",
  "value": "451031" },

{
  "label": "?????????",
  "value": "451081" }],


[{
  "label": "?????????",
  "value": "451102" },

{
  "label": "?????????",
  "value": "451103" },

{
  "label": "?????????",
  "value": "451121" },

{
  "label": "?????????",
  "value": "451122" },

{
  "label": "?????????????????????",
  "value": "451123" }],


[{
  "label": "????????????",
  "value": "451202" },

{
  "label": "?????????",
  "value": "451203" },

{
  "label": "?????????",
  "value": "451221" },

{
  "label": "?????????",
  "value": "451222" },

{
  "label": "?????????",
  "value": "451223" },

{
  "label": "?????????",
  "value": "451224" },

{
  "label": "????????????????????????",
  "value": "451225" },

{
  "label": "????????????????????????",
  "value": "451226" },

{
  "label": "?????????????????????",
  "value": "451227" },

{
  "label": "?????????????????????",
  "value": "451228" },

{
  "label": "?????????????????????",
  "value": "451229" }],


[{
  "label": "?????????",
  "value": "451302" },

{
  "label": "?????????",
  "value": "451321" },

{
  "label": "?????????",
  "value": "451322" },

{
  "label": "?????????",
  "value": "451323" },

{
  "label": "?????????????????????",
  "value": "451324" },

{
  "label": "?????????",
  "value": "451381" }],


[{
  "label": "?????????",
  "value": "451402" },

{
  "label": "?????????",
  "value": "451421" },

{
  "label": "?????????",
  "value": "451422" },

{
  "label": "?????????",
  "value": "451423" },

{
  "label": "?????????",
  "value": "451424" },

{
  "label": "?????????",
  "value": "451425" },

{
  "label": "?????????",
  "value": "451481" }]],



[
[{
  "label": "?????????",
  "value": "460105" },

{
  "label": "?????????",
  "value": "460106" },

{
  "label": "?????????",
  "value": "460107" },

{
  "label": "?????????",
  "value": "460108" }],


[{
  "label": "?????????",
  "value": "460202" },

{
  "label": "?????????",
  "value": "460203" },

{
  "label": "?????????",
  "value": "460204" },

{
  "label": "?????????",
  "value": "460205" }],


[{
  "label": "????????????",
  "value": "460321" },

{
  "label": "????????????",
  "value": "460322" },

{
  "label": "?????????????????????????????????",
  "value": "460323" }],


[{
  "label": "?????????",
  "value": "460400" }],

[{
  "label": "????????????",
  "value": "469001" },

{
  "label": "?????????",
  "value": "469002" },

{
  "label": "?????????",
  "value": "469005" },

{
  "label": "?????????",
  "value": "469006" },

{
  "label": "?????????",
  "value": "469007" },

{
  "label": "?????????",
  "value": "469021" },

{
  "label": "?????????",
  "value": "469022" },

{
  "label": "?????????",
  "value": "469023" },

{
  "label": "?????????",
  "value": "469024" },

{
  "label": "?????????????????????",
  "value": "469025" },

{
  "label": "?????????????????????",
  "value": "469026" },

{
  "label": "?????????????????????",
  "value": "469027" },

{
  "label": "?????????????????????",
  "value": "469028" },

{
  "label": "???????????????????????????",
  "value": "469029" },

{
  "label": "???????????????????????????",
  "value": "469030" }]],



[
[{
  "label": "?????????",
  "value": "500101" },

{
  "label": "?????????",
  "value": "500102" },

{
  "label": "?????????",
  "value": "500103" },

{
  "label": "????????????",
  "value": "500104" },

{
  "label": "?????????",
  "value": "500105" },

{
  "label": "????????????",
  "value": "500106" },

{
  "label": "????????????",
  "value": "500107" },

{
  "label": "?????????",
  "value": "500108" },

{
  "label": "?????????",
  "value": "500109" },

{
  "label": "?????????",
  "value": "500110" },

{
  "label": "?????????",
  "value": "500111" },

{
  "label": "?????????",
  "value": "500112" },

{
  "label": "?????????",
  "value": "500113" },

{
  "label": "?????????",
  "value": "500114" },

{
  "label": "?????????",
  "value": "500115" },

{
  "label": "?????????",
  "value": "500116" },

{
  "label": "?????????",
  "value": "500117" },

{
  "label": "?????????",
  "value": "500118" },

{
  "label": "?????????",
  "value": "500119" },

{
  "label": "?????????",
  "value": "500120" },

{
  "label": "?????????",
  "value": "500151" },

{
  "label": "?????????",
  "value": "500152" },

{
  "label": "?????????",
  "value": "500153" },

{
  "label": "?????????",
  "value": "500154" },

{
  "label": "?????????",
  "value": "500155" },

{
  "label": "?????????",
  "value": "500156" }],


[{
  "label": "?????????",
  "value": "500229" },

{
  "label": "?????????",
  "value": "500230" },

{
  "label": "?????????",
  "value": "500231" },

{
  "label": "??????",
  "value": "500233" },

{
  "label": "?????????",
  "value": "500235" },

{
  "label": "?????????",
  "value": "500236" },

{
  "label": "?????????",
  "value": "500237" },

{
  "label": "?????????",
  "value": "500238" },

{
  "label": "????????????????????????",
  "value": "500240" },

{
  "label": "??????????????????????????????",
  "value": "500241" },

{
  "label": "??????????????????????????????",
  "value": "500242" },

{
  "label": "??????????????????????????????",
  "value": "500243" }]],



[
[{
  "label": "?????????",
  "value": "510104" },

{
  "label": "?????????",
  "value": "510105" },

{
  "label": "?????????",
  "value": "510106" },

{
  "label": "?????????",
  "value": "510107" },

{
  "label": "?????????",
  "value": "510108" },

{
  "label": "????????????",
  "value": "510112" },

{
  "label": "????????????",
  "value": "510113" },

{
  "label": "?????????",
  "value": "510114" },

{
  "label": "?????????",
  "value": "510115" },

{
  "label": "?????????",
  "value": "510116" },

{
  "label": "?????????",
  "value": "510117" },

{
  "label": "?????????",
  "value": "510121" },

{
  "label": "?????????",
  "value": "510129" },

{
  "label": "?????????",
  "value": "510131" },

{
  "label": "?????????",
  "value": "510132" },

{
  "label": "????????????",
  "value": "510181" },

{
  "label": "?????????",
  "value": "510182" },

{
  "label": "?????????",
  "value": "510183" },

{
  "label": "?????????",
  "value": "510184" },

{
  "label": "?????????",
  "value": "510185" }],


[{
  "label": "????????????",
  "value": "510302" },

{
  "label": "?????????",
  "value": "510303" },

{
  "label": "?????????",
  "value": "510304" },

{
  "label": "?????????",
  "value": "510311" },

{
  "label": "??????",
  "value": "510321" },

{
  "label": "?????????",
  "value": "510322" }],


[{
  "label": "??????",
  "value": "510402" },

{
  "label": "??????",
  "value": "510403" },

{
  "label": "?????????",
  "value": "510411" },

{
  "label": "?????????",
  "value": "510421" },

{
  "label": "?????????",
  "value": "510422" }],


[{
  "label": "?????????",
  "value": "510502" },

{
  "label": "?????????",
  "value": "510503" },

{
  "label": "????????????",
  "value": "510504" },

{
  "label": "??????",
  "value": "510521" },

{
  "label": "?????????",
  "value": "510522" },

{
  "label": "?????????",
  "value": "510524" },

{
  "label": "?????????",
  "value": "510525" }],


[{
  "label": "?????????",
  "value": "510603" },

{
  "label": "?????????",
  "value": "510604" },

{
  "label": "?????????",
  "value": "510623" },

{
  "label": "?????????",
  "value": "510681" },

{
  "label": "?????????",
  "value": "510682" },

{
  "label": "?????????",
  "value": "510683" }],


[{
  "label": "?????????",
  "value": "510703" },

{
  "label": "?????????",
  "value": "510704" },

{
  "label": "?????????",
  "value": "510705" },

{
  "label": "?????????",
  "value": "510722" },

{
  "label": "?????????",
  "value": "510723" },

{
  "label": "?????????",
  "value": "510725" },

{
  "label": "?????????????????????",
  "value": "510726" },

{
  "label": "?????????",
  "value": "510727" },

{
  "label": "?????????",
  "value": "510781" }],


[{
  "label": "?????????",
  "value": "510802" },

{
  "label": "?????????",
  "value": "510811" },

{
  "label": "?????????",
  "value": "510812" },

{
  "label": "?????????",
  "value": "510821" },

{
  "label": "?????????",
  "value": "510822" },

{
  "label": "?????????",
  "value": "510823" },

{
  "label": "?????????",
  "value": "510824" }],


[{
  "label": "?????????",
  "value": "510903" },

{
  "label": "?????????",
  "value": "510904" },

{
  "label": "?????????",
  "value": "510921" },

{
  "label": "?????????",
  "value": "510922" },

{
  "label": "?????????",
  "value": "510923" }],


[{
  "label": "?????????",
  "value": "511002" },

{
  "label": "?????????",
  "value": "511011" },

{
  "label": "?????????",
  "value": "511024" },

{
  "label": "?????????",
  "value": "511025" },

{
  "label": "?????????????????????",
  "value": "511071" },

{
  "label": "?????????",
  "value": "511083" }],


[{
  "label": "?????????",
  "value": "511102" },

{
  "label": "?????????",
  "value": "511111" },

{
  "label": "????????????",
  "value": "511112" },

{
  "label": "????????????",
  "value": "511113" },

{
  "label": "?????????",
  "value": "511123" },

{
  "label": "?????????",
  "value": "511124" },

{
  "label": "?????????",
  "value": "511126" },

{
  "label": "?????????",
  "value": "511129" },

{
  "label": "?????????????????????",
  "value": "511132" },

{
  "label": "?????????????????????",
  "value": "511133" },

{
  "label": "????????????",
  "value": "511181" }],


[{
  "label": "?????????",
  "value": "511302" },

{
  "label": "?????????",
  "value": "511303" },

{
  "label": "?????????",
  "value": "511304" },

{
  "label": "?????????",
  "value": "511321" },

{
  "label": "?????????",
  "value": "511322" },

{
  "label": "?????????",
  "value": "511323" },

{
  "label": "?????????",
  "value": "511324" },

{
  "label": "?????????",
  "value": "511325" },

{
  "label": "?????????",
  "value": "511381" }],


[{
  "label": "?????????",
  "value": "511402" },

{
  "label": "?????????",
  "value": "511403" },

{
  "label": "?????????",
  "value": "511421" },

{
  "label": "?????????",
  "value": "511423" },

{
  "label": "?????????",
  "value": "511424" },

{
  "label": "?????????",
  "value": "511425" }],


[{
  "label": "?????????",
  "value": "511502" },

{
  "label": "?????????",
  "value": "511503" },

{
  "label": "?????????",
  "value": "511521" },

{
  "label": "?????????",
  "value": "511523" },

{
  "label": "?????????",
  "value": "511524" },

{
  "label": "??????",
  "value": "511525" },

{
  "label": "??????",
  "value": "511526" },

{
  "label": "?????????",
  "value": "511527" },

{
  "label": "?????????",
  "value": "511528" },

{
  "label": "?????????",
  "value": "511529" }],


[{
  "label": "?????????",
  "value": "511602" },

{
  "label": "?????????",
  "value": "511603" },

{
  "label": "?????????",
  "value": "511621" },

{
  "label": "?????????",
  "value": "511622" },

{
  "label": "?????????",
  "value": "511623" },

{
  "label": "?????????",
  "value": "511681" }],


[{
  "label": "?????????",
  "value": "511702" },

{
  "label": "?????????",
  "value": "511703" },

{
  "label": "?????????",
  "value": "511722" },

{
  "label": "?????????",
  "value": "511723" },

{
  "label": "?????????",
  "value": "511724" },

{
  "label": "??????",
  "value": "511725" },

{
  "label": "?????????????????????",
  "value": "511771" },

{
  "label": "?????????",
  "value": "511781" }],


[{
  "label": "?????????",
  "value": "511802" },

{
  "label": "?????????",
  "value": "511803" },

{
  "label": "?????????",
  "value": "511822" },

{
  "label": "?????????",
  "value": "511823" },

{
  "label": "?????????",
  "value": "511824" },

{
  "label": "?????????",
  "value": "511825" },

{
  "label": "?????????",
  "value": "511826" },

{
  "label": "?????????",
  "value": "511827" }],


[{
  "label": "?????????",
  "value": "511902" },

{
  "label": "?????????",
  "value": "511903" },

{
  "label": "?????????",
  "value": "511921" },

{
  "label": "?????????",
  "value": "511922" },

{
  "label": "?????????",
  "value": "511923" },

{
  "label": "?????????????????????",
  "value": "511971" }],


[{
  "label": "?????????",
  "value": "512002" },

{
  "label": "?????????",
  "value": "512021" },

{
  "label": "?????????",
  "value": "512022" }],


[{
  "label": "????????????",
  "value": "513201" },

{
  "label": "?????????",
  "value": "513221" },

{
  "label": "??????",
  "value": "513222" },

{
  "label": "??????",
  "value": "513223" },

{
  "label": "?????????",
  "value": "513224" },

{
  "label": "????????????",
  "value": "513225" },

{
  "label": "?????????",
  "value": "513226" },

{
  "label": "?????????",
  "value": "513227" },

{
  "label": "?????????",
  "value": "513228" },

{
  "label": "?????????",
  "value": "513230" },

{
  "label": "?????????",
  "value": "513231" },

{
  "label": "????????????",
  "value": "513232" },

{
  "label": "?????????",
  "value": "513233" }],


[{
  "label": "?????????",
  "value": "513301" },

{
  "label": "?????????",
  "value": "513322" },

{
  "label": "?????????",
  "value": "513323" },

{
  "label": "?????????",
  "value": "513324" },

{
  "label": "?????????",
  "value": "513325" },

{
  "label": "?????????",
  "value": "513326" },

{
  "label": "?????????",
  "value": "513327" },

{
  "label": "?????????",
  "value": "513328" },

{
  "label": "?????????",
  "value": "513329" },

{
  "label": "?????????",
  "value": "513330" },

{
  "label": "?????????",
  "value": "513331" },

{
  "label": "?????????",
  "value": "513332" },

{
  "label": "?????????",
  "value": "513333" },

{
  "label": "?????????",
  "value": "513334" },

{
  "label": "?????????",
  "value": "513335" },

{
  "label": "?????????",
  "value": "513336" },

{
  "label": "?????????",
  "value": "513337" },

{
  "label": "?????????",
  "value": "513338" }],


[{
  "label": "?????????",
  "value": "513401" },

{
  "label": "?????????????????????",
  "value": "513422" },

{
  "label": "?????????",
  "value": "513423" },

{
  "label": "?????????",
  "value": "513424" },

{
  "label": "?????????",
  "value": "513425" },

{
  "label": "?????????",
  "value": "513426" },

{
  "label": "?????????",
  "value": "513427" },

{
  "label": "?????????",
  "value": "513428" },

{
  "label": "?????????",
  "value": "513429" },

{
  "label": "?????????",
  "value": "513430" },

{
  "label": "?????????",
  "value": "513431" },

{
  "label": "?????????",
  "value": "513432" },

{
  "label": "?????????",
  "value": "513433" },

{
  "label": "?????????",
  "value": "513434" },

{
  "label": "?????????",
  "value": "513435" },

{
  "label": "?????????",
  "value": "513436" },

{
  "label": "?????????",
  "value": "513437" }]],



[
[{
  "label": "?????????",
  "value": "520102" },

{
  "label": "?????????",
  "value": "520103" },

{
  "label": "?????????",
  "value": "520111" },

{
  "label": "?????????",
  "value": "520112" },

{
  "label": "?????????",
  "value": "520113" },

{
  "label": "????????????",
  "value": "520115" },

{
  "label": "?????????",
  "value": "520121" },

{
  "label": "?????????",
  "value": "520122" },

{
  "label": "?????????",
  "value": "520123" },

{
  "label": "?????????",
  "value": "520181" }],


[{
  "label": "?????????",
  "value": "520201" },

{
  "label": "????????????",
  "value": "520203" },

{
  "label": "?????????",
  "value": "520221" },

{
  "label": "?????????",
  "value": "520281" }],


[{
  "label": "????????????",
  "value": "520302" },

{
  "label": "?????????",
  "value": "520303" },

{
  "label": "?????????",
  "value": "520304" },

{
  "label": "?????????",
  "value": "520322" },

{
  "label": "?????????",
  "value": "520323" },

{
  "label": "?????????",
  "value": "520324" },

{
  "label": "??????????????????????????????",
  "value": "520325" },

{
  "label": "??????????????????????????????",
  "value": "520326" },

{
  "label": "?????????",
  "value": "520327" },

{
  "label": "?????????",
  "value": "520328" },

{
  "label": "?????????",
  "value": "520329" },

{
  "label": "?????????",
  "value": "520330" },

{
  "label": "?????????",
  "value": "520381" },

{
  "label": "?????????",
  "value": "520382" }],


[{
  "label": "?????????",
  "value": "520402" },

{
  "label": "?????????",
  "value": "520403" },

{
  "label": "?????????",
  "value": "520422" },

{
  "label": "??????????????????????????????",
  "value": "520423" },

{
  "label": "??????????????????????????????",
  "value": "520424" },

{
  "label": "??????????????????????????????",
  "value": "520425" }],


[{
  "label": "????????????",
  "value": "520502" },

{
  "label": "?????????",
  "value": "520521" },

{
  "label": "?????????",
  "value": "520522" },

{
  "label": "?????????",
  "value": "520523" },

{
  "label": "?????????",
  "value": "520524" },

{
  "label": "?????????",
  "value": "520525" },

{
  "label": "?????????????????????????????????",
  "value": "520526" },

{
  "label": "?????????",
  "value": "520527" }],


[{
  "label": "?????????",
  "value": "520602" },

{
  "label": "?????????",
  "value": "520603" },

{
  "label": "?????????",
  "value": "520621" },

{
  "label": "?????????????????????",
  "value": "520622" },

{
  "label": "?????????",
  "value": "520623" },

{
  "label": "?????????",
  "value": "520624" },

{
  "label": "??????????????????????????????",
  "value": "520625" },

{
  "label": "?????????",
  "value": "520626" },

{
  "label": "????????????????????????",
  "value": "520627" },

{
  "label": "?????????????????????",
  "value": "520628" }],


[{
  "label": "?????????",
  "value": "522301" },

{
  "label": "?????????",
  "value": "522322" },

{
  "label": "?????????",
  "value": "522323" },

{
  "label": "?????????",
  "value": "522324" },

{
  "label": "?????????",
  "value": "522325" },

{
  "label": "?????????",
  "value": "522326" },

{
  "label": "?????????",
  "value": "522327" },

{
  "label": "?????????",
  "value": "522328" }],


[{
  "label": "?????????",
  "value": "522601" },

{
  "label": "?????????",
  "value": "522622" },

{
  "label": "?????????",
  "value": "522623" },

{
  "label": "?????????",
  "value": "522624" },

{
  "label": "?????????",
  "value": "522625" },

{
  "label": "?????????",
  "value": "522626" },

{
  "label": "?????????",
  "value": "522627" },

{
  "label": "?????????",
  "value": "522628" },

{
  "label": "?????????",
  "value": "522629" },

{
  "label": "?????????",
  "value": "522630" },

{
  "label": "?????????",
  "value": "522631" },

{
  "label": "?????????",
  "value": "522632" },

{
  "label": "?????????",
  "value": "522633" },

{
  "label": "?????????",
  "value": "522634" },

{
  "label": "?????????",
  "value": "522635" },

{
  "label": "?????????",
  "value": "522636" }],


[{
  "label": "?????????",
  "value": "522701" },

{
  "label": "?????????",
  "value": "522702" },

{
  "label": "?????????",
  "value": "522722" },

{
  "label": "?????????",
  "value": "522723" },

{
  "label": "?????????",
  "value": "522725" },

{
  "label": "?????????",
  "value": "522726" },

{
  "label": "?????????",
  "value": "522727" },

{
  "label": "?????????",
  "value": "522728" },

{
  "label": "?????????",
  "value": "522729" },

{
  "label": "?????????",
  "value": "522730" },

{
  "label": "?????????",
  "value": "522731" },

{
  "label": "?????????????????????",
  "value": "522732" }]],



[
[{
  "label": "?????????",
  "value": "530102" },

{
  "label": "?????????",
  "value": "530103" },

{
  "label": "?????????",
  "value": "530111" },

{
  "label": "?????????",
  "value": "530112" },

{
  "label": "?????????",
  "value": "530113" },

{
  "label": "?????????",
  "value": "530114" },

{
  "label": "?????????",
  "value": "530115" },

{
  "label": "?????????",
  "value": "530124" },

{
  "label": "?????????",
  "value": "530125" },

{
  "label": "?????????????????????",
  "value": "530126" },

{
  "label": "?????????",
  "value": "530127" },

{
  "label": "???????????????????????????",
  "value": "530128" },

{
  "label": "???????????????????????????",
  "value": "530129" },

{
  "label": "?????????",
  "value": "530181" }],


[{
  "label": "?????????",
  "value": "530302" },

{
  "label": "?????????",
  "value": "530303" },

{
  "label": "?????????",
  "value": "530321" },

{
  "label": "?????????",
  "value": "530322" },

{
  "label": "?????????",
  "value": "530323" },

{
  "label": "?????????",
  "value": "530324" },

{
  "label": "?????????",
  "value": "530325" },

{
  "label": "?????????",
  "value": "530326" },

{
  "label": "?????????",
  "value": "530381" }],


[{
  "label": "?????????",
  "value": "530402" },

{
  "label": "?????????",
  "value": "530403" },

{
  "label": "?????????",
  "value": "530422" },

{
  "label": "?????????",
  "value": "530423" },

{
  "label": "?????????",
  "value": "530424" },

{
  "label": "?????????",
  "value": "530425" },

{
  "label": "?????????????????????",
  "value": "530426" },

{
  "label": "???????????????????????????",
  "value": "530427" },

{
  "label": "????????????????????????????????????",
  "value": "530428" }],


[{
  "label": "?????????",
  "value": "530502" },

{
  "label": "?????????",
  "value": "530521" },

{
  "label": "?????????",
  "value": "530523" },

{
  "label": "?????????",
  "value": "530524" },

{
  "label": "?????????",
  "value": "530581" }],


[{
  "label": "?????????",
  "value": "530602" },

{
  "label": "?????????",
  "value": "530621" },

{
  "label": "?????????",
  "value": "530622" },

{
  "label": "?????????",
  "value": "530623" },

{
  "label": "?????????",
  "value": "530624" },

{
  "label": "?????????",
  "value": "530625" },

{
  "label": "?????????",
  "value": "530626" },

{
  "label": "?????????",
  "value": "530627" },

{
  "label": "?????????",
  "value": "530628" },

{
  "label": "?????????",
  "value": "530629" },

{
  "label": "?????????",
  "value": "530630" }],


[{
  "label": "?????????",
  "value": "530702" },

{
  "label": "????????????????????????",
  "value": "530721" },

{
  "label": "?????????",
  "value": "530722" },

{
  "label": "?????????",
  "value": "530723" },

{
  "label": "?????????????????????",
  "value": "530724" }],


[{
  "label": "?????????",
  "value": "530802" },

{
  "label": "??????????????????????????????",
  "value": "530821" },

{
  "label": "????????????????????????",
  "value": "530822" },

{
  "label": "?????????????????????",
  "value": "530823" },

{
  "label": "???????????????????????????",
  "value": "530824" },

{
  "label": "???????????????????????????????????????",
  "value": "530825" },

{
  "label": "??????????????????????????????",
  "value": "530826" },

{
  "label": "????????????????????????????????????",
  "value": "530827" },

{
  "label": "????????????????????????",
  "value": "530828" },

{
  "label": "?????????????????????",
  "value": "530829" }],


[{
  "label": "?????????",
  "value": "530902" },

{
  "label": "?????????",
  "value": "530921" },

{
  "label": "??????",
  "value": "530922" },

{
  "label": "?????????",
  "value": "530923" },

{
  "label": "?????????",
  "value": "530924" },

{
  "label": "?????????????????????????????????????????????",
  "value": "530925" },

{
  "label": "???????????????????????????",
  "value": "530926" },

{
  "label": "?????????????????????",
  "value": "530927" }],


[{
  "label": "?????????",
  "value": "532301" },

{
  "label": "?????????",
  "value": "532322" },

{
  "label": "?????????",
  "value": "532323" },

{
  "label": "?????????",
  "value": "532324" },

{
  "label": "?????????",
  "value": "532325" },

{
  "label": "?????????",
  "value": "532326" },

{
  "label": "?????????",
  "value": "532327" },

{
  "label": "?????????",
  "value": "532328" },

{
  "label": "?????????",
  "value": "532329" },

{
  "label": "?????????",
  "value": "532331" }],


[{
  "label": "?????????",
  "value": "532501" },

{
  "label": "?????????",
  "value": "532502" },

{
  "label": "?????????",
  "value": "532503" },

{
  "label": "?????????",
  "value": "532504" },

{
  "label": "?????????????????????",
  "value": "532523" },

{
  "label": "?????????",
  "value": "532524" },

{
  "label": "?????????",
  "value": "532525" },

{
  "label": "?????????",
  "value": "532527" },

{
  "label": "?????????",
  "value": "532528" },

{
  "label": "?????????",
  "value": "532529" },

{
  "label": "?????????????????????????????????",
  "value": "532530" },

{
  "label": "?????????",
  "value": "532531" },

{
  "label": "?????????????????????",
  "value": "532532" }],


[{
  "label": "?????????",
  "value": "532601" },

{
  "label": "?????????",
  "value": "532622" },

{
  "label": "?????????",
  "value": "532623" },

{
  "label": "????????????",
  "value": "532624" },

{
  "label": "?????????",
  "value": "532625" },

{
  "label": "?????????",
  "value": "532626" },

{
  "label": "?????????",
  "value": "532627" },

{
  "label": "?????????",
  "value": "532628" }],


[{
  "label": "?????????",
  "value": "532801" },

{
  "label": "?????????",
  "value": "532822" },

{
  "label": "?????????",
  "value": "532823" }],


[{
  "label": "?????????",
  "value": "532901" },

{
  "label": "?????????????????????",
  "value": "532922" },

{
  "label": "?????????",
  "value": "532923" },

{
  "label": "?????????",
  "value": "532924" },

{
  "label": "?????????",
  "value": "532925" },

{
  "label": "?????????????????????",
  "value": "532926" },

{
  "label": "???????????????????????????",
  "value": "532927" },

{
  "label": "?????????",
  "value": "532928" },

{
  "label": "?????????",
  "value": "532929" },

{
  "label": "?????????",
  "value": "532930" },

{
  "label": "?????????",
  "value": "532931" },

{
  "label": "?????????",
  "value": "532932" }],


[{
  "label": "?????????",
  "value": "533102" },

{
  "label": "??????",
  "value": "533103" },

{
  "label": "?????????",
  "value": "533122" },

{
  "label": "?????????",
  "value": "533123" },

{
  "label": "?????????",
  "value": "533124" }],


[{
  "label": "?????????",
  "value": "533301" },

{
  "label": "?????????",
  "value": "533323" },

{
  "label": "??????????????????????????????",
  "value": "533324" },

{
  "label": "??????????????????????????????",
  "value": "533325" }],


[{
  "label": "???????????????",
  "value": "533401" },

{
  "label": "?????????",
  "value": "533422" },

{
  "label": "????????????????????????",
  "value": "533423" }]],



[
[{
  "label": "?????????",
  "value": "540102" },

{
  "label": "???????????????",
  "value": "540103" },

{
  "label": "?????????",
  "value": "540121" },

{
  "label": "?????????",
  "value": "540122" },

{
  "label": "?????????",
  "value": "540123" },

{
  "label": "?????????",
  "value": "540124" },

{
  "label": "?????????",
  "value": "540126" },

{
  "label": "???????????????",
  "value": "540127" },

{
  "label": "???????????????????????????",
  "value": "540171" },

{
  "label": "???????????????????????????",
  "value": "540172" },

{
  "label": "??????????????????????????????",
  "value": "540173" },

{
  "label": "??????????????????",
  "value": "540174" }],


[{
  "label": "????????????",
  "value": "540202" },

{
  "label": "????????????",
  "value": "540221" },

{
  "label": "?????????",
  "value": "540222" },

{
  "label": "?????????",
  "value": "540223" },

{
  "label": "?????????",
  "value": "540224" },

{
  "label": "?????????",
  "value": "540225" },

{
  "label": "?????????",
  "value": "540226" },

{
  "label": "????????????",
  "value": "540227" },

{
  "label": "?????????",
  "value": "540228" },

{
  "label": "?????????",
  "value": "540229" },

{
  "label": "?????????",
  "value": "540230" },

{
  "label": "?????????",
  "value": "540231" },

{
  "label": "?????????",
  "value": "540232" },

{
  "label": "?????????",
  "value": "540233" },

{
  "label": "?????????",
  "value": "540234" },

{
  "label": "????????????",
  "value": "540235" },

{
  "label": "?????????",
  "value": "540236" },

{
  "label": "?????????",
  "value": "540237" }],


[{
  "label": "?????????",
  "value": "540302" },

{
  "label": "?????????",
  "value": "540321" },

{
  "label": "?????????",
  "value": "540322" },

{
  "label": "????????????",
  "value": "540323" },

{
  "label": "?????????",
  "value": "540324" },

{
  "label": "?????????",
  "value": "540325" },

{
  "label": "?????????",
  "value": "540326" },

{
  "label": "?????????",
  "value": "540327" },

{
  "label": "?????????",
  "value": "540328" },

{
  "label": "?????????",
  "value": "540329" },

{
  "label": "?????????",
  "value": "540330" }],


[{
  "label": "?????????",
  "value": "540402" },

{
  "label": "???????????????",
  "value": "540421" },

{
  "label": "?????????",
  "value": "540422" },

{
  "label": "?????????",
  "value": "540423" },

{
  "label": "?????????",
  "value": "540424" },

{
  "label": "?????????",
  "value": "540425" },

{
  "label": "??????",
  "value": "540426" }],


[{
  "label": "?????????",
  "value": "540502" },

{
  "label": "?????????",
  "value": "540521" },

{
  "label": "?????????",
  "value": "540522" },

{
  "label": "?????????",
  "value": "540523" },

{
  "label": "?????????",
  "value": "540524" },

{
  "label": "?????????",
  "value": "540525" },

{
  "label": "?????????",
  "value": "540526" },

{
  "label": "?????????",
  "value": "540527" },

{
  "label": "?????????",
  "value": "540528" },

{
  "label": "?????????",
  "value": "540529" },

{
  "label": "?????????",
  "value": "540530" },

{
  "label": "????????????",
  "value": "540531" }],


[{
  "label": "?????????",
  "value": "542421" },

{
  "label": "?????????",
  "value": "542422" },

{
  "label": "?????????",
  "value": "542423" },

{
  "label": "?????????",
  "value": "542424" },

{
  "label": "?????????",
  "value": "542425" },

{
  "label": "?????????",
  "value": "542426" },

{
  "label": "??????",
  "value": "542427" },

{
  "label": "?????????",
  "value": "542428" },

{
  "label": "?????????",
  "value": "542429" },

{
  "label": "?????????",
  "value": "542430" },

{
  "label": "?????????",
  "value": "542431" }],


[{
  "label": "?????????",
  "value": "542521" },

{
  "label": "?????????",
  "value": "542522" },

{
  "label": "?????????",
  "value": "542523" },

{
  "label": "?????????",
  "value": "542524" },

{
  "label": "?????????",
  "value": "542525" },

{
  "label": "?????????",
  "value": "542526" },

{
  "label": "?????????",
  "value": "542527" }]],



[
[{
  "label": "?????????",
  "value": "610102" },

{
  "label": "?????????",
  "value": "610103" },

{
  "label": "?????????",
  "value": "610104" },

{
  "label": "?????????",
  "value": "610111" },

{
  "label": "?????????",
  "value": "610112" },

{
  "label": "?????????",
  "value": "610113" },

{
  "label": "?????????",
  "value": "610114" },

{
  "label": "?????????",
  "value": "610115" },

{
  "label": "?????????",
  "value": "610116" },

{
  "label": "?????????",
  "value": "610117" },

{
  "label": "?????????",
  "value": "610118" },

{
  "label": "?????????",
  "value": "610122" },

{
  "label": "?????????",
  "value": "610124" }],


[{
  "label": "?????????",
  "value": "610202" },

{
  "label": "?????????",
  "value": "610203" },

{
  "label": "?????????",
  "value": "610204" },

{
  "label": "?????????",
  "value": "610222" }],


[{
  "label": "?????????",
  "value": "610302" },

{
  "label": "?????????",
  "value": "610303" },

{
  "label": "?????????",
  "value": "610304" },

{
  "label": "?????????",
  "value": "610322" },

{
  "label": "?????????",
  "value": "610323" },

{
  "label": "?????????",
  "value": "610324" },

{
  "label": "??????",
  "value": "610326" },

{
  "label": "??????",
  "value": "610327" },

{
  "label": "?????????",
  "value": "610328" },

{
  "label": "?????????",
  "value": "610329" },

{
  "label": "??????",
  "value": "610330" },

{
  "label": "?????????",
  "value": "610331" }],


[{
  "label": "?????????",
  "value": "610402" },

{
  "label": "?????????",
  "value": "610403" },

{
  "label": "?????????",
  "value": "610404" },

{
  "label": "?????????",
  "value": "610422" },

{
  "label": "?????????",
  "value": "610423" },

{
  "label": "??????",
  "value": "610424" },

{
  "label": "?????????",
  "value": "610425" },

{
  "label": "?????????",
  "value": "610426" },

{
  "label": "??????",
  "value": "610427" },

{
  "label": "?????????",
  "value": "610428" },

{
  "label": "?????????",
  "value": "610429" },

{
  "label": "?????????",
  "value": "610430" },

{
  "label": "?????????",
  "value": "610431" },

{
  "label": "?????????",
  "value": "610481" }],


[{
  "label": "?????????",
  "value": "610502" },

{
  "label": "?????????",
  "value": "610503" },

{
  "label": "?????????",
  "value": "610522" },

{
  "label": "?????????",
  "value": "610523" },

{
  "label": "?????????",
  "value": "610524" },

{
  "label": "?????????",
  "value": "610525" },

{
  "label": "?????????",
  "value": "610526" },

{
  "label": "?????????",
  "value": "610527" },

{
  "label": "?????????",
  "value": "610528" },

{
  "label": "?????????",
  "value": "610581" },

{
  "label": "?????????",
  "value": "610582" }],


[{
  "label": "?????????",
  "value": "610602" },

{
  "label": "?????????",
  "value": "610603" },

{
  "label": "?????????",
  "value": "610621" },

{
  "label": "?????????",
  "value": "610622" },

{
  "label": "?????????",
  "value": "610623" },

{
  "label": "?????????",
  "value": "610625" },

{
  "label": "?????????",
  "value": "610626" },

{
  "label": "?????????",
  "value": "610627" },

{
  "label": "??????",
  "value": "610628" },

{
  "label": "?????????",
  "value": "610629" },

{
  "label": "?????????",
  "value": "610630" },

{
  "label": "?????????",
  "value": "610631" },

{
  "label": "?????????",
  "value": "610632" }],


[{
  "label": "?????????",
  "value": "610702" },

{
  "label": "?????????",
  "value": "610703" },

{
  "label": "?????????",
  "value": "610722" },

{
  "label": "??????",
  "value": "610723" },

{
  "label": "?????????",
  "value": "610724" },

{
  "label": "??????",
  "value": "610725" },

{
  "label": "?????????",
  "value": "610726" },

{
  "label": "?????????",
  "value": "610727" },

{
  "label": "?????????",
  "value": "610728" },

{
  "label": "?????????",
  "value": "610729" },

{
  "label": "?????????",
  "value": "610730" }],


[{
  "label": "?????????",
  "value": "610802" },

{
  "label": "?????????",
  "value": "610803" },

{
  "label": "?????????",
  "value": "610822" },

{
  "label": "?????????",
  "value": "610824" },

{
  "label": "?????????",
  "value": "610825" },

{
  "label": "?????????",
  "value": "610826" },

{
  "label": "?????????",
  "value": "610827" },

{
  "label": "??????",
  "value": "610828" },

{
  "label": "?????????",
  "value": "610829" },

{
  "label": "?????????",
  "value": "610830" },

{
  "label": "?????????",
  "value": "610831" },

{
  "label": "?????????",
  "value": "610881" }],


[{
  "label": "?????????",
  "value": "610902" },

{
  "label": "?????????",
  "value": "610921" },

{
  "label": "?????????",
  "value": "610922" },

{
  "label": "?????????",
  "value": "610923" },

{
  "label": "?????????",
  "value": "610924" },

{
  "label": "?????????",
  "value": "610925" },

{
  "label": "?????????",
  "value": "610926" },

{
  "label": "?????????",
  "value": "610927" },

{
  "label": "?????????",
  "value": "610928" },

{
  "label": "?????????",
  "value": "610929" }],


[{
  "label": "?????????",
  "value": "611002" },

{
  "label": "?????????",
  "value": "611021" },

{
  "label": "?????????",
  "value": "611022" },

{
  "label": "?????????",
  "value": "611023" },

{
  "label": "?????????",
  "value": "611024" },

{
  "label": "?????????",
  "value": "611025" },

{
  "label": "?????????",
  "value": "611026" }]],



[
[{
  "label": "?????????",
  "value": "620102" },

{
  "label": "????????????",
  "value": "620103" },

{
  "label": "?????????",
  "value": "620104" },

{
  "label": "?????????",
  "value": "620105" },

{
  "label": "?????????",
  "value": "620111" },

{
  "label": "?????????",
  "value": "620121" },

{
  "label": "?????????",
  "value": "620122" },

{
  "label": "?????????",
  "value": "620123" },

{
  "label": "????????????",
  "value": "620171" }],


[{
  "label": "????????????",
  "value": "620201" }],

[{
  "label": "?????????",
  "value": "620302" },

{
  "label": "?????????",
  "value": "620321" }],


[{
  "label": "?????????",
  "value": "620402" },

{
  "label": "?????????",
  "value": "620403" },

{
  "label": "?????????",
  "value": "620421" },

{
  "label": "?????????",
  "value": "620422" },

{
  "label": "?????????",
  "value": "620423" }],


[{
  "label": "?????????",
  "value": "620502" },

{
  "label": "?????????",
  "value": "620503" },

{
  "label": "?????????",
  "value": "620521" },

{
  "label": "?????????",
  "value": "620522" },

{
  "label": "?????????",
  "value": "620523" },

{
  "label": "?????????",
  "value": "620524" },

{
  "label": "????????????????????????",
  "value": "620525" }],


[{
  "label": "?????????",
  "value": "620602" },

{
  "label": "?????????",
  "value": "620621" },

{
  "label": "?????????",
  "value": "620622" },

{
  "label": "?????????????????????",
  "value": "620623" }],


[{
  "label": "?????????",
  "value": "620702" },

{
  "label": "????????????????????????",
  "value": "620721" },

{
  "label": "?????????",
  "value": "620722" },

{
  "label": "?????????",
  "value": "620723" },

{
  "label": "?????????",
  "value": "620724" },

{
  "label": "?????????",
  "value": "620725" }],


[{
  "label": "?????????",
  "value": "620802" },

{
  "label": "?????????",
  "value": "620821" },

{
  "label": "?????????",
  "value": "620822" },

{
  "label": "?????????",
  "value": "620823" },

{
  "label": "?????????",
  "value": "620824" },

{
  "label": "?????????",
  "value": "620825" },

{
  "label": "?????????",
  "value": "620826" },

{
  "label": "??????????????????",
  "value": "620871" }],


[{
  "label": "?????????",
  "value": "620902" },

{
  "label": "?????????",
  "value": "620921" },

{
  "label": "?????????",
  "value": "620922" },

{
  "label": "????????????????????????",
  "value": "620923" },

{
  "label": "??????????????????????????????",
  "value": "620924" },

{
  "label": "?????????",
  "value": "620981" },

{
  "label": "?????????",
  "value": "620982" }],


[{
  "label": "?????????",
  "value": "621002" },

{
  "label": "?????????",
  "value": "621021" },

{
  "label": "??????",
  "value": "621022" },

{
  "label": "?????????",
  "value": "621023" },

{
  "label": "?????????",
  "value": "621024" },

{
  "label": "?????????",
  "value": "621025" },

{
  "label": "??????",
  "value": "621026" },

{
  "label": "?????????",
  "value": "621027" }],


[{
  "label": "?????????",
  "value": "621102" },

{
  "label": "?????????",
  "value": "621121" },

{
  "label": "?????????",
  "value": "621122" },

{
  "label": "?????????",
  "value": "621123" },

{
  "label": "?????????",
  "value": "621124" },

{
  "label": "??????",
  "value": "621125" },

{
  "label": "??????",
  "value": "621126" }],


[{
  "label": "?????????",
  "value": "621202" },

{
  "label": "??????",
  "value": "621221" },

{
  "label": "??????",
  "value": "621222" },

{
  "label": "?????????",
  "value": "621223" },

{
  "label": "??????",
  "value": "621224" },

{
  "label": "?????????",
  "value": "621225" },

{
  "label": "??????",
  "value": "621226" },

{
  "label": "??????",
  "value": "621227" },

{
  "label": "?????????",
  "value": "621228" }],


[{
  "label": "?????????",
  "value": "622901" },

{
  "label": "?????????",
  "value": "622921" },

{
  "label": "?????????",
  "value": "622922" },

{
  "label": "?????????",
  "value": "622923" },

{
  "label": "?????????",
  "value": "622924" },

{
  "label": "?????????",
  "value": "622925" },

{
  "label": "??????????????????",
  "value": "622926" },

{
  "label": "?????????????????????????????????????????????",
  "value": "622927" }],


[{
  "label": "?????????",
  "value": "623001" },

{
  "label": "?????????",
  "value": "623021" },

{
  "label": "?????????",
  "value": "623022" },

{
  "label": "?????????",
  "value": "623023" },

{
  "label": "?????????",
  "value": "623024" },

{
  "label": "?????????",
  "value": "623025" },

{
  "label": "?????????",
  "value": "623026" },

{
  "label": "?????????",
  "value": "623027" }]],



[
[{
  "label": "?????????",
  "value": "630102" },

{
  "label": "?????????",
  "value": "630103" },

{
  "label": "?????????",
  "value": "630104" },

{
  "label": "?????????",
  "value": "630105" },

{
  "label": "???????????????????????????",
  "value": "630121" },

{
  "label": "?????????",
  "value": "630122" },

{
  "label": "?????????",
  "value": "630123" }],


[{
  "label": "?????????",
  "value": "630202" },

{
  "label": "?????????",
  "value": "630203" },

{
  "label": "???????????????????????????",
  "value": "630222" },

{
  "label": "?????????????????????",
  "value": "630223" },

{
  "label": "?????????????????????",
  "value": "630224" },

{
  "label": "????????????????????????",
  "value": "630225" }],


[{
  "label": "?????????????????????",
  "value": "632221" },

{
  "label": "?????????",
  "value": "632222" },

{
  "label": "?????????",
  "value": "632223" },

{
  "label": "?????????",
  "value": "632224" }],


[{
  "label": "?????????",
  "value": "632321" },

{
  "label": "?????????",
  "value": "632322" },

{
  "label": "?????????",
  "value": "632323" },

{
  "label": "????????????????????????",
  "value": "632324" }],


[{
  "label": "?????????",
  "value": "632521" },

{
  "label": "?????????",
  "value": "632522" },

{
  "label": "?????????",
  "value": "632523" },

{
  "label": "?????????",
  "value": "632524" },

{
  "label": "?????????",
  "value": "632525" }],


[{
  "label": "?????????",
  "value": "632621" },

{
  "label": "?????????",
  "value": "632622" },

{
  "label": "?????????",
  "value": "632623" },

{
  "label": "?????????",
  "value": "632624" },

{
  "label": "?????????",
  "value": "632625" },

{
  "label": "?????????",
  "value": "632626" }],


[{
  "label": "?????????",
  "value": "632701" },

{
  "label": "?????????",
  "value": "632722" },

{
  "label": "?????????",
  "value": "632723" },

{
  "label": "?????????",
  "value": "632724" },

{
  "label": "?????????",
  "value": "632725" },

{
  "label": "????????????",
  "value": "632726" }],


[{
  "label": "????????????",
  "value": "632801" },

{
  "label": "????????????",
  "value": "632802" },

{
  "label": "?????????",
  "value": "632821" },

{
  "label": "?????????",
  "value": "632822" },

{
  "label": "?????????",
  "value": "632823" },

{
  "label": "????????????????????????",
  "value": "632857" },

{
  "label": "?????????????????????",
  "value": "632858" },

{
  "label": "?????????????????????",
  "value": "632859" }]],



[
[{
  "label": "?????????",
  "value": "640104" },

{
  "label": "?????????",
  "value": "640105" },

{
  "label": "?????????",
  "value": "640106" },

{
  "label": "?????????",
  "value": "640121" },

{
  "label": "?????????",
  "value": "640122" },

{
  "label": "?????????",
  "value": "640181" }],


[{
  "label": "????????????",
  "value": "640202" },

{
  "label": "?????????",
  "value": "640205" },

{
  "label": "?????????",
  "value": "640221" }],


[{
  "label": "?????????",
  "value": "640302" },

{
  "label": "????????????",
  "value": "640303" },

{
  "label": "?????????",
  "value": "640323" },

{
  "label": "?????????",
  "value": "640324" },

{
  "label": "????????????",
  "value": "640381" }],


[{
  "label": "?????????",
  "value": "640402" },

{
  "label": "?????????",
  "value": "640422" },

{
  "label": "?????????",
  "value": "640423" },

{
  "label": "?????????",
  "value": "640424" },

{
  "label": "?????????",
  "value": "640425" }],


[{
  "label": "????????????",
  "value": "640502" },

{
  "label": "?????????",
  "value": "640521" },

{
  "label": "?????????",
  "value": "640522" }]],



[
[{
  "label": "?????????",
  "value": "650102" },

{
  "label": "???????????????",
  "value": "650103" },

{
  "label": "?????????",
  "value": "650104" },

{
  "label": "????????????",
  "value": "650105" },

{
  "label": "????????????",
  "value": "650106" },

{
  "label": "????????????",
  "value": "650107" },

{
  "label": "?????????",
  "value": "650109" },

{
  "label": "???????????????",
  "value": "650121" },

{
  "label": "?????????????????????????????????",
  "value": "650171" },

{
  "label": "???????????????????????????????????????",
  "value": "650172" }],


[{
  "label": "????????????",
  "value": "650202" },

{
  "label": "???????????????",
  "value": "650203" },

{
  "label": "????????????",
  "value": "650204" },

{
  "label": "????????????",
  "value": "650205" }],


[{
  "label": "?????????",
  "value": "650402" },

{
  "label": "?????????",
  "value": "650421" },

{
  "label": "????????????",
  "value": "650422" }],


[{
  "label": "?????????",
  "value": "650502" },

{
  "label": "???????????????????????????",
  "value": "650521" },

{
  "label": "?????????",
  "value": "650522" }],


[{
  "label": "?????????",
  "value": "652301" },

{
  "label": "?????????",
  "value": "652302" },

{
  "label": "????????????",
  "value": "652323" },

{
  "label": "????????????",
  "value": "652324" },

{
  "label": "?????????",
  "value": "652325" },

{
  "label": "???????????????",
  "value": "652327" },

{
  "label": "????????????????????????",
  "value": "652328" }],


[{
  "label": "?????????",
  "value": "652701" },

{
  "label": "???????????????",
  "value": "652702" },

{
  "label": "?????????",
  "value": "652722" },

{
  "label": "?????????",
  "value": "652723" }],


[{
  "label": "????????????",
  "value": "652801" },

{
  "label": "?????????",
  "value": "652822" },

{
  "label": "?????????",
  "value": "652823" },

{
  "label": "?????????",
  "value": "652824" },

{
  "label": "?????????",
  "value": "652825" },

{
  "label": "?????????????????????",
  "value": "652826" },

{
  "label": "?????????",
  "value": "652827" },

{
  "label": "?????????",
  "value": "652828" },

{
  "label": "?????????",
  "value": "652829" },

{
  "label": "??????????????????????????????",
  "value": "652871" }],


[{
  "label": "????????????",
  "value": "652901" },

{
  "label": "?????????",
  "value": "652922" },

{
  "label": "?????????",
  "value": "652923" },

{
  "label": "?????????",
  "value": "652924" },

{
  "label": "?????????",
  "value": "652925" },

{
  "label": "?????????",
  "value": "652926" },

{
  "label": "?????????",
  "value": "652927" },

{
  "label": "????????????",
  "value": "652928" },

{
  "label": "?????????",
  "value": "652929" }],


[{
  "label": "????????????",
  "value": "653001" },

{
  "label": "????????????",
  "value": "653022" },

{
  "label": "????????????",
  "value": "653023" },

{
  "label": "?????????",
  "value": "653024" }],


[{
  "label": "?????????",
  "value": "653101" },

{
  "label": "?????????",
  "value": "653121" },

{
  "label": "?????????",
  "value": "653122" },

{
  "label": "????????????",
  "value": "653123" },

{
  "label": "?????????",
  "value": "653124" },

{
  "label": "?????????",
  "value": "653125" },

{
  "label": "?????????",
  "value": "653126" },

{
  "label": "????????????",
  "value": "653127" },

{
  "label": "????????????",
  "value": "653128" },

{
  "label": "?????????",
  "value": "653129" },

{
  "label": "?????????",
  "value": "653130" },

{
  "label": "?????????????????????????????????",
  "value": "653131" }],


[{
  "label": "?????????",
  "value": "653201" },

{
  "label": "?????????",
  "value": "653221" },

{
  "label": "?????????",
  "value": "653222" },

{
  "label": "?????????",
  "value": "653223" },

{
  "label": "?????????",
  "value": "653224" },

{
  "label": "?????????",
  "value": "653225" },

{
  "label": "?????????",
  "value": "653226" },

{
  "label": "?????????",
  "value": "653227" }],


[{
  "label": "?????????",
  "value": "654002" },

{
  "label": "?????????",
  "value": "654003" },

{
  "label": "???????????????",
  "value": "654004" },

{
  "label": "?????????",
  "value": "654021" },

{
  "label": "???????????????????????????",
  "value": "654022" },

{
  "label": "?????????",
  "value": "654023" },

{
  "label": "?????????",
  "value": "654024" },

{
  "label": "?????????",
  "value": "654025" },

{
  "label": "?????????",
  "value": "654026" },

{
  "label": "????????????",
  "value": "654027" },

{
  "label": "????????????",
  "value": "654028" }],


[{
  "label": "?????????",
  "value": "654201" },

{
  "label": "?????????",
  "value": "654202" },

{
  "label": "?????????",
  "value": "654221" },

{
  "label": "?????????",
  "value": "654223" },

{
  "label": "?????????",
  "value": "654224" },

{
  "label": "?????????",
  "value": "654225" },

{
  "label": "??????????????????????????????",
  "value": "654226" }],


[{
  "label": "????????????",
  "value": "654301" },

{
  "label": "????????????",
  "value": "654321" },

{
  "label": "?????????",
  "value": "654322" },

{
  "label": "?????????",
  "value": "654323" },

{
  "label": "????????????",
  "value": "654324" },

{
  "label": "?????????",
  "value": "654325" },

{
  "label": "????????????",
  "value": "654326" }],


[{
  "label": "????????????",
  "value": "659001" },

{
  "label": "????????????",
  "value": "659002" },

{
  "label": "???????????????",
  "value": "659003" },

{
  "label": "????????????",
  "value": "659004" },

{
  "label": "????????????",
  "value": "659006" }]],



[
[{
  "label": "??????",
  "value": "660101" }],

[{
  "label": "??????",
  "value": "660201" }],

[{
  "label": "??????",
  "value": "660301" }],

[{
  "label": "??????",
  "value": "660401" }],

[{
  "label": "??????",
  "value": "660501" }],

[{
  "label": "??????",
  "value": "660601" }],

[{
  "label": "??????",
  "value": "660701" }],

[{
  "label": "??????",
  "value": "660801" }],

[{
  "label": "??????",
  "value": "660901" }],

[{
  "label": "??????",
  "value": "661001" }],

[{
  "label": "??????",
  "value": "661101" }],

[{
  "label": "??????",
  "value": "661201" }],

[{
  "label": "??????",
  "value": "661301" }],

[{
  "label": "??????",
  "value": "661401" }],

[{
  "label": "??????",
  "value": "661501" }],

[{
  "label": "??????",
  "value": "661601" }],

[{
  "label": "??????",
  "value": "661701" }]],


[
[{
  "label": "?????????",
  "value": "670101" }],

[{
  "label": "??????",
  "value": "670201" }],

[{
  "label": "??????",
  "value": "670301" }]],


[
[{
  "label": "????????????",
  "value": "680101" }],

[{
  "label": "?????????",
  "value": "680201" }],

[{
  "label": "?????????",
  "value": "680301" }],

[{
  "label": "?????????",
  "value": "680401" }]],


[
[{
  "label": "???????????????",
  "value": "690101" }]]];var _default =



areaData;exports.default = _default;

/***/ }),

/***/ 4:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx ????????????????????? plugins ???????????????????????????????????????????????????????????????????????? copyAugment ??????
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // ?????? externalClass ????????????(????????? externalClass ????????????????????????)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx ?????? hack ??? uni-app ???????????? name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou'){//??????????????? observer ??? setData callback ?????????????????????????????? warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field ????????????
            if(
                key === 'value' &&
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    // NOTE ????????? != ????????? !==????????????????????????????????????????????????????????????????????????????????????????????????
                    if (currentValue !== pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_NAME":"usemall.210601","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick ?????? ??? setData ??? setData ??????????????????
    //2.nextTick ???????????? render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"usemall.210601","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"usemall.210601","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // ???????????? vm ?????????????????????
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO ??????????????????????????????????????? list=>l0 ??? list ??????????????????????????????????????????
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //????????? data ???????????????
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"usemall.210601","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']????????????',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js ?????? new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }

  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      (this.$scope['_triggerEvent'] || this.$scope['triggerEvent'])
        .call(this.$scope, event, {
          __args__: toArray(arguments, 1)
        })
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay ???????????? selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // ????????????????????????
    Vue.set(target, key, value)
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // ????????????????????????
    Vue.set(target, key, value)
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO ???????????? string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // ??????????????????????????????????????????
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // ???????????????????????????????????????
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 5:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // ???????????????????????????
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // ???????????????????????????
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // ???????????? watch ??????????????????????????????
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // ??????????????????uni ??? uni-i18n ????????????????????????????????? uni????????? global ????????? getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // ?????????????????????
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // ????????????????????????uni-i18n ??? uni ????????????????????????????????? uni ????????? undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // ??????$vm????????????????????????????????????????????????????????????????????????props???default????????????t()????????????uni-goods-nav????????????app???????????????
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // ???????????????
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // ???????????????
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // ????????????????????????
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}

function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 3)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 6:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 7);

/***/ }),

/***/ 7:
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 8);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 8:
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ 9:
/*!************************************************************!*\
  !*** D:/Code/uniapp/fruitsShop/pages.json?{"type":"stat"} ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__82D6683" };exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map