'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _controller = require('react-imvc/controller');

var _controller2 = _interopRequireDefault(_controller);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _util = require('react-imvc/util');

var _util2 = _interopRequireDefault(_util);

var _Menu = require('../component/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _component = require('react-imvc/component');

var _rcUpload = require('rc-upload');

var _rcUpload2 = _interopRequireDefault(_rcUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var validator = {
  isNotEmpty: function isNotEmpty(str) {
    return !!str;
  },
  isEmail: function isEmail(str) {
    return (/.*@.*/.test(str)
    );
  },
  isNumeric: function isNumeric(str) {
    return !isNaN(Number(str));
  }

  /**
   * 文档列表
   * history doc:https://github.com/Lucifier129/history/tree/master/docs
   * store doc: https://github.com/Lucifier129/relite#readme
   * fetch doc: https://github.com/github/fetch#table-of-contents
   * react doc: https://facebook.github.io/react/
   * express doc: http://expressjs.com/
   */
};
var Home = function (_Controller) {
  _inherits(Home, _Controller);

  function Home() {
    var _ref,
        _this4 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.preload = {
      controller: '/app-demo/home/controller.js'
    }, _this.View = View, _this.initialState = {
      text: '首页',
      count: 10,
      isOn: true,
      stats: null,
      date: '',
      form1: {
        name: '',
        pass: ''
      },
      form2: {
        name: {
          value: '',
          isValid: false,
          isWarn: false
        },
        email: {
          value: '',
          isValid: false,
          isWarn: false
        },
        pass: {
          value: '',
          isValid: false,
          isWarn: false
        },
        number: {
          value: '',
          isValid: false,
          isWarn: false
        }
      },
      form3: [{
        name: '1',
        value: '1'
      }, {
        name: '2',
        value: '2'
      }, {
        name: '3',
        value: '3'
      }],
      imgSrc: null
    }, _this.actions = {
      INCREMENT: function INCREMENT(state) {
        return _extends({}, state, {
          count: state.count + 1
        });
      },
      DECREMENT: function DECREMENT(state) {
        return _extends({}, state, {
          count: state.count - 1
        });
      },
      INCREMENT_ASYNC: function INCREMENT_ASYNC(state) {
        var _this2 = this;

        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return sleep(1000);

                case 2:
                  return _context.abrupt('return', _this2.INCREMENT);

                case 3:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      },
      DECREMENT_ASYNC: function DECREMENT_ASYNC(state) {
        var _this3 = this;

        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return sleep(1000);

                case 2:
                  return _context2.abrupt('return', _this3.DECREMENT);

                case 3:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3);
        }))();
      },
      TOGGLE_TIMER: function TOGGLE_TIMER(state) {
        return _extends({}, state, {
          isOn: !state.isOn
        });
      }
    }, _this.handleIncre = function () {
      var INCREMENT = _this.store.actions.INCREMENT;

      INCREMENT();
    }, _this.handleIncreAsync = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
      var INCREMENT_ASYNC;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              INCREMENT_ASYNC = _this.store.actions.INCREMENT_ASYNC;
              _context3.next = 3;
              return INCREMENT_ASYNC();

            case 3:
              console.log('异步加一完毕');

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this4);
    })), _this.handleDecre = function () {
      var DECREMENT = _this.store.actions.DECREMENT;

      DECREMENT();
    }, _this.handleDecreAsync = function () {
      var DECREMENT_ASYNC = _this.store.actions.DECREMENT_ASYNC;

      DECREMENT_ASYNC();
    }, _this.handleToggle = function () {
      var TOGGLE_TIMER = _this.store.actions.TOGGLE_TIMER;

      TOGGLE_TIMER();

      var _this$store$getState = _this.store.getState(),
          isOn = _this$store$getState.isOn;

      if (isOn) {
        _this.setTimer();
      } else {
        _this.clearTimer();
      }
    }, _this.handleUpload = function (data) {
      var FileFtpPath = data.FileFtpPath;
      var UPDATE_STATE = _this.store.actions.UPDATE_STATE;

      var imgSrc = _this.ftpToHttp(FileFtpPath);
      UPDATE_STATE({
        imgSrc: imgSrc
      });
    }, _this.handleCheckAll = function (event) {
      var state = _this.store.getState();
      var UPDATE_STATE = _this.store.actions.UPDATE_STATE;


      var form2 = _util2.default.mapValues(state.form2, function (item, key) {
        return _extends({}, item, {
          isWarn: !item.isValid
        });
      });
      UPDATE_STATE({ form2: form2 });
    }, _this.handleClearWarning = function (event) {
      var state = _this.store.getState();
      var UPDATE_STATE = _this.store.actions.UPDATE_STATE;


      var form2 = _util2.default.mapValues(state.form2, function (item, key) {
        return _extends({}, item, {
          isWarn: false
        });
      });

      UPDATE_STATE({ form2: form2 });

      var postForm = _util2.default.mapValues(state.form2, function (item) {
        return item.value;
      });
      console.log('postForm', postForm);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'shouldComponentCreate',
    value: function shouldComponentCreate() {
      console.log('shouldComponentCreate');
    }
  }, {
    key: 'componentWillCreate',
    value: function componentWillCreate() {
      console.log('componentWillCreate');
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      console.log('componentWillMount');
    }
  }, {
    key: 'componentDidMount',
    value: function () {
      var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log('componentDidMount'
                // this.setTimer()
                // let data = await this.handleShowLoginPopup()
                // console.log('login-data', data)
                );
              case 1:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function componentDidMount() {
        return _ref3.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      console.log('componentWillUpdate');
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      console.log('componentDidUpdate');
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      console.log('shouldComponentUpdate');
    }
    // 在跳转到别的页面之前，清理定时器

  }, {
    key: 'pageWillLeave',
    value: function pageWillLeave() {
      this.clearTimer();
      console.log('pageWillLeave');
    }
  }, {
    key: 'windowWillUnload',
    value: function windowWillUnload() {
      console.log('windowWillUnload');
    }
  }, {
    key: 'setTimer',
    value: function setTimer() {
      var INCREMENT = this.store.actions.INCREMENT;
      // 每秒加1

      this.timer = setInterval(INCREMENT, 1000);
    }
  }, {
    key: 'clearTimer',
    value: function clearTimer() {
      clearInterval(this.timer);
    }
  }]);

  return Home;
}(_controller2.default);

