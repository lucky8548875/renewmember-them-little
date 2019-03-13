webpackHotUpdate("about",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/faqs-machine.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/faqs-machine.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ \"./node_modules/core-js/modules/es7.array.includes.js\");\n/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ \"./node_modules/core-js/modules/es6.string.includes.js\");\n/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__);\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: [\"content\"],\n  data: function data() {\n    return {\n      faqs: this.content,\n      filteredFaqs: this.content,\n      visibles: {},\n      query: \"\"\n    };\n  },\n  beforeMount: function beforeMount() {\n    var obj = {};\n\n    for (var i = 0; i < this.faqs.length; i++) {\n      obj[i] = false;\n    }\n\n    this.visibles = obj;\n  },\n  watch: {\n    query: function query() {\n      this.filterFAQs();\n    }\n  },\n  methods: {\n    toggleFAQ: function toggleFAQ(index) {\n      this.visibles[index] = !this.visibles[index];\n      console.log(this.visibles[index]);\n    },\n    filterFAQs: function filterFAQs() {\n      this.filteredFaqs = this.faqs.filter(this.checkIfIncludes);\n    },\n    checkIfIncludes: function checkIfIncludes(faq) {\n      return faq.question.includes(this.query) || faq.answer.includes(this.query);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvZmFxcy1tYWNoaW5lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZmFxcy1tYWNoaW5lLnZ1ZT9mNDMwIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cImZhcXMtbWFjaGluZS1jb250YWluZXJcIiAgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAycmVtXCI+XG5cdFx0PGNlbnRlcj5cblx0XHRcdDxpbnB1dFxuXHRcdFx0XHRjbGFzcz1cImZhcXMtc2VhcmNoXCJcblx0XHRcdFx0dHlwZT1cInNlYXJjaFwiXG5cdFx0XHRcdHBsYWNlaG9sZGVyPVwiRW50ZXIgdGV4dCB0byBzZWFyY2ggZm9yIHF1ZXN0aW9uLi4uXCJcblx0XHRcdFx0di1tb2RlbD1cInF1ZXJ5XCJcblx0XHRcdFx0c3R5bGU9XCJib3JkZXI6IDAgIWltcG9ydGFudDsgYm94LXNoYWRvdzogMHB4IDEwcHggMTVweCByZ2JhKDAsMCwwLDAuMSkgIWltcG9ydGFudDsgcGFkZGluZzogMS41cmVtICFpbXBvcnRhbnRcIlxuXHRcdFx0PlxuXHRcdFx0PHVsIGNsYXNzPVwiZmFxcy1saXN0XCIgc3R5bGU9XCJib3gtc2hhZG93OiAwcHggMTBweCAxNXB4IHJnYmEoMCwwLDAsMC4xKSAhaW1wb3J0YW50OyBib3JkZXItcmFkaXVzOiAxLjVyZW07IG92ZXJmbG93OiBoaWRkZW47XCI+XG5cdFx0XHRcdDxsaSBjbGFzcz1cImZhcXMtaXRlbVwiIHYtZm9yPVwiKGZhcSwgaW5kZXgpIGluIGZpbHRlcmVkRmFxc1wiIHYtYmluZDprZXk9XCJpbmRleFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmYXFzLXF1ZXN0aW9uXCIgdi1vbjpjbGljaz1cInRvZ2dsZUZBUShpbmRleClcIj57e2ZhcS5xdWVzdGlvbn19PC9kaXY+XG5cdFx0XHRcdFx0PHRyYW5zaXRpb24gbmFtZT1cInNsaWRlLXZlcnRpY2FsXCIgdGFnPVwicFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZhcXMtYW5zd2VyXCIgdi1zaG93PVwidmlzaWJsZXNbaW5kZXhdXCI+e3tmYXEuYW5zd2VyfX08L2Rpdj5cblx0XHRcdFx0XHQ8L3RyYW5zaXRpb24+XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHQ8L3VsPlxuXHRcdDwvY2VudGVyPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBsYW5nPVwic2Fzc1wiIHNjb3BlZD5cblxuLmZhcXMtbWFjaGluZS1jb250YWluZXJcblxuICAuZmFxcy1zZWFyY2ggXG4gICAgbWF4LXdpZHRoOiA2MDBweFxuICAgIGhlaWdodDogNDBweFxuICAgIG1hcmdpbi1ib3R0b206IDFlbVxuICAgIHdpZHRoOiAxMDAlXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcbiAgICBib3JkZXItcmFkaXVzOiAycmVtXG4gICAgICBcbiAgLmZhcXMtbGlzdFxuICAgIHdpZHRoOiAxMDAlXG4gICAgZGlzcGxheTogZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmVcbiAgICBtYXgtd2lkdGg6IDYwMHB4XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldydcblx0XHRtYXJnaW46IDByZW0gMXJlbVxuXG5cdFx0LmZhcXMtaXRlbVxuXG4gICAgICAuZmFxcy1xdWVzdGlvbiBcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWVcbiAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgaGVpZ2h0OiBhdXRvXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtXG4gICAgICAgIGNvbG9yOiAjZmZmXG5cbiAgICAgIC5mYXFzLWFuc3dlciBcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlXG4gICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgIGhlaWdodDogYXV0b1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDQwcHggMTBweCA4cHhcbiAgXG4gICAgICAuc2xpZGUtdmVydGljYWwtZW50ZXItYWN0aXZlLmZhcXMtYW5zd2VyLCAuc2xpZGUtdmVydGljYWwtbGVhdmUtYWN0aXZlLmZhcXMtYW5zd2VyIFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0XG4gICAgICAgIG9wYWNpdHk6IDEwMFxuICAgICAgICBoZWlnaHQ6IDYwcHggICBcbiAgICAgIFxuICAgICAgLnNsaWRlLXZlcnRpY2FsLWVudGVyLmZhcXMtYW5zd2VyLCAuc2xpZGUtdmVydGljYWwtbGVhdmUtdG8uZmFxcy1hbnN3ZXIgXG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgaGVpZ2h0OiAwcHhcbjwvc3R5bGU+XG5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcblx0cHJvcHM6IFtcImNvbnRlbnRcIl0sXG5cdGRhdGE6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRmYXFzOiB0aGlzLmNvbnRlbnQsXG5cdFx0XHRmaWx0ZXJlZEZhcXM6IHRoaXMuY29udGVudCxcblx0XHRcdHZpc2libGVzOiB7fSxcblx0XHRcdHF1ZXJ5OiBcIlwiXG5cdFx0fTtcblx0fSxcblx0YmVmb3JlTW91bnQ6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBvYmogPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZmFxcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0b2JqW2ldID0gZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMudmlzaWJsZXMgPSBvYmo7XG5cdH0sXG5cdHdhdGNoOiB7XG5cdFx0cXVlcnk6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5maWx0ZXJGQVFzKCk7XG5cdFx0fVxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0dG9nZ2xlRkFROiBmdW5jdGlvbihpbmRleCkge1xuXHRcdFx0dGhpcy52aXNpYmxlc1tpbmRleF0gPSAhdGhpcy52aXNpYmxlc1tpbmRleF07XG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLnZpc2libGVzW2luZGV4XSk7XG5cdFx0fSxcblx0XHRmaWx0ZXJGQVFzOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuZmlsdGVyZWRGYXFzID0gdGhpcy5mYXFzLmZpbHRlcih0aGlzLmNoZWNrSWZJbmNsdWRlcyk7XG5cdFx0fSxcblx0XHRjaGVja0lmSW5jbHVkZXM6IGZ1bmN0aW9uKGZhcSkge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0ZmFxLnF1ZXN0aW9uLmluY2x1ZGVzKHRoaXMucXVlcnkpIHx8IGZhcS5hbnN3ZXIuaW5jbHVkZXModGhpcy5xdWVyeSlcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG59O1xuPC9zY3JpcHQ+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFaQTtBQXRCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/faqs-machine.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"c93332d6-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/faqs-machine.vue?vue&type=template&id=c9ae81b2&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c93332d6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/faqs-machine.vue?vue&type=template&id=c9ae81b2&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      staticClass: \"faqs-machine-container\",\n      staticStyle: { \"margin-bottom\": \"2rem\" }\n    },\n    [\n      _c(\"center\", [\n        _c(\"input\", {\n          directives: [\n            {\n              name: \"model\",\n              rawName: \"v-model\",\n              value: _vm.query,\n              expression: \"query\"\n            }\n          ],\n          staticClass: \"faqs-search\",\n          staticStyle: {\n            border: \"0 !important\",\n            \"box-shadow\": \"0px 10px 15px rgba(0,0,0,0.1) !important\",\n            padding: \"1.5rem !important\"\n          },\n          attrs: {\n            type: \"search\",\n            placeholder: \"Enter text to search for question...\"\n          },\n          domProps: { value: _vm.query },\n          on: {\n            input: function($event) {\n              if ($event.target.composing) {\n                return\n              }\n              _vm.query = $event.target.value\n            }\n          }\n        }),\n        _c(\n          \"ul\",\n          {\n            staticClass: \"faqs-list\",\n            staticStyle: {\n              \"box-shadow\": \"0px 10px 15px rgba(0,0,0,0.1) !important\",\n              \"border-radius\": \"1.5rem\",\n              overflow: \"hidden\"\n            }\n          },\n          _vm._l(_vm.filteredFaqs, function(faq, index) {\n            return _c(\n              \"li\",\n              { key: index, staticClass: \"faqs-item\" },\n              [\n                _c(\n                  \"div\",\n                  {\n                    staticClass: \"faqs-question\",\n                    on: {\n                      click: function($event) {\n                        _vm.toggleFAQ(index)\n                      }\n                    }\n                  },\n                  [_vm._v(_vm._s(faq.question))]\n                ),\n                _c(\n                  \"transition\",\n                  { attrs: { name: \"slide-vertical\", tag: \"p\" } },\n                  [\n                    _c(\n                      \"div\",\n                      {\n                        directives: [\n                          {\n                            name: \"show\",\n                            rawName: \"v-show\",\n                            value: _vm.visibles[index],\n                            expression: \"visibles[index]\"\n                          }\n                        ],\n                        staticClass: \"faqs-answer\"\n                      },\n                      [_vm._v(_vm._s(faq.answer))]\n                    )\n                  ]\n                )\n              ],\n              1\n            )\n          }),\n          0\n        )\n      ])\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcIixcImNhY2hlSWRlbnRpZmllclwiOlwiYzkzMzMyZDYtdnVlLWxvYWRlci10ZW1wbGF0ZVwifSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL2ZhcXMtbWFjaGluZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzlhZTgxYjImc2NvcGVkPXRydWUmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZmFxcy1tYWNoaW5lLnZ1ZT8zOWNlIl0sInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJmYXFzLW1hY2hpbmUtY29udGFpbmVyXCIsXG4gICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1ib3R0b21cIjogXCIycmVtXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJjZW50ZXJcIiwgW1xuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0ucXVlcnksXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicXVlcnlcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFxcy1zZWFyY2hcIixcbiAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgYm9yZGVyOiBcIjAgIWltcG9ydGFudFwiLFxuICAgICAgICAgICAgXCJib3gtc2hhZG93XCI6IFwiMHB4IDEwcHggMTVweCByZ2JhKDAsMCwwLDAuMSkgIWltcG9ydGFudFwiLFxuICAgICAgICAgICAgcGFkZGluZzogXCIxLjVyZW0gIWltcG9ydGFudFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdHlwZTogXCJzZWFyY2hcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIHRleHQgdG8gc2VhcmNoIGZvciBxdWVzdGlvbi4uLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnF1ZXJ5IH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgX3ZtLnF1ZXJ5ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXFzLWxpc3RcIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgIFwiYm94LXNoYWRvd1wiOiBcIjBweCAxMHB4IDE1cHggcmdiYSgwLDAsMCwwLjEpICFpbXBvcnRhbnRcIixcbiAgICAgICAgICAgICAgXCJib3JkZXItcmFkaXVzXCI6IFwiMS41cmVtXCIsXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmZpbHRlcmVkRmFxcywgZnVuY3Rpb24oZmFxLCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgIHsga2V5OiBpbmRleCwgc3RhdGljQ2xhc3M6IFwiZmFxcy1pdGVtXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFxcy1xdWVzdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS50b2dnbGVGQVEoaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoZmFxLnF1ZXN0aW9uKSldXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvblwiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiBcInNsaWRlLXZlcnRpY2FsXCIsIHRhZzogXCJwXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS52aXNpYmxlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ2aXNpYmxlc1tpbmRleF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFxcy1hbnN3ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoZmFxLmFuc3dlcikpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgICAgMFxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"c93332d6-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/faqs-machine.vue?vue&type=template&id=c9ae81b2&scoped=true&\n");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/faqs-machine.vue?vue&type=style&index=0&id=c9ae81b2&lang=sass&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/faqs-machine.vue?vue&type=style&index=0&id=c9ae81b2&lang=sass&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".faqs-machine-container[data-v-c9ae81b2] {\\n  margin: 0rem 1rem;\\n}\\n.faqs-machine-container .faqs-search[data-v-c9ae81b2] {\\n    max-width: 600px;\\n    height: 40px;\\n    margin-bottom: 1em;\\n    width: 100%;\\n    background-color: white;\\n    border-radius: 2rem;\\n}\\n.faqs-machine-container .faqs-list[data-v-c9ae81b2] {\\n    width: 100%;\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: normal;\\n        -ms-flex-direction: column;\\n            flex-direction: column;\\n    list-style-type: none;\\n    max-width: 600px;\\n    font-family: 'Courier New';\\n}\\n.faqs-machine-container .faqs-item .faqs-question[data-v-c9ae81b2] {\\n    background-color: cornflowerblue;\\n    width: 100%;\\n    height: auto;\\n    padding: 1rem 1.5rem;\\n    color: #fff;\\n}\\n.faqs-machine-container .faqs-item .faqs-answer[data-v-c9ae81b2] {\\n    background-color: aliceblue;\\n    width: 100%;\\n    height: auto;\\n    padding: 10px 40px 10px 8px;\\n}\\n.faqs-machine-container .faqs-item .slide-vertical-enter-active.faqs-answer[data-v-c9ae81b2], .faqs-machine-container .faqs-item .slide-vertical-leave-active.faqs-answer[data-v-c9ae81b2] {\\n    -webkit-transition: all .3s ease-in-out;\\n    transition: all .3s ease-in-out;\\n    opacity: 100;\\n    height: 60px;\\n}\\n.faqs-machine-container .faqs-item .slide-vertical-enter.faqs-answer[data-v-c9ae81b2], .faqs-machine-container .faqs-item .slide-vertical-leave-to.faqs-answer[data-v-c9ae81b2] {\\n    opacity: 0;\\n    height: 0px;\\n}\\n\", \"\"]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL2ZhcXMtbWFjaGluZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jOWFlODFiMiZsYW5nPXNhc3Mmc2NvcGVkPXRydWUmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZmFxcy1tYWNoaW5lLnZ1ZT9jNjg3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZhcXMtbWFjaGluZS1jb250YWluZXJbZGF0YS12LWM5YWU4MWIyXSB7XFxuICBtYXJnaW46IDByZW0gMXJlbTtcXG59XFxuLmZhcXMtbWFjaGluZS1jb250YWluZXIgLmZhcXMtc2VhcmNoW2RhdGEtdi1jOWFlODFiMl0ge1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbn1cXG4uZmFxcy1tYWNoaW5lLWNvbnRhaW5lciAuZmFxcy1saXN0W2RhdGEtdi1jOWFlODFiMl0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldyc7XFxufVxcbi5mYXFzLW1hY2hpbmUtY29udGFpbmVyIC5mYXFzLWl0ZW0gLmZhcXMtcXVlc3Rpb25bZGF0YS12LWM5YWU4MWIyXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcbi5mYXFzLW1hY2hpbmUtY29udGFpbmVyIC5mYXFzLWl0ZW0gLmZhcXMtYW5zd2VyW2RhdGEtdi1jOWFlODFiMl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHBhZGRpbmc6IDEwcHggNDBweCAxMHB4IDhweDtcXG59XFxuLmZhcXMtbWFjaGluZS1jb250YWluZXIgLmZhcXMtaXRlbSAuc2xpZGUtdmVydGljYWwtZW50ZXItYWN0aXZlLmZhcXMtYW5zd2VyW2RhdGEtdi1jOWFlODFiMl0sIC5mYXFzLW1hY2hpbmUtY29udGFpbmVyIC5mYXFzLWl0ZW0gLnNsaWRlLXZlcnRpY2FsLWxlYXZlLWFjdGl2ZS5mYXFzLWFuc3dlcltkYXRhLXYtYzlhZTgxYjJdIHtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xcbiAgICBvcGFjaXR5OiAxMDA7XFxuICAgIGhlaWdodDogNjBweDtcXG59XFxuLmZhcXMtbWFjaGluZS1jb250YWluZXIgLmZhcXMtaXRlbSAuc2xpZGUtdmVydGljYWwtZW50ZXIuZmFxcy1hbnN3ZXJbZGF0YS12LWM5YWU4MWIyXSwgLmZhcXMtbWFjaGluZS1jb250YWluZXIgLmZhcXMtaXRlbSAuc2xpZGUtdmVydGljYWwtbGVhdmUtdG8uZmFxcy1hbnN3ZXJbZGF0YS12LWM5YWU4MWIyXSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGhlaWdodDogMHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/faqs-machine.vue?vue&type=style&index=0&id=c9ae81b2&lang=sass&scoped=true&\n");

/***/ })

})