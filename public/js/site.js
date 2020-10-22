/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/css/tailwind.css":
/*!************************************!*\
  !*** ./resources/css/tailwind.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/js/action-status.js":
/*!***************************************!*\
  !*** ./resources/js/action-status.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ActionStatus = /*#__PURE__*/function () {
  function ActionStatus() {
    var icon = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, ActionStatus);

    this._in_progress = false;
    this._color = '';
    this._icon = icon;
    this._resetIcon = icon;
  }

  _createClass(ActionStatus, [{
    key: "start",
    value: function start() {
      this._in_progress = true;
    }
  }, {
    key: "success",
    value: function success() {
      this._in_progress = false;
      this._color = 'bg-success text-black';
      this._icon = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'; // this.reset();
    }
  }, {
    key: "fail",
    value: function fail() {
      this._in_progress = false;
      this._color = 'bg-fail text-black';
      this._icon = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
      this.reset();
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this = this;

      setTimeout(function () {
        _this._icon = _this._resetIcon;
        _this._color = '';
      }, 4000);
    }
  }, {
    key: "in_progress",
    get: function get() {
      return this._in_progress;
    }
  }, {
    key: "color",
    get: function get() {
      return this._color;
    }
  }, {
    key: "icon",
    get: function get() {
      return this._icon;
    }
  }]);

  return ActionStatus;
}();

/* harmony default export */ __webpack_exports__["default"] = (ActionStatus);

/***/ }),

/***/ "./resources/js/site.js":
/*!******************************!*\
  !*** ./resources/js/site.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-status */ "./resources/js/action-status.js");

Vue.component('spinner', {
  template: '<svg class="spinner animate-spin w-6 h-6" stroke="currentColor" viewBox="0 0 20 20"><g transform="translate(1.9,1.9)" fill-rule="evenodd" fill="none"><g stroke-width="2" transform="translate(1,1)"><ellipse ry="8.6124411" rx="8.6124392" style="stroke-width:2.77512;stroke-miterlimit:4;stroke-dasharray:none" cy="7.1" cx="7.1" stroke-opacity="0.5" /><path style="stroke-width:2.77512;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none"d="m 15.712439,7.1000019 c 0,-4.7559816 -3.856458,-8.6124415 -8.6124391,-8.6124415"/></g></g></svg>'
});
var app = new Vue({
  el: '#contactForm',
  data: function data() {
    return {
      emailRegExp: /^\S+@\S+$/,
      name: '',
      email: {
        value: '',
        valid: true
      },
      message: {
        text: '',
        maxlength: 1000
      },
      sendStatus: new _action_status__WEBPACK_IMPORTED_MODULE_0__["default"](),
      canSend: true
    };
  },
  methods: {
    validateEmail: function validateEmail(email) {
      this.email.valid = this.emailRegExp.test(String(this.email.value).toLowerCase());
      console.log(this.email.value, this.email.valid);
    },
    sendData: function sendData() {
      if (this.email.valid) {
        this.canSend = false;
        this.sendStatus.start();
        var params = {
          user_name: this.name,
          user_email: this.email.value,
          user_message: this.message.text
        };
        emailjs.send('bom_service', 'template_VJrTe0zf', params).then(function (response) {
          this.sendStatus.success();
        }.bind(this), function (error) {
          this.sendStatus.fail();
          this.canSend = true;
        }.bind(this));
      }
    }
  }
});

/***/ }),

/***/ 0:
/*!*****************************************************************!*\
  !*** multi ./resources/js/site.js ./resources/css/tailwind.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/declan/Sites/bridomeara/resources/js/site.js */"./resources/js/site.js");
module.exports = __webpack_require__(/*! /Users/declan/Sites/bridomeara/resources/css/tailwind.css */"./resources/css/tailwind.css");


/***/ })

/******/ });