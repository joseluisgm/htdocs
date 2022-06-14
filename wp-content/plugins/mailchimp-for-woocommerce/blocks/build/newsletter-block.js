(window["webpackJsonp_woocommerce_mailchimp_newsletter"] = window["webpackJsonp_woocommerce_mailchimp_newsletter"] || []).push([["style-newsletter-block"],{

/***/ "./assets/js/checkout-newsletter-subscription-block/style.scss":
/*!*********************************************************************!*\
  !*** ./assets/js/checkout-newsletter-subscription-block/style.scss ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"newsletter-block": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp_woocommerce_mailchimp_newsletter"] = window["webpackJsonp_woocommerce_mailchimp_newsletter"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./assets/js/checkout-newsletter-subscription-block/index.js","style-newsletter-block"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
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

/***/ "./assets/js/checkout-newsletter-subscription-block/block.json":
/*!*********************************************************************!*\
  !*** ./assets/js/checkout-newsletter-subscription-block/block.json ***!
  \*********************************************************************/
/*! exports provided: apiVersion, name, version, title, category, description, supports, parent, attributes, textdomain, editorStyle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"woocommerce/mailchimp-newsletter-subscription\",\"version\":\"1.0.0\",\"title\":\"Mailchimp Newsletter!\",\"category\":\"woocommerce\",\"description\":\"Adds a newsletter subscription checkbox to the checkout.\",\"supports\":{\"html\":true,\"align\":false,\"multiple\":false,\"reusable\":false},\"parent\":[\"woocommerce/checkout-contact-information-block\"],\"attributes\":{\"lock\":{\"type\":\"object\",\"default\":{\"remove\":true,\"move\":true}}},\"textdomain\":\"mailchimp-woocommerce\",\"editorStyle\":\"file:../../../build/style-newsletter-block.css\"}");

/***/ }),

/***/ "./assets/js/checkout-newsletter-subscription-block/edit.js":
/*!******************************************************************!*\
  !*** ./assets/js/checkout-newsletter-subscription-block/edit.js ***!
  \******************************************************************/
/*! exports provided: Edit, Save */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edit", function() { return Edit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Save", function() { return Save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @woocommerce/blocks-checkout */ "@woocommerce/blocks-checkout");
/* harmony import */ var _woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./assets/js/checkout-newsletter-subscription-block/style.scss");


/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


const Edit = ({
  attributes,
  setAttributes
}) => {
  const {
    text,
    gdprHeadline,
    gdpr
  } = attributes;
  const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])();
  console.log('edit', {
    text: text,
    gdprHeadline: gdprHeadline,
    gdpr: gdpr
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Block options', 'mailchimp-for-woocommerce')
  }, "Options for the block go here.")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      display: 'flex'
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_4__["CheckboxControl"], {
    id: "newsletter-text",
    checked: false,
    disabled: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    value: text,
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Set the newsletter confirmation text.', 'mailchimp-for-woocommerce'),
    onChange: value => setAttributes({
      text: value
    })
  })), gdpr && gdpr.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      display: 'flex',
      marginTop: '2rem'
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    value: gdprHeadline,
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Set the GDPR headline.', 'mailchimp-for-woocommerce'),
    onChange: value => setAttributes({
      gdprHeadline: value
    })
  })), gdpr.map((gdprItem, index) => {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        display: 'flex',
        marginTop: '1rem'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_4__["CheckboxControl"], {
      id: 'gdpr_' + gdprItem.marketing_permission_id,
      checked: gdpr[index].enabled,
      onChange: () => {
        gdpr[index].enabled = !gdpr[index].enabled;
        setAttributes({
          gdpr: gdpr
        });
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      dangerouslySetInnerHTML: {
        __html: gdprItem.text
      }
    })));
  })));
}; // not sure

const Save = () => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"].save());
};

/***/ }),

/***/ "./assets/js/checkout-newsletter-subscription-block/index.js":
/*!*******************************************************************!*\
  !*** ./assets/js/checkout-newsletter-subscription-block/index.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./assets/js/checkout-newsletter-subscription-block/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./assets/js/checkout-newsletter-subscription-block/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./assets/js/checkout-newsletter-subscription-block/block.json", 1);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./assets/js/checkout-newsletter-subscription-block/attributes.js");


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */




