"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["pagesEdit"],{

/***/ "./assets/admin/js/components/CloneFormElement.js":
/*!********************************************************!*\
  !*** ./assets/admin/js/components/CloneFormElement.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cloneFormElement)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var cloneFormElement = /*#__PURE__*/function () {
  function cloneFormElement(element) {
    _classCallCheck(this, cloneFormElement);
    this.element = element;
    this.init();
  }
  _createClass(cloneFormElement, [{
    key: "init",
    value: function init() {
      var _this = this;
      var checkContainerPromise = new Promise(function (resolve, reject) {
        var result = _this.checkContainer();
        if (result === true) {
          resolve();
        } else {
          reject(result);
        }
      });
      checkContainerPromise.then(function () {
        _this.container = _this.element.querySelector('.clonable-ctn');
        _this.btn = _this.element.querySelector('.clonable-btn');
        _this.listenClonable();
      }, function (error) {
        throw new Error(error);
      });
    }
  }, {
    key: "checkContainer",
    value: function checkContainer() {
      if (!this.element.classList.contains('clonable-lmt')) {
        return "Conteneur incorrect";
      }
      var container = this.element.querySelector('.clonable-ctn');
      if (!container || typeof container.getAttribute('data-prototype') !== "string" || container.getAttribute('data-prototype') === null) {
        return "Prototype de conteneur introuvable";
      }
      var btn = this.element.querySelector('.clonable-btn');
      if (!btn) {
        return "Bouton d'ajout de clone introuvable";
      }
      return true;
    }
  }, {
    key: "listenClonable",
    value: function listenClonable() {
      var _this2 = this;
      this.btn.addEventListener('click', function () {
        var prototype = _this2.container.getAttribute('data-prototype');
        var index = _this2.container.children.length;
        prototype = prototype.replace(/__name__/g, index);
        var newForm = document.createRange().createContextualFragment(prototype);
        var newFormNode = document.importNode(newForm, true);
        _this2.container.appendChild(newFormNode);
      });
    }
  }]);
  return cloneFormElement;
}();


/***/ }),

/***/ "./assets/admin/js/pages/pages_edit.js":
/*!*********************************************!*\
  !*** ./assets/admin/js/pages/pages_edit.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_CloneFormElement_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/CloneFormElement.js */ "./assets/admin/js/components/CloneFormElement.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

__webpack_require__(/*! ../../css/pages/pages_edit.scss */ "./assets/admin/css/pages/pages_edit.scss");
var PageEdit = /*#__PURE__*/function () {
  function PageEdit(container) {
    _classCallCheck(this, PageEdit);
    this.container = container;
    this.init();
  }
  _createClass(PageEdit, [{
    key: "init",
    value: function init() {
      var clonableContainers = this.container.querySelectorAll('.clonable-lmt');
      Object.keys(clonableContainers).forEach(function (key) {
        try {
          new _components_CloneFormElement_js__WEBPACK_IMPORTED_MODULE_16__["default"](clonableContainers[key]);
        } catch (e) {
          console.error(e);
        }
      });
    }
  }]);
  return PageEdit;
}();
new PageEdit(document.querySelector('#admin_page'));

/***/ }),

