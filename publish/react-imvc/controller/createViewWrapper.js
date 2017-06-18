'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createViewWrapper;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function createViewWrapper(controller) {
	/**
  * ViewWrapper 把 react 组件生命周期同步到 controller 里
  * 根据 state 更新 document.title
  */
	return function (_Component) {
		_inherits(ViewWrapper, _Component);

		function ViewWrapper() {
			_classCallCheck(this, ViewWrapper);

			return _possibleConstructorReturn(this, (ViewWrapper.__proto__ || Object.getPrototypeOf(ViewWrapper)).apply(this, arguments));
		}

		_createClass(ViewWrapper, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				if (controller.componentWillMount) {
					controller.componentWillMount();
				}
			}
		}, {
			key: 'updateDocumentTitle',
			value: function updateDocumentTitle() {
				var _controller$store$get = controller.store.getState(),
				    html = _controller$store$get.html;

				if (!html) {
					return;
				}
				var title = html.title;

				if (title && title !== document.title) {
					document.title = title;
				}
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				if (controller.componentDidMount) {
					controller.componentDidMount();
				}
				if (controller.context.isClient) {
					this.updateDocumentTitle();
				}
			}
		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate() {
				if (controller.componentWillUpdate) {
					controller.componentWillUpdate.apply(controller, arguments);
				}
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate() {
				if (controller.componentDidUpdate) {
					controller.componentDidUpdate.apply(controller, arguments);
				}
				if (controller.context.isClient) {
					this.updateDocumentTitle();
				}
			}
		}, {
			key: 'shouldComponentUpdate',
			value: function shouldComponentUpdate() {
				if (controller.shouldComponentUpdate) {
					var result = controller.shouldComponentUpdate.apply(controller, arguments);
					return result === false ? false : true;
				}
				return true;
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				if (controller.componentWillUnmount) {
					controller.componentWillUnmount();
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var View = controller.View;

				return _react2.default.createElement(View, this.props);
			}
		}]);

		return ViewWrapper;
	}(_react.Component);
}