console.log('index.js', {
  metadata: _block_json__WEBPACK_IMPORTED_MODULE_4__,
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"]
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])(_block_json__WEBPACK_IMPORTED_MODULE_4__, {
  icon: {
    src: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
      xmlns: "http://www.w3.org/2000/svg",
      width: "60",
      height: "60",
      viewBox: "0 0 46 49",
      fill: "none"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M34.5458 23.5193C34.8988 23.4778 35.2361 23.4759 35.5457 23.5193C35.7252 23.107 35.7568 22.397 35.5951 21.6239C35.3544 20.4741 35.029 19.7778 34.3584 19.8863C33.6859 19.9948 33.6622 20.8271 33.9028 21.9769C34.037 22.6238 34.2776 23.1761 34.5458 23.5193Z",
      fill: "black"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M28.7763 24.4284C29.2575 24.6394 29.5534 24.7795 29.6678 24.6572C29.7427 24.5803 29.719 24.4363 29.6046 24.2489C29.368 23.8624 28.8788 23.4679 28.3621 23.249C27.303 22.7934 26.0407 22.9453 25.0664 23.6454C24.745 23.8801 24.4393 24.2075 24.4826 24.4047C24.4965 24.4698 24.5458 24.5172 24.6582 24.5329C24.9225 24.5625 25.8494 24.0951 26.9164 24.03C27.6718 23.9827 28.295 24.2174 28.7763 24.4284Z",
      fill: "black"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M27.8105 24.9806C27.1852 25.0793 26.8381 25.2863 26.6172 25.4777C26.4279 25.6433 26.3115 25.8267 26.3115 25.9549C26.3115 26.0161 26.3391 26.0516 26.3589 26.0693C26.3865 26.095 26.422 26.1088 26.4614 26.1088C26.6034 26.1088 26.919 25.9826 26.919 25.9826C27.7907 25.6709 28.3647 25.7084 28.9346 25.7735C29.2502 25.809 29.3981 25.8287 29.4672 25.7202C29.4869 25.6887 29.5125 25.6216 29.4494 25.521C29.3054 25.2804 28.6723 24.8781 27.8105 24.9806Z",
      fill: "black"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M32.5975 27.0061C33.0235 27.2152 33.4909 27.1324 33.6428 26.8227C33.7946 26.5131 33.5737 26.093 33.1497 25.8839C32.7237 25.6749 32.2563 25.7577 32.1044 26.0673C31.9506 26.377 32.1734 26.7971 32.5975 27.0061Z",
      fill: "black"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M35.3306 24.6177C34.9854 24.6118 34.6995 24.9905 34.6916 25.4638C34.6837 25.9372 34.9578 26.3257 35.303 26.3317C35.6481 26.3376 35.9341 25.9589 35.942 25.4855C35.9499 25.0122 35.6757 24.6237 35.3306 24.6177Z",
      fill: "black"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M12.1324 33.1577C12.0456 33.0492 11.9056 33.0827 11.7695 33.1143C11.6749 33.136 11.5664 33.1616 11.448 33.1596C11.1936 33.1557 10.9786 33.0452 10.8583 32.8598C10.7006 32.6192 10.7104 32.2583 10.884 31.8461C10.9076 31.7909 10.9353 31.7297 10.9648 31.6607C11.241 31.0394 11.7064 30 11.1857 29.008C10.7932 28.2625 10.1542 27.797 9.38702 27.7004C8.64939 27.6077 7.89006 27.8798 7.40685 28.4143C6.64358 29.2565 6.52328 30.4044 6.6712 30.8087C6.72445 30.9566 6.80925 30.998 6.87237 31.0059C7.00254 31.0237 7.19385 30.929 7.31416 30.6055C7.32205 30.5819 7.33388 30.5464 7.34769 30.501C7.40094 30.3294 7.50152 30.0099 7.66522 29.7555C7.86245 29.4478 8.17012 29.2348 8.53105 29.1579C8.89789 29.079 9.2746 29.15 9.58819 29.3551C10.1227 29.7062 10.3298 30.361 10.101 30.9862C9.98264 31.3096 9.79133 31.9289 9.83275 32.4378C9.91756 33.4673 10.5507 33.8795 11.1206 33.9249C11.6729 33.9466 12.0594 33.6349 12.1581 33.4081C12.2133 33.274 12.164 33.1932 12.1324 33.1577Z",
      fill: "black"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M44.044 31.2761C44.0223 31.2012 43.8862 30.7002 43.6969 30.0967C43.5075 29.4932 43.3142 29.0672 43.3142 29.0672C44.0696 27.9351 44.0834 26.9233 43.9828 26.3514C43.8763 25.6414 43.5805 25.0359 42.9829 24.4107C42.3873 23.7854 41.1684 23.1445 39.4545 22.6632C39.2593 22.608 38.6123 22.4305 38.5551 22.4127C38.5512 22.3753 38.5078 20.2945 38.4684 19.3991C38.4408 18.7522 38.3836 17.7444 38.0719 16.7504C37.6992 15.4053 37.0483 14.2298 36.2377 13.4764C38.4763 11.157 39.8726 8.60091 39.8707 6.40774C39.8647 2.19102 34.6855 0.914962 28.3033 3.55781C28.2974 3.55978 26.9602 4.1278 26.9503 4.13174C26.9444 4.12582 24.5066 1.73346 24.4692 1.7019C17.1954 -4.64488 -5.55475 20.6436 1.71899 26.7853L3.30864 28.1323C2.89644 29.2013 2.73471 30.4241 2.86685 31.7396C3.03647 33.4299 3.90822 35.0511 5.32234 36.3015C6.66348 37.4908 8.42669 38.2422 10.1386 38.2402C12.9688 44.7626 19.4359 48.7643 27.0193 48.9891C35.153 49.2317 41.981 45.4134 44.8428 38.5578C45.0301 38.0765 45.825 35.909 45.825 33.9939C45.825 32.0729 44.7382 31.2761 44.044 31.2761ZM10.7638 36.41C10.5173 36.4514 10.2649 36.4691 10.0104 36.4632C7.55298 36.3981 4.90027 34.1852 4.63598 31.5621C4.34409 28.6629 5.82527 26.4322 8.44839 25.9017C8.76198 25.8386 9.14066 25.8011 9.54892 25.8228C11.0183 25.9037 13.1838 27.0318 13.6789 30.2328C14.1187 33.0689 13.4225 35.9564 10.7638 36.41ZM8.02041 24.1681C6.38736 24.4856 4.9476 25.4106 4.06797 26.6886C3.54137 26.2508 2.56115 25.4007 2.38956 25.0694C0.985306 22.4009 3.92202 17.2138 5.97516 14.285C11.0478 7.04676 18.9922 1.56581 22.6705 2.55984C23.2681 2.72945 25.2482 5.02518 25.2482 5.02518C25.2482 5.02518 21.5719 7.06451 18.1618 9.90853C13.5704 13.4468 10.0992 18.5885 8.02041 24.1681ZM33.8079 35.3252C33.8611 35.3035 33.8986 35.2424 33.8927 35.1812C33.8848 35.1063 33.8177 35.0531 33.7448 35.0609C33.7448 35.0609 29.8969 35.6309 26.26 34.2996C26.6564 33.0117 27.7096 33.4772 29.3012 33.6054C32.1709 33.777 34.7408 33.3569 36.642 32.8125C38.2889 32.3392 40.4505 31.4083 42.1309 30.0829C42.6969 31.3274 42.8981 32.6962 42.8981 32.6962C42.8981 32.6962 43.3359 32.6173 43.7028 32.8441C44.0499 33.0571 44.3024 33.5009 44.1288 34.6448C43.7758 36.7847 42.8665 38.5223 41.338 40.1198C40.4071 41.1217 39.277 41.9935 37.9852 42.6266C37.2988 42.9875 36.5671 43.2991 35.7959 43.5516C30.033 45.4331 24.1339 43.3642 22.2326 38.9207C22.0807 38.5874 21.9525 38.2363 21.852 37.8714C21.0414 34.9426 21.7297 31.43 23.8795 29.2171C23.8795 29.2171 23.8795 29.2171 23.8795 29.2151C24.0116 29.0751 24.1477 28.9094 24.1477 28.7004C24.1477 28.5248 24.0372 28.3414 23.9406 28.2112C23.1892 27.1206 20.5818 25.2607 21.1045 21.6613C21.4792 19.0757 23.7414 17.2553 25.8498 17.3637C26.0273 17.3736 26.2067 17.3834 26.3842 17.3953C27.2974 17.4485 28.0942 17.5669 28.8476 17.5984C30.1059 17.6537 31.238 17.4702 32.5792 16.3519C33.0308 15.9752 33.3937 15.6478 34.0071 15.5453C34.0722 15.5335 34.2319 15.4763 34.5534 15.492C34.8808 15.5098 35.1924 15.5985 35.4725 15.7859C36.5474 16.5018 36.6992 18.2335 36.7545 19.4997C36.786 20.2235 36.8728 21.9729 36.9044 22.4759C36.9734 23.6237 37.2751 23.7874 37.8846 23.9886C38.2278 24.101 38.5473 24.1858 39.0167 24.318C40.4387 24.7183 41.2828 25.1227 41.8153 25.6433C42.1329 25.9688 42.2808 26.3139 42.3261 26.6433C42.4938 27.8661 41.3755 29.3788 38.4171 30.7515C35.1826 32.2524 31.2577 32.6331 28.5459 32.3313C28.3388 32.3076 27.5992 32.2248 27.5952 32.2248C25.4257 31.9329 24.1891 34.7355 25.4908 36.6565C26.329 37.8951 28.6149 38.6998 30.9008 38.6998C36.1431 38.6998 40.1724 36.4613 41.6713 34.5284C41.7167 34.4712 41.7206 34.4633 41.7916 34.3568C41.8646 34.2464 41.8055 34.1852 41.7128 34.2464C40.488 35.0846 35.0484 38.4099 29.2322 37.4099C29.2322 37.4099 28.5261 37.2936 27.8792 37.0431C27.3664 36.8439 26.2935 36.3508 26.1634 35.2483C30.8514 36.6979 33.8079 35.3252 33.8079 35.3252ZM26.3704 34.4476C26.3704 34.4476 26.3724 34.4476 26.3704 34.4476C26.3724 34.4495 26.3724 34.4495 26.3724 34.4515C26.3724 34.4495 26.3724 34.4476 26.3704 34.4476ZM17.3887 14.2554C19.1914 12.1707 21.4121 10.3602 23.4002 9.34249C23.4692 9.30699 23.5422 9.38193 23.5047 9.44899C23.3469 9.73497 23.0432 10.3464 22.9466 10.8118C22.9308 10.8848 23.0097 10.9381 23.0708 10.8966C24.3074 10.0525 26.4612 9.14921 28.3486 9.03284C28.4295 9.02693 28.4689 9.13146 28.4039 9.18076C28.1159 9.40166 27.8023 9.70539 27.5735 10.0131C27.5341 10.0663 27.5716 10.1413 27.6366 10.1413C28.962 10.1511 30.8317 10.6146 32.0486 11.297C32.1315 11.3424 32.0723 11.5021 31.9796 11.4824C30.1375 11.0603 27.1199 10.7389 23.986 11.5041C21.1893 12.1865 19.0533 13.2397 17.4952 14.3738C17.4203 14.4329 17.3256 14.3304 17.3887 14.2554Z",
      fill: "black"
    })),
    foreground: '#874FB9'
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["Edit"],
  save: _edit__WEBPACK_IMPORTED_MODULE_3__["Save"],
  attributes: { ..._block_json__WEBPACK_IMPORTED_MODULE_4__.attributes,
    ..._attributes__WEBPACK_IMPORTED_MODULE_5__["default"]
  }
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

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=newsletter-block.js.map