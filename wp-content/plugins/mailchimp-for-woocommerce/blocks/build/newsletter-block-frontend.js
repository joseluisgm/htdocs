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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/checkout-newsletter-subscription-block/frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/checkout-newsletter-subscription-block/attributes.js":
/*!************************************************************************!*\
  !*** ./assets/js/checkout-newsletter-subscription-block/attributes.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @woocommerce/settings */ "@woocommerce/settings");
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

const {
  optinDefaultText,
  gdprHeadline,
  gdprFields
} = Object(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__["getSetting"])('mailchimp-newsletter_data', '');
/* harmony default export */ __webpack_exports__["default"] = ({
  text: {
    type: 'string',
    default: optinDefaultText
  },
  gdprHeadline: {
    type: 'string',
    default: gdprHeadline
  },
  gdpr: {
    type: 'array',
    default: gdprFields
  }
});

/***/ }),

/***/ "./assets/js/checkout-newsletter-subscription-block/block.js":
/*!*******************************************************************!*\
  !*** ./assets/js/checkout-newsletter-subscription-block/block.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @woocommerce/blocks-checkout */ "@woocommerce/blocks-checkout");
/* harmony import */ var _woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies
 */



const Block = ({
  cart,
  extensions,
  text,
  checkoutExtensionData
}) => {
  const [checked, setChecked] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    setExtensionData
  } = checkoutExtensionData;
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setExtensionData('mailchimp-newsletter', 'optin', checked);
  }, [checked, setExtensionData]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_1__["CheckboxControl"], {
    id: "subscribe-to-newsletter",
    checked: checked,
    onChange: setChecked
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    dangerouslySetInnerHTML: {
      __html: text
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Block);

/***/ }),

/***/ "./assets/js/checkout-newsletter-subscription-block/block.json":
/*!*********************************************************************!*\
  !*** ./assets/js/checkout-newsletter-subscription-block/block.json ***!
  \*********************************************************************/
/*! exports provided: apiVersion, name, version, title, category, description, supports, parent, attributes, textdomain, editorStyle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"woocommerce/mailchimp-newsletter-subscription\",\"version\":\"1.0.0\",\"title\":\"Mailchimp Newsletter!\",\"category\":\"woocommerce\",\"description\":\"Adds a newsletter subscription checkbox to the checkout.\",\"supports\":{\"html\":true,\"align\":false,\"multiple\":false,\"reusable\":false},\"parent\":[\"woocommerce/checkout-contact-information-block\"],\"attributes\":{\"lock\":{\"type\":\"object\",\"default\":{\"remove\":true,\"move\":true}}},\"textdomain\":\"mailchimp-woocommerce\",\"editorStyle\":\"file:../../../build/style-newsletter-block.css\"}");

/***/ }),

/***/ "./assets/js/checkout-newsletter-subscription-block/frontend.js":
/*!**********************************************************************!*\
  !*** ./assets/js/checkout-newsletter-subscription-block/frontend.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @woocommerce/blocks-checkout */ "@woocommerce/blocks-checkout");
/* harmony import */ var _woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _woocommerce_shared_hocs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @woocommerce/shared-hocs */ "@woocommerce/shared-hocs");
/* harmony import */ var _woocommerce_shared_hocs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_shared_hocs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block */ "./assets/js/checkout-newsletter-subscription-block/block.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./assets/js/checkout-newsletter-subscription-block/attributes.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./assets/js/checkout-newsletter-subscription-block/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./assets/js/checkout-newsletter-subscription-block/block.json", 1);
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */




Object(_woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_0__["registerCheckoutBlock"])({
  metadata: _block_json__WEBPACK_IMPORTED_MODULE_4__,
  component: Object(_woocommerce_shared_hocs__WEBPACK_IMPORTED_MODULE_1__["withFilteredAttributes"])(_attributes__WEBPACK_IMPORTED_MODULE_3__["default"])(_block__WEBPACK_IMPORTED_MODULE_2__["default"])
});

/***/ }),

/***/ "@woocommerce/blocks-checkout":
/*!****************************************!*\
  !*** external ["wc","blocksCheckout"] ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wc"]["blocksCheckout"]; }());

/***/ }),

/***/ "@woocommerce/settings":
/*!************************************!*\
  !*** external ["wc","wcSettings"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wc"]["wcSettings"]; }());

/***/ }),

/***/ "@woocommerce/shared-hocs":
/*!********************************************!*\
  !*** external ["wc","wcBlocksSharedHocs"] ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wc"]["wcBlocksSharedHocs"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=newsletter-block-frontend.js.map