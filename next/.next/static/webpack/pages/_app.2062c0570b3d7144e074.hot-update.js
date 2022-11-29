webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/indext.js":
/*!****************************!*\
  !*** ./reducers/indext.js ***!
  \****************************/
/*! exports provided: loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var initialState = {
  user: {},
  post: {
    mainPosts: []
  }
};
var loginAction = function loginAction(data) {
  return {
    type: 'LOG_IN',
    data: data
  };
};
var logoutAction = function logoutAction(data) {
  return {
    type: 'LOG_OUT'
  };
};

// (이전상태, 액션) => 다음상태
var rootReducer = function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
      console.log('HYDRATE');
      return _objectSpread(_objectSpread({}, state), action.payload);
    case 'LOG_IN':
      return _objectSpread(_objectSpread({}, state), {}, {
        user: _objectSpread(_objectSpread({}, state.user), {}, {
          isLoggedIn: true,
          name: action.data
        })
      });
    case 'LOG_OUT':
      return _objectSpread(_objectSpread({}, state), {}, {
        user: _objectSpread(_objectSpread({}, state.user), {}, {
          isLoggedIn: false,
          name: null
        })
      });
    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXh0LmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInVzZXIiLCJwb3N0IiwibWFpblBvc3RzIiwibG9naW5BY3Rpb24iLCJkYXRhIiwidHlwZSIsImxvZ291dEFjdGlvbiIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJpc0xvZ2dlZEluIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZDO0FBRTdDLElBQU1BLFlBQVksR0FBRztFQUNqQkMsSUFBSSxFQUFFLENBRU4sQ0FBQztFQUNEQyxJQUFJLEVBQUU7SUFDRkMsU0FBUyxFQUFFO0VBQ2Y7QUFDSixDQUFDO0FBRU0sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQVcsQ0FBSUMsSUFBSSxFQUFLO0VBQ2pDLE9BQU87SUFDSEMsSUFBSSxFQUFFLFFBQVE7SUFDZEQsSUFBSSxFQUFKQTtFQUNKLENBQUM7QUFDTCxDQUFDO0FBRU0sSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQVksQ0FBSUYsSUFBSSxFQUFLO0VBQ2xDLE9BQU87SUFDSEMsSUFBSSxFQUFFO0VBQ1YsQ0FBQztBQUNMLENBQUM7O0FBRUQ7QUFDQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxHQUFxQztFQUFBLElBQWpDQyxLQUFLLHVFQUFHVCxZQUFZO0VBQUEsSUFBRVUsTUFBTTtFQUM3QyxRQUFRQSxNQUFNLENBQUNKLElBQUk7SUFDZixLQUFLSywwREFBTztNQUNSQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7TUFDdEIsdUNBQVlKLEtBQUssR0FBS0MsTUFBTSxDQUFDSSxPQUFPO0lBQ3hDLEtBQUssUUFBUTtNQUNULHVDQUNPTCxLQUFLO1FBQ1JSLElBQUksa0NBQ0dRLEtBQUssQ0FBQ1IsSUFBSTtVQUNiYyxVQUFVLEVBQUUsSUFBSTtVQUNoQkMsSUFBSSxFQUFFTixNQUFNLENBQUNMO1FBQUk7TUFDcEI7SUFFVCxLQUFLLFNBQVM7TUFDVix1Q0FDT0ksS0FBSztRQUNSUixJQUFJLGtDQUNHUSxLQUFLLENBQUNSLElBQUk7VUFDYmMsVUFBVSxFQUFFLEtBQUs7VUFDakJDLElBQUksRUFBRTtRQUFJO01BQ2I7SUFFVDtNQUNJLE9BQU9QLEtBQUs7RUFBQztBQUV6QixDQUFDO0FBRWNELDBFQUFXLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yMDYyYzA1NzBiM2Q3MTQ0ZTA3NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICB1c2VyOiB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgcG9zdDoge1xyXG4gICAgICAgIG1haW5Qb3N0czogW10sXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiAnTE9HX0lOJyxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59XHJcbiBcclxuZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6ICdMT0dfT1VUJyxcclxuICAgIH1cclxufVxyXG5cclxuLy8gKOydtOyghOyDge2DnCwg7JWh7IWYKSA9PiDri6TsnYzsg4Htg5xcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgICAgY2FzZSAnTE9HX0lOJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLnVzZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnTE9HX09VVCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS51c2VyLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=