exports.default = Home;


function sleep() {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;

  return new Promise(function (resolve) {
    return setTimeout(resolve, timeout);
  });
}

function View(_ref4) {
  var state = _ref4.state,
      handlers = _ref4.handlers;
  var form2 = state.form2;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Menu2.default, null),
    _react2.default.createElement(
      'h1',
      null,
      state.text,
      ' ',
      state.count
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'button',
        { onClick: handlers.handleIncre },
        '\u52A0\u4E00'
      ),
      _react2.default.createElement(
        'button',
        { onClick: handlers.handleDecre },
        '\u51CF\u4E00'
      ),
      _react2.default.createElement(
        'button',
        { onClick: handlers.handleIncreAsync },
        '\u5F02\u6B65\u52A0\u4E00'
      ),
      _react2.default.createElement(
        'button',
        { onClick: handlers.handleDecreAsync },
        '\u5F02\u6B65\u51CF\u4E00'
      ),
      _react2.default.createElement(
        'button',
        { onClick: handlers.handleToggle },
        state.isOn ? '关闭定时器' : '打开定时器'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      'form1-name:',
      _react2.default.createElement(_component.Input, { name: 'form1.name' }),
      'form1-pass:',
      _react2.default.createElement(_component.Input, { name: 'form1.pass' })
    ),
    _react2.default.createElement(
      'div',
      null,
      'form2-name:',
      _react2.default.createElement(_component.Input, {
        name: 'form2.name',
        check: validator.isNotEmpty,
        style: {
          borderColor: form2.name.isWarn ? 'red' : null
        }
      }),
      'form2-email:',
      _react2.default.createElement(_component.Input, {
        name: 'form2.email',
        check: validator.isEmail,
        style: {
          borderColor: form2.email.isWarn ? 'red' : null
        }
      }),
      'form2-pass:',
      _react2.default.createElement(_component.Input, {
        name: 'form2.pass',
        check: validator.isNotEmpty,
        style: {
          borderColor: form2.pass.isWarn ? 'red' : null
        }
      }),
      'form2-number:',
      _react2.default.createElement(_component.Input, {
        name: 'form2.number',
        check: validator.isNumeric,
        style: {
          borderColor: form2.number.isWarn ? 'red' : null
        }
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'button',
        { onClick: handlers.handleCheckAll },
        '\u68C0\u67E5 form2 \u7684\u5168\u90E8\u8868\u5355\u7684\u6B63\u786E\u6027'
      ),
      ' ',
      _react2.default.createElement(
        'button',
        { onClick: handlers.handleClearWarning },
        '\u6E05\u7A7A form2 \u7684\u5168\u90E8\u8868\u5355\u8B66\u793A\u6837\u5F0F'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      state.form3.map(function (form, index) {
        return _react2.default.createElement(
          'div',
          { key: index },
          'name: ',
          _react2.default.createElement(_component.Input, { name: 'form3.' + index + '.name' }),
          'value: ',
          _react2.default.createElement(_component.Input, { name: 'form3.' + index + '.value' })
        );
      })
    ),
    !!state.imgSrc && _react2.default.createElement('img', { src: state.imgSrc }),
    _react2.default.createElement('div', null),
    _react2.default.createElement(_component.Preload, { name: 'controller' })
  );
}