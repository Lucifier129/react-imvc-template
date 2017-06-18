'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseController = require('../share/BaseController');

var _BaseController2 = _interopRequireDefault(_BaseController);

var _view = require('./view');

var _view2 = _interopRequireDefault(_view);

var _model = require('./model');

var model = _interopRequireWildcard(_model);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// 从 model 里取出初始化状态，和 actions 函数
var initialState = model.initialState,
    actions = _objectWithoutProperties(model, ['initialState']);

var Test = function (_Controller) {
  _inherits(Test, _Controller);

  function Test() {
    var _ref,
        _this4 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Test);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Test.__proto__ || Object.getPrototypeOf(Test)).call.apply(_ref, [this].concat(args))), _this), _this.preload = {
      test: '/app-template/css/test.css'
    }, _this.View = _view2.default, _this.initialState = initialState, _this.actions = actions, _this.handleIncre = function (event) {
      /**
      * controller 里封装了几个实用对象，下面是其参考文档
      * history doc:https://github.com/Lucifier129/history/tree/master/docs
      * store doc: https://github.com/Lucifier129/relite#readme
      * fetch doc: https://github.com/github/fetch#table-of-contents
      */
      var _this2 = _this,
          history = _this2.history,
          store = _this2.store,
          fetch = _this2.fetch;

      var state = store.getState();
      var INCREMENT = store.actions.INCREMENT;

      INCREMENT(state.num // 调用 action，更新 store，触发自动更新 view
      );
    }, _this.handleDecre = function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(event) {
        var _this3, store, state, UPDATE_STATE;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // 如果数据处理比较简单，
                // 可以使用内置的 action UPDATE_STATE 直接将新状态合并到 state
                _this3 = _this, store = _this3.store;
                state = store.getState();
                UPDATE_STATE = store.actions.UPDATE_STATE;
                _context.next = 5;
                return new Promise(function (resolve) {
                  return setTimeout(resolve, 1000);
                });

              case 5:
                UPDATE_STATE({
                  count: state.count - state.num
                });

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this4);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.handleInputChange = function (path, currentValue, oldValue) {
      switch (path) {
        case 'num':
          // 更新 num，必须为数字类型，否则用旧值
          return Number(currentValue) || oldValue;
      }
      return currentValue;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  } // React 根组件
  // 初始化状态
  // action 函数

  // 事件处理函数以 handleXXX 开头，且必须为箭头函数写法


  /**
  * 特殊的 handle，对 Input 组件的值做预处理
  * @param  {[string]} path     更新 state 的路径
  * @param  {[any]} currentValue input 组件当前的 value
  * @param  {[any]} oldValue     state 里当前的值
  * @return {[any]}              返回值，将被用以更新 state[path]
  */


  _createClass(Test, [{
    key: 'shouldComponentCreate',


    // 生命周期方法

    // 如果该仿佛返回 false，将不会渲染，支持 async/await
    value: function () {
      var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('shouldComponentCreate');

              case 1:
              case 'end':
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

    // 组件将创建，可以在这里发 ajax 请求，获取首屏数据

  }, {
    key: 'componentWillCreate',
    value: function () {
      var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
        var UPDATE_STATE, state, test;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                UPDATE_STATE = this.store.actions.UPDATE_STATE;
                state = this.store.getState();
                _context3.next = 4;
                return this.fetch(state.api.test);

              case 4:
                test = _context3.sent;

                UPDATE_STATE({ test: test });

              case 6:
              case 'end':
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

    // react 组件的生命周期

  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('cookie', this.cookie('test_cookie'));
      this.removeCookie('test_cookie'
      // this.cookie('test_cookie', 123, {
      //   expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
      // })
      );
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {}
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}

    // 在跳转之前调用，return 的内容将作为抱大腿提示

  }, {
    key: 'pageWillLeave',
    value: function pageWillLeave() {
      return 'pageWillLeave';
    }

    // 在窗口关闭前调用，return 的内容将作为抱大腿提示

  }, {
    key: 'windowWillUnload',
    value: function windowWillUnload() {
      return 'windowWillUnload';
    }
  }]);

  return Test;
}(_BaseController2.default);

exports.default = Test;