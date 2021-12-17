webpackHotUpdate_N_E("pages/projects/[slug]",{

/***/ "./pages/projects/[slug].js":
/*!**********************************!*\
  !*** ./pages/projects/[slug].js ***!
  \**********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DynamicPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/layout */ "./components/layout.js");
/* harmony import */ var components_codepen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/codepen */ "./components/codepen.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @data/projects */ "./data/projects.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/si */ "./node_modules/react-icons/si/index.esm.js");
var _jsxFileName = "C:\\Users\\PC\\Documents\\GitHub\\rb\\pages\\projects\\[slug].js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Tech = function Tech(props) {
  return __jsx("li", {
    className: "tech",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, props.name === 'HTML' && __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_6__["SiHtml5"], {
    color: "#E44D26",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 33
    }
  }), props.name === 'CSS' && __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_6__["SiCss3"], {
    color: "#1572B6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 32
    }
  }), props.name === 'JS' && __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_6__["SiJavascript"], {
    color: "#F0DB4F",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 31
    }
  }), props.name === 'jQuery' && __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_6__["SiJquery"], {
    color: "#0868AC",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 35
    }
  }), props.name === 'Bootstrap' && __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_6__["SiBootstrap"], {
    color: "#5B4282",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 38
    }
  }), props.name === 'Sass' && __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_6__["SiSass"], {
    color: "#CF649A",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 33
    }
  }), props.name === 'Angular' && __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_6__["SiAngular"], {
    color: "#A6120D",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 36
    }
  }), props.name === 'React' && __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_6__["SiReact"], {
    color: "#61DBFB",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 34
    }
  }), props.name === 'C#' && __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_6__["SiCsharp"], {
    color: "#390092",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 31
    }
  }), props.name === 'Umbraco' && __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_6__["SiUmbraco"], {
    color: "#3544b1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 36
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, props.name));
};

_c = Tech;
var __N_SSG = true;
function DynamicPage(props) {
  _s();

  var _this2 = this,
      _personal,
      _professional;

  var personal = _data_projects__WEBPACK_IMPORTED_MODULE_4__["projects"].filter(function (x) {
    return x.pen;
  });
  var professional = _data_projects__WEBPACK_IMPORTED_MODULE_4__["projects"].filter(function (x) {
    return !x.pen;
  });
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var slug = router.query.slug;
  var proj = _data_projects__WEBPACK_IMPORTED_MODULE_4__["projects"][_data_projects__WEBPACK_IMPORTED_MODULE_4__["projects"].findIndex(function (x) {
    return x.title === slug;
  })];
  var isPro = !proj.pen;
  var slugTitle = proj.title.replace(/-/g, " ");
  slugTitle = slugTitle.charAt(0).toUpperCase() + slugTitle.slice(1);
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: slugTitle + ' | Rémy Beumier',
    description: proj.intro,
    img: 'https://beumsk.github.io' + proj.img,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container over-x-h",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("div", {
    "data-aos": "fade-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, slugTitle), __jsx("p", {
    className: "mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, proj.intro), proj.tech.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, "Technologies"), __jsx("ul", {
    className: "pl-0 mb-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, proj.tech.map(function (x, i) {
    return __jsx(Tech, {
      key: i,
      name: x,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 42
      }
    });
  }))), proj.chall.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, "Challenges, key lessons"), __jsx("ul", {
    className: "mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, proj.chall.map(function (x, i) {
    return __jsx("li", {
      key: i,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 43
      }
    }, x);
  }))), !isPro && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_codepen__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pen: proj.pen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }), __jsx("a", {
    href: "https://github.com/beumsk/" + proj.title,
    target: "_blank",
    className: "btn mb-2 mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, "Github repository"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: ((_personal = personal[personal.indexOf(proj) + 1]) === null || _personal === void 0 ? void 0 : _personal.link) || personal[0].link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "btn mb-2 mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, "Next project"))), isPro && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, proj.screen && __jsx("figure", {
    className: "wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: proj.screen,
    alt: "Screenshot of " + proj.current,
    className: "scroll",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 19
    }
  })), proj.current && __jsx("a", {
    href: proj.current,
    target: "_blank",
    className: "btn mb-2 mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 32
    }
  }, "Live website"), proj.past && __jsx("a", {
    href: proj.past,
    target: "_blank",
    className: "btn mb-2 mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  }, "Site as I left it"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: ((_professional = professional[professional.indexOf(proj) + 1]) === null || _professional === void 0 ? void 0 : _professional.link) || professional[0].link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "btn mb-2 mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, "Next project"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/projects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 34
    }
  }, "Back to projects")))));
}

