webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_useinput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useinput */ "./hooks/useinput.js");


var _templateObject,
  _templateObject2,
  _this = undefined,
  _jsxFileName = "C:\\Users\\\uAD8C\uD558\uC740\\OneDrive\\Desktop\\github\\Next\\next\\components\\LoginForm.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    margin-top: 10px;\n"])));
_c = ButtonWrapper;
var FormWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"])(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    margin-top: 10px;\n"])));
_c2 = FormWrapper;
var LoginForm = function LoginForm(_ref) {
  _s();
  var setIsLoggedIn = _ref.setIsLoggedIn;
  var _useInput = useInput(''),
    _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
    id = _useInput2[0],
    onChangeId = _useInput2[1];
  var _useInput3 = useInput(''),
    _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
    password = _useInput4[0],
    onChangePassword = _useInput4[1];
  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);
  return __jsx(FormWrapper, {
    onFinish: onSubmitForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "user-id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, "\uC544\uC774\uB514"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    name: "user-id",
    value: id,
    onChange: onChangeId,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "user-password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    name: "user-password",
    type: "password",
    value: password,
    onChange: onChangePassword,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  })), __jsx(ButtonWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, "\uB85C\uADF8\uC778"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 38
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 41
    }
  }, "\uD68C\uC6D0\uAC00\uC785")))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }));
};
_s(LoginForm, "XDBWGSalF7xldTftSzZVSBOwwyA=", true);
_c3 = LoginForm;
LoginForm.propTypes = {
  setIsLoggedIn: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);
