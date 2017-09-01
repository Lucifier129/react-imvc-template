'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _controller = require('react-imvc/controller');

var _controller2 = _interopRequireDefault(_controller);

var _View = require('./View');

var _View2 = _interopRequireDefault(_View);

var _Model = require('./Model');

var Model = _interopRequireWildcard(_Model);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IsomorphicFetch = function (_Controller) {
    _inherits(IsomorphicFetch, _Controller);

    function IsomorphicFetch() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, IsomorphicFetch);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IsomorphicFetch.__proto__ || Object.getPrototypeOf(IsomorphicFetch)).call.apply(_ref, [this].concat(args))), _this), _this.Model = Model, _this.View = _View2.default, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(IsomorphicFetch, [{
        key: 'componentWillCreate',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var fetch, store, state, url, ssr, UPDATE_STATE;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                fetch = this.fetch, store = this.store;
                                state = store.getState();
                                // 以 /mock/* 开头的 url 都会被转发到本地静态 json 文件里，json 后缀是自动补全的

                                url = '/mock/basic_usage/simple_mock/json/ssr';
                                _context.next = 5;
                                return fetch(url);

                            case 5:
                                ssr = _context.sent;
                                UPDATE_STATE = store.actions.UPDATE_STATE;

                                UPDATE_STATE({ ssr: ssr });

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function componentWillCreate() {
                return _ref2.apply(this, arguments);
            }

            return componentWillCreate;
        }()
    }, {
        key: 'componentDidMount',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var fetch, store, state, url, csr, UPDATE_STATE;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                fetch = this.fetch, store = this.store;
                                state = store.getState();
                                // 以 /mock/* 开头的 url 都会被转发到本地静态 json 文件里，json 后缀是自动补全的

                                url = '/mock/basic_usage/simple_mock/json/csr';
                                // 延迟一秒

                                _context2.next = 5;
                                return delay(1000);

                            case 5:
                                _context2.next = 7;
                                return fetch(url);

                            case 7:
                                csr = _context2.sent;
                                UPDATE_STATE = store.actions.UPDATE_STATE;

                                UPDATE_STATE({ csr: csr });

                            case 10:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function componentDidMount() {
                return _ref3.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }]);

    return IsomorphicFetch;
}(_controller2.default);

exports.default = IsomorphicFetch;


function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}