'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createViewManager = require('./createViewManager');

var _createViewManager2 = _interopRequireDefault(_createViewManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (0, _createViewManager2.default)({
    onPageIn: function onPageIn(_ref) {
        var _this = this;

        var props = _ref.props,
            current = _ref.current;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
            var animation, classList;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            animation = props.animation;
                            classList = current.classList;

                            classList.add('animated');
                            classList.add(animation);
                            _context.next = 6;
                            return waitForAnimationEnd(current);

                        case 6:
                            window.scrollTo(0, 0);
                            classList.remove('animated');
                            classList.remove(animation);

                        case 9:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }))();
    },
    onPageOut: function onPageOut(_ref2) {
        var _this2 = this;

        var props = _ref2.props,
            previous = _ref2.previous;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
            var animation, classList;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            animation = props.animation.replace('In', 'Out');
                            classList = previous.classList;

                            classList.add('animated');
                            classList.add(animation);
                            _context2.next = 6;
                            return waitForAnimationEnd(previous);

                        case 6:
                            classList.remove('animated');
                            classList.remove(animation);

                        case 8:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        }))();
    }
});


function waitForAnimationEnd(node) {
    return new Promise(function (resolve) {
        var handleAnimationEnd = function handleAnimationEnd(_ref3) {
            var currentTarget = _ref3.currentTarget,
                target = _ref3.target;

            if (currentTarget !== target) {
                return;
            }
            node.removeEventListener('animationEnd', handleAnimationEnd);
            node.removeEventListener('webkitAnimationEnd', handleAnimationEnd);
            resolve();
        };
        node.addEventListener('animationEnd', handleAnimationEnd);
        node.addEventListener('webkitAnimationEnd', handleAnimationEnd);
    });
}