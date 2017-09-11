"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _controller = require("react-imvc/controller");

var _controller2 = _interopRequireDefault(_controller);

var _View = require("./View");

var _View2 = _interopRequireDefault(_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 生命周期方法的调用顺序为
 * getInitialState ->
 * shouldComponentCreate -> 
 * componentWillCreate -> 
 * componentDidMount -> 
 * componentWillUnmount
 */
var LifeCycleMethod = function (_Controller) {
  _inherits(LifeCycleMethod, _Controller);

  function LifeCycleMethod() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LifeCycleMethod);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LifeCycleMethod.__proto__ || Object.getPrototypeOf(LifeCycleMethod)).call.apply(_ref, [this].concat(args))), _this), _this.View = _View2.default, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LifeCycleMethod, [{
    key: "getInitialState",

    /**
     * 
     * 获取初始化状态
     * Model 里的 initialState 通常是静态的
     * 有时我们需要动态地计算出初始化状态
     * getInitialState 生命周期方法会拿到静态的 initialState
     * 支持 async/await，可以阻塞后续的生命周期方法
     * 该方法在服务端执行过的话，就不会在浏览器端再执行
     */
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(initialState) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('getInitialState');
                return _context.abrupt("return", initialState);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialState(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialState;
    }()
    /**
     * 是否创建和渲染组件
     * 如果返回 false，将不会渲染
     * 注意，return false 前应该用 this.redirect 重定向到别处
     * 支持 async/await，可以阻塞后续的生命周期方法
     * 该方法在服务端执行过的话，就不会在浏览器端再执行
     * 但 state 会在浏览器端复用
     */

  }, {
    key: "shouldComponentCreate",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('shouldComponentCreate');

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function shouldComponentCreate() {
        return _ref3.apply(this, arguments);
      }

      return shouldComponentCreate;
    }()
    /**
     * 组件即将创建
     * 在组件创建前使用 fetch 方法获取首屏数据是常用做法
     * 支持 async/await，可以阻塞后续的生命周期方法
     * 该方法在服务端执行过的话，就不会在浏览器端再执行
     * 但 state 会在浏览器端复用
     */

  }, {
    key: "componentWillCreate",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log('componentWillCreate');

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentWillCreate() {
        return _ref4.apply(this, arguments);
      }

      return componentWillCreate;
    }()

    /**
    * 组件已第一次插入 DOM 树
    * componentDidFirstMount 方法从 react 组件里 hook 到 controller 而来
    * 该生命周期触发时，通常表明用户已经看到了首屏
    * 可以在这里调用 fetch 方法获取非首屏数据
    */

  }, {
    key: "componentDidFirstMount",
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log('componentDidFirstMount');

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function componentDidFirstMount() {
        return _ref5.apply(this, arguments);
      }

      return componentDidFirstMount;
    }()

    /**
     * 组件已插入 DOM 树
     * componentDidMount 方法从 react 组件里 hook 到 controller 而来
     * 可以在这里绑定定时器
     */

  }, {
    key: "componentDidMount",
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                console.log('componentDidMount');

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function componentDidMount() {
        return _ref6.apply(this, arguments);
      }

      return componentDidMount;
    }()
    /**
     * 组件即将卸载
     * componentWillUnmount 方法从 react 组件里 hook 到 controller 而来
     * 该生命周期触发时，通常表明下一个 controller 的首屏即将显示
     * 可以在这里清除定时器等
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log('componentWillUnmount');
    }
    /**
     * 页面即将离开
     * 当页面跳转到别的 url 时，会触发该生命周期
     * 此时 view 可能还会继续存在一段时间，直到下一个 controller 的首屏渲染后替代它
     * return 一个字符串将会弹出一个 alert 框，提醒用户
     */

  }, {
    key: "pageWillLeave",
    value: function pageWillLeave() {
      console.log('pageWillLeave');
      return 'pageWillLeave';
    }
    /**
     * 窗口即将关闭
     * 该方法跟 pageWillLeave 作用类似，只是触发条件为关闭浏览器窗口
     */

  }, {
    key: "windowWillUnload",
    value: function windowWillUnload() {
      console.log('windowWillUnload');
      return 'windowWillUnload';
    }
    /**
     * 状态已经改变
     * 每当 action 函数导致 state 更新后，将触发 stateDidChange 生命周期
     * data 里包含了 action-type, action-payload, previous-state, current-state, start, end 等信息
     * 注意，当 stateDidChange 触发时，view 已经根据最新的 state 更新过了
     */

  }, {
    key: "stateDidChange",
    value: function stateDidChange(data) {
      console.log('stateDidChange', data);
    }
  }]);

  return LifeCycleMethod;
}(_controller2.default);

exports.default = LifeCycleMethod;