_s(DynamicPage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c2 = DynamicPage;

var _c, _c2;

$RefreshReg$(_c, "Tech");
$RefreshReg$(_c2, "DynamicPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlRlY2giLCJwcm9wcyIsIm5hbWUiLCJEeW5hbWljUGFnZSIsInBlcnNvbmFsIiwicHJvamVjdHMiLCJmaWx0ZXIiLCJ4IiwicGVuIiwicHJvZmVzc2lvbmFsIiwicm91dGVyIiwidXNlUm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwicHJvaiIsImZpbmRJbmRleCIsInRpdGxlIiwiaXNQcm8iLCJzbHVnVGl0bGUiLCJyZXBsYWNlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImludHJvIiwiaW1nIiwidGVjaCIsImxlbmd0aCIsIm1hcCIsImkiLCJjaGFsbCIsImluZGV4T2YiLCJsaW5rIiwic2NyZWVuIiwiY3VycmVudCIsInBhc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUN0QixTQUNFO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxLQUFLLENBQUNDLElBQU4sS0FBZSxNQUFmLElBQXlCLE1BQUMsc0RBQUQ7QUFBUyxTQUFLLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRDVCLEVBRUdELEtBQUssQ0FBQ0MsSUFBTixLQUFlLEtBQWYsSUFBd0IsTUFBQyxxREFBRDtBQUFRLFNBQUssRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGM0IsRUFHR0QsS0FBSyxDQUFDQyxJQUFOLEtBQWUsSUFBZixJQUF1QixNQUFDLDJEQUFEO0FBQWMsU0FBSyxFQUFDLFNBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFI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TCxJQUFhO0FBQUcsUUFBSSxFQUFFcEIsSUFBSSxDQUFDb0IsSUFBZDtBQUFvQixVQUFNLEVBQUMsUUFBM0I7QUFBb0MsYUFBUyxFQUFDLGVBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUmhCLEVBVUUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRSxrQkFBQXpCLFlBQVksQ0FBQ0EsWUFBWSxDQUFDcUIsT0FBYixDQUFxQmhCLElBQXJCLElBQTZCLENBQTlCLENBQVosZ0VBQThDaUIsSUFBOUMsS0FBc0R0QixZQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCc0IsSUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQVZGLENBbkNKLEVBbURFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVCO0FBQUcsYUFBUyxFQUFDLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBdkIsQ0FuREYsQ0FERixDQURGLENBREY7QUEyREQ7O0dBckV1QjVCLFc7VUFHUFEscUQ7OztNQUhPUixXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzL1tzbHVnXS5kZDZjOGM3Y2RlOTI0OWU0MmQ0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICdAY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCBDb2RlcGVuIGZyb20gJ2NvbXBvbmVudHMvY29kZXBlbidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJ0BkYXRhL3Byb2plY3RzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgU2lIdG1sNSwgU2lDc3MzLCBTaUphdmFzY3JpcHQsIFNpSnF1ZXJ5LCBTaUJvb3RzdHJhcCwgU2lTYXNzLCBTaUFuZ3VsYXIsIFNpUmVhY3QsIFNpQ3NoYXJwLCBTaVVtYnJhY28gfSBmcm9tICdyZWFjdC1pY29ucy9zaSc7XHJcblxyXG5jb25zdCBUZWNoID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9XCJ0ZWNoXCI+XHJcbiAgICAgIHtwcm9wcy5uYW1lID09PSAnSFRNTCcgJiYgPFNpSHRtbDUgY29sb3I9XCIjRTQ0RDI2XCIgLz59XHJcbiAgICAgIHtwcm9wcy5uYW1lID09PSAnQ1NTJyAmJiA8U2lDc3MzIGNvbG9yPVwiIzE1NzJCNlwiIC8+fVxyXG4gICAgICB7cHJvcHMubmFtZSA9PT0gJ0pTJyAmJiA8U2lKYXZhc2NyaXB0IGNvbG9yPVwiI0YwREI0RlwiIC8+fVxyXG4gICAgICB7cHJvcHMubmFtZSA9PT0gJ2pRdWVyeScgJiYgPFNpSnF1ZXJ5IGNvbG9yPVwiIzA4NjhBQ1wiIC8+fVxyXG4gICAgICB7cHJvcHMubmFtZSA9PT0gJ0Jvb3RzdHJhcCcgJiYgPFNpQm9vdHN0cmFwIGNvbG9yPVwiIzVCNDI4MlwiIC8+fVxyXG4gICAgICB7cHJvcHMubmFtZSA9PT0gJ1Nhc3MnICYmIDxTaVNhc3MgY29sb3I9XCIjQ0Y2NDlBXCIgLz59XHJcbiAgICAgIHtwcm9wcy5uYW1lID09PSAnQW5ndWxhcicgJiYgPFNpQW5ndWxhciBjb2xvcj1cIiNBNjEyMERcIiAvPn1cclxuICAgICAge3Byb3BzLm5hbWUgPT09ICdSZWFjdCcgJiYgPFNpUmVhY3QgY29sb3I9XCIjNjFEQkZCXCIgLz59XHJcbiAgICAgIHtwcm9wcy5uYW1lID09PSAnQyMnICYmIDxTaUNzaGFycCBjb2xvcj1cIiMzOTAwOTJcIiAvPn1cclxuICAgICAge3Byb3BzLm5hbWUgPT09ICdVbWJyYWNvJyAmJiA8U2lVbWJyYWNvIGNvbG9yPVwiIzM1NDRiMVwiIC8+fVxyXG4gICAgICA8c3Bhbj57cHJvcHMubmFtZX08L3NwYW4+XHJcbiAgICA8L2xpPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHluYW1pY1BhZ2UocHJvcHMpIHtcclxuICBjb25zdCBwZXJzb25hbCA9IHByb2plY3RzLmZpbHRlcih4ID0+IHgucGVuKVxyXG4gIGNvbnN0IHByb2Zlc3Npb25hbCA9IHByb2plY3RzLmZpbHRlcih4ID0+ICF4LnBlbilcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHNsdWcgPSByb3V0ZXIucXVlcnkuc2x1Z1xyXG4gIGNvbnN0IHByb2ogPSBwcm9qZWN0c1twcm9qZWN0cy5maW5kSW5kZXgoeCA9PiB4LnRpdGxlID09PSBzbHVnKV1cclxuICBjb25zdCBpc1BybyA9ICFwcm9qLnBlbjtcclxuICBsZXQgc2x1Z1RpdGxlID0gcHJvai50aXRsZS5yZXBsYWNlKC8tL2csIFwiIFwiKTtcclxuICBzbHVnVGl0bGUgPSBzbHVnVGl0bGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzbHVnVGl0bGUuc2xpY2UoMSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPXtzbHVnVGl0bGUgKyAnIHwgUsOpbXkgQmV1bWllcid9IGRlc2NyaXB0aW9uPXtwcm9qLmludHJvfSBpbWc9eydodHRwczovL2JldW1zay5naXRodWIuaW8nICsgcHJvai5pbWd9PiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBvdmVyLXgtaFwiPlxyXG4gICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLWxlZnRcIj5cclxuICAgICAgICAgIDxoMT57c2x1Z1RpdGxlfTwvaDE+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi04XCI+e3Byb2ouaW50cm99PC9wPlxyXG5cclxuICAgICAgICAgIHtwcm9qLnRlY2gubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGgyPlRlY2hub2xvZ2llczwvaDI+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBsLTAgbWItNlwiPlxyXG4gICAgICAgICAgICAgICAge3Byb2oudGVjaC5tYXAoKHgsIGkpID0+IDxUZWNoIGtleT17aX0gbmFtZT17eH0vPil9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHtwcm9qLmNoYWxsLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxoMj5DaGFsbGVuZ2VzLCBrZXkgbGVzc29uczwvaDI+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1iLThcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9qLmNoYWxsLm1hcCgoeCwgaSkgPT4gPGxpIGtleT17aX0+e3h9PC9saT4pfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7IWlzUHJvICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8Q29kZXBlbiBwZW49e3Byb2oucGVufSAvPlxyXG5cclxuICAgICAgICAgICAgICA8YSBocmVmPXtcImh0dHBzOi8vZ2l0aHViLmNvbS9iZXVtc2svXCIgKyBwcm9qLnRpdGxlfSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJidG4gbWItMiBtci0yXCI+R2l0aHViIHJlcG9zaXRvcnk8L2E+XHJcblxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3BlcnNvbmFsW3BlcnNvbmFsLmluZGV4T2YocHJvaikgKyAxXT8ubGluayB8fCBwZXJzb25hbFswXS5saW5rfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBtYi0yIG1yLTJcIj5OZXh0IHByb2plY3Q8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHtpc1BybyAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAge3Byb2ouc2NyZWVuICYmIChcclxuICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvai5zY3JlZW59IGFsdD17XCJTY3JlZW5zaG90IG9mIFwiICsgcHJvai5jdXJyZW50fSBjbGFzc05hbWU9XCJzY3JvbGxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAge3Byb2ouY3VycmVudCAmJiA8YSBocmVmPXtwcm9qLmN1cnJlbnR9IHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImJ0biBtYi0yIG1yLTJcIj5MaXZlIHdlYnNpdGU8L2E+fVxyXG4gICAgICAgICAgICAgIHtwcm9qLnBhc3QgJiYgPGEgaHJlZj17cHJvai5wYXN0fSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJidG4gbWItMiBtci0yXCI+U2l0ZSBhcyBJIGxlZnQgaXQ8L2E+fVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Zlc3Npb25hbFtwcm9mZXNzaW9uYWwuaW5kZXhPZihwcm9qKSArIDFdPy5saW5rIHx8IHByb2Zlc3Npb25hbFswXS5saW5rfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBtYi0yIG1yLTJcIj5OZXh0IHByb2plY3Q8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj48YSBjbGFzc05hbWU9XCJidG5cIj5CYWNrIHRvIHByb2plY3RzPC9hPjwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7fVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBwb3N0cyA9IHByb2plY3RzLm1hcCh4ID0+IHgudGl0bGUpO1xyXG4gIGNvbnN0IHBhdGhzID0gcG9zdHMubWFwKChwb3N0KSA9PiAoe1xyXG4gICAgcGFyYW1zOiB7IHNsdWc6IHBvc3QgfSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=