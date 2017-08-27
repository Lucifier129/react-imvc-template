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
    animate: function animate(animation, inElement, outElement) {
        var _this = this;

        var scrollToTop = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            inElement.classList.add('animated');
                            inElement.classList.add(animation.in);
                            outElement.classList.add('animated');
                            outElement.classList.add(animation.out);
                            _context.next = 6;
                            return Promise.all([waitForAnimationEnd(inElement), waitForAnimationEnd(outElement)]);

                        case 6:
                            if (scrollToTop) {
                                window.scrollTo(0, 0);
                            }
                            inElement.classList.remove('animated');
                            inElement.classList.remove(animation.in);
                            outElement.classList.remove('animated');
                            outElement.classList.remove(animation.out);

                        case 11:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }))();
    },
    onPageIn: function onPageIn(_ref) {
        var props = _ref.props,
            current = _ref.current,
            previous = _ref.previous;

        var animation = getAnimation(props.animation, false);
        return this.animate(animation, current, previous, true);
    },
    onPageOut: function onPageOut(_ref2) {
        var props = _ref2.props,
            current = _ref2.current,
            previous = _ref2.previous;

        var animation = getAnimation(props.animation, true);
        return this.animate(animation, current, previous, false);
    }
});


function getAnimation(inAnimation, isPageOut) {
    var outAnimation = inAnimation.replace('In', 'Out');
    var animation = {
        in: inAnimation,
        out: outAnimation
    };
    var key = isPageOut ? 'in' : 'out';

    if (isPageOut) {
        if (animation.in.includes('Up')) {
            animation.in = animation.in.replace('Up', 'Down');
            animation.out = animation.out.replace('Up', 'Down');
        } else if (animation.in.includes('Down')) {
            animation.in = animation.in.replace('Down', 'Up');
            animation.out = animation.out.replace('Down', 'Up');
        }
        if (animation.in.includes('Left')) {
            animation.in = animation.in.replace('Left', 'Right');
        } else if (animation.in.includes('Right')) {
            animation.in = animation.in.replace('Right', 'Left');
        }
    } else {
        if (animation.in.includes('Left')) {
            animation.out = animation.out.replace('Left', 'Right');
        } else if (animation.in.includes('Right')) {
            animation.out = animation.out.replace('Right', 'Left');
        }
    }

    return animation;
}

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