var _c, _c2, _c3;
$RefreshReg$(_c, "ButtonWrapper");
$RefreshReg$(_c2, "FormWrapper");
$RefreshReg$(_c3, "LoginForm");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./hooks/useinput.js":
/*!***************************!*\
  !*** ./hooks/useinput.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();

/* harmony default export */ __webpack_exports__["default"] = (_s(function () {
  _s();
  var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue),
    value = _useState[0],
    setValue = _useState[1];
  var handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setId(e.target.value);
  }, []);
  return [value, handler];
}, "zwfZiF3C83B9WQnByKaImAoFfFg="));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZWlucHV0LmpzIl0sIm5hbWVzIjpbIkJ1dHRvbldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtV3JhcHBlciIsIkZvcm0iLCJMb2dpbkZvcm0iLCJzZXRJc0xvZ2dlZEluIiwidXNlSW5wdXQiLCJpZCIsIm9uQ2hhbmdlSWQiLCJwYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJvblN1Ym1pdEZvcm0iLCJ1c2VDYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImluaXRpYWxWYWx1ZSIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZXIiLCJlIiwic2V0SWQiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUNsQjtBQUNRO0FBQ2Q7QUFDVTtBQUNFO0FBRXpDLElBQU1BLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBRyx3S0FFL0I7QUFBQyxLQUZJRixhQUFhO0FBSW5CLElBQU1HLFdBQVcsR0FBR0YsaUVBQU0sQ0FBQ0cseUNBQUksQ0FBQywwS0FFL0I7QUFBQyxNQUZJRCxXQUFXO0FBSWpCLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFTLE9BQTBCO0VBQUE7RUFBQSxJQUFwQkMsYUFBYSxRQUFiQSxhQUFhO0VBQzlCLGdCQUF5QkMsUUFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQTlCQyxFQUFFO0lBQUVDLFVBQVU7RUFDckIsaUJBQXFDRixRQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBMUNHLFFBQVE7SUFBRUMsZ0JBQWdCO0VBRWpDLElBQU1DLFlBQVksR0FBR0MseURBQVcsQ0FBQyxZQUFNO0lBQ25DQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsRUFBRSxFQUFFRSxRQUFRLENBQUM7SUFDekJKLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDdkIsQ0FBQyxFQUFFLENBQUNFLEVBQUUsRUFBRUUsUUFBUSxDQUFDLENBQUM7RUFFbEIsT0FDSSxNQUFDLFdBQVc7SUFBQyxRQUFRLEVBQUVFLFlBQWE7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNoQztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0k7SUFBTyxPQUFPLEVBQUMsU0FBUztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLHdCQUFZLEVBQ3BDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBTSxFQUNOLE1BQUMsMENBQUs7SUFBQyxJQUFJLEVBQUMsU0FBUztJQUFDLEtBQUssRUFBRUosRUFBRztJQUFDLFFBQVEsRUFBRUMsVUFBVztJQUFDLFFBQVE7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFFLENBQy9ELEVBQ047SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNJO0lBQU8sT0FBTyxFQUFDLGVBQWU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSw4QkFBYSxFQUMzQztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQU0sRUFDTixNQUFDLDBDQUFLO0lBQ0YsSUFBSSxFQUFDLGVBQWU7SUFDcEIsSUFBSSxFQUFDLFVBQVU7SUFDZixLQUFLLEVBQUVDLFFBQVM7SUFDaEIsUUFBUSxFQUFFQyxnQkFBaUI7SUFDM0IsUUFBUTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQ1YsQ0FDQSxFQUNOLE1BQUMsYUFBYTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ1YsTUFBQywyQ0FBTTtJQUFDLElBQUksRUFBQyxTQUFTO0lBQUMsUUFBUSxFQUFDLFFBQVE7SUFBQyxPQUFPLEVBQUUsS0FBTTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLHdCQUFhLEVBQ3JFLE1BQUMsZ0RBQUk7SUFBQyxJQUFJLEVBQUMsU0FBUztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQUM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUFHLE1BQUMsMkNBQU07SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSw4QkFBYyxDQUFJLENBQU8sQ0FDNUMsRUFDaEI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUVNLENBQ0k7QUFFdEIsQ0FBQztBQUFBLEdBcENLTixTQUFTO0FBQUEsTUFBVEEsU0FBUztBQXNDZkEsU0FBUyxDQUFDVyxTQUFTLEdBQUc7RUFDbEJWLGFBQWEsRUFBRVcsaURBQVMsQ0FBQ0MsSUFBSSxDQUFDQztBQUNsQyxDQUFDO0FBRWNkLHdFQUFTLEVBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEcUI7QUFFL0IsOEVBQXlCO0VBQUE7RUFBQSxJQUF4QmUsWUFBWSx1RUFBRyxJQUFJO0VBQy9CLGdCQUEwQkMsc0RBQVEsQ0FBQ0QsWUFBWSxDQUFDO0lBQXpDRSxLQUFLO0lBQUVDLFFBQVE7RUFDdEIsSUFBTUMsT0FBTyxHQUFHWCx5REFBVyxDQUFDLFVBQUNZLENBQUMsRUFBSztJQUMvQkMsS0FBSyxDQUFDRCxDQUFDLENBQUNFLE1BQU0sQ0FBQ0wsS0FBSyxDQUFDO0VBQ3pCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDTixPQUFPLENBQUNBLEtBQUssRUFBRUUsT0FBTyxDQUFDO0FBQzNCLENBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS5hZjJiMWE2ZGFlMDY4ZGY3MGJhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB1c2VpbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlaW5wdXRcIjtcclxuXHJcbmNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IEZvcm1XcmFwcGVyID0gc3R5bGVkKEZvcm0pYFxyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9ICh7IHNldElzTG9nZ2VkSW4gfSkgPT4ge1xyXG4gICAgY29uc3QgW2lkLCBvbkNoYW5nZUlkXSA9IHVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXRGb3JtID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkLCBwYXNzd29yZCk7XHJcbiAgICAgICAgc2V0SXNMb2dnZWRJbih0cnVlKTtcclxuICAgIH0sIFtpZCwgcGFzc3dvcmRdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtV3JhcHBlciBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1pZFwiPuyVhOydtOuUlDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwidXNlci1pZFwiIHZhbHVlPXtpZH0gb25DaGFuZ2U9e29uQ2hhbmdlSWR9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItcGFzc3dvcmRcIj7ruYTrsIDrsojtmLg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXItcGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfSBcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8QnV0dG9uV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIGxvYWRpbmc9e2ZhbHNlfT7roZzqt7jsnbg8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+PGE+PEJ1dHRvbj7tmozsm5DqsIDsnoU8L0J1dHRvbj48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L0J1dHRvbldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Zvcm1XcmFwcGVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuTG9naW5Gb3JtLnByb3BUeXBlcyA9IHtcclxuICAgIHNldElzTG9nZ2VkSW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07IiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoaW5pdGlhbFZhbHVlID0gbnVsbCkgPT4ge1xyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUpO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgc2V0SWQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIFt2YWx1ZSwgaGFuZGxlcl07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9