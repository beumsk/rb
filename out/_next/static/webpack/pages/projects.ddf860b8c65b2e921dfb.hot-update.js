webpackHotUpdate_N_E("pages/projects",{

/***/ "./pages/projects/index.js":
/*!*********************************!*\
  !*** ./pages/projects/index.js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projects; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/layout */ "./components/layout.js");
/* harmony import */ var components_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/grid */ "./components/grid.js");
/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @data/projects */ "./data/projects.js");
var _jsxFileName = "C:\\Users\\PC\\Documents\\GitHub\\rb\\pages\\projects\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var __N_SSG = true;
function Projects(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      pro = _useState[0],
      setPro = _useState[1];

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: props.title,
    description: props.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "Projects"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: function onClick() {
      return setPro(!pro);
    },
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, pro ? 'Professional projects' : 'Personal projects')), __jsx("div", {
    "data-aos": "fade-up",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(components_grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: _data_projects__WEBPACK_IMPORTED_MODULE_3__["projects"].filter(function (x) {
      return pro ? !x.pen : x.pen;
    }),
    className: "mt-5 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }))));
}

_s(Projects, "+FuWAXgrzjLTF70kESyBu9D9LW0=");

_c = Projects;

var _c;

$RefreshReg$(_c, "Projects");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvamVjdHMiLCJwcm9wcyIsInVzZVN0YXRlIiwicHJvIiwic2V0UHJvIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByb2plY3RzIiwiZmlsdGVyIiwieCIsInBlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUFBLGtCQUNoQkMsc0RBQVEsQ0FBQyxLQUFELENBRFE7QUFBQSxNQUMvQkMsR0FEK0I7QUFBQSxNQUMxQkMsTUFEMEI7O0FBR3RDLFNBQ0UsTUFBQywwREFBRDtBQUFRLFNBQUssRUFBRUgsS0FBSyxDQUFDSSxLQUFyQjtBQUE0QixlQUFXLEVBQUVKLEtBQUssQ0FBQ0ssV0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNRixNQUFNLENBQUMsQ0FBQ0QsR0FBRixDQUFaO0FBQUEsS0FBakI7QUFBcUMsYUFBUyxFQUFDLEtBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsR0FBRyxHQUFHLHVCQUFILEdBQTZCLG1CQURuQyxDQURGLENBTEYsRUFXRTtBQUFLLGdCQUFTLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFBTSxRQUFJLEVBQUVJLHVEQUFRLENBQUNDLE1BQVQsQ0FBZ0IsVUFBQUMsQ0FBQztBQUFBLGFBQUlOLEdBQUcsR0FBRyxDQUFDTSxDQUFDLENBQUNDLEdBQU4sR0FBWUQsQ0FBQyxDQUFDQyxHQUFyQjtBQUFBLEtBQWpCLENBQVo7QUFBd0QsYUFBUyxFQUFDLFdBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVhGLENBREYsQ0FERjtBQW9CRDs7R0F2QnVCVixROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzLmRkZjg2MGI4YzY1YjJlOTIxZGZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJ0Bjb21wb25lbnRzL2xheW91dCdcclxuaW1wb3J0IEdyaWQgZnJvbSAnY29tcG9uZW50cy9ncmlkJ1xyXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJ0BkYXRhL3Byb2plY3RzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMocHJvcHMpIHtcclxuICBjb25zdCBbcHJvLCBzZXRQcm9dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT17cHJvcHMudGl0bGV9IGRlc2NyaXB0aW9uPXtwcm9wcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgxPlByb2plY3RzPC9oMT5cclxuXHJcbiAgICAgICAgey8qIFRPRE86IGFkZCBmaWx0ZXJzIHRlY2gsIHByby9wZXJzbywgZXRjLiBhbmQgb3JkZXIgKi99XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFBybyghcHJvKX0gY2xhc3NOYW1lPVwiYnRuXCI+XHJcbiAgICAgICAgICAgIHtwcm8gPyAnUHJvZmVzc2lvbmFsIHByb2plY3RzJyA6ICdQZXJzb25hbCBwcm9qZWN0cyd9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuICAgICAgICAgIDxHcmlkIGRhdGE9e3Byb2plY3RzLmZpbHRlcih4ID0+IHBybyA/ICF4LnBlbiA6IHgucGVuKX0gY2xhc3NOYW1lPVwibXQtNSBtYi01XCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgdGl0bGU6ICdQcm9qZWN0cyB8IFLDqW15IEJldW1pZXInLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ015IHBlcnNvbmFsIGFuZCBwcm9mZXNzaW9uYWwgcHJvamVjdHMgZGV2ZWxvcGVkIHdpdGggSFRNTCwgQ1NTLCBKUywgUmVhY3QsIEFuZ3VsYXIgYW5kIG1hbnkgbW9yZS4nXHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==