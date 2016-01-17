'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _googleJsapiLoader = require('./google-jsapi-loader');

var _generateId = require('./generate-id');

var _generateId2 = _interopRequireDefault(_generateId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoogleChart = function (_Component) {
  _inherits(GoogleChart, _Component);

  function GoogleChart() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, GoogleChart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(GoogleChart)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.drawChart = function () {
      var _this$props = _this.props;
      var containerId = _this$props.containerId;
      var chartType = _this$props.chartType;
      var dataTable = _this$props.data;
      var options = _this$props.options;

      if (global.google && global.google.visualization) {
        new global.google.visualization.ChartWrapper({
          chartType: chartType,
          containerId: containerId,
          dataTable: dataTable,
          options: options
        }).draw(_reactDom2.default.findDOMNode(_this));
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GoogleChart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      (0, _googleJsapiLoader.visualization)().then(function () {
        return _this2.drawChart();
      }).catch(this.props.onError);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var height = _props.height;
      var width = _props.width;

      return _react2.default.createElement('div', { style: { height: height, width: width } });
    }
  }]);

  return GoogleChart;
}(_react.Component);

GoogleChart.propTypes = {
  chartType: _react2.default.PropTypes.string.isRequired,
  containerId: _react2.default.PropTypes.string,
  data: _react2.default.PropTypes.any.isRequired,
  height: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]).isRequired,
  onError: _react2.default.PropTypes.func,
  width: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]).isRequired
};
GoogleChart.defaultProps = {
  containerId: (0, _generateId2.default)(),
  onError: function onError() {},
  options: {}
};
exports.default = GoogleChart;
