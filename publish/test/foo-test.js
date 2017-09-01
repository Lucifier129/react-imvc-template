'use strict';

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

describe('react-imvc test', function () {
	it('should not throw error', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
		var result;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return 1;

					case 2:
						_context.t0 = _context.sent;
						result = _context.t0 + 1;

						(0, _expect2.default)(result).toBe(2);

					case 5:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	})));
});