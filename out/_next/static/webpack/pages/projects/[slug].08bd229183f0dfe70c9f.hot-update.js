webpackHotUpdate_N_E("pages/projects/[slug]",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/header */ "./components/header.js");
/* harmony import */ var components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/footer */ "./components/footer.js");
/* harmony import */ var components_mobileNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/mobileNav */ "./components/mobileNav.js");
var _jsxFileName = "C:\\Users\\PC\\Documents\\GitHub\\rb\\components\\layout.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Layout(props) {
  _s();

  var _props$img;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      theme = _useState[0],
      setTheme = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var localTheme = window.localStorage.getItem('theme');
    setTheme(localTheme);
  }, []);

  var switchTheme = function switchTheme() {
    var newTheme = theme === 'light' ? 'dark' : 'light';
    window.localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  var fullImageUrl = (_props$img = props.img) !== null && _props$img !== void 0 && _props$img.startsWith('http') ? props.img : "https://beumsk.github.io".concat(props.img);
  return __jsx("main", {
    className: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, props.title), __jsx("meta", {
    name: "description",
    content: props.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image",
    content: fullImageUrl || "https://beumsk.github.io/images/rb.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image:secure_url",
    content: fullImageUrl || "https://beumsk.github.io/images/rb.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), __jsx(components_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: switchTheme,
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), props.children, __jsx(components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx(components_mobileNav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }));
}

_s(Layout, "3P4xXCVpfh6R2LV2gD7mN6c9AsM=");

_c = Layout;

var _c;

$RefreshReg$(_c, "Layout");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VFZmZlY3QiLCJsb2NhbFRoZW1lIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN3aXRjaFRoZW1lIiwibmV3VGhlbWUiLCJzZXRJdGVtIiwiZnVsbEltYWdlVXJsIiwiaW1nIiwic3RhcnRzV2l0aCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1ZDLHNEQUFRLENBQUMsRUFBRCxDQURFO0FBQUEsTUFDN0JDLEtBRDZCO0FBQUEsTUFDdEJDLFFBRHNCOztBQUdwQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSUMsVUFBVSxHQUFHQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE9BQTVCLENBQWpCO0FBQ0FMLFlBQVEsQ0FBQ0UsVUFBRCxDQUFSO0FBQ0gsR0FIUSxFQUdOLEVBSE0sQ0FBVDs7QUFLQSxNQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFFBQU1DLFFBQVEsR0FBR1IsS0FBSyxLQUFLLE9BQVYsR0FBb0IsTUFBcEIsR0FBNkIsT0FBOUM7QUFDQUksVUFBTSxDQUFDQyxZQUFQLENBQW9CSSxPQUFwQixDQUE0QixPQUE1QixFQUFxQ0QsUUFBckM7QUFDQVAsWUFBUSxDQUFDTyxRQUFELENBQVI7QUFDRCxHQUpEOztBQU1BLE1BQUlFLFlBQVksR0FBRyxjQUFBWixLQUFLLENBQUNhLEdBQU4sa0RBQVdDLFVBQVgsQ0FBc0IsTUFBdEIsSUFBZ0NkLEtBQUssQ0FBQ2EsR0FBdEMscUNBQXVFYixLQUFLLENBQUNhLEdBQTdFLENBQW5CO0FBRUEsU0FDRTtBQUFNLGFBQVMsRUFBRVgsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUYsS0FBSyxDQUFDZSxLQUFkLENBREYsRUFFRTtBQUFNLFFBQUksRUFBQyxhQUFYO0FBQXlCLFdBQU8sRUFBRWYsS0FBSyxDQUFDZ0IsV0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBTSxZQUFRLEVBQUMsVUFBZjtBQUEwQixXQUFPLEVBQUVKLFlBQVksSUFBSSx3Q0FBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUU7QUFBTSxZQUFRLEVBQUMscUJBQWY7QUFBcUMsV0FBTyxFQUFFQSxZQUFZLElBQUksd0NBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURGLEVBT0UsTUFBQyx5REFBRDtBQUFRLFdBQU8sRUFBRUgsV0FBakI7QUFBOEIsU0FBSyxFQUFFUCxLQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFRR0YsS0FBSyxDQUFDaUIsUUFSVCxFQVNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBVUUsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsQ0FERjtBQWNEOztHQTlCdUJsQixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzL1tzbHVnXS4wOGJkMjI5MTgzZjBkZmU3MGM5Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvaGVhZGVyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ2NvbXBvbmVudHMvZm9vdGVyJ1xyXG5pbXBvcnQgTW9iaWxlTmF2IGZyb20gJ2NvbXBvbmVudHMvbW9iaWxlTmF2J1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQocHJvcHMpIHtcclxuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgbGV0IGxvY2FsVGhlbWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJyk7XHJcbiAgICAgIHNldFRoZW1lKGxvY2FsVGhlbWUpO1xyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBzd2l0Y2hUaGVtZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1RoZW1lID0gdGhlbWUgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnO1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIG5ld1RoZW1lKTtcclxuICAgIHNldFRoZW1lKG5ld1RoZW1lKTtcclxuICB9XHJcblxyXG4gIGxldCBmdWxsSW1hZ2VVcmwgPSBwcm9wcy5pbWc/LnN0YXJ0c1dpdGgoJ2h0dHAnKSA/IHByb3BzLmltZyA6IGBodHRwczovL2JldW1zay5naXRodWIuaW8ke3Byb3BzLmltZ31gO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPXt0aGVtZX0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57cHJvcHMudGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD17cHJvcHMuZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2Z1bGxJbWFnZVVybCB8fCBcImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9pbWFnZXMvcmIucG5nXCJ9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpzZWN1cmVfdXJsXCIgY29udGVudD17ZnVsbEltYWdlVXJsIHx8IFwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL2ltYWdlcy9yYi5wbmdcIn0gLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8SGVhZGVyIG9uQ2xpY2s9e3N3aXRjaFRoZW1lfSB0aGVtZT17dGhlbWV9IC8+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8TW9iaWxlTmF2IC8+XHJcbiAgICA8L21haW4+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==