/***/ "./assets/admin/css/pages/pages_edit.scss":
/*!************************************************!*\
  !*** ./assets/admin/css/pages/pages_edit.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_dat-db952a"], () => (__webpack_exec__("./assets/admin/js/pages/pages_edit.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNFZGl0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLGdCQUFnQjtFQUNqQyxTQUFBQSxpQkFBWUMsT0FBTyxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsZ0JBQUE7SUFDakIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBLE9BQU87SUFFdEIsSUFBSSxDQUFDRSxJQUFJLEVBQUU7RUFDZjtFQUFDQyxZQUFBLENBQUFKLGdCQUFBO0lBQUFLLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFILEtBQUEsRUFBTztNQUFBLElBQUFJLEtBQUE7TUFDSCxJQUFJQyxxQkFBcUIsR0FBRyxJQUFJQyxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7UUFDekQsSUFBTUMsTUFBTSxHQUFHTCxLQUFJLENBQUNNLGNBQWMsRUFBRTtRQUVwQyxJQUFJRCxNQUFNLEtBQUssSUFBSSxFQUFFO1VBQ2pCRixPQUFPLEVBQUU7UUFDYixDQUFDLE1BQU07VUFDSEMsTUFBTSxDQUFDQyxNQUFNLENBQUM7UUFDbEI7TUFDSixDQUFDLENBQUM7TUFFRkoscUJBQXFCLENBQUNNLElBQUksQ0FDdEIsWUFBTTtRQUNGUCxLQUFJLENBQUNRLFNBQVMsR0FBR1IsS0FBSSxDQUFDTixPQUFPLENBQUNlLGFBQWEsQ0FBQyxlQUFlLENBQUM7UUFDNURULEtBQUksQ0FBQ1UsR0FBRyxHQUFTVixLQUFJLENBQUNOLE9BQU8sQ0FBQ2UsYUFBYSxDQUFDLGVBQWUsQ0FBQztRQUU1RFQsS0FBSSxDQUFDVyxjQUFjLEVBQUU7TUFDekIsQ0FBQyxFQUNELFVBQUNDLEtBQUssRUFBSztRQUNQLE1BQU0sSUFBSUMsS0FBSyxDQUFDRCxLQUFLLENBQUM7TUFDMUIsQ0FBQyxDQUNKO0lBQ0w7RUFBQztJQUFBZCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBTyxlQUFBLEVBQWlCO01BQ2IsSUFBSSxDQUFDLElBQUksQ0FBQ1osT0FBTyxDQUFDb0IsU0FBUyxDQUFDQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUU7UUFDbEQsT0FBTyxxQkFBcUI7TUFDaEM7TUFFQSxJQUFNUCxTQUFTLEdBQUcsSUFBSSxDQUFDZCxPQUFPLENBQUNlLGFBQWEsQ0FBQyxlQUFlLENBQUM7TUFDN0QsSUFBSSxDQUFDRCxTQUFTLElBQ1YsT0FBT0EsU0FBUyxDQUFDUSxZQUFZLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxRQUFRLElBQzVEUixTQUFTLENBQUNRLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLElBQUksRUFDbkQ7UUFDRSxPQUFPLG9DQUFvQztNQUMvQztNQUVBLElBQU1OLEdBQUcsR0FBRyxJQUFJLENBQUNoQixPQUFPLENBQUNlLGFBQWEsQ0FBQyxlQUFlLENBQUM7TUFDdkQsSUFBSSxDQUFDQyxHQUFHLEVBQUU7UUFDTixPQUFPLHFDQUFxQztNQUNoRDtNQUVBLE9BQU8sSUFBSTtJQUNmO0VBQUM7SUFBQVosR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQVksZUFBQSxFQUFpQjtNQUFBLElBQUFNLE1BQUE7TUFDYixJQUFJLENBQUNQLEdBQUcsQ0FBQ1EsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07UUFDckMsSUFBSUMsU0FBUyxHQUFHRixNQUFJLENBQUNULFNBQVMsQ0FBQ1EsWUFBWSxDQUFDLGdCQUFnQixDQUFDO1FBQzdELElBQU1JLEtBQUssR0FBS0gsTUFBSSxDQUFDVCxTQUFTLENBQUNhLFFBQVEsQ0FBQ0MsTUFBTTtRQUU5Q0gsU0FBUyxHQUFHQSxTQUFTLENBQUNJLE9BQU8sQ0FBQyxXQUFXLEVBQUVILEtBQUssQ0FBQztRQUNqRCxJQUFNSSxPQUFPLEdBQU9DLFFBQVEsQ0FBQ0MsV0FBVyxFQUFFLENBQUNDLHdCQUF3QixDQUFDUixTQUFTLENBQUM7UUFDOUUsSUFBTVMsV0FBVyxHQUFHSCxRQUFRLENBQUNJLFVBQVUsQ0FBQ0wsT0FBTyxFQUFFLElBQUksQ0FBQztRQUV0RFAsTUFBSSxDQUFDVCxTQUFTLENBQUNzQixXQUFXLENBQUNGLFdBQVcsQ0FBQztNQUMzQyxDQUFDLENBQUM7SUFDTjtFQUFDO0VBQUEsT0FBQW5DLGdCQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRDREO0FBQ2pFd0MsbUJBQU8sQ0FBQyxpRkFBaUMsQ0FBQztBQUFDLElBRXJDQyxRQUFRO0VBQ1YsU0FBQUEsU0FBWTFCLFNBQVMsRUFBRTtJQUFBYixlQUFBLE9BQUF1QyxRQUFBO0lBQ25CLElBQUksQ0FBQzFCLFNBQVMsR0FBR0EsU0FBUztJQUUxQixJQUFJLENBQUNaLElBQUksRUFBRTtFQUNmO0VBQUNDLFlBQUEsQ0FBQXFDLFFBQUE7SUFBQXBDLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFILEtBQUEsRUFBTztNQUNILElBQU11QyxrQkFBa0IsR0FBRyxJQUFJLENBQUMzQixTQUFTLENBQUM0QixnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7TUFFM0VDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDSCxrQkFBa0IsQ0FBQyxDQUFDSSxPQUFPLENBQUMsVUFBQ3pDLEdBQUcsRUFBSztRQUM3QyxJQUFJO1VBQ0EsSUFBSWtDLHdFQUFnQixDQUFDRyxrQkFBa0IsQ0FBQ3JDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxPQUFPMEMsQ0FBQyxFQUFFO1VBQ1JDLE9BQU8sQ0FBQzdCLEtBQUssQ0FBQzRCLENBQUMsQ0FBQztRQUNwQjtNQUNKLENBQUMsQ0FBQztJQUNOO0VBQUM7RUFBQSxPQUFBTixRQUFBO0FBQUE7QUFHTCxJQUFJQSxRQUFRLENBQUNULFFBQVEsQ0FBQ2hCLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUN2Qm5EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FkbWluL2pzL2NvbXBvbmVudHMvQ2xvbmVGb3JtRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4vanMvcGFnZXMvcGFnZXNfZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4vY3NzL3BhZ2VzL3BhZ2VzX2VkaXQuc2Nzcz9mZDQyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIGNsb25lRm9ybUVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBsZXQgY2hlY2tDb250YWluZXJQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5jaGVja0NvbnRhaW5lcigpO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2hlY2tDb250YWluZXJQcm9taXNlLnRoZW4oXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNsb25hYmxlLWN0bicpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuICAgICAgID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9uYWJsZS1idG4nKTtcblxuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuQ2xvbmFibGUoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNoZWNrQ29udGFpbmVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb25hYmxlLWxtdCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJDb250ZW5ldXIgaW5jb3JyZWN0XCI7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNsb25hYmxlLWN0bicpO1xuICAgICAgICBpZiAoIWNvbnRhaW5lciB8fCBcbiAgICAgICAgICAgIHR5cGVvZiBjb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXByb3RvdHlwZScpICE9PSBcInN0cmluZ1wiIHx8XG4gICAgICAgICAgICBjb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXByb3RvdHlwZScpID09PSBudWxsXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIFwiUHJvdG90eXBlIGRlIGNvbnRlbmV1ciBpbnRyb3V2YWJsZVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYnRuID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9uYWJsZS1idG4nKTtcbiAgICAgICAgaWYgKCFidG4pIHtcbiAgICAgICAgICAgIHJldHVybiBcIkJvdXRvbiBkJ2Fqb3V0IGRlIGNsb25lIGludHJvdXZhYmxlXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBsaXN0ZW5DbG9uYWJsZSgpIHtcbiAgICAgICAgdGhpcy5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcHJvdG90eXBlID0gdGhpcy5jb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXByb3RvdHlwZScpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggICA9IHRoaXMuY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aDtcblxuICAgICAgICAgICAgcHJvdG90eXBlID0gcHJvdG90eXBlLnJlcGxhY2UoL19fbmFtZV9fL2csIGluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0Zvcm0gICAgID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQocHJvdG90eXBlKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0Zvcm1Ob2RlID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShuZXdGb3JtLCB0cnVlKTtcblxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Rm9ybU5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IENsb25lRm9ybUVsZW1lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2xvbmVGb3JtRWxlbWVudC5qc1wiO1xyXG5yZXF1aXJlKCcuLi8uLi9jc3MvcGFnZXMvcGFnZXNfZWRpdC5zY3NzJyk7XHJcblxyXG5jbGFzcyBQYWdlRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBjb25zdCBjbG9uYWJsZUNvbnRhaW5lcnMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvbmFibGUtbG10Jyk7XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKGNsb25hYmxlQ29udGFpbmVycykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBuZXcgQ2xvbmVGb3JtRWxlbWVudChjbG9uYWJsZUNvbnRhaW5lcnNba2V5XSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxubmV3IFBhZ2VFZGl0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZG1pbl9wYWdlJykpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJjbG9uZUZvcm1FbGVtZW50IiwiZWxlbWVudCIsIl9jbGFzc0NhbGxDaGVjayIsImluaXQiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl90aGlzIiwiY2hlY2tDb250YWluZXJQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXN1bHQiLCJjaGVja0NvbnRhaW5lciIsInRoZW4iLCJjb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiYnRuIiwibGlzdGVuQ2xvbmFibGUiLCJlcnJvciIsIkVycm9yIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJnZXRBdHRyaWJ1dGUiLCJfdGhpczIiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvdG90eXBlIiwiaW5kZXgiLCJjaGlsZHJlbiIsImxlbmd0aCIsInJlcGxhY2UiLCJuZXdGb3JtIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsImNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCIsIm5ld0Zvcm1Ob2RlIiwiaW1wb3J0Tm9kZSIsImFwcGVuZENoaWxkIiwiZGVmYXVsdCIsIkNsb25lRm9ybUVsZW1lbnQiLCJyZXF1aXJlIiwiUGFnZUVkaXQiLCJjbG9uYWJsZUNvbnRhaW5lcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJlIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=