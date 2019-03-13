webpackHotUpdate("about",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/faqs-machine.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/faqs-machine.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ \"./node_modules/core-js/modules/es7.array.includes.js\");\n/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ \"./node_modules/core-js/modules/es6.string.includes.js\");\n/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__);\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: [\"content\"],\n  data: function data() {\n    return {\n      faqs: this.content,\n      filteredFaqs: this.content,\n      visibles: {},\n      query: \"\"\n    };\n  },\n  beforeMount: function beforeMount() {\n    var obj = {};\n\n    for (var i = 0; i < this.faqs.length; i++) {\n      obj[i] = false;\n    }\n\n    this.visibles = obj;\n  },\n  watch: {\n    query: function query() {\n      this.filterFAQs();\n    }\n  },\n  methods: {\n    toggleFAQ: function toggleFAQ(index) {\n      this.visibles[index] = !this.visibles[index];\n      console.log(this.visibles[index]);\n    },\n    filterFAQs: function filterFAQs() {\n      this.filteredFaqs = this.faqs.filter(this.checkIfIncludes);\n    },\n    checkIfIncludes: function checkIfIncludes(faq) {\n      return faq.question.includes(this.query) || faq.answer.includes(this.query);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvZmFxcy1tYWNoaW5lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZmFxcy1tYWNoaW5lLnZ1ZT9mNDMwIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cImZhcXMtbWFjaGluZS1jb250YWluZXJcIj5cblx0XHQ8Y2VudGVyIHN0eWxlPVwicGFkZGluZy1ib3R0b206IDJyZW1cIj5cblx0XHRcdDxpbnB1dFxuXHRcdFx0XHRjbGFzcz1cImZhcXMtc2VhcmNoXCJcblx0XHRcdFx0dHlwZT1cInNlYXJjaFwiXG5cdFx0XHRcdHBsYWNlaG9sZGVyPVwiRW50ZXIgdGV4dCB0byBzZWFyY2ggZm9yIHF1ZXN0aW9uLi4uXCJcblx0XHRcdFx0di1tb2RlbD1cInF1ZXJ5XCJcblx0XHRcdFx0c3R5bGU9XCJib3JkZXI6IDAgIWltcG9ydGFudDsgYm94LXNoYWRvdzogMHB4IDEwcHggMTVweCByZ2JhKDAsMCwwLDAuMSkgIWltcG9ydGFudDsgcGFkZGluZzogMS41cmVtICFpbXBvcnRhbnRcIlxuXHRcdFx0PlxuXHRcdFx0PHVsIGNsYXNzPVwiZmFxcy1saXN0XCIgc3R5bGU9XCJib3gtc2hhZG93OiAwcHggMTBweCAxNXB4IHJnYmEoMCwwLDAsMC4xKSAhaW1wb3J0YW50O1wiPlxuXHRcdFx0XHQ8bGkgY2xhc3M9XCJmYXFzLWl0ZW1cIiB2LWZvcj1cIihmYXEsIGluZGV4KSBpbiBmaWx0ZXJlZEZhcXNcIiB2LWJpbmQ6a2V5PVwiaW5kZXhcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZmFxcy1xdWVzdGlvblwiIHYtb246Y2xpY2s9XCJ0b2dnbGVGQVEoaW5kZXgpXCI+e3tmYXEucXVlc3Rpb259fTwvZGl2PlxuXHRcdFx0XHRcdDx0cmFuc2l0aW9uIG5hbWU9XCJzbGlkZS12ZXJ0aWNhbFwiIHRhZz1cInBcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmYXFzLWFuc3dlclwiIHYtc2hvdz1cInZpc2libGVzW2luZGV4XVwiPnt7ZmFxLmFuc3dlcn19PC9kaXY+XG5cdFx0XHRcdFx0PC90cmFuc2l0aW9uPlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0PC91bD5cblx0XHQ8L2NlbnRlcj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgbGFuZz1cInNhc3NcIiBzY29wZWQ+XG5cbi5mYXFzLW1hY2hpbmUtY29udGFpbmVyXG5cbiAgLmZhcXMtc2VhcmNoIFxuICAgIG1heC13aWR0aDogNjAwcHhcbiAgICBoZWlnaHQ6IDQwcHhcbiAgICBtYXJnaW4tYm90dG9tOiAxZW1cbiAgICB3aWR0aDogMTAwJVxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbVxuICAgICAgXG4gIC5mYXFzLWxpc3RcbiAgICB3aWR0aDogMTAwJVxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lXG4gICAgbWF4LXdpZHRoOiA2MDBweFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnXG5cdFx0Ym94LXNoYWRvdzogMHB4IDEwcHggMTVweCByZ2JhKDAsMCwwLDAuMSkgIWltcG9ydGFudFxuXHRcdGJvcmRlci1yYWRpdXM6IDEuNXJlbVxuXHRcdFxuXHRcdC5mYXFzLWl0ZW06Zmlyc3QtY2hpbGRcblx0XHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEuNXJlbVxuXHRcdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEuNXJlbVxuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlblxuXG5cdFx0LmZhcXMtaXRlbTpsYXN0LWNoaWxkXG5cdFx0XHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxLjVyZW1cblx0XHRcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxLjVyZW1cblx0XHRcdG92ZXJmbG93OiBoaWRkZW5cblxuXHRcdC5mYXFzLWl0ZW1cblxuICAgICAgLmZhcXMtcXVlc3Rpb24gXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlXG4gICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgIGhlaWdodDogYXV0b1xuICAgICAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbVxuICAgICAgICBjb2xvcjogI2ZmZlxuXG4gICAgICAuZmFxcy1hbnN3ZXIgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZVxuICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICBoZWlnaHQ6IGF1dG9cbiAgICAgICAgcGFkZGluZzogMTBweCA0MHB4IDEwcHggOHB4XG4gIFxuICAgICAgLnNsaWRlLXZlcnRpY2FsLWVudGVyLWFjdGl2ZS5mYXFzLWFuc3dlciwgLnNsaWRlLXZlcnRpY2FsLWxlYXZlLWFjdGl2ZS5mYXFzLWFuc3dlciBcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dFxuICAgICAgICBvcGFjaXR5OiAxMDBcbiAgICAgICAgaGVpZ2h0OiA2MHB4ICAgXG4gICAgICBcbiAgICAgIC5zbGlkZS12ZXJ0aWNhbC1lbnRlci5mYXFzLWFuc3dlciwgLnNsaWRlLXZlcnRpY2FsLWxlYXZlLXRvLmZhcXMtYW5zd2VyIFxuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIGhlaWdodDogMHB4XG48L3N0eWxlPlxuXG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cdHByb3BzOiBbXCJjb250ZW50XCJdLFxuXHRkYXRhOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZmFxczogdGhpcy5jb250ZW50LFxuXHRcdFx0ZmlsdGVyZWRGYXFzOiB0aGlzLmNvbnRlbnQsXG5cdFx0XHR2aXNpYmxlczoge30sXG5cdFx0XHRxdWVyeTogXCJcIlxuXHRcdH07XG5cdH0sXG5cdGJlZm9yZU1vdW50OiBmdW5jdGlvbigpIHtcblx0XHR2YXIgb2JqID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZhcXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdG9ialtpXSA9IGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnZpc2libGVzID0gb2JqO1xuXHR9LFxuXHR3YXRjaDoge1xuXHRcdHF1ZXJ5OiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuZmlsdGVyRkFRcygpO1xuXHRcdH1cblx0fSxcblx0bWV0aG9kczoge1xuXHRcdHRvZ2dsZUZBUTogZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRcdHRoaXMudmlzaWJsZXNbaW5kZXhdID0gIXRoaXMudmlzaWJsZXNbaW5kZXhdO1xuXHRcdFx0Y29uc29sZS5sb2codGhpcy52aXNpYmxlc1tpbmRleF0pO1xuXHRcdH0sXG5cdFx0ZmlsdGVyRkFRczogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLmZpbHRlcmVkRmFxcyA9IHRoaXMuZmFxcy5maWx0ZXIodGhpcy5jaGVja0lmSW5jbHVkZXMpO1xuXHRcdH0sXG5cdFx0Y2hlY2tJZkluY2x1ZGVzOiBmdW5jdGlvbihmYXEpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdGZhcS5xdWVzdGlvbi5pbmNsdWRlcyh0aGlzLnF1ZXJ5KSB8fCBmYXEuYW5zd2VyLmluY2x1ZGVzKHRoaXMucXVlcnkpXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxufTtcbjwvc2NyaXB0PiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFaQTtBQXRCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/faqs-machine.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/faqs-machine.vue?vue&type=style&index=0&id=c9ae81b2&lang=sass&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/faqs-machine.vue?vue&type=style&index=0&id=c9ae81b2&lang=sass&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".faqs-machine-container[data-v-c9ae81b2] {\\n  -webkit-box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1) !important;\\n          box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1) !important;\\n  border-radius: 1.5rem;\\n}\\n.faqs-machine-container .faqs-search[data-v-c9ae81b2] {\\n    max-width: 600px;\\n    height: 40px;\\n    margin-bottom: 1em;\\n    width: 100%;\\n    background-color: white;\\n    border-radius: 2rem;\\n}\\n.faqs-machine-container .faqs-list[data-v-c9ae81b2] {\\n    width: 100%;\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: normal;\\n        -ms-flex-direction: column;\\n            flex-direction: column;\\n    list-style-type: none;\\n    max-width: 600px;\\n    font-family: 'Courier New';\\n}\\n.faqs-machine-container .faqs-item[data-v-c9ae81b2]:first-child {\\n    border-top-left-radius: 1.5rem;\\n    border-top-right-radius: 1.5rem;\\n    overflow: hidden;\\n}\\n.faqs-machine-container .faqs-item[data-v-c9ae81b2]:last-child {\\n    border-bottom-left-radius: 1.5rem;\\n    border-bottom-right-radius: 1.5rem;\\n    overflow: hidden;\\n}\\n.faqs-machine-container .faqs-item .faqs-question[data-v-c9ae81b2] {\\n    background-color: cornflowerblue;\\n    width: 100%;\\n    height: auto;\\n    padding: 1rem 1.5rem;\\n    color: #fff;\\n}\\n.faqs-machine-container .faqs-item .faqs-answer[data-v-c9ae81b2] {\\n    background-color: aliceblue;\\n    width: 100%;\\n    height: auto;\\n    padding: 10px 40px 10px 8px;\\n}\\n.faqs-machine-container .faqs-item .slide-vertical-enter-active.faqs-answer[data-v-c9ae81b2], .faqs-machine-container .faqs-item .slide-vertical-leave-active.faqs-answer[data-v-c9ae81b2] {\\n    -webkit-transition: all .3s ease-in-out;\\n    transition: all .3s ease-in-out;\\n    opacity: 100;\\n    height: 60px;\\n}\\n.faqs-machine-container .faqs-item .slide-vertical-enter.faqs-answer[data-v-c9ae81b2], .faqs-machine-container .faqs-item .slide-vertical-leave-to.faqs-answer[data-v-c9ae81b2] {\\n    opacity: 0;\\n    height: 0px;\\n}\\n\", \"\"]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL2ZhcXMtbWFjaGluZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jOWFlODFiMiZsYW5nPXNhc3Mmc2NvcGVkPXRydWUmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZmFxcy1tYWNoaW5lLnZ1ZT9jNjg3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZhcXMtbWFjaGluZS1jb250YWluZXJbZGF0YS12LWM5YWU4MWIyXSB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XFxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxufVxcbi5mYXFzLW1hY2hpbmUtY29udGFpbmVyIC5mYXFzLXNlYXJjaFtkYXRhLXYtYzlhZTgxYjJdIHtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG59XFxuLmZhcXMtbWFjaGluZS1jb250YWluZXIgLmZhcXMtbGlzdFtkYXRhLXYtYzlhZTgxYjJdIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnO1xcbn1cXG4uZmFxcy1tYWNoaW5lLWNvbnRhaW5lciAuZmFxcy1pdGVtW2RhdGEtdi1jOWFlODFiMl06Zmlyc3QtY2hpbGQge1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxLjVyZW07XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxLjVyZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5mYXFzLW1hY2hpbmUtY29udGFpbmVyIC5mYXFzLWl0ZW1bZGF0YS12LWM5YWU4MWIyXTpsYXN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMS41cmVtO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMS41cmVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uZmFxcy1tYWNoaW5lLWNvbnRhaW5lciAuZmFxcy1pdGVtIC5mYXFzLXF1ZXN0aW9uW2RhdGEtdi1jOWFlODFiMl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG4uZmFxcy1tYWNoaW5lLWNvbnRhaW5lciAuZmFxcy1pdGVtIC5mYXFzLWFuc3dlcltkYXRhLXYtYzlhZTgxYjJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHggMTBweCA4cHg7XFxufVxcbi5mYXFzLW1hY2hpbmUtY29udGFpbmVyIC5mYXFzLWl0ZW0gLnNsaWRlLXZlcnRpY2FsLWVudGVyLWFjdGl2ZS5mYXFzLWFuc3dlcltkYXRhLXYtYzlhZTgxYjJdLCAuZmFxcy1tYWNoaW5lLWNvbnRhaW5lciAuZmFxcy1pdGVtIC5zbGlkZS12ZXJ0aWNhbC1sZWF2ZS1hY3RpdmUuZmFxcy1hbnN3ZXJbZGF0YS12LWM5YWU4MWIyXSB7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcXG4gICAgb3BhY2l0eTogMTAwO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxufVxcbi5mYXFzLW1hY2hpbmUtY29udGFpbmVyIC5mYXFzLWl0ZW0gLnNsaWRlLXZlcnRpY2FsLWVudGVyLmZhcXMtYW5zd2VyW2RhdGEtdi1jOWFlODFiMl0sIC5mYXFzLW1hY2hpbmUtY29udGFpbmVyIC5mYXFzLWl0ZW0gLnNsaWRlLXZlcnRpY2FsLWxlYXZlLXRvLmZhcXMtYW5zd2VyW2RhdGEtdi1jOWFlODFiMl0ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBoZWlnaHQ6IDBweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/faqs-machine.vue?vue&type=style&index=0&id=c9ae81b2&lang=sass&scoped=true&\n");

/***/ })

})